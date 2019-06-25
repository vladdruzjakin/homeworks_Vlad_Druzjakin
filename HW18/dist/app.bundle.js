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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login.component */ \"./js/components/login.component.js\");\n/* harmony import */ var _components_singup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/singup.component */ \"./js/components/singup.component.js\");\n/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home.component */ \"./js/components/home.component.js\");\n/* harmony import */ var _components_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notfound.component */ \"./js/components/notfound.component.js\");\n/* harmony import */ var _components_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user.component */ \"./js/components/user.component.js\");\n/* harmony import */ var _core_active_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/active.route.service */ \"./js/core/active.route.service.js\");\n/* harmony import */ var _components_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/news.component */ \"./js/components/news.component.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\nvar routes = {\n  '/': new _components_home_component__WEBPACK_IMPORTED_MODULE_2__[\"HomeComponent\"](),\n  '/login': new _components_login_component__WEBPACK_IMPORTED_MODULE_0__[\"LoginComponent\"](),\n  '/singup': new _components_singup_component__WEBPACK_IMPORTED_MODULE_1__[\"SingupComponent\"](),\n  '/users/:id': new _components_user_component__WEBPACK_IMPORTED_MODULE_4__[\"UserComponent\"](),\n  '/news': new _components_news_component__WEBPACK_IMPORTED_MODULE_6__[\"NewsComponent\"](),\n  '**': new _components_notfound_component__WEBPACK_IMPORTED_MODULE_3__[\"NotFoundComponent\"]()\n};\nvar activeRoute = new _core_active_route_service__WEBPACK_IMPORTED_MODULE_5__[\"ActiveRoute\"]();\n\nvar router =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    var container, request, url, component, beforeRender, render, afterRender;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            container = document.querySelector('app-container');\n            request = activeRoute.parseRequestUrl();\n            url = \"\".concat(request.resource ? '/' + request.resource : '/').concat(request.id ? '/:id' : '');\n            component = routes[url] || routes['**'];\n            beforeRender = component.beforeRender, render = component.render, afterRender = component.afterRender;\n            _context.t0 = beforeRender;\n\n            if (!_context.t0) {\n              _context.next = 9;\n              break;\n            }\n\n            _context.next = 9;\n            return beforeRender();\n\n          case 9:\n            container.innerHTML = render();\n            _context.t1 = afterRender;\n\n            if (!_context.t1) {\n              _context.next = 14;\n              break;\n            }\n\n            _context.next = 14;\n            return afterRender();\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function router() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nwindow.addEventListener('load', router);\nwindow.addEventListener('hashchange', router);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/components/home.component.js":
/*!*****************************************!*\
  !*** ./js/components/home.component.js ***!
  \*****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeComponent\", function() { return HomeComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HomeComponent =\n/*#__PURE__*/\nfunction () {\n  function HomeComponent() {\n    _classCallCheck(this, HomeComponent);\n  }\n\n  _createClass(HomeComponent, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <div>Home</div>\\n        \";\n    }\n  }]);\n\n  return HomeComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/home.component.js?");

/***/ }),

