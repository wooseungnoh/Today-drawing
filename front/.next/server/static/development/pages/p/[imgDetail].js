module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../back/routes.js":
/*!*************************!*\
  !*** ../back/routes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//global
const LOGIN = '/login';
const LOGOUT = '/logout';
const SIGNUP = '/signup';
const EDITING = '/editing';
const LOAD = '/load';
const LOADLIKELIST = '/loadlikelist';

//photo
const PHOTO = '/photo';
const UPLOADPHOTO = '/uploadphoto';
const UPLOADPOST = '/uploadpost';
const LOADEDPOST = '/loaded';
const PHOTODETAIL = '/photodetail';
const EDITPOST = '/editpost';
const DELETEPOST = '/deletepost';
const LIKE = '/like';

const routes = {
  login: LOGIN,
  logout: LOGOUT,
  signup: SIGNUP,
  editing: EDITING,
  load: LOAD,
  photo: PHOTO,
  uploadphoto: UPLOADPHOTO,
  uploadpost: UPLOADPOST,
  loadedpost: LOADEDPOST,
  photodetail: PHOTODETAIL,
  editpost: EDITPOST,
  deletepost: DELETEPOST,
  like: LIKE,
  loadlikelist: LOADLIKELIST,
};

/* harmony default export */ __webpack_exports__["default"] = (routes);


/***/ }),

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: GalleryContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryContainer", function() { return GalleryContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GalleryContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "container__GalleryContainer",
  componentId: "sc-1pv9ren-0"
})(["margin-top:30px;display:grid;grid-template-rows:repeat(3,200px);grid-template-columns:repeat(2,300px);grid-gap:10px;margin-bottom:30px;", ""], ({
  mypage
}) => mypage && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["grid-template-rows:repeat(2,200px);"]));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "container__Container",
  componentId: "sc-1pv9ren-1"
})(["display:flex;justify-content:center;align-items:center;flex-direction:", ";text-align:center;width:", ";height:", ";"], ({
  flexDirection
}) => flexDirection || 'row', ({
  wsize
}) => wsize || '100%', ({
  hsize
}) => hsize || '100%');
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/text.js":
/*!****************************!*\
  !*** ./components/text.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SIZES = {
  mini: '10px',
  tiny: '13px',
  small: '14px',
  medium: '15px',
  large: '16px',
  big: '19px',
  huge: '25px',
  massive: '50px',
  mainTitle: '35px'
};
const COLOR = {
  normal: '#707070'
};
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "text__Text",
  componentId: "g13gku-0"
})(["color:", ";font-size:", ";", ""], COLOR.normal, ({
  fontSize
}) => SIZES[fontSize] || `${SIZES.medium}`, ({
  bold
}) => bold && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-weight:bold;"]));
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/uiComponent.js":
/*!***********************************!*\
  !*** ./components/uiComponent.js ***!
  \***********************************/
/*! exports provided: Button, NavUl, NavLi, Input, Textarea, Form, InputContainer, Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavUl", function() { return NavUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLi", function() { return NavLi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return InputContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "uiComponent__Button",
  componentId: "sc-4dqk1x-0"
})(["margin:10px;border:none;outline:none;width:300px;height:35px;background:#bbb;border-radius:5px;transition:0.3s;color:#444;&:hover{background:#ccc;}&:active{background:#888;}"]);
const NavUl = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "uiComponent__NavUl",
  componentId: "sc-4dqk1x-1"
})(["position:fixed;z-index:99;top:0;display:flex;width:100%;height:30px;background:#1111116b;justify-content:center;align-items:center;margin:0;padding:25px 0;"]);
const NavLi = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "uiComponent__NavLi",
  componentId: "sc-4dqk1x-2"
})(["display:flex;align-items:center;font-weight:bold;height:50px;color:#333;list-style:none;margin:0 15px;transition:0.5s;text-align:center;&:hover{border-bottom:2px solid #fff;}"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "uiComponent__Input",
  componentId: "sc-4dqk1x-3"
})(["width:300px;height:35px;border-radius:5px;outline:none;border:1px solid #ccc;margin:10px;text-align:center;"]);
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "uiComponent__Textarea",
  componentId: "sc-4dqk1x-4"
})(["width:300px;", " border-radius:5px;border:1px solid #ccc;margin:10px;text-align:center;padding:10px;"], ({
  edit
}) => edit ? styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
          height: 100px;
        ` : styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
          min-height: 200px;
        `);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "uiComponent__Form",
  componentId: "sc-4dqk1x-5"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "uiComponent__InputContainer",
  componentId: "sc-4dqk1x-6"
})(["height:10px;display:flex;flex-direction:row-reverse;justify-content:center;align-items:center;transform:rotate(-90deg);position:absolute;right:10px;"]);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "uiComponent__Img",
  componentId: "sc-4dqk1x-7"
})([""]);

/***/ }),

