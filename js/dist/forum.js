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

/***/ "./src/forum/components/ChangeLinkModal.js":
/*!*************************************************!*\
  !*** ./src/forum/components/ChangeLinkModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeLinkModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_LinkUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/LinkUtils */ "./src/forum/utils/LinkUtils.js");






var ChangeLinkModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ChangeLinkModal, _Modal);

  function ChangeLinkModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = ChangeLinkModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.discussion = this.attrs.discussion;
    this.currentLink = this.attrs.discussion.data.attributes.link;
    this.newLink = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(this.currentLink);
  };

  _proto.className = function className() {
    return 'ChangeLinkModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('aradeid-d2s.forum.change_link_discussion.title');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("input", {
      className: "FormControl",
      bidi: this.newLink,
      type: "text"
    })), m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--primary Button--block',
      type: 'submit',
      loading: this.loading
    }, app.translator.trans('aradeid-d2s.forum.change_link_discussion.submit_button')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    e.preventDefault();
    this.loading = true;
    var link = this.newLink;
    var currentLink = this.currentLink;

    if (link && link !== currentLink) {
      link = _utils_LinkUtils__WEBPACK_IMPORTED_MODULE_4__["default"].AddProtocolToLink(link);
      return this.discussion.save({
        link: link
      }).then(function () {
        if (app.viewingDiscussion(_this.discussion)) {
          app.current.get('stream').update();
        }

        m.redraw();

        _this.hide();
      })["catch"](function () {
        _this.loading = false;
        m.redraw();
      });
    } else {
      this.hide();
    }
  };

  return ChangeLinkModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/ChangeThumbnailModal.js":
/*!******************************************************!*\
  !*** ./src/forum/components/ChangeThumbnailModal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeThumbnailModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_LinkUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/LinkUtils */ "./src/forum/utils/LinkUtils.js");






var ChangeThumbnailModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ChangeThumbnailModal, _Modal);

  function ChangeThumbnailModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = ChangeThumbnailModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.discussion = this.attrs.discussion;
    this.currentThumbnail = this.attrs.discussion.data.attributes.thumbnail;
    this.newThumbnail = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(this.currentThumbnail);
  };

  _proto.className = function className() {
    return 'ChangeThumbnailModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('aradeid-d2s.forum.change_thumbnail_discussion.title');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("input", {
      className: "FormControl",
      bidi: this.newThumbnail,
      type: "text"
    })), m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--primary Button--block',
      type: 'submit',
      loading: this.loading
    }, app.translator.trans('aradeid-d2s.forum.change_thumbnail_discussion.submit_button')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    e.preventDefault();
    this.loading = true;
    var thumbnail = this.newThumbnail();
    var currentThumbnail = this.currentThumbnail;

    if (thumbnail && thumbnail !== currentThumbnail) {
      thumbnail = _utils_LinkUtils__WEBPACK_IMPORTED_MODULE_4__["default"].AddProtocolToLink(thumbnail);
      return this.discussion.save({
        thumbnail: thumbnail
      }).then(function () {
        if (app.viewingDiscussion(_this.discussion)) {
          app.current.get('stream').update();
        }

        m.redraw();

        _this.hide();
      })["catch"](function () {
        _this.loading = false;
        m.redraw();
      });
    } else {
      this.hide();
    }
  };

  return ChangeThumbnailModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/GoogleSearchModal.js":
/*!***************************************************!*\
  !*** ./src/forum/components/GoogleSearchModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleSearchModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);




var GoogleSearchModal = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GoogleSearchModal, _Component);

  function GoogleSearchModal() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = GoogleSearchModal.prototype;

  //export default class GoogleSearchModal extends Modal {
  _proto.view = function view() {
    this.key = this.attrs.key;
    return m("div", {
      className: "Resource-search-results sideNavOffset"
    }, m("script", {
      async: true,
      src: "https://cse.google.com/cse.js?cx=" + this.key
    }), m("div", {
      className: "gcse-searchresults-only",
      defaultToImageSearch: "true"
    }));
  };

  return GoogleSearchModal;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ChangeLinkModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ChangeLinkModal */ "./src/forum/components/ChangeLinkModal.js");