/***/ "./js/components/login.component.js":
/*!******************************************!*\
  !*** ./js/components/login.component.js ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginComponent\", function() { return LoginComponent; });\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ \"./js/services/auth.service.js\");\n/* harmony import */ var _core_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/routing.service */ \"./js/core/routing.service.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar LoginComponent =\n/*#__PURE__*/\nfunction () {\n  function LoginComponent() {\n    _classCallCheck(this, LoginComponent);\n\n    this._authService = new _services_auth_service__WEBPACK_IMPORTED_MODULE_0__[\"AuthService\"]();\n    this._routing = new _core_routing_service__WEBPACK_IMPORTED_MODULE_1__[\"Routing\"]();\n    this.beforeRender = this.beforeRender.bind(this);\n    this.afterRender = this.afterRender.bind(this);\n  }\n\n  _createClass(LoginComponent, [{\n    key: \"beforeRender\",\n    value: function beforeRender() {\n      if (this._authService.token) {\n        this._routing.navigate(\"/users/\".concat(this._authService.userId));\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return \"\\n        <div class=\\\"auth-wrap d-flex mt-5\\\">\\n            <div class=\\\"auth-form col col-6 mx-auto my-auto\\\">\\n                <h3>Login to Social.</h3>\\n                <p class=\\\"text-secondary\\\">Enter your e-mail address & password to login to your Social account.</p>\\n                <form name=\\\"loginForm\\\" novalidate>\\n                    <div class=\\\"form-group\\\">\\n                        <input type=\\\"email\\\" class=\\\"form-control form-control-sm\\\" id=\\\"email\\\" placeholder=\\\"name@example.com\\\" required data-pattern=\\\"^S+@[a-z]+.[a-z]+$\\\">\\n                        <input type=\\\"password\\\" class=\\\"form-control form-control-sm mt-3\\\" id=\\\"password\\\" placeholder=\\\"password\\\" required data-pattern=\\\"S+\\\">\\n                        <div class=\\\"d-flex mt-5\\\">\\n                            <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-sm\\\">Login</button>\\n                        </div>\\n                    </div>\\n                </form>\\n            </div>\\n            <div class=\\\"auth-bg col col-6\\\"></div>\\n        </div>\\n        \";\n    }\n  }, {\n    key: \"afterRender\",\n    value: function afterRender() {\n      var _this = this;\n\n      document.forms['loginForm'].addEventListener('submit',\n      /*#__PURE__*/\n      function () {\n        var _ref = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee(e) {\n          var email, password, response;\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  e.preventDefault();\n                  email = e.target.elements['email'].value;\n                  password = e.target.elements['password'].value;\n\n                  if (!(!email || !password)) {\n                    _context.next = 5;\n                    break;\n                  }\n\n                  return _context.abrupt(\"return\");\n\n                case 5:\n                  _context.prev = 5;\n                  _context.next = 8;\n                  return _this._authService.login(email, password);\n\n                case 8:\n                  response = _context.sent;\n\n                  _this._routing.navigate(\"/users/\".concat(response.id));\n\n                  _context.next = 15;\n                  break;\n\n                case 12:\n                  _context.prev = 12;\n                  _context.t0 = _context[\"catch\"](5);\n                  console.log(_context.t0);\n\n                case 15:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, null, [[5, 12]]);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n    }\n  }]);\n\n  return LoginComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/login.component.js?");

/***/ }),

/***/ "./js/components/news.component.js":
/*!*****************************************!*\
  !*** ./js/components/news.component.js ***!
  \*****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsComponent\", function() { return NewsComponent; });\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ \"./js/services/auth.service.js\");\n/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/news.service */ \"./js/services/news.service.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar NewsComponent =\n/*#__PURE__*/\nfunction () {\n  function NewsComponent() {\n    _classCallCheck(this, NewsComponent);\n\n    this._authService = new _services_auth_service__WEBPACK_IMPORTED_MODULE_0__[\"AuthService\"]();\n    this._newsService = new _services_news_service__WEBPACK_IMPORTED_MODULE_1__[\"NewsService\"]();\n    this.beforeRender = this.beforeRender.bind(this);\n    this.render = this.render.bind(this);\n    this._authUserToken = this._authService.token;\n    this._userImg = {};\n  }\n\n  _createClass(NewsComponent, [{\n    key: \"beforeRender\",\n    value: function () {\n      var _beforeRender = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this._newsService.getNews(this._authUserToken);\n\n              case 2:\n                this._userImg = _context.sent;\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function beforeRender() {\n        return _beforeRender.apply(this, arguments);\n      }\n\n      return beforeRender;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var template = '';\n\n      this._userImg.news.forEach(function (element) {\n        template += \"\\n                <div class=\\\"card mx-auto mt-3 mb-3\\\" style=\\\"width: 30rem;\\\">\\n                    <div class=\\\"row no-gutters\\\">\\n                        <div class=\\\"col-md-4\\\">\\n                        <img src=\\\"\".concat(element.owner.avatar, \"\\\" class=\\\"card-img\\\" alt=\\\"...\\\">\\n                        </div>\\n                        <div class=\\\"col-md-8\\\">\\n                        <div class=\\\"card-body\\\">\\n                            <h5 class=\\\"card-title\\\">\").concat(element.owner.full_name, \"</h5>\\n                            <p class=\\\"card-text\\\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\\n                            <p class=\\\"card-text\\\"><small class=\\\"text-muted\\\">Last updated 3 mins ago</small></p>\\n                        </div>\\n                        </div>\\n                    </div>\\n                </div>\\n\\n\\n                <div class=\\\"card mx-auto\\\" style=\\\"width: 50rem;\\\">\\n                    <img src=\\\"\").concat(element.pictures[0].url, \"\\\" class=\\\"card-img-top\\\" alt=\\\"img\\\">\\n                    <div class=\\\"card-body\\\">\\n                        <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\\n                    </div>\\n                </div>   \\n            \");\n      });\n\n      return \"\".concat(template); // let template ='';\n      // console.log(this._userImg)\n      // this._userImg.news.forEach(element => {\n      //     template += `<img src=\"${element.pictures[0].url}\">`\n      // });\n      // return `${template}`\n    }\n  }]);\n\n  return NewsComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/news.component.js?");

