
import {Base, BaseTemplate} from './base';
import {Editor} from './editor';
import {utils} from 'stick';
import {TemplateView} from 'stick/lib/template';
import {validate, getValue, setValue} from './validator';
import {Form} from './form';
import * as templ from './template';

export abstract class Field extends BaseTemplate<HTMLDivElement> {
    nodeName = "DIV";
    errorField: HTMLDivElement;
    get editor(): HTMLElement {
        let el = <HTMLElement>this.el.querySelector('[name]');
        let fields = this.subview.bindings.filter( b => b instanceof Editor);
        let field = utils.find<Editor>(<any>fields, (i) => i.el === el)
        
        return el;
    } 
    
    get name(): string {
        return this.editor.getAttribute('name');
    }
    
    get value(): any {
        let el = <HTMLElement>this.el.querySelector('[name]');
        let fields = this.subview.bindings.filter( b => b instanceof Editor);
        let field = utils.find<Editor>(<any>fields, (i) => i.el === el)
        
        if (field) {
            return field.value;
        } else {
            return getValue(el);
        }
        
    }
    
    set value(value:any) {
        let el = <HTMLElement>this.el.querySelector('[name]');
        let fields = this.subview.bindings.filter( b => b instanceof Editor);
        let field = utils.find<Editor>(<any>fields, (i) => i.el === el)
        
        if (field) {
            field.value = value;
        } else {
            setValue(el, value);
        }
    }
    
    valid: boolean = true;
    
    
    initialize () {
        this._onElementChange = utils.bind(this._onElementChange, this);
        this.el = document.createElement('div');

        for (let a in utils.omit(this.attributes, [])) {
            this.el.setAttribute(a, this.attributes[a]);
        }

        this.section.appendChild(this.el);

        this.subview = <TemplateView>this.childTemplate.view(this.view.context, {
            parent: this.view
        });
        

        this.el.appendChild(this.subview.render());
        
        this.errorField = document.createElement('div');
        utils.addClass(this.errorField, "help-block")
        
        this.editor.parentNode.appendChild(this.errorField);
       

        /*let elList = <NodeListOf<HTMLElement>>this.el.querySelectorAll('[name]');
        
        if (!elList || elList.length > 1) {
            throw new Error('field with no input or more than one');
        }
        let el = elList[0];
        
        utils.addEventListener('change', )*/
        
        let el = <HTMLElement>this.el.querySelector('[name]');
        let fields = this.subview.bindings.filter( b => b instanceof Editor);
        let field = utils.find<Editor>(<any>fields, (i) => i.el === el)
        
        if (field) {
            field.addEventListener('change', this._onElementChange);
        } else {
            utils.addEventListener(el, 'change', this._onElementChange);
        }

    }
    
    
    
    clear () {
        this.value = null;
    }
   
    update () {}
    
    
    validate (form:Form) {
        let el = <HTMLElement>this.el.querySelector('[name]');
        let fields = this.subview.bindings.filter( b => b instanceof Editor);
        let field = utils.find<Editor>(<any>fields, (i) => i.el === el)
       
        
        let errors;
        if (field) {
            errors = field.validate(form, this);
        } else {
            errors = validate(form, this, el);
        }
        
        this.setErrors(errors);
        
        return errors;
    }

    setErrors (errors:Error[]) {
        let el = utils.Html.query(this.el);
        el.removeClass('has-success has-error');
        
        let help = utils.Html.query(this.errorField);
        help.html('');
        if (errors.length === 0) {
            el.addClass('has-success');
            
            this.valid = true;
        } else {
            el.addClass('has-error')
            
            let eStr = this.editor.getAttribute('error');
            let s: string[];
            if (eStr) {
                let str = templ.template(eStr, {
                    name: this.name,
                    value: this.value 
                });
                s = [str];
            } else {
                s = errors.map( e => e.message);    
            }
            
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
    
    private _onElementChange (e) {
        this.trigger('change', this);
    }
    
    destroy() {
        if (this.el) {
            utils.removeEventListener(this.el, 'change', this._onElementChange);
        }
        super.destroy();
    }

}