/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/app.component.js":
/*!*****************************************!*\
  !*** ./src/components/app.component.js ***!
  \*****************************************/
/*! exports provided: EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EVENTS\", function() { return EVENTS; });\n/* harmony import */ var _custom_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-event */ \"./src/custom-event.js\");\n/* harmony import */ var _custom_event__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_event__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ \"./src/components/form/form.component.js\");\n/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed/feed.component */ \"./src/components/feed/feed.component.js\");\n/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.html */ \"./src/components/app.html.js\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.css */ \"./src/components/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar EVENTS = {\n  PUSHED_TWEET: 'tc-event-pushed-tweet'\n};\nvar STORE = {};\nvar USERS = {\n  patel_pankaj_: {\n    username: 'patel_pankaj_',\n    name: 'Pankaj Patel',\n    photo: ''\n  },\n  time2hack: {\n    username: 'time2hack',\n    name: 'Time to Hack',\n    photo: ''\n  }\n};\n\nvar Clone =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(Clone, _HTMLElement);\n\n  function Clone() {\n    _classCallCheck(this, Clone);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Clone).apply(this, arguments));\n  }\n\n  _createClass(Clone, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var _this = this;\n\n      this.dom = this.attachShadow({\n        mode: 'open'\n      });\n      this.dom.innerHTML = Object(_app_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        title: 'Twitter',\n        css: _app_css__WEBPACK_IMPORTED_MODULE_4___default.a\n      });\n      this.refs = {\n        form: this.dom.querySelector(_form_form_component__WEBPACK_IMPORTED_MODULE_1__[\"FORM_COMPONENT\"]),\n        feed: this.dom.querySelector(_feed_feed_component__WEBPACK_IMPORTED_MODULE_2__[\"FEED_COMPONENT\"])\n      };\n      this.dom.addEventListener(_form_form_component__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CREATE_TWEET, function (e) {\n        var time = +new Date();\n        var tweet = {\n          tweet: Object.assign({}, e.detail, {\n            time: time\n          }),\n          user: USERS.time2hack\n        };\n        STORE[time] = Object.assign({}, tweet);\n\n        _this.dispatchEvent(_custom_event__WEBPACK_IMPORTED_MODULE_0___default()(EVENTS.PUSHED_TWEET, {\n          tweet: tweet\n        }));\n      });\n      this.addEventListener(EVENTS.PUSHED_TWEET, function (e) {\n        _this.refs.feed.pushTweet(e.detail.tweet);\n      });\n    }\n  }]);\n\n  return Clone;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('twitter-clone', Clone);\n\n//# sourceURL=webpack:///./src/components/app.component.js?");

/***/ }),

/***/ "./src/components/app.css":
/*!********************************!*\
  !*** ./src/components/app.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \":host {\\n  display: block;\\n}\\n.card {\\n  margin-top: 1rem;\\n}\\n.navbar-brand {\\n  padding-bottom: 0;\\n}\\n.card.done {\\n  text-decoration: line-through;\\n  text-decoration-color: green;\\n}\\n.app {\\n  display: block;\\n  max-width: 700px;\\n  margin: 0 auto;\\n}\\ntc-form .card {\\n  border-color: #333;\\n  margin-bottom: 2rem;\\n}\\ntc-form textarea.form-control {\\n  border: 0;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/components/app.css?");

/***/ }),

/***/ "./src/components/app.html.js":
/*!************************************!*\
  !*** ./src/components/app.html.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (scope) {\n  return \"\\n<link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\\\">\\n<style>\".concat(scope.css, \"</style>\\n<nav class=\\\"navbar navbar-expand-md navbar-dark bg-dark\\\">\\n  <div class=\\\"container\\\">\\n    <h1 class=\\\"navbar-brand\\\">\").concat(scope.title, \"</h1>\\n    <div class=\\\"float-right\\\">\\n      <small class=\\\"text-light\\\">by <a href=\\\"https://time2hack.com/\\\" target=\\\"_blank\\\">https://time2hack.com</a></small>\\n    </div>\\n  </div>\\n</nav>\\n<main class=\\\"container\\\">\\n  <div class=\\\"app\\\">\\n    <tc-form></tc-form>\\n    <tc-feed></tc-feed>\\n  </div>\\n</main>\\n\");\n});\n\n//# sourceURL=webpack:///./src/components/app.html.js?");

/***/ }),

/***/ "./src/components/feed/feed.component.js":
/*!***********************************************!*\
  !*** ./src/components/feed/feed.component.js ***!
  \***********************************************/
/*! exports provided: FEED_COMPONENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEED_COMPONENT\", function() { return FEED_COMPONENT; });\n/* harmony import */ var _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tweet/tweet.component */ \"./src/components/tweet/tweet.component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar FEED_COMPONENT = 'tc-feed';\n\nvar template = function template(scope) {\n  return \"<div class=\\\"list-group\\\" ref=\\\"list\\\">\\n  <h4>Your Feed</h4>\\n  \".concat(scope.tweets.map(getTweetMarkup).join(''), \"\\n</div>\");\n};\n\nvar TWEET = {\n  user: {\n    username: 'patel_pankaj_',\n    name: 'Pankaj Patel',\n    photo: ''\n  },\n  tweet: {\n    text: 'lsjdhjgj gdfgdfg gdfgdfg dfgfd',\n    time: +new Date()\n  }\n};\n\nvar getTweetMarkup = function getTweetMarkup(tweet) {\n  return \"<\".concat(_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_0__[\"TWEET_COMPONENT\"], \" \\n  tweet='\").concat(JSON.stringify(tweet), \"'\\n></\").concat(_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_0__[\"TWEET_COMPONENT\"], \">\");\n};\n\nvar List =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(List, _HTMLElement);\n\n  function List() {\n    _classCallCheck(this, List);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));\n  }\n\n  _createClass(List, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(TWEET);\n      this.innerHTML = template({\n        tweets: [].concat([TWEET, TWEET])\n      });\n    }\n  }, {\n    key: \"pushTweet\",\n    value: function pushTweet(_tweet) {\n      var tweet = document.createElement('div');\n      tweet.innerHTML = getTweetMarkup(_tweet);\n      this.querySelector('[ref=\"list\"]').appendChild(tweet.firstChild);\n    }\n  }]);\n\n  return List;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define(FEED_COMPONENT, List);\n\n//# sourceURL=webpack:///./src/components/feed/feed.component.js?");