/***/ }),

/***/ "./js/components/notfound.component.js":
/*!*********************************************!*\
  !*** ./js/components/notfound.component.js ***!
  \*********************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotFoundComponent\", function() { return NotFoundComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar NotFoundComponent =\n/*#__PURE__*/\nfunction () {\n  function NotFoundComponent() {\n    _classCallCheck(this, NotFoundComponent);\n  }\n\n  _createClass(NotFoundComponent, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <div>404</div>\\n        \";\n    }\n  }]);\n\n  return NotFoundComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/notfound.component.js?");

/***/ }),

/***/ "./js/components/singup.component.js":
/*!*******************************************!*\
  !*** ./js/components/singup.component.js ***!
  \*******************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SingupComponent\", function() { return SingupComponent; });\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ \"./js/services/auth.service.js\");\n/* harmony import */ var _core_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/routing.service */ \"./js/core/routing.service.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar SingupComponent =\n/*#__PURE__*/\nfunction () {\n  function SingupComponent() {\n    _classCallCheck(this, SingupComponent);\n\n    this._authService = new _services_auth_service__WEBPACK_IMPORTED_MODULE_0__[\"AuthService\"]();\n    this._routing = new _core_routing_service__WEBPACK_IMPORTED_MODULE_1__[\"Routing\"]();\n    this.afterRender = this.afterRender.bind(this);\n  }\n\n  _createClass(SingupComponent, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n        <div class=\\\"auth-wrap d-flex mt-5\\\">\\n            <div class=\\\"auth-form col col-6 mx-auto my-auto\\\">\\n                <h3>Singup to Social.</h3>\\n                <p class=\\\"text-secondary\\\">Enter your information, e-mail address & password to singup to Social wetwork.</p>\\n                <form name=\\\"singupForm\\\" novalidate>\\n                    <div class=\\\"form-group\\\">\\n                        <input type=\\\"nickname\\\" class=\\\"form-control form-control-sm\\\" id=\\\"nickname\\\" placeholder=\\\"Your nickname\\\" required >\\n                        <input type=\\\"first_name\\\" class=\\\"form-control form-control-sm\\\" id=\\\"first_name\\\" placeholder=\\\"Your first name\\\" required >\\n                        <input type=\\\"last_name\\\" class=\\\"form-control form-control-sm\\\" id=\\\"last_name\\\" placeholder=\\\"Your last name\\\" required >\\n                        <input type=\\\"phone\\\" class=\\\"form-control form-control-sm\\\" id=\\\"phone\\\" placeholder=\\\"Your phone\\\" required >\\n                        <input type=\\\"gender_orientation\\\" class=\\\"form-control form-control-sm\\\" id=\\\"gender_orientation\\\" placeholder=\\\"Your gender orientation\\\" required >\\n                        <input type=\\\"city\\\" class=\\\"form-control form-control-sm\\\" id=\\\"city\\\" placeholder=\\\"Your city\\\" required >\\n                        <input type=\\\"country\\\" class=\\\"form-control form-control-sm\\\" id=\\\"country\\\" placeholder=\\\"Your country\\\" required >\\n                        <input type=\\\"date_of_birth_day\\\" class=\\\"form-control form-control-sm\\\" id=\\\"date_of_birth_day\\\" placeholder=\\\"Your date of birth day\\\" required >\\n                        <input type=\\\"date_of_birth_month\\\" class=\\\"form-control form-control-sm\\\" id=\\\"date_of_birth_month\\\" placeholder=\\\"Your date of birth month\\\" required >\\n                        <input type=\\\"date_of_birth_year\\\" class=\\\"form-control form-control-sm\\\" id=\\\"date_of_birth_year\\\" placeholder=\\\"Your date of birth year\\\" required >\\n                        \\n                        <input type=\\\"email\\\" class=\\\"form-control form-control-sm\\\" id=\\\"email\\\" placeholder=\\\"name@example.com\\\" required data-pattern=\\\"^S+@[a-z]+.[a-z]+$\\\">\\n                        <input type=\\\"password\\\" class=\\\"form-control form-control-sm mt-3\\\" id=\\\"password\\\" placeholder=\\\"password\\\" required data-pattern=\\\"S+\\\">\\n                        <div class=\\\"d-flex mt-5\\\">\\n                            <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-sm\\\">Singup</button>\\n                        </div>\\n                    </div>\\n                </form>\\n            </div>\\n            <div class=\\\"auth-bg col col-6\\\"></div>\\n        </div>\\n        \";\n    }\n  }, {\n    key: \"afterRender\",\n    value: function afterRender() {\n      var _this = this;\n\n      document.forms['singupForm'].addEventListener('submit', function (e) {\n        e.preventDefault();\n        var values = Array.prototype.reduce.call(e.target.querySelectorAll('input'), function (init, input) {\n          return _objectSpread({}, init, _defineProperty({}, input.id, input.value));\n        }, {});\n        if (Object.keys(values).some(function (v) {\n          return !values[v];\n        })) return;\n\n        _this._authService.singup(_objectSpread({}, values)).then(function () {\n          _this._routing.navigate('/login');\n        })[\"catch\"](function (err) {\n          console.log(err);\n        });\n      });\n    }\n  }]);\n\n  return SingupComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/singup.component.js?");

