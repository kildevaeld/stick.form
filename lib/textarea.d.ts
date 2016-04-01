import { Editor } from './editor';
export declare class Textarea extends Editor {
    nodeName: string;
    private _autoSize;
    private _overflowY;
    private _state;
    initialize(): void;
    _onPageResize(): void;
    update(): void;
    getValue(): string;
    setValue(value: string): void;
    _onChange(e: any): void;
    setHelpBlock(html: HTMLDivElement): void;
    _initInitialSize(): void;
    _changeOverflow(value: string): void;
    _resize(): void;
    _updateSize(): void;
    destroy(): void;
}
