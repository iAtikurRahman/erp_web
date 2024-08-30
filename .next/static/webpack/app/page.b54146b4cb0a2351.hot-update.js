"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/_components/ErpLogIn.js":
/*!*****************************************!*\
  !*** ./src/app/_components/ErpLogIn.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ErpLogIn = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    async function handleLogIn() {\n        try {\n            let result = await fetch(\"http://localhost:3000/api/auth\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            result = await result.json();\n            if (result.success) {\n                localStorage.setItem(\"token\", result.token);\n                router.push(\"/dashboard\");\n            } else {\n                alert(\"Login failed. Please check your credentials.\");\n            }\n        } catch (error) {\n            console.error(\"Error during login:\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg shadow-lg w-80 flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-2xl font-semibold mb-6 text-gray-800\",\n                    children: \"Login Page\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\atikur_rahman\\\\next.js\\\\erp_web\\\\src\\\\app\\\\_components\\\\ErpLogIn.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        placeholder: \"Enter your email\",\n                        value: email,\n                        className: \"w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500\",\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\users\\\\atikur_rahman\\\\next.js\\\\erp_web\\\\src\\\\app\\\\_components\\\\ErpLogIn.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\atikur_rahman\\\\next.js\\\\erp_web\\\\src\\\\app\\\\_components\\\\ErpLogIn.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Enter your password\",\n                        value: password,\n                        className: \"w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500\",\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\users\\\\atikur_rahman\\\\next.js\\\\erp_web\\\\src\\\\app\\\\_components\\\\ErpLogIn.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\atikur_rahman\\\\next.js\\\\erp_web\\\\src\\\\app\\\\_components\\\\ErpLogIn.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors\",\n                    onClick: handleLogIn,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\atikur_rahman\\\\next.js\\\\erp_web\\\\src\\\\app\\\\_components\\\\ErpLogIn.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\users\\\\atikur_rahman\\\\next.js\\\\erp_web\\\\src\\\\app\\\\_components\\\\ErpLogIn.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\users\\\\atikur_rahman\\\\next.js\\\\erp_web\\\\src\\\\app\\\\_components\\\\ErpLogIn.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ErpLogIn, \"lnLPsXulL3oMypKJCpB5abnr2gw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ErpLogIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErpLogIn);\nvar _c;\n$RefreshReg$(_c, \"ErpLogIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvRXJwTG9nSW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUNYO0FBRWpDLE1BQU1FLFdBQVc7O0lBQ2IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNTSxTQUFTUCwwREFBU0E7SUFFeEIsZUFBZVE7UUFDWCxJQUFJO1lBQ0EsSUFBSUMsU0FBUyxNQUFNQyxNQUFNLGtDQUFrQztnQkFDdkRDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFWjtvQkFBT0U7Z0JBQVM7WUFDM0M7WUFFQUksU0FBUyxNQUFNQSxPQUFPTyxJQUFJO1lBQzFCLElBQUlQLE9BQU9RLE9BQU8sRUFBRTtnQkFDaEJDLGFBQWFDLE9BQU8sQ0FBQyxTQUFTVixPQUFPVyxLQUFLO2dCQUMxQ2IsT0FBT2MsSUFBSSxDQUFDO1lBQ2hCLE9BQU87Z0JBQ0hDLE1BQU07WUFDVjtRQUNKLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsdUJBQXVCQTtRQUN6QztJQUNKO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBNEM7Ozs7Ozs4QkFDMUQsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRTt3QkFDR0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBTzVCO3dCQUNQdUIsV0FBVTt3QkFDVk0sVUFBVSxDQUFDQyxJQUFNN0IsU0FBUzZCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OEJBR2hELDhEQUFDTjtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0U7d0JBQ0dDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU8xQjt3QkFDUHFCLFdBQVU7d0JBQ1ZNLFVBQVUsQ0FBQ0MsSUFBTTNCLFlBQVkyQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzhCQUduRCw4REFBQ0k7b0JBQ0dULFdBQVU7b0JBQ1ZVLFNBQVM1Qjs4QkFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7R0ExRE1OOztRQUdhRixzREFBU0E7OztLQUh0QkU7QUE0RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fY29tcG9uZW50cy9FcnBMb2dJbi5qcz8yNDdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRXJwTG9nSW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9nSW4oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXN1bHQudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdMb2dpbiBmYWlsZWQuIFBsZWFzZSBjaGVjayB5b3VyIGNyZWRlbnRpYWxzLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGxvZ2luOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LTgwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi02IHRleHQtZ3JheS04MDBcIj5Mb2dpbiBQYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ0lufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJwTG9nSW47XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkVycExvZ0luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJoYW5kbGVMb2dJbiIsInJlc3VsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsInN1Y2Nlc3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiYWxlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/ErpLogIn.js\n"));

/***/ })

});