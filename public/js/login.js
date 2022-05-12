"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["login"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: function metaInfo() {
    return {
      title: this.title
    };
  },
  data: function data() {
    return {
      title: "Login",
      email: "",
      password: "",
      errors: {},
      is_login_checked: false
    };
  },
  mounted: function mounted() {
    this.checkIsLogin();
  },
  methods: {
    /**
     * Admin login
     */
    admin_login: function admin_login() {
      var _this = this;

      localStorage.removeItem("adminSessionToken");
      var credentials = {
        email: this.email,
        password: this.password
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/admin-login", credentials).then(function (response) {
        if (response.data.success) {
          _this.errors = {};

          _this.$store.dispatch("login", response).then(function () {
            return _this.$router.push({
              name: "Dashboard"
            });
          });
        } else {
          _this.errors = response.data.errors;
        }
      })["catch"](function (response) {
        _this.flash("Something went wrong");
      });
    },

    /**
     * Check admin is already login or not
     */
    checkIsLogin: function checkIsLogin() {
      if (this.$store.state.isLogin) {
        return this.$router.push({
          name: "Dashboard"
        });
      }

      this.is_login_checked = true;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/pages/Login.vue":
/*!********************************************!*\
  !*** ./resources/js/views/pages/Login.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=eaaf2be2& */ "./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=eaaf2be2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.is_login_checked
    ? _c(
        "div",
        { staticClass: "c-app flex-row align-items-center" },
        [
          _c(
            "CContainer",
            [
              _c(
                "CRow",
                { staticClass: "justify-content-center" },
                [
                  _c(
                    "CCol",
                    { attrs: { md: "8" } },
                    [
                      _c(
                        "CCardGroup",
                        [
                          _c(
                            "CCard",
                            { staticClass: "p-4" },
                            [
                              _c(
                                "CCardBody",
                                [
                                  _c(
                                    "CForm",
                                    [
                                      _c("h1", [_vm._v("Login")]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "text-muted" }, [
                                        _vm._v("Sign In to your account")
                                      ]),
                                      _vm._v(" "),
                                      _c("CInput", {
                                        staticClass: "mb-0",
                                        attrs: {
                                          placeholder: "Username",
                                          autocomplete: "username email"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "prepend-content",
                                              fn: function() {
                                                return [
                                                  _c("CIcon", {
                                                    attrs: { name: "cil-user" }
                                                  })
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          false,
                                          3945887885
                                        ),
                                        model: {
                                          value: _vm.email,
                                          callback: function($$v) {
                                            _vm.email = $$v
                                          },
                                          expression: "email"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.email
                                        ? _c(
                                            "div",
                                            _vm._l(_vm.errors.email, function(
                                              error,
                                              index
                                            ) {
                                              return _c(
                                                "small",
                                                {
                                                  key: index,
                                                  staticClass:
                                                    "text text-danger mt-0"
                                                },
                                                [_vm._v(_vm._s(error))]
                                              )
                                            }),
                                            0
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("CInput", {
                                        staticClass: "mb-0 mt-4",
                                        attrs: {
                                          placeholder: "Password",
                                          type: "password",
                                          autocomplete: "curent-password"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "prepend-content",
                                              fn: function() {
                                                return [
                                                  _c("CIcon", {
                                                    attrs: {
                                                      name: "cil-lock-locked"
                                                    }
                                                  })
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          false,
                                          3300492400
                                        ),
                                        model: {
                                          value: _vm.password,
                                          callback: function($$v) {
                                            _vm.password = $$v
                                          },
                                          expression: "password"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.error
                                        ? _c("div", [
                                            _c(
                                              "small",
                                              {
                                                staticClass:
                                                  "text text-danger mt-0"
                                              },
                                              [_vm._v(_vm._s(_vm.errors.error))]
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mt-4" },
                                        [
                                          _c(
                                            "CCol",
                                            {
                                              staticClass: "text-left",
                                              attrs: { col: "6" }
                                            },
                                            [
                                              _c(
                                                "CButton",
                                                {
                                                  staticClass: "px-4",
                                                  attrs: { color: "primary" },
                                                  on: { click: _vm.admin_login }
                                                },
                                                [_vm._v("Login")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            {
                                              staticClass: "text-right",
                                              attrs: { col: "6" }
                                            },
                                            [
                                              _c(
                                                "CButton",
                                                {
                                                  staticClass: "px-0",
                                                  attrs: { color: "link" }
                                                },
                                                [_vm._v("Forgot password?")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCard",
                            {
                              staticClass: "text-center py-5 d-md-down-none",
                              attrs: {
                                color: "primary",
                                "text-color": "white",
                                "body-wrapper": ""
                              }
                            },
                            [
                              _c(
                                "CCardBody",
                                [
                                  _c("h2", [_vm._v("Sign up")]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n\t\t\t\t\t\t\t\tmagna aliqua.\n\t\t\t\t\t\t\t"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "CButton",
                                    {
                                      attrs: {
                                        color: "light",
                                        variant: "outline",
                                        size: "lg"
                                      }
                                    },
                                    [_vm._v(" Register Now! ")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);