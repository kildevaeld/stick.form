import {BaseTemplate} from './base';
import {utils} from 'stick';
import {Field} from './field';
import {TemplateView, Assignment, Call} from 'stick/lib/template';


export class Form extends BaseTemplate<HTMLFormElement> {  
    nodeName = "FORM";
    
    valid: boolean = true;
    
    get fields (): Field[] {
        return <any>this.subview.bindings.filter( b => b instanceof Field);   
    }
    
    getFieldForElement (el:HTMLElement): Field {
        return utils.find<Field>(this.fields, (i) => i.element === el);
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

        this.subview = <TemplateView>this.childTemplate.view(this.view.context, {
            parent: this.view
        });

        this.el.appendChild(this.subview.render());
     
        this.fields.forEach(e => {
            this.listenTo(e, 'change', this.onFormChange);
        })
        
        utils.addEventListener(this.el, 'submit', this._onSubmit);
      
        this.listenTo(this.subview.context,'change', this.onContextChange);
    }

   private  _onSubmit (e) {
        e.preventDefault();
        return false;
    }
    
    validate () {
        let fields = this.fields;
        let errors = [];
        for (let i = 0, ii = fields.length; i < ii; i++ ) {
            let e = fields[i].validate(this);
            if (e.length > 0) errors.push(e);
            
        }
        
        this.valid = errors.length === 0;
        
        if (this.valid) {
            this.triggerMethod('valid');
        } else {
            this.triggerMethod('invalid');
        }
        
        return errors;
    }
    
    getValue():any {
        let fields = this.fields;
        let out = {};
        for (let i = 0, ii = fields.length; i < ii; i++ ) {
            out[fields[i].name] = fields[i].value;
        }
        return out;
    }
    
    setValue(obj:any) {
        let fields = this.fields;
        for (let i = 0, ii = fields.length; i < ii; i++) {
            if (obj == null) fields[i].value = null;
            else {
                if (utils.has(obj, fields[i].name)) {
                    fields[i].value = obj[fields[i].name];
                }
            }
        }
    }
    
    onFormChange (field) {
        
        this.trigger('change', field);
        
        field.validate(this);
        
        this.valid = this.fields.filter( e => !e.valid ).length === 0;
        
        if (!this.valid) {
            this.triggerMethod('invalid', field);
        } else {
            this.triggerMethod('valid', field);
        }
        
        let $el = utils.Html.query(this.el).removeClass('valid invalid');
        if (this.valid) $el.addClass('valid');
        else $el.addClass('invalid');
        
    }
    
    triggerMethod (event: string, ...args:any[]) {
        this.trigger(event, this, ...args);
        
        let cb = <any>this.attributes['on' + event];
        
        if (!cb) return;
        
         if (cb instanceof Assignment) {
            cb.assign();
        } else if (cb instanceof Call) {
            cb.call();
        } else if (typeof cb === 'function') {
            cb(...args);
        }
        
    }
    
    update () {}
    
    onContextChange () {
        
    }
    
    destroy() {
        utils.removeEventListener(this.el, 'submit', this._onSubmit);
        if (this.subview) {
            this.subview.$destroy();
            this.subview = void 0;
        }
        
        super.destroy()
    }
   
}