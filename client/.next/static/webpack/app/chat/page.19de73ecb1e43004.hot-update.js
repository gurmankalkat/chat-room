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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Chat() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    const username = searchParams.get(\"username\");\n    const [ws, setWS] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedPerson, setSelectedPerson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [onlinePeople, setOnlinePeople] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Set());\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const websocket = new WebSocket(\"ws://localhost:8000\");\n        websocket.onopen = ()=>{\n            console.log(\"WebSocket connection established\");\n            setWS(websocket);\n        };\n        websocket.onmessage = handleMessage;\n        return ()=>{\n            websocket.close();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/messages\").then((response)=>{\n            const { data } = response;\n            setMessages(data);\n        }).catch((error)=>{\n            console.error(\"Error fetching messages:\", error);\n        });\n    }, []);\n    function handleMessage(event) {\n        const messageData = JSON.parse(event.data);\n        if (\"online\" in messageData) {\n            showOnlinePeople(messageData.online);\n        } else {\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        sender: messageData.sender,\n                        text: messageData.text\n                    }\n                ]);\n            console.log({\n                messageData\n            });\n        }\n    }\n    function showOnlinePeople(online) {\n        const people = new Set(online.map((person)=>person.username));\n        console.log(people);\n        setOnlinePeople(people);\n    }\n    function handleSelected(person) {\n        setSelectedPerson(person);\n        console.log(person);\n    }\n    function sendMessage(event) {\n        event.preventDefault();\n        if (ws && newMessage.trim()) {\n            ws.send(JSON.stringify({\n                text: newMessage\n            }));\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        sender: username || \"\",\n                        text: newMessage,\n                        isOur: true\n                    }\n                ]);\n            setNewMessage(\"\");\n        }\n    }\n    const onlinePeopleExclude = Array.from(onlinePeople).filter((person)=>person !== username);\n    console.log(onlinePeopleExclude);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen p-4 space-x-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    className: \"h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                children: \"People Online\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                            className: \"flex flex-col space-y-2\",\n                            children: onlinePeopleExclude.map((person)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                                    className: \"p-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                        className: \"text-sm\",\n                                        children: person\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 33\n                                    }, this)\n                                }, person, false, {\n                                    fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    className: \"h-full flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                children: \"Messages\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                            className: \"flex-grow overflow-y-scroll\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-2 space-y-2 \".concat(message.sender === username ? \"text-right\" : \"text-left\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-xs text-gray-500\",\n                                                children: message.sender\n                                            }, void 0, false, {\n                                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"inline-block p-2 rounded \".concat(message.sender === username ? \"bg-blue-500 text-white\" : \"bg-gray-200 text-black\"),\n                                                children: message.text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 33\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-4 border-t border-gray-200\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"flex flex-row space-x-2\",\n                                onSubmit: sendMessage,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                        type: \"text\",\n                                        value: newMessage,\n                                        onChange: (e)=>setNewMessage(e.target.value),\n                                        placeholder: \"Type your message\",\n                                        className: \"w-full p-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        type: \"submit\",\n                                        children: \"Send\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gurmankalkat/Downloads/my-app/client/src/app/chat/page.tsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, this);\n}\n_s(Chat, \"BbxF9oMoZm8WxF8gaVqFjKiKtEU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2hhdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQjtBQU1EO0FBQ2dCO0FBQ0U7QUFDSjtBQUNNO0FBQ3hCO0FBRVgsU0FBU1c7O0lBQ3BCLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxXQUFXRCxhQUFhRSxHQUFHLENBQUM7SUFFbEMsTUFBTSxDQUFDQyxJQUFJQyxNQUFNLEdBQUdSLCtDQUFRQSxDQUFtQjtJQUMvQyxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFnQjtJQUNwRSxNQUFNLENBQUNXLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBYyxJQUFJYTtJQUNsRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDZ0IsVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQXVGLEVBQUU7SUFFaklELGdEQUFTQSxDQUFDO1FBQ04sTUFBTW1CLFlBQVksSUFBSUMsVUFBVTtRQUNoQ0QsVUFBVUUsTUFBTSxHQUFHO1lBQ2ZDLFFBQVFDLEdBQUcsQ0FBQztZQUNaZCxNQUFNVTtRQUNWO1FBQ0FBLFVBQVVLLFNBQVMsR0FBR0M7UUFFdEIsT0FBTztZQUNITixVQUFVTyxLQUFLO1FBQ25CO0lBQ0osR0FBRyxFQUFFO0lBRUwxQixnREFBU0EsQ0FBQztRQUNORyw2Q0FBS0EsQ0FBQ0ksR0FBRyxDQUFDLHNDQUNMb0IsSUFBSSxDQUFDQyxDQUFBQTtZQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdEO1lBQ2pCVixZQUFZVztRQUNoQixHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0hULFFBQVFTLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzlDO0lBQ1IsR0FBRyxFQUFFO0lBRUwsU0FBU04sY0FBY08sS0FBbUI7UUFDdEMsTUFBTUMsY0FBY0MsS0FBS0MsS0FBSyxDQUFDSCxNQUFNSCxJQUFJ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEQ7R0E5R3dCekQ7O1FBQ0NGLDREQUFlQTs7O0tBRGhCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NoYXQvcGFnZS50c3g/M2UzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICAgIENhcmQsXG4gICAgQ2FyZENvbnRlbnQsXG4gICAgQ2FyZEhlYWRlcixcbiAgICBDYXJkVGl0bGUsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiOyBcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCgpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VybmFtZVwiKTtcblxuICAgIGNvbnN0IFt3cywgc2V0V1NdID0gdXNlU3RhdGU8V2ViU29ja2V0IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW3NlbGVjdGVkUGVyc29uLCBzZXRTZWxlY3RlZFBlcnNvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbb25saW5lUGVvcGxlLCBzZXRPbmxpbmVQZW9wbGVdID0gdXNlU3RhdGU8U2V0PHN0cmluZz4+KG5ldyBTZXQoKSk7XG4gICAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHsgX2lkOiBzdHJpbmc7IHNlbmRlcjogc3RyaW5nOyB0ZXh0OiBzdHJpbmc7IHVwdm90ZXM6IG51bWJlcjsgZG93bnZvdGVzOiBudW1iZXI7IH1bXT4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2Vic29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwMDBcIik7XG4gICAgICAgIHdlYnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlYlNvY2tldCBjb25uZWN0aW9uIGVzdGFibGlzaGVkXCIpO1xuICAgICAgICAgICAgc2V0V1Mod2Vic29ja2V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgd2Vic29ja2V0Lm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2U7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdlYnNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbWVzc2FnZXNcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICBpZiAoXCJvbmxpbmVcIiBpbiBtZXNzYWdlRGF0YSkge1xuICAgICAgICAgICAgc2hvd09ubGluZVBlb3BsZShtZXNzYWdlRGF0YS5vbmxpbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiAoWy4uLnByZXYsIHtzZW5kZXI6IG1lc3NhZ2VEYXRhLnNlbmRlciwgdGV4dDogbWVzc2FnZURhdGEudGV4dH1dKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7bWVzc2FnZURhdGF9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dPbmxpbmVQZW9wbGUob25saW5lOiB7dXNlcklEOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmd9W10pIHtcbiAgICAgICAgY29uc3QgcGVvcGxlID0gbmV3IFNldChvbmxpbmUubWFwKHBlcnNvbiA9PiBwZXJzb24udXNlcm5hbWUpKTtcbiAgICAgICAgY29uc29sZS5sb2cocGVvcGxlKTtcbiAgICAgICAgc2V0T25saW5lUGVvcGxlKHBlb3BsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0ZWQocGVyc29uOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRQZXJzb24ocGVyc29uKTtcbiAgICAgICAgY29uc29sZS5sb2cocGVyc29uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHdzICYmIG5ld01lc3NhZ2UudHJpbSgpKSB7XG4gICAgICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdGV4dDogbmV3TWVzc2FnZSB9KSk7XG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IChbLi4ucHJldiwge3NlbmRlcjogdXNlcm5hbWUgfHwgJycsIHRleHQ6IG5ld01lc3NhZ2UsIGlzT3VyOiB0cnVlfV0pKTtcbiAgICAgICAgICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbmxpbmVQZW9wbGVFeGNsdWRlID0gQXJyYXkuZnJvbShvbmxpbmVQZW9wbGUpLmZpbHRlcihwZXJzb24gPT4gcGVyc29uICE9PSB1c2VybmFtZSk7XG4gICAgY29uc29sZS5sb2cob25saW5lUGVvcGxlRXhjbHVkZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gcC00IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+UGVvcGxlIE9ubGluZTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge29ubGluZVBlb3BsZUV4Y2x1ZGUubWFwKHBlcnNvbiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtwZXJzb259IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtc21cIj57cGVyc29ufTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5NZXNzYWdlczwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4LWdyb3cgb3ZlcmZsb3cteS1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2BwLTIgc3BhY2UteS0yICR7bWVzc2FnZS5zZW5kZXIgPT09IHVzZXJuYW1lID8gXCJ0ZXh0LXJpZ2h0XCIgOiBcInRleHQtbGVmdFwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj57bWVzc2FnZS5zZW5kZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGlubGluZS1ibG9jayBwLTIgcm91bmRlZCAke21lc3NhZ2Uuc2VuZGVyID09PSB1c2VybmFtZSA/IFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiIDogXCJiZy1ncmF5LTIwMCB0ZXh0LWJsYWNrXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC0yXCIgb25TdWJtaXQ9e3NlbmRNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3TWVzc2FnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZVwiIGNsYXNzTmFtZT1cInctZnVsbCBwLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiSW5wdXQiLCJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlYXJjaFBhcmFtcyIsImF4aW9zIiwiQ2hhdCIsInNlYXJjaFBhcmFtcyIsInVzZXJuYW1lIiwiZ2V0Iiwid3MiLCJzZXRXUyIsInNlbGVjdGVkUGVyc29uIiwic2V0U2VsZWN0ZWRQZXJzb24iLCJvbmxpbmVQZW9wbGUiLCJzZXRPbmxpbmVQZW9wbGUiLCJTZXQiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ3ZWJzb2NrZXQiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlIiwiaGFuZGxlTWVzc2FnZSIsImNsb3NlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJldmVudCIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwic2hvd09ubGluZVBlb3BsZSIsIm9ubGluZSIsInByZXYiLCJzZW5kZXIiLCJ0ZXh0IiwicGVvcGxlIiwibWFwIiwicGVyc29uIiwiaGFuZGxlU2VsZWN0ZWQiLCJzZW5kTWVzc2FnZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInNlbmQiLCJzdHJpbmdpZnkiLCJpc091ciIsIm9ubGluZVBlb3BsZUV4Y2x1ZGUiLCJBcnJheSIsImZyb20iLCJmaWx0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtZXNzYWdlIiwiaW5kZXgiLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/chat/page.tsx\n"));

/***/ })

});