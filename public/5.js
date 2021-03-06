(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResetPasswordRequest',
  data: function data() {
    return {
      user: {
        email: '',
        verification_code: '',
        password: '',
        password_confirmation: ''
      },
      btnOldHtml: '',
      errors: {}
    };
  },
  created: function created() {
    document.querySelector('body').style.backgroundColor = '#343a40';
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.user.email = to.params.email;
    });
  },
  methods: {
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.disableSubmission(this.$refs.btnSubmit);
                this.errors = {};
                _context.next = 5;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["resetPassword"](this.user);

              case 5:
                response = _context.sent;
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.$router.push('/login');
                _context.next = 22;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 15 : _context.t1 === 401 ? 17 : 19;
                break;

              case 15:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 21);

              case 17:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 21);

              case 19:
                this.flashMessage.error({
                  message: 'Error!',
                  time: 5000
                });
                return _context.abrupt("break", 21);

              case 21:
                this.enableSubmission(this.$refs.btnSubmit);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }(),
    disableSubmission: function disableSubmission(btn) {
      btn.setAttribute('disabled', 'disabled');
      this.btnOldHtml = btn.innerHTML;
      btn.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait .....';
    },
    enableSubmission: function enableSubmission(btn) {
      btn.removeAttribute('disabled');
      btn.innerHTML = this.btnOldHtml;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "layoutAuthentication" } }, [
    _c("div", { attrs: { id: "layoutAuthentication_content" } }, [
      _c("main", [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-lg-5" }, [
              _c(
                "div",
                { staticClass: "card shadow-lg border-0 rounded-lg mt-5" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.onSubmit($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "small mb-1",
                              attrs: { for: "email" }
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.email,
                                expression: "user.email"
                              }
                            ],
                            staticClass: "form-control py-4",
                            attrs: {
                              id: "email",
                              type: "email",
                              "aria-describedby": "emailHelp",
                              placeholder: "Enter email address"
                            },
                            domProps: { value: _vm.user.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.user, "email", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.email
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.email[0]))
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "small mb-1",
                              attrs: { for: "verification_code" }
                            },
                            [_vm._v("Verification Code")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.verification_code,
                                expression: "user.verification_code"
                              }
                            ],
                            staticClass: "form-control py-4",
                            attrs: { id: "verification_code", type: "text" },
                            domProps: { value: _vm.user.verification_code },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "verification_code",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.verification_code
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.verification_code[0]))
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "small mb-1",
                              attrs: { for: "email" }
                            },
                            [_vm._v("Password")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password"
                              }
                            ],
                            staticClass: "form-control py-4",
                            attrs: { id: "password", type: "password" },
                            domProps: { value: _vm.user.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.password
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.password[0]))
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "small mb-1",
                              attrs: { for: "email" }
                            },
                            [_vm._v("Confirm Password")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password_confirmation,
                                expression: "user.password_confirmation"
                              }
                            ],
                            staticClass: "form-control py-4",
                            attrs: {
                              id: "password_confirmation",
                              type: "password"
                            },
                            domProps: { value: _vm.user.password_confirmation },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "password_confirmation",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.password_confirmation
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  _vm._s(_vm.errors.password_confirmation[0])
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group d-flex align-items-center justify-content-between mt-4 mb-0"
                          },
                          [
                            _c(
                              "router-link",
                              { staticClass: "small", attrs: { to: "/login" } },
                              [_vm._v("Return to login")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                ref: "btnSubmit",
                                staticClass: "btn btn-primary",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Reset Password")]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-footer text-center" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "small", attrs: { to: "/register" } },
                        [_vm._v("Need an account? Need an account? Sign up!")]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "text-center font-weight-light my-4" }, [
        _vm._v("Password Recovery")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/authentication/ResetPassword.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPassword.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=41ced692& */ "./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/ResetPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=template&id=41ced692& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);