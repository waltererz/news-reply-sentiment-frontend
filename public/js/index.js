(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/index"],{

/***/ "./resources/js/components/Paper.jsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Paper.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paper)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Paper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    elevation: 0,
    sx: {
      padding: '15px',
      borderRadius: {
        xs: '0px',
        sm: '5px'
      },
      backgroundColor: '#ffffff'
    },
    children: children
  });
}

/***/ }),

/***/ "./resources/js/config/app.js":
/*!************************************!*\
  !*** ./resources/js/config/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _config = {
  name: '뉴스댓글 여론분석기',
  route: {
    "default": 1,
    home: 2,
    analytics: 3,
    user: 4
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config);

/***/ }),

/***/ "./resources/js/config/index.js":
/*!**************************************!*\
  !*** ./resources/js/config/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function config(path) {
  if (typeof path != 'string' || path.length < 1) {
    return '';
  }

  var pathArray = path.split('.');
  var configFile = pathArray.shift();
  var currentPointer = null;

  try {
    currentPointer = __webpack_require__("./resources/js/config sync recursive ^\\.\\/.*$")("./" + configFile)["default"];
  } catch (_unused) {
    console.log('config 파일을 불러오는데 오류가 발생했습니다. [' + configFile + ']');
  }

  if (!currentPointer) {
    return '';
  }

  for (var i = 0; i < pathArray.length; i++) {
    if (pathArray[i] in currentPointer) {
      currentPointer = currentPointer[pathArray[i]];
    } else {
      console.log(configFile + ' 설정파일에 ' + pathArray[i] + ' 설정값이 존재하지 않습니다. [' + configFile + '.' + pathArray.toString().replace(',', '.') + ']');
      return '';
    }
  }

  return currentPointer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ "./resources/js/config/templete.js":
/*!*****************************************!*\
  !*** ./resources/js/config/templete.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _config = {
  palette: {
    primary: {
      main: '#6a02ff'
    },
    secondary: {
      main: '#005dff'
    },
    bgColor: {
      main: '#fafafa'
    },
    kakao: {
      main: '#fee500'
    },
    naver: {
      main: '#03c75a'
    },
    google: {
      main: '#ea4335'
    },
    facebook: {
      main: '#1877f2'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 1160,
      lg: 1366,
      xl: 1440
    }
  },
  width: {
    primary: {
      desktop: '1024px',
      mobile: '1024px'
    },
    secondary: {
      desktop: '300px',
      mobile: '300px'
    },
    drawer: {
      desktop: '320px',
      mobile: '280px'
    }
  },
  height: {
    headerAppBar: {
      desktop: '60px',
      mobile: '50px'
    }
  },
  margin: {
    "default": {
      desktop: '20px',
      mobile: '10px'
    }
  },
  zIndex: {
    desktopDrawer: 900,
    headerAppBar: 1190,
    mobileNavigation: 1190
  },
  border: {
    1: '1px solid #eeeeee'
  },
  borderRadius: {
    1: '4px',
    2: '6px'
  },
  boxShadow: {
    1: '0 2px 5px 1px rgba(0, 0, 0, 0.15)',
    2: '0 2px 5px 1px rgba(0, 0, 0, 0.30)'
  },
  gradient: {
    primary: 'linear-gradient(90deg, rgba(106,2,255,1) 0%, rgba(0,93,255,1) 100%)',
    secondary: 'linear-gradient(0deg, rgba(70, 67, 122, 1) 0%, rgba(73, 70, 128, 1) 35%, rgba(73, 70, 128, 1) 65%, rgba(70, 67, 122, 1) 100%)',
    silver: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(247, 247, 247, 1) 40%, rgba(254, 254, 254, 1) 100%)'
  },
  fontFamily: {
    1: 'Noto Sans KR'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config);

/***/ }),

/***/ "./resources/js/index.jsx":
/*!********************************!*\
  !*** ./resources/js/index.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _system_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system/App */ "./resources/js/system/App.jsx");
/* harmony import */ var _redux_Reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/Reducers */ "./resources/js/redux/Reducers/index.js");
/* harmony import */ var _standalones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standalones */ "./resources/js/standalones/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.xsrfCookieName) = 'XSRF-TOKEN';
(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.xsrfHeaderName) = 'X-XSRF-TOKEN';
(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.withCredentials) = true;
var store = (0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)(_redux_Reducers__WEBPACK_IMPORTED_MODULE_5__.default);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: store,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/user/signup",
        component: _standalones__WEBPACK_IMPORTED_MODULE_6__.SignUp
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/user/signin",
        component: _standalones__WEBPACK_IMPORTED_MODULE_6__.SignIn
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/user/signout",
        component: _standalones__WEBPACK_IMPORTED_MODULE_6__.SignOut
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/",
        component: _system_App__WEBPACK_IMPORTED_MODULE_4__.default
      })]
    })
  })
}), document.getElementById('app'));

/***/ }),

/***/ "./resources/js/pages/Analytics.jsx":
/*!******************************************!*\
  !*** ./resources/js/pages/Analytics.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_icons_PlaylistAddRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PlaylistAddRounded */ "./node_modules/@material-ui/icons/PlaylistAddRounded.js");
/* harmony import */ var _material_ui_icons_HistoryRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/HistoryRounded */ "./node_modules/@material-ui/icons/HistoryRounded.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _analytics_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics/pages */ "./resources/js/pages/analytics/pages/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function Analytics() {
  _services_common__WEBPACK_IMPORTED_MODULE_3__.init();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    submenus: [{
      name: 'URL 추가',
      path: '/analytics/add',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons_PlaylistAddRounded__WEBPACK_IMPORTED_MODULE_5__.default, {})
    }, {
      name: '여론분석 통계',
      path: '/analytics/history',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons_HistoryRounded__WEBPACK_IMPORTED_MODULE_6__.default, {})
    }],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
        exact: true,
        path: "/analytics",
        component: _analytics_pages__WEBPACK_IMPORTED_MODULE_2__.Home
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
        path: "/analytics/history",
        component: _analytics_pages__WEBPACK_IMPORTED_MODULE_2__.History
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
        path: "/analytics/add",
        component: _analytics_pages__WEBPACK_IMPORTED_MODULE_2__.AddForm
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/pages/App.jsx":
/*!************************************!*\
  !*** ./resources/js/pages/App.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_icons_DesignServicesRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/DesignServicesRounded */ "./node_modules/@material-ui/icons/DesignServicesRounded.js");
