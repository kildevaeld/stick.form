
import {Editor} from './editor';
import {utils} from 'stick'
import {getValue, setValue} from './validator';


export class Input extends Editor {
    nodeName = "INPUT"
    
    initialize () {

        this._onChange = utils.bind(this._onChange, this);
        
        let input = document.createElement('input');
        this.section.appendChild(input);
        this.el = input;
        
        for (let a in utils.omit(this.attributes, [])) {
            if (a.indexOf('validate-') > -1) continue; 
            this.el.setAttribute(a, this.attributes[a]);
        }

        if (this.attributes['type'] === 'number') {
            if (this.attributes['validate-min']) {
                this.attributes['min'] = this.attributes['validate-min'];
            } 
            if (this.attributes['validate-max']) {
                this.attributes['max'] = this.attributes['validate-max'];
            }
        }

        utils.addEventListener(this.el, 'change', this._onChange);
        
    }
    
    getValue(): string {
        return getValue(this.el); 
    }
    
    setValue(value:string) {
        setValue(this.el, value);
    }
    
    setHelpBlock (html:HTMLDivElement) {
       if (this.el.parentNode) {
           this.el.parentNode.appendChild(html);
       }
    }

    private _onChange(e) {
        this.trigger('change');
    }
}
