
import {Editor} from './editor';
import {utils} from 'stick'
export class Input extends Editor<string> {
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
        return this.el.value;
        
    }
    
    setValue(value:string) {
        this.el.value = value;
    }
}
