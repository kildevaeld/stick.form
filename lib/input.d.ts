import { Editor } from './editor';
export declare class Input extends Editor {
    nodeName: string;
    initialize(): void;
    getValue(): string;
    setValue(value: string): void;
}
