import { Editor } from './editor';
export declare class AutoSizer {
    el: HTMLElement;
    private _state;
    constructor(el: HTMLElement);
    _onPageResize(): void;
    _onChange(): void;
    _initInitialSize(): void;
    _changeOverflow(value: string): void;
    _resize(): void;
    update(): void;
    _updateSize(): void;
    destroy(): void;
}
export declare class Textarea extends Editor {
    nodeName: string;
    private _autoSizer;
    private _autoSize;
    private _overflowY;
    private _state;
    initialize(): void;
    update(): void;
    getValue(): string;
    setValue(value: string): void;
    _onChange(e: any): void;
    setHelpBlock(html: HTMLDivElement): void;
    destroy(): void;
}
