import { BaseTemplate } from './base';
import { Field } from './field';
export declare class Form extends BaseTemplate<HTMLFormElement> {
    nodeName: string;
    valid: boolean;
    fields: Field[];
    getFieldForElement(el: HTMLElement): Field;
    getFieldForName(name: string): Field;
    initialize(): void;
    private _onSubmit(e);
    validate(): any[];
    getValue(): any;
    setValue(obj: any): void;
    onFormChange(field: any): void;
    triggerMethod(event: string, ...args: any[]): void;
    update(): void;
    onContextChange(): void;
    destroy(): void;
}
