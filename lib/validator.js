"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var template_1 = require('./template');
function get_validations(el) {
    var required;
    var v = Object.keys(validators).map(function (e) {
        var i = el.getAttribute(e);
        if (i) return validators[e];
        return null;
    }).filter(function (e) {
        return e !== null;
    });
    return v;
}
function validate(el) {
    var v = get_validations(el);
    var name = el.getAttribute('name');
    var errors = [];
    for (var i = 0, ii = v.length; i < ii; i++) {
        try {
            v[i](name, el);
        } catch (e) {
            errors.push(e);
        }
    }
    return errors;
}
exports.validate = validate;
var messages;
(function (messages) {
    messages.required = "<b>{{ name }}</b> is required";
    messages.min = "<b>{{ name }}</b> needs to be minimum {{ min }} long";
    messages.email = "<b>{{ name }}</b> is not an email";
})(messages || (messages = {}));
var validators;
(function (validators) {
    function required(name, el) {
        var value = void 0;
        if (el instanceof HTMLInputElement) {
            value = el.value;
        }
        if (value == "" || value == null) throw new ValidateError(template_1.template(messages.required, { name: name }));
    }
    validators.required = required;
    function min(name, el) {
        var value = void 0;
        var type = "s";
        if (el instanceof HTMLInputElement) {
            value = el.value;
            if (el.type === 'number') {
                type = "n";
            }
        }
        var mins = el.getAttribute('min');
        if (!mins) return;
        var min = parseInt(mins);
        // TODO: check in init
        if (isNaN(min)) return;
        var e = new ValidateError(template_1.template(messages.min, { name: name, min: min }));
        if (type === 's') {
            if (value.length >= min) e = null;
        } else if (type === 'n') {
            if (value >= min) e = null;
        }
        if (e) throw e;
    }
    validators.min = min;
    var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    function email(name, el) {
        var valid = validate_email(el.value);
        if (!valid) {
            throw new ValidateError(template_1.template(messages.email, { name: name }));
        }
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