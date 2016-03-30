import {template} from './template';

function get_validations(el: HTMLElement) {
    var required;

    let v = Object.keys(validators).map(e => {
        let i = el.getAttribute(e);
        if (i) return validators[e];
        return null;
    }).filter(e => e !== null);

    return v;

}

export function validate(el: HTMLElement) {

    let v = get_validations(el);
    let name = el.getAttribute('name');
    let errors = [];
    for (let i = 0, ii = v.length; i < ii; i++) {
        try {
            v[i](name, el);
        } catch (e) {
            errors.push(e);
        }
    }

    return errors;
}

module messages {
    export const required = "<b>{{ name }}</b> is required";
    export const min = "<b>{{ name }}</b> needs to be minimum {{ min }} long";
    
    export const email = "<b>{{ name }}</b> is not an email";
}

export module validators {
    export function required(name: string, el: HTMLElement) {
        let value;
        if (el instanceof HTMLInputElement) {
            value = el.value;
        }


        if (value == "" || value == null) throw new ValidateError(template(messages.required, { name: name }));
    }

    export function min(name: string, el: HTMLElement) {
        let value;
        let type = "s";
        if (el instanceof HTMLInputElement) {
            value = el.value;
            if (el.type === 'number') {
                type = "n";
            }
        }
        let mins = el.getAttribute('min');
        if (!mins) return;

        let min = parseInt(mins);
        // TODO: check in init
        if (isNaN(min)) return;

        let e = new ValidateError(template(messages.min, { name: name, min: min }));
        if (type === 's') {
            if (value.length >= min) e = null;
        } else if (type === 'n') {
            if (value >= min) e = null;
        }

        if (e) throw e;
    }

    const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    
    export function email(name: string, el: HTMLElement) {
        
        let valid = validate_email((<any>el).value);
        
        if (!valid) {
            throw new ValidateError(template(messages.email, {name: name}))
        }
        
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

export function registerValidator(name: string, fn: (name: string, el: HTMLElement) => void) {
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