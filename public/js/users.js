"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/Users.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/Users.vue?vue&type=script&lang=js& ***!
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
  name: "Users",
  metaInfo: function metaInfo() {
    return {
      title: this.title
    };
  },
  data: function data() {
    return {
      title: "Users management",
      showUpdatePermissionCard: false,
      showNewUserCard: true,
      isCollapsedNewUserCard: true,
      showUserRoleCard: false,
      showNewRoleModal: false,
      isCollapsedNewUserPermissionCard: true,
      isCollapsedUserRoleCard: true,
      editUser: {},
      showUpdateUserCard: false,
      items: [],
      errors: [],
      roles: [],
      role_info: {},
      all_permissions: [],
      selectedPermission: [],
      roleFields: [{
        key: "index",
        label: "#"
      }, {
        key: "label",
        label: "Name"
      }, {
        key: "action"
      }],
      fields: [{
        key: "index",
        label: "#"
      }, {
        key: "name",
        label: "Name"
      }, {
        key: "image",
        label: "Image"
      }, {
        key: "email"
      }, {
        key: "role",
        label: "Role"
      }, {
        key: "action"
      }],
      currentPage: 1,
      perPage: 5,
      role_name: "",
      name: "",
      email: "",
      password: "",
      image_placeholder: "Choose image",
      image: "",
      user_role: "",
      role_error: ""
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (route.query && route.query.page) {
          this.currentPage = Number(route.query.page);
        }
      }
    },
    showNewUserCard: function showNewUserCard() {
      if (this.showNewUserCard) {
        this.isCollapsedNewUserCard = true;
      }
    }
  },
  mounted: function mounted() {
    this.getUsers();
    this.AllRoles();
  },
  methods: {
    /**
     * Get image from input
     */
    getImage: function getImage(event) {
      this.image_placeholder = event[0].name;
      this.image = event[0];
      console.log(event[0].name);
    },

    /**
     * Get all user list
     */
    getUsers: function getUsers() {
      var _this = this;

      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/get-all-users").then(function (response) {
        if (response.data.success) {
          _this.items = response.data.users;
        } else {
          _this.flash("Something went wrong", "error");
        }
      })["catch"](function (error) {
        _this.flash("Something went wrong", "error");
      });
    },

    /**
     * Get all user's role
     */
    AllRoles: function AllRoles() {
      var _this2 = this;

      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/get-all-roles").then(function (response) {
        if (response.data.success) {
          _this2.roles = response.data.roles;
        } else {
          _this2.flash("Something went wrong", "error");
        }
      })["catch"](function (error) {
        _this2.flash("Something went wrong", "error");
      });
    },

    /**
     * Display new user role form card
     */
    displayNewRoleCard: function displayNewRoleCard() {
      var _this3 = this;

      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/get-permission-of-user-role", {
        id: ""
      }).then(function (response) {
        if (response.data.success) {
          _this3.all_permissions = response.data.all_permissions;
          _this3.selectedPermission = response.data.role_permission;
          _this3.isCollapsedNewUserCard = false;
          _this3.showNewRoleModal = true;
        } else {
          _this3.flash("Something went wrong", "error");
        }
      })["catch"](function (error) {
        _this3.flash("Something went wrong", "error");
      });
    },

    /**
     * Create new user role
     */
    createUserRole: function createUserRole() {
      var _this4 = this;

      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/create-new-user-role", {
        role_name: this.role_name,
        permissions: this.selectedPermission
      }).then(function (response) {
        if (response.data.success) {
          _this4.flash("New role created successfully", "success");

          _this4.role_name = "";
          _this4.selectedPermission = [];
          _this4.errors = [];

          _this4.AllRoles();
        } else {
          _this4.flash("Something went wrong", "error");
        }
      })["catch"](function (error) {
        if (error.response.status === 400) {
          _this4.errors = error.response.data;
        } else {
          _this4.flash("Something went wrong", "error");
        }
      });
    },

    /**
     * Update user role
     */
    updateUserRole: function updateUserRole() {
      var _this5 = this;

      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/update-user-role", {
        role_name: this.role_info.role_name,
        role_id: this.role_info.id,
        permissions: this.selectedPermission
      }).then(function (response) {
        if (response.data.success) {
          _this5.flash("User role updated successfully", "success");

          _this5.role_name = "";
          _this5.all_permissions = [];
          _this5.selectedPermission = [];
          _this5.errors = [];
          _this5.showUpdatePermissionCard = false;
          _this5.isCollapsedNewUserCard = true;

          _this5.AllRoles();
        } else {
          _this5.flash("Something went wrong", "error");
        }
      })["catch"](function (error) {
        if (error.response.status === 400) {
          _this5.errors = error.response.data;
        } else {
          _this5.flash("Something went wrong", "error");
        }
      });
    },

    /**
     * Create new user
     */
    createNewUser: function createNewUser() {
      var _this6 = this;

      this.role_error = "";
      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };

      if (this.user_role) {
        var role_id = this.user_role.id;
        var data = new FormData();
        data.append("name", this.name);
        data.append("email", this.email);
        data.append("password", this.password);
        data.append("image", this.image);
        data.append("role", role_id);
        axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/create-new-user", data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (response) {
          if (response.data.success) {
            _this6.flash("New user created successfully", "success");

            _this6.name = "";
            _this6.email = "";
            _this6.password = "";
            _this6.user_role = "";
            _this6.image = "";
            _this6.errors = [];

            _this6.getUsers();
          } else {
            _this6.flash("Something went wrong", "error");
          }
        })["catch"](function (error) {
          if (error.response.status === 400) {
            _this6.errors = error.response.data;
          } else {
            _this6.flash("Something went wrong", "error");
          }
        });
      } else {
        this.role_error = "Please select a user role";
      }
    },

    /**
     * Get single user details
     */
    editUserInfo: function editUserInfo(id) {
      var _this7 = this;

      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/edit-user", {
        id: id
      }).then(function (response) {
        if (response.data.success) {
          _this7.editUser = response.data.user_info;

          var role = _this7.roles.filter(function (role) {
            return role.id == response.data.user_info.role_id;
          });

          _this7.editUser.role = {
            id: role[0].id,
            label: role[0].label
          };
          _this7.showUpdateUserCard = true;
          _this7.showNewUserCard = false;
        } else {
          _this7.flash("Something went wrong", "error");
        }
      })["catch"](function (error) {
        _this7.flash("Something went wrong", "error");
      });
    },

    /**
     * Update single user
     */
    updateUser: function updateUser() {
      var _this8 = this;

      this.role_error = "";
      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };

      if (this.editUser.role.id) {
        var role_id = this.editUser.role.id;
        var data = new FormData();
        data.append("id", this.editUser.id);
        data.append("name", this.editUser.name);
        data.append("email", this.editUser.email);
        data.append("image", this.image);
        data.append("role", role_id);
        axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/update-user-info", data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (response) {
          if (response.data.success) {
            _this8.flash("User information updated successfully", "success");

            _this8.editUser = {};
            _this8.image = "";
            _this8.image_placeholder = "Choose image";
            _this8.errors = [];
            _this8.showUpdateUserCard = false;
            _this8.showNewUserCard = true;

            _this8.getUsers();
          } else {
            _this8.flash("Something went wrong", "error");
          }
        })["catch"](function (error) {
          if (error.response.status === 400) {
            _this8.errors = error.response.data;
          } else {
            _this8.flash("Something went wrong", "error");
          }
        });
      } else {
        this.role_error = "Please select a user role";
      }
    },

    /**
     * Delete single user
     */
    deleteUser: function deleteUser(id) {
      var _this9 = this;

      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/delete-user", {
        id: id
      }).then(function (response) {
        if (response.data.success) {
          _this9.flash("User deleted successfully", "success");

          _this9.getUsers();
        } else {
          _this9.flash("Something went wrong", "error");
        }
      })["catch"](function (error) {
        _this9.flash("Something went wrong", "error");
      });
    },

    /**
     * Get all permission of a user role
     */
    getPermissionsOfRole: function getPermissionsOfRole(id) {
      var _this10 = this;

      (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common) = {
        Authorization: "Bearer ".concat(localStorage.getItem("adminSessionToken"))
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/get-permission-of-user-role", {
        id: id
      }).then(function (response) {
        if (response.data.success) {
          _this10.all_permissions = response.data.all_permissions;
          _this10.selectedPermission = response.data.role_permission;
          _this10.role_info = response.data.role_info;
          _this10.isCollapsedNewUserCard = false;
          _this10.showNewRoleModal = false;
          _this10.showUpdatePermissionCard = true;
        } else {
          _this10.flash("Something went wrong", "error");
        }
      })["catch"](function (error) {
        _this10.flash("Something went wrong", "error");
      });
    },

    /**
     * Pagination
     */
    pageChange: function pageChange(val) {
      this.$router.push({
        query: {
          page: val
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/users/Users.vue":
/*!********************************************!*\
  !*** ./resources/js/views/users/Users.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_304b3a72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=304b3a72& */ "./resources/js/views/users/Users.vue?vue&type=template&id=304b3a72&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/users/Users.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Users_vue_vue_type_template_id_304b3a72___WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_304b3a72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/users/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/users/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/users/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/Users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/users/Users.vue?vue&type=template&id=304b3a72&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/users/Users.vue?vue&type=template&id=304b3a72& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_304b3a72___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_304b3a72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_304b3a72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=304b3a72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/Users.vue?vue&type=template&id=304b3a72&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/Users.vue?vue&type=template&id=304b3a72&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/Users.vue?vue&type=template&id=304b3a72& ***!
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
  return _c(
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { md: "5", lg: "5", sm: "4" } },
        [
          _c(
            "transition",
            { attrs: { name: "fade" } },
            [
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    { attrs: { md: "12", lg: "12" } },
                    [
                      _vm.showNewUserCard
                        ? _c(
                            "CCard",
                            [
                              _c("CCardHeader", [
                                _c("strong", [_vm._v("Create new user")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "card-header-actions" },
                                  [
                                    _c(
                                      "CLink",
                                      {
                                        staticClass:
                                          "card-header-action btn-minimize",
                                        on: {
                                          click: function($event) {
                                            _vm.isCollapsedNewUserCard = !_vm.isCollapsedNewUserCard
                                          }
                                        }
                                      },
                                      [
                                        _c("CIcon", {
                                          attrs: {
                                            name:
                                              "cil-chevron-" +
                                              (_vm.isCollapsedNewUserCard
                                                ? "bottom"
                                                : "top")
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CLink",
                                      {
                                        staticClass:
                                          "card-header-action btn-close",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            _vm.showNewUserCard = false
                                          }
                                        }
                                      },
                                      [
                                        _c("CIcon", {
                                          attrs: { name: "cil-x-circle" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "CCollapse",
                                {
                                  attrs: {
                                    show: _vm.isCollapsedNewUserCard,
                                    duration: 400
                                  }
                                },
                                [
                                  _c(
                                    "CCardBody",
                                    [
                                      _c(
                                        "CCardBody",
                                        { staticClass: "p-0" },
                                        [
                                          _c(
                                            "CForm",
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-row form-group mb-20 align-items-center"
                                                },
                                                [
                                                  _c(
                                                    "label",
                                                    { staticClass: "col-3" },
                                                    [_vm._v(" User Role ")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "col" },
                                                    [
                                                      _c("v-select", {
                                                        staticClass: "w-100",
                                                        attrs: {
                                                          single: "",
                                                          options: _vm.roles,
                                                          label: "label",
                                                          placeholder:
                                                            "Please select a Role"
                                                        },
                                                        model: {
                                                          value: _vm.user_role,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.user_role = $$v
                                                          },
                                                          expression:
                                                            "user_role"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _vm.role_error
                                                        ? _c(
                                                            "small",
                                                            {
                                                              staticClass:
                                                                "text text-danger"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.role_error
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
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
                                                    {
                                                      staticClass: "offset-sm-3"
                                                    },
                                                    _vm._l(
                                                      _vm.errors.name,
                                                      function(error, index) {
                                                        return _c(
                                                          "small",
                                                          {
                                                            key: index,
                                                            staticClass:
                                                              "text text-danger tex-sm"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(error)
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
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
                                                    {
                                                      staticClass: "offset-sm-3"
                                                    },
                                                    _vm._l(
                                                      _vm.errors.email,
                                                      function(error, index) {
                                                        return _c(
                                                          "small",
                                                          {
                                                            key: index,
                                                            staticClass:
                                                              "text text-danger tex-sm"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(error)
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("CInput", {
                                                staticClass: "mt-3 mb-0",
                                                attrs: {
                                                  label: "Password",
                                                  placeholder: "Enter password",
                                                  type: "password",
                                                  horizontal: ""
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
                                              _vm.errors.password
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "offset-sm-3"
                                                    },
                                                    _vm._l(
                                                      _vm.errors.password,
                                                      function(error, index) {
                                                        return _c(
                                                          "small",
                                                          {
                                                            key: index,
                                                            staticClass:
                                                              "text text-danger tex-sm"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(error)
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
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
                                                  placeholder:
                                                    _vm.image_placeholder
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
                                                    {
                                                      staticClass: "offset-sm-3"
                                                    },
                                                    _vm._l(
                                                      _vm.errors.image,
                                                      function(error, index) {
                                                        return _c(
                                                          "small",
                                                          {
                                                            key: index,
                                                            staticClass:
                                                              "text text-danger tex-sm"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(error)
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "CButton",
                                                {
                                                  staticClass: "mt-3",
                                                  attrs: {
                                                    color: "success",
                                                    block: ""
                                                  },
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
                                                [_vm._v("Create Account")]
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { md: "12", lg: "12" } },
                    [
                      _vm.showUpdateUserCard
                        ? _c(
                            "CCard",
                            [
                              _c("CCardHeader", [
                                _c("strong", [_vm._v("Update user")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "card-header-actions" },
                                  [
                                    _c(
                                      "CLink",
                                      {
                                        staticClass:
                                          "card-header-action btn-minimize",
                                        on: {
                                          click: function($event) {
                                            _vm.isCollapsedNewUserCard = !_vm.isCollapsedNewUserCard
                                          }
                                        }
                                      },
                                      [
                                        _c("CIcon", {
                                          attrs: {
                                            name:
                                              "cil-chevron-" +
                                              (_vm.isCollapsedNewUserCard
                                                ? "bottom"
                                                : "top")
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CLink",
                                      {
                                        staticClass:
                                          "card-header-action btn-close",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            _vm.showUpdateUserCard = false
                                          }
                                        }
                                      },
                                      [
                                        _c("CIcon", {
                                          attrs: { name: "cil-x-circle" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "CCollapse",
                                {
                                  attrs: {
                                    show: _vm.isCollapsedNewUserCard,
                                    duration: 400
                                  }
                                },
                                [
                                  _c(
                                    "CCardBody",
                                    [
                                      _c(
                                        "CCardBody",
                                        { staticClass: "p-0" },
                                        [
                                          _c(
                                            "CForm",
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-row form-group mb-20 align-items-center"
                                                },
                                                [
                                                  _c(
                                                    "label",
                                                    { staticClass: "col-3" },
                                                    [_vm._v(" User Role ")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "col" },
                                                    [
                                                      _c("v-select", {
                                                        staticClass: "w-100",
                                                        attrs: {
                                                          single: "",
                                                          options: _vm.roles,
                                                          label: "label",
                                                          placeholder:
                                                            "Please select a Role"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.editUser.role,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.editUser,
                                                              "role",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "editUser.role"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _vm.role_error
                                                        ? _c(
                                                            "small",
                                                            {
                                                              staticClass:
                                                                "text text-danger"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.role_error
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("CInput", {
                                                staticClass: "mb-0 mt-3",
                                                attrs: {
                                                  label: "Name",
                                                  horizontal: "",
                                                  placeholder: "Enter Name"
                                                },
                                                model: {
                                                  value: _vm.editUser.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editUser,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "editUser.name"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.errors.name
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "offset-sm-3"
                                                    },
                                                    _vm._l(
                                                      _vm.errors.name,
                                                      function(error, index) {
                                                        return _c(
                                                          "small",
                                                          {
                                                            key: index,
                                                            staticClass:
                                                              "text text-danger tex-sm"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(error)
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
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
                                                  value: _vm.editUser.email,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editUser,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "editUser.email"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.errors.email
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "offset-sm-3"
                                                    },
                                                    _vm._l(
                                                      _vm.errors.email,
                                                      function(error, index) {
                                                        return _c(
                                                          "small",
                                                          {
                                                            key: index,
                                                            staticClass:
                                                              "text text-danger tex-sm"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(error)
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
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
                                                  placeholder:
                                                    _vm.image_placeholder
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
                                                    {
                                                      staticClass: "offset-sm-3"
                                                    },
                                                    _vm._l(
                                                      _vm.errors.image,
                                                      function(error, index) {
                                                        return _c(
                                                          "small",
                                                          {
                                                            key: index,
                                                            staticClass:
                                                              "text text-danger tex-sm"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(error)
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "CButton",
                                                {
                                                  staticClass: "mt-3",
                                                  attrs: {
                                                    color: "success",
                                                    block: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.updateUser.apply(
                                                        null,
                                                        arguments
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Update User")]
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { md: "12", lg: "12" } },
                    [
                      _vm.showNewRoleModal
                        ? _c(
                            "CCard",
                            [
                              _c("CCardHeader", [
                                _c("strong", [_vm._v("Create New User Role")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "card-header-actions" },
                                  [
                                    _c(
                                      "CLink",
                                      {
                                        staticClass:
                                          "card-header-action btn-close",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            _vm.showNewRoleModal = false
                                          }
                                        }
                                      },
                                      [
                                        _c("CIcon", {
                                          attrs: { name: "cil-x-circle" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "CCollapse",
                                {
                                  attrs: {
                                    show: _vm.isCollapsedNewUserPermissionCard,
                                    duration: 400
                                  }
                                },
                                [
                                  _c(
                                    "CCardBody",
                                    [
                                      _c(
                                        "CCardBody",
                                        { staticClass: "p-0" },
                                        [
                                          _c(
                                            "CForm",
                                            [
                                              _c("CInput", {
                                                staticClass: "mb-0",
                                                attrs: {
                                                  label: "Name",
                                                  horizontal: "",
                                                  placeholder: "Enter Role Name"
                                                },
                                                model: {
                                                  value: _vm.role_name,
                                                  callback: function($$v) {
                                                    _vm.role_name = $$v
                                                  },
                                                  expression: "role_name"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.errors.role_name
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "offset-sm-3"
                                                    },
                                                    _vm._l(
                                                      _vm.errors.role_name,
                                                      function(error, index) {
                                                        return _c(
                                                          "small",
                                                          {
                                                            key: index,
                                                            staticClass:
                                                              "text text-danger tex-sm"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(error)
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "h6",
                                                {
                                                  staticClass:
                                                    "mt-2 mb-2 font-weight-bold"
                                                },
                                                [_vm._v("User's permissions")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "list-unstyled d-flex row"
                                                },
                                                _vm._l(
                                                  _vm.all_permissions,
                                                  function(field, index) {
                                                    return _c(
                                                      "li",
                                                      {
                                                        key: "field-" + index,
                                                        staticClass:
                                                          "mb-20 col-6"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "custom-checkbox"
                                                          },
                                                          [
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "checkbox-label"
                                                              },
                                                              [
                                                                _c("input", {
                                                                  directives: [
                                                                    {
                                                                      name:
                                                                        "model",
                                                                      rawName:
                                                                        "v-model",
                                                                      value:
                                                                        _vm.selectedPermission,
                                                                      expression:
                                                                        "selectedPermission"
                                                                    }
                                                                  ],
                                                                  attrs: {
                                                                    type:
                                                                      "checkbox",
                                                                    name:
                                                                      "permissionList"
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      field.id,
                                                                    checked: Array.isArray(
                                                                      _vm.selectedPermission
                                                                    )
                                                                      ? _vm._i(
                                                                          _vm.selectedPermission,
                                                                          field.id
                                                                        ) > -1
                                                                      : _vm.selectedPermission
                                                                  },
                                                                  on: {
                                                                    change: function(
                                                                      $event
                                                                    ) {
                                                                      var $$a =
                                                                          _vm.selectedPermission,
                                                                        $$el =
                                                                          $event.target,
                                                                        $$c = $$el.checked
                                                                          ? true
                                                                          : false
                                                                      if (
                                                                        Array.isArray(
                                                                          $$a
                                                                        )
                                                                      ) {
                                                                        var $$v =
                                                                            field.id,
                                                                          $$i = _vm._i(
                                                                            $$a,
                                                                            $$v
                                                                          )
                                                                        if (
                                                                          $$el.checked
                                                                        ) {
                                                                          $$i <
                                                                            0 &&
                                                                            (_vm.selectedPermission = $$a.concat(
                                                                              [
                                                                                $$v
                                                                              ]
                                                                            ))
                                                                        } else {
                                                                          $$i >
                                                                            -1 &&
                                                                            (_vm.selectedPermission = $$a
                                                                              .slice(
                                                                                0,
                                                                                $$i
                                                                              )
                                                                              .concat(
                                                                                $$a.slice(
                                                                                  $$i +
                                                                                    1
                                                                                )
                                                                              ))
                                                                        }
                                                                      } else {
                                                                        _vm.selectedPermission = $$c
                                                                      }
                                                                    }
                                                                  }
                                                                }),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "checkbox-text fz-12"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        field.name
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "CButton",
                                                {
                                                  attrs: {
                                                    color: "success",
                                                    block: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.createUserRole.apply(
                                                        null,
                                                        arguments
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Create New User's Role"
                                                  )
                                                ]
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { md: "12", lg: "12" } },
                    [
                      _vm.showUpdatePermissionCard
                        ? _c(
                            "CCard",
                            [
                              _c("CCardHeader", [
                                _c("strong", [_vm._v("Update User Role")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "card-header-actions" },
                                  [
                                    _c(
                                      "CLink",
                                      {
                                        staticClass:
                                          "card-header-action btn-close",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            _vm.showUpdatePermissionCard = false
                                          }
                                        }
                                      },
                                      [
                                        _c("CIcon", {
                                          attrs: { name: "cil-x-circle" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "CCardBody",
                                [
                                  _c(
                                    "CCardBody",
                                    { staticClass: "p-0" },
                                    [
                                      _c(
                                        "CForm",
                                        [
                                          _c("CInput", {
                                            staticClass: "mb-0",
                                            attrs: {
                                              label: "Name",
                                              horizontal: "",
                                              readonly: "",
                                              placeholder: "Enter Role Name"
                                            },
                                            model: {
                                              value: _vm.role_info.role_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.role_info,
                                                  "role_name",
                                                  $$v
                                                )
                                              },
                                              expression: "role_info.role_name"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.role_name
                                            ? _c(
                                                "div",
                                                { staticClass: "offset-sm-3" },
                                                _vm._l(
                                                  _vm.errors.role_name,
                                                  function(error, index) {
                                                    return _c(
                                                      "small",
                                                      {
                                                        key: index,
                                                        staticClass:
                                                          "text text-danger tex-sm"
                                                      },
                                                      [_vm._v(_vm._s(error))]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "h6",
                                            {
                                              staticClass:
                                                "mt-2 mb-2 font-weight-bold"
                                            },
                                            [_vm._v("User's permissions")]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.permissions
                                            ? _c(
                                                "div",
                                                { staticClass: "offset-sm-3" },
                                                _vm._l(
                                                  _vm.errors.permissions,
                                                  function(error, index) {
                                                    return _c(
                                                      "small",
                                                      {
                                                        key: index,
                                                        staticClass:
                                                          "text text-danger tex-sm"
                                                      },
                                                      [_vm._v(_vm._s(error))]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "ul",
                                            {
                                              staticClass:
                                                "list-unstyled d-flex row"
                                            },
                                            _vm._l(
                                              _vm.all_permissions,
                                              function(field, index) {
                                                return _c(
                                                  "li",
                                                  {
                                                    key: "field-" + index,
                                                    staticClass: "mb-20 col-6"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "custom-checkbox"
                                                      },
                                                      [
                                                        _c(
                                                          "label",
                                                          {
                                                            staticClass:
                                                              "checkbox-label"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.selectedPermission,
                                                                  expression:
                                                                    "selectedPermission"
                                                                }
                                                              ],
                                                              attrs: {
                                                                type:
                                                                  "checkbox",
                                                                name:
                                                                  "permissionList"
                                                              },
                                                              domProps: {
                                                                value: field.id,
                                                                checked: Array.isArray(
                                                                  _vm.selectedPermission
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.selectedPermission,
                                                                      field.id
                                                                    ) > -1
                                                                  : _vm.selectedPermission
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.selectedPermission,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        field.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.selectedPermission = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.selectedPermission = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.selectedPermission = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "checkbox-text fz-12"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    field.name
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CButton",
                                            {
                                              attrs: {
                                                color: "success",
                                                block: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.updateUserRole.apply(
                                                    null,
                                                    arguments
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Update User's Role")]
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
        { attrs: { col: "7", xl: "7", sm: "8" } },
        [
          _c(
            "CRow",
            [
              _c(
                "CCol",
                { attrs: { md: "12", lg: "12" } },
                [
                  _c(
                    "CCard",
                    [
                      _c("CCardHeader", [
                        _c("strong", [_vm._v(" Users")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "card-header-actions" },
                          [
                            _c(
                              "CLink",
                              {
                                staticClass:
                                  "btn btn-success btn-sm btn-pill btn-round",
                                attrs: {
                                  block: "",
                                  color: "primary",
                                  shape: "pill",
                                  "aria-pressed": "true"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.showNewUserCard = true
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tCreate new user\n\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "CLink",
                              {
                                staticClass:
                                  "btn btn-primary text-white btn-sm btn-pill btn-round",
                                attrs: {
                                  pressed: "",
                                  block: "",
                                  color: "warning",
                                  shape: "pill",
                                  "aria-pressed": "true"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.showUserRoleCard = true
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tUser roles\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "CCardBody",
                        [
                          _c("CDataTable", {
                            attrs: {
                              hover: "",
                              striped: "",
                              border: "",
                              small: "",
                              items: _vm.items,
                              fields: _vm.fields,
                              "items-per-page": _vm.perPage,
                              "active-page": _vm.currentPage,
                              pagination: {
                                doubleArrows: false,
                                align: "center"
                              }
                            },
                            on: { "page-change": _vm.pageChange },
                            scopedSlots: _vm._u([
                              {
                                key: "index",
                                fn: function(data) {
                                  return [
                                    _c("td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(data.index + 1) +
                                          "\n\t\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  ]
                                }
                              },
                              {
                                key: "image",
                                fn: function(data) {
                                  return [
                                    _c("td", [
                                      data.item.image
                                        ? _c("img", {
                                            staticClass:
                                              "image-round table-image",
                                            attrs: { src: data.item.image }
                                          })
                                        : _c("img", {
                                            staticClass: "image-round",
                                            attrs: { src: "/img/avatars/2.jpg" }
                                          })
                                    ])
                                  ]
                                }
                              },
                              {
                                key: "action",
                                fn: function(data) {
                                  return [
                                    _c("td", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "cursor-pointer btn btn-sm btn-info",
                                          on: {
                                            click: function($event) {
                                              return _vm.editUserInfo(
                                                data.item.id
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("Edit")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "cursor-pointer btn btn-sm btn-danger",
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.deleteUser(
                                                data.item.id
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("Delete")]
                                      )
                                    ])
                                  ]
                                }
                              }
                            ])
                          })
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
                { attrs: { md: "12", lg: "12" } },
                [
                  _vm.showUserRoleCard
                    ? _c(
                        "CCard",
                        [
                          _c("CCardHeader", [
                            _c("strong", [_vm._v(" User Roles")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "card-header-actions" },
                              [
                                _c(
                                  "CLink",
                                  {
                                    staticClass:
                                      "btn btn-primary text-white btn-sm btn-pill btn-round",
                                    attrs: {
                                      block: "",
                                      color: "warning",
                                      shape: "pill",
                                      "aria-pressed": "true"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.displayNewRoleCard.apply(
                                          null,
                                          arguments
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\tCreate New User Role\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "CLink",
                                  {
                                    staticClass:
                                      "card-header-action btn-minimize",
                                    on: {
                                      click: function($event) {
                                        _vm.isCollapsedUserRoleCard = !_vm.isCollapsedUserRoleCard
                                      }
                                    }
                                  },
                                  [
                                    _c("CIcon", {
                                      attrs: {
                                        name:
                                          "cil-chevron-" +
                                          (_vm.isCollapsedUserRoleCard
                                            ? "bottom"
                                            : "top")
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "CLink",
                                  {
                                    staticClass: "card-header-action btn-close",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        _vm.showUserRoleCard = false
                                      }
                                    }
                                  },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cil-x-circle" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCollapse",
                            {
                              attrs: {
                                show: _vm.isCollapsedUserRoleCard,
                                duration: 400
                              }
                            },
                            [
                              _c(
                                "CCardBody",
                                [
                                  _c(
                                    "CCardBody",
                                    { staticClass: "p-0" },
                                    [
                                      _c("CDataTable", {
                                        attrs: {
                                          hover: "",
                                          striped: "",
                                          border: "",
                                          small: "",
                                          items: _vm.roles,
                                          fields: _vm.roleFields,
                                          "items-per-page": _vm.perPage,
                                          "active-page": _vm.currentPage,
                                          pagination: {
                                            doubleArrows: false,
                                            align: "center"
                                          }
                                        },
                                        on: { "page-change": _vm.pageChange },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "index",
                                              fn: function(data) {
                                                return [
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                                        _vm._s(data.index + 1) +
                                                        "\n\t\t\t\t\t\t\t\t\t\t"
                                                    )
                                                  ])
                                                ]
                                              }
                                            },
                                            {
                                              key: "action",
                                              fn: function(data) {
                                                return [
                                                  _c("td", [
                                                    _c(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "cursor-pointer btn btn-sm btn-warning text-white",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.getPermissionsOfRole(
                                                              data.item.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n\t\t\t\t\t\t\t\t\t\t\t\tUdate Permission\n\t\t\t\t\t\t\t\t\t\t\t"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          3441522026
                                        )
                                      })
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