/* harmony import */ var _material_ui_icons_BubbleChartRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/BubbleChartRounded */ "./node_modules/@material-ui/icons/BubbleChartRounded.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _app_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/pages */ "./resources/js/pages/app/pages/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function App() {
  _services_common__WEBPACK_IMPORTED_MODULE_3__.init();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    submenus: [{
      name: '서비스 소개',
      path: '/app/introduction',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons_DesignServicesRounded__WEBPACK_IMPORTED_MODULE_5__.default, {})
    }, {
      name: '뉴스댓글여론 분석기',
      path: '/analytics',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons_BubbleChartRounded__WEBPACK_IMPORTED_MODULE_6__.default, {})
    }],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
        exact: true,
        path: "/app",
        component: _app_pages__WEBPACK_IMPORTED_MODULE_2__.Home
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
        path: "/app/introduction",
        component: _app_pages__WEBPACK_IMPORTED_MODULE_2__.Introduction
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/pages/Home.jsx":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_DesignServicesRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/DesignServicesRounded */ "./node_modules/@material-ui/icons/DesignServicesRounded.js");
/* harmony import */ var _material_ui_icons_BubbleChartRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/BubbleChartRounded */ "./node_modules/@material-ui/icons/BubbleChartRounded.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Home() {
  _services_common__WEBPACK_IMPORTED_MODULE_2__.init();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    submenus: [{
      name: '서비스 소개',
      path: '/app/introduction',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_DesignServicesRounded__WEBPACK_IMPORTED_MODULE_4__.default, {})
    }, {
      name: '뉴스댓글여론 분석기',
      path: '/analytics',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_BubbleChartRounded__WEBPACK_IMPORTED_MODULE_5__.default, {})
    }],
    children: "\uCCAB \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/pages/User.jsx":
