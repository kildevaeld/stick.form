import { BaseTemplate } from './base';
import { Field } from './field';
export declare class Form extends BaseTemplate<HTMLFormElement> {
    valid: boolean;
    fields: Field[];
    getFieldForElement(el: HTMLElement): Field;
    getFieldForName(name: string): Field;
    initialize(): void;
    validate(): boolean;
    getValue(): any;
    onFormChange(e: any): void;
    update(): void;
    onContextChange(): void;
    destroy(): void;
}
