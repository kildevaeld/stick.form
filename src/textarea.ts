
import {Editor} from './editor';
import {utils} from 'stick'
import {getValue, setValue} from './validator';


var createEvent = (name) => new Event(name);
try {
	new Event('test');
} catch(e) {
	// IE does not support `new Event()`
	createEvent = (name)=> {
		const evt = document.createEvent('Event');
		evt.initEvent(name, true, false);
		return evt;
	};
}

export class Textarea extends Editor {
    nodeName = "TEXTAREA"

    private _autoSize: boolean
    private _overflowY: string;
    private _state: {
        overflowY: string;
        heightOffset: number;
        clientWidth: number;
    }

    initialize() {
        this._onChange = utils.bind(this._onChange, this);
        this._onPageResize = utils.bind(this._onPageResize, this);
        
        
        let input = document.createElement('textarea');
        this.section.appendChild(input);
        this.el = input;
        this._autoSize = false;
        
        
    }
    
    _onPageResize ()  {
		if (this.el.clientWidth !== this._state.clientWidth) {
			this._updateSize();
		}
	}

    update() {
        for (let a in utils.omit(this.attributes, [])) {
            this.el.setAttribute(a, this.attributes[a]);
        }

        if (this.attributes['autosize'] && !this._autoSize) {
            if (!this._autoSize) {
                utils.addEventListener(this.el, 'keyup', this._onChange);
                utils.addEventListener(this.el, 'input', this._onChange);
                utils.addEventListener(<any>window, 'resize', this._onPageResize);
            }
            
            this._autoSize = true;
            
            //if (setOverflowX) {
		        this.el.style.overflowX = 'hidden';
		        this.el.style.wordWrap = 'break-word';
	        //}
            
            (<HTMLTextAreaElement>this.el).rows = 1;
            
            this._initInitialSize();

        } else if (!this.attributes['autosize'] && this._autoSize) {
            utils.removeEventListener(this.el, 'keyup', this._onChange);
            utils.removeEventListener(this.el, 'input', this._onChange);
            utils.removeEventListener(<any>window, 'resize', this._onPageResize);
        }
    }

    getValue(): string {
        return getValue(this.el);
    }

    setValue(value: string) {
        setValue(this.el, value);
    }

    _onChange(e) {
        this._updateSize();
    }

    setHelpBlock(html: HTMLDivElement) {
        if (this.el.parentNode) {
            this.el.parentNode.appendChild(html);
        }
    }

    _initInitialSize() {
        const style = window.getComputedStyle(this.el, null);

        this._overflowY = style.overflowY;
        let heightOffset: number;
        
        
        if ((<any>style).resize === 'vertical') {
            (<any>this.el).style.resize = 'none';
        } else if ((<any>style).resize === 'both') {
            (<any>this.el).style.resize = 'horizontal';
        }

        if (style.boxSizing === 'content-box') {
            heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
        } else {
            heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        }
        // Fix when a textarea is not on document body and heightOffset is Not a Number
        if (isNaN(heightOffset)) {
            heightOffset = 0;
        }

        this._state = {
            overflowY: style.overflowY,
            heightOffset: heightOffset,
            clientWidth: this.el.clientWidth
        };

        this._updateSize();

    }




    _changeOverflow(value: string) {
        {
            // Chrome/Safari-specific fix:
            // When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
            // made available by removing the scrollbar. The following forces the necessary text reflow.
            const width = this.el.style.width;
            this.el.style.width = '0px';
            // Force reflow:
            /* jshint ignore:start */
            this.el.offsetWidth;
            /* jshint ignore:end */
            this.el.style.width = width;
        }

        this._state.overflowY = value;

        ///*if (setOverflowY) {
            this.el.style.overflowY = value;
        //}*/

        this._resize();
    }

    _resize() {
        const htmlTop = window.pageYOffset;
        const bodyTop = document.body.scrollTop;
        const originalHeight = this.el.style.height;

        this.el.style.height = 'auto';

        let endHeight = this.el.scrollHeight + this._state.heightOffset;

        if (this.el.scrollHeight === 0) {
            // If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
            this.el.style.height = originalHeight;
            return;
        }

        this.el.style.height = endHeight + 'px';

        // used to check if an update is actually necessary on window.resize
        this._state.clientWidth = this.el.clientWidth;

        // prevents scroll-position jumping
        document.documentElement.scrollTop = htmlTop;
        document.body.scrollTop = bodyTop;
    }

    _updateSize() {
        const startHeight = this.el.style.height;

        this._resize();

        const style = window.getComputedStyle(this.el, null);

        if (style.height !== this.el.style.height) {
            if (this._overflowY !== 'visible') {
                this._changeOverflow('visible');
            }
        } else {
            if (this._overflowY !== 'hidden') {
                this._changeOverflow('hidden');
            }
        }

        if (startHeight !== this.el.style.height) {
            //const evt = createEvent('autosize:resized');
            //ta.dispatchEvent(evt);
        }
    }

    destroy() {
        if (this._autoSize) {
            utils.removeEventListener(this.el, 'keyup', this._onChange);
            utils.removeEventListener(this.el, 'input', this._onChange);
            utils.removeEventListener(<any>window, 'resize', this._onPageResize);
        }
        super.destroy();
    }
}
