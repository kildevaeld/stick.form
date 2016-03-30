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
var stick = require('stick');
var form_2 = require('./form');
var field_2 = require('./field');
var input_1 = require('./input');
stick.component('form', form_2.Form);
stick.component('field', field_2.Field);
stick.component('input', input_1.Input);