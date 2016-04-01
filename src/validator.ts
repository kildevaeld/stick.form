declare const require: any;
import {template} from './template';
import {Field} from './field';
import {Form} from './form';
import {utils} from 'stick';

const validURL = require('valid-url');

function get_validations(el: HTMLElement) {
    var required;

    let v = Object.keys(validators).map(e => {
        // The required validator is getting handled elsewhere
        if (e === 'required') return null;
        let i = el.getAttribute(e);
        if (i) return [validators[e], i, e];
        return null;
    }).filter(e => e !== null);

    return v;

}

export function getValue(el: HTMLElement, value?: any): any {
    var node = <HTMLInputElement>el;
    var isCheckbox = /checkbox/.test(node.type);
    var isRadio = /radio/.test(node.type);

    var isRadioOrCheckbox = isCheckbox || isRadio;
    var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
    var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
    var isSelect = /select/i.test(node.nodeName)

    if (arguments.length === 1) {
        if (isCheckbox) {
            return Boolean(node.checked);
        } else if (isSelect) {
            return node.value || "";
        } else if (isInput) {
            let value = node.value || "";
            if (node.type.toLowerCase() === 'number') {
                value = <any>parseInt(value)
                value = <any>(isNaN(<any>value) ? 0 : value)
            }
            return value;

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

export function setValue(el: HTMLElement, value: any) {
    getValue(el, value);
}

export function validate(form: Form, field: Field, el: HTMLElement) {

    let v = get_validations(el),
        name = el.getAttribute('name'),
        required = el.getAttribute('required'),
        value = getValue(el),
        errors = [];

    if (required) {
        if (!validators.required(name, form, value, null)) {
            return [new ValidateError(template(messages.required, {
                name: name,
                value: value,
                arg: null
            }))];
        }
    } else if (value == null || value == "") {
        // Do not run validations, when the value is empty
        return [];
    }

    for (let i = 0, ii = v.length; i < ii; i++) {
        if (!v[i][0](name, form, value, v[i][1])) {
            let vName = v[i][2];
            let e = new ValidateError(template(messages[vName], {
                name: name,
                value: value,
                arg: v[i][1]
            }));
            errors.push(e);
        }
    }

    return errors;
}

module messages {
    export const required = "<b><% name %></b> is required";
    export const min = "<b><% name %></b> needs to be minimum <% arg %> long";

    export const email = "<b><% name %></b> is not an email";
    export const url = "<b><% name %></b> is not an url";
    export const match = "<b><% name %></b> does not match: <b><%arg%></b>"
}

export module validators {
    export function required(name: string, form: Form, value: any, arg: any) {
        return !(value == "" || value == null)
    }

    export function min(name: string, form: Form, value: any, arg: any) {

        let min = parseInt(arg);
        // TODO: check in init
        if (isNaN(min)) return;

        if (typeof value === 'string') {
            return value.length >= min;
        } else {
            return value >= min;
        }
    }

    export function match(name: string, form: Form, value: any, arg: any) {

        let field = form.getFieldForName(arg);

        if (!field) {
            throw new Error(`field: ${arg} does not exists`);
        }

        let oval = field.value;

        return utils.equal(value, oval);

    }

    export function url(name: string, form: Form, value: any, arg: any) {
        return validURL.isUri(value);
    }

    const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    export function email(name: string, form: Form, value: any, arg: any) {

        return validate_email(value);


        // Thanks to:
        // http://fightingforalostcause.net/misc/2006/compare-email-regex.php
        // http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
        // http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
        function validate_email(email) {
            if (!email)
                return false;

            if (email.length > 254)
                return false;

            var valid = tester.test(email);
            if (!valid)
                return false;

            // Further checking of some things regex can't handle
            var parts = email.split("@");
            if (parts[0].length > 64)
                return false;

            var domainParts = parts[1].split(".");
            if (domainParts.some(function(part) { return part.length > 63; }))
                return false;

            return true;
        }

    }
}

export function setMessage(validator: string, message: string) {
    messages[validator] = message;
}

export function registerValidator(name: string, fn: (name: string, form: Form, value: any, arg: any) => boolean) {
    validators[name] = fn;
}

export class ValidateError extends Error {
    message: string;
    constructor(message: string) {
        super(message);
        this.message = message;
    }
}

export class ValidateErrors extends Error {
    errors: ValidateError[];
    constructor(errors: ValidateErrors[]) {
        super();
        this.errors = errors;
    }
}