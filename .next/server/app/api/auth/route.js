"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/route";
exports.ids = ["app/api/auth/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Froute&page=%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Froute.js&appDir=D%3A%5Cusers%5Catikur_rahman%5Cnext.js%5Cerp_web%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cusers%5Catikur_rahman%5Cnext.js%5Cerp_web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Froute&page=%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Froute.js&appDir=D%3A%5Cusers%5Catikur_rahman%5Cnext.js%5Cerp_web%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cusers%5Catikur_rahman%5Cnext.js%5Cerp_web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_users_atikur_rahman_next_js_erp_web_src_app_api_auth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/route.js */ \"(rsc)/./src/app/api/auth/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/route\",\n        pathname: \"/api/auth\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/route\"\n    },\n    resolvedPagePath: \"D:\\\\users\\\\atikur_rahman\\\\next.js\\\\erp_web\\\\src\\\\app\\\\api\\\\auth\\\\route.js\",\n    nextConfigOutput,\n    userland: D_users_atikur_rahman_next_js_erp_web_src_app_api_auth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDdXNlcnMlNUNhdGlrdXJfcmFobWFuJTVDbmV4dC5qcyU1Q2VycF93ZWIlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUN1c2VycyU1Q2F0aWt1cl9yYWhtYW4lNUNuZXh0LmpzJTVDZXJwX3dlYiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUI7QUFDdEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lcnBfd2ViLz8yZWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXHVzZXJzXFxcXGF0aWt1cl9yYWhtYW5cXFxcbmV4dC5qc1xcXFxlcnBfd2ViXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcdXNlcnNcXFxcYXRpa3VyX3JhaG1hblxcXFxuZXh0LmpzXFxcXGVycF93ZWJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Froute&page=%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Froute.js&appDir=D%3A%5Cusers%5Catikur_rahman%5Cnext.js%5Cerp_web%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cusers%5Catikur_rahman%5Cnext.js%5Cerp_web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/route.js":
/*!***********************************!*\
  !*** ./src/app/api/auth/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(req) {\n    try {\n        // Extracting data from the request body\n        const { email, password } = await req.json();\n        // Check credentials\n        if (email === \"admin@gmail.com\" && password === \"admin\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                status: 200,\n                success: true,\n                token: \"iamauserfrompc\",\n                message: \"Login successful\"\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                status: 200,\n                success: false,\n                token: \"not a user\",\n                message: \"Login unsuccessful\"\n            });\n        }\n    } catch (error) {\n        // Handle unexpected errors\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 500,\n            success: false,\n            message: \"An error occurred during the login process.\",\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRXBDLGVBQWVDLEtBQUtDLEdBQUc7SUFDMUIsSUFBSTtRQUNBLHdDQUF3QztRQUN4QyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtRQUUxQyxvQkFBb0I7UUFDcEIsSUFBSUYsVUFBVSxxQkFBcUJDLGFBQWEsU0FBUztZQUNyRCxPQUFPSixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO2dCQUNyQkMsUUFBUTtnQkFDUkMsU0FBUztnQkFDVEMsT0FBUTtnQkFDUkMsU0FBUztZQUNiO1FBQ0osT0FBTztZQUNILE9BQU9ULHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7Z0JBQ3JCQyxRQUFRO2dCQUNSQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxTQUFTO1lBQ2I7UUFDSjtJQUNKLEVBQUUsT0FBT0MsT0FBTztRQUNaLDJCQUEyQjtRQUMzQixPQUFPVixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQ3JCQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEUsU0FBUztZQUNUQyxPQUFPQSxNQUFNRCxPQUFPO1FBQ3hCO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2VycF93ZWIvLi9zcmMvYXBwL2FwaS9hdXRoL3JvdXRlLmpzP2RiMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gRXh0cmFjdGluZyBkYXRhIGZyb20gdGhlIHJlcXVlc3QgYm9keVxyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBjcmVkZW50aWFsc1xyXG4gICAgICAgIGlmIChlbWFpbCA9PT0gXCJhZG1pbkBnbWFpbC5jb21cIiAmJiBwYXNzd29yZCA9PT0gXCJhZG1pblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA6IFwiaWFtYXVzZXJmcm9tcGNcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBcIm5vdCBhIHVzZXJcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9naW4gdW5zdWNjZXNzZnVsXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHVuZXhwZWN0ZWQgZXJyb3JzXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgbG9naW4gcHJvY2Vzcy5cIixcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJlbWFpbCIsInBhc3N3b3JkIiwianNvbiIsInN0YXR1cyIsInN1Y2Nlc3MiLCJ0b2tlbiIsIm1lc3NhZ2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Froute&page=%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Froute.js&appDir=D%3A%5Cusers%5Catikur_rahman%5Cnext.js%5Cerp_web%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cusers%5Catikur_rahman%5Cnext.js%5Cerp_web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();