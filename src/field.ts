
import {Base, BaseTemplate} from './base';
import {Editor} from './editor';
import {utils, template} from 'stick';
import {validate} from './validator';
import {Form} from './form';

export abstract class Field<T, U> extends BaseTemplate<HTMLDivElement> {
    tagName = "DIV";
    get editor(): HTMLElement {
        let el = <HTMLElement>this.el.querySelector('[name]');
        let fields = this.subview.bindings.filter( b => b instanceof Editor);
        let field = utils.find<Field<any,any>>(fields, (i) => i.el === el)
        
        return el;
    } 
    
    get name(): string {
        return this.editor.getAttribute('name');
    }
    
    valid: boolean = true;
    
    
    initialize () {
        
        this.el = document.createElement('div');

        for (let a in utils.omit(this.attributes, [])) {
            this.el.setAttribute(a, this.attributes[a]);
        }

        this.section.appendChild(this.el);

        this.subview = <template.TemplateView>this.childTemplate.view(this.view.context, {
            parent: this.view
        });
        
        

        this.el.appendChild(this.subview.render());
        
        let errorField = document.createElement('div');
        utils.addClass(errorField, "help-block")
        this.el.appendChild(errorField);

    }
   
    update () {}
    
    
    validate (form:Form) {
        let el = <HTMLElement>this.el.querySelector('[name]');
        let fields = this.subview.bindings.filter( b => b instanceof Editor);
        let field = utils.find<Editor<any>>(fields, (i) => i.el === el)
        
        
        let errors;
        if (field) {
            errors = field.validate();
        } else {
            errors = validate(el);
        }
        
        this.setErrors(errors);
        
        
    }

    setErrors (errors:Error[]) {
        let el = utils.Html.query(this.el);
        el.removeClass('has-success has-error');
        
        let help = el.find('.help-block');
        
        if (errors.length === 0) {
            el.addClass('has-success');
            help.html('');    
            this.valid = true;
        } else {
            el.addClass('has-error');
            
            let s = errors.map( e => e.message);
            
            if (s.length > 1) {
                let ul = document.createElement('ul');
                help.get(0).appendChild(ul);
                help = utils.Html.query(ul);
                
                s = s.map( e => '<li>' + e + '</li>');
                
            }
            
            help.html(s.join(''));
            
            this.valid = false;
        }
    }

}