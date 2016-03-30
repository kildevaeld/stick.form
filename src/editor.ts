
import {Base} from './base';
import {utils} from 'stick';
import {validate, ValidateError} from './validator'
import {Form} from './form';
import {Field} from './field';

export abstract class Editor extends Base {

    el: HTMLElement;
    tagName: string;

    get value(): any {
        return this.getValue();
    }

    set value(value: any) {
        this.setValue(value);
    }

    abstract getValue(): any;
    abstract setValue(value: any);

    update() { }

    addEventListener(event: string, fn: any) {
        
        if (this.el) {
            //console.log('adde evetn', event)
            utils.addEventListener(this.el, event, fn);
            //this.el.addEventListener(event, fn);
        }
    }

    removeEventListener(event: string, fn) {
        if (this.el) {
            this.el.removeEventListener(event, fn);
        }
    }
    
    validate (form:Form, field: Field): ValidateError[] {
        return this.el != null ? validate(form, field, this.el): [];
    }

}