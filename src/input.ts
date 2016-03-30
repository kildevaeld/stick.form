
import {Editor} from './editor';
import {utils} from 'stick'
import {getValue, setValue} from './validator';
export class Input extends Editor {
    nodeName = "INPUT"
    
    initialize () {
        
        let input = document.createElement('input');
        this.section.appendChild(input);
        this.el = input;
        for (let a in utils.omit(this.attributes, [])) {
            this.el.setAttribute(a, this.attributes[a]);
        }
        
    }
    getValue(): string {
        return getValue(this.el);
        
    }
    
    
    setValue(value:string) {
        setValue(this.el, value);
    }
}
