import {BaseTemplate} from './base';
import {utils, template} from 'stick';
import {Field} from './field';



export class Form extends BaseTemplate<HTMLFormElement> {
    
    //nodeName = "FORM";
    
    valid: boolean = true;
    
    get fields (): Field[] {
        return this.subview.bindings.filter( b => b instanceof Field);   
    }
    
    getFieldForElement (el:HTMLElement): Field {
        return utils.find<Field>(this.fields, (i) => i.editor === el);
    }
    
    getFieldForName (name: string): Field {
        return utils.find<Field>(this.fields, (i) => i.name === name);   
    }
    
    
    
    initialize () {
        
        this.el = document.createElement('form');
        this.onFormChange = this.onFormChange.bind(this);
        for (let a in utils.omit(this.attributes, [])) {
            this.el.setAttribute(a, this.attributes[a]);
        }
        
        let name = this.attributes['name'];
        
        if (name) {
            this.view.context.set(`$ui.${name}`, this);
        }

        this.section.appendChild(this.el);

        this.subview = <template.TemplateView>this.childTemplate.view(this.view.context, {
            parent: this.view
        });

        this.el.appendChild(this.subview.render());

        let fields = this.el.querySelectorAll('[name]');
        
        utils.delegate(this.el, '[name]', 'change', this.onFormChange, this);
      
        this.listenTo(this.subview.context,'change', this.onContextChange);
    }
    
    validate () {
        let fields = this.fields;
        for (let i = 0, ii = fields.length; i < ii; i++ ) {
            if (!fields[i].validate(this)) return false;
        }
        return true;
    }
    
    getValue():any {
        let fields = this.fields;
        let out = {};
        for (let i = 0, ii = fields.length; i < ii; i++ ) {
            out[fields[i].name] = fields[i].value;
        }
        return out;
    }
    
    onFormChange (e) {
        let target = e.delegateTarget;
        
        let field = this.getFieldForElement(target);
        
        if (field == null) return;
        
        field.validate(this);
      
        this.valid = this.fields.filter( e => !e.valid ).length === 0;  
        
        let $el = utils.Html.query(this.el).removeClass('valid invalid');
        if (this.valid) $el.addClass('valid');
        else $el.addClass('invalid');
        
    }
    
    update () {}
    
    onContextChange () {
        
    }
    
    destroy() {
        utils.undelegate(this.el, '[name]', 'change', this.onFormChange);
        super.destroy()
    }
   
}