/*!*************************************!*\
  !*** ./resources/js/pages/User.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _user_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/pages */ "./resources/js/pages/user/pages/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var _sass_routes_user_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sass/routes/user.scss */ "./resources/sass/routes/user.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function User() {
  _services_common__WEBPACK_IMPORTED_MODULE_3__.init();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    submenus: "\uC67C\uCABD",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
        exact: true,
        path: "/user",
        component: _user_pages__WEBPACK_IMPORTED_MODULE_2__.Home
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/pages/analytics/pages/AddForm.jsx":
/*!********************************************************!*\
  !*** ./resources/js/pages/analytics/pages/AddForm.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/InputAdornment/InputAdornment.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/TableContainer/TableContainer.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/TableRow.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Alert */ "./node_modules/@material-ui/core/Alert/Alert.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/Link.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


















function AddForm() {
  var ref = {
    url: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null)
  };
  var data = [{
    id: 1,
    subject: '바이든 "코로나 정보 차단 中, 끝까지 밝혀낼 것" 맹비난',
    url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=104&oid=014&aid=0004699339',
    created_at: 'timestamp'
  }, {
    id: 2,
    subject: '평택 미군 기지서 코로나19 확진자 11명 추가 발생',
    url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=100&oid=003&aid=0010688444',
    created_at: 'timestamp'
  }, {
    id: 3,
    subject: '50대 1차 백신 접종 오늘 마무리…접종률 약 80%',
    url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=102&oid=437&aid=0000274831',
    created_at: 'timestamp'
  }, {
    id: 4,
    subject: '코로나 백신 접종 완료율 28%...OECD 대부분 30% 이상',
    url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=105&oid=029&aid=0002694132',
    created_at: 'timestamp'
  }, {
    id: 5,
    subject: '[뉴스쉽] 보건소 "잘 몰라" 질병청 "통화 중"…백신 궁금하면 드루와',
    url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=103&oid=055&aid=0000917499',
    created_at: 'timestamp'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Alert__WEBPACK_IMPORTED_MODULE_4__.default, {
      severity: "info",
      sx: {
        marginBottom: '40px'
      },
      children: "\uD604\uC7AC \uB0A8\uC740 \uC694\uCCAD\uAC00\uB2A5 \uD69F\uC218\uB294 00\uD68C\uC785\uB2C8\uB2E4."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
      sx: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: '30px',
        maxWidth: {
          xs: 'none',
          md: '600px'
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {
        fullWidth: true,
        ref: ref.url,
        label: "\uC0C8\uB85C \uCD94\uAC00\uD560 URL",
        InputProps: {
          startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_7__.default, {
            position: "start",
            children: "http://"
          })
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
        variant: "contained",
        disableElevation: true,
        sx: {
          width: '200px',
          height: '56px',
          marginLeft: '15px',
          fontSize: '1rem',
          fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.fontFamily.1')
        },
        children: "URL \uCD94\uAC00\uD558\uAE30"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
      sx: {
        marginBottom: '20px',
        fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.fontFamily.1'),
        fontWeight: 'bold',
        fontSize: '1rem'
      },
      children: "\uD604\uC7AC\uAE4C\uC9C0 \uCD94\uAC00\uB41C \uB274\uC2A4\uAE30\uC0AC URL\uC740 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4. \uBAA9\uB85D\uC5D0\uC11C \uC544\uC774\uD15C\uC744 \uC0AD\uC81C\uD558\uB354\uB77C\uB3C4 \uC694\uCCAD\uAC00\uB2A5 \uD69F\uC218\uAC00 \uB298\uC5B4\uB098\uC9C0 \uC54A\uC73C\uB2C8 \uC0AD\uC81C \uC804\uC5D0\uB294 \uC2E0\uC911\uD788 \uACE0\uB824\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__.default, {
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__.default,
      sx: {
        width: '100%',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__.default, {
        sx: {
          minWidth: '650px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__.default, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__.default, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__.default, {
              align: "center",
              children: "\uC21C\uBC88"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__.default, {
              children: "\uB274\uC2A4\uC81C\uBAA9"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__.default, {
              align: "center",
              children: "\uCD94\uAC00\uD55C \uB0A0\uC9DC"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__.default, {})]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_15__.default, {
          children: data.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__.default, {
              sx: {
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__.default, {
                component: "th",
                scope: "row",
                align: "center",
                children: item.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__.default, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__.default, {
                  href: item.url,
                  target: "_blank",
                  sx: {
                    color: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.palette.primary.main'),
                    opacity: '0.8',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    transition: 'opacity 0.5s ease-out',
                    '&:hover': {
                      opacity: '1'
                    },
                    '&:active': {
                      opacity: '0.8'
                    }
                  },
                  children: item.subject
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__.default, {
                align: "center",
                children: item.created_at
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__.default, {
                align: "center",
                children: "\uC0AD\uC81C"
              })]
            }, "news_items-".concat(index));
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/pages/analytics/pages/History.jsx":
/*!********************************************************!*\
  !*** ./resources/js/pages/analytics/pages/History.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/PieChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/polar/Pie.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Cell.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Legend.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function History() {
  var colors = ['#00c7a3', '#bb0000'];
  var data = [[{
    name: '긍정적',
    value: 400
  }, {
    name: '부정적',
    value: 300
  }], [{
    name: '긍정적',
    value: 200
  }, {
    name: '부정적',
    value: 300
  }], [{
    name: '긍정적',
    value: 100
  }, {
    name: '부정적',
    value: 300
  }], [{
    name: '긍정적',
    value: 600
  }, {
    name: '부정적',
    value: 300
  }], [{
    name: '긍정적',
    value: 10000
  }, {
    name: '부정적',
    value: 300
  }]];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      container: true,
      rowSpacing: 10,
      children: data.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
          item: true,
          xs: 12,
          md: 6,
          xl: 4,
          sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
            sx: {
              fontSize: '1.1rem',
              fontWeight: 'bold',
              fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.fontFamily.1')
            },
            children: ["\uB274\uC2A4\uAE30\uC0AC \uC5EC\uB860\uB3D9\uD5A5 ", index + 1]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_6__.PieChart, {
            width: 400,
            height: 300,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.Pie, {
              data: item,
              cx: "50%",
              cy: "50%",
              labelLine: false,
              outerRadius: 80,
              fill: "#8884d8",
              dataKey: "value",
              children: item.map(function (entry, subindex) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_8__.Cell, {
                  fill: colors[subindex % colors.length]
                }, "cell-".concat(index, "-").concat(subindex));
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_9__.Legend, {})]
          }, "graph-".concat(index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
            sx: {
              marginTop: '20px',
              fontSize: '0.8rem',
              fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.fontFamily.1'),
              color: '#cccccc'
            },
            children: "\uCD5C\uC885 \uBD84\uC11D\uC77C: 2021\uB144 00\uC6D4 00\uC77C"
          })]
        }, "graph-".concat(index));
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/pages/analytics/pages/Home.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/pages/analytics/pages/Home.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: "\uC5EC\uB860\uBD84\uC11D \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/pages/analytics/pages/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/pages/analytics/pages/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "History": () => (/* reexport safe */ _History__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "AddForm": () => (/* reexport safe */ _AddForm__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/analytics/pages/Home.jsx");
/* harmony import */ var _History__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./History */ "./resources/js/pages/analytics/pages/History.jsx");
/* harmony import */ var _AddForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddForm */ "./resources/js/pages/analytics/pages/AddForm.jsx");





/***/ }),

/***/ "./resources/js/pages/app/pages/Home.jsx":
/*!***********************************************!*\
  !*** ./resources/js/pages/app/pages/Home.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
function Home() {
  return '뉴스댓글 여론분석기 서비스';
}

/***/ }),

/***/ "./resources/js/pages/app/pages/Introduction.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/pages/app/pages/Introduction.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Introduction)
/* harmony export */ });
function Introduction() {
  return '서비스 소개';
}

/***/ }),

/***/ "./resources/js/pages/app/pages/index.js":
/*!***********************************************!*\
  !*** ./resources/js/pages/app/pages/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Introduction": () => (/* reexport safe */ _Introduction__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/app/pages/Home.jsx");
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Introduction */ "./resources/js/pages/app/pages/Introduction.jsx");




/***/ }),

/***/ "./resources/js/pages/index.js":
/*!*************************************!*\
  !*** ./resources/js/pages/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "App": () => (/* reexport safe */ _App__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Analytics": () => (/* reexport safe */ _Analytics__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "User": () => (/* reexport safe */ _User__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/Home.jsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./resources/js/pages/App.jsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Analytics */ "./resources/js/pages/Analytics.jsx");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./resources/js/pages/User.jsx");






/***/ }),

/***/ "./resources/js/pages/user/pages/Home.jsx":
/*!************************************************!*\
  !*** ./resources/js/pages/user/pages/Home.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "\uD68C\uC6D0\uAD00\uB9AC"
  });
}

/***/ }),

/***/ "./resources/js/pages/user/pages/index.js":
/*!************************************************!*\
  !*** ./resources/js/pages/user/pages/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/user/pages/Home.jsx");



/***/ }),

/***/ "./resources/js/redux/Actions/App.js":
/*!*******************************************!*\
  !*** ./resources/js/redux/Actions/App.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setRoute": () => (/* binding */ setRoute),
/* harmony export */   "setTitle": () => (/* binding */ setTitle),
/* harmony export */   "setURI": () => (/* binding */ setURI),
/* harmony export */   "setMobileDrawer": () => (/* binding */ setMobileDrawer)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./resources/js/redux/constants.js");

var setRoute = function setRoute(tab) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.route,
    state: tab
  };
};
var setTitle = function setTitle(title) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.title,
    state: title
  };
};
var setURI = function setURI(uri) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.uri,
    state: uri
  };
};
var setMobileDrawer = function setMobileDrawer(open) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.mobileDrawerOpen,
    state: open
  };
};

/***/ }),

