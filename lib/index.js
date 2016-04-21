"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
__export(require('./editor'));
__export(require('./field'));
__export(require('./form'));
var validator_1 = require('./validator');
exports.registerValidator = validator_1.registerValidator;
exports.setMessage = validator_1.setMessage;
exports.ValidateError = validator_1.ValidateError;
var stick = require('stick');
var form_2 = require('./form');
var field_2 = require('./field');
//import {Input} from './input';
var textarea_1 = require('./textarea');
stick.component('form', form_2.Form);
stick.component('field', field_2.Field);
//stick.component('input', Input);
stick.component('textarea', textarea_1.Textarea);