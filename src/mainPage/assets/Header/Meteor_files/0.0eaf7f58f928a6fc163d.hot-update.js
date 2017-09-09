webpackHotUpdate(0,{

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(18);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(16);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(5);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(17);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _header = __webpack_require__(585);

	var _header2 = _interopRequireDefault(_header);

	var _override_bootstrap = __webpack_require__(587);

	var _override_bootstrap2 = _interopRequireDefault(_override_bootstrap);

	var _pizzaSm = __webpack_require__(596);

	var _pizzaSm2 = _interopRequireDefault(_pizzaSm);

	var _BackgroundCanvas = __webpack_require__(158);

	var _BackgroundCanvas2 = _interopRequireDefault(_BackgroundCanvas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	  Header: {
	    displayName: 'Header'
	  }
	};

	var _homeRomWorkReactMeteorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/home/rom/work/react/meteor/src/firstPage/components/MainHeader.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _homeRomWorkReactMeteorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/home/rom/work/react/meteor/src/firstPage/components/MainHeader.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _homeRomWorkReactMeteorNode_modulesReactTransformHmrLibIndexJs2(_homeRomWorkReactMeteorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Header = _wrapComponent('Header')(function (_Component) {
	  _inherits(Header, _Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        null,
	        _react3.default.createElement(
	          'header',
	          { id: 'large-header', className: 'masthead large-header' },
	          _react3.default.createElement(
	            'div',
	            { className: 'container' },
	            _react3.default.createElement(
	              'div',
	              { className: 'row' },
	              _react3.default.createElement(
	                'div',
	                { className: 'col-md-10 row-wraper' },
	                _react3.default.createElement('canvas', { id: 'demo-canvas' }),
	                _react3.default.createElement(
	                  'div',
	                  { className: 'site-heading col-md-7' },
	                  _react3.default.createElement(
	                    'h1',
	                    null,
	                    '\u041C\u0435\u0442\u0435\u043E\u0440 \u043F\u0438\u0446\u0446\u0430'
	                  ),
	                  _react3.default.createElement(
	                    'button',
	                    { className: 'btn btn-danger subheading' },
	                    '\u041D\u0430\u0447\u0430\u0442\u044C'
	                  )
	                ),
	                _react3.default.createElement(
	                  'span',
	                  { className: 'heading-logo col-md-3' },
	                  _react3.default.createElement('img', { src: _pizzaSm2.default, className: 'img-responsive img-heading' })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Header;
	}(_react2.Component));

	exports.default = Header;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ })

})