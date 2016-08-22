
import {Base} from './base';
import {utils} from 'stick';
import {validate, ValidateError} from './validator'
import {Form} from './form';
import {Field} from './field';

export abstract class Editor extends Base {

    el: HTMLElement;
    nodeName: string;

    get value(): any {
        return this.getValue();
    }

    set value(value: any) {
        this.setValue(value);
    }
    
    get name (): string {
        if (this.el) {
            return this.el.getAttribute('name');
        }
        return this.attributes['name'];
    }

    protected abstract getValue(): any;
    protected abstract setValue(value: any);
    protected abstract setHelpBlock(block:HTMLDivElement);

    update() { }

    addEventListener(event: string, fn: any) {
        if (this.el) {
            utils.addEventListener(this.el, event, fn);
        }
    }
    
    removeEventListener(event: string, fn) {
        if (this.el) {
            utils.removeEventListener(this.el, event, fn);
        }
    }
  
   
    validate (form:Form, field: Field): ValidateError[] {
        return this.el != null ? validate(form, field, this.el): [];
    }

}