/***/ }),

/***/ "./src/components/form/form.component.js":
/*!***********************************************!*\
  !*** ./src/components/form/form.component.js ***!
  \***********************************************/
/*! exports provided: FORM_COMPONENT, EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FORM_COMPONENT\", function() { return FORM_COMPONENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EVENTS\", function() { return EVENTS; });\n/* harmony import */ var _form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.html */ \"./src/components/form/form.html.js\");\n/* harmony import */ var _custom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../custom-event */ \"./src/custom-event.js\");\n/* harmony import */ var _custom_event__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom_event__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar FORM_COMPONENT = 'tc-form';\nvar EVENTS = {\n  CREATE_TWEET: 'tc-event-new-tweet'\n};\n\nvar Form =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(Form, _HTMLElement);\n\n  function Form() {\n    _classCallCheck(this, Form);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Form).apply(this, arguments));\n  }\n\n  _createClass(Form, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      this.innerHTML = Object(_form_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({});\n      this.collectRefs();\n      this.refs.button.addEventListener('click', function (e) {\n        if (!_this.refs.text.value) {\n          return;\n        }\n\n        _this.dispatchEvent(_custom_event__WEBPACK_IMPORTED_MODULE_1___default()(EVENTS.CREATE_TWEET, {\n          text: _this.refs.text.value\n        }));\n\n        _this.refs.form.reset();\n      });\n    }\n  }, {\n    key: \"collectRefs\",\n    value: function collectRefs() {\n      this.refs = {\n        text: this.querySelector('[ref=\"text\"]'),\n        form: this.querySelector('[ref=\"form\"]'),\n        button: this.querySelector('[ref=\"btn-submit\"]')\n      };\n    }\n  }]);\n\n  return Form;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define(FORM_COMPONENT, Form);\n\n//# sourceURL=webpack:///./src/components/form/form.component.js?");

/***/ }),

/***/ "./src/components/form/form.html.js":
/*!******************************************!*\
  !*** ./src/components/form/form.html.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (scope) {\n  return \"\\n<div class=\\\"card todo-form\\\">\\n  <div class=\\\"card-body\\\">\\n    <form ref=\\\"form\\\">\\n      <textarea class=\\\"form-control form-control-md\\\" name=\\\"description\\\" type=\\\"text\\\" placeholder=\\\"What's on your mind...?\\\" ref=\\\"text\\\" ></textarea>\\n      <div class=\\\"clearfix\\\">\\n        <button type=\\\"button\\\" class=\\\"btn float-right mt-2 btn-outline-dark\\\" ref=\\\"btn-submit\\\">Tweet</button>\\n      </div>\\n    </form>\\n  </div>\\n</div>\\n\";\n});\n\n//# sourceURL=webpack:///./src/components/form/form.html.js?");

/***/ }),

/***/ "./src/components/tweet/tweet.component.js":
/*!*************************************************!*\
  !*** ./src/components/tweet/tweet.component.js ***!
  \*************************************************/
/*! exports provided: TWEET_COMPONENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TWEET_COMPONENT\", function() { return TWEET_COMPONENT; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = function template(scope) {\n  return \"\\n<div class=\\\"card\\\">\\n  <div class=\\\"card-body\\\">\\n    <h5 class=\\\"card-title\\\">\".concat(scope.user.name, \"</h5>\\n    <p class=\\\"card-text\\\">\").concat(scope.tweet.text, \"</p>\\n    <!--\\n    <a href=\\\"#\\\" class=\\\"card-link\\\">Card link</a>\\n    <a href=\\\"#\\\" class=\\\"card-link\\\">Another link</a>\\n    -->\\n    <p class=\\\"card-text\\\">\\n      <a href=\\\"#\\\" class=\\\"card-link\\\">Retweet</a>\\n      <a href=\\\"#\\\" class=\\\"card-link\\\">Like</a>\\n      <small class=\\\"float-right text-muted\\\">3 mins ago</small>\\n    </p>\\n  </div>\\n</div>\");\n};\n\nvar TWEET_COMPONENT = 'tc-tweet';\n\nvar Tweet =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(Tweet, _HTMLElement);\n\n  function Tweet() {\n    _classCallCheck(this, Tweet);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Tweet).apply(this, arguments));\n  }\n\n  _createClass(Tweet, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.data = JSON.parse(this.getAttribute('tweet') || '{}');\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.innerHTML = template(this.data);\n    }\n  }]);\n\n  return Tweet;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define(TWEET_COMPONENT, Tweet);\n\n//# sourceURL=webpack:///./src/components/tweet/tweet.component.js?");

/***/ }),

/***/ "./src/custom-event.js":
/*!*****************************!*\
  !*** ./src/custom-event.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (name, eventData) {\n  var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n  return new CustomEvent(name, {\n    detail: eventData,\n    bubbles: bubbles,\n    cancelable: cancelable\n  });\n};\n\n//# sourceURL=webpack:///./src/custom-event.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app.component */ \"./src/components/app.component.js\");\n\nvar app = document.createElement('twitter-clone');\ndocument.querySelector('#app').appendChild(app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });