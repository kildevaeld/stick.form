import { Base } from './base';
import { ValidateError } from './validator';
import { Form } from './form';
import { Field } from './field';
export declare abstract class Editor extends Base {
    el: HTMLElement;
    nodeName: string;
    value: any;
    name: string;
    protected abstract getValue(): any;
    protected abstract setValue(value: any): any;
    protected abstract setHelpBlock(block: HTMLDivElement): any;
    update(): void;
    addEventListener(event: string, fn: any): void;
    removeEventListener(event: string, fn: any): void;
    validate(form: Form, field: Field): ValidateError[];
}