/* harmony import */ var _components_ChangeThumbnailModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ChangeThumbnailModal */ "./src/forum/components/ChangeThumbnailModal.js");
/* harmony import */ var flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/components/DiscussionsSearchSource */ "flarum/components/DiscussionsSearchSource");
/* harmony import */ var flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionsSearchSource__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/components/DiscussionList */ "flarum/components/DiscussionList");
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_GoogleSearchModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/GoogleSearchModal */ "./src/forum/components/GoogleSearchModal.js");
/* harmony import */ var _utils_LinkUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/LinkUtils */ "./src/forum/utils/LinkUtils.js");
















var link;
var thumbnail;
var attrs = {};
app.initializers.add('aradeid/discussion-to-source', function () {
  flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.sourceThumbnail = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute("sourceThumbnail");
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (view) {
    var discId = view.children[2].children[2].attrs.href.split('/').pop().split('-')[0];
    var discussion = app.store.getBy('discussions', 'id', discId);

    if (discussion && discussion.data) {
      var link = discussion.data.attributes.link;
      var thumbnail = discussion.data.attributes.thumbnail;
      var image = getFirstImage(discussion.firstPost());

      if (link) {
        // set image to external link
        view.children[2].children[0].attrs.href = link;
        view.children[2].children[0].attrs.target = '_blank'; // set discussion title to external link

        view.children[2].children[2].attrs.href = link;
        view.children[2].children[2].attrs.target = '_blank';
      } else {
        // set image to discussion link; since the default destination is author's profile
        view.children[2].children[0].attrs.href = view.children[2].children[2].attrs.href;
      }

      if (thumbnail) {
        view.children[2].children[0].children.unshift(m("img", {
          "class": "sourceThumbnail",
          src: thumbnail
        }));
      } else {
        view.children[2].children[0].children.unshift(m("img", {
          "class": "sourceThumbnail",
          src: image
        }));
      }
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oninit', function () {
    link = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(attrs.link);
    thumbnail = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(attrs.thumbnail);
    attrs.linkPlaceholder = flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(app.translator.trans('aradeid-d2s.forum.discussion_composer.link_placeholder'));
    attrs.thumbnailPlaceholder = flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(app.translator.trans('aradeid-d2s.forum.discussion_composer.thumbnail_placeholder'));
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'headerItems', function (items) {
    items.add('discussionLink', m('h3', m('input', {
      className: "FormControl",
      bidi: link,
      placeholder: attrs.linkPlaceholder,
      //disabled={this.loading}
      onkeydown: flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.onkeydown.bind(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype)
    }))).add('discussionThumbnail', m('h3', m('input', {
      className: "FormControl",
      bidi: thumbnail,
      placeholder: attrs.thumbnailPlaceholder,
      //disabled={this.loading}
      onkeydown: flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.onkeydown.bind(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype)
    })));
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'data', function (data) {
    data.link = _utils_LinkUtils__WEBPACK_IMPORTED_MODULE_15__["default"].AddProtocolToLink(link());
    data.thumbnail = _utils_LinkUtils__WEBPACK_IMPORTED_MODULE_15__["default"].AddProtocolToLink(thumbnail());
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'oninit', function () {//m.route.set(app.routes.index.path);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_7___default.a, 'moderationControls', function (items, discussion) {
    if (discussion.canRename()) {
      items.add('changeLink', flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
        icon: 'fas fa-link',
        onclick: changeLinkAction.bind(discussion)
      }, app.translator.trans('aradeid-d2s.forum.discussion_controls.change_link_button'))).add('changeThumbnail', flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
        icon: 'fas fa-image',
        onclick: changeThumbnailAction.bind(discussion)
      }, app.translator.trans('aradeid-d2s.forum.discussion_controls.change_thumbnail_button')));
    }

    items.add('checkDiscussionDetails', flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      icon: 'fas fa-info'
    }, m('a', {
      href: app.route.discussion(discussion)
    }, app.translator.trans('aradeid-d2s.forum.discussion_controls.see_details_button'))));
  });
  /*
  extend(TextEditor.prototype, 'view', (view) => {
    console.log(view.children[0].attrs = vnode => {console.log($(vnode.dom))})//.onblur = m.withAttr('value', setThumbnail);
  });*/

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_13___default.a.prototype, 'oninput', setThumbnail);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_12___default.a.prototype, 'view', function (view) {
    var route = m.route.get().split('?')[0].split('/');
    var appPath = route.pop();
    var appName = route.pop(); // check if route is a tag slug

    if (appName == 't') {
      // adds a google search component if the tag is relevant
      if (appPath == 'studenti') {
        if (!m.route.param('search')) {
          m.route.set(m.route.get(), {
            search: 'studenți'
          });
        }

        hidePlaceholder(view);
        view.children.push(_components_GoogleSearchModal__WEBPACK_IMPORTED_MODULE_14__["default"].component({
          key: '2568432f39b604615'
        }));
      }

      if (appPath == 'parinti') {
        if (!m.route.param('search')) {
          m.route.set(m.route.get(), {
            search: 'părinți'
          });
        }

        hidePlaceholder(view);
        view.children.push(_components_GoogleSearchModal__WEBPACK_IMPORTED_MODULE_14__["default"].component({
          key: '864d2c85b6042671d'
        }));
      }

      if (appPath == 'elevi') {
        if (!m.route.param('search')) {
          m.route.set(m.route.get(), {
            search: 'elevi'
          });
        }

        hidePlaceholder(view);
        view.children.push(_components_GoogleSearchModal__WEBPACK_IMPORTED_MODULE_14__["default"].component({
          key: '421118c66a83ddb25'
        }));
      }
    }
  });
});
/**
 * Change discussion link.
 *
 * @return {Promise}
 */