/***/ "./pages/p/[imgDetail].js":
/*!********************************!*\
  !*** ./pages/p/[imgDetail].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Router */ "next/Router");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/text */ "./components/text.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/drawing */ "./reducers/drawing.js");
/* harmony import */ var _back_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../back/routes */ "../back/routes.js");
var _jsxFileName = "D:\\todayDraw\\front\\pages\\p\\[imgDetail].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const imgDetail = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: editing,
    1: setEditing
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    me,
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const {
    nowShowingPost,
    editingSuccess,
    deletePostSuccess
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.drawing);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const nowUrl = document.location.href;
    const slice = nowUrl.split('p/');
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["LOAD_POST_DETAIL_REQUEST"],
      data: {
        postId: slice[1]
      }
    });
  }, []);

  const handleEditingState = () => {
    setEditing(prev => !prev);
  };

  const onChangeData = e => {
    e.preventDefault();

    if (me === null) {
      alert('권한이 없습니다.');
      location.href = `${document.location.href}`;
    } else if (me._id === nowShowingPost.post.creator._id) {
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["EDIT_POST_DETAIL_REQUEST"],
        data: {
          id: nowShowingPost.post._id,
          title: e.target.childNodes[2].value,
          description: e.target.childNodes[4].value
        }
      });
    } else {
      alert('권한이 없습니다.');
      location.href = `${document.location.href}`;
    }

    setEditing(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (editingSuccess) {
      const nowUrl = document.location.href;
      const slice = nowUrl.split('p/');
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["LOAD_POST_DETAIL_REQUEST"],
        data: {
          postId: slice[1]
        }
      });
    }
  }, [editingSuccess]);

  const onDeletePost = () => {
    if (confirm('정말 게시물을 삭제하시겠습니까?') === true) {
      if (me === null) {
        alert('권한이 없습니다.');
        location.href = `${document.location.href}`;
      } else if (me._id === nowShowingPost.post.creator._id) {
        dispatch({
          type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["DELETE_POST_REQUEST"],
          data: {
            id: nowShowingPost.post._id
          }
        });
      } else {
        alert('권한이 없습니다.');
        location.href = `${document.location.href}`;
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (deletePostSuccess) {
      next_Router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/gallery');
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["DELETE_STATE_OFF"]
      });
    }
  }, [deletePostSuccess]);

  const printHeart = () => {
    if (isLoggedIn) {
      return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        onClick: like,
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHeart"],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 14
        }
      });
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }
  };

  const like = () => {
    const id = {
      id: nowShowingPost.post._id
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5000/upload/like', id, {
      withCredentials: true
    });
  };

  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, nowShowingPost ? __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Img"], {
    src: `http://localhost:5000/${nowShowingPost.post.fileUrl}`,
    width: "30%",
    style: {
      minWidth: '350px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      margin: '10px 0 ',
      width: '30%',
      minWidth: '350px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, editing ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: onChangeData,
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '65px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bold: true,
    fontSize: "big",
    style: {
      padding: '15px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 23
    }
  }, `${nowShowingPost.post.creator.writer}`), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }, `${nowShowingPost.post.createAt.split('T')[0]}`)), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      width: '80px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, "\uC791\uC131\uC644\uB8CC")), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }, "\uC81C\uBAA9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    style: {
      width: '100%'
    },
    defaultValue: nowShowingPost.post.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }, "\uB0B4\uC6A9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Textarea"], {
    edit: true,
    style: {
      width: '100%',
      resize: 'none'
    },
    defaultValue: nowShowingPost.post.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bold: true,
    fontSize: "big",
    style: {
      padding: '15px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 19
    }
  }, `${nowShowingPost.post.creator.writer}`), nowShowingPost.post.creator._id === nowShowingPost.user._id && isLoggedIn ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      width: '80px',
      margin: '2.5px'
    },
    onClick: handleEditingState,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 23
    }
  }, "\uC218\uC815"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      width: '80px',
      margin: '2.5px'
    },
    onClick: onDeletePost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 23
    }
  }, "\uC0AD\uC81C")) : printHeart()), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }, `${nowShowingPost.post.createAt.split('T')[0]}`), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bold: true,
    fontSize: "huge",
    style: {
      paddingBottom: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, nowShowingPost.post.title), __jsx("div", {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 19
    }
  }, nowShowingPost.post.description))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
};

