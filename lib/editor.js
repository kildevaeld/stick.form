"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_1 = require('./base');
var stick_1 = require('stick');
var validator_1 = require('./validator');

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