/***/ "./resources/js/redux/Reducers/App.jsx":
/*!*********************************************!*\
  !*** ./resources/js/redux/Reducers/App.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./resources/js/redux/constants.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./resources/js/config/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialStates = {
  title: null,
  route: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('app.route.home'),
  uri: '/',
  mobileDrawerOpen: false
};

function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStates;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.route:
      return _objectSpread(_objectSpread({}, state), {}, {
        route: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.title:
      return _objectSpread(_objectSpread({}, state), {}, {
        title: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.uri:
      return _objectSpread(_objectSpread({}, state), {}, {
        uri: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.mobileDrawerOpen:
      return _objectSpread(_objectSpread({}, state), {}, {
        mobileDrawerOpen: action.state
      });
      break;
  }

  return state;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./resources/js/redux/Reducers/index.js":
/*!**********************************************!*\
  !*** ./resources/js/redux/Reducers/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./resources/js/redux/Reducers/App.jsx");


var Reducers = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  app: _App__WEBPACK_IMPORTED_MODULE_0__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reducers);

/***/ }),

/***/ "./resources/js/redux/constants.js":
/*!*****************************************!*\
  !*** ./resources/js/redux/constants.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var reduxConstants = {
  app: {
    title: 'APP_DOCUMENT_TITLE',
    route: 'APP_ROUTE',
    uri: 'APP_URI',
    headerIcons: 'APP_HEADER_ICONS',
    mobileDrawerOpen: 'APP_MOBILE_DRAWER'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reduxConstants);

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var routes = {
  '/': {
    tabName: 'home',
    component: 'Home',
    title: '첫 페이지'
  },
  app: {
    tabName: 'app',
    component: 'App',
    title: '뉴스댓글 여론분석 서비스',
    children: {
      introduction: {
        title: '서비스 소개'
      }
    }
  },
  analytics: {
    tabName: 'analytics',
    component: 'Analytics',
    title: '뉴스댓글 여론분석',
    children: {
      history: {
        title: '뉴스댓글 여론분석 과거통계'
      },
      add: {
        title: '뉴스댓글 여론분석을 위한 URL 추가'
      }
    }
  },
  user: {
    tabName: 'user',
    component: 'User',
    title: '마이페이지',
    children: {
      signup: {
        title: '회원가입'
      },
      signin: {
        title: '회원로그인'
      },
      signout: {
        title: '로그아웃'
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./resources/js/services/Cookie/index.jsx":
/*!************************************************!*\
  !*** ./resources/js/services/Cookie/index.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookie": () => (/* binding */ getCookie)
/* harmony export */ });
var getCookie = function getCookie(name) {
  var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? decodeURIComponent(value[2]) : null;
};

/***/ }),

/***/ "./resources/js/services/Kakao/index.jsx":
/*!***********************************************!*\
  !*** ./resources/js/services/Kakao/index.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "check": () => (/* binding */ check)
/* harmony export */ });
/* harmony import */ var _Cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cookie */ "./resources/js/services/Cookie/index.jsx");

/**
 * 카카오로그인 토큰 생성여부를 확인하여, 액세스 토큰을 생성
 */

var check = function check() {
  var kakao_token = (0,_Cookie__WEBPACK_IMPORTED_MODULE_0__.getCookie)('kakao_access_token');

  if (kakao_token) {
    Kakao.Auth.setAccessToken(kakao_token);
    Kakao.Auth.getStatusInfo(function (_ref) {
      var status = _ref.status;

      if (status === 'connected') {
        console.log('카카오로그인 완료 : ' + Kakao.Auth.getAccessToken());
      } else {
        Kakao.Auth.setAccessToken(null);
        console.log('유효하지 않은 카카오로그인 토큰');
      }
    });
  }
};

/***/ }),

/***/ "./resources/js/services/browser.js":
/*!******************************************!*\
  !*** ./resources/js/services/browser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollTop": () => (/* binding */ scrollTop),
/* harmony export */   "changeTitle": () => (/* binding */ changeTitle),
/* harmony export */   "getCookie": () => (/* binding */ getCookie)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");

var scrollTop = function scrollTop() {
  window.scrollTo(0, 0);
};
var changeTitle = function changeTitle(title) {
  if (typeof title == 'string' && title.length > 0) {
    document.title = title + ' | ' + (0,_config__WEBPACK_IMPORTED_MODULE_0__.default)('app.name');
  } else {
    document.title = (0,_config__WEBPACK_IMPORTED_MODULE_0__.default)('app.name');
  }
};
var getCookie = function getCookie(name) {
  var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? decodeURIComponent(value[2]) : null;
};

/***/ }),

/***/ "./resources/js/services/common.js":
/*!*****************************************!*\
  !*** ./resources/js/services/common.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./resources/js/services/browser.js");
/* harmony import */ var _redux_Actions_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/Actions/App */ "./resources/js/redux/Actions/App.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./resources/js/routes.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function init() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var currentTab = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.route;
  });
  var currentURI = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.uri;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 현재 페이지의 메타데이터를 가져옴
    var metaData = getMetaData(); // 리덕스 컨테이너에 저장된 값과 현재 페이지의 메타데이터가 다른 경우 리덕스 컨테이너 및 웹브라우저 타이틀 업데이트

    if ((0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('app.route')[metaData['tabName']] != currentTab) {
      // 메타데이터에 저장된 탭정보를 리덕스에 전달
      dispatch((0,_redux_Actions_App__WEBPACK_IMPORTED_MODULE_3__.setRoute)((0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('app.route')[metaData['tabName']]));
    }
  }, [currentTab]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 현재 페이지의 메타데이터를 가져옴
    var metaData = getMetaData(); // 페이지 제목 변경

    _browser__WEBPACK_IMPORTED_MODULE_2__.changeTitle(metaData['title']); // 웹브라우저 스크롤를 최상단으로 이동시킴

    _browser__WEBPACK_IMPORTED_MODULE_2__.scrollTop();
  }, [currentURI]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_Actions_App__WEBPACK_IMPORTED_MODULE_3__.setURI)(window.location.pathname));
  });
}