/***/ }),

/***/ "./js/components/user.component.js":
/*!*****************************************!*\
  !*** ./js/components/user.component.js ***!
  \*****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserComponent\", function() { return UserComponent; });\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ \"./js/services/auth.service.js\");\n/* harmony import */ var _core_active_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/active.route.service */ \"./js/core/active.route.service.js\");\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/user.service */ \"./js/services/user.service.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar UserComponent =\n/*#__PURE__*/\nfunction () {\n  function UserComponent() {\n    _classCallCheck(this, UserComponent);\n\n    this._activeRoute = new _core_active_route_service__WEBPACK_IMPORTED_MODULE_1__[\"ActiveRoute\"]();\n    this._authService = new _services_auth_service__WEBPACK_IMPORTED_MODULE_0__[\"AuthService\"]();\n    this._userService = new _services_user_service__WEBPACK_IMPORTED_MODULE_2__[\"UserService\"]();\n    this.beforeRender = this.beforeRender.bind(this);\n    this.render = this.render.bind(this);\n    this.style = this.style.bind(this);\n    this._authUserId = this._authService.userId;\n    this._user = {};\n  }\n\n  _createClass(UserComponent, [{\n    key: \"beforeRender\",\n    value: function () {\n      var _beforeRender = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this._userService.getUser(this._authUserId);\n\n              case 2:\n                this._user = _context.sent;\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function beforeRender() {\n        return _beforeRender.apply(this, arguments);\n      }\n\n      return beforeRender;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <!-- Component styles -->\\n            <style>\\n                \".concat(this.style(), \"\\n            </style>\\n            <!-- Component html -->\\n            <div class=\\\"user-cover-container\\\"\\n                style=\\\"background: url(\").concat(this._user.cover, \") no-repeat center / cover;\\\"\\n            >\\n            </div>\\n            <div class=\\\"user-avatar-container d-flex justify-content-center\\\">\\n                <div class=\\\"user-avatar\\\">\\n                    <img src=\\\"\").concat(this._user.avatar, \"\\\">\\n                </div>\\n            </div>\\n        \");\n    }\n  }, {\n    key: \"style\",\n    value: function style() {\n      return \"\\n            img {\\n                max-width: 100%;\\n            }\\n            .user-cover-container {\\n                height: 400px;\\n                width: 100%;\\n            }\\n            .user-avatar-container {\\n                transform: translateY(-50%);\\n            }\\n            .user-avatar {\\n                width: 138px;\\n                height: 138px;\\n                border-radius: 50%;\\n                overflow: hidden;\\n            }\\n        \";\n    }\n  }]);\n\n  return UserComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/user.component.js?");

