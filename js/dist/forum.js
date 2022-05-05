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

/***/ "./src/forum/components/HiddenItemsDropdown.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/HiddenItemsDropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HiddenItemsDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);




var HiddenItemsDropdown = /*#__PURE__*/function (_Dropdown) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HiddenItemsDropdown, _Dropdown);

  function HiddenItemsDropdown() {
    return _Dropdown.apply(this, arguments) || this;
  }

  var _proto = HiddenItemsDropdown.prototype;

  _proto.oninit = function oninit(vnode) {
    _Dropdown.prototype.oninit.call(this, vnode);
  };

  _proto.oncreate = function oncreate(vnode) {
    _Dropdown.prototype.oncreate.call(this, vnode);

    this.$('[data-toggle="tooltip"]').tooltip();
    this.$('[data-toggle="tooltip"]').parent().addClass("Button");
  };

  _proto.getButtonContent = function getButtonContent(children) {
    return m("span", {
      "data-toggle": "tooltip",
      title: this.attrs.tooltip
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(this.attrs.icon));
  };

  _proto.getMenu = function getMenu(items) {
    return m("ul", {
      className: 'Dropdown-menu dropdown-menu SourceOption'
    }, this.attrs.buttons);
  };

  return HiddenItemsDropdown;
}(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var _modifyNewDiscussionAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyNewDiscussionAction */ "./src/forum/modifyNewDiscussionAction.js");
/* harmony import */ var _modifyDiscussionComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifyDiscussionComposer */ "./src/forum/modifyDiscussionComposer.js");
/* harmony import */ var _modifyTextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifyTextEditor */ "./src/forum/modifyTextEditor.js");



app.initializers.add('aradeid/discussion-to-source', function () {
  Object(_modifyNewDiscussionAction__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modifyDiscussionComposer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modifyTextEditor__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/forum/modifyDiscussionComposer.js":
/*!***********************************************!*\
  !*** ./src/forum/modifyDiscussionComposer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_ConfirmDocumentUnload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/ConfirmDocumentUnload */ "flarum/components/ConfirmDocumentUnload");
/* harmony import */ var flarum_components_ConfirmDocumentUnload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ConfirmDocumentUnload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (original) {
    // console.log(app);
    // return original();
    return (// With this component throws error and I commented this
      // Inexplicated but forum works
      // <ConfirmDocumentUnload when={this.hasChanges.bind(this)}>
      m("div", {
        className: 'ComposerBody ' + (this.attrs.className || '')
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(this.attrs.user, {
        className: 'ComposerBody-avatar'
      }), m("div", {
        className: "ComposerBody-content"
      }, m("ul", {
        className: "ComposerBody-header"
      }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.headerItems().toArray())), m("div", {
        className: "ComposerBody-editor"
      }, flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        submitLabel: this.attrs.submitLabel,
        placeholder: this.attrs.placeholder,
        disabled: this.loading || this.attrs.disabled,
        composer: this.composer,
        preview: this.jumpToPreview && this.jumpToPreview.bind(this),
        onchange: this.composer.fields.content,
        onsubmit: this.onsubmit.bind(this),
        value: this.composer.fields.content(),
        choice: this.attrs.choice
      }))), flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        className: 'ComposerBody-loading' + (this.loading ? ' active' : '')
      })) // </ConfirmDocumentUnload>

    );
  });
});
;

/***/ }),

/***/ "./src/forum/modifyNewDiscussionAction.js":
/*!************************************************!*\
  !*** ./src/forum/modifyNewDiscussionAction.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SourceChoiceModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SourceChoiceModal */ "./src/forum/components/SourceChoiceModal.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'newDiscussionAction', function (original) {
    return new Promise(function (resolve, reject) {
      if (app.session.user) {
        app.modal.show(_components_SourceChoiceModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onsubmit: function onsubmit(sourceChoice) {
            if (sourceChoice === 1) {
              app.composer.load(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default.a, {
                user: app.session.user,
                choice: sourceChoice
              });
              app.composer.show();
              return resolve(app.composer);
            }

            if (sourceChoice === 2) {
              app.composer.load(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default.a, {
                user: app.session.user,
                choice: sourceChoice
              });
              app.composer.show();
              return resolve(app.composer);
            }

            if (sourceChoice === 3) {
              app.composer.load(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default.a, {
                user: app.session.user,
                choice: sourceChoice
              });
              app.composer.show();
              return resolve(app.composer);
            }
          }
        });
      } else {
        app.modal.show(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a);
        return reject();
      }
    });
  });
});
;

/***/ }),

