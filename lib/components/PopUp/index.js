'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PopUp = require('./PopUp');

var _PopUp2 = _interopRequireDefault(_PopUp);

var _popUp = require('./popUp.scss');

var _popUp2 = _interopRequireDefault(_popUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopUpInstruction = function (_Component) {
    _inherits(PopUpInstruction, _Component);

    function PopUpInstruction(props) {
        _classCallCheck(this, PopUpInstruction);

        var _this = _possibleConstructorReturn(this, (PopUpInstruction.__proto__ || Object.getPrototypeOf(PopUpInstruction)).call(this, props));

        _this.state = {
            isShowPopUP: false
        };
        _this.closePopUp = _this.closePopUp.bind(_this);
        _this.handleClickForPopUp = _this.handleClickForPopUp.bind(_this);
        return _this;
    }

    _createClass(PopUpInstruction, [{
        key: 'handleClickForPopUp',
        value: function handleClickForPopUp() {
            this.setState({ isShowPopUP: true });
        }
    }, {
        key: 'closePopUp',
        value: function closePopUp() {
            this.setState({ isShowPopUP: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var isShowPopUP = this.state.isShowPopUP;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        _Button2.default,
                        { onClick: this.handleClickForPopUp },
                        'click and check popup'
                    )
                ),
                isShowPopUP && _react2.default.createElement(_PopUp2.default, {
                    onClose: this.closePopUp,
                    onComfirm: function onComfirm() {},
                    onCancel: function onCancel() {},
                    title: '提示框',
                    content: _react2.default.createElement(
                        'div',
                        null,
                        'this is content 66.'
                    ),
                    theme: _popUp2.default
                })
            );
        }
    }]);

    return PopUpInstruction;
}(_react.Component);

;

exports.default = PopUpInstruction;