var getMetaData = function getMetaData() {
  // 현재 디렉토리 경로를 배열로 저장
  var currentPathArray = window.location.pathname.split('/'); // 현재 디렉토리에 해당하는 탭 이름을 문자열로 저장

  var currentTabName = 'default'; // 현재 디렉토리에 해당하는 타이틀을 문자열로 저장

  var currentDocumentTitle = ''; // 현재 경로가 어떤 탭 이름과 일치하는지 확인

  for (var _i = 0, _Object$entries = Object.entries(_routes__WEBPACK_IMPORTED_MODULE_5__.default); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        path = _Object$entries$_i[0],
        routeItem = _Object$entries$_i[1];

    if (path.replace('/', '') == currentPathArray[1]) {
      if ('tabName' in routeItem) {
        currentTabName = routeItem['tabName'];
      }

      if ('title' in routeItem) {
        currentDocumentTitle = routeItem['title'];
      }

      if ('children' in routeItem) {
        var depth = 2;
        var childItem = routeItem['children'];

        while (true) {
          if (currentPathArray[depth] in childItem) {
            childItem = childItem[currentPathArray[depth]];

            if ('tabName' in childItem) {
              currentTabName = childItem['tabName'];
            }

            if ('title' in childItem) {
              currentDocumentTitle = childItem['title'];
            }

            if ('children' in childItem) {
              childItem = childItem['children'];
              depth++;
            } else {
              break;
            }
          } else {
            break;
          }
        }
      }
    } else {// 지정되지 않은 경로로 접근했을 경우 어떻게 처리해야하는가?
    }
  }

  return {
    tabName: currentTabName,
    title: currentDocumentTitle
  };
};

/***/ }),

/***/ "./resources/js/standalones/SignIn.jsx":
/*!*********************************************!*\
  !*** ./resources/js/standalones/SignIn.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Google__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Google */ "./node_modules/@material-ui/icons/Google.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function SignIn() {
  _services_common__WEBPACK_IMPORTED_MODULE_1__.init();

  var SignInKakao = function SignInKakao() {
    Kakao.Auth.authorize({
      redirectUri: 'http://newsreply.erzsphilos.com/oauth/kakao'
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: '10px',
      boxSizing: 'border-box'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '450px',
        width: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
        component: "h4",
        sx: {
          textAlign: 'center',
          fontSize: '1.5rem'
        },
        children: "\uD68C\uC6D0 \uB85C\uADF8\uC778"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
        sx: {
          width: '100%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
          method: "post",
          action: "/user/login",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            sx: {
              margin: '15px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__.default, {
              id: "user-email",
              name: "email",
              label: "\uC774\uBA54\uC77C",
              variant: "outlined",
              fullWidth: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            sx: {
              margin: '15px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__.default, {
              id: "user-password",
              name: "password",
              type: "password",
              label: "\uD328\uC2A4\uC6CC\uB4DC",
              variant: "outlined",
              fullWidth: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            sx: {
              margin: '15px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
              variant: "contained",
              color: "primary",
              size: "large",
              disableElevation: true,
              fullWidth: true,
              children: "\uB85C\uADF8\uC778"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: '10px 0px 30px 0px',
          '& .item': {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '50px',
            boxSizing: 'border-box',
            marginBottom: '10px',
            alignItems: 'center',
            borderRadius: '5px',
            cursor: 'pointer',
            '&:last-of-type': {
              marginBottom: '0px'
            },
            '& .icon': {
              width: '50px',
              height: '30px',
              flexGrow: 0,
              flexShrink: 0,
              boxSizing: 'border-box',
              borderRight: '1px solid rgba(245, 245, 245, 0.3)',
              padding: '3px 0px',
              textAlign: 'center',
              '& svg': {
                width: '1em',
                height: '1em',
                display: 'inline-block',
                fontSize: '1.5rem',
                flexShrink: 0,
                userSelect: 'none',
                fill: '#ffffff',
                color: '#ffffff'
              }
            },
            '& .text': {
              flexGrow: '1',
              fontSize: '1.1em',
              fontWeight: 'bold',
              boxSizing: 'border-box',
              paddingLeft: '15px',
              color: '#ffffff'
            },
            '&.facebook': {
              backgroundColor: 'rgba(24, 119, 242, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(24, 119, 242, 1)'
              }
            },
            '&.twitter': {
              backgroundColor: 'rgba(26, 145, 218, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(26, 145, 218, 1)'
              }
            },
            '&.naver': {
              backgroundColor: 'rgba(3, 199, 90, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(3, 199, 90, 1)'
              }
            },
            '&.kakao': {
              backgroundColor: 'rgba(255, 205, 0, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255, 205, 0, 1)'
              }
            },
            '&.google': {
              backgroundColor: 'rgba(234, 67, 53, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(234, 67, 53, 1)'
              }
            }
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
          component: "h4",
          sx: {
            fontSize: '1.5em',
            textAlign: 'center',
            marginBottom: '25px'
          },
          children: "\uC18C\uC15C\uACC4\uC815 \uB85C\uADF8\uC778"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "item facebook",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "text",
            children: "\uD398\uC774\uC2A4\uBD81 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "item twitter",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "text",
            children: "\uD2B8\uC704\uD130 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "item naver",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon", {
                points: "16.116 12.807 7.546 0.54 0.443 0.54 0.443 23.46 7.884 23.46 7.884 11.193 16.454 23.46 23.557 23.46 23.557 0.54 16.116 0.54 16.116 12.807"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "text",
            children: "\uB124\uC774\uBC84 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "item kakao",
          onClick: SignInKakao,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                d: "M12,.744C5.851.744.25,4.828.25,9.866c0,3.132,2.034,5.9,5.132,7.537l-1.3,4.785a.481.481,0,0,0,.736.516l5.714-3.79c.482.047.973.073,1.471.073,6.49,0,11.75-4.083,11.75-9.121S18.49.744,12,.744"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "text",
            children: "\uCE74\uCE74\uC624 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "item google",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Google__WEBPACK_IMPORTED_MODULE_8__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "text",
            children: "\uAD6C\uAE00 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"
          })]
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/standalones/SignOut.jsx":
/*!**********************************************!*\
  !*** ./resources/js/standalones/SignOut.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignOut)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");


function SignOut() {
  _services_common__WEBPACK_IMPORTED_MODULE_1__.init();
  return '로그아웃';
}

/***/ }),

