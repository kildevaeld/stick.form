
import {template} from 'stick';


export abstract class Base extends template.BaseComponent {
    
    
     destroy () {
        this.stopListening();
        super.destroy();
    }
}

export abstract class BaseTemplate<T extends HTMLElement> extends Base {
    subview: template.TemplateView;
    el: T;
    tagName:string;
}