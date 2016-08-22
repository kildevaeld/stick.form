(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("stick"));
	else if(typeof define === 'function' && define.amd)
		define(["stick"], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory(require("stick"));
	else
		root["stick"] = root["stick"] || {}, root["stick"]["form"] = factory(root["stick"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_89__) {
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
	__export(__webpack_require__(94));
	__export(__webpack_require__(95));
	var validator_1 = __webpack_require__(90);
	exports.registerValidator = validator_1.registerValidator;
	exports.setMessage = validator_1.setMessage;
	exports.ValidateError = validator_1.ValidateError;
	var stick = __webpack_require__(89);
	var form_2 = __webpack_require__(95);
	var field_2 = __webpack_require__(94);
	//import {Input} from './input';
	var textarea_1 = __webpack_require__(96);
	stick.component('form', form_2.Form);
	stick.component('field', field_2.Field);
	//stick.component('input', Input);
	stick.component('textarea', textarea_1.Textarea);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(2);
	var stick_1 = __webpack_require__(89);
	var validator_1 = __webpack_require__(90);

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
	                stick_1.utils.addEventListener(this.el, event, fn);
	            }
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener(event, fn) {
	            if (this.el) {
	                stick_1.utils.removeEventListener(this.el, event, fn);
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
	    }, {
	        key: 'name',
	        get: function get() {
	            if (this.el) {
	                return this.el.getAttribute('name');
	            }
	            return this.attributes['name'];
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

	var template_1 = __webpack_require__(3);

	var Base = function (_template_1$BaseCompo) {
	    _inherits(Base, _template_1$BaseCompo);

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
	}(template_1.BaseComponent);

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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	var stick_1 = __webpack_require__(4);
	__export(__webpack_require__(78));
	__webpack_require__(79);
	var components_1 = __webpack_require__(82);
	stick_1.component('hide', components_1.Hide);
	stick_1.component('show', components_1.Show);
	stick_1.component('unsafe', components_1.Unsafe);
	stick_1.component('delegate', components_1.Delegate);
	__export(__webpack_require__(77));
	__export(__webpack_require__(81));
	var view_1 = __webpack_require__(63);
	exports.Reference = view_1.Reference;
	exports.Assignment = view_1.Assignment;
	exports.Call = view_1.Call;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var internal_1 = __webpack_require__(5);
	var errors_1 = __webpack_require__(30);
	var repository_1 = __webpack_require__(31);
	var utils = __webpack_require__(6);
	var module_factory_1 = __webpack_require__(32);
	var container_1 = __webpack_require__(76);
	var base_component_1 = __webpack_require__(77);
	var templ = __webpack_require__(58);
	var annotations = __webpack_require__(57);
	var debug = __webpack_require__(23)('stick');
	function service(name, definition) {
	    var _internal_1$getDepend = internal_1.getDependencies(definition);

	    var _internal_1$getDepend2 = _slicedToArray(_internal_1$getDepend, 1);

	    var fn = _internal_1$getDepend2[0];

	    if (fn && typeof fn === 'function') {
	        repository_1.Repository.add(internal_1.DependencyType.Service, name, fn);
	    } else {
	        throw new errors_1.StickError('service should be a function');
	    }
	}
	exports.service = service;
	function factory(name, factory) {
	    var _internal_1$getDepend3 = internal_1.getDependencies(factory);

	    var _internal_1$getDepend4 = _slicedToArray(_internal_1$getDepend3, 1);

	    var fn = _internal_1$getDepend4[0];

	    if (!fn) throw new errors_1.StickError('factory');
	    repository_1.Repository.add(internal_1.DependencyType.Factory, name, fn);
	}
	exports.factory = factory;
	var container = new container_1.Container();
	function _module(name) {
	    var definition = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (definition == null) {
	        var _factory = void 0;
	        // Check if module already is defined
	        if (container.hasHandler(name)) {
	            _factory = container.get(name);
	        } else if (repository_1.Repository.has(internal_1.DependencyType.Module, name)) {
	            var result = repository_1.Repository.get(internal_1.DependencyType.Module, name);
	            _factory = new module_factory_1.ModuleFactory(name, result.handler, container.createChild());
	            container.registerInstance(name, _factory);
	        } else {
	            throw new errors_1.StickError('no module named ' + name);
	        }
	        return _factory;
	    }

	    var _internal_1$getDepend5 = internal_1.getDependencies(definition);

	    var _internal_1$getDepend6 = _slicedToArray(_internal_1$getDepend5, 2);

	    var def = _internal_1$getDepend6[0];
	    var deps = _internal_1$getDepend6[1];

	    if (def) {
	        var fn = void 0;
	        if (typeof def !== 'function' && utils.isObject(def)) {
	            var copy = utils.extend({}, def);
	            if (typeof def.initialize === 'function') {
	                fn = def.initialize;
	                delete copy.initialize;
	            } else if (typeof def.constructor === 'function') {
	                fn = def.constructor;
	                delete copy.constructor;
	            }
	            if (!deps || deps.length == 0) {
	                internal_1.getDependencies(fn);
	            } else {
	                fn.inject = deps;
	            }
	            utils.assign(fn.prototype, copy);
	        } else if (typeof def === 'function') {
	            fn = def;
	        }
	        if (typeof fn !== 'function') {
	            throw new errors_1.StickError('controller defition should be a function or an object literal');
	        }
	        var _factory2 = new module_factory_1.ModuleFactory(name, fn, container.createChild());
	        container.registerInstance(name, _factory2, true);
	        return _factory2;
	    } else {
	        throw new errors_1.StickError('controller defition should be a function or an object literal');
	    }
	}
	exports.module = _module;
	function component(name, handler) {
	    //let component: ComponentDefinition
	    var Component = void 0;
	    if (typeof handler === 'function') {
	        /*component = {
	            initialize: <any>handler,
	        }*/
	        Component = handler;
	    } else if (utils.isObject(handler) && typeof handler.initialize === 'function') {
	        Component = utils.inherits(base_component_1.BaseComponent, handler);
	    } else {
	        throw new errors_1.StickError("component should be a function or an object");
	    }
	    //let Component = utils.inherits(<any>BaseComponent, component)
	    debug('defining component: %s', name);
	    templ.component(name, Component);
	}
	exports.component = component;
	function attribute(name, handler) {
	    debug('defining attribute: %s', name);
	    templ.attribute(name, handler);
	}
	exports.attribute = attribute;
	function decorator(name, decorator) {
	    if (utils.has(annotations, name)) {
	        throw new Error('decorator called ' + name + ' already defined!');
	    }
	    annotations[name] = decorator;
	}
	exports.decorator = decorator;
	function modifier(name, modifier) {
	    debug('defining modifier: %s', name);
	    templ.modifier(name, modifier);
	}
	exports.modifier = modifier;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var utils = __webpack_require__(6);
	var stick_di_1 = __webpack_require__(17);
	var paramRegEx = /function[^(]*\(([^)]*)\)/i;
	function getFunctionParameters(fn) {
	    var cache = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    var params = stick_di_1.Metadata.getOwn(stick_di_1.Metadata.paramTypes, fn);
	    if (!params) {
	        var match = fn.toString().match(paramRegEx);
	        if (match) {
	            params = match[1].replace(/,/, ' ').split(' ').map(function (x) {
	                return x.replace(',', '').trim();
	            }).filter(function (m) {
	                return m !== '';
	            });
	            if (cache) stick_di_1.Metadata.define(stick_di_1.Metadata.paramTypes, params, fn, undefined);
	        }
	    }
	    return params || [];
	}
	exports.getFunctionParameters = getFunctionParameters;
	(function (DependencyType) {
	    DependencyType[DependencyType["Service"] = 0] = "Service";
	    DependencyType[DependencyType["Module"] = 1] = "Module";
	    DependencyType[DependencyType["Controller"] = 2] = "Controller";
	    DependencyType[DependencyType["Factory"] = 3] = "Factory";
	})(exports.DependencyType || (exports.DependencyType = {}));
	var DependencyType = exports.DependencyType;
	(function (Metakey) {
	    Metakey[Metakey["DependencyType"] = 0] = "DependencyType";
	    Metakey[Metakey["Template"] = 1] = "Template";
	})(exports.Metakey || (exports.Metakey = {}));
	var Metakey = exports.Metakey;
	exports.DIServiceConfig = "mobyjs:service:config";
	function getDependencies(fn) {
	    var dependencies = void 0;
	    if (fn.constructor === Array) {
	        // TODO: Check for function
	        var tmp = fn.pop();
	        dependencies = fn;
	        fn = tmp;
	        fn.inject = dependencies;
	    } else if (typeof fn === 'function') {
	        dependencies = utils.result(fn, "inject");
	        if (!dependencies || dependencies.length == 0) {
	            var _fn = fn;
	            // FIXME: Find a way not to delete type scripts type descriptions
	            // But as it is now, context will be inferred as an Object
	            if (_fn.__metadata__ && _fn.__metadata__.undefined['design:paramtypes']) {
	                delete _fn.__metadata__.undefined['design:paramtypes'];
	            }
	            dependencies = getFunctionParameters(fn);
	            _fn.inject = dependencies;
	        }
	    } else {
	        return [fn, null];
	    }
	    return [fn, dependencies];
	}
	exports.getDependencies = getDependencies;
	function tryCatch(fn) {
	    var val = void 0,
	        err = void 0;
	    try {
	        val = fn();
	    } catch (e) {
	        err = e;
	    }
	    return [val, err];
	}
	function resolveDependencies(target, container) {
	    var i = void 0,
	        ii = void 0,
	        ret = void 0,
	        inject = target.inject;
	    if (!inject) {
	        return utils.Promise.resolve([]);
	    }
	    for (i = 0, ii = inject.length; i < ii; i++) {
	        ret = tryCatch(function () {
	            return container.get(inject[i]);
	        });
	        if (ret[1] != null) return utils.Promise.reject(ret[1]);
	        inject[i] = ret[0];
	    }
	    return utils.Promise.all(inject);
	}
	exports.resolveDependencies = resolveDependencies;
	function setDependencyType(type) {
	    return function (target) {
	        var str = Metakey[Metakey.DependencyType];
	        stick_di_1.Metadata.define(str, type, target, undefined);
	    };
	}
	exports.setDependencyType = setDependencyType;
	function getDependencyType(target) {
	    var key = Metakey[Metakey.DependencyType],
	        type = stick_di_1.Metadata.getOwn(key, target, undefined);
	    return type;
	}
	exports.getDependencyType = getDependencyType;
	function isDependencyType(target, type) {
	    return getDependencyType(target) === type;
	}
	exports.isDependencyType = isDependencyType;
	function setActivator(target, activator) {
	    var instanceActivatorKey = stick_di_1.Metadata.instanceActivator;
	    stick_di_1.Metadata.define(instanceActivatorKey, activator, target, undefined);
	}
	exports.setActivator = setActivator;
	function setDependencyResolver(target, activator) {
	    var dependencyResolverKey = stick_di_1.Metadata.dependencyResolver;
	    stick_di_1.Metadata.define(dependencyResolverKey, activator, target, undefined);
	}
	exports.setDependencyResolver = setDependencyResolver;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(7));
	__export(__webpack_require__(9));
	__export(__webpack_require__(11));
	__export(__webpack_require__(8));
	__export(__webpack_require__(10));
	__export(__webpack_require__(12));
	__export(__webpack_require__(16));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(8);
	var __slice = Array.prototype.slice;
	function isArray(array) {
	    return Array.isArray(array);
	}
	exports.isArray = isArray;
	function unique(array) {
	    return array.filter(function (e, i) {
	        for (i += 1; i < array.length; i += 1) {
	            if (utils_1.equal(e, array[i])) {
	                return false;
	            }
	        }
	        return true;
	    });
	}
	exports.unique = unique;
	function any(array, predicate) {
	    for (var i = 0, ii = array.length; i < ii; i++) {
	        if (predicate(array[i]))
	            return true;
	    }
	    return false;
	}
	exports.any = any;
	function indexOf(array, item) {
	    for (var i = 0, len = array.length; i < len; i++)
	        if (array[i] === item)
	            return i;
	    return -1;
	}
	exports.indexOf = indexOf;
	function find(array, callback, ctx) {
	    var v;
	    for (var i = 0, ii = array.length; i < ii; i++) {
	        if (callback.call(ctx, array[i]))
	            return array[i];
	    }
	    return null;
	}
	exports.find = find;
	function filter(array, callback, ctx) {
	    return array.filter(function (e, i) {
	        return callback.call(ctx, e, i);
	    });
	}
	exports.filter = filter;
	function slice(array, begin, end) {
	    return __slice.call(array, begin, end);
	}
	exports.slice = slice;
	function flatten(arr) {
	    return arr.reduce(function (flat, toFlatten) {
	        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	    }, []);
	}
	exports.flatten = flatten;
	function sortBy(obj, value, context) {
	    var iterator = typeof value === 'function' ? value : function (obj) { return obj[value]; };
	    return obj
	        .map(function (value, index, list) {
	        return {
	            value: value,
	            index: index,
	            criteria: iterator.call(context, value, index, list)
	        };
	    })
	        .sort(function (left, right) {
	        var a = left.criteria, b = right.criteria;
	        if (a !== b) {
	            if (a > b || a === void 0)
	                return 1;
	            if (a < b || b === void 0)
	                return -1;
	        }
	        return left.index - right.index;
	    })
	        .map(function (item) {
	        return item.value;
	    });
	}
	exports.sortBy = sortBy;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var objects_1 = __webpack_require__(9);
	var arrays_1 = __webpack_require__(7);
	var strings_1 = __webpack_require__(10);
	var idCounter = 0;
	var nativeBind = Function.prototype.bind;
	function ajax() {
	    var e;
	    if (window.hasOwnProperty('XMLHttpRequest')) {
	        return new XMLHttpRequest();
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.6.0');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.3.0');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    return e;
	}
	exports.ajax = ajax;
	;
	function uniqueId(prefix) {
	    if (prefix === void 0) { prefix = ''; }
	    return prefix + (++idCounter);
	}
	exports.uniqueId = uniqueId;
	function proxy(from, to, fns) {
	    if (!Array.isArray(fns))
	        fns = [fns];
	    fns.forEach(function (fn) {
	        if (typeof to[fn] === 'function') {
	            from[fn] = bind(to[fn], to);
	        }
	    });
	}
	exports.proxy = proxy;
	function bind(method, context) {
	    var args = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        args[_i - 2] = arguments[_i];
	    }
	    if (typeof method !== 'function')
	        throw new Error('method not at function');
	    if (nativeBind != null)
	        return nativeBind.call.apply(nativeBind, [method, context].concat(args));
	    args = args || [];
	    var fnoop = function () { };
	    var fBound = function () {
	        var ctx = this instanceof fnoop ? this : context;
	        return callFunc(method, ctx, args.concat(arrays_1.slice(arguments)));
	    };
	    fnoop.prototype = this.prototype;
	    fBound.prototype = new fnoop();
	    return fBound;
	}
	exports.bind = bind;
	function callFunc(fn, ctx, args) {
	    if (args === void 0) { args = []; }
	    switch (args.length) {
	        case 0:
	            return fn.call(ctx);
	        case 1:
	            return fn.call(ctx, args[0]);
	        case 2:
	            return fn.call(ctx, args[0], args[1]);
	        case 3:
	            return fn.call(ctx, args[0], args[1], args[2]);
	        case 4:
	            return fn.call(ctx, args[0], args[1], args[2], args[3]);
	        case 5:
	            return fn.call(ctx, args[0], args[1], args[2], args[3], args[4]);
	        default:
	            return fn.apply(ctx, args);
	    }
	}
	exports.callFunc = callFunc;
	function equal(a, b) {
	    return eq(a, b, [], []);
	}
	exports.equal = equal;
	function triggerMethodOn(obj, eventName, args) {
	    var ev = strings_1.camelcase("on-" + eventName.replace(':', '-'));
	    if (obj[ev] && typeof obj[ev] === 'function') {
	        callFunc(obj[ev], obj, args);
	    }
	    if (typeof obj.trigger === 'function') {
	        args = [eventName].concat(args);
	        callFunc(obj.trigger, obj, args);
	    }
	}
	exports.triggerMethodOn = triggerMethodOn;
	function getOption(option, objs) {
	    for (var _i = 0, objs_1 = objs; _i < objs_1.length; _i++) {
	        var o = objs_1[_i];
	        if (objects_1.isObject(o) && o[option])
	            return o[option];
	    }
	    return null;
	}
	exports.getOption = getOption;
	function inherits(parent, protoProps, staticProps) {
	    var child;
	    if (protoProps && objects_1.has(protoProps, 'constructor')) {
	        child = protoProps.constructor;
	    }
	    else {
	        child = function () { return parent.apply(this, arguments); };
	    }
	    objects_1.extend(child, parent, staticProps);
	    var Surrogate = function () { this.constructor = child; };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate;
	    if (protoProps)
	        objects_1.extend(child.prototype, protoProps);
	    child.__super__ = parent.prototype;
	    return child;
	}
	exports.inherits = inherits;
	exports.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	        && window.setImmediate;
	    var canPost = typeof window !== 'undefined'
	        && window.postMessage && window.addEventListener;
	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f); };
	    }
	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);
	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }
	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();
	function eq(a, b, aStack, bStack) {
	    if (a === b)
	        return a !== 0 || 1 / a == 1 / b;
	    if (a == null || b == null)
	        return a === b;
	    var className = toString.call(a);
	    if (className != toString.call(b))
	        return false;
	    switch (className) {
	        case '[object String]':
	            return a == String(b);
	        case '[object Number]':
	            return a !== +a ? b !== +b : (a === 0 ? 1 / a === 1 / b : a === +b);
	        case '[object Date]':
	        case '[object Boolean]':
	            return +a == +b;
	        case '[object RegExp]':
	            return a.source == b.source &&
	                a.global == b.global &&
	                a.multiline == b.multiline &&
	                a.ignoreCase == b.ignoreCase;
	    }
	    if (typeof a != 'object' || typeof b != 'object')
	        return false;
	    var length = aStack.length;
	    while (length--) {
	        if (aStack[length] == a)
	            return bStack[length] == b;
	    }
	    var aCtor = a.constructor, bCtor = b.constructor;
	    if (aCtor !== bCtor && !(typeof aCtor === 'function' && (aCtor instanceof aCtor) &&
	        typeof bCtor === 'function' && (bCtor instanceof bCtor))) {
	        return false;
	    }
	    aStack.push(a);
	    bStack.push(b);
	    var size = 0, result = true;
	    if (className === '[object Array]') {
	        size = a.length;
	        result = size === b.length;
	        if (result) {
	            while (size--) {
	                if (!(result = eq(a[size], b[size], aStack, bStack)))
	                    break;
	            }
	        }
	    }
	    else {
	        for (var key in a) {
	            if (objects_1.has(a, key)) {
	                size++;
	                if (!(result = objects_1.has(b, key) && eq(a[key], b[key], aStack, bStack)))
	                    break;
	            }
	        }
	        if (result) {
	            for (key in b) {
	                if (objects_1.has(b, key) && !(size--))
	                    break;
	            }
	            result = !size;
	        }
	    }
	    aStack.pop();
	    bStack.pop();
	    return result;
	}
	;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(8);
	var __has = Object.prototype.hasOwnProperty;
	function objToPaths(obj, separator) {
	    if (separator === void 0) { separator = "."; }
	    var ret = {};
	    for (var key in obj) {
	        var val = obj[key];
	        if (val && (val.constructor === Object || val.constructor === Array) && !isEmpty(val)) {
	            var obj2 = objToPaths(val);
	            for (var key2 in obj2) {
	                var val2 = obj2[key2];
	                ret[key + separator + key2] = val2;
	            }
	        }
	        else {
	            ret[key] = val;
	        }
	    }
	    return ret;
	}
	exports.objToPaths = objToPaths;
	function isObject(obj) {
	    return obj === Object(obj);
	}
	exports.isObject = isObject;
	function isEmpty(obj) {
	    return Object.keys(obj).length === 0;
	}
	exports.isEmpty = isEmpty;
	function extend(obj) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    if (!isObject(obj))
	        return obj;
	    var o, k;
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        o = args_1[_a];
	        if (!isObject(o))
	            continue;
	        for (k in o) {
	            if (has(o, k))
	                obj[k] = o[k];
	        }
	    }
	    return obj;
	}
	exports.extend = extend;
	function assign(target) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    if (target === undefined || target === null) {
	        throw new TypeError('Cannot convert first argument to object');
	    }
	    var to = Object(target);
	    for (var i = 0, ii = args.length; i < ii; i++) {
	        var nextSource = args[i];
	        if (nextSource === undefined || nextSource === null) {
	            continue;
	        }
	        nextSource = Object(nextSource);
	        var keysArray = Object.keys(Object(nextSource));
	        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	                to[nextKey] = nextSource[nextKey];
	            }
	        }
	    }
	    return to;
	}
	exports.assign = assign;
	function has(obj, prop) {
	    return __has.call(obj, prop);
	}
	exports.has = has;
	function pick(obj, props) {
	    var out = {}, prop;
	    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
	        prop = props_1[_i];
	        if (has(obj, prop))
	            out[prop] = obj[prop];
	    }
	    return out;
	}
	exports.pick = pick;
	function omit(obj, props) {
	    var out = {};
	    for (var key in obj) {
	        if (!!~props.indexOf(key))
	            continue;
	        out[key] = obj[key];
	    }
	    return out;
	}
	exports.omit = omit;
	function result(obj, prop, ctx, args) {
	    var ret = obj[prop];
	    return (typeof ret === 'function') ? utils_1.callFunc(ret, ctx, args || []) : ret;
	}
	exports.result = result;
	function values(obj) {
	    var output = [];
	    for (var k in obj)
	        if (has(obj, k)) {
	            output.push(obj[k]);
	        }
	    return output;
	}
	exports.values = values;
	function intersectionObjects(a, b, predicate) {
	    var results = [], aElement, existsInB;
	    for (var i = 0, ii = a.length; i < ii; i++) {
	        aElement = a[i];
	        existsInB = (b, function (bElement) { return predicate(bElement, aElement); });
	        if (existsInB) {
	            results.push(aElement);
	        }
	    }
	    return results;
	}
	function intersection(results) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    var lastArgument = args[args.length - 1];
	    var arrayCount = args.length;
	    var areEqualFunction = utils_1.equal;
	    if (typeof lastArgument === "function") {
	        areEqualFunction = lastArgument;
	        arrayCount--;
	    }
	    for (var i = 0; i < arrayCount; i++) {
	        var array = args[i];
	        results = intersectionObjects(results, array, areEqualFunction);
	        if (results.length === 0)
	            break;
	    }
	    return results;
	}
	exports.intersection = intersection;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	function isString(a) {
	    return typeof a === 'string';
	}
	exports.isString = isString;
	function camelcase(input) {
	    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
	        return group1.toUpperCase();
	    });
	}
	exports.camelcase = camelcase;
	;
	function truncate(str, length) {
	    var n = str.substring(0, Math.min(length, str.length));
	    return n + (n.length == str.length ? '' : '...');
	}
	exports.truncate = truncate;
	function humanFileSize(bytes, si) {
	    if (si === void 0) { si = false; }
	    var thresh = si ? 1000 : 1024;
	    if (Math.abs(bytes) < thresh) {
	        return bytes + ' B';
	    }
	    var units = si
	        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	    var u = -1;
	    do {
	        bytes /= thresh;
	        ++u;
	    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
	    return bytes.toFixed(1) + ' ' + units[u];
	}
	exports.humanFileSize = humanFileSize;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var objects_1 = __webpack_require__(9);
	var arrays_1 = __webpack_require__(7);
	var utils_1 = __webpack_require__(8);
	exports.Promise = (typeof window === 'undefined') ? global.Promise : window.Promise;
	function isPromise(obj) {
	    return obj && typeof obj.then === 'function';
	}
	exports.isPromise = isPromise;
	function toPromise(obj) {
	    if (!obj) {
	        return obj;
	    }
	    if (isPromise(obj)) {
	        return obj;
	    }
	    if ("function" == typeof obj) {
	        return thunkToPromise.call(this, obj);
	    }
	    if (Array.isArray(obj)) {
	        return arrayToPromise.call(this, obj);
	    }
	    if (objects_1.isObject(obj)) {
	        return objectToPromise.call(this, obj);
	    }
	    return exports.Promise.resolve(obj);
	}
	exports.toPromise = toPromise;
	function thunkToPromise(fn) {
	    var ctx = this;
	    return new exports.Promise(function (resolve, reject) {
	        fn.call(ctx, function (err, res) {
	            if (err)
	                return reject(err);
	            if (arguments.length > 2)
	                res = arrays_1.slice(arguments, 1);
	            resolve(res);
	        });
	    });
	}
	exports.thunkToPromise = thunkToPromise;
	function arrayToPromise(obj) {
	    return exports.Promise.all(obj.map(toPromise, this));
	}
	exports.arrayToPromise = arrayToPromise;
	function objectToPromise(obj) {
	    var results = new obj.constructor();
	    var keys = Object.keys(obj);
	    var promises = [];
	    for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var promise = toPromise.call(this, obj[key]);
	        if (promise && isPromise(promise))
	            defer(promise, key);
	        else
	            results[key] = obj[key];
	    }
	    return exports.Promise.all(promises).then(function () {
	        return results;
	    });
	    function defer(promise, key) {
	        results[key] = undefined;
	        promises.push(promise.then(function (res) {
	            results[key] = res;
	        }));
	    }
	}
	exports.objectToPromise = objectToPromise;
	function deferred(fn, ctx) {
	    var args = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        args[_i - 2] = arguments[_i];
	    }
	    var ret = {};
	    ret.promise = new exports.Promise(function (resolve, reject) {
	        ret.resolve = resolve;
	        ret.reject = reject;
	        ret.done = function (err, result) { if (err)
	            return reject(err);
	        else
	            resolve(result); };
	    });
	    return ret;
	}
	exports.deferred = deferred;
	;
	function callback(promise, callback, ctx) {
	    promise.then(function (result) {
	        callback.call(ctx, null, result);
	    }).catch(function (err) {
	        callback.call(ctx, err);
	    });
	}
	exports.callback = callback;
	function delay(timeout) {
	    var defer = deferred();
	    timeout == null ? utils_1.nextTick(defer.resolve) : setTimeout(defer.resolve, timeout);
	    return defer.promise;
	}
	exports.delay = delay;
	;
	function eachAsync(array, iterator, context, accumulate) {
	    if (accumulate === void 0) { accumulate = false; }
	    return mapAsync(array, iterator, context, accumulate)
	        .then(function () { return void 0; });
	}
	exports.eachAsync = eachAsync;
	function mapAsync(array, iterator, context, accumulate) {
	    if (accumulate === void 0) { accumulate = false; }
	    return new exports.Promise(function (resolve, reject) {
	        var i = 0, len = array.length, errors = [], results = [];
	        function next(err, result) {
	            if (err && !accumulate)
	                return reject(err);
	            if (err)
	                errors.push(err);
	            if (i === len)
	                return errors.length ? reject(arrays_1.flatten(errors)) : resolve(results);
	            var ret = iterator.call(context, array[i++]);
	            if (isPromise(ret)) {
	                ret.then(function (r) { results.push(r); next(null, r); }, next);
	            }
	            else if (ret instanceof Error) {
	                next(ret);
	            }
	            else {
	                next(null);
	            }
	        }
	        next(null);
	    });
	}
	exports.mapAsync = mapAsync;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(13));
	__export(__webpack_require__(15));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	(function (Browser) {
	    Browser[Browser["Chrome"] = 0] = "Chrome";
	    Browser[Browser["Explorer"] = 1] = "Explorer";
	    Browser[Browser["Firefox"] = 2] = "Firefox";
	    Browser[Browser["Safari"] = 3] = "Safari";
	    Browser[Browser["Opera"] = 4] = "Opera";
	    Browser[Browser["Unknown"] = 5] = "Unknown";
	})(exports.Browser || (exports.Browser = {}));
	var Browser = exports.Browser;
	var browser = (function () {
	    var ua = navigator.userAgent;
	    if (!!~ua.indexOf('MSIE'))
	        return Browser.Explorer;
	    var isOpera = !!~ua.toLowerCase().indexOf('op'), isChrome = !!~ua.indexOf('Chrome'), isSafari = !!~ua.indexOf('Safari');
	    if (isChrome && isSafari)
	        return Browser.Safari;
	    if (isChrome && isOpera)
	        return Browser.Opera;
	    if (isChrome)
	        return Browser.Chrome;
	    return Browser.Unknown;
	})();
	var is_node = (function () {
	    try {
	        return 'object' === typeof process && Object.prototype.toString.call(process) === '[object process]';
	    }
	    catch (e) {
	        return false;
	    }
	})();
	function isNode() { return is_node; }
	exports.isNode = isNode;
	function isSafari() {
	    return browser === Browser.Safari;
	}
	exports.isSafari = isSafari;
	function isChrome() {
	    return browser === Browser.Chrome;
	}
	exports.isChrome = isChrome;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var arrays_1 = __webpack_require__(7);
	var objects_1 = __webpack_require__(9);
	var utils_1 = __webpack_require__(13);
	var ElementProto = (typeof Element !== 'undefined' && Element.prototype) || {};
	var matchesSelector = ElementProto.matches ||
	    ElementProto.webkitMatchesSelector ||
	    ElementProto.mozMatchesSelector ||
	    ElementProto.msMatchesSelector ||
	    ElementProto.oMatchesSelector || function (selector) {
	    var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
	    return !!~arrays_1.indexOf(nodeList, this);
	};
	var elementAddEventListener = ElementProto.addEventListener || function (eventName, listener) {
	    return this.attachEvent('on' + eventName, listener);
	};
	var elementRemoveEventListener = ElementProto.removeEventListener || function (eventName, listener) {
	    return this.detachEvent('on' + eventName, listener);
	};
	var transitionEndEvent = (function transitionEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitTransition': 'webkitTransitionEnd',
	        'MozTransition': 'transitionend',
	        'OTransition': 'oTransitionEnd otransitionend',
	        'transition': 'transitionend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	});
	var animationEndEvent = (function animationEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitAnimation': 'webkitAnimationEnd',
	        'MozAnimation': 'animationend',
	        'OAnimation': 'oAnimationEnd oanimationend',
	        'animation': 'animationend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	});
	function matches(elm, selector) {
	    return matchesSelector.call(elm, selector);
	}
	exports.matches = matches;
	function addEventListener(elm, eventName, listener, capture) {
	    if (capture === void 0) { capture = false; }
	    if (utils_1.isSafari() && elm === window) {
	        elm.addEventListener(eventName, listener, capture);
	    }
	    else {
	        elementAddEventListener.call(elm, eventName, listener, capture);
	    }
	}
	exports.addEventListener = addEventListener;
	function removeEventListener(elm, eventName, listener) {
	    if (utils_1.isSafari() && elm === window) {
	        elm.removeEventListener(eventName, listener);
	    }
	    else {
	        elementRemoveEventListener.call(elm, eventName, listener);
	    }
	}
	exports.removeEventListener = removeEventListener;
	var unbubblebles = 'focus blur change'.split(' ');
	var domEvents = [];
	function delegate(elm, selector, eventName, callback, ctx) {
	    var root = elm;
	    var handler = function (e) {
	        var node = e.target || e.srcElement;
	        if (e.delegateTarget)
	            return;
	        for (; node && node != root; node = node.parentNode) {
	            if (matches(node, selector)) {
	                e.delegateTarget = node;
	                callback(e);
	            }
	        }
	    };
	    var useCap = !!~unbubblebles.indexOf(eventName);
	    addEventListener(elm, eventName, handler, useCap);
	    domEvents.push({ elm: elm, eventName: eventName, handler: handler, listener: callback, selector: selector });
	    return handler;
	}
	exports.delegate = delegate;
	function undelegate(elm, selector, eventName, callback) {
	    var handlers = domEvents.slice();
	    for (var i = 0, len = handlers.length; i < len; i++) {
	        var item = handlers[i];
	        var match = elm === item.elm &&
	            (eventName ? item.eventName === eventName : true) &&
	            (callback ? item.listener === callback : true) &&
	            (selector ? item.selector === selector : true);
	        if (!match)
	            continue;
	        removeEventListener(elm, item.eventName, item.handler);
	        domEvents.splice(arrays_1.indexOf(handlers, item), 1);
	    }
	}
	exports.undelegate = undelegate;
	function addClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            if (elm.classList.contains(split[i].trim()))
	                continue;
	            elm.classList.add(split[i].trim());
	        }
	    }
	    else {
	        elm.className = arrays_1.unique(elm.className.split(' ').concat(className.split(' '))).join(' ');
	    }
	}
	exports.addClass = addClass;
	function removeClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            elm.classList.remove(split[i].trim());
	        }
	    }
	    else {
	        var split = elm.className.split(' '), classNames = className.split(' '), tmp = split, index = void 0;
	        for (var i = 0, ii = classNames.length; i < ii; i++) {
	            index = split.indexOf(classNames[i]);
	            if (!!~index)
	                split = split.splice(index, 1);
	        }
	    }
	}
	exports.removeClass = removeClass;
	function hasClass(elm, className) {
	    if (elm.classList) {
	        return elm.classList.contains(className);
	    }
	    var reg = new RegExp('\b' + className);
	    return reg.test(elm.className);
	}
	exports.hasClass = hasClass;
	function selectionStart(elm) {
	    if ('selectionStart' in elm) {
	        return elm.selectionStart;
	    }
	    else if (document.selection) {
	        elm.focus();
	        var sel = document.selection.createRange();
	        var selLen = document.selection.createRange().text.length;
	        sel.moveStart('character', -elm.value.length);
	        return sel.text.length - selLen;
	    }
	}
	exports.selectionStart = selectionStart;
	var _events = {
	    animationEnd: null,
	    transitionEnd: null
	};
	function transitionEnd(elm, fn, ctx, duration) {
	    var event = _events.transitionEnd || (_events.transitionEnd = transitionEndEvent());
	    var callback = function (e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.transitionEnd = transitionEnd;
	function animationEnd(elm, fn, ctx, duration) {
	    var event = _events.animationEnd || (_events.animationEnd = animationEndEvent());
	    var callback = function (e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.animationEnd = animationEnd;
	exports.domReady = (function () {
	    var fns = [], listener, doc = document, hack = doc.documentElement.doScroll, domContentLoaded = 'DOMContentLoaded', loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
	    if (!loaded) {
	        doc.addEventListener(domContentLoaded, listener = function () {
	            doc.removeEventListener(domContentLoaded, listener);
	            loaded = true;
	            while (listener = fns.shift())
	                listener();
	        });
	    }
	    return function (fn) {
	        loaded ? setTimeout(fn, 0) : fns.push(fn);
	    };
	});
	var Html = (function () {
	    function Html(el) {
	        if (!Array.isArray(el))
	            el = [el];
	        this._elements = el || [];
	    }
	    Html.query = function (query, context) {
	        if (typeof context === 'string') {
	            context = document.querySelectorAll(context);
	        }
	        var html;
	        var els;
	        if (typeof query === 'string') {
	            if (context) {
	                if (context instanceof HTMLElement) {
	                    els = arrays_1.slice(context.querySelectorAll(query));
	                }
	                else {
	                    html = new Html(arrays_1.slice(context));
	                    return html.find(query);
	                }
	            }
	            else {
	                els = arrays_1.slice(document.querySelectorAll(query));
	            }
	        }
	        else if (query && query instanceof Element) {
	            els = [query];
	        }
	        else if (query && query instanceof NodeList) {
	            els = arrays_1.slice(query);
	        }
	        return new Html(els);
	    };
	    Object.defineProperty(Html.prototype, "length", {
	        get: function () {
	            return this._elements.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Html.prototype.get = function (n) {
	        n = n === undefined ? 0 : n;
	        return n >= this.length ? undefined : this._elements[n];
	    };
	    Html.prototype.addClass = function (str) {
	        return this.forEach(function (e) {
	            addClass(e, str);
	        });
	    };
	    Html.prototype.removeClass = function (str) {
	        return this.forEach(function (e) {
	            removeClass(e, str);
	        });
	    };
	    Html.prototype.hasClass = function (str) {
	        return this._elements.reduce(function (p, c) {
	            return hasClass(c, str);
	        }, false);
	    };
	    Html.prototype.attr = function (key, value) {
	        var attr;
	        if (typeof key === 'string' && value) {
	            attr = (_a = {}, _a[key] = value, _a);
	        }
	        else if (typeof key == 'string') {
	            if (this.length)
	                return this.get(0).getAttribute(key);
	        }
	        else if (objects_1.isObject(key)) {
	            attr = key;
	        }
	        return this.forEach(function (e) {
	            for (var k in attr) {
	                e.setAttribute(k, attr[k]);
	            }
	        });
	        var _a;
	    };
	    Html.prototype._setValue = function (node, value) {
	        var type = node.type || "";
	        var isCheckbox = /checkbox/.test(type);
	        var isRadio = /radio/.test(type);
	        var isRadioOrCheckbox = isCheckbox || isRadio;
	        var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
	        var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
	        var isSelect = /select/i.test(node.nodeName);
	        if (value == null)
	            value = "";
	        if (isRadioOrCheckbox) {
	            if (isRadio) {
	                if (String(value) === String(node.value)) {
	                    node.checked = true;
	                }
	            }
	            else {
	                node.checked = value;
	            }
	        }
	        else {
	            if (isInput || isSelect) {
	                node.value = value;
	            }
	            else {
	                node.textContent = value;
	            }
	        }
	    };
	    Html.prototype._getValue = function (node) {
	        var type = node.type || "";
	        var isCheckbox = /checkbox/.test(type);
	        var isRadio = /radio/.test(type);
	        var isRadioOrCheckbox = isCheckbox || isRadio;
	        var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
	        var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
	        var isSelect = /select/i.test(node.nodeName);
	        if (isCheckbox) {
	            return Boolean(node.checked);
	        }
	        else if (isInput || isSelect) {
	            return node.value || "";
	        }
	        else {
	            return node.textContent || "";
	        }
	    };
	    Html.prototype.val = function (value) {
	        var _this = this;
	        if (arguments.length === 0) {
	            var first = this.get(0);
	            if (first === undefined)
	                return undefined;
	            return this._getValue(first);
	        }
	        else {
	            return this.forEach(function (e) { return _this._setValue(e, value); });
	        }
	    };
	    Html.prototype.text = function (str) {
	        if (arguments.length === 0) {
	            return this.length > 0 ? this.get(0).textContent : null;
	        }
	        return this.forEach(function (e) { return e.textContent = str; });
	    };
	    Html.prototype.html = function (html) {
	        if (arguments.length === 0) {
	            return this.length > 0 ? this.get(0).innerHTML : null;
	        }
	        return this.forEach(function (e) { return e.innerHTML = html; });
	    };
	    Html.prototype.css = function (attr, value) {
	        if (arguments.length === 2) {
	            return this.forEach(function (e) {
	                if (attr in e.style)
	                    e.style[attr] = String(value);
	            });
	        }
	        else {
	            return this.forEach(function (e) {
	                for (var k in attr) {
	                    if (attr in e.style)
	                        e.style[k] = String(attr[k]);
	                }
	            });
	        }
	    };
	    Html.prototype.parent = function () {
	        var out = [];
	        this.forEach(function (e) {
	            if (e.parentElement) {
	                out.push(e.parentElement);
	            }
	        });
	        return new Html(out);
	    };
	    Html.prototype.find = function (str) {
	        var out = [];
	        this.forEach(function (e) {
	            out = out.concat(arrays_1.slice(e.querySelectorAll(str)));
	        });
	        return new Html(out);
	    };
	    Html.prototype.map = function (fn) {
	        var out = new Array(this.length);
	        this.forEach(function (e, i) {
	            out[i] = fn(e, i);
	        });
	        return out;
	    };
	    Html.prototype.forEach = function (fn) {
	        this._elements.forEach(fn);
	        return this;
	    };
	    return Html;
	}());
	exports.Html = Html;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var strings_1 = __webpack_require__(10);
	var objects_1 = __webpack_require__(9);
	var promises_1 = __webpack_require__(11);
	var utils_1 = __webpack_require__(8);
	(function (HttpMethod) {
	    HttpMethod[HttpMethod["GET"] = 0] = "GET";
	    HttpMethod[HttpMethod["PUT"] = 1] = "PUT";
	    HttpMethod[HttpMethod["POST"] = 2] = "POST";
	    HttpMethod[HttpMethod["DELETE"] = 3] = "DELETE";
	    HttpMethod[HttpMethod["HEAD"] = 4] = "HEAD";
	})(exports.HttpMethod || (exports.HttpMethod = {}));
	var HttpMethod = exports.HttpMethod;
	function isResponse(a) {
	    return objects_1.isObject(status) && objects_1.has(a, 'status') && objects_1.has(a, 'statusText') && objects_1.has(a, 'body');
	}
	exports.isResponse = isResponse;
	var HttpError = (function (_super) {
	    __extends(HttpError, _super);
	    function HttpError(status, message, body) {
	        _super.call(this, message);
	        if (arguments.length === 1) {
	            if (isResponse(status)) {
	                this.status = status.status;
	                this.message = status.statusText;
	                this.body = status.body;
	            }
	            else {
	                this.status = status;
	            }
	        }
	        else {
	            this.status = status;
	            this.message = message;
	            this.body = body;
	        }
	    }
	    return HttpError;
	}(Error));
	exports.HttpError = HttpError;
	var ResponseError = (function (_super) {
	    __extends(ResponseError, _super);
	    function ResponseError(message) {
	        _super.call(this, message);
	    }
	    return ResponseError;
	}(Error));
	exports.ResponseError = ResponseError;
	function queryStringToParams(qs) {
	    var kvp, k, v, ls, params = {}, decode = decodeURIComponent;
	    var kvps = qs.split('&');
	    for (var i = 0, l = kvps.length; i < l; i++) {
	        var param = kvps[i];
	        kvp = param.split('='), k = kvp[0], v = kvp[1];
	        if (v == null)
	            v = true;
	        k = decode(k), v = decode(v), ls = params[k];
	        if (Array.isArray(ls))
	            ls.push(v);
	        else if (ls)
	            params[k] = [ls, v];
	        else
	            params[k] = v;
	    }
	    return params;
	}
	exports.queryStringToParams = queryStringToParams;
	function queryParam(obj) {
	    return Object.keys(obj).reduce(function (a, k) { a.push(k + '=' + encodeURIComponent(obj[k])); return a; }, []).join('&');
	}
	exports.queryParam = queryParam;
	var jsonRe = /^application\/json/, fileProto = /^file:/;
	var isValid = function (xhr, url) {
	    return (xhr.status >= 200 && xhr.status < 300) ||
	        (xhr.status === 304) ||
	        (xhr.status === 0 && fileProto.test(url)) ||
	        (xhr.status === 0 && window.location.protocol === 'file:');
	};
	var Request = (function () {
	    function Request(_method, _url) {
	        this._method = _method;
	        this._url = _url;
	        this._params = {};
	        this._headers = { 'X-Requested-With': 'XMLHttpRequest' };
	        this._xhr = utils_1.ajax();
	    }
	    Request.prototype.uploadProgress = function (fn) {
	        this._xhr.upload.addEventListener('progress', fn);
	        return this;
	    };
	    Request.prototype.downloadProgress = function (fn) {
	        this._xhr.addEventListener('progress', fn);
	        return this;
	    };
	    Request.prototype.header = function (field, value) {
	        if (strings_1.isString(field) && strings_1.isString(value)) {
	            this._headers[field] = value;
	        }
	        else if (objects_1.isObject(field)) {
	            objects_1.extend(this._headers, field);
	        }
	        return this;
	    };
	    Request.prototype.params = function (key, value) {
	        if (arguments.length === 1 && objects_1.isObject(key)) {
	            objects_1.extend(this._params, key);
	        }
	        else if (arguments.length === 2) {
	            this._params[key] = value;
	        }
	        return this;
	    };
	    Request.prototype.withCredentials = function (ret) {
	        this._xhr.withCredentials = ret;
	        return this;
	    };
	    Request.prototype.json = function (data, throwOnInvalid) {
	        var _this = this;
	        if (throwOnInvalid === void 0) { throwOnInvalid = false; }
	        this.header('content-type', 'application/json; charset=utf-8');
	        if (!strings_1.isString(data)) {
	            data = JSON.stringify(data);
	        }
	        return this.end(data, throwOnInvalid)
	            .then(function (resp) {
	            var accepts = _this._xhr.getResponseHeader('content-type');
	            if (jsonRe.test(accepts) && resp.body != "") {
	                var json = JSON.parse(resp.body);
	                var jResp = resp;
	                jResp.body = json;
	                return jResp;
	            }
	            else {
	                throw new ResponseError("type error");
	            }
	        });
	    };
	    Request.prototype.end = function (data, throwOnInvalid) {
	        var _this = this;
	        if (throwOnInvalid === void 0) { throwOnInvalid = false; }
	        data = data || this._data;
	        var defer = promises_1.deferred();
	        this._xhr.addEventListener('readystatechange', function () {
	            if (_this._xhr.readyState !== XMLHttpRequest.DONE)
	                return;
	            var resp = {
	                status: _this._xhr.status,
	                statusText: _this._xhr.statusText,
	                body: null,
	                headers: {},
	                isValid: false,
	                contentLength: 0,
	                contentType: null
	            };
	            var headers = _this._xhr.getAllResponseHeaders().split('\r\n');
	            if (headers.length) {
	                for (var i = 0, ii = headers.length; i < ii; i++) {
	                    if (headers[i] === '')
	                        continue;
	                    var split = headers[i].split(':');
	                    resp.headers[split[0].trim()] = split[1].trim();
	                }
	            }
	            resp.contentType = resp.headers['Content-Type'];
	            resp.contentLength = parseInt(resp.headers['Content-Length']);
	            if (isNaN(resp.contentLength))
	                resp.contentLength = 0;
	            resp.body = _this._xhr.response;
	            resp.isValid = isValid(_this._xhr, _this._url);
	            if (!resp.isValid && throwOnInvalid) {
	                return defer.reject(new HttpError(resp));
	            }
	            defer.resolve(resp);
	        });
	        var method = HttpMethod[this._method];
	        var url = this._url;
	        if (data && data === Object(data) && this._method == HttpMethod.GET) {
	            var sep = (url.indexOf('?') === -1) ? '?' : '&';
	            var d = sep + queryParam(data);
	            url += d;
	        }
	        url = this._apply_params(url);
	        this._xhr.open(method, url, true);
	        for (var key in this._headers) {
	            this._xhr.setRequestHeader(key, this._headers[key]);
	        }
	        this._xhr.send(data);
	        return defer.promise;
	    };
	    Request.prototype._apply_params = function (url) {
	        var params = {};
	        var idx = url.indexOf('?');
	        if (idx > -1) {
	            params = objects_1.extend(params, queryStringToParams(url.substr(idx + 1)));
	            url = url.substr(0, idx);
	        }
	        objects_1.extend(params, this._params);
	        if (!objects_1.isEmpty(params)) {
	            var sep = (url.indexOf('?') === -1) ? '?' : '&';
	            url += sep + queryParam(params);
	        }
	        return url;
	    };
	    return Request;
	}());
	exports.Request = Request;
	exports.request = {};
	['get', 'post', 'put', 'delete', 'patch', 'head']
	    .forEach(function (m) {
	    exports.request[m === 'delete' ? 'del' : m] = function (url) {
	        var mm = HttpMethod[m.toUpperCase()];
	        return new Request(mm, url);
	    };
	});


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(18);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function test() {}
	if (!test.name) {
	    Object.defineProperty(Function.prototype, 'name', {
	        get: function get() {
	            var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
	            // For better performance only parse once, and then cache the
	            // result through a new accessor for repeated access.
	            Object.defineProperty(this, 'name', { value: name });
	            return name;
	        }
	    });
	}
	var Version = '0.1.0';
	exports.Version = Version;

	var _container = __webpack_require__(19);

	_defaults(exports, _interopExportWildcard(_container, _defaults));

	var _metaIndex = __webpack_require__(26);

	_defaults(exports, _interopExportWildcard(_metaIndex, _defaults));

	var _decorators = __webpack_require__(29);

	_defaults(exports, _interopExportWildcard(_decorators, _defaults));

	var _metadata = __webpack_require__(20);

	_defaults(exports, _interopExportWildcard(_metadata, _defaults));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/browser.d.ts" />
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.getFunctionParameters = getFunctionParameters;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _metadata = __webpack_require__(20);

	var _metaMetadata = __webpack_require__(21);

	var _errors = __webpack_require__(22);

	var debug = __webpack_require__(23)('stick:di');
	var idCounter = 0;
	function gen_id() {
	    return "di" + ++idCounter;
	}
	var paramRegEx = /function[^(]*\(([^)]*)\)/i;

	function getFunctionParameters(fn) {
	    var cache = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    var params = _metaMetadata.Metadata.getOwn(_metaMetadata.Metadata.paramTypes, fn);
	    if (!params) {
	        var match = fn.toString().match(paramRegEx);
	        if (match) {
	            params = match[1].replace(/\W+/, ' ').split(' ').map(function (x) {
	                return x.replace(',', '').trim();
	            }).filter(function (m) {
	                return m !== '';
	            });
	            if (cache) _metaMetadata.Metadata.define(_metaMetadata.Metadata.paramTypes, params, fn, undefined);
	        }
	    }
	    return params || [];
	}

	var DIBadKeyError = (function (_DIError) {
	    _inherits(DIBadKeyError, _DIError);

	    function DIBadKeyError(message) {
	        _classCallCheck(this, DIBadKeyError);

	        _DIError.call(this, message);
	        this.name = 'BadKeyError';
	        this.message = "key not registered with container";
	    }

	    return DIBadKeyError;
	})(_errors.DIError);

	exports.DIBadKeyError = DIBadKeyError;
	var emptyParameters = Object.freeze([]);
	exports.emptyParameters = emptyParameters;

	var DIContainer = (function () {
	    function DIContainer(info) {
	        _classCallCheck(this, DIContainer);

	        this._id = gen_id();
	        this.entries = new Map();
	        this.constructionInfo = info || new Map();
	        debug("Creating new container: %s", this.id);
	    }

	    DIContainer.prototype.makeGlobal = function makeGlobal() {
	        debug("%s: Make global", this.id);
	        DIContainer.instance = this;
	        return this;
	    };

	    /**
	    * Registers a type (constructor function) by inspecting its registration annotations. If none are found, then the default singleton registration is used.
	    *
	    * @method autoRegister
	    * @param {Function} fn The constructor function to use when the dependency needs to be instantiated.
	    * @param {Object} [key] The key that identifies the dependency at resolution time; usually a constructor function.
	    */

	    DIContainer.prototype.autoRegister = function autoRegister(fn, key, targetKey) {
	        var registration;
	        if (fn === null || fn === undefined) {
	            throw new DIBadKeyError('no key');
	        }
	        if (typeof fn === 'function') {
	            registration = _metaMetadata.Metadata.get(_metaMetadata.Metadata.registration, fn, targetKey);
	            if (registration !== undefined) {
	                registration.register(this, key || fn, fn);
	            } else {
	                this.registerSingleton(key || fn, fn, targetKey);
	            }
	        } else {
	            this.registerInstance(fn, fn);
	        }
	    };

	    /**
	    * Unregisters based on key.
	    *
	    * @method unregister
	    * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	    */

	    DIContainer.prototype.unregister = function unregister(key) {
	        debug('%s: Unregister key: %s', this.id, key);
	        this.entries['delete'](key);
	    };

	    /**
	    * Inspects the container to determine if a particular key has been registred.
	    *
	    * @method hasHandler
	    * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	    * @param {Boolean} [checkParent=false] Indicates whether or not to check the parent container hierarchy.
	    * @return {Boolean} Returns true if the key has been registred; false otherwise.
	    */

	    DIContainer.prototype.hasHandler = function hasHandler(key) {
	        var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	        if (key === null || key === undefined) {
	            throw new DIBadKeyError();
	        }
	        return this.entries.has(key) || checkParent && this.parent && this.parent.hasHandler(key, checkParent);
	    };

	    /**
	    * Resolves a single instance based on the provided key.
	    *
	    * @method get
	    * @param {Object} key The key that identifies the object to resolve.
	    * @return {Object} Returns the resolved instance.
	    */

	    DIContainer.prototype.get = function get(key, targetKey) {
	        debug("%s: Get %s, target: %s", this.id, key, targetKey);
	        var entry;
	        if (key === null || key === undefined) {
	            throw new DIBadKeyError();
	        }
	        if (key === DIContainer) {
	            return this;
	        }
	        if (key instanceof _metadata.Resolver) {
	            return key.get(this);
	        }
	        entry = this.entries.get(key);
	        if (entry !== undefined) {
	            return entry[0](this);
	        }
	        if (this.parent && this.parent.hasHandler(key)) {
	            debug("%s: found key '%s' on parent", this.id, key);
	            return this.parent.get(key, targetKey);
	        }
	        // No point in registrering a string
	        if (typeof key === 'string') {
	            throw (0, _errors.createError)('DIResolveError', 'no component registered for key: ' + key);
	        }
	        this.autoRegister(key, targetKey);
	        entry = this.entries.get(key);
	        return entry[0](this);
	    };

	    /**
	    * Resolves all instance registered under the provided key.
	    *
	    * @method getAll
	    * @param {Object} key The key that identifies the objects to resolve.
	    * @return {Object[]} Returns an array of the resolved instances.
	    */

	    DIContainer.prototype.getAll = function getAll(key) {
	        var _this = this;

	        var entry;
	        if (key === null || key === undefined) {
	            throw new DIBadKeyError();
	        }
	        entry = this.entries.get(key);
	        if (entry !== undefined) {
	            return entry.map(function (x) {
	                return x(_this);
	            });
	        }
	        if (this.parent) {
	            return this.parent.getAll(key);
	        }
	        return [];
	    };

	    /**
	    * Creates a new dependency injection container whose parent is the current container.
	    *
	    * @method createChild
	    * @return {Container} Returns a new container instance parented to this.
	    */

	    DIContainer.prototype.createChild = function createChild() {
	        var childContainer = new DIContainer(this.constructionInfo);
	        childContainer.parent = this;
	        debug("%s: Create child container: %s", this.id, childContainer.id);
	        return childContainer;
	    };

	    /**
	     * Resolve dependencies for the given function
	     * @method resolveDependencies
	     * @param {Function} fn
	     * @return {Array<any>}
	     */

	    DIContainer.prototype.resolveDependencies = function resolveDependencies(fn, targetKey) {
	        debug("%s: Resolve dependencies for: %j", this.id, fn.name);
	        var info = this._getOrCreateConstructionSet(fn, targetKey),
	            keys = info.keys,
	            args = new Array(keys.length);
	        var i, ii;
	        try {
	            for (i = 0, ii = keys.length; i < ii; ++i) {
	                args[i] = this.get(keys[i]);
	            }
	        } catch (e) {
	            var message = "Error";
	            if (i < ii) {
	                message += ' The argument at index ' + i + ' (key:' + keys[i] + ') could not be satisfied.';
	            }
	            throw (0, _errors.createError)("DependencyError", message, [e]);
	        }
	        return args;
	    };

	    /**
	    * Invokes a function, recursively resolving its dependencies.
	    *
	    * @method invoke
	    * @param {Function} fn The function to invoke with the auto-resolved dependencies.
	    * @param {any[]} [deps] Additional function dependencies to use during invocation.
	    * @return {Object} Returns the instance resulting from calling the function.
	    */

	    DIContainer.prototype.invoke = function invoke(fn, deps, targetKey) {
	        var info = this._getOrCreateConstructionSet(fn, targetKey);
	        try {
	            var keys, args;
	            if (info.dependencyResolver) {
	                args = info.dependencyResolver.resolveDependencies(fn);
	            } else {
	                args = this.resolveDependencies(fn, targetKey);
	            }
	            if (deps !== undefined && Array.isArray(deps)) {
	                args = args.concat(deps);
	            }
	            debug("%s: invoking '%s', with dependencies:", this.id, fn.name, args);
	            return info.activator.invoke(fn, args, targetKey, keys);
	        } catch (e) {
	            var activatingText = info.activator instanceof _metadata.ClassActivator ? 'instantiating' : 'invoking';
	            var message = 'Error ' + activatingText + ' ' + fn.name + '.';
	            message += ' Check the inner error for details.';
	            throw (0, _errors.createError)("DIInvokeError", message, [e]);
	        }
	    };

	    DIContainer.prototype.registerInstance = function registerInstance(key, instance) {
	        debug("%s: Register instance %s", this.id, key);
	        this.registerHandler(key, function (x) {
	            return instance;
	        });
	    };

	    DIContainer.prototype.registerTransient = function registerTransient(key, fn, targetKey) {
	        debug("%s: Register transient %s", this.id, key);
	        this.registerHandler(key, function (x) {
	            return x.invoke(fn, null, targetKey);
	        });
	    };

	    DIContainer.prototype.registerSingleton = function registerSingleton(key, fn, targetKey) {
	        debug("%s: Register singleton %s", this.id, key);
	        var singleton;
	        this.registerHandler(key, function (x) {
	            return singleton || (singleton = x.invoke(fn, null, targetKey));
	        });
	    };

	    DIContainer.prototype.registerHandler = function registerHandler(key, handler) {
	        this._getOrCreateEntry(key).push(handler);
	    };

	    DIContainer.prototype._getOrCreateEntry = function _getOrCreateEntry(key) {
	        var entry;
	        if (key === null || key === undefined) {
	            throw new _errors.DIError('key cannot be null or undefined.  (Are you trying to inject something that doesn\'t exist with DI?)');
	        }
	        entry = this.entries.get(key);
	        if (entry === undefined) {
	            entry = [];
	            this.entries.set(key, entry);
	        }
	        return entry;
	    };

	    DIContainer.prototype._getOrCreateConstructionSet = function _getOrCreateConstructionSet(fn, targetKey) {
	        var info = this.constructionInfo.get(fn);
	        if (info === undefined) {
	            info = this._createConstructionSet(fn, targetKey);
	            this.constructionInfo.set(fn, info);
	        }
	        return info;
	    };

	    DIContainer.prototype._createConstructionSet = function _createConstructionSet(fn, targetKey) {
	        var info = {
	            activator: _metaMetadata.Metadata.getOwn(_metaMetadata.Metadata.instanceActivator, fn, targetKey) || _metadata.ClassActivator.instance,
	            dependencyResolver: _metaMetadata.Metadata.getOwn(_metaMetadata.Metadata.dependencyResolver, fn, targetKey) || this
	        };
	        if (fn.inject !== undefined) {
	            if (typeof fn.inject === 'function') {
	                info.keys = fn.inject();
	            } else {
	                info.keys = fn.inject;
	            }
	            return info;
	        }
	        info.keys = _metaMetadata.Metadata.getOwn(_metaMetadata.Metadata.paramTypes, fn, targetKey) || getFunctionParameters(fn) || emptyParameters;
	        return info;
	    };

	    _createClass(DIContainer, [{
	        key: 'root',
	        get: function get() {
	            var root = this,
	                tmp = root;
	            while (tmp) {
	                tmp = root.parent;
	                if (tmp) root = tmp;
	            }
	            return root;
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }
	    }]);

	    return DIContainer;
	})();

	exports.DIContainer = DIContainer;

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	* Used to allow functions/classes to indicate that they should be registered as transients with the container.
	*
	* @class TransientRegistration
	* @constructor
	* @param {Object} [key] The key to register as.
	*/
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TransientRegistration = (function () {
	    function TransientRegistration(key) {
	        _classCallCheck(this, TransientRegistration);

	        this.key = key;
	    }

	    /**
	    * Used to allow functions/classes to indicate that they should be registered as singletons with the container.
	    *
	    * @class SingletonRegistration
	    * @constructor
	    * @param {Object} [key] The key to register as.
	    */

	    /**
	    * Called by the container to register the annotated function/class as transient.
	    *
	    * @method register
	    * @param {Container} container The container to register with.
	    * @param {Object} key The key to register as.
	    * @param {Object} fn The function to register (target of the annotation).
	    */

	    TransientRegistration.prototype.register = function register(container, key, fn) {
	        container.registerTransient(this.key || key, fn);
	    };

	    return TransientRegistration;
	})();

	exports.TransientRegistration = TransientRegistration;

	var SingletonRegistration = (function () {
	    function SingletonRegistration(keyOrRegisterInChild) {
	        var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	        _classCallCheck(this, SingletonRegistration);

	        if (typeof keyOrRegisterInChild === 'boolean') {
	            this.registerInChild = keyOrRegisterInChild;
	        } else {
	            this.key = keyOrRegisterInChild;
	            this.registerInChild = registerInChild;
	        }
	    }

	    /**
	    * An abstract resolver used to allow functions/classes to specify custom dependency resolution logic.
	    *
	    * @class Resolver
	    * @constructor
	    */

	    /**
	    * Called by the container to register the annotated function/class as a singleton.
	    *
	    * @method register
	    * @param {Container} container The container to register with.
	    * @param {Object} key The key to register as.
	    * @param {Object} fn The function to register (target of the annotation).
	    */

	    SingletonRegistration.prototype.register = function register(container, key, fn) {
	        var destination = this.registerInChild ? container : container.root;
	        destination.registerSingleton(this.key || key, fn);
	    };

	    return SingletonRegistration;
	})();

	exports.SingletonRegistration = SingletonRegistration;

	var Resolver = (function () {
	    function Resolver() {
	        _classCallCheck(this, Resolver);
	    }

	    /**
	    * Used to allow functions/classes to specify lazy resolution logic.
	    *
	    * @class Lazy
	    * @constructor
	    * @extends Resolver
	    * @param {Object} key The key to lazily resolve.
	    */

	    /**
	    * Called by the container to allow custom resolution of dependencies for a function/class.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Object} Returns the resolved object.
	    */

	    Resolver.prototype.get = function get(container) {
	        throw new Error('A custom Resolver must implement get(container) and return the resolved instance(s).');
	    };

	    return Resolver;
	})();

	exports.Resolver = Resolver;

	var Lazy = (function (_Resolver) {
	    _inherits(Lazy, _Resolver);

	    function Lazy(key) {
	        _classCallCheck(this, Lazy);

	        _Resolver.call(this);
	        this.key = key;
	    }

	    /**
	    * Used to allow functions/classes to specify resolution of all matches to a key.
	    *
	    * @class All
	    * @constructor
	    * @extends Resolver
	    * @param {Object} key The key to lazily resolve all matches for.
	    */

	    /**
	    * Called by the container to lazily resolve the dependency into a lazy locator function.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Function} Returns a function which can be invoked at a later time to obtain the actual dependency.
	    */

	    Lazy.prototype.get = function get(container) {
	        var _this = this;

	        return function () {
	            return container.get(_this.key);
	        };
	    };

	    /**
	    * Creates a Lazy Resolver for the supplied key.
	    *
	    * @method of
	    * @static
	    * @param {Object} key The key to lazily resolve.
	    * @return {Lazy} Returns an insance of Lazy for the key.
	    */

	    Lazy.of = function of(key) {
	        return new Lazy(key);
	    };

	    return Lazy;
	})(Resolver);

	exports.Lazy = Lazy;

	var All = (function (_Resolver2) {
	    _inherits(All, _Resolver2);

	    function All(key) {
	        _classCallCheck(this, All);

	        _Resolver2.call(this);
	        this.key = key;
	    }

	    /**
	    * Used to allow functions/classes to specify an optional dependency, which will be resolved only if already registred with the container.
	    *
	    * @class Optional
	    * @constructor
	    * @extends Resolver
	    * @param {Object} key The key to optionally resolve for.
	    * @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
	    */

	    /**
	    * Called by the container to resolve all matching dependencies as an array of instances.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Object[]} Returns an array of all matching instances.
	    */

	    All.prototype.get = function get(container) {
	        return container.getAll(this.key);
	    };

	    /**
	    * Creates an All Resolver for the supplied key.
	    *
	    * @method of
	    * @static
	    * @param {Object} key The key to resolve all instances for.
	    * @return {All} Returns an insance of All for the key.
	    */

	    All.of = function of(key) {
	        return new All(key);
	    };

	    return All;
	})(Resolver);

	exports.All = All;

	var Optional = (function (_Resolver3) {
	    _inherits(Optional, _Resolver3);

	    function Optional(key) {
	        var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	        _classCallCheck(this, Optional);

	        _Resolver3.call(this);
	        this.key = key;
	        this.checkParent = checkParent;
	    }

	    /**
	    * Used to inject the dependency from the parent container instead of the current one.
	    *
	    * @class Parent
	    * @constructor
	    * @extends Resolver
	    * @param {Object} key The key to resolve from the parent container.
	    */

	    /**
	    * Called by the container to provide optional resolution of the key.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Object} Returns the instance if found; otherwise null.
	    */

	    Optional.prototype.get = function get(container) {
	        if (container.hasHandler(this.key, this.checkParent)) {
	            return container.get(this.key);
	        }
	        return null;
	    };

	    /**
	    * Creates an Optional Resolver for the supplied key.
	    *
	    * @method of
	    * @static
	    * @param {Object} key The key to optionally resolve for.
	    * @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
	    * @return {Optional} Returns an insance of Optional for the key.
	    */

	    Optional.of = function of(key) {
	        var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	        return new Optional(key, checkParent);
	    };

	    return Optional;
	})(Resolver);

	exports.Optional = Optional;

	var Parent = (function (_Resolver4) {
	    _inherits(Parent, _Resolver4);

	    function Parent(key) {
	        _classCallCheck(this, Parent);

	        _Resolver4.call(this);
	        this.key = key;
	    }

	    /**
	    * Used to instantiate a class.
	    *
	    * @class ClassActivator
	    * @constructor
	    */

	    /**
	    * Called by the container to load the dependency from the parent container
	    *
	    * @method get
	    * @param {Container} container The container to resolve the parent from.
	    * @return {Function} Returns the matching instance from the parent container
	    */

	    Parent.prototype.get = function get(container) {
	        return container.parent ? container.parent.get(this.key) : null;
	    };

	    /**
	    * Creates a Parent Resolver for the supplied key.
	    *
	    * @method of
	    * @static
	    * @param {Object} key The key to resolve.
	    * @return {Parent} Returns an insance of Parent for the key.
	    */

	    Parent.of = function of(key) {
	        return new Parent(key);
	    };

	    return Parent;
	})(Resolver);

	exports.Parent = Parent;

	var ClassActivator = (function () {
	    function ClassActivator() {
	        _classCallCheck(this, ClassActivator);
	    }

	    ClassActivator.prototype.invoke = function invoke(fn, args) {
	        return Reflect.construct(fn, args);
	    };

	    return ClassActivator;
	})();

	exports.ClassActivator = ClassActivator;

	ClassActivator.instance = new ClassActivator();
	/**
	* Used to invoke a factory method.
	*
	* @class FactoryActivator
	* @constructor
	*/

	var FactoryActivator = (function () {
	    function FactoryActivator() {
	        _classCallCheck(this, FactoryActivator);
	    }

	    FactoryActivator.prototype.invoke = function invoke(fn, args) {
	        return fn.apply(undefined, args);
	    };

	    return FactoryActivator;
	})();

	exports.FactoryActivator = FactoryActivator;

	FactoryActivator.instance = new FactoryActivator();

/***/ },
/* 21 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var _bind = Function.prototype.bind;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var theGlobal = (function () {
	    // Workers don’t have `window`, only `self`
	    if (typeof self !== 'undefined') {
	        return self;
	    }
	    if (typeof global !== 'undefined') {
	        return global;
	    }
	    // Not all environments allow eval and Function
	    // Use only as a last resort:
	    return new Function('return this')();
	})();
	var emptyMetadata = Object.freeze({});
	var metadataContainerKey = '__metadata__';
	exports.metadataContainerKey = metadataContainerKey;
	if (typeof theGlobal.System === 'undefined') {
	    theGlobal.System = { isFake: true };
	}
	if (typeof theGlobal.System.forEachModule === 'undefined') {
	    theGlobal.System.forEachModule = function () {};
	}
	if (typeof theGlobal.Reflect === 'undefined') {
	    theGlobal.Reflect = {};
	}
	if (typeof theGlobal.Reflect.getOwnMetadata === 'undefined') {
	    Reflect.getOwnMetadata = function (metadataKey, target, targetKey) {
	        return ((target[metadataContainerKey] || emptyMetadata)[targetKey] || emptyMetadata)[metadataKey];
	    };
	}
	if (typeof theGlobal.Reflect.defineMetadata === 'undefined') {
	    Reflect.defineMetadata = function (metadataKey, metadataValue, target, targetKey) {
	        var metadataContainer = target.hasOwnProperty(metadataContainerKey) ? target[metadataContainerKey] : target[metadataContainerKey] = {};
	        var targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
	        targetContainer[metadataKey] = metadataValue;
	    };
	}
	if (typeof theGlobal.Reflect.metadata === 'undefined') {
	    Reflect.metadata = function (metadataKey, metadataValue) {
	        return function (target, targetKey) {
	            Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
	        };
	    };
	}
	if (typeof theGlobal.Reflect.construct) {
	    Reflect.construct = function (fn, args) {
	        return new (_bind.apply(fn, [null].concat(_toConsumableArray(args))))();
	    };
	}
	function ensureDecorators(target) {
	    var applicator;
	    if (typeof target.decorators === 'function') {
	        applicator = target.decorators();
	    } else {
	        applicator = target.decorators;
	    }
	    if (typeof applicator._decorate === 'function') {
	        delete target.decorators;
	        applicator._decorate(target);
	    } else {
	        throw new Error('The return value of your decorator\'s method was not valid.');
	    }
	}
	/**
	* Provides helpers for working with metadata.
	*
	* @class Metadata
	* @static
	*/
	var Metadata = {
	    global: theGlobal,
	    noop: function noop() {},
	    paramTypes: 'design:paramtypes',
	    properties: 'design:properties',
	    instanceActivator: 'di:instance-activator',
	    registration: 'di:registration',
	    dependencyResolver: 'di:dependency-resolver',
	    get: function get(metadataKey, target, targetKey) {
	        if (!target) {
	            return undefined;
	        }
	        var result = Metadata.getOwn(metadataKey, target, targetKey);
	        return result === undefined ? Metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
	    },
	    getOwn: function getOwn(metadataKey, target, targetKey) {
	        if (!target) {
	            return undefined;
	        }
	        if (target.hasOwnProperty('decorators')) {
	            ensureDecorators(target);
	        }
	        return Reflect.getOwnMetadata(metadataKey, target, targetKey);
	    },
	    define: function define(metadataKey, metadataValue, target, targetKey) {
	        Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
	    },
	    getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
	        var result = Metadata.getOwn(metadataKey, target, targetKey);
	        if (result === undefined) {
	            result = new Type();
	            Reflect.defineMetadata(metadataKey, result, target, targetKey);
	        }
	        return result;
	    }
	};
	exports.Metadata = Metadata;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createError = createError;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DIError = (function (_Error) {
	    _inherits(DIError, _Error);

	    function DIError(message) {
	        _classCallCheck(this, DIError);

	        _Error.call(this, message);
	        this.message = message;
	    }

	    DIError.prototype.toString = function toString() {
	        return "[" + this.name + ": " + this.message + "]";
	    };

	    return DIError;
	})(Error);

	exports.DIError = DIError;

	var DIAggregateError = (function (_DIError) {
	    _inherits(DIAggregateError, _DIError);

	    function DIAggregateError(message, errors) {
	        _classCallCheck(this, DIAggregateError);

	        _DIError.call(this, message);
	        this.errors = errors;
	    }

	    DIAggregateError.prototype.toString = function toString() {
	        return "[" + this.name + ": " + this.message + "], errors:" + this.errors;
	    };

	    return DIAggregateError;
	})(DIError);

	exports.DIAggregateError = DIAggregateError;

	function createError(name, message, errors) {
	    var e = undefined;
	    if (errors) {
	        e = new DIAggregateError(message, errors);
	    } else {
	        e = new DIError(message);
	    }
	    e.name = name;
	    return e;
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(24);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(25);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	var _metadata = __webpack_require__(21);

	_defaults(exports, _interopExportWildcard(_metadata, _defaults));

	var _decorators = __webpack_require__(27);

	_defaults(exports, _interopExportWildcard(_decorators, _defaults));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _decoratorApplicator = __webpack_require__(28);

	var Decorators = {
	    configure: {
	        parameterizedDecorator: function parameterizedDecorator(name, decorator) {
	            Decorators[name] = function () {
	                var applicator = new _decoratorApplicator.DecoratorApplicator();
	                return applicator[name].apply(applicator, arguments);
	            };
	            _decoratorApplicator.DecoratorApplicator.prototype[name] = function () {
	                var result = decorator.apply(null, arguments);
	                return this.decorator(result);
	            };
	        },
	        simpleDecorator: function simpleDecorator(name, decorator) {
	            Decorators[name] = function () {
	                return new _decoratorApplicator.DecoratorApplicator().decorator(decorator);
	            };
	            _decoratorApplicator.DecoratorApplicator.prototype[name] = function () {
	                return this.decorator(decorator);
	            };
	        }
	    }
	};
	exports.Decorators = Decorators;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DecoratorApplicator = (function () {
	    function DecoratorApplicator() {
	        _classCallCheck(this, DecoratorApplicator);

	        this._first = null;
	        this._second = null;
	        this._third = null;
	        this._rest = null;
	    }

	    DecoratorApplicator.prototype.decorator = function decorator(_decorator) {
	        if (this._first === null) {
	            this._first = _decorator;
	            return this;
	        }
	        if (this._second === null) {
	            this._second = _decorator;
	            return this;
	        }
	        if (this._third === null) {
	            this._third = _decorator;
	            return this;
	        }
	        if (this._rest === null) {
	            this._rest = [];
	        }
	        this._rest.push(_decorator);
	        return this;
	    };

	    DecoratorApplicator.prototype._decorate = function _decorate(target) {
	        var i, ii, rest;
	        if (this._first !== null) {
	            this._first(target);
	        }
	        if (this._second !== null) {
	            this._second(target);
	        }
	        if (this._third !== null) {
	            this._third(target);
	        }
	        rest = this._rest;
	        if (rest !== null) {
	            for (i = 0, ii = rest.length; i < ii; ++i) {
	                rest[i](target);
	            }
	        }
	    };

	    return DecoratorApplicator;
	})();

	exports.DecoratorApplicator = DecoratorApplicator;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.autoinject = autoinject;
	exports.inject = inject;
	exports.registration = registration;
	exports.transient = transient;
	exports.singleton = singleton;
	exports.instanceActivator = instanceActivator;
	exports.factory = factory;

	var _metaIndex = __webpack_require__(26);

	var _metadata = __webpack_require__(20);

	var _container = __webpack_require__(19);

	function autoinject(target) {
	    var deco = function deco(target) {
	        target.inject = _metaIndex.Metadata.getOwn(_metaIndex.Metadata.paramTypes, target) || _container.emptyParameters;
	    };
	    return target ? deco(target) : deco;
	}

	function inject() {
	    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	        rest[_key] = arguments[_key];
	    }

	    return function (target) {
	        target.inject = rest;
	    };
	}

	function registration(value, targetKey) {
	    return function (target) {
	        _metaIndex.Metadata.define(_metaIndex.Metadata.registration, value, target, targetKey);
	    };
	}

	function transient(key, targetKey) {
	    return registration(new _metadata.TransientRegistration(key), targetKey);
	}

	function singleton(keyOrRegisterInChild, registerInChild, targetKey) {
	    if (registerInChild === undefined) registerInChild = false;

	    return registration(new _metadata.SingletonRegistration(keyOrRegisterInChild, registerInChild), targetKey);
	}

	function instanceActivator(value, targetKey) {
	    return function (target) {
	        _metaIndex.Metadata.define(_metaIndex.Metadata.instanceActivator, value, target, targetKey);
	    };
	}

	function factory() {
	    return instanceActivator(_metadata.FactoryActivator.instance);
	}

	_metaIndex.Decorators.configure.simpleDecorator('autoinject', autoinject);
	_metaIndex.Decorators.configure.parameterizedDecorator('inject', inject);
	_metaIndex.Decorators.configure.parameterizedDecorator('registration', registration);
	_metaIndex.Decorators.configure.parameterizedDecorator('transient', transient);
	_metaIndex.Decorators.configure.parameterizedDecorator('singleton', singleton);
	_metaIndex.Decorators.configure.parameterizedDecorator('instanceActivator', instanceActivator);
	_metaIndex.Decorators.configure.parameterizedDecorator('factory', factory);

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StickError = function (_Error) {
	    _inherits(StickError, _Error);

	    function StickError(message) {
	        _classCallCheck(this, StickError);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StickError).call(this, message));

	        _this.message = message;
	        return _this;
	    }

	    return StickError;
	}(Error);

	exports.StickError = StickError;

	var StickDependencyError = function (_StickError) {
	    _inherits(StickDependencyError, _StickError);

	    function StickDependencyError(message, errors) {
	        _classCallCheck(this, StickDependencyError);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(StickDependencyError).call(this, message));

	        _this2.errors = errors;
	        return _this2;
	    }

	    return StickDependencyError;
	}(StickError);

	exports.StickDependencyError = StickDependencyError;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var internal_1 = __webpack_require__(5);
	var utilities_1 = __webpack_require__(6);
	var stick_di_1 = __webpack_require__(17);
	var debug = __webpack_require__(23)('stick:container:repository');
	var fnToStr = Function.prototype.toString;
	var isNonArrowFnRegex = /^\s*function/;
	var isArrowFnWithParensRegex = /^\([^\)]*\) *=>/;
	var isArrowFnWithoutParensRegex = /^[^=]*=>/;
	var Repository;
	(function (Repository) {
	    Repository.items = [];
	    function add(type, name, target) {
	        debug("Adding dependency: %s, name: %s", internal_1.DependencyType[type], name);
	        var item = void 0;
	        if (item = utilities_1.find(Repository.items, function (i) {
	            return i.name == name;
	        })) {
	            Repository.items.splice(Repository.items.indexOf(item), 1);
	        }
	        var config = stick_di_1.Metadata.get(internal_1.DIServiceConfig, target);
	        if (typeof target === 'function' && target.name == "") {
	            try {
	                Object.defineProperty(target, 'name', {
	                    value: name
	                });
	            } catch (e) {}
	        }
	        Repository.items.push({
	            name: name,
	            handler: target,
	            type: type,
	            config: config
	        });
	    }
	    Repository.add = add;
	    function hasAny(name) {
	        return !!any(name);
	    }
	    Repository.hasAny = hasAny;
	    function has(type, name) {
	        return !!get(type, name);
	    }
	    Repository.has = has;
	    function get(type, name) {
	        debug("Get dependency: %s, name: %s", internal_1.DependencyType[type], name);
	        return utilities_1.find(Repository.items, function (i) {
	            return i.name == name && i.type == type;
	        });
	    }
	    Repository.get = get;
	    function any(name) {
	        return utilities_1.find(Repository.items, function (i) {
	            return i.name == name;
	        });
	    }
	    Repository.any = any;
	})(Repository = exports.Repository || (exports.Repository = {}));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	var internal_1 = __webpack_require__(5);
	var eventsjs_1 = __webpack_require__(33);
	var repository_1 = __webpack_require__(31);
	var errors_1 = __webpack_require__(30);
	var stick_di_1 = __webpack_require__(17);
	var utils = __webpack_require__(6);
	var vnode_1 = __webpack_require__(34);
	var state_1 = __webpack_require__(47);
	var controller_factory_1 = __webpack_require__(75);
	//import {Observer} from './observer'
	var debug = __webpack_require__(23)('stick:factory:module');
	var wrap = function wrap(el, name) {
	    var div = document.createElement('module');
	    div.setAttribute('name', name);
	    //if (contextName != this.name) div.setAttribute('as', contextName);
	    div.appendChild(el);
	    return div;
	};

	var ModuleFactory = function (_eventsjs_1$EventEmit) {
	    _inherits(ModuleFactory, _eventsjs_1$EventEmit);

	    function ModuleFactory(name, module, container) {
	        _classCallCheck(this, ModuleFactory);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModuleFactory).call(this));

	        if (arguments.length != 3) {
	            throw new Error();
	        }
	        _this.name = name;
	        _this.module = module;
	        _this.container = container;
	        if (typeof module === 'function' && module.name == "") {
	            try {
	                Object.defineProperty(module, 'name', {
	                    value: name
	                });
	            } catch (e) {}
	        }
	        _this._id = utils.uniqueId("mod");
	        debug("%s: Module factory created: '%s', container: %s", _this.id, name, _this.container.id);
	        _this.container.registerSingleton(name, module);
	        _this.container.registerInstance('$container', _this.container);
	        return _this;
	    }

	    _createClass(ModuleFactory, [{
	        key: 'controller',
	        value: function controller(name, definition) {
	            var _internal_1$getDepend = internal_1.getDependencies(definition);

	            var _internal_1$getDepend2 = _slicedToArray(_internal_1$getDepend, 2);

	            var def = _internal_1$getDepend2[0];
	            var deps = _internal_1$getDepend2[1];

	            if (def) {
	                var fn = void 0;
	                if (typeof def !== 'function' && utils.isObject(def)) {
	                    var copy = utils.extend({}, def);
	                    if (typeof def.initialize === 'function') {
	                        fn = def.initialize;
	                        delete copy.initialize;
	                    } else if (typeof def.constructor === 'function') {
	                        fn = def.constructor;
	                        delete copy.constructor;
	                    }
	                    if (!deps || deps.length == 0) {
	                        internal_1.getDependencies(fn);
	                    }
	                    utils.assign(fn.prototype, copy);
	                } else if (typeof def === 'function') {
	                    fn = def;
	                }
	                if (typeof fn !== 'function') {
	                    throw new errors_1.StickError('controller defition should be a function or an object literal');
	                }
	                internal_1.setDependencyType(internal_1.DependencyType.Controller)(fn);
	                var factory = new controller_factory_1.ControllerFactory(name, fn, this.container.createChild());
	                this.container.registerInstance(name, factory, true);
	                debug("%s: Register controller: '%s', %s", this.id, name, factory.id);
	            } else {
	                throw new errors_1.StickError("controller definition should be a function, function constructor or a object literal");
	            }
	            return this;
	        }
	    }, {
	        key: 'service',
	        value: function service(name, definition) {
	            var _internal_1$getDepend3 = internal_1.getDependencies(definition);

	            var _internal_1$getDepend4 = _slicedToArray(_internal_1$getDepend3, 1);

	            var fn = _internal_1$getDepend4[0];

	            if (fn && typeof fn === 'function') {
	                internal_1.setDependencyType(internal_1.DependencyType.Service)(fn);
	                this.container.registerService(name, fn);
	                debug("%s Register service %s", this.id, name);
	            } else {
	                throw new errors_1.StickError('service should be a function');
	            }
	            return this;
	        }
	        /**
	         * Create a factory function
	         * @param {String} name
	         */

	    }, {
	        key: 'factory',
	        value: function factory(name, _factory) {
	            var _internal_1$getDepend5 = internal_1.getDependencies(_factory);

	            var _internal_1$getDepend6 = _slicedToArray(_internal_1$getDepend5, 1);

	            var fn = _internal_1$getDepend6[0];

	            if (!fn) throw new errors_1.StickError('factory');
	            debug("%s Register factory %s", this.id, name);
	            if (typeof fn === 'function') {
	                internal_1.setDependencyType(internal_1.DependencyType.Factory)(fn);
	                internal_1.setActivator(fn, stick_di_1.FactoryActivator.instance);
	                this.container.registerSingleton(name, fn);
	            } else {
	                this.container.registerInstance(name, fn);
	            }
	            return this;
	        }
	        /**
	         * Create a new instance of the module
	         * @method create
	         * @params {Object} options
	         * @return {Promise}
	         *
	         * Call onTemplateRender (), onElementAttached
	         * emits before:template:render, template:render, before:element:attached, element:attached
	         *
	        */

	    }, {
	        key: 'create',
	        value: function create() {
	            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
	                var state, template, mod, el;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!this.container.hasInstance(this.name)) {
	                                    _context.next = 3;
	                                    break;
	                                }

	                                debug("%s: Resolving module %s", this.id, this.name);
	                                //return utils.Promise.resolve(this.container.get(this.name));
	                                return _context.abrupt('return', this.container.get(this.name));

	                            case 3:
	                                this.container.registerSingleton('$state', state_1.State);
	                                _context.next = 6;
	                                return this.container.get('$state');

	                            case 6:
	                                state = _context.sent;

	                                if (options.state) {
	                                    state.set(options.state);
	                                }
	                                debug("%s: Creating module %s", this.id, this.name);

	                                if (!(options.template || options.el)) {
	                                    _context.next = 28;
	                                    break;
	                                }

	                                _context.next = 12;
	                                return this.resolveTemplate(state, options);

	                            case 12:
	                                template = _context.sent;

	                                debug("%s: Created template: %s", this.id, template.id);
	                                this.container.registerInstance('template', template, true);
	                                debug("%s: Instantiating module '%s'", this.id, this.name);
	                                _context.next = 18;
	                                return this.container.get(this.name);

	                            case 18:
	                                mod = _context.sent;

	                                template.setTarget(mod);
	                                //$state.set(contextName, controller);
	                                this.trigger('before:template:render');
	                                el = template.render();

	                                if (el.nodeType === 11 || el.nodeType === 3) {
	                                    if (el.children.length === 1) {
	                                        el = el.firstChild.nodeType === 3 ? wrap(el, this.name) : el.firstChild;
	                                    } else {
	                                        el = wrap(el, this.name);
	                                    }
	                                }
	                                this.container.registerInstance('$el', el, true);
	                                if (typeof mod.onTemplateRender === 'function') {
	                                    mod.onTemplateRender.call(mod, el, template);
	                                }
	                                this.trigger('template:render');
	                                if (options.el) {
	                                    this.trigger('before:element:attached', options.el);
	                                    options.el.innerHTML = '';
	                                    options.el.appendChild(el);
	                                    if (typeof mod.onElementAttached === 'function') {
	                                        mod.onElementAttached.call(mod, el, options.el);
	                                    }
	                                    this.trigger('element:attached', el, options.el);
	                                }
	                                return _context.abrupt('return', mod);

	                            case 28:
	                                return _context.abrupt('return', this.container.get(this.name));

	                            case 29:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: 'configure',
	        value: function configure(name) {
	            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee2() {
	                var configName, provider, serv;
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                configName = name;

	                                if (!/Provider$/.test(name)) {
	                                    configName = name + 'Provider';
	                                } else {
	                                    name = name.replace('Provider', '');
	                                }
	                                provider = void 0;
	                                // Check if provider is registered

	                                if (!this.container.hasHandler(configName, false, false)) {
	                                    _context2.next = 7;
	                                    break;
	                                }

	                                return _context2.abrupt('return', this.container.get(name));

	                            case 7:
	                                if (!repository_1.Repository.has(internal_1.DependencyType.Service, name)) {
	                                    _context2.next = 12;
	                                    break;
	                                }

	                                serv = repository_1.Repository.get(internal_1.DependencyType.Service, name);

	                                this.container.register(serv);

	                                if (!this.container.hasHandler(configName, false, false)) {
	                                    _context2.next = 12;
	                                    break;
	                                }

	                                return _context2.abrupt('return', this.container.get(configName));

	                            case 12:
	                                throw new Error('No provider for ' + name.replace('Provider', ''));

	                            case 13:
	                            case 'end':
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	    }, {
	        key: 'resolveTemplate',
	        value: function resolveTemplate(state, options) {
	            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee3() {
	                var $template, $resolver, promise, _templateString, view, templateString;

	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                _context3.next = 2;
	                                return this.container.get('$templateCreator');

	                            case 2:
	                                $template = _context3.sent;
	                                _context3.next = 5;
	                                return this.container.get('$templateResolver');

	                            case 5:
	                                $resolver = _context3.sent;
	                                promise = void 0;

	                                if (!(options.el && !options.template)) {
	                                    _context3.next = 12;
	                                    break;
	                                }

	                                _templateString = options.el.innerHTML;

	                                promise = utils.Promise.resolve(_templateString);
	                                _context3.next = 20;
	                                break;

	                            case 12:
	                                if (!options.template) {
	                                    _context3.next = 19;
	                                    break;
	                                }

	                                if (!(options.template instanceof vnode_1.Template)) {
	                                    _context3.next = 16;
	                                    break;
	                                }

	                                view = options.template.view(state, {
	                                    container: this.container
	                                });
	                                return _context3.abrupt('return', view);

	                            case 16:
	                                promise = $resolver(options.template);
	                                _context3.next = 20;
	                                break;

	                            case 19:
	                                return _context3.abrupt('return', utils.Promise.reject(new errors_1.StickError("no element or template")));

	                            case 20:
	                                _context3.next = 22;
	                                return promise;

	                            case 22:
	                                templateString = _context3.sent;
	                                return _context3.abrupt('return', $template(templateString, state));

	                            case 24:
	                            case 'end':
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this);
	            }));
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            //this.container.destroy();
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }
	    }]);

	    return ModuleFactory;
	}(eventsjs_1.EventEmitter);

	exports.ModuleFactory = ModuleFactory;

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	var idCounter = 0;
	function getID() {
	    return "" + (++idCounter);
	}
	function callFunc(fn, args) {
	    if (args === void 0) { args = []; }
	    var l = fn.length, i = -1, a1 = args[0], a2 = args[1], a3 = args[2], a4 = args[3];
	    switch (args.length) {
	        case 0:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx);
	            return;
	        case 1:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1);
	            return;
	        case 2:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1, a2);
	            return;
	        case 3:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1, a2, a3);
	            return;
	        case 4:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1, a2, a3, a4);
	            return;
	        default:
	            while (++i < l)
	                fn[i].handler.apply(fn[i].ctx, args);
	            return;
	    }
	}
	exports.callFunc = callFunc;
	function isFunction(a) {
	    return typeof a === 'function';
	}
	exports.isFunction = isFunction;
	function isEventEmitter(a) {
	    return a instanceof EventEmitter || (isFunction(a.on) && isFunction(a.off) && isFunction(a.trigger));
	}
	exports.isEventEmitter = isEventEmitter;
	var EventEmitter = (function () {
	    function EventEmitter() {
	    }
	    Object.defineProperty(EventEmitter.prototype, "listeners", {
	        get: function () {
	            return this._listeners;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    EventEmitter.prototype.on = function (event, fn, ctx, once) {
	        if (once === void 0) { once = false; }
	        var events = (this._listeners || (this._listeners = {}))[event] || (this._listeners[event] = []);
	        events.push({
	            name: event,
	            once: once,
	            handler: fn,
	            ctx: ctx || this
	        });
	        return this;
	    };
	    EventEmitter.prototype.once = function (event, fn, ctx) {
	        return this.on(event, fn, ctx, true);
	    };
	    EventEmitter.prototype.off = function (eventName, fn) {
	        this._listeners = this._listeners || {};
	        if (eventName == null) {
	            this._listeners = {};
	        }
	        else if (this._listeners[eventName]) {
	            var events = this._listeners[eventName];
	            if (fn == null) {
	                this._listeners[eventName] = [];
	            }
	            else {
	                for (var i = 0; i < events.length; i++) {
	                    var event_1 = events[i];
	                    if (events[i].handler == fn) {
	                        this._listeners[eventName].splice(i, 1);
	                    }
	                }
	            }
	        }
	    };
	    EventEmitter.prototype.trigger = function (eventName) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        //let events = (this._listeners|| (this._listeners = {}))[eventName]||(this._listeners[eventName]=[])
	        //.concat(this._listeners['all']||[])
	        this._listeners = this._listeners || {};
	        var events = (this._listeners[eventName] || []).concat(this._listeners['all'] || []);
	        if (EventEmitter.debugCallback)
	            EventEmitter.debugCallback(this.constructor.name, this.name, eventName, args, events);
	        var event, a, len = events.length, index;
	        var calls = [];
	        for (var i = 0, ii = events.length; i < ii; i++) {
	            event = events[i];
	            a = args;
	            if (event.name == 'all') {
	                a = [eventName].concat(args);
	                callFunc([event], a);
	            }
	            else {
	                calls.push(event);
	            }
	            if (event.once === true) {
	                index = this._listeners[event.name].indexOf(event);
	                this._listeners[event.name].splice(index, 1);
	            }
	        }
	        if (calls.length)
	            this._executeListener(calls, args);
	        return this;
	    };
	    EventEmitter.prototype._executeListener = function (func, args) {
	        var executor = callFunc;
	        if (this.constructor.executeListenerFunction) {
	            executor = this.constructor.executeListenerFunction;
	        }
	        executor(func, args);
	    };
	    EventEmitter.prototype.listenTo = function (obj, event, fn, ctx, once) {
	        if (once === void 0) { once = false; }
	        var listeningTo, id, meth;
	        listeningTo = this._listeningTo || (this._listeningTo = {});
	        id = obj.listenId || (obj.listenId = getID());
	        listeningTo[id] = obj;
	        meth = once ? 'once' : 'on';
	        obj[meth](event, fn, this);
	        return this;
	    };
	    EventEmitter.prototype.listenToOnce = function (obj, event, fn, ctx) {
	        return this.listenTo(obj, event, fn, ctx, true);
	    };
	    EventEmitter.prototype.stopListening = function (obj, event, callback) {
	        var listeningTo = this._listeningTo;
	        if (!listeningTo)
	            return this;
	        var remove = !event && !callback;
	        if (!callback && typeof event === 'object')
	            callback = this;
	        if (obj)
	            (listeningTo = {})[obj.listenId] = obj;
	        for (var id in listeningTo) {
	            obj = listeningTo[id];
	            obj.off(event, callback, this);
	            if (remove || !Object.keys(obj.listeners).length)
	                delete this._listeningTo[id];
	        }
	        return this;
	    };
	    EventEmitter.prototype.destroy = function () {
	        this.stopListening();
	        this.off();
	    };
	    return EventEmitter;
	}());
	exports.EventEmitter = EventEmitter;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	__export(__webpack_require__(38));
	__export(__webpack_require__(42));
	__export(__webpack_require__(43));
	__export(__webpack_require__(44));
	__export(__webpack_require__(46));
	__export(__webpack_require__(45));
	__export(__webpack_require__(37));

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Comment = function () {
	    function Comment(nodeValue) {
	        _classCallCheck(this, Comment);

	        this.nodeType = 8 /* Comment */;
	        this.nodeValue = nodeValue;
	    }

	    Comment.prototype.render = function render(options) {
	        return options.document.createComment(this.nodeValue);
	    };

	    return Comment;
	}();

	exports.Comment = Comment;
	exports.comment = function (nodeValue) {
	    return new Comment(nodeValue);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var vnode_1 = __webpack_require__(37);

	var Dynamic = function () {
	    function Dynamic(vnode, bindingClass) {
	        _classCallCheck(this, Dynamic);

	        this.nodeType = -200 /* Dynamic */;
	        this.vnode = vnode;
	        this.bindingClass = bindingClass;
	        this.vnode.parentNode = this;
	    }

	    Dynamic.prototype.render = function render(options, renderers) {
	        if (options.components.has(this.vnode['tagName'])) {
	            return this._renderComponent(options, renderers);
	        } else {
	            return this._renderElement(options, renderers);
	        }
	    };

	    Dynamic.prototype._renderElement = function _renderElement(options, renderers) {
	        var node = this.vnode.render(options, renderers);
	        renderers.push(new DynamicRenderer(node, this.bindingClass, options));
	        return node;
	    };

	    Dynamic.prototype._renderComponent = function _renderComponent(options, renderers) {
	        var _r = [];
	        var element = this.vnode.render(options, _r);
	        renderers.push(new DynamicComponentRenderer(_r[0], this.bindingClass, options));
	        return element;
	    };

	    return Dynamic;
	}();

	exports.Dynamic = Dynamic;
	exports.dynamic = function (vnode, bindClass) {
	    return new Dynamic(vnode, bindClass);
	};

	var DynamicComponentRenderer = function () {
	    function DynamicComponentRenderer(renderer, bindingClass, options) {
	        _classCallCheck(this, DynamicComponentRenderer);

	        this.renderer = renderer;
	        this.bindingClass = bindingClass;
	        this.options = options;
	    }

	    DynamicComponentRenderer.prototype.generate = function generate(root, view) {
	        this.renderer.generate(root, view);
	        var component = view.bindings[view.bindings.length - 1];
	        view.bindings.splice(view.bindings.indexOf(component), 0, new this.bindingClass(component, view));
	    };

	    return DynamicComponentRenderer;
	}();

	var DynamicRenderer = function () {
	    function DynamicRenderer(node, bindingClass, options) {
	        _classCallCheck(this, DynamicRenderer);

	        this.ref = node;
	        this.bindingClass = bindingClass;
	        this.options = options;
	    }

	    DynamicRenderer.prototype.generate = function generate(root, view) {
	        if (!this._refPath) this._refPath = vnode_1.getNodePath(this.ref);
	        view.bindings.push(new this.bindingClass(vnode_1.getNodeByPath(root, this._refPath), view));
	    };

	    return DynamicRenderer;
	}();

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	function getNodeByPath(root, path) {
	    var c = root;
	    for (var i = 0, n = path.length; i < n; i++) {
	        c = c.childNodes[path[i]];
	    }
	    return c;
	}
	exports.getNodeByPath = getNodeByPath;
	function getNodePath(node) {
	    var path = [];
	    var p = node.parentNode;
	    var c = node;
	    while (p) {
	        path.unshift(Array.prototype.indexOf.call(p.childNodes, c));
	        c = p;
	        p = p.parentNode;
	        // virtual nodes - must be skipped
	        while (p && p.nodeType > 12) {
	            p = p.parentNode;
	        }
	    }
	    return path;
	}
	exports.getNodePath = getNodePath;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var utils = __webpack_require__(39);
	var fragmentsection_1 = __webpack_require__(40);
	var nodesection_1 = __webpack_require__(41);

	var Element = function () {
	    function Element(tagName, attributes, children) {
	        _classCallCheck(this, Element);

	        this.nodeType = 1 /* Element */;
	        this.tagName = String(tagName).toLocaleLowerCase();
	        this.childNodes = children;
	        this.attributes = attributes || {};
	        for (var i = 0; i < children.length; i++) {
	            children[i].parentNode = this;
	        }
	    }

	    Element.prototype.render = function render(options, renderers) {
	        var components = options.components; // || {}
	        if (components.has(this.tagName)) {
	            return this._renderComponent(components.get(this.tagName), options, renderers);
	        }
	        return this._renderElement(options, renderers);
	    };

	    Element.prototype.setAttributes = function setAttributes(key, value) {
	        if (typeof key === 'string') {
	            this.attributes[key] = value;
	        } else {
	            utils.extend(this.attributes, key);
	        }
	    };

	    Element.prototype._renderComponent = function _renderComponent(component, options, renderers) {
	        var section = new fragmentsection_1.FragmentSection(options.document);
	        renderers.push(new ComponentAttributeRenderer(component, section, this, this._splitAttributes(options), options));
	        return section.render();
	    };

	    Element.prototype._renderElement = function _renderElement(options, renderers) {
	        var element = options.document.createElement(this.tagName);
	        var _attr = this._splitAttributes(options);
	        // Set static attributes
	        for (var attrKey in _attr.staticAttributes) {
	            element.setAttribute(attrKey, _attr.staticAttributes[attrKey]);
	        }
	        for (var _iterator = this.childNodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;

	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }

	            var child = _ref;

	            element.appendChild(child.render(options, renderers));
	        }
	        // Set dynamic attributes
	        if (Object.keys(_attr.dynamicAttributes).length) {
	            renderers.push(new ElementAttributeRenderer(new nodesection_1.NodeSection(options.document, element), options, _attr.dynamicAttributes));
	        }
	        return element;
	    };

	    Element.prototype._splitAttributes = function _splitAttributes(options) {
	        var dynamicAttributes = {};
	        var staticAttributes = {};
	        if (options.attributes) {
	            for (var key in this.attributes) {
	                var attrClass = options.attributes.get(key);
	                if (attrClass && (!attrClass.test || attrClass.test(this, key, this.attributes[key]))) {
	                    dynamicAttributes[key] = this.attributes[key];
	                } else {
	                    staticAttributes[key] = this.attributes[key];
	                }
	            }
	        } else {
	            staticAttributes = this.attributes;
	        }
	        return {
	            dynamicAttributes: dynamicAttributes,
	            staticAttributes: staticAttributes
	        };
	    };

	    return Element;
	}();

	exports.Element = Element;
	exports.element = function (tagName, attributes) {
	    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        children[_key - 2] = arguments[_key];
	    }

	    return new Element(tagName, attributes, children);
	};

	var ComponentAttributeRenderer = function () {
	    function ComponentAttributeRenderer(component, section, element, attr, options) {
	        _classCallCheck(this, ComponentAttributeRenderer);

	        this.section = section;
	        this.componentClass = component;
	        this.element = element;
	        this.options = options;
	        this.attributes = attr.staticAttributes;
	        this.dynamicAttributes = attr.dynamicAttributes;
	    }

	    ComponentAttributeRenderer.prototype.generate = function generate(root, view) {
	        if (!this._marker) this._marker = this.section.createMarker();
	        var ref = new this.componentClass(this._marker.createSection(root), this.element, this.attributes, view);
	        if (Object.keys(this.dynamicAttributes).length) {
	            _hydrateDynamicAttributes(ref, this.options, this.dynamicAttributes, view);
	        }
	        if (ref.update) view.bindings.push(ref);
	    };

	    return ComponentAttributeRenderer;
	}();

	var ElementAttributeRenderer = function () {
	    function ElementAttributeRenderer(section, options, attributes) {
	        _classCallCheck(this, ElementAttributeRenderer);

	        this.section = section;
	        this.options = options;
	        this.attributes = attributes;
	    }

	    ElementAttributeRenderer.prototype.generate = function generate(root, view) {
	        if (!this._marker) this._marker = this.section.createMarker();
	        _hydrateDynamicAttributes(this._marker.findNode(root), this.options, this.attributes, view);
	    };

	    return ElementAttributeRenderer;
	}();

	function _hydrateDynamicAttributes(ref, options, dynamicAttributes, view) {
	    for (var key in dynamicAttributes) {
	        var clazz = options.attributes.get(key);
	        var attr = new clazz(ref, key, dynamicAttributes[key], view);
	        if (attr.update) view.bindings.push(attr);
	    }
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function extend(obj) {
	    var a = undefined,
	        k = undefined;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    for (var _iterator = args, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        if (_isArray) {
	            if (_i >= _iterator.length) break;
	            a = _iterator[_i++];
	        } else {
	            _i = _iterator.next();
	            if (_i.done) break;
	            a = _i.value;
	        }

	        if (a !== Object(a)) continue;
	        for (k in a) {
	            obj[k] = a[k];
	        }
	    }
	    return obj;
	}
	exports.extend = extend;
	function slice(obj) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	    }

	    return Array.prototype.slice.apply(obj, args);
	}
	exports.slice = slice;
	function extendClass(parent, protoProps, staticProps) {
	    var child;
	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && Object.prototype.hasOwnProperty.call(protoProps, 'constructor')) {
	        child = protoProps.constructor;
	    } else {
	        child = function child() {
	            return parent.apply(this, arguments);
	        };
	    }
	    // Add static properties to the constructor function, if supplied.
	    extend(child, parent, staticProps);
	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent` constructor function.
	    var Surrogate = function Surrogate() {
	        this.constructor = child;
	    };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate();
	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) extend(child.prototype, protoProps);
	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;
	    return child;
	}
	exports.extendClass = extendClass;
	;
	var nativeBind = Function.prototype.bind;
	function bind(method, context) {
	    for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	        args[_key3 - 2] = arguments[_key3];
	    }

	    if (typeof method !== 'function') throw new Error('method not at function');
	    if (nativeBind != null) return nativeBind.call.apply(nativeBind, [method, context].concat(args));
	    args = args || [];
	    var fnoop = function fnoop() {};
	    var fBound = function fBound() {
	        var ctx = this instanceof fnoop ? this : context;
	        return method.apply(ctx, args.concat(slice(arguments)));
	    };
	    fnoop.prototype = this.prototype;
	    fBound.prototype = new fnoop();
	    return fBound;
	}
	exports.bind = bind;

	var Debug = function () {
	    function Debug(namespace) {
	        _classCallCheck(this, Debug);

	        this.enabled = false;
	        this.namespace = namespace;
	    }

	    Debug.enable = function enable(enabled, namespace) {
	        for (var k in this.loggers) {
	            if (namespace && k === namespace) {
	                this.loggers[k].enabled = enabled;
	            } else if (!namespace) {
	                this.loggers[k].enabled = enabled;
	            }
	        }
	    };

	    Debug.create = function create(namespace) {
	        var logger = undefined;
	        if (this.loggers[namespace]) {
	            logger = this.loggers[namespace]; //.debug
	        } else {
	                logger = new Debug(namespace);
	                this.loggers[namespace] = logger;
	            }
	        return bind(logger.debug, logger);
	    };

	    Debug.prototype.debug = function debug() {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            args[_key4] = arguments[_key4];
	        }

	        if (!this.enabled) return;
	        args[0] = this._coerce(args[0]);
	        if ('string' !== typeof args[0]) {
	            // anything else let's inspect with %o
	            args = ['%o'].concat(args);
	        }
	        // apply any `formatters` transformations
	        var index = 0;
	        args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
	            // if we encounter an escaped % then don't increase the array index
	            if (match === '%%') return match;
	            index++;
	            var formatter = Debug.formatters[format];
	            if ('function' === typeof formatter) {
	                var val = args[index];
	                match = formatter.call(self, val);
	                // now we need to remove `args[index]` since it's inlined in the `format`
	                args.splice(index, 1);
	                index--;
	            }
	            return match;
	        });
	        args = this._formatArgs(args);
	        this._log.apply(this, args);
	    };

	    Debug.prototype._log = function _log() {
	        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	            args[_key5] = arguments[_key5];
	        }

	        return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	    };

	    Debug.prototype._coerce = function _coerce(val) {
	        if (val instanceof Error) return val.stack || val.message;
	        return val;
	    };

	    Debug.prototype._formatArgs = function _formatArgs(args) {
	        args[0] = '[templ:' + this.namespace + '] ' + args[0];
	        return args;
	    };

	    return Debug;
	}();

	Debug.loggers = {};
	Debug.formatters = {
	    j: function j(args) {
	        return JSON.stringify(args);
	    }
	};
	exports.Debug = Debug;
	function debug(namespace) {
	    return Debug.create(namespace);
	}
	exports.debug = debug;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var vnode_1 = __webpack_require__(37);

	var FragmentSection = function () {
	    function FragmentSection(document, start, end) {
	        _classCallCheck(this, FragmentSection);

	        this.document = document;
	        this.start = start || document.createTextNode('');
	        this.end = end || document.createTextNode('');
	        if (!this.start.parentNode) {
	            var parent = document.createDocumentFragment();
	            parent.appendChild(this.start);
	            parent.appendChild(this.end);
	            // Chrome bug. If the reference to the newly created dparent
	            // Chrome (v8?) will release it, and the parent will become null;
	            this.__parent = parent;
	        }
	    }

	    FragmentSection.prototype.appendChild = function appendChild(node) {
	        this.end.parentNode.insertBefore(node, this.end);
	    };

	    FragmentSection.prototype.render = function render() {
	        return this.start.parentNode;
	    };

	    FragmentSection.prototype.remove = function remove() {
	        var node = this.removeChildNodes();
	        node.insertBefore(this.start, node.childNodes[0]);
	        node.appendChild(this.end);
	        return this;
	    };

	    FragmentSection.prototype.removeChildNodes = function removeChildNodes() {
	        var node = this.document.createDocumentFragment(),
	            start = this.start;
	        var current = start.nextSibling;
	        var end = this.end;
	        while (current !== end) {
	            node.appendChild(current);
	            current = start.nextSibling;
	        }
	        return node;
	    };

	    FragmentSection.prototype.createMarker = function createMarker() {
	        return new FragmentSectionMarker(this.document, vnode_1.getNodePath(this.start), vnode_1.getNodePath(this.end));
	    };

	    FragmentSection.prototype.clone = function clone() {
	        var parentClone;
	        // fragment?
	        if (this.start.parentNode.nodeType === 11) {
	            parentClone = this.start.parentNode.cloneNode(true);
	        } else {
	            parentClone = this.document.createDocumentFragment();
	            var children = this._getChildNodes();
	            var n = children.length;
	            for (var i = 0; i < n; i++) {
	                parentClone.appendChild(children[i].cloneNode(true));
	            }
	        }
	        var first = parentClone.childNodes[0];
	        var last = parentClone.childNodes[parentClone.childNodes.length - 1];
	        return new FragmentSection(this.document, first, last);
	    };

	    FragmentSection.prototype._getChildNodes = function _getChildNodes() {
	        var current = this.start;
	        var end = this.end.nextSibling;
	        var children = [];
	        while (current !== end) {
	            children.push(current);
	            current = current.nextSibling;
	        }
	        return children;
	    };

	    return FragmentSection;
	}();

	exports.FragmentSection = FragmentSection;

	var FragmentSectionMarker = function () {
	    function FragmentSectionMarker(document, startPath, endPath) {
	        _classCallCheck(this, FragmentSectionMarker);

	        this.document = document;
	        this.startPath = startPath;
	        this.endPath = endPath;
	    }

	    FragmentSectionMarker.prototype.createSection = function createSection(root) {
	        return new FragmentSection(this.document, vnode_1.getNodeByPath(root, this.startPath), vnode_1.getNodeByPath(root, this.endPath));
	    };

	    return FragmentSectionMarker;
	}();

	exports.FragmentSectionMarker = FragmentSectionMarker;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var vnode_1 = __webpack_require__(37);

	var NodeSection = function () {
	    function NodeSection(document, node) {
	        _classCallCheck(this, NodeSection);

	        this.document = document;
	        this.node = node;
	    }

	    NodeSection.prototype.createMarker = function createMarker() {
	        return new NodeSectionMarker(this.document, vnode_1.getNodePath(this.node));
	    };

	    NodeSection.prototype.appendChild = function appendChild(node) {
	        this.node.appendChild(node);
	    };

	    NodeSection.prototype.render = function render() {
	        return this.node;
	    };

	    NodeSection.prototype.remove = function remove() {
	        if (this.node.parentNode) this.node.parentNode.removeChild(this.node);
	    };

	    NodeSection.prototype.removeChildren = function removeChildren() {
	        while (this.node.childNodes.length) {
	            this.node.removeChild(this.node.childNodes[0]);
	        }
	    };

	    NodeSection.prototype.clone = function clone() {
	        return new NodeSection(this.document, this.node.cloneNode(true));
	    };

	    return NodeSection;
	}();

	exports.NodeSection = NodeSection;

	var NodeSectionMarker = function () {
	    function NodeSectionMarker(document, path) {
	        _classCallCheck(this, NodeSectionMarker);

	        this.document = document;
	        this.path = path;
	    }

	    NodeSectionMarker.prototype.createSection = function createSection(root) {
	        return new NodeSection(this.document, this.findNode(root));
	    };

	    NodeSectionMarker.prototype.findNode = function findNode(root) {
	        return vnode_1.getNodeByPath(root, this.path);
	    };

	    return NodeSectionMarker;
	}();

	exports.NodeSectionMarker = NodeSectionMarker;

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Fragment = function () {
	    function Fragment(children) {
	        _classCallCheck(this, Fragment);

	        this.nodeType = 11 /* Fragment */;
	        this.childNodes = children;
	        for (var i = 0; i < children.length; i++) {
	            children[i].parentNode = this;
	        }
	    }

	    Fragment.prototype.render = function render(options, renderers) {
	        var fragment = options.document.createDocumentFragment();
	        for (var i = 0, n = this.childNodes.length; i < n; i++) {
	            fragment.appendChild(this.childNodes[i].render(options, renderers));
	        }
	        return fragment;
	    };

	    return Fragment;
	}();

	exports.Fragment = Fragment;
	exports.fragment = function (children) {
	    return new Fragment(children);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var fragmentsection_1 = __webpack_require__(40);
	var nodesection_1 = __webpack_require__(41);
	function section(document, node) {
	    var section = undefined;
	    if (node.nodeType == 11 /* Fragment */) {
	            var frag = new fragmentsection_1.FragmentSection(document);
	            frag.appendChild(node);
	            section = frag;
	        } else {
	        section = new nodesection_1.NodeSection(document, node);
	    }
	    return section;
	}
	exports.section = section;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var section_1 = __webpack_require__(43);
	var view_1 = __webpack_require__(45);

	var Template = function () {
	    function Template(vnode, options) {
	        _classCallCheck(this, Template);

	        this._renderers = [];
	        this.vnode = vnode;
	        var node = vnode.render(options, this._renderers);
	        this.section = section_1.section(options.document, node);
	        this.options = options;
	    }

	    Template.prototype.view = function view(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        var sec = this.section.clone();
	        var DestView = this.options.viewClass || view_1.View;
	        for (var k in this.options) {
	            if (!options[k]) options[k] = this.options[k];
	        }
	        var view = new DestView(sec, this, context, options);
	        for (var _iterator = this._renderers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;

	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }

	            var renderer = _ref;

	            renderer.generate(sec.node || sec.start.parentNode, view);
	        }
	        return view;
	    };

	    return Template;
	}();

	exports.Template = Template;
	function template(vnode, options) {
	    return new Template(vnode, options);
	}
	exports.template = template;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var eventsjs_1 = __webpack_require__(33);

	var View = function (_eventsjs_1$EventEmit) {
	    _inherits(View, _eventsjs_1$EventEmit);

	    function View(section, template, context, options) {
	        _classCallCheck(this, View);

	        var _this = _possibleConstructorReturn(this, _eventsjs_1$EventEmit.call(this));

	        _this.section = section;
	        _this.template = template;
	        _this.bindings = [];
	        _this._runloop = options.runloop;
	        _this.context = context;
	        return _this;
	    }

	    View.prototype.update = function update() {
	        for (var _iterator = this.bindings, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;

	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }

	            var binding = _ref;

	            binding.update();
	        }
	    };

	    View.prototype.addListener = function addListener(elm, eventName, callback) {
	        var capture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	        elm.addEventListener(eventName, callback, capture);
	        return callback;
	    };

	    View.prototype.removeListener = function removeListener(elm, eventName, callback) {
	        var capture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	        elm.removeEventListener(eventName, callback, capture);
	    };

	    View.prototype.render = function render() {
	        return this.section.render();
	    };

	    View.prototype.remove = function remove() {
	        for (var _iterator2 = this.bindings, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;

	            if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	            } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	            }

	            var binding = _ref2;

	            binding.destroy();
	        }
	        return this.section.remove();
	    };

	    return View;
	}(eventsjs_1.EventEmitter);

	exports.View = View;

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Text = function () {
	    function Text(nodeValue) {
	        _classCallCheck(this, Text);

	        this.nodeType = -201 /* Text */;
	        this.nodeValue = nodeValue;
	    }

	    Text.prototype.render = function render(options) {
	        return options.document.createTextNode(this.nodeValue);
	    };

	    return Text;
	}();

	exports.Text = Text;
	exports.text = function text(nodeValue) {
	    return new Text(nodeValue);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var collection_1 = __webpack_require__(48);
	var utils = __webpack_require__(6);
	var decorators = __webpack_require__(57);
	var debug = __webpack_require__(23)('stick:state');
	function isObject(a) {
	    return a === Object(a);
	}
	exports.get_atributes = function (attributes) {
	    var keys = Object.keys(attributes),
	        deferred = {},
	        attr = {};
	    keys.map(function (key) {
	        return { key: key, value: attributes[key] };
	    }).filter(function (pair) {
	        if (!utils.has(attributes, pair.key)) return false;
	        if (pair.value && utils.isPromise(pair.value)) {
	            deferred[pair.key] = pair.value;
	            delete attributes[pair.key];
	            return false;
	        }
	        return true;
	    }).forEach(function (a) {
	        attr[a.key] = a.value;
	    });
	    return { attr: attr, deferred: deferred };
	};
	var State_1 = void 0;
	var State = State_1 = function (_collection_1$NestedM) {
	    _inherits(State, _collection_1$NestedM);

	    function State(container, values) {
	        _classCallCheck(this, State);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(State).call(this, values));

	        _this._container = container;
	        debug('%s: State created', _this.uid);
	        return _this;
	    }

	    _createClass(State, [{
	        key: "pick",
	        value: function pick(attr) {
	            for (var _len = arguments.length, attrs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                attrs[_key - 1] = arguments[_key];
	            }

	            if (arguments.length === 1) {
	                if (!Array.isArray(attr)) {
	                    attrs = [attr];
	                } else {
	                    attrs = attr;
	                }
	            } else {
	                attrs = [attr].concat(attrs);
	            }
	            var out = {};
	            for (var i = 0, ii = attrs.length; i < ii; i++) {
	                if (this.has(attrs[i])) out[attrs[i]] = this.get(attrs[i]);
	            }
	            return out;
	        }
	    }, {
	        key: "get",
	        value: function get(key) {
	            var data = _get(Object.getPrototypeOf(State.prototype), "get", this).call(this, key);
	            debug("%s: Get attribute: %s", this.uid, key, data);
	            return data;
	        }
	    }, {
	        key: "set",
	        value: function set(key, val) {
	            var _this2 = this;

	            var opts = { array: false },
	                value = {},
	                unset = {};
	            if (typeof key === 'string') {
	                if (val == null) {
	                    unset[key] = val;
	                } else {
	                    value[key] = val;
	                }
	            } else if (isObject(key)) {
	                value = key;
	            }

	            var _exports$get_atribute = exports.get_atributes(value);

	            var attr = _exports$get_atribute.attr;
	            var deferred = _exports$get_atribute.deferred;

	            if (!utils.isEmpty(deferred)) {
	                debug("%s: Resolve deferred values: %j", this.uid, Object.keys(deferred));
	                utils.objectToPromise(deferred).then(function (obj) {
	                    _this2.set(obj);
	                });
	            }
	            if (!utils.isEmpty(attr)) {
	                debug("%s: Set attributes: ", this.uid, attr);
	                _get(Object.getPrototypeOf(State.prototype), "set", this).call(this, attr, opts);
	            }
	            if (!utils.isEmpty(unset)) {
	                // Should unset
	                debug("%s: Unset attributes: %j", this.uid, Object.keys(unset));
	                _get(Object.getPrototypeOf(State.prototype), "set", this).call(this, unset);
	            }
	            return this;
	        }
	    }, {
	        key: "createChild",
	        value: function createChild(container, values) {
	            if (!container) container = this.container.createChild();
	            var state = new State_1(container, values);
	            state._parent = state;
	            debug("%s: Create child %s", this.uid, state.uid);
	            return state;
	        }
	    }, {
	        key: "$destroy",
	        value: function $destroy() {
	            _get(Object.getPrototypeOf(State.prototype), "destroy", this).call(this);
	            debug("%s: State destroyed", this.uid);
	        }
	    }, {
	        key: "parent",
	        get: function get() {
	            return this._parent;
	        }
	    }, {
	        key: "container",
	        get: function get() {
	            return this._container;
	        }
	    }]);

	    return State;
	}(collection_1.NestedModel);
	State = State_1 = __decorate([decorators.inject('$container')], State);
	exports.State = State;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(49));
	__export(__webpack_require__(51));
	__export(__webpack_require__(52));
	__export(__webpack_require__(53));
	__export(__webpack_require__(54));
	__export(__webpack_require__(56));


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var object_1 = __webpack_require__(50);
	var model_1 = __webpack_require__(51);
	var objects_1 = __webpack_require__(9);
	var arrays_1 = __webpack_require__(7);
	var utils_1 = __webpack_require__(8);
	var setOptions = { add: true, remove: true, merge: true };
	var addOptions = { add: true, remove: false };
	var Collection = (function (_super) {
	    __extends(Collection, _super);
	    function Collection(models, options) {
	        if (options === void 0) { options = {}; }
	        _super.call(this);
	        this.options = options;
	        if (this.options.model) {
	            this.Model = this.options.model;
	        }
	        if (models) {
	            this.add(models);
	        }
	    }
	    Object.defineProperty(Collection.prototype, "length", {
	        get: function () {
	            return this.models.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Collection.prototype, "Model", {
	        get: function () {
	            if (!this._model) {
	                this._model = model_1.Model;
	            }
	            return this._model;
	        },
	        set: function (con) {
	            this._model = con;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Collection.prototype, "models", {
	        get: function () {
	            return this._models || (this._models = []);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Collection.prototype.add = function (models, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        if (!Array.isArray(models)) {
	            if (!(models instanceof this.Model)) {
	                models = this._prepareModel(models);
	            }
	        }
	        else {
	            models = models.map(function (item) {
	                return (item instanceof _this.Model) ? item : (_this._prepareModel(item));
	            });
	        }
	        this.set(models, objects_1.extend({ merge: false }, options, addOptions));
	    };
	    Collection.prototype.set = function (items, options) {
	        if (options === void 0) { options = {}; }
	        options = objects_1.extend({}, setOptions, options);
	        if (options.parse)
	            items = this.parse(items, options);
	        var singular = !Array.isArray(items);
	        var models = (singular ? (items ? [items] : []) : items.slice());
	        var i, l, id, model, attrs, existing, sort;
	        var at = options.at;
	        var sortable = this.comparator && (at == null) && options.sort !== false;
	        var sortAttr = typeof this.comparator === 'string' ? this.comparator : null;
	        var toAdd = [], toRemove = [], modelMap = {};
	        var add = options.add, merge = options.merge, remove = options.remove;
	        var order = !sortable && add && remove ? [] : null;
	        for (i = 0, l = models.length; i < l; i++) {
	            model = models[i];
	            model = this._prepareModel(model);
	            id = model.get(model.idAttribute) || model.uid;
	            if (existing = this.get(id)) {
	                if (remove)
	                    modelMap[existing.uid] = true;
	                if (merge) {
	                    attrs = model.toJSON();
	                    existing.set(attrs, options);
	                    if (sortable && !sort && existing.hasChanged(sortAttr))
	                        sort = true;
	                }
	                models[i] = existing;
	            }
	            else if (add) {
	                models[i] = model;
	                if (!model)
	                    continue;
	                toAdd.push(model);
	                this._addReference(model, options);
	            }
	            model = existing || model;
	            if (order && !modelMap[model.id])
	                order.push(model);
	            modelMap[model.uid] = true;
	        }
	        if (remove) {
	            for (i = 0, l = this.length; i < l; ++i) {
	                if (!modelMap[(model = this.models[i]).uid])
	                    toRemove.push(model);
	            }
	            if (toRemove.length)
	                this.remove(toRemove, options);
	        }
	        if (toAdd.length || (order && order.length)) {
	            if (sortable)
	                sort = true;
	            if (at != null) {
	                for (i = 0, l = toAdd.length; i < l; i++) {
	                    this.models.splice(at + i, 0, toAdd[i]);
	                }
	            }
	            else {
	                if (order)
	                    this.models.length = 0;
	                var orderedModels = order || toAdd;
	                for (i = 0, l = orderedModels.length; i < l; i++) {
	                    this.models.push(orderedModels[i]);
	                }
	            }
	        }
	        if (sort)
	            this.sort({ silent: true });
	        if (!options.silent) {
	            for (i = 0, l = toAdd.length; i < l; i++) {
	                (model = toAdd[i]).trigger('add', model, this, options);
	            }
	            if (sort || (order && order.length))
	                this.trigger('sort', this, options);
	            if (toAdd.length || toRemove.length)
	                this.trigger('update', this, options);
	        }
	        return singular ? models[0] : models;
	    };
	    Collection.prototype.remove = function (models, options) {
	        if (options === void 0) { options = {}; }
	        var singular = !Array.isArray(models);
	        models = (singular ? [models] : models.slice());
	        var i, l, index, model;
	        for (i = 0, l = models.length; i < l; i++) {
	            model = models[i] = this.get(models[i]);
	            if (!model)
	                continue;
	            index = this.indexOf(model);
	            this.models.splice(index, 1);
	            if (!options.silent) {
	                options.index = index;
	                model.trigger('remove', model, this, options);
	            }
	            this._removeReference(model, options);
	        }
	        return singular ? models[0] : models;
	    };
	    Collection.prototype.get = function (id) {
	        return this.find(id);
	    };
	    Collection.prototype.at = function (index) {
	        return this.models[index];
	    };
	    Collection.prototype.clone = function (options) {
	        options = options || this.options;
	        return new this.constructor(this.models, options);
	    };
	    Collection.prototype.sort = function (options) {
	        if (options === void 0) { options = {}; }
	        if (!this.comparator)
	            throw new Error('Cannot sort a set without a comparator');
	        if (typeof this.comparator === 'string' || this.comparator.length === 1) {
	            this._models = this.sortBy(this.comparator, this);
	        }
	        else {
	            this.models.sort(this.comparator.bind(this));
	        }
	        if (!options.silent)
	            this.trigger('sort', this, options);
	        return this;
	    };
	    Collection.prototype.sortBy = function (key, context) {
	        return arrays_1.sortBy(this._models, key, context);
	    };
	    Collection.prototype.push = function (model, options) {
	        if (options === void 0) { options = {}; }
	        return this.add(model, objects_1.extend({ at: this.length }, options));
	    };
	    Collection.prototype.reset = function (models, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        this.forEach(function (model) {
	            _this._removeReference(model, options);
	        });
	        options.previousModels = this.models;
	        this._reset();
	        models = this.add(models, options);
	        if (!options.silent)
	            this.trigger('reset', this, options);
	        return models;
	    };
	    Collection.prototype.create = function (values, options) {
	        if (options === void 0) { options = { add: true }; }
	        var model = new this.Model(values, options);
	        if (options.add)
	            this.add(model);
	        return model;
	    };
	    Collection.prototype.parse = function (models, options) {
	        if (options === void 0) { options = {}; }
	        return models;
	    };
	    Collection.prototype.find = function (nidOrFn) {
	        var model;
	        if (typeof nidOrFn === 'function') {
	            model = arrays_1.find(this.models, nidOrFn);
	        }
	        else {
	            model = arrays_1.find(this.models, function (model) {
	                return model.id == nidOrFn || model.uid == nidOrFn || nidOrFn === model;
	            });
	        }
	        return model;
	    };
	    Collection.prototype.forEach = function (iterator, ctx) {
	        for (var i = 0, l = this.models.length; i < l; i++) {
	            iterator.call(ctx || this, this.models[i], i);
	        }
	        return this;
	    };
	    Collection.prototype.filter = function (fn) {
	        var out = [];
	        this.forEach(function (m, i) {
	            if (fn(m, i))
	                out.push(m);
	        });
	        return out;
	    };
	    Collection.prototype.indexOf = function (model) {
	        return this.models.indexOf(model);
	    };
	    Collection.prototype.toJSON = function () {
	        return this.models.map(function (m) { return m.toJSON(); });
	    };
	    Collection.prototype._prepareModel = function (value) {
	        if (value instanceof model_1.Model)
	            return value;
	        if (objects_1.isObject(value))
	            return new this.Model(value, { parse: true });
	        throw new Error('Value not an Object or an instance of a model, but was: ' + typeof value);
	    };
	    Collection.prototype._removeReference = function (model, options) {
	        if (this === model.collection)
	            delete model.collection;
	        this.stopListening(model);
	    };
	    Collection.prototype._addReference = function (model, options) {
	        if (!model.collection)
	            model.collection = this;
	        this.listenTo(model, 'all', this._onModelEvent);
	    };
	    Collection.prototype._reset = function () {
	        this._models = [];
	    };
	    Collection.prototype._onModelEvent = function (event, model, collection, options) {
	        if ((event === 'add' || event === 'remove') && collection !== this)
	            return;
	        if (event === 'destroy')
	            this.remove(model, options);
	        utils_1.callFunc(this.trigger, this, arrays_1.slice(arguments));
	    };
	    Collection.prototype.destroy = function () {
	        var _this = this;
	        this.models.forEach(function (m) {
	            if (typeof m.destroy === 'function' &&
	                m.collection == _this)
	                m.destroy();
	        });
	        _super.prototype.destroy.call(this);
	    };
	    return Collection;
	}(object_1.BaseObject));
	exports.Collection = Collection;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var eventsjs_1 = __webpack_require__(33);
	var utils_1 = __webpack_require__(8);
	var BaseObject = (function (_super) {
	    __extends(BaseObject, _super);
	    function BaseObject() {
	        _super.apply(this, arguments);
	    }
	    BaseObject.extend = function (proto, stat) {
	        return utils_1.inherits(this, proto, stat);
	    };
	    return BaseObject;
	}(eventsjs_1.EventEmitter));
	exports.BaseObject = BaseObject;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var object_1 = __webpack_require__(50);
	var utils_1 = __webpack_require__(8);
	var objects_1 = __webpack_require__(9);
	var Model = (function (_super) {
	    __extends(Model, _super);
	    function Model(attributes, options) {
	        if (attributes === void 0) { attributes = {}; }
	        if (options === void 0) { options = {}; }
	        _super.call(this);
	        options = options || {};
	        this._attributes = {};
	        this.options = options;
	        if (options.parse)
	            attributes = this.parse(attributes);
	        this.set(attributes, { silent: true, array: false });
	        this.uid = utils_1.uniqueId('uid');
	        this._changed = {};
	        this.collection = options.collection;
	        this.idAttribute = options.idAttribute || this.idAttribute || 'id';
	    }
	    Object.defineProperty(Model.prototype, "id", {
	        get: function () {
	            if (this.idAttribute in this._attributes)
	                return this._attributes[this.idAttribute];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Model.prototype, "isNew", {
	        get: function () {
	            return this.id == null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Model.prototype, "isDirty", {
	        get: function () {
	            return this.hasChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Model.prototype.set = function (key, val, options) {
	        if (options === void 0) { options = {}; }
	        var attr, attrs = {}, unset, changes, silent, changing, prev, current;
	        if (key == null)
	            return this;
	        if (typeof key === 'object') {
	            attrs = key;
	            options = val;
	        }
	        else {
	            attrs[key] = val;
	        }
	        options || (options = {});
	        unset = options.unset;
	        silent = options.silent;
	        changes = [];
	        changing = this._changing;
	        this._changing = true;
	        if (!changing) {
	            this._previousAttributes = objects_1.extend(Object.create(null), this._attributes);
	            this._changed = {};
	        }
	        current = this._attributes, prev = this._previousAttributes;
	        for (attr in attrs) {
	            val = attrs[attr];
	            if (!utils_1.equal(current[attr], val))
	                changes.push(attr);
	            if (!utils_1.equal(prev[attr], val)) {
	                this._changed[attr] = val;
	            }
	            else {
	                delete this._changed[attr];
	            }
	            unset ? delete current[attr] : current[attr] = val;
	        }
	        if (!silent) {
	            if (changes.length)
	                this._pending = !!options;
	            for (var i = 0, l = changes.length; i < l; i++) {
	                this.trigger('change:' + changes[i], this, current[changes[i]], options);
	            }
	        }
	        if (changing)
	            return this;
	        if (!silent) {
	            while (this._pending) {
	                options = this._pending;
	                this._pending = false;
	                this.trigger('change', this, options);
	            }
	        }
	        this._pending = false;
	        this._changing = false;
	        return this;
	    };
	    Model.prototype.get = function (key) {
	        return this._attributes[key];
	    };
	    Model.prototype.unset = function (key, options) {
	        this.set(key, void 0, objects_1.extend({}, options, { unset: true }));
	    };
	    Model.prototype.has = function (attr) {
	        return this.get(attr) != null;
	    };
	    Model.prototype.hasChanged = function (attr) {
	        if (attr == null)
	            return !!Object.keys(this.changed).length;
	        return objects_1.has(this.changed, attr);
	    };
	    Model.prototype.clear = function (options) {
	        var attrs = {};
	        for (var key in this._attributes)
	            attrs[key] = void 0;
	        return this.set(attrs, objects_1.extend({}, options, { unset: true }));
	    };
	    Object.defineProperty(Model.prototype, "changed", {
	        get: function () {
	            return objects_1.extend({}, this._changed);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Model.prototype.changedAttributes = function (diff) {
	        if (!diff)
	            return this.hasChanged() ? objects_1.extend(Object.create(null), this.changed) : false;
	        var val, changed = {};
	        var old = this._changing ? this._previousAttributes : this._attributes;
	        for (var attr in diff) {
	            if (utils_1.equal(old[attr], (val = diff[attr])))
	                continue;
	            (changed || (changed = {}))[attr] = val;
	        }
	        return changed;
	    };
	    Model.prototype.previous = function (attr) {
	        if (attr == null || !this._previousAttributes)
	            return null;
	        return this._previousAttributes[attr];
	    };
	    Model.prototype.previousAttributes = function () {
	        return objects_1.extend(Object.create(null), this._previousAttributes);
	    };
	    Model.prototype.toJSON = function () {
	        return JSON.parse(JSON.stringify(this._attributes));
	    };
	    Model.prototype.clone = function () {
	        return new (this.constructor)(this._attributes, this.options);
	    };
	    Model.prototype.parse = function (attr, options) {
	        return attr;
	    };
	    Model.prototype.remove = function (options) {
	        this.trigger('remove', this, this.collection, options);
	    };
	    Model.prototype.pick = function (attr) {
	        var attrs = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            attrs[_i - 1] = arguments[_i];
	        }
	        if (arguments.length === 1) {
	            if (!Array.isArray(attr)) {
	                attrs = [attr];
	            }
	            else {
	                attrs = attr;
	            }
	        }
	        else {
	            attrs = [attr].concat(attrs);
	        }
	        var out = {};
	        for (var i = 0, ii = attrs.length; i < ii; i++) {
	            if (this.has(attrs[i]))
	                out[attrs[i]] = this.get(attrs[i]);
	        }
	        return out;
	    };
	    return Model;
	}(object_1.BaseObject));
	exports.Model = Model;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var utils_1 = __webpack_require__(8);
	var objects_1 = __webpack_require__(9);
	var model_1 = __webpack_require__(51);
	function objToPaths(obj, separator, array) {
	    if (separator === void 0) { separator = "."; }
	    if (array === void 0) { array = true; }
	    var ret = {};
	    if (!obj)
	        return obj;
	    for (var key in obj) {
	        var val = obj[key];
	        if (val && (val.constructor === Object || (array && val.constructor === Array)) && !objects_1.isEmpty(val)) {
	            var obj2 = objToPaths(val);
	            for (var key2 in obj2) {
	                var val2 = obj2[key2];
	                ret[key + separator + key2] = val2;
	            }
	        }
	        else {
	            ret[key] = val;
	        }
	    }
	    return ret;
	}
	exports.objToPaths = objToPaths;
	function isOnNestedModel(obj, path, separator) {
	    if (separator === void 0) { separator = "."; }
	    var fields = path ? path.split(separator) : [];
	    if (!obj)
	        return false;
	    var result = obj;
	    for (var i = 0, n = fields.length; i < n; i++) {
	        if (result instanceof model_1.Model)
	            return true;
	        if (!result)
	            return false;
	        result = result[fields[i]];
	    }
	    return false;
	}
	function getNested(obj, path, return_exists, separator) {
	    if (separator === void 0) { separator = "."; }
	    if (!obj)
	        return null;
	    var fields = path ? path.split(separator) : [];
	    var result = obj;
	    return_exists || (return_exists === false);
	    for (var i = 0, n = fields.length; i < n; i++) {
	        if (return_exists && !objects_1.has(result, fields[i])) {
	            return false;
	        }
	        result = result instanceof model_1.Model ? result.get(fields[i]) : result[fields[i]];
	        if (result == null && i < n - 1) {
	            result = {};
	        }
	        if (typeof result === 'undefined') {
	            if (return_exists) {
	                return true;
	            }
	            return result;
	        }
	    }
	    if (return_exists) {
	        return true;
	    }
	    return result;
	}
	exports.getNested = getNested;
	function setNested(obj, path, val, options) {
	    options = options || {};
	    if (!obj)
	        return null;
	    var separator = options.separator || ".";
	    var fields = path ? path.split(separator) : [];
	    var result = obj;
	    for (var i = 0, n = fields.length; i < n && result !== undefined; i++) {
	        var field = fields[i];
	        if (i === n - 1) {
	            options.unset ? delete result[field] : result[field] = val;
	        }
	        else {
	            if (typeof result[field] === 'undefined' || !objects_1.isObject(result[field])) {
	                if (options.unset) {
	                    delete result[field];
	                    return;
	                }
	                var nextField = fields[i + 1];
	                result[field] = /^\d+$/.test(nextField) ? [] : {};
	            }
	            result = result[field];
	            if (result instanceof model_1.Model) {
	                var rest = fields.slice(i + 1);
	                return result.set(rest.join('.'), val, options);
	            }
	        }
	    }
	}
	function deleteNested(obj, path) {
	    setNested(obj, path, null, {
	        unset: true
	    });
	}
	var NestedModel = (function (_super) {
	    __extends(NestedModel, _super);
	    function NestedModel() {
	        _super.apply(this, arguments);
	    }
	    NestedModel.prototype.get = function (attr) {
	        return getNested(this._attributes, attr);
	    };
	    NestedModel.prototype.set = function (key, val, options) {
	        var _this = this;
	        var attr, attrs, unset, changes, silent, changing, prev, current;
	        if (key == null)
	            return this;
	        if (typeof key === 'object') {
	            attrs = key;
	            options = val || {};
	        }
	        else {
	            (attrs = {})[key] = val;
	        }
	        options || (options = {});
	        unset = options.unset;
	        silent = options.silent;
	        changes = [];
	        changing = this._changing;
	        this._changing = true;
	        if (!changing) {
	            this._previousAttributes = objects_1.extend({}, this._attributes);
	            this._changed = {};
	        }
	        current = this._attributes, prev = this._previousAttributes;
	        var separator = NestedModel.keyPathSeparator;
	        attrs = objToPaths(attrs, separator, options.array);
	        var alreadyTriggered = {};
	        if (!this._nestedListener)
	            this._nestedListener = {};
	        for (attr in attrs) {
	            val = attrs[attr];
	            var curVal = getNested(current, attr);
	            if (!utils_1.equal(curVal, val)) {
	                changes.push(attr);
	                this._changed[attr] = val;
	            }
	            if (!utils_1.equal(getNested(prev, attr), val)) {
	                setNested(this.changed, attr, val, options);
	            }
	            else {
	                deleteNested(this.changed, attr);
	            }
	            if (curVal instanceof model_1.Model) {
	                var fn = this._nestedListener[attr];
	                if (fn) {
	                    curVal.off('change', fn);
	                    delete this._nestedListener[attr];
	                }
	            }
	            if (unset) {
	                deleteNested(current, attr);
	            }
	            else {
	                if (!isOnNestedModel(current, attr, separator)) {
	                    if (val instanceof model_1.Model) {
	                        var fn = function (model) {
	                            if (model.changed == undefined || objects_1.isEmpty(model.changed))
	                                return;
	                            for (var key_1 in model.changed) {
	                                _this._changed[attr + separator + key_1] = model.changed[key_1];
	                                _this.trigger('change:' + attr + separator + key_1, model.changed[key_1]);
	                            }
	                            _this.trigger('change', _this, options);
	                        };
	                        this._nestedListener[attr] = fn;
	                        val.on('change', fn);
	                    }
	                }
	                else {
	                    alreadyTriggered[attr] = true;
	                }
	                setNested(current, attr, val, options);
	            }
	        }
	        if (!silent) {
	            if (changes.length)
	                this._pending = true;
	            for (var i = 0, l = changes.length; i < l; i++) {
	                var key_2 = changes[i];
	                if (!alreadyTriggered.hasOwnProperty(key_2) || !alreadyTriggered[key_2]) {
	                    alreadyTriggered[key_2] = true;
	                    this.trigger('change:' + key_2, this, getNested(current, key_2), options);
	                }
	                var fields = key_2.split(separator);
	                for (var n = fields.length - 1; n > 0; n--) {
	                    var parentKey = fields.slice(0, n).join(separator), wildcardKey = parentKey + separator + '*';
	                    if (!alreadyTriggered.hasOwnProperty(wildcardKey) || !alreadyTriggered[wildcardKey]) {
	                        alreadyTriggered[wildcardKey] = true;
	                        this.trigger('change:' + wildcardKey, this, getNested(current, parentKey), options);
	                    }
	                    if (!alreadyTriggered.hasOwnProperty(parentKey) || !alreadyTriggered[parentKey]) {
	                        alreadyTriggered[parentKey] = true;
	                        this.trigger('change:' + parentKey, this, getNested(current, parentKey), options);
	                    }
	                }
	            }
	        }
	        if (changing)
	            return this;
	        if (!silent) {
	            while (this._pending) {
	                this._pending = false;
	                this.trigger('change', this, options);
	            }
	        }
	        this._pending = false;
	        this._changing = false;
	        return this;
	    };
	    NestedModel.prototype.clear = function (options) {
	        var attrs = {};
	        var shallowAttributes = objToPaths(this._attributes);
	        for (var key in shallowAttributes)
	            attrs[key] = void 0;
	        return this.set(attrs, objects_1.extend({}, options, {
	            unset: true
	        }));
	    };
	    NestedModel.prototype.hasChanged = function (attr) {
	        if (attr == null) {
	            return !Object.keys(this.changed).length;
	        }
	        return getNested(this.changed, attr) !== undefined;
	    };
	    NestedModel.prototype.changedAttributes = function (diff) {
	        if (!diff)
	            return this.hasChanged() ? objToPaths(this.changed) : false;
	        var old = this._changing ? this._previousAttributes : this._attributes;
	        diff = objToPaths(diff);
	        old = objToPaths(old);
	        var val, changed = false;
	        for (var attr in diff) {
	            if (utils_1.equal(old[attr], (val = diff[attr])))
	                continue;
	            (changed || (changed = {}))[attr] = val;
	        }
	        return changed;
	    };
	    NestedModel.prototype.previous = function (attr) {
	        if (attr == null || !this._previousAttributes) {
	            return null;
	        }
	        return getNested(this._previousAttributes, attr);
	    };
	    NestedModel.prototype.previousAttributes = function () {
	        return objects_1.extend({}, this._previousAttributes);
	    };
	    NestedModel.prototype.pick = function (attr) {
	        var attrs = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            attrs[_i - 1] = arguments[_i];
	        }
	        if (arguments.length === 1) {
	            attr = !Array.isArray(attr) ? [attr] : attr;
	        }
	        else {
	            attrs = [attr].concat(attrs);
	        }
	        var out = {};
	        for (var i = 0, ii = attrs.length; i < ii; i++) {
	            if (this.has(attrs[i])) {
	                setNested(out, attrs[i], this.get(attrs[i]));
	            }
	        }
	        return out;
	    };
	    NestedModel.prototype.destroy = function () {
	        for (var key in this._nestedListener) {
	            var fn = this._nestedListener[key];
	            if (fn) {
	                var m = this.get(key);
	                if (m)
	                    m.off(key, fn);
	            }
	        }
	        _super.prototype.destroy.call(this);
	    };
	    NestedModel.keyPathSeparator = '.';
	    return NestedModel;
	}(model_1.Model));
	exports.NestedModel = NestedModel;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var objects_1 = __webpack_require__(9);
	var collection_1 = __webpack_require__(49);
	var rest_model_1 = __webpack_require__(54);
	var promises_1 = __webpack_require__(11);
	var persistence_1 = __webpack_require__(55);
	var RestCollection = (function (_super) {
	    __extends(RestCollection, _super);
	    function RestCollection(models, options) {
	        if (options === void 0) { options = {}; }
	        _super.call(this, models, options);
	        if (options.url)
	            this.url = options.url;
	        this.options.queryParameter = this.options.queryParameter || 'q';
	    }
	    RestCollection.prototype.getURL = function () {
	        return typeof this.url === 'function' ? this.url() : this.url;
	    };
	    RestCollection.prototype.fetch = function (options) {
	        var _this = this;
	        options = options ? objects_1.extend({}, options) : {};
	        var url = this.getURL();
	        if (url == null)
	            return promises_1.Promise.reject(new Error('Url or rootURL no specified'));
	        options.url = url;
	        this.trigger('before:fetch');
	        return this.sync(persistence_1.RestMethod.Read, this, options)
	            .then(function (results) {
	            _this[options.reset ? 'reset' : 'set'](results.content, options);
	            _this.trigger('fetch');
	            return _this;
	        }).catch(function (e) {
	            _this.trigger('error', e);
	            throw e;
	        });
	    };
	    RestCollection.prototype.create = function (value, options) {
	        var _this = this;
	        options = options ? objects_1.extend({}, options) : {};
	        var model;
	        var url = this.getURL();
	        if (url == null)
	            throw new Error('Url or rootURL no specified');
	        options.url = url;
	        if (value instanceof rest_model_1.RestModel) {
	            model = value;
	        }
	        else {
	            model = new this.Model(value, { parse: true, url: this.getURL() });
	        }
	        if (options.wait === void 0)
	            options.wait = true;
	        if (!options.wait)
	            this.add(model, options);
	        this.trigger('before:create', this, model, value, options);
	        model.save().then(function () {
	            if (!options.wait)
	                _this.add(model, options);
	            _this.trigger('create', _this, model, value, options);
	            if (options.complete)
	                options.complete(null, model);
	        }).catch(function (e) {
	            _this.trigger('error', e);
	            if (options.complete)
	                options.complete(e, null);
	        });
	        return model;
	    };
	    RestCollection.prototype.query = function (term, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        var params = (_a = {}, _a[this.options.queryParameter] = term, _a);
	        var url = this.getURL();
	        if (url == null)
	            return promises_1.Promise.reject(new Error('Url or rootURL no specified'));
	        options.url = url;
	        if (!options.params)
	            options.params = {};
	        objects_1.extend(options.params, params);
	        this.trigger('before:query');
	        return this.sync(persistence_1.RestMethod.Read, this, options)
	            .then(function (results) {
	            _this.reset(results.content, options);
	            _this.trigger('query');
	            return _this.models;
	        }).catch(function (e) {
	            _this.trigger('error', e);
	            throw e;
	        });
	        var _a;
	    };
	    RestCollection.prototype.sync = function (method, model, options) {
	        return persistence_1.sync(method, model, options);
	    };
	    return RestCollection;
	}(collection_1.Collection));
	exports.RestCollection = RestCollection;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var objects_1 = __webpack_require__(9);
	var promises_1 = __webpack_require__(11);
	var nested_model_1 = __webpack_require__(52);
	var persistence_1 = __webpack_require__(55);
	function normalize_path(url, id) {
	    var i, p = "";
	    if ((i = url.indexOf('?')) >= 0) {
	        p = url.substr(i);
	        url = url.substr(0, i);
	    }
	    if (url[url.length - 1] !== '/')
	        url += '/';
	    return url + id + p;
	}
	exports.normalize_path = normalize_path;
	var RestModel = (function (_super) {
	    __extends(RestModel, _super);
	    function RestModel(attr, options) {
	        if (options === void 0) { options = {}; }
	        _super.call(this, attr, options);
	        this.idAttribute = 'id';
	        if (options.url) {
	            this.rootURL = options.url;
	        }
	    }
	    RestModel.prototype.getURL = function (id) {
	        var url = this.rootURL;
	        if (this.collection && this.collection.getURL()) {
	            url = this.collection.getURL();
	        }
	        id = id || this.id;
	        if (id && url) {
	            url = normalize_path(url, this.id);
	        }
	        return url;
	    };
	    RestModel.prototype.fetch = function (options) {
	        var _this = this;
	        options = options ? objects_1.extend({}, options) : {};
	        var url = this.getURL();
	        if (url == null)
	            return promises_1.Promise.reject(new Error('Url or rootURL no specified'));
	        options.url = url;
	        this.trigger('before:fetch', this, options);
	        return this.sync(persistence_1.RestMethod.Read, this, options)
	            .then(function (result) {
	            if (result)
	                _this.set(_this.parse(result.content, options), options);
	            _this.trigger('fetch', _this, result, options);
	            return _this;
	        }).catch(function (e) {
	            _this.trigger('error', _this, e);
	            if (e) {
	                throw e;
	            }
	            return _this;
	        });
	    };
	    RestModel.prototype.save = function (options) {
	        var _this = this;
	        options = options ? objects_1.extend({}, options) : {};
	        this.trigger('before:save', this, options);
	        var method = persistence_1.RestMethod[this.isNew ? 'Create' : options.changed ? 'Patch' : "Update"];
	        var url = this.getURL(this.id);
	        if (url == null)
	            return promises_1.Promise.reject(new Error('Url or rootURL no specified'));
	        options.url = url;
	        return this.sync(method, this, options)
	            .then(function (result) {
	            _this.set(result.content, options);
	            _this.trigger('save', _this, result, options);
	            return _this;
	        }).catch(function (e) {
	            _this.trigger('error', _this, e);
	            throw e;
	        });
	    };
	    RestModel.prototype.remove = function (options) {
	        var _this = this;
	        options = options ? objects_1.extend({}, options) : {};
	        if (this.isNew) {
	            _super.prototype.remove.call(this, options);
	            return promises_1.Promise.resolve(this);
	        }
	        var url = this.getURL(this.id);
	        if (url == null)
	            return promises_1.Promise.reject(new Error('Url or rootURL no specified'));
	        this.trigger('before:remove', this, options);
	        if (!options.wait)
	            _super.prototype.remove.call(this, options);
	        options.url = url;
	        return this.sync(persistence_1.RestMethod.Delete, this, options)
	            .then(function (result) {
	            if (!options.wait)
	                _super.prototype.remove.call(_this, options);
	            return _this;
	        }).catch(function (e) {
	            _this.trigger('error', _this, e);
	            throw e;
	        });
	    };
	    RestModel.prototype.sync = function (method, model, options) {
	        return persistence_1.sync(method, model, options);
	    };
	    return RestModel;
	}(nested_model_1.NestedModel));
	exports.RestModel = RestModel;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var promises_1 = __webpack_require__(11);
	var utils_1 = __webpack_require__(8);
	var request_1 = __webpack_require__(16);
	var HttpError = (function (_super) {
	    __extends(HttpError, _super);
	    function HttpError(status, message, body) {
	        _super.call(this, message);
	        this.message = message;
	        this.status = status;
	        this.body = body;
	    }
	    return HttpError;
	}(Error));
	exports.HttpError = HttpError;
	(function (RestMethod) {
	    RestMethod[RestMethod["Create"] = 0] = "Create";
	    RestMethod[RestMethod["Update"] = 1] = "Update";
	    RestMethod[RestMethod["Read"] = 2] = "Read";
	    RestMethod[RestMethod["Patch"] = 3] = "Patch";
	    RestMethod[RestMethod["Delete"] = 4] = "Delete";
	})(exports.RestMethod || (exports.RestMethod = {}));
	var RestMethod = exports.RestMethod;
	;
	var xmlRe = /^(?:application|text)\/xml/;
	var jsonRe = /^application\/json/;
	var getData = function (accepts, xhr) {
	    if (accepts == null)
	        accepts = xhr.getResponseHeader('content-type');
	    if (xmlRe.test(accepts)) {
	        return xhr.responseXML;
	    }
	    else if (jsonRe.test(accepts) && xhr.responseText !== '') {
	        return JSON.parse(xhr.responseText);
	    }
	    else {
	        return xhr.responseText;
	    }
	};
	var isValid = function (xhr) {
	    return (xhr.status >= 200 && xhr.status < 300) ||
	        (xhr.status === 304) ||
	        (xhr.status === 0 && window.location.protocol === 'file:');
	};
	function sync(method, model, options) {
	    var http;
	    switch (method) {
	        case RestMethod.Create:
	            http = 'POST';
	            break;
	        case RestMethod.Update:
	            http = "PUT";
	            break;
	        case RestMethod.Patch:
	            http = "PATCH";
	            break;
	        case RestMethod.Delete:
	            http = "DELETE";
	            break;
	        case RestMethod.Read:
	            http = "GET";
	            break;
	        default:
	            return promises_1.Promise.reject(new Error("Sync: does not recognise method: " + method));
	    }
	    var xhr = utils_1.ajax();
	    var query, url = options.url;
	    if (options.params)
	        query = request_1.queryParam(options.params);
	    if (query) {
	        var sep = (options.url.indexOf('?') === -1) ? '?' : '&';
	        url += sep + query;
	    }
	    return new promises_1.Promise(function (resolve, reject) {
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState !== 4)
	                return;
	            var data;
	            try {
	                data = getData(options.headers['Accept'], xhr);
	            }
	            catch (e) {
	                return reject(new Error('Could not serialize response'));
	            }
	            var response = {
	                method: method,
	                status: xhr.status,
	                content: data
	            };
	            utils_1.proxy(response, xhr, ['getAllResponseHeaders', 'getResponseHeader']);
	            if (isValid(xhr)) {
	                return resolve(response);
	            }
	            else {
	                var error = new HttpError(xhr.status, xhr.statusText, data);
	                return reject(error);
	            }
	        };
	        xhr.open(http, url, true);
	        if (!(options.headers && options.headers['Accept'])) {
	            options.headers = {
	                Accept: "application/json"
	            };
	        }
	        xhr.setRequestHeader('Content-Type', "application/json");
	        if (options.headers)
	            for (var key in options.headers) {
	                xhr.setRequestHeader(key, options.headers[key]);
	            }
	        if (options.beforeSend)
	            options.beforeSend(xhr);
	        xhr.send(JSON.stringify(model.toJSON()));
	    });
	}
	exports.sync = sync;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(49);
	var rest_collection_1 = __webpack_require__(53);
	var promises_1 = __webpack_require__(11);
	var persistence_1 = __webpack_require__(55);
	var objects_1 = __webpack_require__(9);
	var request_1 = __webpack_require__(16);
	var PARAM_TRIM_RE = /[\s'"]/g;
	var URL_TRIM_RE = /[<>\s'"]/g;
	function queryStringToParams(qs) {
	    var kvp, k, v, ls, params = {}, decode = decodeURIComponent;
	    var kvps = qs.split('&');
	    for (var i = 0, l = kvps.length; i < l; i++) {
	        var param = kvps[i];
	        kvp = param.split('='), k = kvp[0], v = kvp[1];
	        if (v == null)
	            v = true;
	        k = decode(k), v = decode(v), ls = params[k];
	        if (Array.isArray(ls))
	            ls.push(v);
	        else if (ls)
	            params[k] = [ls, v];
	        else
	            params[k] = v;
	    }
	    return params;
	}
	var PaginatedCollection = (function (_super) {
	    __extends(PaginatedCollection, _super);
	    function PaginatedCollection(models, options) {
	        if (options === void 0) { options = {}; }
	        _super.call(this, models, options);
	        this._state = { first: 1, last: -1, current: 1, size: 10 };
	        this._link = {};
	        this.queryParams = {
	            page: 'page',
	            size: 'pageSize'
	        };
	        if (options.queryParams) {
	            objects_1.extend(this.queryParams, options.queryParams);
	        }
	        if (options.firstPage)
	            this._state.first = options.firstPage;
	        if (options.pageSize)
	            this._state.size = options.pageSize;
	        this._state.current = this._state.first;
	        this._page = new collection_1.Collection();
	        this._page.Model = this.Model;
	    }
	    Object.defineProperty(PaginatedCollection.prototype, "page", {
	        get: function () {
	            return this._page;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PaginatedCollection.prototype.hasNext = function () {
	        return this.hasPage(this._state.current + 1);
	    };
	    PaginatedCollection.prototype.hasPrevious = function () {
	        return this.hasPage(this._state.current - 1);
	    };
	    PaginatedCollection.prototype.hasPage = function (page) {
	        if (this._state.last > -1) {
	            return page <= this._state.last;
	        }
	        return false;
	    };
	    PaginatedCollection.prototype.getPreviousPage = function (options) {
	        options = options ? objects_1.extend({}, options) : {};
	        options.page = this._state.current - 1;
	        return this.getPage(options);
	    };
	    PaginatedCollection.prototype.getNextPage = function (options) {
	        options = options ? objects_1.extend({}, options) : {};
	        options.page = this._state.current + 1;
	        return this.getPage(options);
	    };
	    PaginatedCollection.prototype.getPage = function (options) {
	        options = options ? objects_1.extend({}, options) : {};
	        if (options.page === void 0)
	            return promises_1.Promise.reject(new Error("No page"));
	        if (this._state.last < options.page && this._state.last != -1) {
	            options.page = this._state.last;
	        }
	        else if (options.page < this._state.first) {
	            options.page = this._state.first;
	        }
	        return this.fetch(options);
	    };
	    PaginatedCollection.prototype.fetch = function (options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        options = options ? objects_1.extend({}, options) : {};
	        var url;
	        if (!objects_1.has(options, 'page')) {
	            options.page = this._state.current;
	        }
	        var params = options.params ? objects_1.extend({}, options.params) : {};
	        if (objects_1.has(params, this.queryParams.page))
	            delete params[this.queryParams.page];
	        url = this._link[options.page];
	        if (!url) {
	            url = this.getURL();
	        }
	        if (!url)
	            return promises_1.Promise.reject(new Error("no url specified"));
	        var idx = url.indexOf('?');
	        if (idx > -1) {
	            params = objects_1.extend(params, queryStringToParams(url.substr(idx + 1)));
	            url = url.substr(0, idx);
	        }
	        if (!objects_1.has(params, this.queryParams.page)) {
	            params[this.queryParams.page] = options.page;
	        }
	        options.params = params;
	        options.url = url;
	        this.trigger('before:fetch', this, options);
	        params[this.queryParams.size] = this._state.size;
	        if (!this._link[options.page + '']) {
	            this._link[options.page] = url + '?' + request_1.queryParam({ page: options.page });
	        }
	        return this.sync(persistence_1.RestMethod.Read, this, options)
	            .then(function (resp) {
	            _this._processResponse(resp, options);
	            _this.trigger('fetch', _this, resp, options);
	            return _this;
	        }).catch(function (e) {
	            _this.trigger('error', e);
	            throw e;
	        });
	    };
	    PaginatedCollection.prototype._processResponse = function (resp, options) {
	        var currentPage = options.page;
	        var links = this._parseLinkHeaders(resp);
	        if (links.first)
	            this._link[this._state.first] = links.first;
	        if (links.prev)
	            this._link[currentPage - 1] = links.prev;
	        if (links.next)
	            this._link[currentPage + 1] = links.next;
	        if (links.last) {
	            var last = links.last;
	            var idx = last.indexOf('?');
	            if (idx > -1) {
	                var params = queryStringToParams(last.substr(idx + 1));
	                if (objects_1.has(params, this.queryParams.page)) {
	                    this._link[params[this.queryParams.page]] = last;
	                    this._state.last = parseInt(params[this.queryParams.page]);
	                }
	            }
	        }
	        this._state.current = currentPage;
	        var data = resp.content;
	        if (data && !Array.isArray(data))
	            data = [data];
	        if (!data)
	            return this;
	        data = this.parse(data);
	        for (var i = 0, ii = data.length; i < ii; i++) {
	            data[i] = this._prepareModel(data[i]);
	        }
	        this.add(data);
	        return this;
	    };
	    PaginatedCollection.prototype._parseLinkHeaders = function (resp) {
	        var link = {};
	        if (typeof resp['getResponseHeader'] !== 'function') {
	            return link;
	        }
	        var linkHeader = resp['getResponseHeader']('Link');
	        if (!linkHeader)
	            return link;
	        linkHeader = linkHeader.split(',');
	        var relations = ['first', 'prev', 'next', 'last'];
	        for (var i = 0, ii = linkHeader.length; i < ii; i++) {
	            var linkParts = linkHeader[i].split(';'), url = linkParts[0].replace(URL_TRIM_RE, ''), params = linkParts.slice(1);
	            for (var x = 0, xx = params.length; x < xx; x++) {
	                var paramParts = params[x].split('='), key = paramParts[0].replace(PARAM_TRIM_RE, ''), value = paramParts[1].replace(PARAM_TRIM_RE, '');
	                if (key == 'rel' && !!~relations.indexOf(value))
	                    link[value] = url;
	            }
	        }
	        return link;
	    };
	    return PaginatedCollection;
	}(rest_collection_1.RestCollection));
	exports.PaginatedCollection = PaginatedCollection;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	var internal_1 = __webpack_require__(5);
	var utilities_1 = __webpack_require__(6);
	var stick_di_1 = __webpack_require__(17);
	var repository_1 = __webpack_require__(31);
	var templ = __webpack_require__(58);
	__export(__webpack_require__(29));
	var debug = __webpack_require__(23)('stick:decorators');
	function controller(controllerName) {
	    return function (target) {
	        var name = controllerName || utilities_1.camelcase(target.name);
	        repository_1.Repository.add(internal_1.DependencyType.Controller, name, target);
	    };
	}
	exports.controller = controller;
	function _module(moduleName) {
	    return function (target) {
	        var name = moduleName || utilities_1.camelcase(target.name);
	        repository_1.Repository.add(internal_1.DependencyType.Module, name, target);
	    };
	}
	exports.module = _module;
	function service(serviceName, moduleName) {
	    return function (target) {
	        var name = serviceName || utilities_1.camelcase(target.name);
	        repository_1.Repository.add(internal_1.DependencyType.Service, name, target);
	    };
	}
	exports.service = service;
	function factory(factoryName) {
	    return function (target) {};
	}
	exports.factory = factory;
	function config(config) {
	    return function (target) {
	        stick_di_1.Metadata.define(internal_1.DIServiceConfig, config, target, undefined);
	    };
	}
	exports.config = config;
	function template(name) {
	    return function (target) {
	        stick_di_1.Metadata.define(internal_1.Metakey[internal_1.Metakey.Template], name, target, undefined);
	    };
	}
	exports.template = template;
	function component(name) {
	    return function (target) {
	        debug('defining component %s, target: %s', name, target.name);
	        templ.component(name, target);
	    };
	}
	exports.component = component;
	function attribute(name) {
	    return function (target) {
	        debug('defining attribute %s, target: %s', name, target.name);
	        templ.attribute(name, target);
	    };
	}
	exports.attribute = attribute;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var repository_1 = __webpack_require__(59);
	var vnode = __webpack_require__(34);
	var components = __webpack_require__(60);
	var attributes = __webpack_require__(64);
	var modifiers = __webpack_require__(70);
	var utils = __webpack_require__(39);
	var view_1 = __webpack_require__(63);
	var compiler = __webpack_require__(71);
	var binding_1 = __webpack_require__(73);
	var runloop_1 = __webpack_require__(74);
	exports.version = "$$version$$";
	function attribute(name, attr) {
	    if (typeof attr !== 'function') {
	        attr = utils.extendClass(attributes.BaseAttribute, attr);
	    }
	    attributes[name] = attr;
	}
	exports.attribute = attribute;
	function component(name, cmp) {
	    if (typeof cmp !== 'function') {
	        cmp = utils.extendClass(components.BaseComponent, cmp);
	    }
	    components[name] = cmp;
	}
	exports.component = component;
	function modifier(name, func) {
	    modifiers[name] = func;
	}
	exports.modifier = modifier;
	function debugging(enabled) {
	    utils.Debug.enable(enabled);
	}
	exports.debugging = debugging;
	function compile(str, options) {
	    var vn = vnode,
	        fn = compiler.compile(str);
	    var n = fn(vn.fragment, vn.element, vn.text, vn.comment, vn.dynamic, binding_1.binding);
	    return vn.template(n, utils.extend({
	        document: document,
	        viewClass: view_1.View,
	        attributes: new repository_1.Repository(attributes),
	        components: new repository_1.Repository(components),
	        modifiers: modifiers,
	        runloop: new runloop_1.RunLoop()
	    }, options || {}));
	}
	exports.compile = compile;

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Repository = function () {
	    function Repository(values) {
	        _classCallCheck(this, Repository);

	        this.values = values || {};
	    }

	    Repository.prototype.set = function set(key, value) {
	        this.values[key] = value;
	    };

	    Repository.prototype.get = function get(key) {
	        return this.values[key];
	    };

	    Repository.prototype.has = function has(key) {
	        return !!this.get(key);
	    };

	    Repository.prototype.delete = function _delete(key) {
	        delete this.values[key];
	    };

	    return Repository;
	}();

	exports.Repository = Repository;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(61));
	__export(__webpack_require__(62));

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var template_1 = __webpack_require__(44);
	var fragment_1 = __webpack_require__(42);

	var BaseComponent = function () {
	    function BaseComponent(section, vvnode, attributes, view) {
	        _classCallCheck(this, BaseComponent);

	        this.section = section;
	        this.vnode = vvnode;
	        this.attributes = attributes;
	        this.view = view;
	        this.document = view.template.options.document;
	        if (vvnode.childNodes) this.childTemplate = template_1.template(fragment_1.fragment(vvnode.childNodes), view.template.options);
	        for (var key in attributes) {
	            this.setAttribute(key, attributes[key]);
	        }this.initialize();
	    }

	    BaseComponent.prototype.initialize = function initialize() {};

	    BaseComponent.prototype.setAttribute = function setAttribute(key, value) {
	        this.attributes[key] = value;
	    };

	    BaseComponent.prototype.removeAttribute = function removeAttribute(key) {
	        this.attributes[key] = void 0;
	    };

	    BaseComponent.prototype.destroy = function destroy() {};

	    return BaseComponent;
	}();

	exports.BaseComponent = BaseComponent;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var component_1 = __webpack_require__(61);
	var view_1 = __webpack_require__(63);
	function _each(target, iterate) {
	    if (!target) return;
	    if (target.forEach) {
	        // use API here since target could be an object
	        target.forEach(iterate);
	    } else {
	        for (var key in target) {
	            if (target.hasOwnProperty(key)) iterate(target[key], key);
	        }
	    }
	}

	var Repeat = function (_component_1$BaseComp) {
	    _inherits(Repeat, _component_1$BaseComp);

	    function Repeat() {
	        _classCallCheck(this, Repeat);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, _component_1$BaseComp.call.apply(_component_1$BaseComp, [this].concat(args)));

	        _this._children = [];
	        return _this;
	    }

	    Repeat.prototype.update = function update() {
	        var as = this['as'];
	        var each = this['each'];
	        var key = this['key'] || "key";
	        var n = 0;
	        var self = this;
	        var parent = this.view;
	        var properties;
	        if (each instanceof view_1.Call) {
	            each = each.call();
	        }
	        _each(each, function (model, k) {
	            var child;
	            if (as) {
	                properties = {};
	                properties[key] = k;
	                properties[as] = model;
	            } else {
	                properties = model;
	            }
	            properties.parent = self.view.context;
	            // TODO - provide SAME context here for speed and stability
	            if (n >= self._children.length) {
	                child = self.childTemplate.view(properties, {
	                    parent: parent
	                });
	                self._children.push(child);
	                self.section.appendChild(child.render(properties));
	            } else {
	                child = self._children[n];
	                child.context = properties;
	                child.update();
	            }
	            n++;
	        });
	        this._children.splice(n).forEach(function (child) {
	            child.remove();
	        });
	    };

	    Repeat.prototype.setAttribute = function setAttribute(key, value) {
	        this[key] = value;
	    };

	    return Repeat;
	}(component_1.BaseComponent);

	exports.Repeat = Repeat;
	exports.repeat = Repeat;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var utils = __webpack_require__(39);
	var vnode = __webpack_require__(34);
	//import {RunLoop} from './runloop';
	var debug = utils.debug('view');
	function _set(target, keypath, value) {
	    var keys = typeof keypath === "string" ? keypath.split(".") : keypath;
	    var ct = target;
	    var key;
	    for (var i = 0, n = keys.length - 1; i < n; i++) {
	        key = keys[i];
	        if (!ct[key]) {
	            ct[key] = {};
	        }
	        ct = ct[key];
	    }
	    ct[keys[keys.length - 1]] = value;
	    return value;
	}

	var Reference = function () {
	    function Reference(view, path, gettable, settable) {
	        _classCallCheck(this, Reference);

	        this.gettable = gettable;
	        this.settable = settable;
	        this.view = view;
	        this.path = path;
	    }

	    Reference.prototype.value = function value(_value) {
	        if (arguments.length === 0) {
	            return this.gettable ? this.view.get(this.path) : void 0;
	        }
	        if (this.settable) this.view.set(this.path, _value);
	    };

	    Reference.prototype.toString = function toString() {
	        return this.view.get(this.path) || '';
	    };

	    return Reference;
	}();

	exports.Reference = Reference;

	var Assignment = function () {
	    function Assignment(view, path, value) {
	        _classCallCheck(this, Assignment);

	        this.view = view;
	        this.path = path;
	        this.value = value;
	        this.assign = utils.bind(this.assign, this);
	        this.toString = utils.bind(this.toString, this);
	    }

	    Assignment.prototype.assign = function assign() {
	        this.view.set(this.path, this.value.call(this));
	    };

	    Assignment.prototype.toString = function toString() {
	        var val = this.value.call(this);
	        return val ? String(val) : '';
	    };

	    return Assignment;
	}();

	exports.Assignment = Assignment;

	var Call = function () {
	    function Call(view, keypath, params) {
	        _classCallCheck(this, Call);

	        this.view = view;
	        this.keypath = keypath;
	        this.params = params || [];
	    }

	    Call.prototype.call = function call() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        args = args || [];
	        var fn = this.view.get(this.keypath);
	        if (fn == null || typeof fn !== 'function') {
	            //throw new Error("not exists or not function");
	            return this.view.trigger('error', this, new Error("function does not exists or is not a function"));
	        }
	        return fn.apply(this.view, this.params.concat(args));
	    };

	    Call.prototype.toString = function toString() {
	        var val = this.call();
	        return val ? String(val) : '';
	    };

	    return Call;
	}();

	exports.Call = Call;

	var View = function (_vnode$View) {
	    _inherits(View, _vnode$View);

	    function View(section, template, context) {
	        var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	        _classCallCheck(this, View);

	        var _this = _possibleConstructorReturn(this, _vnode$View.call(this, section, template, context, options));

	        _this.context = context;
	        _this._callers = {};
	        _this._getters = {};
	        if (options.parent) {
	            _this.parent = options.parent;
	        }
	        if (options.delegator) {
	            _this._delegator = options.delegator;
	        }
	        //this._runloop = options.runloop;
	        return _this;
	    }

	    View.prototype.getDelegator = function getDelegator() {
	        if (this._delegator) return this._delegator;
	        var parent = this.parent;
	        while (parent != undefined) {
	            if (parent._delegator) return parent._delegator;
	            parent = parent.parent;
	        }
	        return null;
	    };

	    View.prototype.addListener = function addListener(elm, eventName, callback) {
	        var capture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	        var delegator = this.getDelegator();
	        if (delegator) {
	            return delegator.addListener(elm, eventName, callback, capture);
	        } else if (typeof callback === 'function') {
	            return _vnode$View.prototype.addListener.call(this, elm, eventName, callback, capture);
	        }
	    };

	    View.prototype.removeListener = function removeListener(elm, eventName, callback) {
	        var capture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	        var delegator = this.getDelegator();
	        if (delegator) {
	            delegator.removeListener(elm, eventName, callback, capture);
	        } else if (typeof callback === 'function') {
	            _vnode$View.prototype.removeListener.call(this, elm, eventName, callback, capture);
	        }
	    };

	    View.prototype.get = function get(keypath) {
	        if (!this.context) return void 0;
	        var pt = typeof keypath !== "string" ? keypath.join(".") : keypath;
	        var v;
	        try {
	            var getter;
	            if (!(getter = this._getters[pt])) {
	                getter = this._getters[pt] = new Function("return this." + pt);
	            }
	            v = getter.call(this.context);
	        } catch (e) {
	            v = void 0;
	        }
	        v = v != void 0 ? v : this.parent ? this.parent.get(keypath) : void 0;
	        debug('get value "%s": %s', keypath, v);
	        return v;
	    };

	    View.prototype.set = function set(path, value) {
	        debug('set value %s on context %j', value, this.context);
	        if (!this.context) return void 0;
	        if (typeof path === "string") path = path.split(".");
	        var ret = _set(this.context, path, value);
	        this.updateLater();
	    };

	    View.prototype.render = function render() {
	        this.update();
	        var section = _vnode$View.prototype.render.call(this);
	        //this.transitions.enter();
	        return section;
	    };

	    View.prototype.updateLater = function updateLater() {
	        this._runloop.deferOnce(this);
	    };

	    View.prototype.ref = function ref(path, gettable, settable) {
	        debug('reference %s, gettable: %o, settabble: %o', path, gettable, settable);
	        return new Reference(this, path, gettable, settable);
	    };

	    View.prototype.assign = function assign(path, value) {
	        debug('assignment %s %s', path, value);
	        return new Assignment(this, path, value);
	    };

	    View.prototype.call = function call(keypath, params) {
	        var caller;
	        var v;
	        debug('call keypath "%s", args: "%o"', keypath, params);
	        if (typeof keypath !== "string") keypath = keypath.join(".");
	        if (!(caller = this._callers[keypath])) {
	            var ctxPath = ["this"].concat(keypath.split("."));
	            ctxPath.pop();
	            caller = this._callers[keypath] = new Function("params", "return this." + keypath + ".apply(" + ctxPath.join(".") + ", params);");
	        }
	        /*try {
	            v = caller.call(this.context, params);
	        } catch (e) {
	            console.error('could not call', e)
	        }
	         return v != void 0 ? v : this.parent ? this.parent.call(keypath, params) : void 0;*/
	        return new Call(this, keypath, params);
	    };

	    _createClass(View, [{
	        key: 'root',
	        get: function get() {
	            if (this.parent == null) return this;
	            var root = this,
	                tmp = root;
	            while (tmp) {
	                tmp = tmp.parent;
	                if (tmp) root = tmp;
	            }
	            return root;
	        }
	    }]);

	    return View;
	}(vnode.View);

	exports.View = View;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	var value_1 = __webpack_require__(65);
	var event_1 = __webpack_require__(67);
	var style_1 = __webpack_require__(68);
	var focus_1 = __webpack_require__(69);
	__export(__webpack_require__(66));
	exports.value = value_1.ValueAttribute;
	exports.onclick = event_1.ClickAttribute;
	exports.onenter = event_1.OnEnterAttribute;
	exports.onescape = event_1.OnEscapeAttribute;
	exports.onchange = event_1.ChangeAttribute;
	exports.onscroll = event_1.ScrollAttribute;
	exports.onfocus = event_1.OnFocusAttribute;
	exports.onblur = event_1.BlurAttribute;
	exports.checked = value_1.ValueAttribute;
	exports.style = style_1.StyleAttribute;
	exports.focus = focus_1.FocusAttribute;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(66);
	var view_1 = __webpack_require__(63);
	var utils = __webpack_require__(39);
	var _events = ['change', 'keyup', 'input'];

	var ValueAttribute = function (_base_1$BaseAttribute) {
	    _inherits(ValueAttribute, _base_1$BaseAttribute);

	    function ValueAttribute() {
	        _classCallCheck(this, ValueAttribute);

	        return _possibleConstructorReturn(this, _base_1$BaseAttribute.apply(this, arguments));
	    }

	    ValueAttribute.prototype.initialize = function initialize() {
	        this._onInput = utils.bind(this._onInput, this, null);
	        for (var _iterator = _events, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;

	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }

	            var e = _ref;

	            this.ref.addEventListener(e, this._onInput);
	        }
	    };

	    ValueAttribute.prototype.update = function update() {
	        var model = this.model = this.value;
	        if (!model) return;
	        if (!model || !(model instanceof view_1.Reference)) {
	            throw new Error("input value must be a reference. Make sure you have <~> defined");
	        }
	        if (model.gettable) {
	            this._elementValue(this._parseValue(model.value()));
	        }
	    };

	    ValueAttribute.prototype._parseValue = function _parseValue(value) {
	        if (value == null || value === "") return void 0;
	        return value;
	    };

	    ValueAttribute.prototype._onInput = function _onInput(event) {
	        clearInterval(this._autocompleteCheckInterval);
	        // ignore some keys
	        if (event && (!event.keyCode || ! ~[27].indexOf(event.keyCode))) {
	            event.stopPropagation();
	        }
	        var value = this._parseValue(this._elementValue());
	        if (!this.model) return;
	        if (String(this.model.value()) == String(value)) return;
	        this.model.value(value);
	    };

	    ValueAttribute.prototype._elementValue = function _elementValue(value) {
	        var node = this.ref;
	        var isCheckbox = /checkbox/.test(node.type);
	        var isRadio = /radio/.test(node.type);
	        var isRadioOrCheckbox = isCheckbox || isRadio;
	        var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
	        var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
	        var isSelect = /select/i.test(node.nodeName);
	        if (!arguments.length) {
	            if (isCheckbox) {
	                return Boolean(node.checked);
	            } else if (isInput || isSelect) {
	                return node.value || "";
	            } else {
	                return node.innerHTML || "";
	            }
	        }
	        if (value == null) {
	            value = "";
	        } else {
	            clearInterval(this._autocompleteCheckInterval);
	        }
	        if (isRadioOrCheckbox) {
	            if (isRadio) {
	                if (String(value) === String(node.value)) {
	                    node.checked = true;
	                }
	            } else {
	                node.checked = value;
	            }
	        } else if (String(value) !== this._elementValue()) {
	            if (isInput || isSelect) {
	                node.value = value;
	            } else {
	                node.innerHTML = value;
	            }
	        }
	    };

	    return ValueAttribute;
	}(base_1.BaseAttribute);

	exports.ValueAttribute = ValueAttribute;

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseAttribute = function () {
	    function BaseAttribute(ref, key, value, view) {
	        _classCallCheck(this, BaseAttribute);

	        this.ref = ref;
	        this.key = key;
	        this.value = value;
	        this.view = view;
	        this.initialize();
	    }

	    BaseAttribute.prototype.initialize = function initialize() {};

	    BaseAttribute.prototype.update = function update() {};

	    BaseAttribute.prototype.destroy = function destroy() {};

	    BaseAttribute.test = function test() {};

	    return BaseAttribute;
	}();

	exports.BaseAttribute = BaseAttribute;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(66);
	var view_1 = __webpack_require__(63);
	var utils = __webpack_require__(39);
	var debug = utils.debug('attributes:event');

	var EventAttribute = function (_base_1$BaseAttribute) {
	    _inherits(EventAttribute, _base_1$BaseAttribute);

	    function EventAttribute() {
	        _classCallCheck(this, EventAttribute);

	        return _possibleConstructorReturn(this, _base_1$BaseAttribute.apply(this, arguments));
	    }

	    EventAttribute.prototype.initialize = function initialize() {
	        this._onEvent = utils.bind(this._onEvent, this);
	        //if (!this.event) this.event = this.key.match(/on(.+)/)[1].toLowerCase();
	        //debug('added event listener %s: %o', this.event, this.value)
	        //this.view.addListener(<Element>this.ref, this.event, this._onEvent)
	    };

	    EventAttribute.prototype._onEvent = function _onEvent(e) {
	        var self = this;
	        var fn = undefined;
	        if (this.value instanceof view_1.Assignment) {
	            fn = this.value.assign;
	        } else {
	            fn = this.value;
	        }
	        if (typeof fn !== 'function' && !(fn instanceof view_1.Call)) {
	            throw new Error('[event] value is not a function or a Callable');
	        }
	        debug('fired event: %s', this._event);
	        if (fn instanceof view_1.Call) {
	            fn.call();
	        } else if (typeof fn === 'function') {
	            return fn(e);
	        }
	        e.preventDefault();
	    };

	    EventAttribute.prototype.destroy = function destroy() {
	        debug('removed event listener %s: %o', this._event, this.value);
	        this.view.removeListener(this.ref, this._event, this._onEvent);
	    };

	    _createClass(EventAttribute, [{
	        key: 'event',
	        set: function set(event) {
	            if (this._event) {
	                debug('added event listener %s: %o', this._event, this.value);
	                this.view.removeListener(this.ref, this._event, this._onEvent);
	            }
	            this._event = event;
	            debug('added event listener %s: %o', this._event, this.value);
	            this.view.addListener(this.ref, this._event, this._onEvent);
	        },
	        get: function get() {
	            return this._event;
	        }
	    }]);

	    return EventAttribute;
	}(base_1.BaseAttribute);

	exports.EventAttribute = EventAttribute;

	var KeyCodeAttribute = function (_EventAttribute) {
	    _inherits(KeyCodeAttribute, _EventAttribute);

	    function KeyCodeAttribute(ref, key, value, view) {
	        _classCallCheck(this, KeyCodeAttribute);

	        var _this2 = _possibleConstructorReturn(this, _EventAttribute.call(this, ref, key, value, view));
	        //this.event = "keydown"
	        //this.keyCodes = []


	        _this2.keyCodes = [];
	        _this2.event = "keydown";
	        return _this2;
	    }

	    KeyCodeAttribute.prototype._onEvent = function _onEvent(event) {
	        if (! ~this.keyCodes.indexOf(event.keyCode)) {
	            return;
	        }
	        _EventAttribute.prototype._onEvent.call(this, event);
	    };

	    return KeyCodeAttribute;
	}(EventAttribute);

	exports.KeyCodeAttribute = KeyCodeAttribute;

	var ChangeAttribute = function (_EventAttribute2) {
	    _inherits(ChangeAttribute, _EventAttribute2);

	    function ChangeAttribute() {
	        _classCallCheck(this, ChangeAttribute);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this3 = _possibleConstructorReturn(this, _EventAttribute2.call.apply(_EventAttribute2, [this].concat(args)));

	        _this3.event = "change";
	        return _this3;
	    }

	    return ChangeAttribute;
	}(EventAttribute);

	exports.ChangeAttribute = ChangeAttribute;

	var ClickAttribute = function (_EventAttribute3) {
	    _inherits(ClickAttribute, _EventAttribute3);

	    function ClickAttribute() {
	        _classCallCheck(this, ClickAttribute);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        var _this4 = _possibleConstructorReturn(this, _EventAttribute3.call.apply(_EventAttribute3, [this].concat(args)));

	        _this4.event = "click";
	        return _this4;
	    }

	    return ClickAttribute;
	}(EventAttribute);

	exports.ClickAttribute = ClickAttribute;

	var ScrollAttribute = function (_EventAttribute4) {
	    _inherits(ScrollAttribute, _EventAttribute4);

	    function ScrollAttribute() {
	        _classCallCheck(this, ScrollAttribute);

	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	        }

	        var _this5 = _possibleConstructorReturn(this, _EventAttribute4.call.apply(_EventAttribute4, [this].concat(args)));

	        _this5.event = "scroll";
	        return _this5;
	    }

	    return ScrollAttribute;
	}(EventAttribute);

	exports.ScrollAttribute = ScrollAttribute;

	var OnFocusAttribute = function (_EventAttribute5) {
	    _inherits(OnFocusAttribute, _EventAttribute5);

	    function OnFocusAttribute() {
	        _classCallCheck(this, OnFocusAttribute);

	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            args[_key4] = arguments[_key4];
	        }

	        var _this6 = _possibleConstructorReturn(this, _EventAttribute5.call.apply(_EventAttribute5, [this].concat(args)));

	        _this6.event = "focus";
	        return _this6;
	    }

	    return OnFocusAttribute;
	}(EventAttribute);

	exports.OnFocusAttribute = OnFocusAttribute;

	var BlurAttribute = function (_EventAttribute6) {
	    _inherits(BlurAttribute, _EventAttribute6);

	    function BlurAttribute() {
	        _classCallCheck(this, BlurAttribute);

	        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	            args[_key5] = arguments[_key5];
	        }

	        var _this7 = _possibleConstructorReturn(this, _EventAttribute6.call.apply(_EventAttribute6, [this].concat(args)));

	        _this7.event = "blur";
	        return _this7;
	    }

	    return BlurAttribute;
	}(EventAttribute);

	exports.BlurAttribute = BlurAttribute;

	var OnEnterAttribute = function (_KeyCodeAttribute) {
	    _inherits(OnEnterAttribute, _KeyCodeAttribute);

	    function OnEnterAttribute() {
	        _classCallCheck(this, OnEnterAttribute);

	        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	            args[_key6] = arguments[_key6];
	        }

	        var _this8 = _possibleConstructorReturn(this, _KeyCodeAttribute.call.apply(_KeyCodeAttribute, [this].concat(args)));

	        _this8.keyCodes = [13];
	        return _this8;
	    }

	    return OnEnterAttribute;
	}(KeyCodeAttribute);

	exports.OnEnterAttribute = OnEnterAttribute;

	var OnEscapeAttribute = function (_KeyCodeAttribute2) {
	    _inherits(OnEscapeAttribute, _KeyCodeAttribute2);

	    function OnEscapeAttribute() {
	        _classCallCheck(this, OnEscapeAttribute);

	        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	            args[_key7] = arguments[_key7];
	        }

	        var _this9 = _possibleConstructorReturn(this, _KeyCodeAttribute2.call.apply(_KeyCodeAttribute2, [this].concat(args)));

	        _this9.KeyCodes = [27];
	        return _this9;
	    }

	    return OnEscapeAttribute;
	}(KeyCodeAttribute);

	exports.OnEscapeAttribute = OnEscapeAttribute;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(66);

	var StyleAttribute = function (_base_1$BaseAttribute) {
	    _inherits(StyleAttribute, _base_1$BaseAttribute);

	    function StyleAttribute() {
	        _classCallCheck(this, StyleAttribute);

	        return _possibleConstructorReturn(this, _base_1$BaseAttribute.apply(this, arguments));
	    }

	    StyleAttribute.prototype.initialize = function initialize() {
	        this._currentStyles = {};
	    };

	    StyleAttribute.prototype.update = function update() {
	        var styles = this.value;
	        if (typeof styles === "string") {
	            this.ref.setAttribute("style", styles);
	            return;
	        }
	        var newStyles = {};
	        for (var name in styles) {
	            var style = styles[name];
	            if (style !== this._currentStyles[name]) {
	                newStyles[name] = this._currentStyles[name] = style || "";
	            }
	        }
	        for (var key in newStyles) {
	            this.ref.style[key] = newStyles[key];
	        }
	    };

	    return StyleAttribute;
	}(base_1.BaseAttribute);

	exports.StyleAttribute = StyleAttribute;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(66);

	var FocusAttribute = function (_base_1$BaseAttribute) {
	    _inherits(FocusAttribute, _base_1$BaseAttribute);

	    function FocusAttribute() {
	        _classCallCheck(this, FocusAttribute);

	        return _possibleConstructorReturn(this, _base_1$BaseAttribute.apply(this, arguments));
	    }

	    FocusAttribute.prototype.initialize = function initialize() {};

	    FocusAttribute.prototype.update = function update() {
	        if (!this.value) return;
	        if (this.ref.focus) {
	            var self = this;
	            //if (!process.browser) return this.node.focus();
	            // focus after being on screen. Need to break out
	            // of animation, so setTimeout is the best option
	            setTimeout(function () {
	                self.ref.focus();
	            }, 1);
	        }
	    };

	    return FocusAttribute;
	}(base_1.BaseAttribute);

	exports.FocusAttribute = FocusAttribute;

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	function uppercase(value) {
	    return String(value).toUpperCase();
	}
	exports.uppercase = uppercase;
	function lowercase(value) {
	    return String(value).toLowerCase();
	}
	exports.lowercase = lowercase;
	function titlecase(value) {
	    var str;
	    str = String(value);
	    return str.substr(0, 1).toUpperCase() + str.substr(1);
	}
	exports.titlecase = titlecase;
	function json(value, count, delimiter) {
	    return JSON.stringify.apply(JSON, arguments);
	}
	exports.json = json;
	function isNaN(value) {
	    return isNaN(value);
	}
	exports.isNaN = isNaN;
	exports.round = Math.round;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var parser_1 = __webpack_require__(72);
	function compile(src, options) {
	    var str = transpile(src);
	    return new Function("return " + str)();
	}
	exports.compile = compile;
	function transpile(source) {
	    var transpiler = new Transpiler();
	    return transpiler.transpile(source);
	}
	exports.transpile = transpile;
	/**
	 * Transpile AST to Function
	 */

	var Transpiler = function () {
	    function Transpiler() {
	        _classCallCheck(this, Transpiler);

	        for (var k in this) {
	            if (k.charAt(0) === "_") {
	                this[k] = this[k].bind(this);
	            }
	        }
	        this.transpile = this.transpile.bind(this);
	    }
	    /**
	     */


	    Transpiler.prototype.transpile = function transpile(source) {
	        return this._root(parser_1.parser.parse(source));
	    };
	    /**
	     */


	    Transpiler.prototype._root = function _root(elements) {
	        var buffer = "(function(fragment, element, text, comment, dynamic, createBindingClass) {";
	        var fragment = "fragment([" + this._children(elements) + "])";
	        buffer += "'use strict';return " + fragment;
	        buffer += "})";
	        return buffer;
	    };
	    /**
	     */


	    Transpiler.prototype._expression = function _expression(expression) {
	        return this["_" + expression[0]](expression);
	    };
	    /**
	     * check for stuff like <li repeat.each={{items}}></li>
	     */


	    Transpiler.prototype._element = function _element(expression) {
	        var exprs = {};
	        var prev = expression;
	        var attrs = [];
	        expression[2].forEach(function (attr, i) {
	            var key = attr[1];
	            var value = attr[2];
	            var keyParts = key.split(".");
	            // check for things like <li repeat.each={{items}}></li>
	            if (keyParts.length > 1) {
	                if (!exprs[keyParts[0]]) {
	                    expression = exprs[keyParts[0]] = ["element", keyParts[0], [], [["element", expression[1], attrs, expression[3]]]];
	                }
	                exprs[keyParts[0]][2].push([attr[0], keyParts[1], value]);
	            } else {
	                attrs.push(attr);
	            }
	        });
	        return this._element2(expression);
	    };
	    /**
	     */


	    Transpiler.prototype._doctype = function _doctype(expression) {
	        return "text('<!DOCTYPE " + expression[1] + ">')";
	    };
	    /**
	     */


	    Transpiler.prototype._children = function _children(children) {
	        var items = [];
	        children = children.concat();
	        while (children.length) {
	            var child = children[children.length - 1];
	            if (child[0] !== "text") break;
	            child[1] = child[1].replace(/[\s\r\n\t]+$/, "");
	            if (/^[\s\r\n\t]*$/.test(child[1])) {
	                children.pop();
	            } else {
	                break;
	            }
	        }
	        return children.map(this._expression).join(", ");
	    };
	    /**
	     */


	    Transpiler.prototype._element2 = function _element2(expression) {
	        var buffer = "element('" + expression[1] + "'";
	        var dynamicAttributes = [];
	        buffer += ", {";
	        var attrs = [];
	        buffer += expression[2].map(function (attr) {
	            var key = attr[1];
	            var value = attr[2];
	            if (!value.length || value.length === 1 && value[0][0] === "string") {
	                return "'" + key + "':" + (value.length ? this._expression(value[0]) : "true");
	            } else {
	                dynamicAttributes.push(attr);
	            }
	        }.bind(this)).filter(function (str) {
	            return !!str;
	        }).join(",");
	        buffer += "}";
	        var childBuffer = this._children(expression[3]);
	        if (childBuffer.length) {
	            buffer += ", " + childBuffer;
	        }
	        buffer += ")";
	        if (dynamicAttributes.length) {
	            var dynamicAttrBuffer = "";
	            var staticAttrBuffer = "";
	            dynamicAttributes.forEach(function (expression) {
	                var type = expression[0];
	                // var key  = _dashToCamelCase(expression[1]);
	                dynamicAttrBuffer += "this";
	                if (type === "block") {
	                    dynamicAttrBuffer += ".ref.nodeValue = " + this._expression(expression[1]);
	                } else if (type === "attribute") {
	                    var value = expression[2].map(function (expr) {
	                        return "(" + this._expression(expr) + ")";
	                    }.bind(this)).join("+");
	                    dynamicAttrBuffer += ".setAttribute('" + expression[1] + "', " + value + ");";
	                } else if (type === "property") {
	                    // dynamicAttrBuffer += ".ref." + expression[1] + "=" + this._expression(expression[2]);
	                    dynamicAttrBuffer += ".setProperty('" + expression[1] + "', " + this._expression(expression[2]) + ");";
	                }
	            }.bind(this));
	            if (dynamicAttrBuffer.length) {
	                dynamicAttrBuffer = "function(context) {" + dynamicAttrBuffer + "}";
	            }
	            if (staticAttrBuffer.length) {
	                staticAttrBuffer = "function() { var self = this; " + staticAttrBuffer + "}";
	            }
	            if (dynamicAttrBuffer.length || staticAttrBuffer.length) {
	                buffer = "dynamic(" + buffer + ",";
	                buffer += "createBindingClass(" + (staticAttrBuffer.length ? staticAttrBuffer : "void 0") + ", " + (dynamicAttrBuffer ? dynamicAttrBuffer : "void 0") + ")";
	                buffer += ")";
	            }
	        }
	        return buffer;
	    };
	    /**
	     */


	    Transpiler.prototype.__addReference = function __addReference(expression) {
	        var name = "_" + ++this._refCounter;
	        this._refs[name] = expression;
	        return name;
	    };
	    /**
	     */


	    Transpiler.prototype._block = function _block(expression) {
	        // TODO - check for unbound expressions here
	        var buffer = "dynamic(text(), createBindingClass(void 0, function(context) {";
	        buffer += "this.ref.nodeValue = " + this._expression(expression[1]) + ";";
	        return buffer + "}))";
	    };
	    /**
	     */


	    Transpiler.prototype._text = function _text(expression) {
	        return "text('" + expression[1] + "')";
	    };
	    /**
	     */


	    Transpiler.prototype._comment = function _comment(expression) {
	        return "comment('" + expression[1] + "')";
	    };
	    /**
	     */


	    Transpiler.prototype._hash = function _hash(expression) {
	        var items = expression[1];
	        var buffer = [];
	        for (var key in items) {
	            buffer.push("'" + key + "':" + this._expression(items[key]));
	        }
	        return "{" + buffer.join(",") + "}";
	    };
	    /**
	     */


	    Transpiler.prototype._script = function _script(expression) {
	        return this._expression(expression[1]);
	    };
	    /**
	     */


	    Transpiler.prototype._referenceKeyPath = function _referenceKeyPath(expression) {
	        var keypath = [];
	        var isDynamic = false;
	        expression.forEach(function (part) {
	            if (typeof part !== "string") {
	                isDynamic = true;
	                // console.log(expression);
	                keypath.push(this._expression(part));
	            } else {
	                keypath.push(part);
	            }
	        }.bind(this));
	        keypath = isDynamic ? "[" + keypath.map(function (part, i) {
	            return typeof expression[i] === "string" ? "'" + part + "'" : part;
	        }).join(",") + "]" : "'" + keypath.join(".") + "'";
	        return keypath;
	    };
	    /**
	     */


	    Transpiler.prototype._reference = function _reference(expression) {
	        var keypath = this._referenceKeyPath(expression[1]);
	        if (expression[2]) {
	            var gettable = !! ~expression[2].indexOf("<~");
	            var settable = !! ~expression[2].indexOf("~>");
	            return "this.view.ref(" + keypath + ", " + gettable + ", " + settable + ")";
	        }
	        return "this.view.get(" + keypath + ")";
	    };
	    /**
	     */


	    Transpiler.prototype._string = function _string(expression) {
	        return "'" + expression[1] + "'";
	    };
	    /**
	     */


	    Transpiler.prototype._operator = function _operator(expression) {
	        return this._expression(expression[2]) + expression[1] + this._expression(expression[3]);
	    };
	    /**
	     */


	    Transpiler.prototype._condition = function _condition(expression) {
	        return this._expression(expression[1]) + "?" + this._expression(expression[2]) + ":" + this._expression(expression[3]);
	    };
	    /**
	     */


	    Transpiler.prototype._literal = function _literal(expression) {
	        return expression[1];
	    };
	    /**
	     */


	    Transpiler.prototype._not = function _not(expression) {
	        return "!" + this._expression(expression[1]);
	    };
	    /**
	     */


	    Transpiler.prototype._negative = function _negative(expression) {
	        return "-" + this._expression(expression[1]);
	    };
	    /**
	     */


	    Transpiler.prototype._call = function _call(expression) {
	        var buffer = "this.view.call(" + this._referenceKeyPath(expression[1][1]) + ", [";
	        buffer += expression[2].map(this._expression).join(",");
	        return buffer + "])";
	    };
	    /**
	     */


	    Transpiler.prototype._modifier = function _modifier(expression) {
	        return "this.options.modifiers." + expression[1] + "(" + expression[2].map(this._expression).join(",") + ")";
	    };

	    Transpiler.prototype._assign = function _assign(expression) {
	        return 'this.view.assign("' + expression[1][1] + '", ' + 'function () { return ' + this._expression(expression[2]) + ';})';
	    };
	    /**
	     */


	    Transpiler.prototype._group = function _group(expression) {
	        return "(" + this._expression(expression[1]) + ")";
	    };
	    /**
	     */


	    Transpiler.prototype.__findExpressions = function __findExpressions(type, expr) {
	        var exprs = [];
	        this.__traverse(expr, function (expr) {
	            if (expr[0] === type) exprs.push(expr);
	        });
	        return exprs;
	    };
	    /**
	     */


	    Transpiler.prototype.__traverse = function __traverse(expr, iterator) {
	        iterator(expr);
	        expr.forEach(function (v) {
	            if (v && (typeof v === "undefined" ? "undefined" : _typeof(v)) === "object") {
	                this.__traverse(v, iterator);
	            }
	        }.bind(this));
	    };

	    return Transpiler;
	}();
	/**
	 */


	function _dashToCamelCase(string) {
	    return string.split("-").map(function (part, i) {
	        var p = part.toLowerCase();
	        return i > 0 ? p.charAt(0).toUpperCase() + p.substr(1) : p;
	    }).join("");
	}
	/**
	 */

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";

	exports.parser = function () {
	    "use strict";
	    /*
	     * Generated by PEG.js 0.9.0.
	     *
	     * http://pegjs.org/
	     */

	    function peg$subclass(child, parent) {
	        function ctor() {
	            this.constructor = child;
	        }
	        ctor.prototype = parent.prototype;
	        child.prototype = new ctor();
	    }
	    function peg$SyntaxError(message, expected, found, location) {
	        this.message = message;
	        this.expected = expected;
	        this.found = found;
	        this.location = location;
	        this.name = "SyntaxError";
	        if (typeof Error.captureStackTrace === "function") {
	            Error.captureStackTrace(this, peg$SyntaxError);
	        }
	    }
	    peg$subclass(peg$SyntaxError, Error);
	    function peg$parse(input) {
	        var options = arguments.length > 1 ? arguments[1] : {},
	            parser = this,
	            peg$FAILED = {},
	            peg$startRuleFunctions = { Start: peg$parseStart },
	            peg$startRuleFunction = peg$parseStart,
	            peg$c0 = function peg$c0(children) {
	            return children;
	        },
	            peg$c1 = "<!DOCTYPE",
	            peg$c2 = { type: "literal", value: "<!DOCTYPE", description: "\"<!DOCTYPE\"" },
	            peg$c3 = /^[^>]/,
	            peg$c4 = { type: "class", value: "[^>]", description: "[^>]" },
	            peg$c5 = ">",
	            peg$c6 = { type: "literal", value: ">", description: "\">\"" },
	            peg$c7 = function peg$c7(info) {
	            return ["doctype", info.join("")];
	        },
	            peg$c8 = function peg$c8(children) {
	            return trimTextExpressions(children);
	        },
	            peg$c9 = "<!--",
	            peg$c10 = { type: "literal", value: "<!--", description: "\"<!--\"" },
	            peg$c11 = "-->",
	            peg$c12 = { type: "literal", value: "-->", description: "\"-->\"" },
	            peg$c13 = function peg$c13(v) {
	            return v;
	        },
	            peg$c14 = function peg$c14(value) {
	            return ["comment", escapeString(trimEnds(value.join("")))];
	        },
	            peg$c15 = "<script",
	            peg$c16 = { type: "literal", value: "<script", description: "\"<script\"" },
	            peg$c17 = "</script>",
	            peg$c18 = { type: "literal", value: "</script>", description: "\"</script>\"" },
	            peg$c19 = function peg$c19(attributes, content) {
	            return ["element", "script", attributes, [["text", escapeString(content.join(""))]]];
	        },
	            peg$c20 = function peg$c20() {
	            return text();
	        },
	            peg$c21 = "<",
	            peg$c22 = { type: "literal", value: "<", description: "\"<\"" },
	            peg$c23 = "area",
	            peg$c24 = { type: "literal", value: "area", description: "\"area\"" },
	            peg$c25 = "base",
	            peg$c26 = { type: "literal", value: "base", description: "\"base\"" },
	            peg$c27 = "br",
	            peg$c28 = { type: "literal", value: "br", description: "\"br\"" },
	            peg$c29 = "col",
	            peg$c30 = { type: "literal", value: "col", description: "\"col\"" },
	            peg$c31 = "command",
	            peg$c32 = { type: "literal", value: "command", description: "\"command\"" },
	            peg$c33 = "embed",
	            peg$c34 = { type: "literal", value: "embed", description: "\"embed\"" },
	            peg$c35 = "hr",
	            peg$c36 = { type: "literal", value: "hr", description: "\"hr\"" },
	            peg$c37 = "img",
	            peg$c38 = { type: "literal", value: "img", description: "\"img\"" },
	            peg$c39 = "input",
	            peg$c40 = { type: "literal", value: "input", description: "\"input\"" },
	            peg$c41 = "keygen",
	            peg$c42 = { type: "literal", value: "keygen", description: "\"keygen\"" },
	            peg$c43 = "link",
	            peg$c44 = { type: "literal", value: "link", description: "\"link\"" },
	            peg$c45 = "meta",
	            peg$c46 = { type: "literal", value: "meta", description: "\"meta\"" },
	            peg$c47 = "param",
	            peg$c48 = { type: "literal", value: "param", description: "\"param\"" },
	            peg$c49 = "source",
	            peg$c50 = { type: "literal", value: "source", description: "\"source\"" },
	            peg$c51 = "track",
	            peg$c52 = { type: "literal", value: "track", description: "\"track\"" },
	            peg$c53 = "wbr",
	            peg$c54 = { type: "literal", value: "wbr", description: "\"wbr\"" },
	            peg$c55 = "/>",
	            peg$c56 = { type: "literal", value: "/>", description: "\"/>\"" },
	            peg$c57 = function peg$c57(nodeName, attributes, endTag) {
	            if (endTag && nodeName != endTag.name) {
	                expected("</" + nodeName + ">");
	            }
	            return ["element", nodeName, attributes, []];
	        },
	            peg$c58 = "</",
	            peg$c59 = { type: "literal", value: "</", description: "\"</\"" },
	            peg$c60 = function peg$c60(name) {
	            return {
	                name: name
	            };
	        },
	            peg$c61 = function peg$c61(startTag, children, endTag) {
	            if (startTag.name != endTag.name) {
	                expected("</" + startTag.name + ">");
	            }
	            return ["element", startTag.name, startTag.attributes, children];
	        },
	            peg$c62 = function peg$c62(value) {
	            return ["text", escapeString(trimNewLineChars(value.join("")))];
	        },
	            peg$c63 = "{{",
	            peg$c64 = { type: "literal", value: "{{", description: "\"{{\"" },
	            peg$c65 = function peg$c65(info) {
	            return info;
	        },
	            peg$c66 = function peg$c66(info) {
	            return ["element", info.name, info.attributes, []];
	        },
	            peg$c67 = function peg$c67(name, attrs) {
	            return {
	                name: name,
	                attributes: attrs
	            };
	        },
	            peg$c68 = function peg$c68(attributes) {
	            return attributes;
	        },
	            peg$c69 = /^[a-zA-Z0-9:_.\-]/,
	            peg$c70 = { type: "class", value: "[a-zA-Z0-9:_\\.\\-]", description: "[a-zA-Z0-9:_\\.\\-]" },
	            peg$c71 = function peg$c71(word) {
	            return word.join("");
	        },
	            peg$c72 = "=",
	            peg$c73 = { type: "literal", value: "=", description: "\"=\"" },
	            peg$c74 = function peg$c74(name, values) {
	            return ["attribute", name, values];
	        },
	            peg$c75 = function peg$c75(name, property) {
	            return ["property", name, property];
	        },
	            peg$c76 = function peg$c76(name) {
	            return ['attribute', name, []];
	        },
	            peg$c77 = "\"",
	            peg$c78 = { type: "literal", value: "\"", description: "\"\\\"\"" },
	            peg$c79 = /^[^"]/,
	            peg$c80 = { type: "class", value: "[^\"]", description: "[^\"]" },
	            peg$c81 = function peg$c81() {
	            return ["string", text()];
	        },
	            peg$c82 = function peg$c82(values) {
	            return attrValues(values);
	        },
	            peg$c83 = "'",
	            peg$c84 = { type: "literal", value: "'", description: "\"'\"" },
	            peg$c85 = /^[^']/,
	            peg$c86 = { type: "class", value: "[^']", description: "[^']" },
	            peg$c87 = "}}",
	            peg$c88 = { type: "literal", value: "}}", description: "\"}}\"" },
	            peg$c89 = function peg$c89(value) {
	            return ["script", value];
	        },
	            peg$c90 = function peg$c90(script) {
	            return ["block", script[1]];
	        },
	            peg$c91 = "?",
	            peg$c92 = { type: "literal", value: "?", description: "\"?\"" },
	            peg$c93 = ":",
	            peg$c94 = { type: "literal", value: ":", description: "\":\"" },
	            peg$c95 = function peg$c95(condition, left, right) {
	            return ["condition", condition, left, right];
	        },
	            peg$c96 = "(",
	            peg$c97 = { type: "literal", value: "(", description: "\"(\"" },
	            peg$c98 = ")",
	            peg$c99 = { type: "literal", value: ")", description: "\")\"" },
	            peg$c100 = function peg$c100(params) {
	            return params;
	        },
	            peg$c101 = "()",
	            peg$c102 = { type: "literal", value: "()", description: "\"()\"" },
	            peg$c103 = function peg$c103() {
	            return [];
	        },
	            peg$c104 = ",",
	            peg$c105 = { type: "literal", value: ",", description: "\",\"" },
	            peg$c106 = function peg$c106(param1, rest) {
	            return [param1].concat(rest.map(function (v) {
	                return v[1];
	            }));
	        },
	            peg$c107 = function peg$c107(left, right) {
	            return ["assign", left, right];
	        },
	            peg$c108 = "&&",
	            peg$c109 = { type: "literal", value: "&&", description: "\"&&\"" },
	            peg$c110 = "||",
	            peg$c111 = { type: "literal", value: "||", description: "\"||\"" },
	            peg$c112 = "===",
	            peg$c113 = { type: "literal", value: "===", description: "\"===\"" },
	            peg$c114 = "==",
	            peg$c115 = { type: "literal", value: "==", description: "\"==\"" },
	            peg$c116 = "!==",
	            peg$c117 = { type: "literal", value: "!==", description: "\"!==\"" },
	            peg$c118 = "!=",
	            peg$c119 = { type: "literal", value: "!=", description: "\"!=\"" },
	            peg$c120 = ">==",
	            peg$c121 = { type: "literal", value: ">==", description: "\">==\"" },
	            peg$c122 = ">=",
	            peg$c123 = { type: "literal", value: ">=", description: "\">=\"" },
	            peg$c124 = "<==",
	            peg$c125 = { type: "literal", value: "<==", description: "\"<==\"" },
	            peg$c126 = "<=",
	            peg$c127 = { type: "literal", value: "<=", description: "\"<=\"" },
	            peg$c128 = "+",
	            peg$c129 = { type: "literal", value: "+", description: "\"+\"" },
	            peg$c130 = "-",
	            peg$c131 = { type: "literal", value: "-", description: "\"-\"" },
	            peg$c132 = "%",
	            peg$c133 = { type: "literal", value: "%", description: "\"%\"" },
	            peg$c134 = "*",
	            peg$c135 = { type: "literal", value: "*", description: "\"*\"" },
	            peg$c136 = "/",
	            peg$c137 = { type: "literal", value: "/", description: "\"/\"" },
	            peg$c138 = function peg$c138(left, operator, right) {
	            return ["operator", operator, left, right];
	        },
	            peg$c139 = function peg$c139(value) {
	            return value;
	        },
	            peg$c140 = function peg$c140(expression, modifiers) {
	            for (var i = 0, n = modifiers.length; i < n; i++) {
	                expression = ["modifier", modifiers[i].name, [expression].concat(modifiers[i].parameters)];
	            }
	            return expression;
	        },
	            peg$c141 = "|",
	            peg$c142 = { type: "literal", value: "|", description: "\"|\"" },
	            peg$c143 = function peg$c143(name, parameters) {
	            return {
	                name: name,
	                parameters: parameters || []
	            };
	        },
	            peg$c144 = function peg$c144(context) {
	            return context;
	        },
	            peg$c145 = "!",
	            peg$c146 = { type: "literal", value: "!", description: "\"!\"" },
	            peg$c147 = function peg$c147(not, value) {
	            return ["not", value];
	        },
	            peg$c148 = function peg$c148(not, value) {
	            return ["negative", value];
	        },
	            peg$c149 = /^[0-9]/,
	            peg$c150 = { type: "class", value: "[0-9]", description: "[0-9]" },
	            peg$c151 = function peg$c151(value) {
	            return ["literal", parseFloat(text())];
	        },
	            peg$c152 = ".",
	            peg$c153 = { type: "literal", value: ".", description: "\".\"" },
	            peg$c154 = function peg$c154(group) {
	            return ["group", group];
	        },
	            peg$c155 = function peg$c155(expression) {
	            return expression;
	        },
	            peg$c156 = "true",
	            peg$c157 = { type: "literal", value: "true", description: "\"true\"" },
	            peg$c158 = "false",
	            peg$c159 = { type: "literal", value: "false", description: "\"false\"" },
	            peg$c160 = function peg$c160(value) {
	            return ["literal", value === "true"];
	        },
	            peg$c161 = "undefined",
	            peg$c162 = { type: "literal", value: "undefined", description: "\"undefined\"" },
	            peg$c163 = function peg$c163() {
	            return ["literal", void 0];
	        },
	            peg$c164 = "NaN",
	            peg$c165 = { type: "literal", value: "NaN", description: "\"NaN\"" },
	            peg$c166 = function peg$c166() {
	            return ["literal", NaN];
	        },
	            peg$c167 = "Infinity",
	            peg$c168 = { type: "literal", value: "Infinity", description: "\"Infinity\"" },
	            peg$c169 = function peg$c169() {
	            return ["literal", Infinity];
	        },
	            peg$c170 = "null",
	            peg$c171 = { type: "literal", value: "null", description: "\"null\"" },
	            peg$c172 = "NULL",
	            peg$c173 = { type: "literal", value: "NULL", description: "\"NULL\"" },
	            peg$c174 = function peg$c174() {
	            return ["literal", null];
	        },
	            peg$c175 = function peg$c175(reference, parameters) {
	            return ["call", reference, parameters];
	        },
	            peg$c176 = "^",
	            peg$c177 = { type: "literal", value: "^", description: "\"^\"" },
	            peg$c178 = "~>",
	            peg$c179 = { type: "literal", value: "~>", description: "\"~>\"" },
	            peg$c180 = "<~>",
	            peg$c181 = { type: "literal", value: "<~>", description: "\"<~>\"" },
	            peg$c182 = "~",
	            peg$c183 = { type: "literal", value: "~", description: "\"~\"" },
	            peg$c184 = "<~",
	            peg$c185 = { type: "literal", value: "<~", description: "\"<~\"" },
	            peg$c186 = function peg$c186(bindingType, reference, path) {
	            return ["reference", [reference].concat(path), bindingType];
	        },
	            peg$c187 = function peg$c187(name) {
	            return name;
	        },
	            peg$c188 = "[",
	            peg$c189 = { type: "literal", value: "[", description: "\"[\"" },
	            peg$c190 = "]",
	            peg$c191 = { type: "literal", value: "]", description: "\"]\"" },
	            peg$c192 = function peg$c192(key) {
	            return key;
	        },
	            peg$c193 = /^[a-zA-Z_$0-9]/,
	            peg$c194 = { type: "class", value: "[a-zA-Z_$0-9]", description: "[a-zA-Z_$0-9]" },
	            peg$c195 = function peg$c195(name) {
	            return text();
	        },
	            peg$c196 = "{",
	            peg$c197 = { type: "literal", value: "{", description: "\"{\"" },
	            peg$c198 = "}",
	            peg$c199 = { type: "literal", value: "}", description: "\"}\"" },
	            peg$c200 = function peg$c200(values) {
	            return ["hash", values];
	        },
	            peg$c201 = function peg$c201(values) {
	            var s = {};
	            for (var i = 0, n = values.length; i < n; i++) {
	                s[values[i].key] = values[i].value;
	            }
	            return s;
	        },
	            peg$c202 = function peg$c202(firstValue, additionalValues) {
	            return [firstValue].concat(additionalValues.length ? additionalValues[0][1] : []);
	        },
	            peg$c203 = function peg$c203(key, value) {
	            return {
	                key: key,
	                value: value
	            };
	        },
	            peg$c204 = function peg$c204(key) {
	            return key[1];
	        },
	            peg$c205 = function peg$c205(key) {
	            return key;
	        },
	            peg$c206 = { type: "other", description: "string" },
	            peg$c207 = function peg$c207(chars) {
	            return ["string", chars.join("")];
	        },
	            peg$c208 = "\\",
	            peg$c209 = { type: "literal", value: "\\", description: "\"\\\\\"" },
	            peg$c210 = function peg$c210() {
	            return text();
	        },
	            peg$c211 = "\\\"",
	            peg$c212 = { type: "literal", value: "\\\"", description: "\"\\\\\\\"\"" },
	            peg$c213 = "\\'",
	            peg$c214 = { type: "literal", value: "\\'", description: "\"\\\\'\"" },
	            peg$c215 = { type: "any", description: "any character" },
	            peg$c216 = /^[a-zA-Z]/,
	            peg$c217 = { type: "class", value: "[a-zA-Z]", description: "[a-zA-Z]" },
	            peg$c218 = function peg$c218(chars) {
	            return chars.join("");
	        },
	            peg$c219 = /^[ \n\r\t]/,
	            peg$c220 = { type: "class", value: "[ \\n\\r\\t]", description: "[ \\n\\r\\t]" },
	            peg$currPos = 0,
	            peg$savedPos = 0,
	            peg$posDetailsCache = [{ line: 1, column: 1, seenCR: false }],
	            peg$maxFailPos = 0,
	            peg$maxFailExpected = [],
	            peg$silentFails = 0,
	            peg$result;
	        if ("startRule" in options) {
	            if (!(options.startRule in peg$startRuleFunctions)) {
	                throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	            }
	            peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	        }
	        function text() {
	            return input.substring(peg$savedPos, peg$currPos);
	        }
	        function location() {
	            return peg$computeLocation(peg$savedPos, peg$currPos);
	        }
	        function expected(description) {
	            throw peg$buildException(null, [{ type: "other", description: description }], input.substring(peg$savedPos, peg$currPos), peg$computeLocation(peg$savedPos, peg$currPos));
	        }
	        function error(message) {
	            throw peg$buildException(message, null, input.substring(peg$savedPos, peg$currPos), peg$computeLocation(peg$savedPos, peg$currPos));
	        }
	        function peg$computePosDetails(pos) {
	            var details = peg$posDetailsCache[pos],
	                p,
	                ch;
	            if (details) {
	                return details;
	            } else {
	                p = pos - 1;
	                while (!peg$posDetailsCache[p]) {
	                    p--;
	                }
	                details = peg$posDetailsCache[p];
	                details = {
	                    line: details.line,
	                    column: details.column,
	                    seenCR: details.seenCR
	                };
	                while (p < pos) {
	                    ch = input.charAt(p);
	                    if (ch === "\n") {
	                        if (!details.seenCR) {
	                            details.line++;
	                        }
	                        details.column = 1;
	                        details.seenCR = false;
	                    } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	                        details.line++;
	                        details.column = 1;
	                        details.seenCR = true;
	                    } else {
	                        details.column++;
	                        details.seenCR = false;
	                    }
	                    p++;
	                }
	                peg$posDetailsCache[pos] = details;
	                return details;
	            }
	        }
	        function peg$computeLocation(startPos, endPos) {
	            var startPosDetails = peg$computePosDetails(startPos),
	                endPosDetails = peg$computePosDetails(endPos);
	            return {
	                start: {
	                    offset: startPos,
	                    line: startPosDetails.line,
	                    column: startPosDetails.column
	                },
	                end: {
	                    offset: endPos,
	                    line: endPosDetails.line,
	                    column: endPosDetails.column
	                }
	            };
	        }
	        function peg$fail(expected) {
	            if (peg$currPos < peg$maxFailPos) {
	                return;
	            }
	            if (peg$currPos > peg$maxFailPos) {
	                peg$maxFailPos = peg$currPos;
	                peg$maxFailExpected = [];
	            }
	            peg$maxFailExpected.push(expected);
	        }
	        function peg$buildException(message, expected, found, location) {
	            function cleanupExpected(expected) {
	                var i = 1;
	                expected.sort(function (a, b) {
	                    if (a.description < b.description) {
	                        return -1;
	                    } else if (a.description > b.description) {
	                        return 1;
	                    } else {
	                        return 0;
	                    }
	                });
	                while (i < expected.length) {
	                    if (expected[i - 1] === expected[i]) {
	                        expected.splice(i, 1);
	                    } else {
	                        i++;
	                    }
	                }
	            }
	            function buildMessage(expected, found) {
	                function stringEscape(s) {
	                    function hex(ch) {
	                        return ch.charCodeAt(0).toString(16).toUpperCase();
	                    }
	                    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\x08/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ch) {
	                        return '\\x0' + hex(ch);
	                    }).replace(/[\x10-\x1F\x80-\xFF]/g, function (ch) {
	                        return '\\x' + hex(ch);
	                    }).replace(/[\u0100-\u0FFF]/g, function (ch) {
	                        return "\\u0" + hex(ch);
	                    }).replace(/[\u1000-\uFFFF]/g, function (ch) {
	                        return "\\u" + hex(ch);
	                    });
	                }
	                var expectedDescs = new Array(expected.length),
	                    expectedDesc,
	                    foundDesc,
	                    i;
	                for (i = 0; i < expected.length; i++) {
	                    expectedDescs[i] = expected[i].description;
	                }
	                expectedDesc = expected.length > 1 ? expectedDescs.slice(0, -1).join(", ") + " or " + expectedDescs[expected.length - 1] : expectedDescs[0];
	                foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";
	                return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	            }
	            if (expected !== null) {
	                cleanupExpected(expected);
	            }
	            return new peg$SyntaxError(message !== null ? message : buildMessage(expected, found), expected, found, location);
	        }
	        function peg$parseStart() {
	            var s0;
	            s0 = peg$parseTemplate();
	            return s0;
	        }
	        function peg$parseTemplate() {
	            var s0, s1;
	            s0 = peg$currPos;
	            s1 = peg$parseChildNodes();
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c0(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseDocType() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 9) === peg$c1) {
	                s1 = peg$c1;
	                peg$currPos += 9;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c2);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parse_();
	                if (s2 !== peg$FAILED) {
	                    s3 = [];
	                    if (peg$c3.test(input.charAt(peg$currPos))) {
	                        s4 = input.charAt(peg$currPos);
	                        peg$currPos++;
	                    } else {
	                        s4 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c4);
	                        }
	                    }
	                    if (s4 !== peg$FAILED) {
	                        while (s4 !== peg$FAILED) {
	                            s3.push(s4);
	                            if (peg$c3.test(input.charAt(peg$currPos))) {
	                                s4 = input.charAt(peg$currPos);
	                                peg$currPos++;
	                            } else {
	                                s4 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c4);
	                                }
	                            }
	                        }
	                    } else {
	                        s3 = peg$FAILED;
	                    }
	                    if (s3 !== peg$FAILED) {
	                        s4 = peg$parse_();
	                        if (s4 !== peg$FAILED) {
	                            if (input.charCodeAt(peg$currPos) === 62) {
	                                s5 = peg$c5;
	                                peg$currPos++;
	                            } else {
	                                s5 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c6);
	                                }
	                            }
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c7(s3);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseChildNodes() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = [];
	            s2 = peg$parseVoidElement();
	            if (s2 === peg$FAILED) {
	                s2 = peg$parseScriptStart();
	                if (s2 === peg$FAILED) {
	                    s2 = peg$parseElementNode();
	                    if (s2 === peg$FAILED) {
	                        s2 = peg$parseCommentNode();
	                        if (s2 === peg$FAILED) {
	                            s2 = peg$parseTextNode();
	                            if (s2 === peg$FAILED) {
	                                s2 = peg$parseBlockBinding();
	                            }
	                        }
	                    }
	                }
	            }
	            while (s2 !== peg$FAILED) {
	                s1.push(s2);
	                s2 = peg$parseVoidElement();
	                if (s2 === peg$FAILED) {
	                    s2 = peg$parseScriptStart();
	                    if (s2 === peg$FAILED) {
	                        s2 = peg$parseElementNode();
	                        if (s2 === peg$FAILED) {
	                            s2 = peg$parseCommentNode();
	                            if (s2 === peg$FAILED) {
	                                s2 = peg$parseTextNode();
	                                if (s2 === peg$FAILED) {
	                                    s2 = peg$parseBlockBinding();
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c8(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseCommentNode() {
	            var s0, s1, s2, s3, s4, s5, s6;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                if (input.substr(peg$currPos, 4) === peg$c9) {
	                    s2 = peg$c9;
	                    peg$currPos += 4;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c10);
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    s3 = [];
	                    s4 = peg$currPos;
	                    s5 = peg$currPos;
	                    peg$silentFails++;
	                    if (input.substr(peg$currPos, 3) === peg$c11) {
	                        s6 = peg$c11;
	                        peg$currPos += 3;
	                    } else {
	                        s6 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c12);
	                        }
	                    }
	                    peg$silentFails--;
	                    if (s6 === peg$FAILED) {
	                        s5 = void 0;
	                    } else {
	                        peg$currPos = s5;
	                        s5 = peg$FAILED;
	                    }
	                    if (s5 !== peg$FAILED) {
	                        s6 = peg$parseSourceCharacter();
	                        if (s6 !== peg$FAILED) {
	                            peg$savedPos = s4;
	                            s5 = peg$c13(s6);
	                            s4 = s5;
	                        } else {
	                            peg$currPos = s4;
	                            s4 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s4;
	                        s4 = peg$FAILED;
	                    }
	                    if (s4 !== peg$FAILED) {
	                        while (s4 !== peg$FAILED) {
	                            s3.push(s4);
	                            s4 = peg$currPos;
	                            s5 = peg$currPos;
	                            peg$silentFails++;
	                            if (input.substr(peg$currPos, 3) === peg$c11) {
	                                s6 = peg$c11;
	                                peg$currPos += 3;
	                            } else {
	                                s6 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c12);
	                                }
	                            }
	                            peg$silentFails--;
	                            if (s6 === peg$FAILED) {
	                                s5 = void 0;
	                            } else {
	                                peg$currPos = s5;
	                                s5 = peg$FAILED;
	                            }
	                            if (s5 !== peg$FAILED) {
	                                s6 = peg$parseSourceCharacter();
	                                if (s6 !== peg$FAILED) {
	                                    peg$savedPos = s4;
	                                    s5 = peg$c13(s6);
	                                    s4 = s5;
	                                } else {
	                                    peg$currPos = s4;
	                                    s4 = peg$FAILED;
	                                }
	                            } else {
	                                peg$currPos = s4;
	                                s4 = peg$FAILED;
	                            }
	                        }
	                    } else {
	                        s3 = peg$FAILED;
	                    }
	                    if (s3 !== peg$FAILED) {
	                        if (input.substr(peg$currPos, 3) === peg$c11) {
	                            s4 = peg$c11;
	                            peg$currPos += 3;
	                        } else {
	                            s4 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c12);
	                            }
	                        }
	                        if (s4 !== peg$FAILED) {
	                            s5 = peg$parse_();
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c14(s3);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$parseDocType();
	            }
	            return s0;
	        }
	        function peg$parseScriptStart() {
	            var s0, s1, s2, s3, s4, s5, s6, s7;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                if (input.substr(peg$currPos, 7) === peg$c15) {
	                    s2 = peg$c15;
	                    peg$currPos += 7;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c16);
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseTagAttributes();
	                    if (s3 !== peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 62) {
	                            s4 = peg$c5;
	                            peg$currPos++;
	                        } else {
	                            s4 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c6);
	                            }
	                        }
	                        if (s4 !== peg$FAILED) {
	                            s5 = [];
	                            s6 = peg$parseScriptEnd();
	                            if (s6 !== peg$FAILED) {
	                                while (s6 !== peg$FAILED) {
	                                    s5.push(s6);
	                                    s6 = peg$parseScriptEnd();
	                                }
	                            } else {
	                                s5 = peg$FAILED;
	                            }
	                            if (s5 !== peg$FAILED) {
	                                if (input.substr(peg$currPos, 9) === peg$c17) {
	                                    s6 = peg$c17;
	                                    peg$currPos += 9;
	                                } else {
	                                    s6 = peg$FAILED;
	                                    if (peg$silentFails === 0) {
	                                        peg$fail(peg$c18);
	                                    }
	                                }
	                                if (s6 !== peg$FAILED) {
	                                    s7 = peg$parse_();
	                                    if (s7 !== peg$FAILED) {
	                                        peg$savedPos = s0;
	                                        s1 = peg$c19(s3, s5);
	                                        s0 = s1;
	                                    } else {
	                                        peg$currPos = s0;
	                                        s0 = peg$FAILED;
	                                    }
	                                } else {
	                                    peg$currPos = s0;
	                                    s0 = peg$FAILED;
	                                }
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseScriptEnd() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = peg$currPos;
	            peg$silentFails++;
	            if (input.substr(peg$currPos, 9) === peg$c17) {
	                s2 = peg$c17;
	                peg$currPos += 9;
	            } else {
	                s2 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c18);
	                }
	            }
	            peg$silentFails--;
	            if (s2 === peg$FAILED) {
	                s1 = void 0;
	            } else {
	                peg$currPos = s1;
	                s1 = peg$FAILED;
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseSourceCharacter();
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c20();
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseVoidElement() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 60) {
	                s1 = peg$c21;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c22);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                if (input.substr(peg$currPos, 4) === peg$c23) {
	                    s2 = peg$c23;
	                    peg$currPos += 4;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c24);
	                    }
	                }
	                if (s2 === peg$FAILED) {
	                    if (input.substr(peg$currPos, 4) === peg$c25) {
	                        s2 = peg$c25;
	                        peg$currPos += 4;
	                    } else {
	                        s2 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c26);
	                        }
	                    }
	                    if (s2 === peg$FAILED) {
	                        if (input.substr(peg$currPos, 2) === peg$c27) {
	                            s2 = peg$c27;
	                            peg$currPos += 2;
	                        } else {
	                            s2 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c28);
	                            }
	                        }
	                        if (s2 === peg$FAILED) {
	                            if (input.substr(peg$currPos, 3) === peg$c29) {
	                                s2 = peg$c29;
	                                peg$currPos += 3;
	                            } else {
	                                s2 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c30);
	                                }
	                            }
	                            if (s2 === peg$FAILED) {
	                                if (input.substr(peg$currPos, 7) === peg$c31) {
	                                    s2 = peg$c31;
	                                    peg$currPos += 7;
	                                } else {
	                                    s2 = peg$FAILED;
	                                    if (peg$silentFails === 0) {
	                                        peg$fail(peg$c32);
	                                    }
	                                }
	                                if (s2 === peg$FAILED) {
	                                    if (input.substr(peg$currPos, 5) === peg$c33) {
	                                        s2 = peg$c33;
	                                        peg$currPos += 5;
	                                    } else {
	                                        s2 = peg$FAILED;
	                                        if (peg$silentFails === 0) {
	                                            peg$fail(peg$c34);
	                                        }
	                                    }
	                                    if (s2 === peg$FAILED) {
	                                        if (input.substr(peg$currPos, 2) === peg$c35) {
	                                            s2 = peg$c35;
	                                            peg$currPos += 2;
	                                        } else {
	                                            s2 = peg$FAILED;
	                                            if (peg$silentFails === 0) {
	                                                peg$fail(peg$c36);
	                                            }
	                                        }
	                                        if (s2 === peg$FAILED) {
	                                            if (input.substr(peg$currPos, 3) === peg$c37) {
	                                                s2 = peg$c37;
	                                                peg$currPos += 3;
	                                            } else {
	                                                s2 = peg$FAILED;
	                                                if (peg$silentFails === 0) {
	                                                    peg$fail(peg$c38);
	                                                }
	                                            }
	                                            if (s2 === peg$FAILED) {
	                                                if (input.substr(peg$currPos, 5) === peg$c39) {
	                                                    s2 = peg$c39;
	                                                    peg$currPos += 5;
	                                                } else {
	                                                    s2 = peg$FAILED;
	                                                    if (peg$silentFails === 0) {
	                                                        peg$fail(peg$c40);
	                                                    }
	                                                }
	                                                if (s2 === peg$FAILED) {
	                                                    if (input.substr(peg$currPos, 6) === peg$c41) {
	                                                        s2 = peg$c41;
	                                                        peg$currPos += 6;
	                                                    } else {
	                                                        s2 = peg$FAILED;
	                                                        if (peg$silentFails === 0) {
	                                                            peg$fail(peg$c42);
	                                                        }
	                                                    }
	                                                    if (s2 === peg$FAILED) {
	                                                        if (input.substr(peg$currPos, 4) === peg$c43) {
	                                                            s2 = peg$c43;
	                                                            peg$currPos += 4;
	                                                        } else {
	                                                            s2 = peg$FAILED;
	                                                            if (peg$silentFails === 0) {
	                                                                peg$fail(peg$c44);
	                                                            }
	                                                        }
	                                                        if (s2 === peg$FAILED) {
	                                                            if (input.substr(peg$currPos, 4) === peg$c45) {
	                                                                s2 = peg$c45;
	                                                                peg$currPos += 4;
	                                                            } else {
	                                                                s2 = peg$FAILED;
	                                                                if (peg$silentFails === 0) {
	                                                                    peg$fail(peg$c46);
	                                                                }
	                                                            }
	                                                            if (s2 === peg$FAILED) {
	                                                                if (input.substr(peg$currPos, 5) === peg$c47) {
	                                                                    s2 = peg$c47;
	                                                                    peg$currPos += 5;
	                                                                } else {
	                                                                    s2 = peg$FAILED;
	                                                                    if (peg$silentFails === 0) {
	                                                                        peg$fail(peg$c48);
	                                                                    }
	                                                                }
	                                                                if (s2 === peg$FAILED) {
	                                                                    if (input.substr(peg$currPos, 6) === peg$c49) {
	                                                                        s2 = peg$c49;
	                                                                        peg$currPos += 6;
	                                                                    } else {
	                                                                        s2 = peg$FAILED;
	                                                                        if (peg$silentFails === 0) {
	                                                                            peg$fail(peg$c50);
	                                                                        }
	                                                                    }
	                                                                    if (s2 === peg$FAILED) {
	                                                                        if (input.substr(peg$currPos, 5) === peg$c51) {
	                                                                            s2 = peg$c51;
	                                                                            peg$currPos += 5;
	                                                                        } else {
	                                                                            s2 = peg$FAILED;
	                                                                            if (peg$silentFails === 0) {
	                                                                                peg$fail(peg$c52);
	                                                                            }
	                                                                        }
	                                                                        if (s2 === peg$FAILED) {
	                                                                            if (input.substr(peg$currPos, 3) === peg$c53) {
	                                                                                s2 = peg$c53;
	                                                                                peg$currPos += 3;
	                                                                            } else {
	                                                                                s2 = peg$FAILED;
	                                                                                if (peg$silentFails === 0) {
	                                                                                    peg$fail(peg$c54);
	                                                                                }
	                                                                            }
	                                                                        }
	                                                                    }
	                                                                }
	                                                            }
	                                                        }
	                                                    }
	                                                }
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseTagAttributes();
	                    if (s3 !== peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 62) {
	                            s4 = peg$c5;
	                            peg$currPos++;
	                        } else {
	                            s4 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c6);
	                            }
	                        }
	                        if (s4 === peg$FAILED) {
	                            if (input.substr(peg$currPos, 2) === peg$c55) {
	                                s4 = peg$c55;
	                                peg$currPos += 2;
	                            } else {
	                                s4 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c56);
	                                }
	                            }
	                        }
	                        if (s4 === peg$FAILED) {
	                            s4 = null;
	                        }
	                        if (s4 !== peg$FAILED) {
	                            s5 = peg$parseEndVoidTag();
	                            if (s5 === peg$FAILED) {
	                                s5 = null;
	                            }
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c57(s2, s3, s5);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseEndVoidTag() {
	            var s0, s1, s2, s3, s4;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                if (input.substr(peg$currPos, 2) === peg$c58) {
	                    s2 = peg$c58;
	                    peg$currPos += 2;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c59);
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    if (input.substr(peg$currPos, 4) === peg$c23) {
	                        s3 = peg$c23;
	                        peg$currPos += 4;
	                    } else {
	                        s3 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c24);
	                        }
	                    }
	                    if (s3 === peg$FAILED) {
	                        if (input.substr(peg$currPos, 4) === peg$c25) {
	                            s3 = peg$c25;
	                            peg$currPos += 4;
	                        } else {
	                            s3 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c26);
	                            }
	                        }
	                        if (s3 === peg$FAILED) {
	                            if (input.substr(peg$currPos, 2) === peg$c27) {
	                                s3 = peg$c27;
	                                peg$currPos += 2;
	                            } else {
	                                s3 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c28);
	                                }
	                            }
	                            if (s3 === peg$FAILED) {
	                                if (input.substr(peg$currPos, 3) === peg$c29) {
	                                    s3 = peg$c29;
	                                    peg$currPos += 3;
	                                } else {
	                                    s3 = peg$FAILED;
	                                    if (peg$silentFails === 0) {
	                                        peg$fail(peg$c30);
	                                    }
	                                }
	                                if (s3 === peg$FAILED) {
	                                    if (input.substr(peg$currPos, 7) === peg$c31) {
	                                        s3 = peg$c31;
	                                        peg$currPos += 7;
	                                    } else {
	                                        s3 = peg$FAILED;
	                                        if (peg$silentFails === 0) {
	                                            peg$fail(peg$c32);
	                                        }
	                                    }
	                                    if (s3 === peg$FAILED) {
	                                        if (input.substr(peg$currPos, 5) === peg$c33) {
	                                            s3 = peg$c33;
	                                            peg$currPos += 5;
	                                        } else {
	                                            s3 = peg$FAILED;
	                                            if (peg$silentFails === 0) {
	                                                peg$fail(peg$c34);
	                                            }
	                                        }
	                                        if (s3 === peg$FAILED) {
	                                            if (input.substr(peg$currPos, 2) === peg$c35) {
	                                                s3 = peg$c35;
	                                                peg$currPos += 2;
	                                            } else {
	                                                s3 = peg$FAILED;
	                                                if (peg$silentFails === 0) {
	                                                    peg$fail(peg$c36);
	                                                }
	                                            }
	                                            if (s3 === peg$FAILED) {
	                                                if (input.substr(peg$currPos, 3) === peg$c37) {
	                                                    s3 = peg$c37;
	                                                    peg$currPos += 3;
	                                                } else {
	                                                    s3 = peg$FAILED;
	                                                    if (peg$silentFails === 0) {
	                                                        peg$fail(peg$c38);
	                                                    }
	                                                }
	                                                if (s3 === peg$FAILED) {
	                                                    if (input.substr(peg$currPos, 5) === peg$c39) {
	                                                        s3 = peg$c39;
	                                                        peg$currPos += 5;
	                                                    } else {
	                                                        s3 = peg$FAILED;
	                                                        if (peg$silentFails === 0) {
	                                                            peg$fail(peg$c40);
	                                                        }
	                                                    }
	                                                    if (s3 === peg$FAILED) {
	                                                        if (input.substr(peg$currPos, 6) === peg$c41) {
	                                                            s3 = peg$c41;
	                                                            peg$currPos += 6;
	                                                        } else {
	                                                            s3 = peg$FAILED;
	                                                            if (peg$silentFails === 0) {
	                                                                peg$fail(peg$c42);
	                                                            }
	                                                        }
	                                                        if (s3 === peg$FAILED) {
	                                                            if (input.substr(peg$currPos, 4) === peg$c43) {
	                                                                s3 = peg$c43;
	                                                                peg$currPos += 4;
	                                                            } else {
	                                                                s3 = peg$FAILED;
	                                                                if (peg$silentFails === 0) {
	                                                                    peg$fail(peg$c44);
	                                                                }
	                                                            }
	                                                            if (s3 === peg$FAILED) {
	                                                                if (input.substr(peg$currPos, 4) === peg$c45) {
	                                                                    s3 = peg$c45;
	                                                                    peg$currPos += 4;
	                                                                } else {
	                                                                    s3 = peg$FAILED;
	                                                                    if (peg$silentFails === 0) {
	                                                                        peg$fail(peg$c46);
	                                                                    }
	                                                                }
	                                                                if (s3 === peg$FAILED) {
	                                                                    if (input.substr(peg$currPos, 5) === peg$c47) {
	                                                                        s3 = peg$c47;
	                                                                        peg$currPos += 5;
	                                                                    } else {
	                                                                        s3 = peg$FAILED;
	                                                                        if (peg$silentFails === 0) {
	                                                                            peg$fail(peg$c48);
	                                                                        }
	                                                                    }
	                                                                    if (s3 === peg$FAILED) {
	                                                                        if (input.substr(peg$currPos, 6) === peg$c49) {
	                                                                            s3 = peg$c49;
	                                                                            peg$currPos += 6;
	                                                                        } else {
	                                                                            s3 = peg$FAILED;
	                                                                            if (peg$silentFails === 0) {
	                                                                                peg$fail(peg$c50);
	                                                                            }
	                                                                        }
	                                                                        if (s3 === peg$FAILED) {
	                                                                            if (input.substr(peg$currPos, 5) === peg$c51) {
	                                                                                s3 = peg$c51;
	                                                                                peg$currPos += 5;
	                                                                            } else {
	                                                                                s3 = peg$FAILED;
	                                                                                if (peg$silentFails === 0) {
	                                                                                    peg$fail(peg$c52);
	                                                                                }
	                                                                            }
	                                                                            if (s3 === peg$FAILED) {
	                                                                                if (input.substr(peg$currPos, 3) === peg$c53) {
	                                                                                    s3 = peg$c53;
	                                                                                    peg$currPos += 3;
	                                                                                } else {
	                                                                                    s3 = peg$FAILED;
	                                                                                    if (peg$silentFails === 0) {
	                                                                                        peg$fail(peg$c54);
	                                                                                    }
	                                                                                }
	                                                                            }
	                                                                        }
	                                                                    }
	                                                                }
	                                                            }
	                                                        }
	                                                    }
	                                                }
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                    if (s3 !== peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 62) {
	                            s4 = peg$c5;
	                            peg$currPos++;
	                        } else {
	                            s4 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c6);
	                            }
	                        }
	                        if (s4 !== peg$FAILED) {
	                            peg$savedPos = s0;
	                            s1 = peg$c60(s3);
	                            s0 = s1;
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseElementNode() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            s1 = peg$parseStartTag();
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseChildNodes();
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseEndTag();
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c61(s1, s2, s3);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$parseStartEndTag();
	            }
	            return s0;
	        }
	        function peg$parseTextNode() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = [];
	            s2 = peg$parseTextCharacter();
	            if (s2 !== peg$FAILED) {
	                while (s2 !== peg$FAILED) {
	                    s1.push(s2);
	                    s2 = peg$parseTextCharacter();
	                }
	            } else {
	                s1 = peg$FAILED;
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c62(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseTextCharacter() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = peg$currPos;
	            peg$silentFails++;
	            if (input.charCodeAt(peg$currPos) === 60) {
	                s2 = peg$c21;
	                peg$currPos++;
	            } else {
	                s2 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c22);
	                }
	            }
	            if (s2 === peg$FAILED) {
	                if (input.substr(peg$currPos, 2) === peg$c63) {
	                    s2 = peg$c63;
	                    peg$currPos += 2;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c64);
	                    }
	                }
	            }
	            peg$silentFails--;
	            if (s2 === peg$FAILED) {
	                s1 = void 0;
	            } else {
	                peg$currPos = s1;
	                s1 = peg$FAILED;
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseSourceCharacter();
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c20();
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseStartTag() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 60) {
	                    s2 = peg$c21;
	                    peg$currPos++;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c22);
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseTagInfo();
	                    if (s3 !== peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 62) {
	                            s4 = peg$c5;
	                            peg$currPos++;
	                        } else {
	                            s4 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c6);
	                            }
	                        }
	                        if (s4 !== peg$FAILED) {
	                            s5 = peg$parse_();
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c65(s3);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseStartEndTag() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 60) {
	                    s2 = peg$c21;
	                    peg$currPos++;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c22);
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseTagInfo();
	                    if (s3 !== peg$FAILED) {
	                        if (input.substr(peg$currPos, 2) === peg$c55) {
	                            s4 = peg$c55;
	                            peg$currPos += 2;
	                        } else {
	                            s4 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c56);
	                            }
	                        }
	                        if (s4 !== peg$FAILED) {
	                            s5 = peg$parse_();
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c66(s3);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseTagInfo() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = peg$parseTagName();
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseTagAttributes();
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c67(s1, s2);
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseTagAttributes() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                s2 = [];
	                s3 = peg$parseAttribute();
	                while (s3 !== peg$FAILED) {
	                    s2.push(s3);
	                    s3 = peg$parseAttribute();
	                }
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parse_();
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c68(s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseEndTag() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 2) === peg$c58) {
	                s1 = peg$c58;
	                peg$currPos += 2;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c59);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseTagName();
	                if (s2 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 62) {
	                        s3 = peg$c5;
	                        peg$currPos++;
	                    } else {
	                        s3 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c6);
	                        }
	                    }
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c60(s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseTagName() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                s2 = [];
	                if (peg$c69.test(input.charAt(peg$currPos))) {
	                    s3 = input.charAt(peg$currPos);
	                    peg$currPos++;
	                } else {
	                    s3 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c70);
	                    }
	                }
	                if (s3 !== peg$FAILED) {
	                    while (s3 !== peg$FAILED) {
	                        s2.push(s3);
	                        if (peg$c69.test(input.charAt(peg$currPos))) {
	                            s3 = input.charAt(peg$currPos);
	                            peg$currPos++;
	                        } else {
	                            s3 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c70);
	                            }
	                        }
	                    }
	                } else {
	                    s2 = peg$FAILED;
	                }
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c71(s2);
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseAttribute() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            s1 = peg$parseTagName();
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parse_();
	                if (s2 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 61) {
	                        s3 = peg$c72;
	                        peg$currPos++;
	                    } else {
	                        s3 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c73);
	                        }
	                    }
	                    if (s3 !== peg$FAILED) {
	                        s4 = peg$parse_();
	                        if (s4 !== peg$FAILED) {
	                            s5 = peg$parseAttributeValues();
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c74(s1, s5);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                s1 = peg$parseTagName();
	                if (s1 !== peg$FAILED) {
	                    s2 = peg$parse_();
	                    if (s2 !== peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 61) {
	                            s3 = peg$c72;
	                            peg$currPos++;
	                        } else {
	                            s3 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c73);
	                            }
	                        }
	                        if (s3 !== peg$FAILED) {
	                            s4 = peg$parse_();
	                            if (s4 !== peg$FAILED) {
	                                s5 = peg$parseTextBinding();
	                                if (s5 !== peg$FAILED) {
	                                    peg$savedPos = s0;
	                                    s1 = peg$c75(s1, s5);
	                                    s0 = s1;
	                                } else {
	                                    peg$currPos = s0;
	                                    s0 = peg$FAILED;
	                                }
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	                if (s0 === peg$FAILED) {
	                    s0 = peg$currPos;
	                    s1 = peg$parseTagName();
	                    if (s1 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c76(s1);
	                    }
	                    s0 = s1;
	                }
	            }
	            return s0;
	        }
	        function peg$parseAttributeValues() {
	            var s0, s1, s2, s3, s4, s5, s6, s7;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 34) {
	                s1 = peg$c77;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c78);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = [];
	                s3 = peg$parseTextBinding();
	                if (s3 === peg$FAILED) {
	                    s3 = peg$currPos;
	                    s4 = [];
	                    s5 = peg$currPos;
	                    s6 = peg$currPos;
	                    peg$silentFails++;
	                    if (input.substr(peg$currPos, 2) === peg$c63) {
	                        s7 = peg$c63;
	                        peg$currPos += 2;
	                    } else {
	                        s7 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c64);
	                        }
	                    }
	                    peg$silentFails--;
	                    if (s7 === peg$FAILED) {
	                        s6 = void 0;
	                    } else {
	                        peg$currPos = s6;
	                        s6 = peg$FAILED;
	                    }
	                    if (s6 !== peg$FAILED) {
	                        if (peg$c79.test(input.charAt(peg$currPos))) {
	                            s7 = input.charAt(peg$currPos);
	                            peg$currPos++;
	                        } else {
	                            s7 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c80);
	                            }
	                        }
	                        if (s7 !== peg$FAILED) {
	                            s6 = [s6, s7];
	                            s5 = s6;
	                        } else {
	                            peg$currPos = s5;
	                            s5 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s5;
	                        s5 = peg$FAILED;
	                    }
	                    if (s5 !== peg$FAILED) {
	                        while (s5 !== peg$FAILED) {
	                            s4.push(s5);
	                            s5 = peg$currPos;
	                            s6 = peg$currPos;
	                            peg$silentFails++;
	                            if (input.substr(peg$currPos, 2) === peg$c63) {
	                                s7 = peg$c63;
	                                peg$currPos += 2;
	                            } else {
	                                s7 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c64);
	                                }
	                            }
	                            peg$silentFails--;
	                            if (s7 === peg$FAILED) {
	                                s6 = void 0;
	                            } else {
	                                peg$currPos = s6;
	                                s6 = peg$FAILED;
	                            }
	                            if (s6 !== peg$FAILED) {
	                                if (peg$c79.test(input.charAt(peg$currPos))) {
	                                    s7 = input.charAt(peg$currPos);
	                                    peg$currPos++;
	                                } else {
	                                    s7 = peg$FAILED;
	                                    if (peg$silentFails === 0) {
	                                        peg$fail(peg$c80);
	                                    }
	                                }
	                                if (s7 !== peg$FAILED) {
	                                    s6 = [s6, s7];
	                                    s5 = s6;
	                                } else {
	                                    peg$currPos = s5;
	                                    s5 = peg$FAILED;
	                                }
	                            } else {
	                                peg$currPos = s5;
	                                s5 = peg$FAILED;
	                            }
	                        }
	                    } else {
	                        s4 = peg$FAILED;
	                    }
	                    if (s4 !== peg$FAILED) {
	                        peg$savedPos = s3;
	                        s4 = peg$c81();
	                    }
	                    s3 = s4;
	                }
	                while (s3 !== peg$FAILED) {
	                    s2.push(s3);
	                    s3 = peg$parseTextBinding();
	                    if (s3 === peg$FAILED) {
	                        s3 = peg$currPos;
	                        s4 = [];
	                        s5 = peg$currPos;
	                        s6 = peg$currPos;
	                        peg$silentFails++;
	                        if (input.substr(peg$currPos, 2) === peg$c63) {
	                            s7 = peg$c63;
	                            peg$currPos += 2;
	                        } else {
	                            s7 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c64);
	                            }
	                        }
	                        peg$silentFails--;
	                        if (s7 === peg$FAILED) {
	                            s6 = void 0;
	                        } else {
	                            peg$currPos = s6;
	                            s6 = peg$FAILED;
	                        }
	                        if (s6 !== peg$FAILED) {
	                            if (peg$c79.test(input.charAt(peg$currPos))) {
	                                s7 = input.charAt(peg$currPos);
	                                peg$currPos++;
	                            } else {
	                                s7 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c80);
	                                }
	                            }
	                            if (s7 !== peg$FAILED) {
	                                s6 = [s6, s7];
	                                s5 = s6;
	                            } else {
	                                peg$currPos = s5;
	                                s5 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s5;
	                            s5 = peg$FAILED;
	                        }
	                        if (s5 !== peg$FAILED) {
	                            while (s5 !== peg$FAILED) {
	                                s4.push(s5);
	                                s5 = peg$currPos;
	                                s6 = peg$currPos;
	                                peg$silentFails++;
	                                if (input.substr(peg$currPos, 2) === peg$c63) {
	                                    s7 = peg$c63;
	                                    peg$currPos += 2;
	                                } else {
	                                    s7 = peg$FAILED;
	                                    if (peg$silentFails === 0) {
	                                        peg$fail(peg$c64);
	                                    }
	                                }
	                                peg$silentFails--;
	                                if (s7 === peg$FAILED) {
	                                    s6 = void 0;
	                                } else {
	                                    peg$currPos = s6;
	                                    s6 = peg$FAILED;
	                                }
	                                if (s6 !== peg$FAILED) {
	                                    if (peg$c79.test(input.charAt(peg$currPos))) {
	                                        s7 = input.charAt(peg$currPos);
	                                        peg$currPos++;
	                                    } else {
	                                        s7 = peg$FAILED;
	                                        if (peg$silentFails === 0) {
	                                            peg$fail(peg$c80);
	                                        }
	                                    }
	                                    if (s7 !== peg$FAILED) {
	                                        s6 = [s6, s7];
	                                        s5 = s6;
	                                    } else {
	                                        peg$currPos = s5;
	                                        s5 = peg$FAILED;
	                                    }
	                                } else {
	                                    peg$currPos = s5;
	                                    s5 = peg$FAILED;
	                                }
	                            }
	                        } else {
	                            s4 = peg$FAILED;
	                        }
	                        if (s4 !== peg$FAILED) {
	                            peg$savedPos = s3;
	                            s4 = peg$c81();
	                        }
	                        s3 = s4;
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 34) {
	                        s3 = peg$c77;
	                        peg$currPos++;
	                    } else {
	                        s3 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c78);
	                        }
	                    }
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c82(s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                if (input.charCodeAt(peg$currPos) === 39) {
	                    s1 = peg$c83;
	                    peg$currPos++;
	                } else {
	                    s1 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c84);
	                    }
	                }
	                if (s1 !== peg$FAILED) {
	                    s2 = [];
	                    s3 = peg$parseTextBinding();
	                    if (s3 === peg$FAILED) {
	                        s3 = peg$currPos;
	                        s4 = [];
	                        s5 = peg$currPos;
	                        s6 = peg$currPos;
	                        peg$silentFails++;
	                        if (input.substr(peg$currPos, 2) === peg$c63) {
	                            s7 = peg$c63;
	                            peg$currPos += 2;
	                        } else {
	                            s7 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c64);
	                            }
	                        }
	                        peg$silentFails--;
	                        if (s7 === peg$FAILED) {
	                            s6 = void 0;
	                        } else {
	                            peg$currPos = s6;
	                            s6 = peg$FAILED;
	                        }
	                        if (s6 !== peg$FAILED) {
	                            if (peg$c85.test(input.charAt(peg$currPos))) {
	                                s7 = input.charAt(peg$currPos);
	                                peg$currPos++;
	                            } else {
	                                s7 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c86);
	                                }
	                            }
	                            if (s7 !== peg$FAILED) {
	                                s6 = [s6, s7];
	                                s5 = s6;
	                            } else {
	                                peg$currPos = s5;
	                                s5 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s5;
	                            s5 = peg$FAILED;
	                        }
	                        if (s5 !== peg$FAILED) {
	                            while (s5 !== peg$FAILED) {
	                                s4.push(s5);
	                                s5 = peg$currPos;
	                                s6 = peg$currPos;
	                                peg$silentFails++;
	                                if (input.substr(peg$currPos, 2) === peg$c63) {
	                                    s7 = peg$c63;
	                                    peg$currPos += 2;
	                                } else {
	                                    s7 = peg$FAILED;
	                                    if (peg$silentFails === 0) {
	                                        peg$fail(peg$c64);
	                                    }
	                                }
	                                peg$silentFails--;
	                                if (s7 === peg$FAILED) {
	                                    s6 = void 0;
	                                } else {
	                                    peg$currPos = s6;
	                                    s6 = peg$FAILED;
	                                }
	                                if (s6 !== peg$FAILED) {
	                                    if (peg$c85.test(input.charAt(peg$currPos))) {
	                                        s7 = input.charAt(peg$currPos);
	                                        peg$currPos++;
	                                    } else {
	                                        s7 = peg$FAILED;
	                                        if (peg$silentFails === 0) {
	                                            peg$fail(peg$c86);
	                                        }
	                                    }
	                                    if (s7 !== peg$FAILED) {
	                                        s6 = [s6, s7];
	                                        s5 = s6;
	                                    } else {
	                                        peg$currPos = s5;
	                                        s5 = peg$FAILED;
	                                    }
	                                } else {
	                                    peg$currPos = s5;
	                                    s5 = peg$FAILED;
	                                }
	                            }
	                        } else {
	                            s4 = peg$FAILED;
	                        }
	                        if (s4 !== peg$FAILED) {
	                            peg$savedPos = s3;
	                            s4 = peg$c81();
	                        }
	                        s3 = s4;
	                    }
	                    while (s3 !== peg$FAILED) {
	                        s2.push(s3);
	                        s3 = peg$parseTextBinding();
	                        if (s3 === peg$FAILED) {
	                            s3 = peg$currPos;
	                            s4 = [];
	                            s5 = peg$currPos;
	                            s6 = peg$currPos;
	                            peg$silentFails++;
	                            if (input.substr(peg$currPos, 2) === peg$c63) {
	                                s7 = peg$c63;
	                                peg$currPos += 2;
	                            } else {
	                                s7 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c64);
	                                }
	                            }
	                            peg$silentFails--;
	                            if (s7 === peg$FAILED) {
	                                s6 = void 0;
	                            } else {
	                                peg$currPos = s6;
	                                s6 = peg$FAILED;
	                            }
	                            if (s6 !== peg$FAILED) {
	                                if (peg$c85.test(input.charAt(peg$currPos))) {
	                                    s7 = input.charAt(peg$currPos);
	                                    peg$currPos++;
	                                } else {
	                                    s7 = peg$FAILED;
	                                    if (peg$silentFails === 0) {
	                                        peg$fail(peg$c86);
	                                    }
	                                }
	                                if (s7 !== peg$FAILED) {
	                                    s6 = [s6, s7];
	                                    s5 = s6;
	                                } else {
	                                    peg$currPos = s5;
	                                    s5 = peg$FAILED;
	                                }
	                            } else {
	                                peg$currPos = s5;
	                                s5 = peg$FAILED;
	                            }
	                            if (s5 !== peg$FAILED) {
	                                while (s5 !== peg$FAILED) {
	                                    s4.push(s5);
	                                    s5 = peg$currPos;
	                                    s6 = peg$currPos;
	                                    peg$silentFails++;
	                                    if (input.substr(peg$currPos, 2) === peg$c63) {
	                                        s7 = peg$c63;
	                                        peg$currPos += 2;
	                                    } else {
	                                        s7 = peg$FAILED;
	                                        if (peg$silentFails === 0) {
	                                            peg$fail(peg$c64);
	                                        }
	                                    }
	                                    peg$silentFails--;
	                                    if (s7 === peg$FAILED) {
	                                        s6 = void 0;
	                                    } else {
	                                        peg$currPos = s6;
	                                        s6 = peg$FAILED;
	                                    }
	                                    if (s6 !== peg$FAILED) {
	                                        if (peg$c85.test(input.charAt(peg$currPos))) {
	                                            s7 = input.charAt(peg$currPos);
	                                            peg$currPos++;
	                                        } else {
	                                            s7 = peg$FAILED;
	                                            if (peg$silentFails === 0) {
	                                                peg$fail(peg$c86);
	                                            }
	                                        }
	                                        if (s7 !== peg$FAILED) {
	                                            s6 = [s6, s7];
	                                            s5 = s6;
	                                        } else {
	                                            peg$currPos = s5;
	                                            s5 = peg$FAILED;
	                                        }
	                                    } else {
	                                        peg$currPos = s5;
	                                        s5 = peg$FAILED;
	                                    }
	                                }
	                            } else {
	                                s4 = peg$FAILED;
	                            }
	                            if (s4 !== peg$FAILED) {
	                                peg$savedPos = s3;
	                                s4 = peg$c81();
	                            }
	                            s3 = s4;
	                        }
	                    }
	                    if (s2 !== peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 39) {
	                            s3 = peg$c83;
	                            peg$currPos++;
	                        } else {
	                            s3 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c84);
	                            }
	                        }
	                        if (s3 !== peg$FAILED) {
	                            peg$savedPos = s0;
	                            s1 = peg$c82(s2);
	                            s0 = s1;
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            }
	            return s0;
	        }
	        function peg$parseTextBinding() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 2) === peg$c63) {
	                s1 = peg$c63;
	                peg$currPos += 2;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c64);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parse_();
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseTernaryConditional();
	                    if (s3 !== peg$FAILED) {
	                        s4 = peg$parse_();
	                        if (s4 !== peg$FAILED) {
	                            if (input.substr(peg$currPos, 2) === peg$c87) {
	                                s5 = peg$c87;
	                                peg$currPos += 2;
	                            } else {
	                                s5 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c88);
	                                }
	                            }
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c89(s3);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseBlockBinding() {
	            var s0, s1;
	            s0 = peg$currPos;
	            s1 = peg$parseTextBinding();
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c90(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseTernaryConditional() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            s1 = peg$parseAssignment();
	            if (s1 !== peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 63) {
	                    s2 = peg$c91;
	                    peg$currPos++;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c92);
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseTernaryConditional();
	                    if (s3 !== peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 58) {
	                            s4 = peg$c93;
	                            peg$currPos++;
	                        } else {
	                            s4 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c94);
	                            }
	                        }
	                        if (s4 !== peg$FAILED) {
	                            s5 = peg$parseTernaryConditional();
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c95(s1, s3, s5);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$parseAssignment();
	            }
	            return s0;
	        }
	        function peg$parseParameters() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 40) {
	                s1 = peg$c96;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c97);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseInnerParameters();
	                if (s2 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 41) {
	                        s3 = peg$c98;
	                        peg$currPos++;
	                    } else {
	                        s3 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c99);
	                        }
	                    }
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c100(s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                if (input.substr(peg$currPos, 2) === peg$c101) {
	                    s1 = peg$c101;
	                    peg$currPos += 2;
	                } else {
	                    s1 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c102);
	                    }
	                }
	                if (s1 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c103();
	                }
	                s0 = s1;
	            }
	            return s0;
	        }
	        function peg$parseInnerParameters() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            s1 = peg$parseTernaryConditional();
	            if (s1 !== peg$FAILED) {
	                s2 = [];
	                s3 = peg$currPos;
	                if (input.charCodeAt(peg$currPos) === 44) {
	                    s4 = peg$c104;
	                    peg$currPos++;
	                } else {
	                    s4 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c105);
	                    }
	                }
	                if (s4 !== peg$FAILED) {
	                    s5 = peg$parseTernaryConditional();
	                    if (s5 !== peg$FAILED) {
	                        s4 = [s4, s5];
	                        s3 = s4;
	                    } else {
	                        peg$currPos = s3;
	                        s3 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s3;
	                    s3 = peg$FAILED;
	                }
	                while (s3 !== peg$FAILED) {
	                    s2.push(s3);
	                    s3 = peg$currPos;
	                    if (input.charCodeAt(peg$currPos) === 44) {
	                        s4 = peg$c104;
	                        peg$currPos++;
	                    } else {
	                        s4 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c105);
	                        }
	                    }
	                    if (s4 !== peg$FAILED) {
	                        s5 = peg$parseTernaryConditional();
	                        if (s5 !== peg$FAILED) {
	                            s4 = [s4, s5];
	                            s3 = s4;
	                        } else {
	                            peg$currPos = s3;
	                            s3 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s3;
	                        s3 = peg$FAILED;
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c106(s1, s2);
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseAssignment() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            s1 = peg$parseObjectReference();
	            if (s1 !== peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 61) {
	                    s2 = peg$c72;
	                    peg$currPos++;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c73);
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseAssignment();
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c107(s1, s3);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$parseOperation();
	            }
	            return s0;
	        }
	        function peg$parseOperation() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            s1 = peg$parseOperatable();
	            if (s1 !== peg$FAILED) {
	                if (input.substr(peg$currPos, 2) === peg$c108) {
	                    s2 = peg$c108;
	                    peg$currPos += 2;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c109);
	                    }
	                }
	                if (s2 === peg$FAILED) {
	                    if (input.substr(peg$currPos, 2) === peg$c110) {
	                        s2 = peg$c110;
	                        peg$currPos += 2;
	                    } else {
	                        s2 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c111);
	                        }
	                    }
	                    if (s2 === peg$FAILED) {
	                        if (input.substr(peg$currPos, 3) === peg$c112) {
	                            s2 = peg$c112;
	                            peg$currPos += 3;
	                        } else {
	                            s2 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c113);
	                            }
	                        }
	                        if (s2 === peg$FAILED) {
	                            if (input.substr(peg$currPos, 2) === peg$c114) {
	                                s2 = peg$c114;
	                                peg$currPos += 2;
	                            } else {
	                                s2 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c115);
	                                }
	                            }
	                            if (s2 === peg$FAILED) {
	                                if (input.substr(peg$currPos, 3) === peg$c116) {
	                                    s2 = peg$c116;
	                                    peg$currPos += 3;
	                                } else {
	                                    s2 = peg$FAILED;
	                                    if (peg$silentFails === 0) {
	                                        peg$fail(peg$c117);
	                                    }
	                                }
	                                if (s2 === peg$FAILED) {
	                                    if (input.substr(peg$currPos, 2) === peg$c118) {
	                                        s2 = peg$c118;
	                                        peg$currPos += 2;
	                                    } else {
	                                        s2 = peg$FAILED;
	                                        if (peg$silentFails === 0) {
	                                            peg$fail(peg$c119);
	                                        }
	                                    }
	                                    if (s2 === peg$FAILED) {
	                                        if (input.substr(peg$currPos, 3) === peg$c120) {
	                                            s2 = peg$c120;
	                                            peg$currPos += 3;
	                                        } else {
	                                            s2 = peg$FAILED;
	                                            if (peg$silentFails === 0) {
	                                                peg$fail(peg$c121);
	                                            }
	                                        }
	                                        if (s2 === peg$FAILED) {
	                                            if (input.substr(peg$currPos, 2) === peg$c122) {
	                                                s2 = peg$c122;
	                                                peg$currPos += 2;
	                                            } else {
	                                                s2 = peg$FAILED;
	                                                if (peg$silentFails === 0) {
	                                                    peg$fail(peg$c123);
	                                                }
	                                            }
	                                            if (s2 === peg$FAILED) {
	                                                if (input.charCodeAt(peg$currPos) === 62) {
	                                                    s2 = peg$c5;
	                                                    peg$currPos++;
	                                                } else {
	                                                    s2 = peg$FAILED;
	                                                    if (peg$silentFails === 0) {
	                                                        peg$fail(peg$c6);
	                                                    }
	                                                }
	                                                if (s2 === peg$FAILED) {
	                                                    if (input.substr(peg$currPos, 3) === peg$c124) {
	                                                        s2 = peg$c124;
	                                                        peg$currPos += 3;
	                                                    } else {
	                                                        s2 = peg$FAILED;
	                                                        if (peg$silentFails === 0) {
	                                                            peg$fail(peg$c125);
	                                                        }
	                                                    }
	                                                    if (s2 === peg$FAILED) {
	                                                        if (input.substr(peg$currPos, 2) === peg$c126) {
	                                                            s2 = peg$c126;
	                                                            peg$currPos += 2;
	                                                        } else {
	                                                            s2 = peg$FAILED;
	                                                            if (peg$silentFails === 0) {
	                                                                peg$fail(peg$c127);
	                                                            }
	                                                        }
	                                                        if (s2 === peg$FAILED) {
	                                                            if (input.charCodeAt(peg$currPos) === 60) {
	                                                                s2 = peg$c21;
	                                                                peg$currPos++;
	                                                            } else {
	                                                                s2 = peg$FAILED;
	                                                                if (peg$silentFails === 0) {
	                                                                    peg$fail(peg$c22);
	                                                                }
	                                                            }
	                                                            if (s2 === peg$FAILED) {
	                                                                if (input.charCodeAt(peg$currPos) === 43) {
	                                                                    s2 = peg$c128;
	                                                                    peg$currPos++;
	                                                                } else {
	                                                                    s2 = peg$FAILED;
	                                                                    if (peg$silentFails === 0) {
	                                                                        peg$fail(peg$c129);
	                                                                    }
	                                                                }
	                                                                if (s2 === peg$FAILED) {
	                                                                    if (input.charCodeAt(peg$currPos) === 45) {
	                                                                        s2 = peg$c130;
	                                                                        peg$currPos++;
	                                                                    } else {
	                                                                        s2 = peg$FAILED;
	                                                                        if (peg$silentFails === 0) {
	                                                                            peg$fail(peg$c131);
	                                                                        }
	                                                                    }
	                                                                    if (s2 === peg$FAILED) {
	                                                                        if (input.charCodeAt(peg$currPos) === 37) {
	                                                                            s2 = peg$c132;
	                                                                            peg$currPos++;
	                                                                        } else {
	                                                                            s2 = peg$FAILED;
	                                                                            if (peg$silentFails === 0) {
	                                                                                peg$fail(peg$c133);
	                                                                            }
	                                                                        }
	                                                                        if (s2 === peg$FAILED) {
	                                                                            if (input.charCodeAt(peg$currPos) === 42) {
	                                                                                s2 = peg$c134;
	                                                                                peg$currPos++;
	                                                                            } else {
	                                                                                s2 = peg$FAILED;
	                                                                                if (peg$silentFails === 0) {
	                                                                                    peg$fail(peg$c135);
	                                                                                }
	                                                                            }
	                                                                            if (s2 === peg$FAILED) {
	                                                                                if (input.charCodeAt(peg$currPos) === 47) {
	                                                                                    s2 = peg$c136;
	                                                                                    peg$currPos++;
	                                                                                } else {
	                                                                                    s2 = peg$FAILED;
	                                                                                    if (peg$silentFails === 0) {
	                                                                                        peg$fail(peg$c137);
	                                                                                    }
	                                                                                }
	                                                                            }
	                                                                        }
	                                                                    }
	                                                                }
	                                                            }
	                                                        }
	                                                    }
	                                                }
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseOperation();
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c138(s1, s2, s3);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$parseOperatable();
	            }
	            return s0;
	        }
	        function peg$parseOperatable() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseModifiers();
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parse_();
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c139(s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseModifiers() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            s1 = peg$parseNot();
	            if (s1 !== peg$FAILED) {
	                s2 = [];
	                s3 = peg$parseModifier();
	                while (s3 !== peg$FAILED) {
	                    s2.push(s3);
	                    s3 = peg$parseModifier();
	                }
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c140(s1, s2);
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$parseFunctionCall();
	                if (s0 === peg$FAILED) {
	                    s0 = peg$parseObjectReference();
	                }
	            }
	            return s0;
	        }
	        function peg$parseModifier() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 124) {
	                s1 = peg$c141;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c142);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parse_();
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseReferenceName();
	                    if (s3 !== peg$FAILED) {
	                        s4 = peg$parseParameters();
	                        if (s4 === peg$FAILED) {
	                            s4 = null;
	                        }
	                        if (s4 !== peg$FAILED) {
	                            s5 = peg$parse_();
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c143(s3, s4);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseObjectReference() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseObject();
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parse_();
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c144(s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseNot() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 33) {
	                s1 = peg$c145;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c146);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseNot();
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c147(s1, s2);
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                if (input.charCodeAt(peg$currPos) === 33) {
	                    s1 = peg$c145;
	                    peg$currPos++;
	                } else {
	                    s1 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c146);
	                    }
	                }
	                if (s1 === peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 45) {
	                        s1 = peg$c130;
	                        peg$currPos++;
	                    } else {
	                        s1 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c131);
	                        }
	                    }
	                }
	                if (s1 !== peg$FAILED) {
	                    s2 = peg$parseNot();
	                    if (s2 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c148(s1, s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	                if (s0 === peg$FAILED) {
	                    s0 = peg$parseReserved();
	                    if (s0 === peg$FAILED) {
	                        s0 = peg$parseFunctionCall();
	                        if (s0 === peg$FAILED) {
	                            s0 = peg$parseObjectReference();
	                        }
	                    }
	                }
	            }
	            return s0;
	        }
	        function peg$parseObject() {
	            var s0;
	            s0 = peg$parseGroup();
	            if (s0 === peg$FAILED) {
	                s0 = peg$parseHash();
	                if (s0 === peg$FAILED) {
	                    s0 = peg$parseNumber();
	                    if (s0 === peg$FAILED) {
	                        s0 = peg$parseStringLiteral();
	                        if (s0 === peg$FAILED) {
	                            s0 = peg$parseReference();
	                        }
	                    }
	                }
	            }
	            return s0;
	        }
	        function peg$parseNumber() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            s1 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 45) {
	                s2 = peg$c130;
	                peg$currPos++;
	            } else {
	                s2 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c131);
	                }
	            }
	            if (s2 === peg$FAILED) {
	                s2 = null;
	            }
	            if (s2 !== peg$FAILED) {
	                s3 = peg$currPos;
	                s4 = [];
	                if (peg$c149.test(input.charAt(peg$currPos))) {
	                    s5 = input.charAt(peg$currPos);
	                    peg$currPos++;
	                } else {
	                    s5 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c150);
	                    }
	                }
	                if (s5 !== peg$FAILED) {
	                    while (s5 !== peg$FAILED) {
	                        s4.push(s5);
	                        if (peg$c149.test(input.charAt(peg$currPos))) {
	                            s5 = input.charAt(peg$currPos);
	                            peg$currPos++;
	                        } else {
	                            s5 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c150);
	                            }
	                        }
	                    }
	                } else {
	                    s4 = peg$FAILED;
	                }
	                if (s4 !== peg$FAILED) {
	                    s5 = peg$parseDecimalNumber();
	                    if (s5 === peg$FAILED) {
	                        s5 = null;
	                    }
	                    if (s5 !== peg$FAILED) {
	                        s4 = [s4, s5];
	                        s3 = s4;
	                    } else {
	                        peg$currPos = s3;
	                        s3 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s3;
	                    s3 = peg$FAILED;
	                }
	                if (s3 === peg$FAILED) {
	                    s3 = peg$parseDecimalNumber();
	                }
	                if (s3 !== peg$FAILED) {
	                    s2 = [s2, s3];
	                    s1 = s2;
	                } else {
	                    peg$currPos = s1;
	                    s1 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s1;
	                s1 = peg$FAILED;
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c151(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseDecimalNumber() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 46) {
	                s1 = peg$c152;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c153);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = [];
	                if (peg$c149.test(input.charAt(peg$currPos))) {
	                    s3 = input.charAt(peg$currPos);
	                    peg$currPos++;
	                } else {
	                    s3 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c150);
	                    }
	                }
	                if (s3 !== peg$FAILED) {
	                    while (s3 !== peg$FAILED) {
	                        s2.push(s3);
	                        if (peg$c149.test(input.charAt(peg$currPos))) {
	                            s3 = input.charAt(peg$currPos);
	                            peg$currPos++;
	                        } else {
	                            s3 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c150);
	                            }
	                        }
	                    }
	                } else {
	                    s2 = peg$FAILED;
	                }
	                if (s2 !== peg$FAILED) {
	                    s1 = [s1, s2];
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseGroup() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 40) {
	                s1 = peg$c96;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c97);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseTernaryConditional();
	                if (s2 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 41) {
	                        s3 = peg$c98;
	                        peg$currPos++;
	                    } else {
	                        s3 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c99);
	                        }
	                    }
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c154(s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseReserved() {
	            var s0, s1;
	            s0 = peg$currPos;
	            s1 = peg$parseBoolean();
	            if (s1 === peg$FAILED) {
	                s1 = peg$parseUndefined();
	                if (s1 === peg$FAILED) {
	                    s1 = peg$parseNull();
	                    if (s1 === peg$FAILED) {
	                        s1 = peg$parseNaN();
	                        if (s1 === peg$FAILED) {
	                            s1 = peg$parseInfinity();
	                        }
	                    }
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c155(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseBoolean() {
	            var s0, s1;
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 4) === peg$c156) {
	                s1 = peg$c156;
	                peg$currPos += 4;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c157);
	                }
	            }
	            if (s1 === peg$FAILED) {
	                if (input.substr(peg$currPos, 5) === peg$c158) {
	                    s1 = peg$c158;
	                    peg$currPos += 5;
	                } else {
	                    s1 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c159);
	                    }
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c160(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseUndefined() {
	            var s0, s1;
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 9) === peg$c161) {
	                s1 = peg$c161;
	                peg$currPos += 9;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c162);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c163();
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseNaN() {
	            var s0, s1;
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 3) === peg$c164) {
	                s1 = peg$c164;
	                peg$currPos += 3;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c165);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c166();
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseInfinity() {
	            var s0, s1;
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 8) === peg$c167) {
	                s1 = peg$c167;
	                peg$currPos += 8;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c168);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c169();
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseNull() {
	            var s0, s1;
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 4) === peg$c170) {
	                s1 = peg$c170;
	                peg$currPos += 4;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c171);
	                }
	            }
	            if (s1 === peg$FAILED) {
	                if (input.substr(peg$currPos, 4) === peg$c172) {
	                    s1 = peg$c172;
	                    peg$currPos += 4;
	                } else {
	                    s1 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c173);
	                    }
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c174();
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseFunctionCall() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = peg$parseObjectReference();
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseParameters();
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c175(s1, s2);
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseReference() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 94) {
	                s1 = peg$c176;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c177);
	                }
	            }
	            if (s1 === peg$FAILED) {
	                if (input.substr(peg$currPos, 2) === peg$c178) {
	                    s1 = peg$c178;
	                    peg$currPos += 2;
	                } else {
	                    s1 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c179);
	                    }
	                }
	                if (s1 === peg$FAILED) {
	                    if (input.substr(peg$currPos, 3) === peg$c180) {
	                        s1 = peg$c180;
	                        peg$currPos += 3;
	                    } else {
	                        s1 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c181);
	                        }
	                    }
	                    if (s1 === peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 126) {
	                            s1 = peg$c182;
	                            peg$currPos++;
	                        } else {
	                            s1 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c183);
	                            }
	                        }
	                        if (s1 === peg$FAILED) {
	                            if (input.substr(peg$currPos, 2) === peg$c184) {
	                                s1 = peg$c184;
	                                peg$currPos += 2;
	                            } else {
	                                s1 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c185);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	            if (s1 === peg$FAILED) {
	                s1 = null;
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parse_();
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseReferenceName();
	                    if (s3 !== peg$FAILED) {
	                        s4 = [];
	                        s5 = peg$parseReferencePart();
	                        while (s5 !== peg$FAILED) {
	                            s4.push(s5);
	                            s5 = peg$parseReferencePart();
	                        }
	                        if (s4 !== peg$FAILED) {
	                            s5 = peg$parse_();
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c186(s1, s3, s4);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseReferencePart() {
	            var s0;
	            s0 = peg$parseReferenceKeyPath();
	            if (s0 === peg$FAILED) {
	                s0 = peg$parseReferenceBrackPath();
	            }
	            return s0;
	        }
	        function peg$parseReferenceKeyPath() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 46) {
	                s1 = peg$c152;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c153);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseReferenceName();
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c187(s2);
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseReferenceBrackPath() {
	            var s0, s1, s2, s3;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 91) {
	                s1 = peg$c188;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c189);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseTernaryConditional();
	                if (s2 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 93) {
	                        s3 = peg$c190;
	                        peg$currPos++;
	                    } else {
	                        s3 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c191);
	                        }
	                    }
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c192(s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseReferenceName() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = [];
	            if (peg$c193.test(input.charAt(peg$currPos))) {
	                s2 = input.charAt(peg$currPos);
	                peg$currPos++;
	            } else {
	                s2 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c194);
	                }
	            }
	            if (s2 !== peg$FAILED) {
	                while (s2 !== peg$FAILED) {
	                    s1.push(s2);
	                    if (peg$c193.test(input.charAt(peg$currPos))) {
	                        s2 = input.charAt(peg$currPos);
	                        peg$currPos++;
	                    } else {
	                        s2 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c194);
	                        }
	                    }
	                }
	            } else {
	                s1 = peg$FAILED;
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c195(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseHash() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 123) {
	                s1 = peg$c196;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c197);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parse_();
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parseHashValues();
	                    if (s3 === peg$FAILED) {
	                        s3 = null;
	                    }
	                    if (s3 !== peg$FAILED) {
	                        s4 = peg$parse_();
	                        if (s4 !== peg$FAILED) {
	                            if (input.charCodeAt(peg$currPos) === 125) {
	                                s5 = peg$c198;
	                                peg$currPos++;
	                            } else {
	                                s5 = peg$FAILED;
	                                if (peg$silentFails === 0) {
	                                    peg$fail(peg$c199);
	                                }
	                            }
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c200(s3);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseHashValues() {
	            var s0, s1;
	            s0 = peg$currPos;
	            s1 = peg$parseHashValuesArray();
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c201(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parseHashValuesArray() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            s1 = peg$parseHashValue();
	            if (s1 !== peg$FAILED) {
	                s2 = [];
	                s3 = peg$currPos;
	                if (input.charCodeAt(peg$currPos) === 44) {
	                    s4 = peg$c104;
	                    peg$currPos++;
	                } else {
	                    s4 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c105);
	                    }
	                }
	                if (s4 !== peg$FAILED) {
	                    s5 = peg$parseHashValuesArray();
	                    if (s5 !== peg$FAILED) {
	                        s4 = [s4, s5];
	                        s3 = s4;
	                    } else {
	                        peg$currPos = s3;
	                        s3 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s3;
	                    s3 = peg$FAILED;
	                }
	                while (s3 !== peg$FAILED) {
	                    s2.push(s3);
	                    s3 = peg$currPos;
	                    if (input.charCodeAt(peg$currPos) === 44) {
	                        s4 = peg$c104;
	                        peg$currPos++;
	                    } else {
	                        s4 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c105);
	                        }
	                    }
	                    if (s4 !== peg$FAILED) {
	                        s5 = peg$parseHashValuesArray();
	                        if (s5 !== peg$FAILED) {
	                            s4 = [s4, s5];
	                            s3 = s4;
	                        } else {
	                            peg$currPos = s3;
	                            s3 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s3;
	                        s3 = peg$FAILED;
	                    }
	                }
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c202(s1, s2);
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseHashValue() {
	            var s0, s1, s2, s3, s4, s5;
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseHashKey();
	                if (s2 !== peg$FAILED) {
	                    s3 = peg$parse_();
	                    if (s3 !== peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 58) {
	                            s4 = peg$c93;
	                            peg$currPos++;
	                        } else {
	                            s4 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c94);
	                            }
	                        }
	                        if (s4 !== peg$FAILED) {
	                            s5 = peg$parseTernaryConditional();
	                            if (s5 === peg$FAILED) {
	                                s5 = null;
	                            }
	                            if (s5 !== peg$FAILED) {
	                                peg$savedPos = s0;
	                                s1 = peg$c203(s2, s5);
	                                s0 = s1;
	                            } else {
	                                peg$currPos = s0;
	                                s0 = peg$FAILED;
	                            }
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            return s0;
	        }
	        function peg$parseHashKey() {
	            var s0, s1;
	            s0 = peg$currPos;
	            s1 = peg$parseStringLiteral();
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c204(s1);
	            }
	            s0 = s1;
	            if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                s1 = peg$parseReferenceName();
	                if (s1 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c205(s1);
	                }
	                s0 = s1;
	            }
	            return s0;
	        }
	        function peg$parseStringLiteral() {
	            var s0, s1, s2, s3;
	            peg$silentFails++;
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 34) {
	                s1 = peg$c77;
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c78);
	                }
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = [];
	                s3 = peg$parseDoubleStringCharacter();
	                while (s3 !== peg$FAILED) {
	                    s2.push(s3);
	                    s3 = peg$parseDoubleStringCharacter();
	                }
	                if (s2 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 34) {
	                        s3 = peg$c77;
	                        peg$currPos++;
	                    } else {
	                        s3 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c78);
	                        }
	                    }
	                    if (s3 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c207(s2);
	                        s0 = s1;
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                if (input.charCodeAt(peg$currPos) === 39) {
	                    s1 = peg$c83;
	                    peg$currPos++;
	                } else {
	                    s1 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c84);
	                    }
	                }
	                if (s1 !== peg$FAILED) {
	                    s2 = [];
	                    s3 = peg$parseSingleStringCharacter();
	                    while (s3 !== peg$FAILED) {
	                        s2.push(s3);
	                        s3 = peg$parseSingleStringCharacter();
	                    }
	                    if (s2 !== peg$FAILED) {
	                        if (input.charCodeAt(peg$currPos) === 39) {
	                            s3 = peg$c83;
	                            peg$currPos++;
	                        } else {
	                            s3 = peg$FAILED;
	                            if (peg$silentFails === 0) {
	                                peg$fail(peg$c84);
	                            }
	                        }
	                        if (s3 !== peg$FAILED) {
	                            peg$savedPos = s0;
	                            s1 = peg$c207(s2);
	                            s0 = s1;
	                        } else {
	                            peg$currPos = s0;
	                            s0 = peg$FAILED;
	                        }
	                    } else {
	                        peg$currPos = s0;
	                        s0 = peg$FAILED;
	                    }
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            }
	            peg$silentFails--;
	            if (s0 === peg$FAILED) {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c206);
	                }
	            }
	            return s0;
	        }
	        function peg$parseDoubleStringCharacter() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = peg$currPos;
	            peg$silentFails++;
	            if (input.charCodeAt(peg$currPos) === 34) {
	                s2 = peg$c77;
	                peg$currPos++;
	            } else {
	                s2 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c78);
	                }
	            }
	            if (s2 === peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 92) {
	                    s2 = peg$c208;
	                    peg$currPos++;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c209);
	                    }
	                }
	            }
	            peg$silentFails--;
	            if (s2 === peg$FAILED) {
	                s1 = void 0;
	            } else {
	                peg$currPos = s1;
	                s1 = peg$FAILED;
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseSourceCharacter();
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c210();
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                if (input.substr(peg$currPos, 2) === peg$c211) {
	                    s0 = peg$c211;
	                    peg$currPos += 2;
	                } else {
	                    s0 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c212);
	                    }
	                }
	            }
	            return s0;
	        }
	        function peg$parseSingleStringCharacter() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = peg$currPos;
	            peg$silentFails++;
	            if (input.charCodeAt(peg$currPos) === 39) {
	                s2 = peg$c83;
	                peg$currPos++;
	            } else {
	                s2 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c84);
	                }
	            }
	            if (s2 === peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 92) {
	                    s2 = peg$c208;
	                    peg$currPos++;
	                } else {
	                    s2 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c209);
	                    }
	                }
	            }
	            peg$silentFails--;
	            if (s2 === peg$FAILED) {
	                s1 = void 0;
	            } else {
	                peg$currPos = s1;
	                s1 = peg$FAILED;
	            }
	            if (s1 !== peg$FAILED) {
	                s2 = peg$parseSourceCharacter();
	                if (s2 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c210();
	                    s0 = s1;
	                } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                }
	            } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	                if (input.substr(peg$currPos, 2) === peg$c213) {
	                    s0 = peg$c213;
	                    peg$currPos += 2;
	                } else {
	                    s0 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c214);
	                    }
	                }
	            }
	            return s0;
	        }
	        function peg$parseSourceCharacter() {
	            var s0;
	            if (input.length > peg$currPos) {
	                s0 = input.charAt(peg$currPos);
	                peg$currPos++;
	            } else {
	                s0 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c215);
	                }
	            }
	            return s0;
	        }
	        function peg$parseWord() {
	            var s0, s1, s2;
	            s0 = peg$currPos;
	            s1 = [];
	            if (peg$c216.test(input.charAt(peg$currPos))) {
	                s2 = input.charAt(peg$currPos);
	                peg$currPos++;
	            } else {
	                s2 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c217);
	                }
	            }
	            if (s2 !== peg$FAILED) {
	                while (s2 !== peg$FAILED) {
	                    s1.push(s2);
	                    if (peg$c216.test(input.charAt(peg$currPos))) {
	                        s2 = input.charAt(peg$currPos);
	                        peg$currPos++;
	                    } else {
	                        s2 = peg$FAILED;
	                        if (peg$silentFails === 0) {
	                            peg$fail(peg$c217);
	                        }
	                    }
	                }
	            } else {
	                s1 = peg$FAILED;
	            }
	            if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c218(s1);
	            }
	            s0 = s1;
	            return s0;
	        }
	        function peg$parse_() {
	            var s0, s1;
	            s0 = [];
	            if (peg$c219.test(input.charAt(peg$currPos))) {
	                s1 = input.charAt(peg$currPos);
	                peg$currPos++;
	            } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                    peg$fail(peg$c220);
	                }
	            }
	            while (s1 !== peg$FAILED) {
	                s0.push(s1);
	                if (peg$c219.test(input.charAt(peg$currPos))) {
	                    s1 = input.charAt(peg$currPos);
	                    peg$currPos++;
	                } else {
	                    s1 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                        peg$fail(peg$c220);
	                    }
	                }
	            }
	            return s0;
	        }
	        /*jshint laxcomma:false */
	        function trimWhitespace(ws) {
	            return trimNewLineChars(ws).replace(/(^[\r\n]+)|([\r\n]+$)/, " ");
	        }
	        function trimEnds(ws) {
	            return ws.replace(/(^\s+)|(\s+$)/, "").replace(/[\r\n]/g, "\\n");
	        }
	        function trimNewLineChars(ws) {
	            return ws.replace(/[ \r\n\t]+/g, " ");
	        }
	        function trimmedText() {
	            return trimWhitespace(text());
	        }
	        function attrValues(values) {
	            values = values.filter(function (v) {
	                return !/^[\n\t\r]+$/.test(v.value);
	            });
	            if (values.length === 1 && values[0].type === "string") {
	                return values[0];
	            } else {
	                return values;
	            }
	        }
	        function trimTextExpressions(expressions) {
	            function _trim(exprs) {
	                var expr;
	                for (var i = exprs.length; i--;) {
	                    expr = exprs[i];
	                    if (expr.type == "textNode" && !/\S/.test(expr.value) && !expr.decoded) {
	                        exprs.splice(i, 1);
	                    } else {
	                        break;
	                    }
	                }
	                return exprs;
	            }
	            return _trim(_trim(expressions.reverse()).reverse());
	        }
	        function expression(name) {
	            return Array.prototype.slice.call(arguments);
	        }
	        function escapeString(string) {
	            return string.replace(/[\n\r]+/g, "\\n").replace(/'/g, "\\'");
	        }
	        peg$result = peg$startRuleFunction();
	        if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	            return peg$result;
	        } else {
	            if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	                peg$fail({ type: "end", description: "end of input" });
	            }
	            throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
	        }
	    }
	    return {
	        SyntaxError: peg$SyntaxError,
	        parse: peg$parse
	    };
	}();

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var utils = __webpack_require__(39);

	var Binding = function () {
	    function Binding(ref, view) {
	        _classCallCheck(this, Binding);

	        this._attrBindings = {};
	        this.ref = ref;
	        this.view = view;
	        this.options = view.template.options;
	        this._attributeClasses = this.options.attributes;
	    }

	    Binding.prototype.setAttribute = function setAttribute(key, value) {
	        if (!this.setAsRegisteredAttribute(key, value)) {
	            if (value != void 0) {
	                this.ref.setAttribute(key, value);
	            } else {}
	        }
	    };

	    Binding.prototype.setProperty = function setProperty(key, value) {
	        if (!this.setAsRegisteredAttribute(key, value)) {
	            // no node type? It's a registered component.
	            if (!this.ref.nodeType) {
	                this.ref.setAttribute(key, value);
	            } else {
	                this.ref[key] = value;
	            }
	        }
	    };

	    Binding.prototype.setAsRegisteredAttribute = function setAsRegisteredAttribute(key, value) {
	        if (this._attrBindings[key]) {
	            this._attrBindings[key].value = value;
	        } else {
	            var attrClass = this._attributeClasses.get(key);
	            if (attrClass) {
	                this._attrBindings[key] = new attrClass(this.ref, key, value, this.view);
	            } else {
	                return false;
	            }
	        }
	        return true;
	    };

	    Binding.prototype.update = function update(context) {
	        this._update();
	        for (var key in this._attrBindings) {
	            this._attrBindings[key].update();
	        }
	    };

	    Binding.prototype.destroy = function destroy() {
	        for (var key in this._attrBindings) {
	            this._attrBindings[key].destroy();
	        }
	    };

	    return Binding;
	}();

	exports.Binding = Binding;
	function binding(initialize, update) {
	    return utils.extendClass(Binding, {
	        initialize: initialize || function () {},
	        _update: update || function () {}
	    });
	}
	exports.binding = binding;

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var rAF = window.requestAnimationFrame || window['webkitRequestAnimationFrame'] || window['mozRequestAnimationFrame'];
	var defaultTick = function defaultTick(next) {
	    if (!rAF) {
	        rAF(next);
	    } else {
	        setTimeout(next);
	    }
	};

	var RunLoop = function () {
	    function RunLoop() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        _classCallCheck(this, RunLoop);

	        if (!options) options = {};
	        this._animationQueue = [];
	        this.tick = options.tick || defaultTick;
	        this._id = options._id || 2;
	    }
	    /**
	    * child runloop in-case we get into recursive loops
	    */


	    RunLoop.prototype.child = function child() {
	        return this.__child || (this.__child = new RunLoop({ tick: this.tick, _id: this._id << 2 }));
	    };
	    /**
	     * Runs animatable object on requestAnimationFrame. This gets
	     * called whenever the UI state changes.
	     *
	     * @method animate
	     * @param {Object} animatable object. Must have `update()`
	     */


	    RunLoop.prototype.deferOnce = function deferOnce(context) {
	        var _this = this;

	        if (!context.__running) context.__running = 1;
	        if (context.__running & this._id) {
	            if (this._running) {
	                this.child().deferOnce(context);
	            }
	            return;
	        }
	        context.__running |= this._id;
	        // push on the animatable object
	        this._animationQueue.push(context);
	        // if animating, don't continue
	        if (this._requestingFrame) return;
	        this._requestingFrame = true;
	        // run the animation frame, and callback all the animatable objects
	        this.tick(function () {
	            _this.runNow();
	            _this._requestingFrame = false;
	        });
	    };
	    /**
	     */


	    RunLoop.prototype.runNow = function runNow() {
	        var queue = this._animationQueue;
	        this._animationQueue = [];
	        this._running = true;
	        // queue.length is important here, because animate() can be
	        // called again immediately after an update
	        for (var i = 0; i < queue.length; i++) {
	            var item = queue[i];
	            item.update();
	            item.__running &= ~this._id;
	            // check for anymore animations - need to run
	            // them in order
	            if (this._animationQueue.length) {
	                this.runNow();
	            }
	        }
	        this._running = false;
	    };

	    return RunLoop;
	}();

	exports.RunLoop = RunLoop;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	var utils = __webpack_require__(6);
	var eventsjs_1 = __webpack_require__(33);
	var errors_1 = __webpack_require__(30);
	var vnode_1 = __webpack_require__(34);
	var debug = __webpack_require__(23)('stick:factory:controller');
	var wrap = function wrap(el, name, contextName) {
	    var div = document.createElement('controller');
	    div.setAttribute('name', name);
	    if (contextName != name) div.setAttribute('as', contextName);
	    div.appendChild(el);
	    return div;
	};

	var ControllerFactory = function (_eventsjs_1$EventEmit) {
	    _inherits(ControllerFactory, _eventsjs_1$EventEmit);

	    function ControllerFactory(name, controller, container) {
	        _classCallCheck(this, ControllerFactory);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ControllerFactory).call(this));

	        _this.container = container;
	        _this.controller = controller;
	        _this.name = name;
	        _this._id = utils.uniqueId("ctrl");
	        if (typeof controller === 'function' && controller.name == "") {
	            try {
	                Object.defineProperty(controller, 'name', {
	                    value: name
	                });
	            } catch (e) {}
	        }
	        debug("%s: Controller factory created: '%s', container %s", _this.id, name, _this.container.id);
	        return _this;
	    }

	    _createClass(ControllerFactory, [{
	        key: 'create',

	        /**
	         * Create an instance of a controller
	         * @param  {ControllerCreateOptions} options
	         * @return {utils.IPromise<any>}
	         * Call onTemplateRender (), onElementAttached
	         * emits before:template:render, template:render, before:element:attached, element:attached
	         */
	        value: function create(options) {
	            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
	                var contextName, $state, template, controller, el;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!this.container.hasInstance(this.name)) {
	                                    _context.next = 2;
	                                    break;
	                                }

	                                return _context.abrupt('return', utils.Promise.resolve(this.container.get(this.name)));

	                            case 2:
	                                this.container.registerSingleton(this.name, this.controller);
	                                contextName = options.contextName || this.name;
	                                // State

	                                _context.next = 6;
	                                return this.container.get('$state');

	                            case 6:
	                                $state = _context.sent;

	                                $state = $state.createChild(this.container, options.state);
	                                this.container.registerInstance('$state', $state, true);
	                                // Template
	                                _context.next = 11;
	                                return this.resolveTemplate($state, options);

	                            case 11:
	                                template = _context.sent;

	                                debug("%s: Created template: %s", this.id, template.id);
	                                this.container.registerInstance('template', template, true);
	                                debug("%s: Instantiating controller '%s' as '%s'", this.id, this.name, contextName);
	                                _context.next = 17;
	                                return this.container.get(this.name);

	                            case 17:
	                                controller = _context.sent;

	                                $state.set(contextName, controller);
	                                template.setTarget(controller);
	                                this.trigger('before:template:render');
	                                el = template.render();
	                                // Wrap element if its a DocumentFragment

	                                if (el.nodeType === 11 || el.nodeType === 3) {
	                                    if (el.children.length === 1) {
	                                        el = el.firstChild.nodeType === 3 ? wrap(el, this.name, contextName) : el.firstChild;
	                                    } else {
	                                        el = wrap(el, this.name, contextName);
	                                    }
	                                }
	                                this.container.registerInstance('$el', el, true);
	                                if (typeof controller.onTemplateRender === 'function') {
	                                    controller.onTemplateRender.call(controller, el, template);
	                                }
	                                this.trigger('template:render');
	                                if (options.el) {
	                                    this.trigger('before:element:attached', options.el);
	                                    options.el.innerHTML = '';
	                                    options.el.appendChild(el);
	                                    if (typeof controller.onElementAttached === 'function') {
	                                        controller.onElementAttached.call(controller, el, options.el);
	                                    }
	                                    this.trigger('element:attached', el, options.el);
	                                }
	                                return _context.abrupt('return', controller);

	                            case 28:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: 'resolveTemplate',
	        value: function resolveTemplate(state, options) {
	            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee2() {
	                var $template, $resolver, promise, _templateString, view, templateString;

	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                _context2.next = 2;
	                                return this.container.get('$templateCreator');

	                            case 2:
	                                $template = _context2.sent;
	                                _context2.next = 5;
	                                return this.container.get('$templateResolver');

	                            case 5:
	                                $resolver = _context2.sent;
	                                promise = void 0;

	                                if (!(options.el && !options.template)) {
	                                    _context2.next = 12;
	                                    break;
	                                }

	                                _templateString = options.el.innerHTML;

	                                promise = utils.Promise.resolve(_templateString);
	                                _context2.next = 20;
	                                break;

	                            case 12:
	                                if (!options.template) {
	                                    _context2.next = 19;
	                                    break;
	                                }

	                                if (!(options.template instanceof vnode_1.Template)) {
	                                    _context2.next = 16;
	                                    break;
	                                }

	                                view = options.template.view(state, {
	                                    container: this.container,
	                                    parentView: options.parentView
	                                });
	                                return _context2.abrupt('return', view);

	                            case 16:
	                                promise = $resolver(options.template);
	                                _context2.next = 20;
	                                break;

	                            case 19:
	                                return _context2.abrupt('return', utils.Promise.reject(new errors_1.StickError("no element or template")));

	                            case 20:
	                                _context2.next = 22;
	                                return promise;

	                            case 22:
	                                templateString = _context2.sent;
	                                return _context2.abrupt('return', $template(templateString, state));

	                            case 24:
	                            case 'end':
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
	                var controller;
	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                debug("%s: Destroying controller '%s'", this.id, this.name);
	                                _context3.next = 3;
	                                return this.container.get(this.name);

	                            case 3:
	                                controller = _context3.sent;

	                                if (typeof controller.onDestroy === 'function') {
	                                    controller.onDestroy.call(controller);
	                                }
	                                this.container.clear();
	                                this.container.entries.clear();

	                            case 7:
	                            case 'end':
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this);
	            }));
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }
	    }]);

	    return ControllerFactory;
	}(eventsjs_1.EventEmitter);

	exports.ControllerFactory = ControllerFactory;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	var stick_di_1 = __webpack_require__(17);
	var errors_1 = __webpack_require__(30);
	var repository_1 = __webpack_require__(31);
	var internal_1 = __webpack_require__(5);
	var utils = __webpack_require__(6);
	var controller_factory_1 = __webpack_require__(75);
	__export(__webpack_require__(17));
	function tryCatch(fn, ctx, args) {
	    var result = void 0,
	        error = void 0;
	    try {
	        result = utils.callFunc(fn, ctx, args);
	    } catch (e) {
	        error = e;
	    }
	    return [result, error];
	}
	exports.tryCatch = tryCatch;
	// TODO: Handle instances in unregister

	var Container = function (_stick_di_1$DIContain) {
	    _inherits(Container, _stick_di_1$DIContain);

	    function Container(info) {
	        _classCallCheck(this, Container);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Container).call(this, info));

	        _this.__instances = new Map();
	        return _this;
	    }

	    _createClass(Container, [{
	        key: 'hasInstance',
	        value: function hasInstance(key) {
	            return this.__instances.has(key);
	        }
	    }, {
	        key: 'hasHandler',
	        value: function hasHandler(name, parent, repository) {
	            var has = _get(Object.getPrototypeOf(Container.prototype), 'hasHandler', this).call(this, name, parent);
	            return !has && repository ? repository_1.Repository.hasAny(name) : has;
	        }
	    }, {
	        key: 'get',
	        value: function get(key, targetKey) {
	            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
	                var entry;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!(key === null || key === undefined)) {
	                                    _context.next = 2;
	                                    break;
	                                }

	                                throw new stick_di_1.DIBadKeyError();

	                            case 2:
	                                if (!(key === stick_di_1.DIContainer)) {
	                                    _context.next = 4;
	                                    break;
	                                }

	                                return _context.abrupt('return', this);

	                            case 4:
	                                if (!(key instanceof stick_di_1.Resolver)) {
	                                    _context.next = 6;
	                                    break;
	                                }

	                                return _context.abrupt('return', key.get(this));

	                            case 6:
	                                entry = this.entries.get(key);

	                                if (!(entry !== undefined)) {
	                                    _context.next = 9;
	                                    break;
	                                }

	                                return _context.abrupt('return', entry[0](this));

	                            case 9:
	                                if (!(this.parent && this.parent.hasHandler(key))) {
	                                    _context.next = 11;
	                                    break;
	                                }

	                                return _context.abrupt('return', this.parent.get(key, targetKey));

	                            case 11:
	                                entry = repository_1.Repository.any(key);

	                                if (!(entry != null)) {
	                                    _context.next = 15;
	                                    break;
	                                }

	                                this.register(entry);
	                                return _context.abrupt('return', this.entries.get(key)[0](this));

	                            case 15:
	                                if (!(typeof key === 'string')) {
	                                    _context.next = 17;
	                                    break;
	                                }

	                                throw new errors_1.StickDependencyError('no component registered for key: ' + key);

	                            case 17:
	                                this.autoRegister(key, targetKey);
	                                entry = this.entries.get(key);
	                                return _context.abrupt('return', entry[0](this));

	                            case 20:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: 'registerSingleton',
	        value: function registerSingleton(key, fn) {
	            var _this2 = this;

	            var targetKey = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

	            return this.registerHandler(key, function (x) {
	                if (_this2.__instances.has(key)) {
	                    return _this2.__instances.get(key);
	                } else {
	                    var singleton = _this2.invoke(fn, null, targetKey);
	                    if (utils.isPromise(singleton)) {}
	                    _this2.__instances.set(key, singleton);
	                    return singleton;
	                }
	            });
	        }
	    }, {
	        key: 'registerService',
	        value: function registerService(key, fn) {
	            var _this3 = this;

	            var targetKey = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

	            var name = void 0;
	            if (typeof key === 'string') {
	                name = key;
	            } else {
	                name = key.name;
	            }
	            var configKey = name + 'Provider';
	            var Config = stick_di_1.Metadata.getOwn(internal_1.DIServiceConfig, fn, targetKey);
	            if (Config != null) {
	                if (this.hasHandler(configKey, false, false)) {
	                    throw new Error('Provider for \'' + name + '\' already defined');
	                }
	                var config = new Config();
	                this.registerInstance(configKey, config);
	            }
	            return this.registerHandler(key, function (x) {
	                if (_this3.__instances.has(key)) {
	                    return _this3.__instances.get(key);
	                } else {
	                    var singleton = _this3.invoke(fn, null, targetKey);
	                    _this3.__instances.set(key, singleton);
	                    _this3.unregister(configKey);
	                    return singleton;
	                }
	            });
	        }
	    }, {
	        key: 'registerInstance',
	        value: function registerInstance(key, instance) {
	            var track = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	            _get(Object.getPrototypeOf(Container.prototype), 'registerInstance', this).call(this, key, instance);
	            if (track) {
	                this.__instances.set(key, instance);
	            }
	        }
	    }, {
	        key: 'invoke',
	        value: function invoke(fn, deps, targetKey) {
	            var info = this._getOrCreateConstructionSet(fn, targetKey);
	            try {
	                var keys, args;
	                if (info.dependencyResolver) {
	                    args = info.dependencyResolver.resolveDependencies(fn);
	                } else {
	                    args = this.resolveDependencies(fn, targetKey);
	                }
	                if (deps !== undefined && Array.isArray(deps)) {
	                    args = args.concat(deps);
	                }
	                return utils.arrayToPromise(args).then(function (args) {
	                    return info.activator.invoke(fn, args, targetKey, keys);
	                });
	            } catch (e) {
	                var activatingText = info.activator instanceof stick_di_1.ClassActivator ? 'instantiating' : 'invoking';
	                var message = 'Error ' + activatingText + ' ' + fn.name + '.';
	                message += ' Check the inner error for details.';
	                throw new errors_1.StickDependencyError(message, [e]);
	            }
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            var keys = this.__instances.keys();
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var key = _step.value;

	                    this.destroy(key);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var key = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	            var fn = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	            if (key == null) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = this.__instances.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var _key = _step2.value;

	                        this.destroy(_key, fn);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                delete this.constructionInfo;
	                this.constructionInfo = new Map();
	                //this.entries
	                return;
	            }
	            var instance = this.__instances.get(key);
	            if (instance) {
	                if (fn) {
	                    fn(instance);
	                } else if (typeof instance.$destroy === 'function') {
	                    instance.$destroy();
	                }
	                this.__instances.delete(key);
	                instance = void 0;
	            } else {
	                console.log('could not find key ', key);
	            }
	        }
	    }, {
	        key: 'register',
	        value: function register(item) {
	            switch (item.type) {
	                case internal_1.DependencyType.Controller:
	                    var factory = new controller_factory_1.ControllerFactory(item.name, item.handler, this.createChild());
	                    this.registerInstance(item.name, factory, true);
	                    break;
	                case internal_1.DependencyType.Service:
	                    this.registerService(item.name, item.handler);
	                    break;
	                case internal_1.DependencyType.Factory:
	                    if (typeof item.handler === 'function') {
	                        internal_1.setActivator(item.handler, stick_di_1.FactoryActivator.instance);
	                        this.registerSingleton(item.name, item.handler);
	                    } else {
	                        this.registerInstance(item.name, item.handler);
	                    }
	                    break;
	            }
	        }
	    }, {
	        key: 'createChild',
	        value: function createChild() {
	            var child = new Container();
	            child.parent = this;
	            return child;
	        }
	    }]);

	    return Container;
	}(stick_di_1.DIContainer);

	exports.Container = Container;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var utilities_1 = __webpack_require__(6);
	var vnode_1 = __webpack_require__(34);
	var eventsjs_1 = __webpack_require__(33);

	var BaseComponent = function (_eventsjs_1$EventEmit) {
	    _inherits(BaseComponent, _eventsjs_1$EventEmit);

	    function BaseComponent(section, vvnode, attributes, view) {
	        _classCallCheck(this, BaseComponent);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BaseComponent).call(this));

	        if (_this.update) {
	            _this.update = utilities_1.bind(_this.update, _this);
	        }
	        _this.section = section;
	        _this.vnode = vvnode;
	        _this.attributes = attributes;
	        _this.view = view;
	        _this.document = view.template.options.document;
	        if (vvnode.childNodes) _this.childTemplate = vnode_1.template(vnode_1.fragment(vvnode.childNodes), view.template.options);
	        for (var key in attributes) {
	            _this.setAttribute(key, attributes[key]);
	        }var container = _this.view.container;
	        _this.initialize.call(_this, container);
	        return _this;
	    }

	    _createClass(BaseComponent, [{
	        key: 'initialize',
	        value: function initialize(container) {}
	    }, {
	        key: 'setAttribute',
	        value: function setAttribute(key, value) {
	            this.attributes[key] = value;
	        }
	    }, {
	        key: 'removeAttribute',
	        value: function removeAttribute(key) {
	            this.attributes[key] = void 0;
	        }
	    }, {
	        key: 'getAttribute',
	        value: function getAttribute(key) {
	            return this.attributes[key];
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var a = this;
	            if (typeof a.onDestroy === 'function') {
	                a.onDestroy();
	            } else if (typeof a.ondestroy === 'function') {
	                a.ondestroy();
	            }
	        }
	    }]);

	    return BaseComponent;
	}(eventsjs_1.EventEmitter);

	exports.BaseComponent = BaseComponent;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var view_1 = __webpack_require__(63);
	var collection_1 = __webpack_require__(48);
	var utilities_1 = __webpack_require__(6);
	var debug = __webpack_require__(23)('stick:template:view');

	var TemplateView = function (_view_1$View) {
	    _inherits(TemplateView, _view_1$View);

	    function TemplateView(section, template, context, options) {
	        _classCallCheck(this, TemplateView);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateView).call(this, section, template, null, options));

	        _this._onModelChange = utilities_1.bind(_this._onModelChange, _this);
	        _this.context = context;
	        if (options.delegator) {
	            _this._delegator = options.delegator;
	        }
	        if (options.container) {
	            _this._container = options.container;
	        }
	        _this._target = options.target;
	        _this._id = utilities_1.uniqueId("templ");
	        if (!_this.container) throw new Error("template view: no container set");
	        debug("%s: Template view created with state %s", _this.id, _this.context.uid);
	        return _this;
	    }

	    _createClass(TemplateView, [{
	        key: 'setTarget',
	        value: function setTarget(target) {
	            this._target = target;
	        }
	    }, {
	        key: '_onModelChange',
	        value: function _onModelChange(model) {
	            if (this.context == undefined) {
	                console.log('context is undefined', model, this);
	                return;
	            }
	            var changed = this.context.changed;
	            //for (let k in changed) {
	            //    this.set(k, changed[k])
	            //}
	            this.updateLater();
	        }
	    }, {
	        key: 'set',
	        value: function set(key, val) {
	            var silent = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	            if (!silent) {
	                if (!(this.context instanceof collection_1.Model)) {
	                    debug('set value for %s on object', key);
	                    _get(Object.getPrototypeOf(TemplateView.prototype), 'set', this).call(this, key, val);
	                    return this.updateLater();
	                }
	                if (!Array.isArray(key)) key = key.split(/[,.]/);
	                if (key[0] === 'this') {
	                    key.shift();
	                    if (key.length === 0) {
	                        this.root.context = val;
	                        this.root.update();
	                    } else {
	                        this.root.set(key, val);
	                        this.root.update();
	                    }
	                    return;
	                } else if (key[0] === 'root') {
	                    key.shift();
	                    this.root.set(key, val);
	                } else {
	                    debug('set value for %s on model', key);
	                    this.context.set(key.join('.'), val);
	                }
	            }
	            this.updateLater();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            debug("%s: Render", this.id);
	            return _get(Object.getPrototypeOf(TemplateView.prototype), 'render', this).call(this);
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            debug("%s: Update", this.id);
	            /*nextTick(() => {
	                super.update();
	            });*/
	            _get(Object.getPrototypeOf(TemplateView.prototype), 'update', this).call(this);
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            debug("%s: Get value for key: %j", this.id, key, this.context);
	            if (!Array.isArray(key)) key = key.split(/[,.]/);
	            var value = void 0,
	                context = this.context;
	            if (key[0] === '$root') {
	                key.shift();
	                context = this.root.context;
	            }
	            key = key.join('.');
	            if (!value) {
	                if (!(this.context instanceof collection_1.Model)) {
	                    value = _get(Object.getPrototypeOf(TemplateView.prototype), 'get', this).call(this, key);
	                } else {
	                    value = context.get(key);
	                }
	                if (value == null && this.target != null) {
	                    value = this.target[key];
	                    if (typeof value === 'function') {
	                        value = utilities_1.bind(value, this.target);
	                    }
	                }
	            }
	            debug("%s: Got value for key '%s': ", this.id, key, value);
	            return value;
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            if (this._context && this._context instanceof collection_1.Model) {
	                this._context.off('change', this._onModelChange, this);
	            }
	            debug("%s: Remove", this.id);
	            _get(Object.getPrototypeOf(TemplateView.prototype), 'remove', this).call(this);
	        }
	    }, {
	        key: '$destroy',
	        value: function $destroy() {
	            debug("%s: Destroy", this.id);
	            this.remove();
	            //delete this._container;
	            //delete this._delegator;
	            //this.context = null;
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }
	    }, {
	        key: 'parent',
	        get: function get() {
	            return this._parent;
	        },
	        set: function set(parent) {
	            this._parent = parent;
	        }
	    }, {
	        key: 'container',
	        get: function get() {
	            if (this._container) return this._container;
	            return this.parent ? this.parent.container : undefined;
	        }
	    }, {
	        key: 'context',
	        set: function set(context) {
	            if (this._context && this._context instanceof collection_1.Model) {
	                this._context.off('change', this._onModelChange, this);
	            }
	            this._context = context;
	            if (context != null && context instanceof collection_1.Model) {
	                context.on('change', this._onModelChange, this);
	            }
	            this.updateLater();
	        },
	        get: function get() {
	            return this._context;
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            if (!!this._target) return this._target;
	            return this.parent ? this.parent.target : undefined;
	        }
	    }]);

	    return TemplateView;
	}(view_1.View);

	exports.TemplateView = TemplateView;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(80));

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var base_attribute_1 = __webpack_require__(81);
	var decorators = __webpack_require__(57);
	var _1 = __webpack_require__(3);
	var utils = __webpack_require__(6);
	var _events = ['change', 'keyup', 'input'];
	var debug = __webpack_require__(23)('stick:template:attribute:value');
	var ValueAttribute = function (_base_attribute_1$Bas) {
	    _inherits(ValueAttribute, _base_attribute_1$Bas);

	    function ValueAttribute() {
	        _classCallCheck(this, ValueAttribute);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ValueAttribute).apply(this, arguments));
	    }

	    _createClass(ValueAttribute, [{
	        key: "initialize",
	        value: function initialize() {
	            this._onInput = utils.bind(this._onInput, this, null);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = _events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var e = _step.value;

	                    this.ref.addEventListener(e, this._onInput);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            var model = this.model = this.value;
	            if (!model) return;
	            if (!model || !(model instanceof _1.Reference)) {
	                throw new Error("input value must be a reference. Make sure you have <~> defined");
	            }
	            if (model.gettable) {
	                this._elementValue(this._parseValue(model.value()));
	            }
	        }
	    }, {
	        key: "_parseValue",
	        value: function _parseValue(value) {
	            if (value == null || value === "") return void 0;
	            return value;
	        }
	    }, {
	        key: "_onInput",
	        value: function _onInput(event) {
	            clearInterval(this._autocompleteCheckInterval);
	            // ignore some keys
	            if (event && (!event.keyCode || ! ~[27].indexOf(event.keyCode))) {
	                event.stopPropagation();
	            }
	            var value = this._parseValue(this._elementValue());
	            if (!this.model) return;
	            if (utils.equal(this.model.value(), value)) {
	                debug('input: no change');
	                return;
	            }
	            debug('input changed %s', this.model.value(), value);
	            this.model.value(value);
	        }
	    }, {
	        key: "_elementValue",
	        value: function _elementValue(value) {
	            var node = this.ref;
	            var isCheckbox = /checkbox/.test(node.type);
	            var isRadio = /radio/.test(node.type);
	            var isRadioOrCheckbox = isCheckbox || isRadio;
	            var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
	            var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
	            var isSelect = /select/i.test(node.nodeName);
	            if (!arguments.length) {
	                if (isCheckbox) {
	                    return Boolean(node.checked);
	                } else if (isInput || isSelect) {
	                    return node.value || "";
	                } else {
	                    return node.innerHTML || "";
	                }
	            }
	            if (value == null) {
	                value = "";
	            } else {
	                clearInterval(this._autocompleteCheckInterval);
	            }
	            if (isRadioOrCheckbox) {
	                if (isRadio) {
	                    if (String(value) === String(node.value)) {
	                        node.checked = true;
	                    }
	                } else {
	                    node.checked = value;
	                }
	            } else if (!utils.equal(this._elementValue(), value)) {
	                if (isInput || isSelect) {
	                    node.value = value;
	                } else {
	                    node.innerHTML = value;
	                }
	            }
	        }
	    }]);

	    return ValueAttribute;
	}(base_attribute_1.BaseAttribute);
	ValueAttribute = __decorate([decorators.attribute('value')], ValueAttribute);
	exports.ValueAttribute = ValueAttribute;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base = __webpack_require__(66);

	var BaseAttribute = function (_base$BaseAttribute) {
	  _inherits(BaseAttribute, _base$BaseAttribute);

	  function BaseAttribute() {
	    _classCallCheck(this, BaseAttribute);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseAttribute).apply(this, arguments));
	  }

	  return BaseAttribute;
	}(base.BaseAttribute);

	exports.BaseAttribute = BaseAttribute;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(83));
	__export(__webpack_require__(84));
	__export(__webpack_require__(85));
	__export(__webpack_require__(86));
	__export(__webpack_require__(87));
	__export(__webpack_require__(88));

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	//import {components, View, compile, vnode} from 'templ'
	//import {DIContainer} from 'stick.di'
	var utilities_1 = __webpack_require__(6);
	var base_component_1 = __webpack_require__(77);
	var controller_factory_1 = __webpack_require__(75);
	var decorators_1 = __webpack_require__(57);
	var Controller = function (_base_component_1$Bas) {
	    _inherits(Controller, _base_component_1$Bas);

	    function Controller() {
	        _classCallCheck(this, Controller);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Controller).apply(this, arguments));
	    }

	    _createClass(Controller, [{
	        key: "initialize",
	        value: function initialize() {
	            if (this.attributes['name']) {
	                this.name = this.attributes['name'];
	                this.as = this.attributes['as'] || this.name;
	            }
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var view, template, state, s, controller, el;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!this.factory) {
	                                    _context.next = 7;
	                                    break;
	                                }

	                                if (!this.factory.container.hasHandler('template')) {
	                                    _context.next = 6;
	                                    break;
	                                }

	                                _context.next = 4;
	                                return this.factory.container.get('template');

	                            case 4:
	                                view = _context.sent;

	                                view.update();

	                            case 6:
	                                return _context.abrupt("return");

	                            case 7:
	                                if (!this.resolving) {
	                                    _context.next = 9;
	                                    break;
	                                }

	                                return _context.abrupt("return");

	                            case 9:
	                                this.resolving = true;
	                                _context.next = 12;
	                                return this.view.container.get(this.name);

	                            case 12:
	                                this.factory = _context.sent;

	                                if (this.factory instanceof controller_factory_1.ControllerFactory) {
	                                    _context.next = 15;
	                                    break;
	                                }

	                                throw new Error(this.name + ' is not a controller');

	                            case 15:
	                                template = this.childTemplate;

	                                if (this.attributes['template']) {
	                                    template = this.attributes['template'];
	                                }
	                                state = {};

	                                if (this.attributes['state']) {
	                                    s = this.attributes['state'];

	                                    try {
	                                        state = utilities_1.isString(s) ? JSON.parse(s) : Object(s);
	                                    } catch (e) {
	                                        console.warn('Could not parse model tag');
	                                    }
	                                }
	                                _context.next = 21;
	                                return this.factory.create({
	                                    template: template,
	                                    contextName: this.as,
	                                    parentView: this.view,
	                                    state: state
	                                });

	                            case 21:
	                                controller = _context.sent;
	                                _context.next = 24;
	                                return this.factory.container.get('$el');

	                            case 24:
	                                el = _context.sent;

	                                this.section.appendChild(el);
	                                this.resolving = false;

	                            case 27:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            if (this.factory) {
	                this.factory.destroy();
	                this.factory = void 0;
	            }
	            _get(Object.getPrototypeOf(Controller.prototype), "destroy", this).call(this);
	        }
	    }]);

	    return Controller;
	}(base_component_1.BaseComponent);
	Controller = __decorate([decorators_1.component('controller')], Controller);
	exports.Controller = Controller;
	//decorators.component('controller')(Controller)

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var templ = __webpack_require__(63);
	var utilities_1 = __webpack_require__(6);
	exports.Delegate = {
	    initialize: function initialize($container) {
	        this._onEvent = utilities_1.bind(this._onEvent, this);
	        var view = this.childTemplate.view(this.view.context, {
	            parent: this.view
	        });
	        this._subview = view;
	        this._container = this.document.createElement('div');
	        this._container.appendChild(view.render());
	        this.section.appendChild(this._container);
	        utilities_1.delegate(this._container, this.attributes.selector, 'click', this._onEvent);
	    },
	    update: function update() {},
	    _onEvent: function _onEvent(e) {
	        var self = this;
	        var fn = this.attributes.click;
	        //let fn;
	        if (fn instanceof templ.Assignment) {
	            fn = fn.assign;
	        }
	        if (typeof fn !== 'function') {
	            throw new Error('[event] value is not a function');
	        }
	        fn(e);
	    },
	    onDestroy: function destroy() {
	        utilities_1.undelegate(this._container, this.attributes.selector, 'click', this._onEvent);
	        this._subview.$destroy();
	    }
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var decorators = __webpack_require__(57);
	var collection_1 = __webpack_require__(48);
	var base_component_1 = __webpack_require__(77);
	var Repeat = function (_base_component_1$Bas) {
	    _inherits(Repeat, _base_component_1$Bas);

	    function Repeat() {
	        _classCallCheck(this, Repeat);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Repeat).apply(this, arguments));
	    }

	    _createClass(Repeat, [{
	        key: "initialize",
	        value: function initialize() {
	            this._children = [];
	            this._collection = [];
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            var as = this['as'];
	            var each = this['each'];
	            var key = this['key'] || "key";
	            var n = 0;
	            var self = this;
	            var parent = this.view;
	            if (each === this._collection || !each) {
	                return;
	            }
	            if (this._collection && this._collection instanceof collection_1.Collection) {
	                this.__removeEventListeners(this._collection);
	            }
	            this._collection = each;
	            this._update();
	            if (each instanceof collection_1.Collection) {
	                this.__addEventListeners(each);
	            }
	        }
	    }, {
	        key: "_update",
	        value: function _update() {
	            var properties;
	            var as = this['as'];
	            var parent = this.view;
	            var n = 0;
	            var self = this;
	            var filter = this['filter'] || function (a) {
	                return true;
	            };
	            this._collection.forEach(function (m) {
	                if (!filter(m)) {
	                    return;
	                }
	                var child;
	                if (as) {
	                    var _ref;

	                    properties = new collection_1.NestedModel((_ref = {}, _defineProperty(_ref, as, m), _defineProperty(_ref, "self", this.view.context), _ref));
	                } else {
	                    properties = m;
	                }
	                //if (properties instanceof Model)
	                // TODO - provide SAME context here for speed and stability
	                if (n >= this._children.length) {
	                    child = this.childTemplate.view(properties, {
	                        parent: parent
	                    });
	                    this._children.push(child);
	                    this.section.appendChild(child.render(properties));
	                } else {
	                    child = this._children[n];
	                    child.context = properties;
	                    child.update();
	                }
	                n++;
	            }, this);
	            this._children.splice(n).forEach(function (child) {
	                child.$destroy();
	            });
	        }
	    }, {
	        key: "__addEventListeners",
	        value: function __addEventListeners(collection) {
	            collection.on('add', this._update, this);
	            collection.on('remove', this._update, this);
	            collection.on('reset', this._update, this);
	            collection.on('filter', this._update, this);
	        }
	    }, {
	        key: "__removeEventListeners",
	        value: function __removeEventListeners(collection) {
	            collection.off('remove', this._update);
	            collection.off('add', this._update);
	            collection.off('reset', this._update);
	            collection.off('filter', this._update);
	        }
	    }, {
	        key: "setAttribute",
	        value: function setAttribute(key, value) {
	            this[key] = value;
	        }
	    }, {
	        key: "onDestroy",
	        value: function onDestroy() {
	            if (this._collection && typeof this._collection.destroy === 'function') {
	                this._collection.destroy();
	            }
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this._children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var child = _step.value;

	                    child.$destroy();
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }]);

	    return Repeat;
	}(base_component_1.BaseComponent);
	Repeat = __decorate([decorators.component("repeat")], Repeat);
	exports.Repeat = Repeat;
	/*export const Repeat: ComponentDefinition = {

	  initialize() {
	    this._children = []
	    this._collection = [];

	  },

	  update() {

	    var as = this['as'];
	    var each = this['each'];
	    var key = this['key'] || "key";

	    var n = 0;
	    var self = this;
	    var parent = this.view;

	    if (each === this._collection || !each) {
	      return
	    }

	    if (this._collection && this._collection instanceof Collection) {
	      this.__removeEventListeners(this._collection)

	    }

	    this._collection = each

	    this._update()

	    if (each instanceof Collection) {
	      this.__addEventListeners(each)
	    }

	  },

	  _update() {

	    var properties;
	    var as = this['as'];
	    var parent = this.view
	    var n = 0

	    var self = this

	    var filter = this['filter'] || function(a) { return true }

	    this._collection.forEach(function(m: IModel) {

	      if (!filter(m)) { return; }

	      var child;

	      if (as) {
	        properties = new NestedModel({ [as]: m, self: this.view.context });
	      } else {
	        properties = m;
	      }

	      // TODO - provide SAME context here for speed and stability
	      if (n >= this._children.length) {

	        child = this.childTemplate.view(properties, {
	          parent: parent
	        });


	        this._children.push(child);

	        this.section.appendChild(child.render(properties));

	      } else {
	        child = this._children[n];
	        child.context = properties;
	        child.update();
	      }

	      n++;

	    }, this);

	    this._children.splice(n).forEach(function(child) {
	      (<any>child).$destroy();
	    });


	  },

	  __addEventListeners<T extends IModel>(collection: Collection<T>) {

	    collection.on('add', this._update, this);
	    collection.on('remove', this._update, this);
	    collection.on('reset', this._update, this);
	    collection.on('filter', this._update, this);
	  },

	  __removeEventListeners<T extends IModel>(collection: Collection<T>) {
	    collection.off('remove', this._update);
	    collection.off('add', this._update);
	    collection.off('reset', this._update);
	    collection.off('filter', this._update);
	  },

	  setAttribute(key: string, value: any) {
	    this[key] = value

	  },

	  setProperty() {
	    console.log(arguments)
	  },

	  onDestroy() {
	    if (this._collection && typeof this._collection.destroy === 'function') {
	      this._collection.destroy();
	    }

	    for (let child of this._children) {
	      child.$destroy();
	    }
	  }
	}*/

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';

	exports.Show = {
	    initialize: function initialize() {},
	    update: function update() {
	        var show = this.attributes.when;
	        if (this._show === show) {
	            if (this._subview) {
	                this._subview.update();
	            }
	            return;
	        }
	        this._show = show;
	        if (show) {
	            if (!this._subview) {
	                this._subview = this.childTemplate.view(this.view.context, {
	                    parent: this.view /*,
	                                      container: this.view.container,
	                                      target: this.view.target*/
	                });
	                this.section.appendChild(this._subview.render());
	            }
	        } else {
	            if (this._subview) {
	                this._subview.$destroy();
	            }
	            this._subview = void 0;
	        }
	    },
	    onDestroy: function destroy() {
	        if (this._subview) this._subview.$destroy();
	    }
	};
	exports.Hide = {
	    initialize: function initialize() {},
	    update: function update() {
	        var hide = this.attributes.when;
	        if (this._hide === hide) {
	            if (this._subview) {
	                this._subview.update();
	            }
	            return;
	        }
	        this._hide = hide;
	        if (!hide) {
	            if (!this._subview) {
	                this._subview = this.childTemplate.view(this.view.context, {
	                    parent: this.view /*,
	                                      container: this.view.container,
	                                      target: this.view.target*/
	                });
	                this.section.appendChild(this._subview.render());
	            }
	        } else {
	            if (this._subview) {
	                this._subview.$destroy();
	            }
	            this._subview = void 0;
	        }
	    },
	    onDestroy: function destroy() {
	        if (this._subview) this._subview.$destroy();
	    }
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.Unsafe = {
	    initialize: function initialize() {},
	    update: function update() {
	        var value = this.attributes.html;
	        // dirty check if is a binding
	        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && value.evaluate) {
	            value = void 0;
	        }
	        if (this.currentValue && this.currentValue === value) {
	            if (this.currentValue.__isView) {
	                this.currentValue.update(this.currentValue.context);
	            }
	            return;
	        }
	        // has a remove script
	        if (this.currentValue && this.currentValue.remove) {
	            this.currentValue.remove();
	        }
	        this.currentValue = value;
	        if (!value) {
	            return this.section.removeChildNodes();
	        }
	        var node;
	        if (value.render) {
	            value.remove();
	            node = value.render();
	        } else if (value.nodeType != null) {
	            node = value;
	        } else {
	            /*if (this.document !== global.document) {
	              node = this.document.createTextNode(String(value));
	            } else {
	              var div = this.document.createElement("div");
	              div.innerHTML = String(value);
	              node = this.document.createDocumentFragment();
	             
	              var cn = Array.prototype.slice.call(div.childNodes);
	              for (var i = 0, n = cn.length; i < n; i++) {
	                node.appendChild(cn[i]);
	              }
	            }*/
	            var div = this.document.createElement("div");
	            div.innerHTML = String(value);
	            node = this.document.createDocumentFragment();
	            var cn = Array.prototype.slice.call(div.childNodes);
	            for (var i = 0, n = cn.length; i < n; i++) {
	                node.appendChild(cn[i]);
	            }
	        }
	        this.section.removeChildNodes();
	        this.section.appendChild(node);
	    },
	    onDestroy: function destroy() {
	        if (this._subview) this._subview.remove();
	    }
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	var base_component_1 = __webpack_require__(77);
	var decorators = __webpack_require__(57);
	var collection_1 = __webpack_require__(48);
	var _1 = __webpack_require__(3);
	var View = function (_base_component_1$Bas) {
	    _inherits(View, _base_component_1$Bas);

	    function View() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, View);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(View)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.resolving = false;
	        return _this;
	    }

	    _createClass(View, [{
	        key: "getContext",
	        value: function getContext() {
	            var context = this.attributes['context'];
	            if (!context) {
	                context = this.view.context;
	            } else {
	                if (context instanceof _1.Call) {
	                    context = context.call();
	                }
	                if (this.attributes['as']) {
	                    var as = this.attributes['as'];
	                    context = new collection_1.NestedModel(_defineProperty({}, as, context));
	                }
	            }
	            return context;
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var template, context, creator, resolver, tString, view;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!this.subview) {
	                                    _context.next = 2;
	                                    break;
	                                }

	                                return _context.abrupt("return", this.subview.update());

	                            case 2:
	                                if (!this.resolving) {
	                                    _context.next = 4;
	                                    break;
	                                }

	                                return _context.abrupt("return");

	                            case 4:
	                                this.resolving = true;
	                                template = this.attributes['template'];
	                                context = this.getContext();

	                                if (!(!template || template == "")) {
	                                    _context.next = 9;
	                                    break;
	                                }

	                                return _context.abrupt("return");

	                            case 9:
	                                _context.next = 11;
	                                return this.view.container.get('$templateCreator');

	                            case 11:
	                                creator = _context.sent;
	                                _context.next = 14;
	                                return this.view.container.get('$templateResolver');

	                            case 14:
	                                resolver = _context.sent;
	                                _context.next = 17;
	                                return resolver(template);

	                            case 17:
	                                tString = _context.sent;
	                                view = creator(tString, context);

	                                view.parent = this.view;
	                                this.subview = view;
	                                this.section.appendChild(view.render());
	                                this.resolving = false;

	                            case 23:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "onDestroy",
	        value: function onDestroy() {
	            if (this.subview) {
	                this.subview.$destroy();
	            }
	        }
	    }]);

	    return View;
	}(base_component_1.BaseComponent);
	View = __decorate([decorators.component("view")], View);
	exports.View = View;

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var template_1 = __webpack_require__(91);
	var stick_1 = __webpack_require__(89);
	var validURL = __webpack_require__(92);
	function get_validations(el) {
	    var required;
	    var v = Object.keys(validators).map(function (e) {
	        // The required validator is getting handled elsewhere
	        if (e === 'required') return null;
	        var i = el.getAttribute('validate-' + e);
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
	        name = field.name,
	        //el.getAttribute('name'),
	    required = el.getAttribute('required') || el.getAttribute('validate-required'),
	        value = getValue(el),
	        errors = [];
	    if (required) {
	        if (!validators.required(name, form, value, null)) {
	            return [new ValidateError(template_1.template(messages.required, {
	                name: name,
	                label: field.label || name,
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
	                label: field.label || name,
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
	    messages.required = "<b><% label %></b> is required";
	    messages.min = "<b><% label %></b> needs to be minimum <% arg %>";
	    messages.max = "<b><% label %></b> needs to be maximum <% arg %>";
	    messages.email = "<b><% label %></b> is not an email";
	    messages.url = "<b><% label %></b> is not an url";
	    messages.match = "<b><% label %></b> does not match: <b><%arg%></b>";
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
	        } else if (Array.isArray(value)) {
	            return value.length >= min;
	        } else {
	            return parseInt(value) >= min;
	        }
	    }
	    validators.min = min;
	    function max(name, form, value, arg) {
	        var max = parseInt(arg);
	        // TODO: check in init
	        if (isNaN(max)) return;
	        if (typeof value === 'string') {
	            return value.length <= max;
	        } else if (Array.isArray(value)) {
	            return value.length <= max;
	        } else {
	            return parseInt(value) <= max;
	        }
	    }
	    validators.max = max;
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
/* 91 */
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
/* 92 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)(module)))

/***/ },
/* 93 */
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(2);
	var editor_1 = __webpack_require__(1);
	var stick_1 = __webpack_require__(89);
	var validator_1 = __webpack_require__(90);
	var templ = __webpack_require__(91);

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
	        key: 'label',
	        get: function get() {
	            var label = this.el.querySelector('.field-label');
	            if (label) return label.textContent;
	            return null;
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

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(2);
	var stick_1 = __webpack_require__(89);
	var field_1 = __webpack_require__(94);
	var template_1 = __webpack_require__(3);

	var Form = function (_base_1$BaseTemplate) {
	    _inherits(Form, _base_1$BaseTemplate);

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
	                return i.element === el;
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
	            var _this2 = this;

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
	            this.fields.forEach(function (e) {
	                _this2.listenTo(e, 'change', _this2.onFormChange);
	            });
	            stick_1.utils.addEventListener(this.el, 'submit', this._onSubmit);
	            this.listenTo(this.subview.context, 'change', this.onContextChange);
	        }
	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit(e) {
	            e.preventDefault();
	            return false;
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
	        key: 'setValue',
	        value: function setValue(obj) {
	            var fields = this.fields;
	            for (var i = 0, ii = fields.length; i < ii; i++) {
	                if (obj == null) fields[i].value = null;else {
	                    if (stick_1.utils.has(obj, fields[i].name)) {
	                        fields[i].value = obj[fields[i].name];
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'onFormChange',
	        value: function onFormChange(field) {
	            this.trigger('change', field);
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
	            if (cb instanceof template_1.Assignment) {
	                cb.assign();
	            } else if (cb instanceof template_1.Call) {
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
	            stick_1.utils.removeEventListener(this.el, 'submit', this._onSubmit);
	            if (this.subview) {
	                this.subview.$destroy();
	                this.subview = void 0;
	            }
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var editor_1 = __webpack_require__(1);
	var stick_1 = __webpack_require__(89);
	var validator_1 = __webpack_require__(90);
	var createEvent = function createEvent(name) {
	    return new Event(name);
	};
	try {
	    new Event('test');
	} catch (e) {
	    // IE does not support `new Event()`
	    createEvent = function createEvent(name) {
	        var evt = document.createEvent('Event');
	        evt.initEvent(name, true, false);
	        return evt;
	    };
	}

	var AutoSizer = function () {
	    function AutoSizer(el) {
	        _classCallCheck(this, AutoSizer);

	        this.el = el;
	        this._onChange = stick_1.utils.bind(this._onChange, this);
	        this._onPageResize = stick_1.utils.bind(this._onPageResize, this);
	        this._initInitialSize();
	    }

	    _createClass(AutoSizer, [{
	        key: '_onPageResize',
	        value: function _onPageResize() {
	            if (this.el.clientWidth !== this._state.clientWidth) {
	                this._updateSize();
	            }
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange() {
	            this._updateSize();
	        }
	    }, {
	        key: '_initInitialSize',
	        value: function _initInitialSize() {
	            var style = window.getComputedStyle(this.el, null);
	            var heightOffset = void 0;
	            if (style.resize === 'vertical') {
	                this.el.style.resize = 'none';
	            } else if (style.resize === 'both') {
	                this.el.style.resize = 'horizontal';
	            }
	            if (style.boxSizing === 'content-box') {
	                heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
	            } else {
	                heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
	            }
	            // Fix when a textarea is not on document body and heightOffset is Not a Number
	            if (isNaN(heightOffset)) {
	                heightOffset = 0;
	            }
	            this._state = {
	                overflowY: style.overflowY,
	                heightOffset: heightOffset,
	                clientWidth: this.el.clientWidth
	            };
	            stick_1.utils.addEventListener(this.el, 'keyup', this._onChange);
	            stick_1.utils.addEventListener(this.el, 'input', this._onChange);
	            stick_1.utils.addEventListener(window, 'resize', this._onPageResize);
	            this._updateSize();
	        }
	    }, {
	        key: '_changeOverflow',
	        value: function _changeOverflow(value) {
	            {
	                // Chrome/Safari-specific fix:
	                // When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
	                // made available by removing the scrollbar. The following forces the necessary text reflow.
	                var width = this.el.style.width;
	                this.el.style.width = '0px';
	                // Force reflow:
	                /* jshint ignore:start */
	                this.el.offsetWidth;
	                /* jshint ignore:end */
	                this.el.style.width = width;
	            }
	            this._state.overflowY = value;
	            ///*if (setOverflowY) {
	            this.el.style.overflowY = value;
	            //}*/
	            this._resize();
	        }
	    }, {
	        key: '_resize',
	        value: function _resize() {
	            var htmlTop = window.pageYOffset;
	            var bodyTop = document.body.scrollTop;
	            var originalHeight = this.el.style.height;
	            this.el.style.height = 'auto';
	            var endHeight = this.el.scrollHeight + this._state.heightOffset;
	            if (this.el.scrollHeight === 0) {
	                // If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
	                this.el.style.height = originalHeight;
	                return;
	            }
	            this.el.style.height = endHeight + 'px';
	            // used to check if an update is actually necessary on window.resize
	            this._state.clientWidth = this.el.clientWidth;
	            // prevents scroll-position jumping
	            document.documentElement.scrollTop = htmlTop;
	            document.body.scrollTop = bodyTop;
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this._updateSize();
	        }
	    }, {
	        key: '_updateSize',
	        value: function _updateSize() {
	            var startHeight = this.el.style.height;
	            this._resize();
	            var style = window.getComputedStyle(this.el, null);
	            if (style.height !== this.el.style.height) {
	                if (this._state.overflowY !== 'visible') {
	                    this._changeOverflow('visible');
	                }
	            } else {
	                if (this._state.overflowY !== 'hidden') {
	                    this._changeOverflow('hidden');
	                }
	            }
	            if (startHeight !== this.el.style.height) {}
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            stick_1.utils.removeEventListener(this.el, 'keyup', this._onChange);
	            stick_1.utils.removeEventListener(this.el, 'input', this._onChange);
	            stick_1.utils.removeEventListener(window, 'resize', this._onPageResize);
	        }
	    }]);

	    return AutoSizer;
	}();

	exports.AutoSizer = AutoSizer;

	var Textarea = function (_editor_1$Editor) {
	    _inherits(Textarea, _editor_1$Editor);

	    function Textarea() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Textarea);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Textarea)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.nodeName = "TEXTAREA";
	        return _this;
	    }

	    _createClass(Textarea, [{
	        key: 'initialize',
	        value: function initialize() {
	            this._onChange = stick_1.utils.bind(this._onChange, this);
	            //this._onPageResize = utils.bind(this._onPageResize, this);
	            var input = document.createElement('textarea');
	            this.section.appendChild(input);
	            this.el = input;
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            for (var a in stick_1.utils.omit(this.attributes, ['autosize'])) {
	                this.el.setAttribute(a, this.attributes[a]);
	            }
	            var autoSize = this.attributes['autosize'];
	            if (autoSize) {
	                if (this._autoSizer == null) {
	                    this._autoSizer = new AutoSizer(this.el);
	                    this.el.style.overflowX = 'hidden';
	                    this.el.style.wordWrap = 'break-word';
	                    this.el.rows = 1;
	                }
	            } else {
	                if (this._autoSize) {
	                    this._autoSizer.destroy();
	                    this._autoSizer = void 0;
	                }
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
	            console.log('this', this.value, value);
	            if (this.value === value) return;
	            validator_1.setValue(this.el, value);
	            if (this._autoSizer) this._autoSizer.update();
	            //this._updateSize();
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(e) {
	            //this._updateSize();
	        }
	    }, {
	        key: 'setHelpBlock',
	        value: function setHelpBlock(html) {
	            if (this.el.parentNode) {
	                this.el.parentNode.appendChild(html);
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            if (this._autoSize) {
	                this._autoSizer.destroy();
	            }
	            _get(Object.getPrototypeOf(Textarea.prototype), 'destroy', this).call(this);
	        }
	    }]);

	    return Textarea;
	}(editor_1.Editor);

	exports.Textarea = Textarea;

/***/ }
/******/ ])
});
;