/***/ "./resources/js/standalones/SignUp.jsx":
/*!*********************************************!*\
  !*** ./resources/js/standalones/SignUp.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUp)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");


function SignUp() {
  _services_common__WEBPACK_IMPORTED_MODULE_1__.init();
  return '회원가입';
}

/***/ }),

/***/ "./resources/js/standalones/index.js":
/*!*******************************************!*\
  !*** ./resources/js/standalones/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUp": () => (/* reexport safe */ _SignUp__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "SignIn": () => (/* reexport safe */ _SignIn__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "SignOut": () => (/* reexport safe */ _SignOut__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp */ "./resources/js/standalones/SignUp.jsx");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn */ "./resources/js/standalones/SignIn.jsx");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignOut */ "./resources/js/standalones/SignOut.jsx");





/***/ }),

/***/ "./resources/js/system/App.jsx":
/*!*************************************!*\
  !*** ./resources/js/system/App.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./resources/js/system/Layout.jsx");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages */ "./resources/js/pages/index.js");
/* harmony import */ var _services_Kakao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Kakao */ "./resources/js/services/Kakao/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





/**
 * 각종 소셜로그인 기능에 따라 서비스에 로그인되었는지 확인 (5초마다)
 */




var checkOAuthTokens = function checkOAuthTokens() {
  _services_Kakao__WEBPACK_IMPORTED_MODULE_3__.check();
};

checkOAuthTokens();
setInterval(checkOAuthTokens, 1000);
function App() {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    (function () {
      var w = window;

      if (w.ChannelIO) {
        return (window.console.error || window.console.log || function () {})('ChannelIO script included twice.');
      }

      var ch = function ch() {
        ch.c(arguments);
      };

      ch.q = [];

      ch.c = function (args) {
        ch.q.push(args);
      };

      w.ChannelIO = ch;

      function l() {
        if (w.ChannelIOInitialized) {
          return;
        }

        w.ChannelIOInitialized = true;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        s.charset = 'UTF-8';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }

      if (document.readyState === 'complete') {
        l();
      } else if (window.attachEvent) {
        window.attachEvent('onload', l);
      } else {
        window.addEventListener('DOMContentLoaded', l, false);
        window.addEventListener('load', l, false);
      }
    })();

    ChannelIO('boot', {
      pluginKey: 'e3ce5769-e77f-410a-a001-53147f83732c'
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        exact: true,
        path: "/",
        component: _pages__WEBPACK_IMPORTED_MODULE_2__.Home
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/app",
        component: _pages__WEBPACK_IMPORTED_MODULE_2__.App
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/analytics",
        component: _pages__WEBPACK_IMPORTED_MODULE_2__.Analytics
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/user",
        component: _pages__WEBPACK_IMPORTED_MODULE_2__.User
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/system/Container.jsx":
/*!*******************************************!*\
  !*** ./resources/js/system/Container.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemButton */ "./node_modules/@material-ui/core/ListItemButton/ListItemButton.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/Avatar.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function Container(_ref) {
  var submenus = _ref.submenus,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__.default, {
      variant: "permanent",
      anchor: "left",
      sx: {
        position: 'fixed',
        display: {
          xs: 'none',
          md: 'flex'
        },
        width: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('templete.width.drawer.desktop'),
        '& .MuiPaper-root': {
          display: 'flex',
          width: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('templete.width.drawer.desktop'),
          height: '100%',
          backgroundColor: '#ffffff',
          border: '0px',
          zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('templete.zIndex.desktopDrawer'),
          boxSizing: 'border-box',
          boxShadow: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('templete.boxShadow.1'),
          paddingTop: {
            md: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('templete.height.headerAppBar.desktop') + ' + 10px)'
          }
        }
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__.default, {
        sx: {
          width: '100%',
          backgroundColor: '#ffffff',
          '& .MuiListItemButton-root': {
            borderRadius: '5px'
          }
        },
        children: _typeof(submenus) == 'object' ? submenus.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_6__.default, {
              component: react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link,
              to: item.path,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__.default, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__.default, {
                  children: item.icon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__.default, {
                primary: item.name
              })]
            })
          }, "submenu-".concat(index));
        }) : ''
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
      item: true,
      sx: {
        width: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('templete.width.drawer.desktop'),
        paddingRight: '20px',
        flexGrow: 0,
        flexShrink: 0,
        boxSizing: 'border-box',
        display: {
          xs: 'none',
          md: 'block'
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
      item: true,
      sx: {
        flexGrow: 1,
        flexShrink: 1,
        overflowX: 'auto',
        boxSizing: 'border-box'
      },
      children: children
    })]
  });
}

/***/ }),

/***/ "./resources/js/system/Header.jsx":
/*!****************************************!*\
  !*** ./resources/js/system/Header.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/AppBar.js");
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderNavigation */ "./resources/js/system/HeaderNavigation.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Header() {
  var refAppBar = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        refAppBar.current.classList.add('shadow');
      } else {
        refAppBar.current.classList.remove('shadow');
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__.default, {
    position: "fixed",
    ref: refAppBar,
    sx: {
      backgroundColor: '#ffffff',
      background: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.gradient.primary'),
      boxShadow: 'none',
      transition: 'box-shadow 1s ease-out',
      zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.zIndex.headerAppBar'),
      '&.shadow': {
        boxShadow: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.boxShadow.2')
      }
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_1__.default, {})
  });
}

/***/ }),

/***/ "./resources/js/system/HeaderNavigation.jsx":
/*!**************************************************!*\
  !*** ./resources/js/system/HeaderNavigation.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/Link.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_icons_MenuRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MenuRounded */ "./node_modules/@material-ui/icons/MenuRounded.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var _navigationLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigationLinks */ "./resources/js/system/navigationLinks.js");
/* harmony import */ var _redux_Actions_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/Actions/App */ "./resources/js/redux/Actions/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











