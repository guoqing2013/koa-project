'use strict';
/**
 * @param {!Object} module
 * @param {!Object} exports
 * @param {?} __webpack_require__
 * @return {undefined}
 */
function n4654(module, exports, __webpack_require__) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {!Object} obj
   * @param {string} key
   * @param {number} value
   * @return {?}
   */
  function _defineProperty(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
      value : value,
      enumerable : true,
      configurable : true,
      writable : true
    }) : obj[key] = value, obj;
  }
  /**
   * @param {!Object} obj
   * @param {!Array} t
   * @return {?}
   */
  function parse(obj, t) {
    var schema = {};
    var prop;
    for (prop in obj) {
      if (!(t.indexOf(prop) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          schema[prop] = obj[prop];
        }
      }
    }
    return schema;
  }
  /**
   * @param {!AudioNode} view
   * @param {!Function} obj
   * @return {undefined}
   */
  function _init(view, obj) {
    if (!(view instanceof obj)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} name
   * @param {string} a
   * @return {?}
   */
  function apply(name, a) {
    if (!name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? name : a;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  exports.default = void 0;
  var _normalizeDataUri = __webpack_require__(111);
  var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
  var _UiIcon = __webpack_require__(88);
  var _UiIcon2 = _interopRequireDefault(_UiIcon);
  var _classlist = __webpack_require__(657);
  var _classlist2 = _interopRequireDefault(_classlist);
  var _AboutPage = __webpack_require__(23);
  var _AboutPage2 = _interopRequireDefault(_AboutPage);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var merge = Object.assign || function(headers) {
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      var obj = arguments[i];
      var key;
      for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          headers[key] = obj[key];
        }
      }
    }
    return headers;
  };
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _prepareStyleProperties = __webpack_require__(1);
  var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
  var _AppDownload = __webpack_require__(5);
  var _AppDownload2 = _interopRequireDefault(_AppDownload);
  var _kodo = __webpack_require__(83);
  var _buildPageNumber = __webpack_require__(1289);
  var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
  var message = __webpack_require__(45);
  var _toHyphenCase = __webpack_require__(2517);
  var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
  var _CalendarDay = __webpack_require__(648);
  var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
  var app = __webpack_require__(108);
  var conf = __webpack_require__(3322);
  var task = function(e) {
    if (e && e.__esModule) {
      return e;
    }
    var t = {};
    if (null != e) {
      var k;
      for (k in e) {
        if (Object.prototype.hasOwnProperty.call(e, k)) {
          t[k] = e[k];
        }
      }
    }
    return t.default = e, t;
  }(conf);
  var inline = __webpack_require__(2258);
  var _CalendarEvent = __webpack_require__(4649);
  var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
  var _deepAssign = __webpack_require__(4652);
  var _deepAssign2 = _interopRequireDefault(_deepAssign);
  var _CalendarTitle = __webpack_require__(4650);
  var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
  var _parametrize = __webpack_require__(4651);
  var _parametrize2 = _interopRequireDefault(_parametrize);
  var __WEBPACK_IMPORTED_MODULE_20_date_fns_min__ = __webpack_require__(4653);
  var _SearchWorkerLoader = __webpack_require__(4290);
  var _SearchWorkerLoader2 = _interopRequireDefault(_SearchWorkerLoader);
  var filters = {
    skuNoOrName : {
      selected : "skuName",
      value : ""
    },
    categoryIds : null,
    sellingChannel : "",
    defaultVendorId : ""
  };
  var options = {
    state : {},
    filters : {}
  };
  var ProductRow = function(_EventEmitter) {
    /**
     * @param {?} obj
     * @return {?}
     */
    function Agent(obj) {
      _init(this, Agent);
      var self = apply(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, obj));
      /** @type {!Object} */
      self.filters = merge({}, filters);
      /**
       * @param {!Object} filter
       * @return {undefined}
       */
      self.onFilterChange = function(filter) {
        /** @type {!Object} */
        self.filters = filter;
        /** @type {!Object} */
        options.filters = filter;
        self.loadList({
          current : 1
        });
      };
      /**
       * @param {string} match
       * @return {undefined}
       */
      self.onTableSelected = function(match) {
        self.setState({
          selected : match
        });
      };
      /**
       * @return {undefined}
       */
      self.loadList = function() {
        var _TOOL2MODE;
        var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var state = self.state;
        var parent = self.filters;
        var data = {
          current : options.current || state.current,
          sortBy : options.sortBy || state.sortBy,
          sortType : options.sortType || state.sortType
        };
        var x = parent.skuNoOrName;
        var arg = parse(parent, ["skuNoOrName"]);
        /** @type {!Object} */
        var res = merge({}, data, arg, (_TOOL2MODE = {
          pageNo : data.current,
          attributes : [1, 3]
        }, _defineProperty(_TOOL2MODE, x.selected, x.value), _defineProperty(_TOOL2MODE, "sortType", "asc" === data.sortType ? 1 : 2), _defineProperty(_TOOL2MODE, "sortName", data.sortBy), _TOOL2MODE));
        if (!(0, _AboutPage2.default)(arg.categoryIds)) {
          /** @type {!Array} */
          res.categoryIds = [res.categoryIds];
        }
        self.setState({
          loading : true,
          emptyLabel : "\u6570\u636e\u6b63\u5728\u52a0\u8f7d\u4e2d"
        });
        _buildPageNumber2.default.setQuery(merge({}, _buildPageNumber2.default.getQuery(), {
          current : data.current,
          skuNoOrName : JSON.stringify(x)
        }));
        app.handleList.call(self, task.loadList, res, data).then(function(state) {
          if (state && state.list) {
            self.setState(merge({}, state, {
              list : state.list.filter(function(sender) {
                return sender.photoUrl;
              })
            }));
          }
        });
      };
      /**
       * @return {?}
       */
      self.checkSelected = function() {
        return !!self.state.selected.length || (_AppDownload2.default.error("\u8bf7\u9009\u62e9\u5546\u54c1"), false);
      };
      /**
       * @param {string} manifest
       * @return {undefined}
       */
      self.onCatChange = function(manifest) {
        if (self.checkSelected()) {
          var ranges = self.state.selected;
          task.batchUpdateCategory({
            categoryId : manifest.id,
            skuIds : JSON.stringify(ranges)
          }).then(function() {
            _AppDownload2.default.success("\u4fee\u6539\u6210\u529f");
            self.clearSelected();
            self.loadList();
          }).catch(function(jsonSeed) {
            return _AppDownload2.default.error(jsonSeed.msg || "\u4fee\u6539\u5931\u8d25");
          });
        }
      };
      /**
       * @return {undefined}
       */
      self.removeGoodsSuccess = function() {
        _AppDownload2.default.success("\u5220\u9664\u6210\u529f");
        self.clearSelected();
        self.loadList();
      };
      /**
       * @return {undefined}
       */
      self.onGoodsRemove = function() {
        if (self.checkSelected()) {
          var ranges = self.state.selected;
          (0, __WEBPACK_IMPORTED_MODULE_20_date_fns_min__.removeGoods)({
            skuIds : JSON.stringify(ranges),
            success : self.removeGoodsSuccess
          });
        }
      };
      /**
       * @return {?}
       */
      self.getBatchComponents = function() {
        return [_prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
          position : "bottom",
          initLabelValue : "\u4fee\u6539\u5206\u7c7b",
          list : self.state.catList,
          onChange : self.onCatChange,
          syncValueToLabel : false,
          style : {
            width : "94px"
          }
        }), _prepareStyleProperties2.default.createElement(_kodo.Button, {
          name : "\u5220\u9664",
          style : {
            width : "66px"
          },
          onClick : self.onGoodsRemove
        })];
      };
      var cache = _buildPageNumber2.default.getQuery();
      return Object.assign(self.filters, (0, _UiIcon2.default)(cache, Object.keys(filters))), self.state = merge({
        id2cat : {},
        catList : [],
        selected : []
      }, inline.DEFAULT_TABLE_CONFIG, {
        current : cache.current || 1
      }), self;
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "componentDidMount",
      value : function() {
        if (!(0, _normalizeDataUri2.default)(options.filters)) {
          this.filters = options.filters;
        }
        this.loadList();
        this.loadCatList();
      }
    }, {
      key : "loadCatList",
      value : function() {
        var boilerStateMachine = this;
        task.getAllCat().then(function(wrappersTemplates) {
          var storageObj = {};
          wrappersTemplates.forEach(function(extension) {
            return storageObj[extension.id] = extension.name;
          });
          boilerStateMachine.setState({
            catList : wrappersTemplates,
            id2cat : storageObj
          });
        });
      }
    }, {
      key : "clearSelected",
      value : function() {
        this.setState({
          selected : []
        });
      }
    }, {
      key : "checkIsEmpty",
      value : function() {
        var state = this.state;
        var loading = state.loading;
        return 0 === state.list.length && !loading && (0, _classlist2.default)(this.filters, filters);
      }
    }, {
      key : "render",
      value : function() {
        var options = this.state;
        return _prepareStyleProperties2.default.createElement("div", {
          className : _SearchWorkerLoader2.default.list
        }, _prepareStyleProperties2.default.createElement(message.Header, null, _prepareStyleProperties2.default.createElement(_deepAssign2.default, null), _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
          defaultFilters : filters,
          catList : options.catList,
          filters : this.filters,
          onChange : this.onFilterChange
        })), _prepareStyleProperties2.default.createElement(message.Content, null, this.checkIsEmpty() ? _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, null) : _prepareStyleProperties2.default.createElement(_parametrize2.default, {
          rowKey : "skuId",
          datasets : options.list,
          onChange : this.loadList,
          loading : options.loading,
          emptyLabel : options.emptyLabel,
          sortBy : options.sortBy,
          sortType : options.sortType,
          id2cat : options.id2cat,
          pageInfo : {
            pageSize : options.pageSize,
            current : options.current,
            totalItem : options.totalItem
          },
          selection : {
            selectedRowKeys : options.selected,
            onSelect : this.onTableSelected
          },
          batchComponents : [_prepareStyleProperties2.default.createElement(_toHyphenCase2.default, {
            key : "batch",
            keys : options.list.map(function(i) {
              return i.skuId;
            }),
            hasSelectedAll : options.selected.length === options.list.length,
            onSelect : this.onTableSelected,
            items : this.getBatchComponents()
          })]
        })));
      }
    }]), Agent;
  }(_prepareStyleProperties.Component);
  exports.default = ProductRow;
  module.exports = exports.default;
}
;