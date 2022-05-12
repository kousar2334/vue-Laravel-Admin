"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Manage Account"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/User.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/User.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
  name: "User",
  metaInfo: function metaInfo() {
    return {
      title: this.title
    };
  },
  data: function data() {
    return {
      title: "My Account",
      usersOpened: null,
      user_info: {},
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      image_placeholder: "Choose image",
      image: "",
      errors: []
    };
  },
  mounted: function mounted() {
    this.getProfileDetails();
  },
  methods: {
    /**
     *Get my profile details
     */
    getProfileDetails: function getProfileDetails() {
      var _this = this;

      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("userToken"))
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/get-user-profile-details").then(function (response) {
        if (response.data.success) {
          _this.user_info = response.data.user;
        } else {////////
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    goBack: function goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({
        path: "/users"
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/users/User.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/users/User.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_017080d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=017080d1& */ "./resources/js/views/users/User.vue?vue&type=template&id=017080d1&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/views/users/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _User_vue_vue_type_template_id_017080d1___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_017080d1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/users/User.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/users/User.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/users/User.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/User.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/users/User.vue?vue&type=template&id=017080d1&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/users/User.vue?vue&type=template&id=017080d1& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_017080d1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_017080d1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_017080d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=017080d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/User.vue?vue&type=template&id=017080d1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/User.vue?vue&type=template&id=017080d1&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/User.vue?vue&type=template&id=017080d1& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { col: "12", lg: "5" } },
        [
          _c(
            "CCard",
            [
              _c("CCardHeader", [_vm._v("My Account Information ")]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c("center", [
                    _c("img", {
                      staticClass: "my-account-image",
                      attrs: { src: "/" + _vm.user_info.image }
                    })
                  ])
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
        "CCol",
        { attrs: { col: "12", lg: "7" } },
        [
          _c(
            "CRow",
            [
              _c(
                "CCol",
                { attrs: { col: "12", lg: "12" } },
                [
                  _c(
                    "CCard",
                    [
                      _c("CCardHeader", [
                        _vm._v("Update Account Information ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "CCardBody",
                        [
                          _c(
                            "CForm",
                            [
                              _c("CInput", {
                                staticClass: "mb-0 mt-3",
                                attrs: {
                                  label: "Name",
                                  horizontal: "",
                                  placeholder: "Enter Name"
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.name
                                ? _c(
                                    "div",
                                    { staticClass: "offset-sm-3" },
                                    _vm._l(_vm.errors.name, function(
                                      error,
                                      index
                                    ) {
                                      return _c(
                                        "small",
                                        {
                                          key: index,
                                          staticClass: "text text-danger tex-sm"
                                        },
                                        [_vm._v(_vm._s(error))]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("CInput", {
                                staticClass: "mb-0 mt-3",
                                attrs: {
                                  label: "Email",
                                  placeholder: "Enter  email",
                                  type: "email",
                                  horizontal: "",
                                  required: ""
                                },
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
                                    { staticClass: "offset-sm-3" },
                                    _vm._l(_vm.errors.email, function(
                                      error,
                                      index
                                    ) {
                                      return _c(
                                        "small",
                                        {
                                          key: index,
                                          staticClass: "text text-danger tex-sm"
                                        },
                                        [_vm._v(_vm._s(error))]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("CInputFile", {
                                staticClass: "mt-3 mb-0",
                                attrs: {
                                  label: "Image",
                                  horizontal: "",
                                  custom: "",
                                  placeholder: _vm.image_placeholder
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.getImage($event)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.image
                                ? _c(
                                    "div",
                                    { staticClass: "offset-sm-3" },
                                    _vm._l(_vm.errors.image, function(
                                      error,
                                      index
                                    ) {
                                      return _c(
                                        "small",
                                        {
                                          key: index,
                                          staticClass: "text text-danger tex-sm"
                                        },
                                        [_vm._v(_vm._s(error))]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                {
                                  staticClass: "mt-3",
                                  attrs: { color: "success", block: "" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.createNewUser.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Update Account")]
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
                "CCol",
                { attrs: { col: "12", lg: "12" } },
                [
                  _c(
                    "CCard",
                    [
                      _c("CCardHeader", [_vm._v("Update Password ")]),
                      _vm._v(" "),
                      _c(
                        "CCardBody",
                        [
                          _c(
                            "CForm",
                            [
                              _c("CInput", {
                                staticClass: "mb-0 mt-3",
                                attrs: {
                                  label: "Password",
                                  horizontal: "",
                                  type: "password",
                                  placeholder: "Enter Password"
                                },
                                model: {
                                  value: _vm.password,
                                  callback: function($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password"
                                }
                              }),
                              _vm._v(" "),
                              _c("CInput", {
                                staticClass: "mb-0 mt-3",
                                attrs: {
                                  label: "Confirm Password",
                                  placeholder: "Confirm Password",
                                  type: "password",
                                  horizontal: "",
                                  required: ""
                                },
                                model: {
                                  value: _vm.confirm_password,
                                  callback: function($$v) {
                                    _vm.confirm_password = $$v
                                  },
                                  expression: "confirm_password"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.password
                                ? _c(
                                    "div",
                                    { staticClass: "offset-sm-3" },
                                    _vm._l(_vm.errors.email, function(
                                      error,
                                      index
                                    ) {
                                      return _c(
                                        "small",
                                        {
                                          key: index,
                                          staticClass: "text text-danger tex-sm"
                                        },
                                        [_vm._v(_vm._s(error))]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                {
                                  staticClass: "mt-3",
                                  attrs: { color: "success", block: "" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.createNewUser.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Update Password")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);