
import {template} from 'stick';
import {BaseComponent, TemplateView} from 'stick/lib/template';

export abstract class Base extends BaseComponent {
    
    
     destroy () {
        this.stopListening();
        super.destroy();
    }
}


export abstract class BaseTemplate<T extends HTMLElement> extends Base {
    subview: TemplateView;
    el: T;
    tagName:string;
}