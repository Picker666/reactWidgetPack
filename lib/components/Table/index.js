'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableExhibition = function (_Component) {
    _inherits(TableExhibition, _Component);

    function TableExhibition() {
        _classCallCheck(this, TableExhibition);

        var _this = _possibleConstructorReturn(this, (TableExhibition.__proto__ || Object.getPrototypeOf(TableExhibition)).call(this));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(TableExhibition, [{
        key: 'handleClick',
        value: function handleClick(data) {
            console.log(data);
        }
    }, {
        key: 'render',
        value: function render() {
            var tableColumns = [{
                title: '空间大小',
                dataIndex: 'storageSize',
                key: 'storageSize'
            }, {
                title: '开始时间',
                dataIndex: 'modifyTime',
                key: 'modifyTime'
            }, {
                title: '结束时间',
                dataIndex: 'endTime',
                key: 'endTime'
            }, {
                title: '备注',
                dataIndex: 'desc',
                key: 'desc'
            }];
            var dataSource = [{ storageSize: '959', modifyTime: '2008-05-06', endTime: '2018-05-06', desc: 'yahdhf' }, { storageSize: '666', modifyTime: '2008-05-06', endTime: '2018-05-06', desc: 'yahdhf' }, { storageSize: '333', modifyTime: '2008-05-06', endTime: '2018-05-06', desc: 'yahdhf' }];

            var dataSource1 = [{ storageSize: '959', modifyTime: '2008-05-06', endTime: '2018-05-06', desc: {
                    type: 'show', lists: [{ name: '232', onClick: this.handleClick }, { name: '===', onClick: this.handleClick }]
                } }, { storageSize: '666', modifyTime: '2008-05-06', endTime: '2018-05-06', desc: {
                    type: 'dropDown', label: 'more', lists: [{ name: 'test1 for self', onClick: this.handleClick }, { name: 'adf', onClick: this.handleClick }]
                } }, { storageSize: '777', modifyTime: '2008-05-06', endTime: '2018-05-06', desc: {
                    type: 'dropDown', label: 'more', lists: [{ name: 'test2 for self', onClick: this.handleClick }, { name: 'adf', onClick: this.handleClick }]
                } }, { storageSize: '888', modifyTime: '2008-05-06', endTime: '2018-05-06', desc: {
                    type: 'dropDown', label: 'more', lists: [{ name: 'test3 for self', onClick: this.handleClick }, { name: 'adf', onClick: this.handleClick }]
                } }, { storageSize: '33333333333333333333331324567890-1234567890', modifyTime: '2008-05-06', endTime: '2018-05-06', desc: '666' }];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'default: '
                ),
                _react2.default.createElement(_Table2.default, {
                    headerData: tableColumns,
                    dataSource: dataSource
                }),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u589E\u52A0\u53EF\u70B9\u51FB\u9879\uFF1A'
                ),
                _react2.default.createElement(_Table2.default, {
                    headerData: tableColumns,
                    dataSource: dataSource1
                })
            );
        }
    }]);

    return TableExhibition;
}(_react.Component);

exports.default = TableExhibition;