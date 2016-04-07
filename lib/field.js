"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_1 = require('./base');
var editor_1 = require('./editor');
var stick_1 = require('stick');
var validator_1 = require('./validator');
var templ = require('./template');

var Field = function (_base_1$BaseTemplate) {
    _inherits(Field, _base_1$BaseTemplate);

    function Field() {
        var _Object$getPrototypeO;

        _classCallCheck(this, Field);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Field)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.nodeName = "DIV";
        _this.valid = true;
        return _this;
    }
    /**
     * If the containing element is custom element and inherits from Editor
     */


    _createClass(Field, [{
        key: 'initialize',
        value: function initialize() {
            this._onElementChange = stick_1.utils.bind(this._onElementChange, this);
            this.el = document.createElement('div');
            for (var a in stick_1.utils.omit(this.attributes, [])) {
                this.el.setAttribute(a, this.attributes[a]);
            }
            this.section.appendChild(this.el);
            this.subview = this.childTemplate.view(this.view.context, {
                parent: this.view
            });
            this.el.appendChild(this.subview.render());
            if (this.editor) {
                this.editor.addEventListener('change', this._onElementChange);
            } else if (this.element) {
                stick_1.utils.addEventListener(this.element, 'change', this._onElementChange);
            } else {
                throw new Error('field has no editor');
            }
            this._createHelpBlock();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.value = null;
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'validate',
        value: function validate(form) {
            var errors = void 0;
            if (this.editor) {
                errors = this.editor.validate(form, this);
            } else {
                errors = validator_1.validate(form, this, this.element);
            }
            this.setErrors(errors);
            return errors;
        }
    }, {
        key: 'setErrors',
        value: function setErrors(errors) {
            var el = stick_1.utils.Html.query(this.el);
            el.removeClass('has-success has-error');
            var help = stick_1.utils.Html.query(this.errorField);
            help.html('');
            if (errors.length === 0) {
                el.addClass('has-success');
                this.valid = true;
            } else {
                el.addClass('has-error');
                var elm = this.editor || this.element;
                var eStr = elm.getAttribute('error');
                var s = void 0;
                if (eStr) {
                    var str = templ.template(eStr, {
                        name: this.name,
                        value: this.value
                    });
                    s = [str];
                } else {
                    s = errors.map(function (e) {
                        return e.message;
                    });
                }
                if (s.length > 1) {
                    var ul = document.createElement('ul');
                    help.get(0).appendChild(ul);
                    help = stick_1.utils.Html.query(ul);
                    s = s.map(function (e) {
                        return '<li>' + e + '</li>';
                    });
                }
                help.html(s.join(''));
                this.valid = false;
            }
        }
    }, {
        key: '_onElementChange',
        value: function _onElementChange(e) {
            this.trigger('change', this);
        }
    }, {
        key: '_createHelpBlock',
        value: function _createHelpBlock() {
            var helpBlock = document.createElement('div');
            stick_1.utils.addClass(helpBlock, 'help-block');
            this.errorField = helpBlock;
            if (this.editor) {
                this.editor.setHelpBlock(helpBlock);
            } else {
                if (this.element.parentNode) {
                    this.element.parentNode.appendChild(helpBlock);
                } else {
                    this.el.appendChild(helpBlock);
                }
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.editor) {
                this.editor.off();
            } else if (this.element) {
                stick_1.utils.removeEventListener(this.el, 'change', this._onElementChange);
            }
            if (this.subview) {
                this.subview.$destroy();
            }
            _get(Object.getPrototypeOf(Field.prototype), 'destroy', this).call(this);
        }
    }, {
        key: 'editor',
        get: function get() {
            var _this2 = this;

            var editors = this.subview.bindings.filter(function (b) {
                return b instanceof editor_1.Editor;
            });
            var editor = void 0;
            if (this.element) {
                editor = stick_1.utils.find(editors, function (i) {
                    return i.el === _this2.element;
                });
            } else {
                editor = editors.length > 0 ? editors[0] : undefined;
            }
            return editor;
        }
    }, {
        key: 'element',
        get: function get() {
            var el = this.el.querySelector('[name]');
            return el;
        }
    }, {
        key: 'name',
        get: function get() {
            if (this.editor) {
                return this.editor.name;
            } else {
                return this.element.getAttribute('name');
            }
        }
    }, {
        key: 'value',
        get: function get() {
            if (this.editor) {
                return this.editor.value;
            } else {
                return validator_1.getValue(this.element);
            }
        },
        set: function set(value) {
            if (this.editor) {
                this.editor.value = value;
            } else {
                validator_1.setValue(this.element, value);
            }
        }
    }]);

    return Field;
}(base_1.BaseTemplate);

exports.Field = Field;