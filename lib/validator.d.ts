import { Field } from './field';
import { Form } from './form';
export declare function getValue(el: HTMLElement, value?: any): any;
export declare function setValue(el: HTMLElement, value: any): void;
export declare function validate(form: Form, field: Field, el: HTMLElement): any[];
export declare module validators {
    function required(name: string, form: Form, value: any, arg: any): boolean;
    function min(name: string, form: Form, value: any, arg: any): boolean;
    function max(name: string, form: Form, value: any, arg: any): boolean;
    function match(name: string, form: Form, value: any, arg: any): boolean;
    function url(name: string, form: Form, value: any, arg: any): any;
    function email(name: string, form: Form, value: any, arg: any): boolean;
}
export declare function setMessage(validator: string, message: string): void;
export declare function registerValidator(name: string, fn: (name: string, form: Form, value: any, arg: any) => boolean): void;
export declare class ValidateError extends Error {
    message: string;
    constructor(message: string);
}
export declare class ValidateErrors extends Error {
    errors: ValidateError[];
    constructor(errors: ValidateErrors[]);
}
