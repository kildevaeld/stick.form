import { Editor } from './editor';
export declare class Textarea extends Editor {
    nodeName: string;
    _autoSize: boolean;
    initialize(): void;
    update(): void;
    getValue(): string;
    setValue(value: string): void;
    _onChange(e: any): void;
    setHelpBlock(html: HTMLDivElement): void;
    destroy(): void;
}
