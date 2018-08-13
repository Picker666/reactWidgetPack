'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ItemDropDown = require('./ItemDropDown');

var _ItemDropDown2 = _interopRequireDefault(_ItemDropDown);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.getTableHeader = _this.getTableHeader.bind(_this);
        _this.getColumns = _this.getColumns.bind(_this);
        _this.getTableBody = _this.getTableBody.bind(_this);
        _this.getColumnContents = _this.getColumnContents.bind(_this);
        _this.handleMouseOver = _this.handleMouseOver.bind(_this);
        return _this;
    }

    // componentDidMount () {
    // this.showAllMsg();
    // }

    _createClass(Table, [{
        key: 'handleMouseOver',
        value: function handleMouseOver(event) {
            var dom = event.target;
            if (dom.scrollWidth > dom.offsetWidth) {
                dom.setAttribute('title', dom.innerHTML);
                dom.addEventListener('mouseleave', function (e) {
                    e.target.setAttribute('title', '');
                });
            };
        }
    }, {
        key: 'getTableHeader',
        value: function getTableHeader() {
            var _this2 = this;

            var _props = this.props,
                headerData = _props.headerData,
                themes = _props.themes;

            var legth = headerData.length;
            this.width = themes.item && themes.item.width ? themes.item.width : (legth && 100 / legth) + '%' || '';
            var header = headerData.map(function (item) {
                return _react2.default.createElement(
                    'span',
                    {
                        className: (0, _classnames2.default)(_index2.default.item, themes.item),
                        key: item.key,
                        style: { width: _this2.width }
                    },
                    item.title
                );
            });
            return _react2.default.createElement(
                'li',
                { className: (0, _classnames2.default)(_index2.default.row, _index2.default.headerRow, themes.row) },
                header
            );
        }
    }, {
        key: 'getColumns',
        value: function getColumns(itemData, i) {
            var _this3 = this;

            var _props2 = this.props,
                headerData = _props2.headerData,
                themes = _props2.themes;

            var columns = headerData.map(function (item, index) {
                var _itemData = itemData[item.dataIndex];
                var itemProps = {
                    key: i + '_' + index,
                    className: (0, _classnames2.default)(_index2.default.item, _index2.default.overflow, themes.item),
                    style: { width: _this3.width },
                    onMouseOver: _this3.handleMouseOver
                };
                if (Object.prototype.toString.call(_itemData) === '[object Object]') {
                    _itemData = _this3.getColumnContents(_itemData);
                    itemProps = Object.assign(itemProps, { className: (0, _classnames2.default)(_index2.default.item, themes.item) });
                };

                return _react2.default.createElement(
                    'span',
                    itemProps,
                    _itemData
                );
            });

            return columns;
        }
    }, {
        key: 'getColumnContents',
        value: function getColumnContents(itemData) {
            var themes = this.props.themes;

            var itemList = [];
            var lists = itemData.lists,
                type = itemData.type;

            if (type === 'show') {
                itemList = lists.map(function (item) {
                    return _react2.default.createElement(
                        'span',
                        {
                            onClick: function onClick() {
                                item.onClick(item);
                            },
                            className: (0, _classnames2.default)(_index2.default.itemBtn, themes.itemBtn),
                            key: item.name
                        },
                        item.name
                    );
                });
            } else if (type === 'dropDown') {
                var itemDropDownProps = Object.assign(itemData, { themes: themes });
                itemList = _react2.default.createElement(_ItemDropDown2.default, itemDropDownProps);
            }

            return itemList;
        }
    }, {
        key: 'getTableBody',
        value: function getTableBody() {
            var _this4 = this;

            var _props3 = this.props,
                dataSource = _props3.dataSource,
                themes = _props3.themes;

            return dataSource.map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index, className: (0, _classnames2.default)(_index2.default.row, themes.row) },
                    _this4.getColumns(item, index)
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var themes = this.props.themes;

            return _react2.default.createElement(
                'ul',
                { className: (0, _classnames2.default)(_index2.default.table, themes.table) },
                this.getTableHeader(),
                this.getTableBody()
            );
        }
    }]);

    return Table;
}(_react.Component);

;

Table.propTypes = {
    headerData: _propTypes2.default.array,
    dataSource: _propTypes2.default.array,
    theme: _propTypes2.default.object
};

Table.defaultProps = {
    headerData: [],
    dataSource: [],
    themes: {}
};

exports.default = Table;