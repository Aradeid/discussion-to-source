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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
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

/***/ "./src/admin/components/DiscussionToSourceSettingsPage.js":
/*!****************************************************************!*\
  !*** ./src/admin/components/DiscussionToSourceSettingsPage.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiscussionToSourceSettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/ExtensionPage */ "flarum/common/components/ExtensionPage");
/* harmony import */ var flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);






var DiscussionToSourceSettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiscussionToSourceSettingsPage, _ExtensionPage);

  function DiscussionToSourceSettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = DiscussionToSourceSettingsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);

    this.externalOptions = Object.entries(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('aradeid-source.external'));
    this.complexOptions = Object.entries(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('aradeid-source.complex'));
    this.modified = false;
    this.loading = false;
  };

  _proto.content = function content() {
    var _this = this;

    // console.log(app.forum.data.attributes);
    // console.log(this.complexOptions);
    return m('.ExtensionPage-settings', [m('.container', [m('Form', {
      onsubmit: this.onsubmit.bind(this)
    }, [// Basic Source
    m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.basic_source_title')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.basic_source_help_text')), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: true
    }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.option_title'))), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: true
    }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.option_description'))), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: true
    }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.option_tags')))]), // External Source
    m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.external_source_title')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.external_source_help_text')), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: true
    }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.option_title'))), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: true
    }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.option_description'))), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: true
    }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.option_tags'))), this.externalOptions.map(function (option) {
      return flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        state: option[1],
        onchange: function onchange(state) {
          state ? option[1] = true : option[1] = false;
          _this.modified = true;
        }
      }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("aradeid-d2s.admin.settings.option_" + option[0])));
    })]), // Complex Source
    m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.complex_source_title')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.complex_source_help_text')), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: true
    }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.option_title'))), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: true
    }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.option_description'))), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: true
    }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.option_tags'))), this.complexOptions.map(function (option) {
      return flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        state: option[1],
        onchange: function onchange(state) {
          state ? option[1] = true : option[1] = false;
          _this.modified = true;
        }
      }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("aradeid-d2s.admin.settings.option_" + option[0])));
    })]), flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.loading,
      disabled: !this.modified
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('aradeid-d2s.admin.settings.submit_button'))])])]);
  };

  _proto.onsubmit = function onsubmit(e) {
    this.loading = true; // Save external options

    this.externalOptions.map(function (option) {
      eval("app.forum.attribute('aradeid-source.external')" + option[0] + " = " + option[1]);
    }); // Save complex options

    this.complexOptions.map(function (option) {
      eval("app.forum.attribute('aradeid-source.complex')." + option[0] + " = " + option[1]);
    });
    this.loading = false;
    this.modified = false;
  };

  return DiscussionToSourceSettingsPage;
}(flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DiscussionToSourceSettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DiscussionToSourceSettingsPage */ "./src/admin/components/DiscussionToSourceSettingsPage.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);


flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('aradeid/discussion-to-source', function () {
  // app.extensionData.for('aradeid-discussion-to-source').registerPage(DiscussionToSourceSettingsPage);
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.extensionData["for"]('aradeid-discussion-to-source').registerSetting({
    setting: 'aradeid-source.external.images',
    type: 'boolean',
    label: 'Images'
  }); // console.log(app);
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/ExtensionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['common/components/ExtensionPage']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/ExtensionPage'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map