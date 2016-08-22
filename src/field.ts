
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
    
    /**
     * If the containing element is custom element and inherits from Editor
     */
    get editor(): Editor {
        
        let editors = <Editor[]>this.subview.bindings.filter( b => b instanceof Editor);
        let editor: Editor;
        
        if (this.element) {
            editor = utils.find<Editor>(editors, (i) => i.el === this.element);    
        } else {
            editor = editors.length > 0 ? editors[0]: undefined; 
        }
       
        return editor;
    }
    
    get element(): HTMLElement {
        let el = <HTMLElement>this.el.querySelector('[name]');
        return el;
    }
    
    get name(): string {
        if (this.editor) {
            return this.editor.name;
        } else {
            return this.element.getAttribute('name');
        } 
    }

    get label(): string {
         let label = this.el.querySelector('.field-label');
         if (label)
             return label.textContent;
        return null;
    }
    
    get value(): any {
       
        if (this.editor) {
            return this.editor.value;
        } else {
            return getValue(this.element);
        }
        
    }
    
    set value(value:any) {
 
        if (this.editor) {
            this.editor.value = value;
        } else {
            setValue(this.element, value);
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
        
        if (this.editor) {
            this.editor.addEventListener('change', this._onElementChange);
        } else if (this.element) {
            utils.addEventListener(this.element, 'change', this._onElementChange);
        } else {
            throw new Error('field has no editor');
        }
        
        this._createHelpBlock();

    }
    
    clear () {
        this.value = null;
    }
   
    update () {}
    
    
    validate (form:Form) {
        
        let errors;
        if (this.editor) {
            errors = this.editor.validate(form, this);
        } else {
            errors = validate(form, this, this.element);
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
            
            let elm: any = this.editor||this.element;
            
            let eStr = elm.getAttribute('error');
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
    
    private _createHelpBlock () {
        
        let helpBlock = document.createElement('div');
        utils.addClass(helpBlock, 'help-block');
        
        this.errorField = helpBlock;
        
        if (this.editor) {
            this.editor.setHelpBlock(helpBlock);
        } else {
            if (this.element.parentNode) {
                this.element.parentNode.appendChild(helpBlock);
            } else {
                this.el.appendChild(helpBlock);
            }
        }
    }
    
    destroy() {
        if (this.editor) {
            this.editor.off();
        } else if (this.element) {
            utils.removeEventListener(this.el, 'change', this._onElementChange);
        }

        if (this.subview) {
            this.subview.$destroy();
        }

        super.destroy();
    }

}