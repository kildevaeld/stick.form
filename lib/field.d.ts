import { BaseTemplate } from './base';
import { Form } from './form';
export declare abstract class Field extends BaseTemplate<HTMLDivElement> {
    nodeName: string;
    errorField: HTMLDivElement;
    editor: HTMLElement;
    name: string;
    value: any;
    valid: boolean;
    initialize(): void;
    clear(): void;
    update(): void;
    validate(form: Form): any;
    setErrors(errors: Error[]): void;
    private _onElementChange(e);
    destroy(): void;
}
