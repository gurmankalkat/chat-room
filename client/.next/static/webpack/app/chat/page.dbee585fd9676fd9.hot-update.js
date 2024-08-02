"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/page",{

/***/ "(app-pages-browser)/./src/app/chat/page.tsx":
/*!*******************************!*\
  !*** ./src/app/chat/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Chat() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    const username = searchParams.get(\"username\");\n    const [ws, setWS] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedPerson, setSelectedPerson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [onlinePeople, setOnlinePeople] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Set());\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const ws = new WebSocket(\"ws://localhost:8000\"); // Connect to the correct port\n        ws.onopen = ()=>{\n            console.log(\"WebSocket connection established\");\n            setWS(ws);\n            ws.addEventListener(\"message\", handleMessage);\n        };\n    }, []);\n    function handleMessage(event) {\n        const messageData = JSON.parse(event.data);\n        if (\"online\" in messageData) {\n            showOnlinePeople(messageData.online);\n        } else {\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        sender: messageData.sender,\n                        text: messageData.text\n                    }\n                ]);\n            console.log({\n                messageData\n            });\n        }\n    }\n    function showOnlinePeople(online) {\n        const people = new Set(online.map((person)=>person.username));\n        console.log(people);\n        setOnlinePeople(people);\n    }\n    function handleSelected(person) {\n        setSelectedPerson(person);\n        console.log(selectedPerson);\n    }\n    function sendMessage(event) {\n        event.preventDefault();\n        if (ws) {\n            ws.send(JSON.stringify({\n                text: newMessage\n            }));\n        }\n        setNewMessage(\"\");\n        setMessages((prev)=>[\n                ...prev,\n                {\n                    sender: username || \"\",\n                    text: newMessage\n                }\n            ]);\n    }\n    const onlinePeopleExclude = Array.from(onlinePeople).filter((person)=>person !== username);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen p-4 space-x-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    className: \"h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                children: \"Conversations\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                            className: \"flex flex-col space-y-2\",\n                            children: Array.from(onlinePeopleExclude).map((username)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                                    className: \"p-4 cursor-pointer \".concat(selectedPerson === username ? \"bg-gray-50\" : \"\"),\n                                    onClick: ()=>handleSelected(username),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                        className: \"text-sm\",\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this)\n                                }, username, false, {\n                                    fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    className: \"h-full flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                children: \"Messages\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                            className: \"flex-grow\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: [\n                                                        message.sender,\n                                                        \":\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 26\n                                                }, this),\n                                                \" \",\n                                                message.text\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        !!selectedPerson && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-4 border-t border-gray-200\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"flex flex-row space-x-2\",\n                                onSubmit: sendMessage,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                        type: \"text\",\n                                        value: newMessage,\n                                        onChange: (e)=>setNewMessage(e.target.value),\n                                        placeholder: \"Type your message\",\n                                        className: \"w-full p-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        type: \"submit\",\n                                        children: \"Send\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"Qe63jyR6Du6ze/MuzwTjoit7AwQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2hhdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRStCO0FBTUQ7QUFDZ0I7QUFDRTtBQUNKO0FBQ007QUFFbkMsU0FBU1U7O0lBQ3RCLE1BQU1DLGVBQWVGLGdFQUFlQTtJQUNwQyxNQUFNRyxXQUFXRCxhQUFhRSxHQUFHLENBQUM7SUFFbEMsTUFBTSxDQUFDQyxJQUFJQyxNQUFNLEdBQUdQLCtDQUFRQSxDQUFtQjtJQUMvQyxNQUFNLENBQUNRLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFnQjtJQUNwRSxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBYyxJQUFJWTtJQUNsRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBcUMsRUFBRTtJQUUvRUQsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxLQUFLLElBQUlXLFVBQVUsd0JBQXdCLDhCQUE4QjtRQUMvRVgsR0FBR1ksTUFBTSxHQUFHO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQztZQUNaYixNQUFNRDtZQUNOQSxHQUFHZSxnQkFBZ0IsQ0FBQyxXQUFXQztRQUNqQztJQUNGLEdBQUcsRUFBRTtJQUVMLFNBQVNBLGNBQWNDLEtBQW1CO1FBQ3hDLE1BQU1DLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0gsTUFBTUksSUFBSTtRQUN6QyxJQUFJLFlBQVlILGFBQWE7WUFDM0JJLGlCQUFpQkosWUFBWUssTUFBTTtRQUNyQyxPQUFPO1lBQ0xiLFlBQVljLENBQUFBLE9BQVM7dUJBQUlBO29CQUFNO3dCQUFFQyxRQUFRUCxZQUFZTyxNQUFNO3dCQUFFQyxNQUFNUixZQUFZUSxJQUFJO29CQUFDO2lCQUFFO1lBQ3RGYixRQUFRQyxHQUFHLENBQUM7Z0JBQUVJO1lBQVk7UUFDNUI7SUFDRjtJQUVBLFNBQVNJLGlCQUFpQkMsTUFBOEM7UUFDdEUsTUFBTUksU0FBUyxJQUFJckIsSUFBSWlCLE9BQU9LLEdBQUcsQ0FBQ0MsQ0FBQUEsU0FBVUEsT0FBTy9CLFFBQVE7UUFDM0RlLFFBQVFDLEdBQUcsQ0FBQ2E7UUFDWnRCLGdCQUFnQnNCO0lBQ2xCO0lBRUEsU0FBU0csZUFBZUQsTUFBYztRQUNwQzFCLGtCQUFrQjBCO1FBQ2xCaEIsUUFBUUMsR0FBRyxDQUFDWjtJQUNkO0lBRUEsU0FBUzZCLFlBQVlkLEtBQXVDO1FBQzFEQSxNQUFNZSxjQUFjO1FBQ3BCLElBQUloQyxJQUFJO1lBQ05BLEdBQUdpQyxJQUFJLENBQUNkLEtBQUtlLFNBQVMsQ0FBQztnQkFDckJSLE1BQU1uQjtZQUNSO1FBQ0Y7UUFDQUMsY0FBYztRQUNkRSxZQUFZYyxDQUFBQSxPQUFTO21CQUFJQTtnQkFBTTtvQkFBRUMsUUFBUTNCLFlBQVk7b0JBQUk0QixNQUFNbkI7Z0JBQVc7YUFBRTtJQUM5RTtJQUVBLE1BQU00QixzQkFBc0JDLE1BQU1DLElBQUksQ0FBQ2pDLGNBQWNrQyxNQUFNLENBQUNULENBQUFBLFNBQVVBLFdBQVcvQjtJQUVqRixxQkFDRSw4REFBQ3lDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3JELHFEQUFJQTtvQkFBQ3FELFdBQVU7O3NDQUNkLDhEQUFDbkQsMkRBQVVBO3NDQUNULDRFQUFDQywwREFBU0E7MENBQUM7Ozs7Ozs7Ozs7O3NDQUViLDhEQUFDRiw0REFBV0E7NEJBQUNvRCxXQUFVO3NDQUNwQkosTUFBTUMsSUFBSSxDQUFDRixxQkFBcUJQLEdBQUcsQ0FBQzlCLENBQUFBLHlCQUNuQyw4REFBQ1gscURBQUlBO29DQUFnQnFELFdBQVcsc0JBQXNFLE9BQWhEdEMsbUJBQW1CSixXQUFXLGVBQWU7b0NBQU0yQyxTQUFTLElBQU1YLGVBQWVoQzs4Q0FDckksNEVBQUNSLDBEQUFTQTt3Q0FBQ2tELFdBQVU7a0RBQVcxQzs7Ozs7O21DQUR2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPbkIsOERBQUN5QztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3JELHFEQUFJQTtvQkFBQ3FELFdBQVU7O3NDQUNkLDhEQUFDbkQsMkRBQVVBO3NDQUNULDRFQUFDQywwREFBU0E7MENBQUM7Ozs7Ozs7Ozs7O3NDQUViLDhEQUFDRiw0REFBV0E7NEJBQUNvRCxXQUFVO3NDQUNuQiw0RUFBQ0Q7MENBQ0U5QixTQUFTbUIsR0FBRyxDQUFDLENBQUNjLFNBQVNDLHNCQUN0Qiw4REFBQ0o7a0RBQ0MsNEVBQUNBOzs4REFBSSw4REFBQ0s7O3dEQUFRRixRQUFRakIsTUFBTTt3REFBQzs7Ozs7OztnREFBVTtnREFBRWlCLFFBQVFoQixJQUFJOzs7Ozs7O3VDQUQ3Q2lCOzs7Ozs7Ozs7Ozs7Ozs7d0JBTWpCLENBQUMsQ0FBQ3pDLGdDQUNELDhEQUFDcUM7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNLO2dDQUFLTCxXQUFVO2dDQUEwQk0sVUFBVWY7O2tEQUNsRCw4REFBQ3hDLHVEQUFLQTt3Q0FBQ3dELE1BQUs7d0NBQU9DLE9BQU96Qzt3Q0FBWTBDLFVBQVUsQ0FBQ0MsSUFBTTFDLGNBQWMwQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0NBQUdJLGFBQVk7d0NBQW9CWixXQUFVOzs7Ozs7a0RBQ2hJLDhEQUFDaEQseURBQU1BO3dDQUFDdUQsTUFBSztrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0QztHQS9Gd0JuRDs7UUFDREQsNERBQWVBOzs7S0FEZEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jaGF0L3BhZ2UudHN4PzNlM2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRUaXRsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoKSB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCB1c2VybmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VybmFtZVwiKTtcblxuICBjb25zdCBbd3MsIHNldFdTXSA9IHVzZVN0YXRlPFdlYlNvY2tldCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2VsZWN0ZWRQZXJzb24sIHNldFNlbGVjdGVkUGVyc29uXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbb25saW5lUGVvcGxlLCBzZXRPbmxpbmVQZW9wbGVdID0gdXNlU3RhdGU8U2V0PHN0cmluZz4+KG5ldyBTZXQoKSk7XG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8eyBzZW5kZXI6IHN0cmluZywgdGV4dDogc3RyaW5nIH1bXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6ODAwMFwiKTsgLy8gQ29ubmVjdCB0byB0aGUgY29ycmVjdCBwb3J0XG4gICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJXZWJTb2NrZXQgY29ubmVjdGlvbiBlc3RhYmxpc2hlZFwiKTtcbiAgICAgIHNldFdTKHdzKTtcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZU1lc3NhZ2UpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgaWYgKFwib25saW5lXCIgaW4gbWVzc2FnZURhdGEpIHtcbiAgICAgIHNob3dPbmxpbmVQZW9wbGUobWVzc2FnZURhdGEub25saW5lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiAoWy4uLnByZXYsIHsgc2VuZGVyOiBtZXNzYWdlRGF0YS5zZW5kZXIsIHRleHQ6IG1lc3NhZ2VEYXRhLnRleHQgfV0pKTtcbiAgICAgIGNvbnNvbGUubG9nKHsgbWVzc2FnZURhdGEgfSk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHNob3dPbmxpbmVQZW9wbGUob25saW5lOiB7IHVzZXJJRDogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHBlb3BsZSA9IG5ldyBTZXQob25saW5lLm1hcChwZXJzb24gPT4gcGVyc29uLnVzZXJuYW1lKSk7XG4gICAgY29uc29sZS5sb2cocGVvcGxlKTtcbiAgICBzZXRPbmxpbmVQZW9wbGUocGVvcGxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGVkKHBlcnNvbjogc3RyaW5nKSB7XG4gICAgc2V0U2VsZWN0ZWRQZXJzb24ocGVyc29uKTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBlcnNvbik7XG4gIH1cblxuICBmdW5jdGlvbiBzZW5kTWVzc2FnZShldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh3cykge1xuICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRleHQ6IG5ld01lc3NhZ2UsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XG4gICAgc2V0TWVzc2FnZXMocHJldiA9PiAoWy4uLnByZXYsIHsgc2VuZGVyOiB1c2VybmFtZSB8fCAnJywgdGV4dDogbmV3TWVzc2FnZSB9XSkpO1xuICB9XG5cbiAgY29uc3Qgb25saW5lUGVvcGxlRXhjbHVkZSA9IEFycmF5LmZyb20ob25saW5lUGVvcGxlKS5maWx0ZXIocGVyc29uID0+IHBlcnNvbiAhPT0gdXNlcm5hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIHAtNCBzcGFjZS14LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzNcIj5cbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC1mdWxsXCI+XG4gICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlPkNvbnZlcnNhdGlvbnM8L0NhcmRUaXRsZT5cbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShvbmxpbmVQZW9wbGVFeGNsdWRlKS5tYXAodXNlcm5hbWUgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3VzZXJuYW1lfSBjbGFzc05hbWU9e2BwLTQgY3Vyc29yLXBvaW50ZXIgJHtzZWxlY3RlZFBlcnNvbiA9PT0gdXNlcm5hbWUgPyBcImJnLWdyYXktNTBcIiA6IFwiXCJ9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0ZWQodXNlcm5hbWUpfT5cbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtc21cIj57dXNlcm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvM1wiPlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRUaXRsZT5NZXNzYWdlczwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PHN0cm9uZz57bWVzc2FnZS5zZW5kZXJ9Ojwvc3Ryb25nPiB7bWVzc2FnZS50ZXh0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgeyEhc2VsZWN0ZWRQZXJzb24gJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC0yXCIgb25TdWJtaXQ9e3NlbmRNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3TWVzc2FnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZVwiIGNsYXNzTmFtZT1cInctZnVsbCBwLTJcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiSW5wdXQiLCJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlYXJjaFBhcmFtcyIsIkNoYXQiLCJzZWFyY2hQYXJhbXMiLCJ1c2VybmFtZSIsImdldCIsIndzIiwic2V0V1MiLCJzZWxlY3RlZFBlcnNvbiIsInNldFNlbGVjdGVkUGVyc29uIiwib25saW5lUGVvcGxlIiwic2V0T25saW5lUGVvcGxlIiwiU2V0IiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiV2ViU29ja2V0Iiwib25vcGVuIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNZXNzYWdlIiwiZXZlbnQiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJzaG93T25saW5lUGVvcGxlIiwib25saW5lIiwicHJldiIsInNlbmRlciIsInRleHQiLCJwZW9wbGUiLCJtYXAiLCJwZXJzb24iLCJoYW5kbGVTZWxlY3RlZCIsInNlbmRNZXNzYWdlIiwicHJldmVudERlZmF1bHQiLCJzZW5kIiwic3RyaW5naWZ5Iiwib25saW5lUGVvcGxlRXhjbHVkZSIsIkFycmF5IiwiZnJvbSIsImZpbHRlciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJtZXNzYWdlIiwiaW5kZXgiLCJzdHJvbmciLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/chat/page.tsx\n"));

/***/ })

});