function HeaderNavigation() {
  var mobileDrawerOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.mobileDrawerOpen;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var ref = {
    container: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    subContainer: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null)
  };

  var toggleMobileDrawer = function toggleMobileDrawer() {
    dispatch((0,_redux_Actions_App__WEBPACK_IMPORTED_MODULE_4__.setMobileDrawer)(!mobileDrawerOpen));
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (ref.subContainer.current.offsetWidth > ref.container.current.offsetWidth) {
      ref.container.current.classList.add('scrolling');
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
      sx: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '10px',
        width: '100%',
        fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.fontFamily.1'),
        height: {
          xs: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.height.headerAppBar.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.height.headerAppBar.desktop')
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
        onClick: toggleMobileDrawer,
        sx: {
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexGrow: 0,
          flexShrink: 0,
          width: '40px',
          fontSize: '1rem',
          cursor: 'pointer',
          display: {
            xs: 'flex',
            md: 'none'
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_MenuRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
        sx: {
          display: 'flex',
          justifyContent: 'flex-start',
          flexGrow: 0,
          flexShrink: 0,
          marginRight: {
            xs: '30px',
            md: '40px'
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
          component: "span",
          onClick: function onClick() {
            window.location.href = '/';
          },
          sx: {
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: {
              xs: '1rem',
              md: '1.1rem'
            }
          },
          children: "NewsReply"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
        component: "ul",
        ref: ref.container,
        sx: {
          display: 'flex',
          flexDirection: 'row',
          flexShrink: 1,
          flexWrap: 'nowrap',
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          listStyle: 'none',
          width: '100%',
          height: '100%',
          margin: '0px',
          padding: '0px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
          ref: ref.subContainer,
          sx: {
            display: 'flex',
            flexDirection: 'row',
            flexShrink: 0,
            flexWrap: 'nowrap'
          },
          children: _navigationLinks__WEBPACK_IMPORTED_MODULE_3__.default.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
              component: "li",
              sx: {
                display: 'flex',
                alignItems: 'center',
                flexGrow: 0,
                flexShrink: 0,
                boxSizing: 'border-box',
                color: '#ffffff',
                fontSize: {
                  xs: '0.9rem',
                  md: '1rem'
                },
                marginRight: {
                  xs: '20px',
                  md: '20px'
                },
                '&:last-of-type': {
                  marginRight: '0px'
                },
                '& a': {
                  display: 'block',
                  color: 'inherit',
                  textDecoration: 'none',
                  opacity: '0.8',
                  webkitTapHighlightColor: 'transparent',
                  userSelect: 'none',
                  transition: 'opacity 0.3s ease-out, transform 0.1s ease-out',
                  '&:hover': {
                    opacity: '1'
                  },
                  '&:active': {
                    transform: 'scale(0.9, 0.9)'
                  }
                }
              },
              children: 'standalone' in item && item.standalone === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__.default, {
                href: item.path,
                children: item.name
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
                to: item.path,
                children: item.name
              })
            }, "headerNavigation-".concat(index));
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/system/Layout.jsx":
/*!****************************************!*\
  !*** ./resources/js/system/Layout.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/system/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/createTheme.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./resources/js/system/Header.jsx");
/* harmony import */ var _MobileDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileDrawer */ "./resources/js/system/MobileDrawer.jsx");
/* harmony import */ var _MobileNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileNavigation */ "./resources/js/system/MobileNavigation.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default, {
    theme: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)({
      palette: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.palette'),
      breakpoints: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.breakpoints')
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MobileDrawer__WEBPACK_IMPORTED_MODULE_2__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
      container: true,
      sx: {
        flexWrap: 'nowrap',
        paddingTop: {
          xs: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.height.headerAppBar.mobile') + ' + 10px)',
          md: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.height.headerAppBar.desktop') + ' + 10px)'
        },
        paddingLeft: {
          xs: '0px',
          md: '10px'
        },
        paddingRight: {
          xs: '0px',
          md: '10px'
        }
      },
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MobileNavigation__WEBPACK_IMPORTED_MODULE_3__.default, {})]
  });
}

/***/ }),

