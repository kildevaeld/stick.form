
import {Editor} from './editor';
import {utils} from 'stick'
import {getValue, setValue} from './validator';


export class Textarea extends Editor {
    nodeName = "TEXTAREA"
    
    _autoSize: boolean
    initialize () {
        this._onChange = utils.bind(this._onChange, this);
        let input = document.createElement('textarea');
        this.section.appendChild(input);
        this.el = input; 
        this._autoSize = false;     
    }
    
    update () {
        for (let a in utils.omit(this.attributes, [])) {
            this.el.setAttribute(a, this.attributes[a]);
        }
        
        if (this.attributes['autosize']) {
            if (!this._autoSize) {
                utils.addEventListener(this.el, 'keyup', this._onChange);
                utils.addEventListener(this.el, 'input', this._onChange);    
            }
            this._autoSize = true;
        } else if (this._autoSize) {
            utils.removeEventListener(this.el, 'keyup', this._onChange);
            utils.removeEventListener(this.el, 'input', this._onChange);    
        }
    }
    
    getValue(): string {
        return getValue(this.el); 
    }
    
    setValue(value:string) {
        setValue(this.el, value);
    }
    
    _onChange (e) {
        this.el.style.height = 'auto';
        this.el.style.height = this.el.scrollHeight  + 'px';
    }
    
    setHelpBlock (html:HTMLDivElement) {
       if (this.el.parentNode) {
           this.el.parentNode.appendChild(html);
       }
    }
    
    destroy () {
        if (this._autoSize) {
            utils.removeEventListener(this.el, 'keyup', this._onChange);
            utils.removeEventListener(this.el, 'input', this._onChange);  
        }
        super.destroy();
    }
}