/***/ }),

/***/ "./js/config/env.js":
/*!**************************!*\
  !*** ./js/config/env.js ***!
  \**************************/
/*! exports provided: ENV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENV\", function() { return ENV; });\nvar ENV = {\n  mode: 'dev',\n  apiUrl: 'https://mostlikedperson-api.herokuapp.com/api'\n};\n\n//# sourceURL=webpack:///./js/config/env.js?");

/***/ }),

/***/ "./js/core/active.route.service.js":
/*!*****************************************!*\
  !*** ./js/core/active.route.service.js ***!
  \*****************************************/
/*! exports provided: ActiveRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActiveRoute\", function() { return ActiveRoute; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ActiveRoute =\n/*#__PURE__*/\nfunction () {\n  function ActiveRoute() {\n    _classCallCheck(this, ActiveRoute);\n  }\n\n  _createClass(ActiveRoute, [{\n    key: \"parseRequestUrl\",\n    value: function parseRequestUrl() {\n      var url = location.hash.slice(1).toLowerCase();\n      var routes = url.split('/');\n      return {\n        resource: routes[1],\n        id: routes[2],\n        url: url\n      };\n    }\n  }]);\n\n  return ActiveRoute;\n}();\n\n//# sourceURL=webpack:///./js/core/active.route.service.js?");

/***/ }),

/***/ "./js/core/http.service.js":
/*!*********************************!*\
  !*** ./js/core/http.service.js ***!
  \*********************************/
/*! exports provided: Http */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Http\", function() { return Http; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Http =\n/*#__PURE__*/\nfunction () {\n  function Http() {\n    _classCallCheck(this, Http);\n  }\n\n  _createClass(Http, [{\n    key: \"post\",\n    value: function post(url, data, options) {\n      return new Promise(function (resolve, reject) {\n        fetch(url, {\n          method: 'POST',\n          body: JSON.stringify(data),\n          headers: {\n            'Content-type': 'application/json'\n          }\n        }).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"get\",\n    value: function get(url, options) {\n      return new Promise(function (resolve, reject) {\n        fetch(url, _objectSpread({\n          method: \"GET\"\n        }, options)).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }]);\n\n  return Http;\n}();\n\n//# sourceURL=webpack:///./js/core/http.service.js?");

/***/ }),

