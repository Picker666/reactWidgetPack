'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = function (_Component) {
    _inherits(ButtonGroup, _Component);

    function ButtonGroup(props) {
        _classCallCheck(this, ButtonGroup);

        var _this = _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(ButtonGroup, [{
        key: 'handleClick',
        value: function handleClick(event) {
            console.log(event.target);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                { className: _index2.default.buttonGroupWrapper },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: _index2.default.spanLabel },
                        '\u5927\u7684\uFF1A'
                    ),
                    _react2.default.createElement(_Button2.default, { name: 'large', size: 'large', color: 'green', onClick: this.handleClick })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: _index2.default.spanLabel },
                        '\u5C0F\u7684\uFF1A'
                    ),
                    _react2.default.createElement(_Button2.default, { name: 'small', size: 'small', color: 'red', onClick: this.handleClick })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: _index2.default.spanLabel },
                        '\u4E0D\u53EF\u70B9\u7684\uFF1A'
                    ),
                    _react2.default.createElement(_Button2.default, { disabled: true, onClick: this.handleClick, name: '不可点的' })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: _index2.default.spanLabel },
                        '\u9ED8\u8BA4\u7684\uFF1A'
                    ),
                    _react2.default.createElement(_Button2.default, { onClick: this.handleClick, name: '默认的' })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: _index2.default.spanLabel },
                        '\u5DE6\u8FB9\u5185\u7F6Eicon\uFF1A'
                    ),
                    _react2.default.createElement(_Button2.default, { onClick: this.handleClick, name: '内置icon', icon: { align: 'left', iconStyle: _index2.default.icon } })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: _index2.default.spanLabel },
                        '\u53F3\u8FB9\u5185\u7F6Eicon\uFF1A'
                    ),
                    _react2.default.createElement(_Button2.default, { onClick: this.handleClick, name: '内置icon', icon: { align: 'right', iconStyle: _index2.default.icon } })
                )
            );
        }
    }]);

    return ButtonGroup;
}(_react.Component);

exports.default = ButtonGroup;