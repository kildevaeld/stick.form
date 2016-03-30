import {Base} from './base';
import {utils, template} from 'stick';
import {Field} from './field';



export class Form extends Base {
    subview: template.TemplateView;
    el: HTMLFormElement;
    nodeName = "FORM";
    
    valid: boolean = true;
    
    get fields (): Field<any,any>[] {
        return this.subview.bindings.filter( b => b instanceof Field);   
    }
    
    getFieldForElement (el:HTMLElement): Field<any,any> {
        return utils.find<Field<any,any>>(this.fields, (i) => i.editor === el);
    }
    
    initialize () {
        this.el = document.createElement('form');
        this.onFormChange = this.onFormChange.bind(this);
        for (let a in utils.omit(this.attributes, [])) {
            this.el.setAttribute(a, this.attributes[a]);
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
    
    onFormChange (e) {
        let target = e.delegateTarget;
        
        let field = this.getFieldForElement(target);
       
        if (field == null) return;
       
        field.validate();
      
        this.valid = this.fields.filter( e => !e.valid ).length === 0;  
        
        let $el = utils.Html.query(this.el).removeClass('valid invalid');
        if (this.valid) $el.addClass('valid');
        else $el.addClass('invalid');
        
    }
    
    
    onContextChange () {
        
    }
    
    destroy() {
        utils.undelegate(this.el, '[name]', 'change', this.onFormChange);
        super.destroy()
    }
   
}