/***/ "./js/core/routing.service.js":
/*!************************************!*\
  !*** ./js/core/routing.service.js ***!
  \************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Routing\", function() { return Routing; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Routing =\n/*#__PURE__*/\nfunction () {\n  function Routing() {\n    _classCallCheck(this, Routing);\n  }\n\n  _createClass(Routing, [{\n    key: \"navigate\",\n    value: function navigate(route) {\n      location.hash = route;\n    }\n  }]);\n\n  return Routing;\n}();\n\n//# sourceURL=webpack:///./js/core/routing.service.js?");

/***/ }),

/***/ "./js/services/auth.service.js":
/*!*************************************!*\
  !*** ./js/services/auth.service.js ***!
  \*************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthService\", function() { return AuthService; });\n/* harmony import */ var _core_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/http.service */ \"./js/core/http.service.js\");\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AuthService =\n/*#__PURE__*/\nfunction () {\n  function AuthService() {\n    _classCallCheck(this, AuthService);\n  }\n\n  _createClass(AuthService, [{\n    key: \"login\",\n    value: function login(email, password) {\n      var http = new _core_http_service__WEBPACK_IMPORTED_MODULE_0__[\"Http\"]();\n      return new Promise(function (resolve, reject) {\n        http.post(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"].apiUrl, \"/public/auth/login\"), {\n          email: email,\n          password: password\n        }).then(function (response) {\n          if (!response.auth) return reject(response);\n          localStorage.setItem('sn_user_id', response.id);\n          localStorage.setItem('sn_user_token', response.token);\n          resolve(response);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"singup\",\n    value: function singup(data) {\n      var http = new _core_http_service__WEBPACK_IMPORTED_MODULE_0__[\"Http\"]();\n      return new Promise(function (resolve, reject) {\n        http.post(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"].apiUrl, \"/public/auth/signup\"), data).then(function (response) {\n          if (response.error) return reject(response);\n          resolve(response);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"token\",\n    get: function get() {\n      return localStorage.getItem('sn_user_token');\n    }\n  }, {\n    key: \"userId\",\n    get: function get() {\n      return localStorage.getItem('sn_user_id');\n    }\n  }]);\n\n  return AuthService;\n}();\n\n//# sourceURL=webpack:///./js/services/auth.service.js?");

/***/ }),

/***/ "./js/services/news.service.js":
/*!*************************************!*\
  !*** ./js/services/news.service.js ***!
  \*************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsService\", function() { return NewsService; });\n/* harmony import */ var _core_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/http.service */ \"./js/core/http.service.js\");\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar NewsService =\n/*#__PURE__*/\nfunction () {\n  function NewsService() {\n    _classCallCheck(this, NewsService);\n  }\n\n  _createClass(NewsService, [{\n    key: \"getNews\",\n    value: function getNews(token) {\n      var http = new _core_http_service__WEBPACK_IMPORTED_MODULE_0__[\"Http\"]();\n      return new Promise(\n      /*#__PURE__*/\n      function () {\n        var _ref = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee(resolve, reject) {\n          var result;\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.prev = 0;\n                  _context.next = 3;\n                  return http.get(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"].apiUrl, \"/public/news\"), {\n                    headers: {\n                      \"x-access-token\": token\n                    }\n                  });\n\n                case 3:\n                  result = _context.sent;\n                  resolve(result);\n                  _context.next = 10;\n                  break;\n\n                case 7:\n                  _context.prev = 7;\n                  _context.t0 = _context[\"catch\"](0);\n                  reject(_context.t0);\n\n                case 10:\n                  ;\n\n                case 11:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, null, [[0, 7]]);\n        }));\n\n        return function (_x, _x2) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n    }\n  }]);\n\n  return NewsService;\n}();\n\n//# sourceURL=webpack:///./js/services/news.service.js?");

/***/ }),

/***/ "./js/services/user.service.js":
/*!*************************************!*\
  !*** ./js/services/user.service.js ***!
  \*************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserService\", function() { return UserService; });\n/* harmony import */ var _core_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/http.service */ \"./js/core/http.service.js\");\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar UserService =\n/*#__PURE__*/\nfunction () {\n  function UserService() {\n    _classCallCheck(this, UserService);\n  }\n\n  _createClass(UserService, [{\n    key: \"getUser\",\n    value: function getUser(id) {\n      var http = new _core_http_service__WEBPACK_IMPORTED_MODULE_0__[\"Http\"]();\n      return new Promise(function (resolve, reject) {\n        http.get(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_1__[\"ENV\"].apiUrl, \"/public/users/get-info/\").concat(id)).then(function (response) {\n          console.log(response);\n          resolve(response);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }]);\n\n  return UserService;\n}();\n\n//# sourceURL=webpack:///./js/services/user.service.js?");

/***/ })

/******/ });