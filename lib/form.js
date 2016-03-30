"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_1 = require('./base');
var stick_1 = require('stick');
var field_1 = require('./field');

var Form = function (_base_1$Base) {
    _inherits(Form, _base_1$Base);

    function Form() {
        var _Object$getPrototypeO;

        _classCallCheck(this, Form);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.nodeName = "FORM";
        _this.valid = true;
        return _this;
    }

    _createClass(Form, [{
        key: 'getFieldForElement',
        value: function getFieldForElement(el) {
            return stick_1.utils.find(this.fields, function (i) {
                return i.editor === el;
            });
        }
    }, {
        key: 'initialize',
        value: function initialize() {
            this.el = document.createElement('form');
            this.onFormChange = this.onFormChange.bind(this);
            for (var a in stick_1.utils.omit(this.attributes, [])) {
                this.el.setAttribute(a, this.attributes[a]);
            }
            this.section.appendChild(this.el);
            this.subview = this.childTemplate.view(this.view.context, {
                parent: this.view
            });
            this.el.appendChild(this.subview.render());
            var fields = this.el.querySelectorAll('[name]');
            stick_1.utils.delegate(this.el, '[name]', 'change', this.onFormChange, this);
            this.listenTo(this.subview.context, 'change', this.onContextChange);
        }
    }, {
        key: 'onFormChange',
        value: function onFormChange(e) {
            var target = e.delegateTarget;
            var field = this.getFieldForElement(target);
            if (field == null) return;
            field.validate();
            this.valid = this.fields.filter(function (e) {
                return !e.valid;
            }).length === 0;
            var $el = stick_1.utils.Html.query(this.el).removeClass('valid invalid');
            if (this.valid) $el.addClass('valid');else $el.addClass('invalid');
        }
    }, {
        key: 'onContextChange',
        value: function onContextChange() {}
    }, {
        key: 'destroy',
        value: function destroy() {
            stick_1.utils.undelegate(this.el, '[name]', 'change', this.onFormChange);
            _get(Object.getPrototypeOf(Form.prototype), 'destroy', this).call(this);
        }
    }, {
        key: 'fields',
        get: function get() {
            return this.subview.bindings.filter(function (b) {
                return b instanceof field_1.Field;
            });
        }
    }]);

    return Form;
}(base_1.Base);

exports.Form = Form;