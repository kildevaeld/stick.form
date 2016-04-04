"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var editor_1 = require('./editor');
var stick_1 = require('stick');
var validator_1 = require('./validator');
var createEvent = function createEvent(name) {
    return new Event(name);
};
try {
    new Event('test');
} catch (e) {
    // IE does not support `new Event()`
    createEvent = function createEvent(name) {
        var evt = document.createEvent('Event');
        evt.initEvent(name, true, false);
        return evt;
    };
}

var AutoSizer = function () {
    function AutoSizer(el) {
        _classCallCheck(this, AutoSizer);

        this.el = el;
        this._onChange = stick_1.utils.bind(this._onChange, this);
        this._onPageResize = stick_1.utils.bind(this._onPageResize, this);
        this._initInitialSize();
    }

    _createClass(AutoSizer, [{
        key: '_onPageResize',
        value: function _onPageResize() {
            if (this.el.clientWidth !== this._state.clientWidth) {
                this._updateSize();
            }
        }
    }, {
        key: '_onChange',
        value: function _onChange() {
            this._updateSize();
        }
    }, {
        key: '_initInitialSize',
        value: function _initInitialSize() {
            var style = window.getComputedStyle(this.el, null);
            var heightOffset = void 0;
            if (style.resize === 'vertical') {
                this.el.style.resize = 'none';
            } else if (style.resize === 'both') {
                this.el.style.resize = 'horizontal';
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
            stick_1.utils.addEventListener(this.el, 'keyup', this._onChange);
            stick_1.utils.addEventListener(this.el, 'input', this._onChange);
            stick_1.utils.addEventListener(window, 'resize', this._onPageResize);
            this._updateSize();
        }
    }, {
        key: '_changeOverflow',
        value: function _changeOverflow(value) {
            {
                // Chrome/Safari-specific fix:
                // When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
                // made available by removing the scrollbar. The following forces the necessary text reflow.
                var width = this.el.style.width;
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
    }, {
        key: '_resize',
        value: function _resize() {
            var htmlTop = window.pageYOffset;
            var bodyTop = document.body.scrollTop;
            var originalHeight = this.el.style.height;
            this.el.style.height = 'auto';
            var endHeight = this.el.scrollHeight + this._state.heightOffset;
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
    }, {
        key: 'update',
        value: function update() {
            this._updateSize();
        }
    }, {
        key: '_updateSize',
        value: function _updateSize() {
            var startHeight = this.el.style.height;
            this._resize();
            var style = window.getComputedStyle(this.el, null);
            if (style.height !== this.el.style.height) {
                if (this._state.overflowY !== 'visible') {
                    this._changeOverflow('visible');
                }
            } else {
                if (this._state.overflowY !== 'hidden') {
                    this._changeOverflow('hidden');
                }
            }
            if (startHeight !== this.el.style.height) {}
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            stick_1.utils.removeEventListener(this.el, 'keyup', this._onChange);
            stick_1.utils.removeEventListener(this.el, 'input', this._onChange);
            stick_1.utils.removeEventListener(window, 'resize', this._onPageResize);
        }
    }]);

    return AutoSizer;
}();

exports.AutoSizer = AutoSizer;

var Textarea = function (_editor_1$Editor) {
    _inherits(Textarea, _editor_1$Editor);

    function Textarea() {
        var _Object$getPrototypeO;

        _classCallCheck(this, Textarea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Textarea)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.nodeName = "TEXTAREA";
        return _this;
    }

    _createClass(Textarea, [{
        key: 'initialize',
        value: function initialize() {
            this._onChange = stick_1.utils.bind(this._onChange, this);
            //this._onPageResize = utils.bind(this._onPageResize, this);
            var input = document.createElement('textarea');
            this.section.appendChild(input);
            this.el = input;
            this._autoSize = false;
        }
    }, {
        key: 'update',
        value: function update() {
            for (var a in stick_1.utils.omit(this.attributes, [])) {
                this.el.setAttribute(a, this.attributes[a]);
            }
            if (this.attributes['autosize'] && !this._autoSize) {
                if (!this._autoSize) {
                    this._autoSizer = new AutoSizer(this.el);
                }
                this._autoSize = true;
                //if (setOverflowX) {
                this.el.style.overflowX = 'hidden';
                this.el.style.wordWrap = 'break-word';
                //}
                this.el.rows = 1;
            } else if (!this.attributes['autosize'] && this._autoSize) {
                this._autoSizer.destroy();
                this._autoSizer = void 0;
            }
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return validator_1.getValue(this.el);
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            validator_1.setValue(this.el, value);
            if (this._autoSizer) this._autoSizer.update();
            //this._updateSize();
        }
    }, {
        key: '_onChange',
        value: function _onChange(e) {
            //this._updateSize();
        }
    }, {
        key: 'setHelpBlock',
        value: function setHelpBlock(html) {
            if (this.el.parentNode) {
                this.el.parentNode.appendChild(html);
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this._autoSize) {
                this._autoSizer.destroy();
            }
            _get(Object.getPrototypeOf(Textarea.prototype), 'destroy', this).call(this);
        }
    }]);

    return Textarea;
}(editor_1.Editor);

exports.Textarea = Textarea;