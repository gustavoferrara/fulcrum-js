'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_PER_PAGE = 1000;

var Batch = function (_Resource) {
  (0, _inherits3.default)(Batch, _Resource);

  function Batch() {
    (0, _classCallCheck3.default)(this, Batch);
    return (0, _possibleConstructorReturn3.default)(this, (Batch.__proto__ || Object.getPrototypeOf(Batch)).apply(this, arguments));
  }

  (0, _createClass3.default)(Batch, [{
    key: 'all',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(params) {
        var options, body;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  qs: params || this.defaultListParams
                };
                _context.next = 3;
                return this.client.api.get(this.collectionPath(), options);

              case 3:
                body = _context.sent;
                return _context.abrupt('return', body);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function all(_x) {
        return _ref.apply(this, arguments);
      }

      return all;
    }()
  }, {
    key: 'find',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
        var body;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.client.api.get(this.memberPath(id));

              case 2:
                body = _context2.sent;
                return _context2.abrupt('return', body[this.resourcesName]);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function find(_x2) {
        return _ref2.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: 'create',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(object) {
        var _this2 = this;

        var attributesForObject, options, body;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                attributesForObject = function attributesForObject() {
                  var attributes = {};
                  // resourcesName instead of resourceName
                  attributes[_this2.resourcesName] = object;
                  return attributes;
                };

                options = {
                  body: attributesForObject(object)
                };
                _context3.next = 4;
                return this.client.api.post(this.resourcesName, options);

              case 4:
                body = _context3.sent;
                return _context3.abrupt('return', body[this.resourcesName]);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function create(_x3) {
        return _ref3.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: 'operations',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id, object) {
        var options, body;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = {
                  body: this.attributesForObject(object)
                };
                _context4.next = 3;
                return this.client.api.post(this.memberPath(id) + '/operations', options);

              case 3:
                body = _context4.sent;
                return _context4.abrupt('return', body[this.resourcesName]);

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function operations(_x4, _x5) {
        return _ref4.apply(this, arguments);
      }

      return operations;
    }()
  }, {
    key: 'start',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id) {
        var body;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.client.api.post(this.memberPath(id) + '/start');

              case 2:
                body = _context5.sent;
                return _context5.abrupt('return', body[this.resourcesName]);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function start(_x6) {
        return _ref5.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: 'resourceName',
    get: function get() {
      return 'operations';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'batch';
    }
  }, {
    key: 'defaultListParams',
    get: function get() {
      return { per_page: DEFAULT_PER_PAGE };
    }
  }]);
  return Batch;
}(_base2.default);

exports.default = Batch;
module.exports = exports['default'];
//# sourceMappingURL=batch.js.map