/* harmony default export */ __webpack_exports__["default"] = (imgDetail);

/***/ }),

/***/ "./reducers/drawing.js":
/*!*****************************!*\
  !*** ./reducers/drawing.js ***!
  \*****************************/
/*! exports provided: initialState, LOAD_GALLERY_REQUEST, LOAD_GALLERY_SUCCESS, LOAD_GALLERY_FAILURE, MODAL_ON, MODAL_OFF, ADDING_PHOTO_OFF, DELETE_PHOTO, UPPLOAD_CANVAS_REQUEST, UPPLOAD_CANVAS_SUCCESS, UPPLOAD_CANVAS_FAILURE, UPPLOAD_POST_REQUEST, UPPLOAD_POST_SUCCESS, UPPLOAD_POST_FAILURE, UPPLOADING_DONE, LOAD_POST_DETAIL_REQUEST, LOAD_POST_DETAIL_SUCCESS, LOAD_POST_DETAIL_FAILURE, EDIT_POST_DETAIL_REQUEST, EDIT_POST_DETAIL_SUCCESS, EDIT_POST_DETAIL_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_STATE_OFF, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GALLERY_REQUEST", function() { return LOAD_GALLERY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GALLERY_SUCCESS", function() { return LOAD_GALLERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GALLERY_FAILURE", function() { return LOAD_GALLERY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_ON", function() { return MODAL_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_OFF", function() { return MODAL_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDING_PHOTO_OFF", function() { return ADDING_PHOTO_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PHOTO", function() { return DELETE_PHOTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_CANVAS_REQUEST", function() { return UPPLOAD_CANVAS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_CANVAS_SUCCESS", function() { return UPPLOAD_CANVAS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_CANVAS_FAILURE", function() { return UPPLOAD_CANVAS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_POST_REQUEST", function() { return UPPLOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_POST_SUCCESS", function() { return UPPLOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_POST_FAILURE", function() { return UPPLOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOADING_DONE", function() { return UPPLOADING_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_DETAIL_REQUEST", function() { return LOAD_POST_DETAIL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_DETAIL_SUCCESS", function() { return LOAD_POST_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_DETAIL_FAILURE", function() { return LOAD_POST_DETAIL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_DETAIL_REQUEST", function() { return EDIT_POST_DETAIL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_DETAIL_SUCCESS", function() { return EDIT_POST_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_DETAIL_FAILURE", function() { return EDIT_POST_DETAIL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_REQUEST", function() { return DELETE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return DELETE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_STATE_OFF", function() { return DELETE_STATE_OFF; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  postList: [],
  modalState: false,
  addingPhoto: false,
  isLoadding: false,
  imagePaths: [],
  isUploadingPost: false,
  nowShowingPost: null,
  editingSuccess: false,
  deletePostSuccess: false
};
const LOAD_GALLERY_REQUEST = 'LOAD_GALLERY_REQUEST';
const LOAD_GALLERY_SUCCESS = 'LOAD_GALLERY_SUCCESS';
const LOAD_GALLERY_FAILURE = 'LOAD_GALLERY_FAILURE';
const MODAL_ON = 'MODAL_ON';
const MODAL_OFF = 'MODAL_OFF';
const ADDING_PHOTO_OFF = 'ADDING_PHOTO_OFF';
const DELETE_PHOTO = 'DELETE_PHOTO';
const UPPLOAD_CANVAS_REQUEST = 'UPPLOAD_CANVAS_REQUEST';
const UPPLOAD_CANVAS_SUCCESS = 'UPPLOAD_CANVAS_SUCCESS';
const UPPLOAD_CANVAS_FAILURE = 'UPPLOAD_CANVAS_FAILURE';
const UPPLOAD_POST_REQUEST = 'UPPLOAD_POST_REQUEST';
const UPPLOAD_POST_SUCCESS = 'UPPLOAD_POST_SUCCESS';
const UPPLOAD_POST_FAILURE = 'UPPLOAD_POST_FAILURE';
const UPPLOADING_DONE = 'UPPLOADING_DONE';
const LOAD_POST_DETAIL_REQUEST = 'LOAD_POST_DETAIL_REQUEST';
const LOAD_POST_DETAIL_SUCCESS = 'LOAD_POST_DETAIL_SUCCESS';
const LOAD_POST_DETAIL_FAILURE = 'LOAD_POST_DETAIL_FAILURE';
const EDIT_POST_DETAIL_REQUEST = 'EDIT_POST_DETAIL_REQUEST';
const EDIT_POST_DETAIL_SUCCESS = 'EDIT_POST_DETAIL_SUCCESS';
const EDIT_POST_DETAIL_FAILURE = 'EDIT_POST_DETAIL_FAILURE';
const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
const DELETE_STATE_OFF = 'DELETE_STATE_OFF';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case DELETE_STATE_OFF:
      {
        return _objectSpread({}, state, {
          deletePostSuccess: false
        });
      }

    case DELETE_POST_REQUEST:
      {
        return _objectSpread({}, state, {
          deletePostSuccess: false
        });
      }

    case DELETE_POST_SUCCESS:
      {
        return _objectSpread({}, state, {
          deletePostSuccess: true
        });
      }

    case DELETE_POST_FAILURE:
      {
        return _objectSpread({}, state, {
          deletePostSuccess: false
        });
      }

    case EDIT_POST_DETAIL_REQUEST:
      {
        return _objectSpread({}, state, {
          editingSuccess: false
        });
      }

    case EDIT_POST_DETAIL_SUCCESS:
      {
        return _objectSpread({}, state, {
          editingSuccess: true
        });
      }

    case EDIT_POST_DETAIL_FAILURE:
      {
        return _objectSpread({}, state, {
          editingSuccess: true
        });
      }

    case LOAD_POST_DETAIL_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_POST_DETAIL_SUCCESS:
      {
        return _objectSpread({}, state, {
          nowShowingPost: action.data
        });
      }

    case LOAD_POST_DETAIL_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LOAD_GALLERY_REQUEST:
      {
        return _objectSpread({}, state, {
          isLoadding: true
        });
      }

    case LOAD_GALLERY_SUCCESS:
      {
        return _objectSpread({}, state, {
          postList: action.data,
          isLoadding: false
        });
      }

    case LOAD_GALLERY_FAILURE:
      {
        return _objectSpread({}, state, {
          isLoadding: false
        });
      }

    case MODAL_ON:
      {
        return _objectSpread({}, state, {
          modalState: true
        });
      }

    case MODAL_OFF:
      {
        return _objectSpread({}, state, {
          modalState: false
        });
      }

    case UPPLOAD_CANVAS_REQUEST:
      {
        return _objectSpread({}, state, {
          isLoadding: true
        });
      }

    case UPPLOAD_CANVAS_SUCCESS:
      {
        return _objectSpread({}, state, {
          addingPhoto: true,
          isLoadding: false,
          imagePaths: [...state.imagePaths, action.data]
        });
      }

    case UPPLOAD_CANVAS_FAILURE:
      {
        return _objectSpread({}, state, {
          addingPhoto: false
        });
      }

    case ADDING_PHOTO_OFF:
      {
        return _objectSpread({}, state, {
          addingPhoto: false
        });
      }

    case DELETE_PHOTO:
      {
        return _objectSpread({}, state, {
          imagePaths: []
        });
      }

    case UPPLOAD_POST_REQUEST:
      {
        return _objectSpread({}, state, {
          isUploadingPost: false
        });
      }

    case UPPLOAD_POST_SUCCESS:
      {
        return _objectSpread({}, state, {
          postList: [...state.postList, action.data],
          isUploadingPost: true
        });
      }

    case UPPLOAD_POST_FAILURE:
      {
        return _objectSpread({}, state, {
          isUploadingPost: false
        });
      }

    case UPPLOADING_DONE:
      {
        return _objectSpread({}, state, {
          isUploadingPost: false
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ 8:
/*!**************************************!*\
  !*** multi ./pages/p/[imgDetail].js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\todayDraw\front\pages\p\[imgDetail].js */"./pages/p/[imgDetail].js");


/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/Router":
/*!******************************!*\
  !*** external "next/Router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=[imgDetail].js.map