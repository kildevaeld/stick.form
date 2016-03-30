import { BaseTemplate } from './base';
import { Field } from './field';
export declare class Form extends BaseTemplate<HTMLFormElement> {
    valid: boolean;
    fields: Field[];
    getFieldForElement(el: HTMLElement): Field;
    getFieldForName(name: string): Field;
    initialize(): void;
    validate(): any[];
    getValue(): any;
    onFormChange(e: any): void;
    triggerMethod(event: string, ...args: any[]): void;
    update(): void;
    onContextChange(): void;
    destroy(): void;
}
