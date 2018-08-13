'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagenation = function (_Component) {
    _inherits(Pagenation, _Component);

    function Pagenation(props) {
        _classCallCheck(this, Pagenation);

        var _this = _possibleConstructorReturn(this, (Pagenation.__proto__ || Object.getPrototypeOf(Pagenation)).call(this, props));

        _this.state = {
            currentPage: 1,
            totalPage: Math.ceil(props.totalRecords / props.perPageRecords)
        };
        _this.getPages = _this.getPages.bind(_this);
        _this.handleSelectPage = _this.handleSelectPage.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        return _this;
    }

    _createClass(Pagenation, [{
        key: 'getPages',
        value: function getPages() {
            var _props = this.props,
                themes = _props.themes,
                maxDisplay = _props.maxDisplay;
            var _state = this.state,
                currentPage = _state.currentPage,
                totalPage = _state.totalPage;

            var pages = [];
            var isNeedPreviewMore = currentPage > 3 && !!(currentPage - 4);
            var isNeedNextMore = (isNeedPreviewMore && currentPage + 3 < totalPage || !isNeedPreviewMore) && totalPage > maxDisplay;
            for (var i = 1; i <= totalPage; i++) {
                var li = _react2.default.createElement(
                    'li',
                    {
                        key: totalPage + '_' + i,
                        title: i,
                        className: (0, _classnames2.default)(_index2.default.page, currentPage === i && _index2.default.currentPage, themes.page),
                        onClick: this.handleSelectPage(i)
                    },
                    _react2.default.createElement(
                        'a',
                        null,
                        i
                    )
                );
                if (isNeedPreviewMore && i === 2) {
                    li = _react2.default.createElement('li', {
                        key: totalPage + '_preview5',
                        title: '向前5页',
                        className: (0, _classnames2.default)(_index2.default.left_more, _index2.default.page, themes.more),
                        onClick: this.handleSelectPage(currentPage, 'minus', 5)
                    });
                    i = currentPage - 3;
                } else if (isNeedNextMore && totalPage !== i && (!isNeedPreviewMore && i === maxDisplay - 2 || isNeedPreviewMore && i > currentPage + 2)) {
                    li = _react2.default.createElement('li', {
                        key: totalPage + '_next5',
                        title: '向后5页',
                        className: (0, _classnames2.default)(_index2.default.right_more, _index2.default.page, themes.more),
                        onClick: this.handleSelectPage(currentPage, 'plus', 5)
                    });
                    i = totalPage - 1;
                };
                pages.push(li);
            };

            return pages;
        }
    }, {
        key: 'handleSelectPage',
        value: function handleSelectPage(currentPage, type) {
            var _this2 = this;

            var range = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            return function () {
                var page = currentPage;
                var totalPage = _this2.state.totalPage;

                if (type === 'plus') {
                    page += range;
                } else if (type === 'minus') {
                    page -= range;
                };
                page = page > totalPage ? totalPage : page;
                page = page < 1 ? 1 : page;
                var selectPage = _this2.props.selectPage;

                _this2.setState({ currentPage: page });
                selectPage && selectPage(page);
            };
        }
    }, {
        key: 'handleKeyUp',
        value: function handleKeyUp(event) {
            if (event.keyCode === 13) {
                var totalPage = this.state.totalPage;

                var value = this.inputRef.value;
                var page = parseInt(value, 10);
                if (page > totalPage) {
                    this.inputRef.value = totalPage;
                } else if (page < 1) {
                    this.inputRef.value = 1;
                }
                this.handleSelectPage(page)();
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                themes = _props2.themes,
                inputPage = _props2.inputPage;
            var _state2 = this.state,
                currentPage = _state2.currentPage,
                totalPage = _state2.totalPage;

            return _react2.default.createElement(
                'ul',
                { className: (0, _classnames2.default)(_index2.default.pagenation, themes.pagenation) },
                _react2.default.createElement('li', {
                    className: (0, _classnames2.default)(currentPage === 1 ? _index2.default.preview_disable : _index2.default.preview, _index2.default.page, themes.preview),
                    title: '上一页',
                    onClick: this.handleSelectPage(currentPage, 'minus')
                }),
                this.getPages(),
                _react2.default.createElement('li', {
                    className: (0, _classnames2.default)(currentPage === totalPage ? _index2.default.next_disable : _index2.default.next, _index2.default.page, themes.next),
                    title: '下一页',
                    onClick: this.handleSelectPage(currentPage, 'plus')
                }),
                inputPage && _react2.default.createElement(
                    'li',
                    {
                        className: (0, _classnames2.default)(_index2.default.page, themes.page)
                    },
                    '\u8DF3\u81F3',
                    _react2.default.createElement('input', {
                        className: (0, _classnames2.default)(_index2.default.inputPage, themes.inputPage),
                        type: 'number', onKeyUp: this.handleKeyUp,
                        ref: function ref(_ref) {
                            _this3.inputRef = _ref;
                        }
                    }),
                    '\u9875'
                )
            );
        }
    }]);

    return Pagenation;
}(_react.Component);

Pagenation.propTypes = {
    totalRecords: _propTypes2.default.number,
    perPageRecords: _propTypes2.default.number,
    themes: _propTypes2.default.object,
    selectPage: _propTypes2.default.func,
    maxDisplay: _propTypes2.default.number,
    inputPage: _propTypes2.default.bool
};

Pagenation.defaultProps = {
    totalRecords: 100,
    perPageRecords: 10,
    themes: {},
    selectPage: function selectPage() {},
    maxDisplay: 8,
    inputPage: true
};

exports.default = Pagenation;