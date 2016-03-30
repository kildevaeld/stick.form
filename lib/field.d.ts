import { BaseTemplate } from './base';
import { Form } from './form';
export declare abstract class Field extends BaseTemplate<HTMLDivElement> {
    editor: HTMLElement;
    name: string;
    value: any;
    valid: boolean;
    initialize(): void;
    update(): void;
    validate(form: Form): boolean;
    setErrors(errors: Error[]): void;
}