/***/ "./resources/js/system/MobileDrawer.jsx":
/*!**********************************************!*\
  !*** ./resources/js/system/MobileDrawer.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileDrawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/Link.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/Avatar.js");
/* harmony import */ var _material_ui_icons_PersonRounded__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PersonRounded */ "./node_modules/@material-ui/icons/PersonRounded.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _redux_Actions_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/Actions/App */ "./resources/js/redux/Actions/App.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var _navigationLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigationLinks */ "./resources/js/system/navigationLinks.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function MobileDrawer() {
  var mobileDrawerOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.mobileDrawerOpen;
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mobileDrawerSubMenuOpen = _React$useState2[0],
      setMobileDrawerSubMenuOpen = _React$useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var toggleMobileDrawer = function toggleMobileDrawer() {
    dispatch((0,_redux_Actions_App__WEBPACK_IMPORTED_MODULE_2__.setMobileDrawer)(!mobileDrawerOpen));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__.default, {
    anchor: "left",
    open: mobileDrawerOpen,
    onClose: toggleMobileDrawer,
    sx: {
      '& .MuiPaper-root': {
        width: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.width.drawer.mobile'),
        backgroundColor: '#000000',
        padding: '10px',
        color: '#ffffff'
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
      sx: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
        sx: {
          marginRight: '20px',
          '& .MuiAvatar-root': {
            width: '56px',
            height: '56px'
          },
          '& svg': {
            width: '32px',
            height: '32px'
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_PersonRounded__WEBPACK_IMPORTED_MODULE_9__.default, {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
        sx: {
          flexGrow: 1,
          fontSize: '1.2em',
          textAlign: 'center',
          '& a': {
            fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.fontFamily.1'),
            color: '#dddddd',
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__.default, {
          href: "/user/signin",
          children: "\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694."
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
      component: "ul",
      sx: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        padding: '0px',
        margin: '0px'
      },
      children: _navigationLinks__WEBPACK_IMPORTED_MODULE_4__.default.map(function (item, index) {
        if (!(item.slug in mobileDrawerSubMenuOpen)) {
          setMobileDrawerSubMenuOpen(_objectSpread(_objectSpread({}, mobileDrawerSubMenuOpen), {}, _defineProperty({}, item.slug, false)));
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
          component: "li",
          className: 'children' in item && mobileDrawerSubMenuOpen[item.slug] ? 'has-children' : '',
          sx: {
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Nanum Gothic',
            marginBottom: '15px',
            '&.has-children': {
              marginBottom: '25px'
            },
            '& a': {
              color: 'inherit',
              textDecoration: 'none'
            }
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
            sx: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: mobileDrawerSubMenuOpen[item.slug] ? '8px' : '0px',
              '& a': {
                fontSize: '1rem'
              }
            },
            children: ['children' in item ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_11__.default, {
              sx: {
                width: '34px',
                transition: '0.2s',
                cursor: 'pointer',
                transform: mobileDrawerSubMenuOpen[item.slug] ? 'rotate(-180deg)' : 'rotate(0)'
              },
              onClick: function onClick() {
                setMobileDrawerSubMenuOpen(_objectSpread(_objectSpread({}, mobileDrawerSubMenuOpen), {}, _defineProperty({}, item.slug, !mobileDrawerSubMenuOpen[item.slug])));
              }
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
              sx: {
                width: '34px'
              }
            }), 'standalone' in item && item.standalone === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__.default, {
              href: item.path,
              children: item.name
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
              to: item.path,
              onClick: toggleMobileDrawer,
              children: item.name
            })]
          }), 'children' in item && mobileDrawerSubMenuOpen[item.slug] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
            component: "ol",
            sx: {
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
              margin: '0px 0px 0px 34px',
              padding: '0px'
            },
            children: item.children.map(function (subitem, subindex) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
                component: "li",
                sx: {
                  marginBottom: '10px',
                  '&:last-of-type': {
                    marginBottom: '0px'
                  },
                  '& a': {
                    fontSize: '0.9rem'
                  }
                },
                children: 'standalone' in subitem && subitem.standalone === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__.default, {
                  href: subitem.path,
                  children: subitem.name
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
                  to: subitem.path,
                  onClick: toggleMobileDrawer,
                  children: subitem.name
                })
              }, "mobileDrawerSubLink-".concat(index, "-").concat(subindex));
            })
          })]
        }, "mobileDrawerLink-".concat(index));
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/system/MobileNavigation.jsx":
/*!**************************************************!*\
  !*** ./resources/js/system/MobileNavigation.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileNavigation)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "./node_modules/@material-ui/core/BottomNavigation/BottomNavigation.js");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "./node_modules/@material-ui/core/BottomNavigationAction/BottomNavigationAction.js");
/* harmony import */ var _material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/HomeRounded */ "./node_modules/@material-ui/icons/HomeRounded.js");
/* harmony import */ var _material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircleRounded */ "./node_modules/@material-ui/icons/AccountCircleRounded.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function MobileNavigation() {
  var route = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.app.route;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
    sx: {
      position: 'fixed',
      width: '100%',
      bottom: '0px',
      boxShadow: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('templete.boxShadow.1'),
      zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('templete.zIndex.mobileNavigation'),
      display: {
        xs: 'block',
        md: 'none'
      }
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_4__.default, {
      value: route,
      sx: {
        justifyContent: 'space-evenly',
        '& .MuiButtonBase-root': {
          padding: '0px',
          '&.Mui-selected': {
            padding: '0px'
          }
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_5__.default, {
        value: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('app.route.home'),
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,
        to: "/",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_5__.default, {
        value: (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('app.route.user'),
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,
        to: "/user",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_8__.default, {})
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/system/navigationLinks.js":
/*!************************************************!*\
  !*** ./resources/js/system/navigationLinks.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var navigationLinks = [{
  name: '뉴스댓글 여론분석기',
  path: '/app',
  slug: 'app',
  children: [{
    name: '서비스 소개',
    path: '/app/introduction',
    slug: 'introduction'
  }]
}, {
  name: '나의 여론분석',
  path: '/analytics',
  slug: 'analytics',
  children: [{
    name: '여론분석 URL 추가',
    path: '/analytics/add',
    slug: 'analytics_add'
  }, {
    name: '과거 여론분석 통계',
    path: '/analytics/history',
    slug: 'analytics_history'
  }]
}, {
  name: '문의하기',
  path: 'https://newsreply.channel.io',
  slug: 'contact',
  standalone: true
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationLinks);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/sass/routes/user.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/sass/routes/user.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".user-signup-form .social-login {\n  max-width: 700px;\n  margin-bottom: 50px;\n}\n.user-signup-form .social-login .accordion {\n  box-shadow: none;\n  background: linear-gradient(90deg, #e2f0fc 0%, #fff0fd 55%, #fff0e2 100%);\n}\n.user-signup-form .social-login .accordion .accordion-summary .social-title {\n  font-family: \"Noto Sans KR\";\n  font-weight: bold;\n  color: #444444;\n  font-size: 1.2em;\n}\n.user-signup-form .form-contents {\n  max-width: 700px;\n}\n.user-signup-form .form-contents .input-form .input-item {\n  margin-bottom: 20px;\n}\n.user-signup-form .form-contents .input-form .input-item.button {\n  margin-top: 40px;\n  text-align: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/sass/landing.scss":
/*!*************************************!*\
  !*** ./resources/sass/landing.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/routes/user.scss":
/*!*****************************************!*\
  !*** ./resources/sass/routes/user.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_user_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./user.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/sass/routes/user.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_user_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_user_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/config sync recursive ^\\.\\/.*$":
/*!********************************************!*\
  !*** ./resources/js/config/ sync ^\.\/.*$ ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": "./resources/js/config/index.js",
	"./app": "./resources/js/config/app.js",
	"./app.js": "./resources/js/config/app.js",
	"./index": "./resources/js/config/index.js",
	"./index.js": "./resources/js/config/index.js",
	"./templete": "./resources/js/config/templete.js",
	"./templete.js": "./resources/js/config/templete.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/config sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/landing","/js/vendor"], () => (__webpack_exec__("./resources/js/index.jsx"), __webpack_exec__("./resources/sass/landing.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);