import { Base } from './base';
import { ValidateError } from './validator';
import { Form } from './form';
import { Field } from './field';
export declare abstract class Editor extends Base {
    el: HTMLElement;
    nodeName: string;
    value: any;
    name: string;
    abstract getValue(): any;
    abstract setValue(value: any): any;
    abstract setHelpBlock(block: HTMLDivElement): any;
    update(): void;
    addEventListener(event: string, fn: any): void;
    removeEventListener(event: string, fn: any): void;
    validate(form: Form, field: Field): ValidateError[];
}
