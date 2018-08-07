'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classname = require('classname');

var _classname2 = _interopRequireDefault(_classname);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',

        // constructor (props) {
        //     super(props);
        // }

        value: function render() {
            var _props = this.props,
                name = _props.name,
                theme = _props.theme,
                size = _props.size,
                _onClick = _props.onClick,
                color = _props.color,
                _props$disabled = _props.disabled,
                disabled = _props$disabled === undefined ? false : _props$disabled,
                _props$icon = _props.icon,
                align = _props$icon.align,
                iconStyle = _props$icon.iconStyle,
                children = _props.children;

            return _react2.default.createElement(
                'a',
                {
                    className: (0, _classname2.default)(_index2.default['widget_button'], _index2.default['widget_button_' + color], _index2.default['widget_button_' + size], disabled && _index2.default['widget_button_disabled'] || null, theme['widget_button']),
                    onClick: function onClick(event) {
                        !disabled && _onClick(event);
                    }
                },
                iconStyle && align === 'left' && _react2.default.createElement('span', { className: (0, _classname2.default)(_index2.default.iconWrapper, _index2.default.leftIconWrapper, iconStyle) }),
                name || children,
                iconStyle && align === 'right' && _react2.default.createElement('span', { className: (0, _classname2.default)(_index2.default.iconWrapper, iconStyle) })
            );
        }
    }]);

    return Button;
}(_react.Component);

Button.propTypes = {
    name: _propTypes2.default.string,
    children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    size: _propTypes2.default.string,
    color: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    disabled: _propTypes2.default.bool,
    theme: _propTypes2.default.object,
    icon: _propTypes2.default.object
};

Button.defaultProps = {
    name: '',
    size: 'normal',
    color: 'blue',
    onClick: function onClick() {},
    disabled: false,
    theme: {},
    children: null,
    icon: { align: 'left' }
};

exports.default = Button;