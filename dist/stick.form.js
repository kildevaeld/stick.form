(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("stick"));
	else if(typeof define === 'function' && define.amd)
		define(["stick"], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory(require("stick"));
	else
		root["stick"] = root["stick"] || {}, root["stick"]["form"] = factory(root["stick"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	var validator_1 = __webpack_require__(4);
	exports.registerValidator = validator_1.registerValidator;
	exports.setMessage = validator_1.setMessage;
	var stick = __webpack_require__(3);
	var form_2 = __webpack_require__(9);
	var field_2 = __webpack_require__(8);
	var input_1 = __webpack_require__(10);
	stick.component('form', form_2.Form);
	stick.component('field', field_2.Field);
	stick.component('input', input_1.Input);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(2);
	var stick_1 = __webpack_require__(3);
	var validator_1 = __webpack_require__(4);

	var Editor = function (_base_1$Base) {
	    _inherits(Editor, _base_1$Base);

	    function Editor() {
	        _classCallCheck(this, Editor);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Editor).apply(this, arguments));
	    }

	    _createClass(Editor, [{
	        key: 'update',
	        value: function update() {}
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener(event, fn) {
	            if (this.el) {
	                //console.log('adde evetn', event)
	                stick_1.utils.addEventListener(this.el, event, fn);
	            }
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener(event, fn) {
	            if (this.el) {
	                this.el.removeEventListener(event, fn);
	            }
	        }
	    }, {
	        key: 'validate',
	        value: function validate(form, field) {
	            return this.el != null ? validator_1.validate(form, field, this.el) : [];
	        }
	    }, {
	        key: 'value',
	        get: function get() {
	            return this.getValue();
	        },
	        set: function set(value) {
	            this.setValue(value);
	        }
	    }]);

	    return Editor;
	}(base_1.Base);

	exports.Editor = Editor;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var stick_1 = __webpack_require__(3);

	var Base = function (_stick_1$template$Bas) {
	    _inherits(Base, _stick_1$template$Bas);

	    function Base() {
	        _classCallCheck(this, Base);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Base).apply(this, arguments));
	    }

	    _createClass(Base, [{
	        key: "destroy",
	        value: function destroy() {
	            this.stopListening();
	            _get(Object.getPrototypeOf(Base.prototype), "destroy", this).call(this);
	        }
	    }]);

	    return Base;
	}(stick_1.template.BaseComponent);

	exports.Base = Base;

	var BaseTemplate = function (_Base) {
	    _inherits(BaseTemplate, _Base);

	    function BaseTemplate() {
	        _classCallCheck(this, BaseTemplate);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseTemplate).apply(this, arguments));
	    }

	    return BaseTemplate;
	}(Base);

	exports.BaseTemplate = BaseTemplate;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var template_1 = __webpack_require__(5);
	var stick_1 = __webpack_require__(3);
	var validURL = __webpack_require__(6);
	function get_validations(el) {
	    var required;
	    var v = Object.keys(validators).map(function (e) {
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
	    var v = get_validations(el);
	    var name = el.getAttribute('name');
	    var value = getValue(el);
	    var errors = [];
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var start = "<%",
	    end = "%>",
	    path = "[a-z0-9_$][\\.a-z0-9_]*",
	    // e.g. config.person.name
	pattern = new RegExp(start + "\\s*(" + path + ")\\s*" + end, "gi"),
	    undef = undefined;
	function template(template, data) {
	    return template.replace(pattern, function (tag, token) {
	        var path = token.split("."),
	            len = path.length,
	            lookup = data,
	            i = 0;
	        for (; i < len; i++) {
	            lookup = lookup[path[i]];
	            // Property not found
	            if (lookup === undef) {
	                throw "tim: '" + path[i] + "' not found in " + tag;
	            }
	            // Return the required value
	            if (i === len - 1) {
	                return lookup;
	            }
	        }
	    });
	}
	exports.template = template;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function(module) {
	    'use strict';

	    module.exports.is_uri = is_iri;
	    module.exports.is_http_uri = is_http_iri;
	    module.exports.is_https_uri = is_https_iri;
	    module.exports.is_web_uri = is_web_iri;
	    // Create aliases
	    module.exports.isUri = is_iri;
	    module.exports.isHttpUri = is_http_iri;
	    module.exports.isHttpsUri = is_https_iri;
	    module.exports.isWebUri = is_web_iri;


	    // private function
	    // internal URI spitter method - direct from RFC 3986
	    var splitUri = function(uri) {
	        var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
	        return splitted;
	    };

	    function is_iri(value) {
	        if (!value) {
	            return;
	        }

	        // check for illegal characters
	        if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) return;

	        // check for hex escapes that aren't complete
	        if (/%[^0-9a-f]/i.test(value)) return;
	        if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;

	        var splitted = [];
	        var scheme = '';
	        var authority = '';
	        var path = '';
	        var query = '';
	        var fragment = '';
	        var out = '';

	        // from RFC 3986
	        splitted = splitUri(value);
	        scheme = splitted[1]; 
	        authority = splitted[2];
	        path = splitted[3];
	        query = splitted[4];
	        fragment = splitted[5];

	        // scheme and path are required, though the path can be empty
	        if (!(scheme && scheme.length && path.length >= 0)) return;

	        // if authority is present, the path must be empty or begin with a /
	        if (authority && authority.length) {
	            if (!(path.length === 0 || /^\//.test(path))) return;
	        } else {
	            // if authority is not present, the path must not start with //
	            if (/^\/\//.test(path)) return;
	        }

	        // scheme must begin with a letter, then consist of letters, digits, +, ., or -
	        if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase()))  return;

	        // re-assemble the URL per section 5.3 in RFC 3986
	        out += scheme + ':';
	        if (authority && authority.length) {
	            out += '//' + authority;
	        }

	        out += path;

	        if (query && query.length) {
	            out += '?' + query;
	        }

	        if (fragment && fragment.length) {
	            out += '#' + fragment;
	        }

	        return out;
	    }

	    function is_http_iri(value, allowHttps) {
	        if (!is_iri(value)) {
	            return;
	        }

	        var splitted = [];
	        var scheme = '';
	        var authority = '';
	        var path = '';
	        var port = '';
	        var query = '';
	        var fragment = '';
	        var out = '';

	        // from RFC 3986
	        splitted = splitUri(value);
	        scheme = splitted[1]; 
	        authority = splitted[2];
	        path = splitted[3];
	        query = splitted[4];
	        fragment = splitted[5];

	        if (!scheme)  return;

	        if(allowHttps) {
	            if (scheme.toLowerCase() != 'https') return;
	        } else {
	            if (scheme.toLowerCase() != 'http') return;
	        }

	        // fully-qualified URIs must have an authority section that is
	        // a valid host
	        if (!authority) {
	            return;
	        }

	        // enable port component
	        if (/:(\d+)$/.test(authority)) {
	            port = authority.match(/:(\d+)$/)[0];
	            authority = authority.replace(/:\d+$/, '');
	        }

	        out += scheme + ':';
	        out += '//' + authority;
	        
	        if (port) {
	            out += port;
	        }
	        
	        out += path;
	        
	        if(query && query.length){
	            out += '?' + query;
	        }

	        if(fragment && fragment.length){
	            out += '#' + fragment;
	        }
	        
	        return out;
	    }

	    function is_https_iri(value) {
	        return is_http_iri(value, true);
	    }

	    function is_web_iri(value) {
	        return (is_http_iri(value) || is_https_iri(value));
	    }

	})(module);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(2);
	var editor_1 = __webpack_require__(1);
	var stick_1 = __webpack_require__(3);
	var validator_1 = __webpack_require__(4);
	var templ = __webpack_require__(5);

	var Field = function (_base_1$BaseTemplate) {
	    _inherits(Field, _base_1$BaseTemplate);

	    function Field() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Field);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Field)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.valid = true;
	        return _this;
	    }
	    //tagName = "DIV";


	    _createClass(Field, [{
	        key: 'initialize',
	        value: function initialize() {
	            this.el = document.createElement('div');
	            for (var a in stick_1.utils.omit(this.attributes, [])) {
	                this.el.setAttribute(a, this.attributes[a]);
	            }
	            this.section.appendChild(this.el);
	            this.subview = this.childTemplate.view(this.view.context, {
	                parent: this.view
	            });
	            this.el.appendChild(this.subview.render());
	            var errorField = document.createElement('div');
	            stick_1.utils.addClass(errorField, "help-block");
	            this.editor.parentNode.appendChild(errorField);
	        }
	    }, {
	        key: 'update',
	        value: function update() {}
	    }, {
	        key: 'validate',
	        value: function validate(form) {
	            var el = this.el.querySelector('[name]');
	            var fields = this.subview.bindings.filter(function (b) {
	                return b instanceof editor_1.Editor;
	            });
	            var field = stick_1.utils.find(fields, function (i) {
	                return i.el === el;
	            });
	            var errors = void 0;
	            if (field) {
	                errors = field.validate(form, this);
	            } else {
	                errors = validator_1.validate(form, this, el);
	            }
	            this.setErrors(errors);
	            return errors;
	        }
	    }, {
	        key: 'setErrors',
	        value: function setErrors(errors) {
	            var el = stick_1.utils.Html.query(this.el);
	            el.removeClass('has-success has-error');
	            var help = el.find('.help-block');
	            help.html('');
	            if (errors.length === 0) {
	                el.addClass('has-success');
	                this.valid = true;
	            } else {
	                el.addClass('has-error');
	                var eStr = this.editor.getAttribute('error');
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
	        key: 'editor',
	        get: function get() {
	            var el = this.el.querySelector('[name]');
	            var fields = this.subview.bindings.filter(function (b) {
	                return b instanceof editor_1.Editor;
	            });
	            var field = stick_1.utils.find(fields, function (i) {
	                return i.el === el;
	            });
	            return el;
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            return this.editor.getAttribute('name');
	        }
	    }, {
	        key: 'value',
	        get: function get() {
	            var el = this.el.querySelector('[name]');
	            var fields = this.subview.bindings.filter(function (b) {
	                return b instanceof editor_1.Editor;
	            });
	            var field = stick_1.utils.find(fields, function (i) {
	                return i.el === el;
	            });
	            if (field) {
	                return field.value;
	            } else {
	                return validator_1.getValue(el);
	            }
	        }
	    }]);

	    return Field;
	}(base_1.BaseTemplate);

	exports.Field = Field;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(2);
	var stick_1 = __webpack_require__(3);
	var field_1 = __webpack_require__(8);

	var Form = function (_base_1$BaseTemplate) {
	    _inherits(Form, _base_1$BaseTemplate);

	    function Form() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Form);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        //nodeName = "FORM";

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args)));

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
	        key: 'getFieldForName',
	        value: function getFieldForName(name) {
	            return stick_1.utils.find(this.fields, function (i) {
	                return i.name === name;
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
	            var name = this.attributes['name'];
	            if (name) {
	                this.view.context.set('$ui.' + name, this);
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
	        key: 'validate',
	        value: function validate() {
	            var fields = this.fields;
	            var errors = [];
	            for (var i = 0, ii = fields.length; i < ii; i++) {
	                var e = fields[i].validate(this);
	                if (e.length > 0) errors.push(e);
	            }
	            this.valid = errors.length === 0;
	            if (this.valid) {
	                this.triggerMethod('valid');
	            } else {
	                this.triggerMethod('invalid');
	            }
	            return errors;
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue() {
	            var fields = this.fields;
	            var out = {};
	            for (var i = 0, ii = fields.length; i < ii; i++) {
	                out[fields[i].name] = fields[i].value;
	            }
	            return out;
	        }
	    }, {
	        key: 'onFormChange',
	        value: function onFormChange(e) {
	            var target = e.delegateTarget;
	            var field = this.getFieldForElement(target);
	            if (field == null) return;
	            this.triggerMethod('change', field);
	            field.validate(this);
	            this.valid = this.fields.filter(function (e) {
	                return !e.valid;
	            }).length === 0;
	            if (!this.valid) {
	                this.triggerMethod('invalid', field);
	            } else {
	                this.triggerMethod('valid', field);
	            }
	            var $el = stick_1.utils.Html.query(this.el).removeClass('valid invalid');
	            if (this.valid) $el.addClass('valid');else $el.addClass('invalid');
	        }
	    }, {
	        key: 'triggerMethod',
	        value: function triggerMethod(event) {
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	            }

	            this.trigger.apply(this, [event, this].concat(args));
	            var cb = this.attributes['on' + event];
	            if (!cb) return;
	            if (cb instanceof stick_1.template.Assignment) {
	                cb.assign();
	            } else if (cb instanceof stick_1.template.Call) {
	                cb.call();
	            } else if (typeof cb === 'function') {
	                cb.apply(undefined, args);
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update() {}
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
	}(base_1.BaseTemplate);

	exports.Form = Form;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var editor_1 = __webpack_require__(1);
	var stick_1 = __webpack_require__(3);
	var validator_1 = __webpack_require__(4);

	var Input = function (_editor_1$Editor) {
	    _inherits(Input, _editor_1$Editor);

	    function Input() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Input);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Input)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.nodeName = "INPUT";
	        return _this;
	    }

	    _createClass(Input, [{
	        key: 'initialize',
	        value: function initialize() {
	            var input = document.createElement('input');
	            this.section.appendChild(input);
	            this.el = input;
	            for (var a in stick_1.utils.omit(this.attributes, [])) {
	                this.el.setAttribute(a, this.attributes[a]);
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
	    }]);

	    return Input;
	}(editor_1.Editor);

	exports.Input = Input;

/***/ }
/******/ ])
});
;