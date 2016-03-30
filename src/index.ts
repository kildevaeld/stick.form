

export * from './editor';
export * from './field';
export * from './form';

export {registerValidator, setMessage} from './validator'

import * as stick from 'stick';

import {Editor} from './editor';
import {Form} from './form';
import {Field} from './field';
import {Input} from './input';

stick.component('form',  Form);
stick.component('field', Field);
stick.component('input', Input);
