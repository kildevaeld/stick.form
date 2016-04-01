"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var template_1 = require('./template');
var stick_1 = require('stick');
var validURL = require('valid-url');
function get_validations(el) {
    var required;
    var v = Object.keys(validators).map(function (e) {
        // The required validator is getting handled elsewhere
        if (e === 'required') return null;
        var i = el.getAttribute(e);
        if (i) return [validators[e], i, e];
        return null;
    }).filter(function (e) {
        return e !== null;
    });
    return v;
}
function getValue(el, value) {
    var node = el;
    var isCheckbox = /checkbox/.test(node.type);
    var isRadio = /radio/.test(node.type);
    var isRadioOrCheckbox = isCheckbox || isRadio;
    var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
    var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
    var isSelect = /select/i.test(node.nodeName);
    if (arguments.length === 1) {
        if (isCheckbox) {
            return Boolean(node.checked);
        } else if (isSelect) {
            return node.value || "";
        } else if (isInput) {
            var _value = node.value || "";
            if (node.type.toLowerCase() === 'number') {
                _value = parseInt(_value);
                _value = isNaN(_value) ? 0 : _value;
            }
            return _value;
        } else {
            return node.innerHTML || "";
        }
    }
    if (value == null) {
        value = "";
    }
    if (isRadioOrCheckbox) {
        if (isRadio) {
            if (String(value) === String(node.value)) {
                node.checked = true;
            }
        } else {
            node.checked = value;
        }
    } else if (String(value) !== getValue(el)) {
        if (isInput || isSelect) {
            node.value = value;
        } else {
            node.innerHTML = value;
        }
    }
}
exports.getValue = getValue;
function setValue(el, value) {
    getValue(el, value);
}
exports.setValue = setValue;
function validate(form, field, el) {
    var v = get_validations(el),
        name = el.getAttribute('name'),
        required = el.getAttribute('required'),
        value = getValue(el),
        errors = [];
    if (required) {
        if (!validators.required(name, form, value, null)) {
            return [new ValidateError(template_1.template(messages.required, {
                name: name,
                value: value,
                arg: null
            }))];
        }
    } else if (value == null || value == "") {
        // Do not run validations, when the value is empty
        return [];
    }
    for (var i = 0, ii = v.length; i < ii; i++) {
        if (!v[i][0](name, form, value, v[i][1])) {
            var vName = v[i][2];
            var e = new ValidateError(template_1.template(messages[vName], {
                name: name,
                value: value,
                arg: v[i][1]
            }));
            errors.push(e);
        }
    }
    return errors;
}
exports.validate = validate;
var messages;
(function (messages) {
    messages.required = "<b><% name %></b> is required";
    messages.min = "<b><% name %></b> needs to be minimum <% arg %> long";
    messages.email = "<b><% name %></b> is not an email";
    messages.url = "<b><% name %></b> is not an url";
    messages.match = "<b><% name %></b> does not match: <b><%arg%></b>";
})(messages || (messages = {}));
var validators;
(function (validators) {
    function required(name, form, value, arg) {
        return !(value == "" || value == null);
    }
    validators.required = required;
    function min(name, form, value, arg) {
        var min = parseInt(arg);
        // TODO: check in init
        if (isNaN(min)) return;
        if (typeof value === 'string') {
            return value.length >= min;
        } else {
            return value >= min;
        }
    }
    validators.min = min;
    function match(name, form, value, arg) {
        var field = form.getFieldForName(arg);
        if (!field) {
            throw new Error('field: ' + arg + ' does not exists');
        }
        var oval = field.value;
        return stick_1.utils.equal(value, oval);
    }
    validators.match = match;
    function url(name, form, value, arg) {
        return validURL.isUri(value);
    }
    validators.url = url;
    var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    function email(name, form, value, arg) {
        return validate_email(value);
        // Thanks to:
        // http://fightingforalostcause.net/misc/2006/compare-email-regex.php
        // http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
        // http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
        function validate_email(email) {
            if (!email) return false;
            if (email.length > 254) return false;
            var valid = tester.test(email);
            if (!valid) return false;
            // Further checking of some things regex can't handle
            var parts = email.split("@");
            if (parts[0].length > 64) return false;
            var domainParts = parts[1].split(".");
            if (domainParts.some(function (part) {
                return part.length > 63;
            })) return false;
            return true;
        }
    }
    validators.email = email;
})(validators = exports.validators || (exports.validators = {}));
function setMessage(validator, message) {
    messages[validator] = message;
}
exports.setMessage = setMessage;
function registerValidator(name, fn) {
    validators[name] = fn;
}
exports.registerValidator = registerValidator;

var ValidateError = function (_Error) {
    _inherits(ValidateError, _Error);

    function ValidateError(message) {
        _classCallCheck(this, ValidateError);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ValidateError).call(this, message));

        _this.message = message;
        return _this;
    }

    return ValidateError;
}(Error);

exports.ValidateError = ValidateError;

var ValidateErrors = function (_Error2) {
    _inherits(ValidateErrors, _Error2);

    function ValidateErrors(errors) {
        _classCallCheck(this, ValidateErrors);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ValidateErrors).call(this));

        _this2.errors = errors;
        return _this2;
    }

    return ValidateErrors;
}(Error);

exports.ValidateErrors = ValidateErrors;