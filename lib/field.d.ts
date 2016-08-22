import { BaseTemplate } from './base';
import { Editor } from './editor';
import { Form } from './form';
export declare abstract class Field extends BaseTemplate<HTMLDivElement> {
    nodeName: string;
    errorField: HTMLDivElement;
    /**
     * If the containing element is custom element and inherits from Editor
     */
    editor: Editor;
    element: HTMLElement;
    name: string;
    label: string;
    value: any;
    valid: boolean;
    initialize(): void;
    clear(): void;
    update(): void;
    validate(form: Form): any;
    setErrors(errors: Error[]): void;
    private _onElementChange(e);
    private _createHelpBlock();
    destroy(): void;
}
