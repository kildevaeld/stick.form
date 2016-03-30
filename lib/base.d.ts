import { BaseComponent, TemplateView } from 'stick/lib/template';
export declare abstract class Base extends BaseComponent {
    destroy(): void;
}
export declare abstract class BaseTemplate<T extends HTMLElement> extends Base {
    subview: TemplateView;
    el: T;
    tagName: string;
}
