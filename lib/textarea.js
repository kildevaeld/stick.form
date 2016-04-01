"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var editor_1 = require('./editor');
var stick_1 = require('stick');
var validator_1 = require('./validator');

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
            if (this.attributes['autosize']) {
                if (!this._autoSize) {
                    stick_1.utils.addEventListener(this.el, 'keyup', this._onChange);
                    stick_1.utils.addEventListener(this.el, 'input', this._onChange);
                }
                this._autoSize = true;
            } else if (this._autoSize) {
                stick_1.utils.removeEventListener(this.el, 'keyup', this._onChange);
                stick_1.utils.removeEventListener(this.el, 'input', this._onChange);
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
        }
    }, {
        key: '_onChange',
        value: function _onChange(e) {
            this.el.style.height = 'auto';
            this.el.style.height = this.el.scrollHeight + 'px';
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
                stick_1.utils.removeEventListener(this.el, 'keyup', this._onChange);
                stick_1.utils.removeEventListener(this.el, 'input', this._onChange);
            }
            _get(Object.getPrototypeOf(Textarea.prototype), 'destroy', this).call(this);
        }
    }]);

    return Textarea;
}(editor_1.Editor);

exports.Textarea = Textarea;