/***/ "./src/forum/modifyTextEditor.js":
/*!***************************************!*\
  !*** ./src/forum/modifyTextEditor.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HiddenItemsDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HiddenItemsDropdown */ "./src/forum/components/HiddenItemsDropdown.js");
/* harmony import */ var _utils_getHiddenItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/getHiddenItems */ "./src/forum/utils/getHiddenItems.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'controlItems', function (items) {
    switch (this.attrs.choice) {
      case 2:
        if (!this.hiddenItems().isEmpty()) {
          items.add('source-items', _components_HiddenItemsDropdown__WEBPACK_IMPORTED_MODULE_4__["default"].component({
            icon: 'fas fa-boxes',
            tooltip: app.translator.trans('aradeid-d2s.forum.composer.source_items'),
            buttons: this.hiddenItems().toArray()
          }));
        }

        break;

      case 3:
        if (!this.hiddenItems().isEmpty()) {
          items.add('source-items', _components_HiddenItemsDropdown__WEBPACK_IMPORTED_MODULE_4__["default"].component({
            icon: 'fas fa-boxes',
            tooltip: app.translator.trans('aradeid-d2s.forum.composer.source_items'),
            buttons: this.hiddenItems().toArray()
          }));
        }

        break;

      default:
        break;
    } // console.log(this.attrs.choice);

  });

  flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.hiddenItems = function () {
    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();

    switch (this.attrs.choice) {
      case 2:
        var tempExternalSource = Object.entries(JSON.parse(app.forum.attribute('externalSource')));
        var externalSource = Object.fromEntries(tempExternalSource);
        items = Object(_utils_getHiddenItems__WEBPACK_IMPORTED_MODULE_5__["default"])(externalSource);
        break;

      case 3:
        var tempComplexSource = Object.entries(JSON.parse(app.forum.attribute('complexSource')));
        var complexSource = Object.fromEntries(tempComplexSource);
        items = Object(_utils_getHiddenItems__WEBPACK_IMPORTED_MODULE_5__["default"])(complexSource);
        break;

      default:
        break;
    }

    return items;
  };
});
;

/***/ }),

/***/ "./src/forum/utils/getHiddenItems.js":
/*!*******************************************!*\
  !*** ./src/forum/utils/getHiddenItems.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHiddenItems; });
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1__);


function getHiddenItems(options) {
  var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1___default.a(); // Not Polls, checklist, narator, image_preview

  options.images ? items.add('images', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Images',
    data_toggle: 'tooltip',
    icon: 'fas fa-image',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.categories ? items.add('categories', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Categories',
    data_toggle: 'tooltip',
    icon: 'fas fa-tag',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.slideshow ? items.add('slideshow', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Slideshow',
    data_toggle: 'tooltip',
    icon: 'fas fa-film',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.source_URL ? items.add('source_URL', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Source URL',
    data_toggle: 'tooltip',
    icon: 'fas fa-link',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.images_URL ? items.add('images_URL', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Images URL',
    data_toggle: 'tooltip',
    icon: 'far fa-image',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.videos_URL ? items.add('videos_URL', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Videos URL',
    data_toggle: 'tooltip',
    icon: 'fas fa-video',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.transliterator ? items.add('transliterator', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Transliterator',
    data_toggle: 'tooltip',
    icon: 'fas fa-language',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.digital_packages ? items.add('digital_packages', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Digital Packages',
    data_toggle: 'tooltip',
    icon: 'fas fa-box-open',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.text_file_rendering ? items.add('text_file_rendering', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Text File Rendering',
    data_toggle: 'tooltip',
    icon: 'fas fa-file-alt',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.metadata_generator ? items.add('metadata_generator', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Metadata Generator',
    data_toggle: 'tooltip',
    icon: 'fas fa-list-ul',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.collage_maker ? items.add('collage_maker', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Collage Maker',
    data_toggle: 'tooltip',
    icon: 'fas fa-cut',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.forms ? items.add('forms', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Forms',
    data_toggle: 'tooltip',
    icon: 'fab fa-wpforms',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.cv ? items.add('cv', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Curriculum Vitae',
    data_toggle: 'tooltip',
    icon: 'fab fa-wpforms',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.stickers ? items.add('stickers', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Stickers',
    data_toggle: 'tooltip',
    icon: 'fas fa-icons',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  options.labels ? items.add('labels', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    title: 'Labels',
    data_toggle: 'tooltip',
    icon: 'fas fa-paint-brush',
    className: 'Button Button--icon',
    oncreate: function oncreate() {
      $('[data_toggle="tooltip"]').tooltip();
    }
  })) : '';
  return items;
}

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/ConfirmDocumentUnload":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['components/ConfirmDocumentUnload']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ConfirmDocumentUnload'];

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

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

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

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map