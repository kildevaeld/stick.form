import { Base } from './base';
import { ValidateError } from './validator';
import { Form } from './form';
import { Field } from './field';
export declare abstract class Editor extends Base {
    el: HTMLElement;
    tagName: string;
    value: any;
    abstract getValue(): any;
    abstract setValue(value: any): any;
    update(): void;
    addEventListener(event: string, fn: any): void;
    removeEventListener(event: string, fn: any): void;
    validate(form: Form, field: Field): ValidateError[];
}
