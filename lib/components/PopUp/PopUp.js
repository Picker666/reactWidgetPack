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

var PopUp = function (_Component) {
    _inherits(PopUp, _Component);

    function PopUp(props) {
        _classCallCheck(this, PopUp);

        var _this = _possibleConstructorReturn(this, (PopUp.__proto__ || Object.getPrototypeOf(PopUp)).call(this, props));

        _this.handleComfirm = _this.handleComfirm.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        _this.handleMaskClick = _this.handleMaskClick.bind(_this);
        return _this;
    }

    _createClass(PopUp, [{
        key: 'handleComfirm',
        value: function handleComfirm() {
            var _props = this.props,
                onClose = _props.onClose,
                onComfirm = _props.onComfirm;

            onComfirm();
            onClose();
        }
    }, {
        key: 'handleCancel',
        value: function handleCancel() {
            var _props2 = this.props,
                onClose = _props2.onClose,
                onCancel = _props2.onCancel;

            onCancel();
            onClose();
        }
    }, {
        key: 'handleMaskClick',
        value: function handleMaskClick() {
            var _props3 = this.props,
                onClose = _props3.onClose,
                maskClosable = _props3.maskClosable;

            maskClosable && onClose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                title = _props4.title,
                isShowFooter = _props4.isShowFooter,
                content = _props4.content,
                theme = _props4.theme,
                comfirmButtonText = _props4.comfirmButtonText,
                CancelButtonText = _props4.CancelButtonText,
                isShowCloseButton = _props4.isShowCloseButton,
                onClose = _props4.onClose;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { className: (0, _classname2.default)(_index2.default.popUp_mask, theme.popUp_mask), onClick: this.handleMaskClick }),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classname2.default)(_index2.default.popUp_wrapper, theme.popUp_wrapper) },
                    isShowCloseButton && _react2.default.createElement(
                        'span',
                        { className: _index2.default.popUp_close_button, onClick: onClose },
                        'X'
                    ),
                    !!title && _react2.default.createElement(
                        'div',
                        { className: (0, _classname2.default)(_index2.default.popUp_title, theme.popUp_title) },
                        title
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: (0, _classname2.default)(_index2.default.popUp_content, theme.popUp_content) },
                        content
                    ),
                    !!isShowFooter && _react2.default.createElement(
                        'div',
                        { className: (0, _classname2.default)(_index2.default.popUp_footer, theme.popUp_footer) },
                        _react2.default.createElement(
                            'button',
                            {
                                className: (0, _classname2.default)(_index2.default.popUp_footer_left, theme.popUp_footer_left),
                                onClick: this.handleComfirm
                            },
                            CancelButtonText
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                className: (0, _classname2.default)(_index2.default.popUp_footer_right, theme.popUp_footer_right),
                                onClick: this.handleCancel
                            },
                            comfirmButtonText
                        )
                    )
                )
            );
        }
    }]);

    return PopUp;
}(_react.Component);

;

PopUp.propTypes = {
    onClose: _propTypes2.default.func,
    onComfirm: _propTypes2.default.func,
    onCancel: _propTypes2.default.func,
    isShowFooter: _propTypes2.default.bool,
    title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    isShowCloseButton: _propTypes2.default.bool,
    comfirmButtonText: _propTypes2.default.string,
    CancelButtonText: _propTypes2.default.string,
    maskClosable: _propTypes2.default.bool,
    theme: _propTypes2.default.object
};

PopUp.defaultProps = {
    onClose: function onClose() {},
    onComfirm: function onComfirm() {},
    onCancel: function onCancel() {},
    isShowFooter: true,
    title: '',
    content: _react2.default.createElement(
        'div',
        null,
        'this is content.'
    ),
    isShowCloseButton: true,
    comfirmButtonText: '确定',
    CancelButtonText: '取消',
    maskClosable: true,
    theme: {}
};

exports.default = PopUp;