function changeLinkAction() {
  return app.modal.show(_components_ChangeLinkModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    currentTitle: this.title(),
    discussion: this
  });
}
/**
 * Change discussion thumbnail.
 *
 * @return {Promise}
 */


function changeThumbnailAction() {
  return app.modal.show(_components_ChangeThumbnailModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    currentTitle: this.title(),
    discussion: this
  });
}

function hidePlaceholder(view) {
  var counter = 0;
  var checkExist = setInterval(function () {
    if (counter >= 100) {
      // item never appeared after 10 seconds, therefore script should be stopped to avoid overflow
      clearInterval(checkExist);
    }

    counter++;

    if (view.children[0].dom) {
      if (view.children[0].dom.classList[0] == 'Placeholder') {
        view.children[0].dom.attributes[0].value = 'Placeholder hidden';
      }

      clearInterval(checkExist);
    }
  }, 100);
}

function setThumbnail(e, data) {
  var regex = /(?<=\[upl-image-preview url=)([\w\d:/\.&\?\-_\/~]*)(?=\])/g;
  var images = data.match(regex);
  console.log(this.value);
  var input = $('.item-discussionThumbnail .FormControl');

  if (input.val() == '' && images) {
    input.val(images[0]);
  }
}

function getFirstImage(post) {
  var regex = /<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/;
  var defaultImg = app.forum.attribute('defaultImg');

  if (post) {
    var src = regex.exec(post.contentHtml());
    return src ? src[1] : defaultImg;
  } else {
    return defaultImg;
  }
}

/***/ }),

/***/ "./src/forum/utils/LinkUtils.js":
/*!**************************************!*\
  !*** ./src/forum/utils/LinkUtils.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkUtils; });
var LinkUtils = /*#__PURE__*/function () {
  function LinkUtils() {}

  LinkUtils.AddProtocolToLink = function AddProtocolToLink(link) {
    console.log(link);

    if (link && link[0] != '/' && link.split('/')[0] != 'http' && link.split('/')[0] != 'https') {
      return 'http://' + link;
    }

    return link;
  };

  return LinkUtils;
}();



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/DiscussionComposer":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionComposer']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionComposer'];

/***/ }),

/***/ "flarum/components/DiscussionList":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionList']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionList'];

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionListItem']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionListItem'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/DiscussionsSearchSource":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionsSearchSource']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionsSearchSource'];

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

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/Stream'];

/***/ }),

/***/ "flarum/utils/extractText":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['utils/extractText']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extractText'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map