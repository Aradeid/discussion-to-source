module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/SourceChoiceModal.js":
/*!***************************************************!*\
  !*** ./src/forum/components/SourceChoiceModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourceChoiceModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);



var SourceChoiceModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SourceChoiceModal, _Modal);

  function SourceChoiceModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = SourceChoiceModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
  };

  _proto.className = function className() {
    return "";
  };

  _proto.title = function title() {
    return app.translator.trans('aradeid-d2s.forum.source_modal_title');
  };

  _proto.content = function content() {
    return [m('.Modal-body', m('.Form.Form--centered', m('.Form-group', m('.choiceBox', {
      onclick: this.onsubmit.bind(this, 1)
    }, m('span', app.translator.trans('aradeid-d2s.forum.source_modal_basic')), m('p', app.translator.trans('aradeid-d2s.forum.source_modal_basic_help_text')))), m('.Form-group', m('.choiceBox', {
      onclick: this.onsubmit.bind(this, 2)
    }, m('span', app.translator.trans('aradeid-d2s.forum.source_modal_external')), m('p', app.translator.trans('aradeid-d2s.forum.source_modal_external_help_text')))), m('.Form-group', m('.choiceBox', {
      onclick: this.onsubmit.bind(this, 3)
    }, m('span', app.translator.trans('aradeid-d2s.forum.source_modal_complex')), m('p', app.translator.trans('aradeid-d2s.forum.source_modal_complex_help_text'))))))];
  };

  _proto.onsubmit = function onsubmit(value, e) {
    app.modal.close();
    this.attrs.onsubmit(value);
  };

  return SourceChoiceModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SourceChoiceModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SourceChoiceModal */ "./src/forum/components/SourceChoiceModal.js");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__);





app.initializers.add('aradeid/discussion-to-source', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'newDiscussionAction', function (original) {
    return new Promise(function (resolve, reject) {
      if (app.session.user) {
        app.modal.show(_components_SourceChoiceModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onsubmit: function onsubmit(choice) {
            console.log(choice);
            app.composer.load(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a, {
              user: app.session.user
            });
            app.composer.show();
            return resolve(app.composer);
          }
        });
      } else {
        app.modal.show(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default.a);
        return reject();
      }
    });
  });
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/components/DiscussionComposer":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionComposer']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionComposer'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map