"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_admin_apps_mailbox_mailbox_routes_ts"],{

/***/ 98429:
/*!****************************************************!*\
  !*** ./src/@fuse/directives/scroll-reset/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseScrollResetDirective: () => (/* reexport safe */ _fuse_directives_scroll_reset_public_api__WEBPACK_IMPORTED_MODULE_0__.FuseScrollResetDirective)
/* harmony export */ });
/* harmony import */ var _fuse_directives_scroll_reset_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/directives/scroll-reset/public-api */ 77209);


/***/ }),

/***/ 77209:
/*!*********************************************************!*\
  !*** ./src/@fuse/directives/scroll-reset/public-api.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseScrollResetDirective: () => (/* reexport safe */ _fuse_directives_scroll_reset_scroll_reset_directive__WEBPACK_IMPORTED_MODULE_0__.FuseScrollResetDirective)
/* harmony export */ });
/* harmony import */ var _fuse_directives_scroll_reset_scroll_reset_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/directives/scroll-reset/scroll-reset.directive */ 35109);


/***/ }),

/***/ 35109:
/*!*********************************************************************!*\
  !*** ./src/@fuse/directives/scroll-reset/scroll-reset.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseScrollResetDirective: () => (/* binding */ FuseScrollResetDirective)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 74520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);




class FuseScrollResetDirective {
  /**
   * Constructor
   */
  constructor(_elementRef, _router) {
    this._elementRef = _elementRef;
    this._router = _router;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Subscribe to NavigationEnd event
    this._router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribeAll)).subscribe(() => {
      // Reset the element's scroll position to the top
      this._elementRef.nativeElement.scrollTop = 0;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  static #_ = this.ɵfac = function FuseScrollResetDirective_Factory(t) {
    return new (t || FuseScrollResetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: FuseScrollResetDirective,
    selectors: [["", "fuseScrollReset", ""]],
    exportAs: ["fuseScrollReset"],
    standalone: true
  });
}

/***/ }),

/***/ 90404:
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/compose/compose.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailboxComposeComponent: () => (/* binding */ MailboxComposeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ 70945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 17401);














function MailboxComposeComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailboxComposeComponent_span_12_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.showCopyField("cc"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MailboxComposeComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailboxComposeComponent_span_13_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.showCopyField("bcc"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bcc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MailboxComposeComponent_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "cc");
  }
}
function MailboxComposeComponent_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bcc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "bcc");
  }
}
class MailboxComposeComponent {
  /**
   * Constructor
   */
  constructor(matDialogRef, _formBuilder) {
    this.matDialogRef = matDialogRef;
    this._formBuilder = _formBuilder;
    this.copyFields = {
      cc: false,
      bcc: false
    };
    this.quillModules = {
      toolbar: [['bold', 'italic', 'underline'], [{
        align: []
      }, {
        list: 'ordered'
      }, {
        list: 'bullet'
      }], ['clean']]
    };
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Create the form
    this.composeForm = this._formBuilder.group({
      to: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      cc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      bcc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      subject: [''],
      body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Show the copy field with the given field name
   *
   * @param name
   */
  showCopyField(name) {
    // Return if the name is not one of the available names
    if (name !== 'cc' && name !== 'bcc') {
      return;
    }
    // Show the field
    this.copyFields[name] = true;
  }
  /**
   * Save and close
   */
  saveAndClose() {
    // Save the message as a draft
    this.saveAsDraft();
    // Close the dialog
    this.matDialogRef.close();
  }
  /**
   * Discard the message
   */
  discard() {}
  /**
   * Save the message as a draft
   */
  saveAsDraft() {}
  /**
   * Send the message
   */
  send() {}
  static #_ = this.ɵfac = function MailboxComposeComponent_Factory(t) {
    return new (t || MailboxComposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MailboxComposeComponent,
    selectors: [["mailbox-compose"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 39,
    vars: 17,
    consts: [[1, "flex", "flex-col", "max-w-240", "md:min-w-160", "max-h-screen", "-m-6"], [1, "flex", "flex-0", "items-center", "justify-between", "h-16", "pr-3", "sm:pr-5", "pl-6", "sm:pl-8", "bg-primary", "text-on-primary"], [1, "text-lg", "font-medium"], ["mat-icon-button", "", 3, "tabIndex", "click"], [1, "text-current", 3, "svgIcon"], [1, "flex", "flex-col", "flex-auto", "p-6", "sm:p-8", "overflow-y-auto", 3, "formGroup"], ["matInput", "", 3, "formControlName"], ["matSuffix", "", 1, "copy-fields-toggles"], ["class", "text-sm font-medium cursor-pointer select-none hover:underline", 3, "click", 4, "ngIf"], ["class", "ml-2 text-sm font-medium cursor-pointer select-none hover:underline", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "mt-2", 3, "formControlName", "bounds", "modules"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "mt-4", "sm:mt-6"], [1, "-ml-2"], ["mat-icon-button", ""], [1, "icon-size-5", 3, "svgIcon"], [1, "flex", "items-center", "mt-4", "sm:mt-0"], ["mat-stroked-button", "", 1, "ml-auto", "sm:ml-0", 3, "click"], ["mat-stroked-button", "", 1, "sm:mx-3", 3, "click"], ["mat-flat-button", "", 1, "order-first", "sm:order-last", 3, "color", "click"], [1, "text-sm", "font-medium", "cursor-pointer", "select-none", "hover:underline", 3, "click"], [1, "ml-2", "text-sm", "font-medium", "cursor-pointer", "select-none", "hover:underline", 3, "click"]],
    template: function MailboxComposeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailboxComposeComponent_Template_button_click_4_listener() {
          return ctx.saveAndClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5)(7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MailboxComposeComponent_span_12_Template, 2, 0, "span", 8)(13, MailboxComposeComponent_span_13_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MailboxComposeComponent_mat_form_field_14_Template, 4, 1, "mat-form-field", 10)(15, MailboxComposeComponent_mat_form_field_15_Template, 4, 1, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field")(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "quill-editor", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16)(32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailboxComposeComponent_Template_button_click_32_listener() {
          return ctx.discard();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Discard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailboxComposeComponent_Template_button_click_34_listener() {
          return ctx.saveAsDraft();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Save as draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailboxComposeComponent_Template_button_click_37_listener() {
          return ctx.send();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_outline:x-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.composeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.copyFields.cc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.copyFields.bcc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.copyFields.cc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.copyFields.bcc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "body")("bounds", "self")("modules", ctx.quillModules);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:paper-clip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:face-smile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_quill__WEBPACK_IMPORTED_MODULE_8__.QuillEditorComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 48565:
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/details/details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailboxDetailsComponent: () => (/* binding */ MailboxDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ 83517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _fuse_directives_scroll_reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/directives/scroll-reset */ 98429);
/* harmony import */ var _fuse_pipes_find_by_key_find_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/pipes/find-by-key/find-by-key.pipe */ 91011);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.constants */ 5001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.service */ 82781);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 72698);

























const _c0 = ["infoDetailsPanelOrigin"];
const _c1 = ["infoDetailsPanel"];
function MailboxDetailsComponent_ng_container_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_ng_container_9_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const label_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.toggleLabel(label_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const label_r19 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary")("checked", ctx_r4.mail.labels.includes(label_r19.id))("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", label_r19.title, " ");
  }
}
function MailboxDetailsComponent_ng_container_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.toggleUnread(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mark as read");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:envelope-open");
  }
}
function MailboxDetailsComponent_ng_container_1_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.toggleUnread(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mark as unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:envelope");
  }
}
function MailboxDetailsComponent_ng_container_1_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.moveToFolder("spam"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Spam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:exclamation-triangle");
  }
}
function MailboxDetailsComponent_ng_container_1_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.moveToFolder("inbox"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Not spam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:exclamation-triangle");
  }
}
function MailboxDetailsComponent_ng_container_1_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.moveToFolder("trash"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:trash");
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_26_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const label_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r32.labelColors[label_r33.color].combined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", label_r33.title, " ");
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MailboxDetailsComponent_ng_container_1_ng_container_26_ng_container_2_Template, 3, 2, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "fuseFindByKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](3, 1, ctx_r11.mail.labels, "id", ctx_r11.labels));
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_41_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "other");
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_41_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "others");
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div")(2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "and");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MailboxDetailsComponent_ng_container_1_ng_container_41_ng_template_7_Template, 1, 0, "ng-template", 42)(8, MailboxDetailsComponent_ng_container_1_ng_container_41_ng_template_8_Template, 1, 0, "ng-template", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.mail.ccCount + ctx_r12.mail.bccCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngPlural", ctx_r12.mail.ccCount + ctx_r12.mail.bccCount);
  }
}
function MailboxDetailsComponent_ng_container_1_ng_template_45_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "cc:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r36.mail.cc.join(",\n"));
  }
}
function MailboxDetailsComponent_ng_container_1_ng_template_45_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "bcc:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r37.mail.bcc.join(",\n"));
  }
}
function MailboxDetailsComponent_ng_container_1_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "from:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 45)(7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MailboxDetailsComponent_ng_container_1_ng_template_45_ng_container_11_Template, 6, 1, "ng-container", 17)(12, MailboxDetailsComponent_ng_container_1_ng_template_45_ng_container_12_Template, 6, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 45)(14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 45)(20, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "subject:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.mail.from.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.mail.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.mail.cc);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.mail.bcc);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](18, 6, ctx_r14.mail.date, "EEEE, MMMM d, y - hh:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.mail.subject);
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_48_ng_container_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 58);
  }
  if (rf & 2) {
    const attachment_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "assets/images/apps/mailbox/" + attachment_r39.preview, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_48_ng_container_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 59)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const attachment_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", attachment_r39.type.split("/")[1].trim().toUpperCase(), " ");
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_48_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MailboxDetailsComponent_ng_container_1_ng_container_48_ng_container_7_img_2_Template, 1, 1, "img", 53)(3, MailboxDetailsComponent_ng_container_1_ng_container_48_ng_container_7_div_3_Template, 3, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 55)(5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const attachment_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", attachment_r39.type.startsWith("image/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", attachment_r39.type.startsWith("application/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", attachment_r39.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", attachment_r39.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", attachment_r39.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 6, attachment_r39.size / 1000, "1.0-2"), " KB ");
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 48)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MailboxDetailsComponent_ng_container_1_ng_container_48_ng_container_7_Template, 10, 9, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:paper-clip");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r16.mail.attachments.length, " Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r16.mail.attachments);
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 61)(2, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_ng_container_50_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r44.reply());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_ng_container_50_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r46.replyAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Reply All");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_ng_container_50_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r47.forward());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:arrow-uturn-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:arrow-uturn-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary")("svgIcon", "heroicons_solid:chevron-double-right");
  }
}
function MailboxDetailsComponent_ng_container_1_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 48, 65)(3, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 68)(6, "div", 69)(7, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 71)(16, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_ng_container_51_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r49.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Discard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_ng_container_51_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r51.send());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("subscriptSizing", "dynamic");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "Type your reply here")("rows", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:paper-clip");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:link");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:face-smile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
  }
}
const _c2 = () => ["./../"];
const _c3 = a0 => ({
  "text-red-600 dark:text-red-500": a0
});
const _c4 = a0 => ({
  "text-orange-500 dark:text-red-400": a0
});
function MailboxDetailsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-menu", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MailboxDetailsComponent_ng_container_1_ng_container_9_Template, 4, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r52.toggleImportant());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r54.toggleStar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-menu", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, MailboxDetailsComponent_ng_container_1_button_18_Template, 4, 1, "button", 14)(19, MailboxDetailsComponent_ng_container_1_button_19_Template, 4, 1, "button", 14)(20, MailboxDetailsComponent_ng_container_1_button_20_Template, 4, 1, "button", 14)(21, MailboxDetailsComponent_ng_container_1_button_21_Template, 4, 1, "button", 14)(22, MailboxDetailsComponent_ng_container_1_button_22_Template, 4, 1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 15)(24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, MailboxDetailsComponent_ng_container_1_ng_container_26_Template, 4, 5, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "div", 21)(31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 24)(34, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 26)(37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "to");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "me");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, MailboxDetailsComponent_ng_container_1_ng_container_41_Template, 9, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailboxDetailsComponent_ng_container_1_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r55.openInfoDetailsPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, MailboxDetailsComponent_ng_container_1_ng_template_45_Template, 24, 9, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, MailboxDetailsComponent_ng_container_1_ng_container_48_Template, 8, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, MailboxDetailsComponent_ng_container_1_ng_container_50_Template, 14, 7, "ng-container", 17)(51, MailboxDetailsComponent_ng_container_1_ng_container_51_Template, 20, 8, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](27, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:arrow-long-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.labels)("ngForTrackBy", ctx_r0.trackByFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c3, ctx_r0.mail.important))("svgIcon", "heroicons_outline:exclamation-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c4, ctx_r0.mail.starred))("svgIcon", "heroicons_outline:star");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:ellipsis-vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.mail.unread);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.mail.unread);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getCurrentFolder() !== "spam" && ctx_r0.getCurrentFolder() !== "drafts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getCurrentFolder() === "spam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getCurrentFolder() !== "trash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.mail.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.mail.labels && ctx_r0.mail.labels.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.mail.from.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.mail.from.contact.split("<")[0].trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.mail.ccCount + ctx_r0.mail.bccCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r0.mail.content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.mail.attachments && ctx_r0.mail.attachments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.replyFormActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.replyFormActive);
  }
}
function MailboxDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Select a mail to read");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:envelope");
  }
}
class MailboxDetailsComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _elementRef, _mailboxService, _overlay, _router, _viewContainerRef) {
    this._activatedRoute = _activatedRoute;
    this._elementRef = _elementRef;
    this._mailboxService = _mailboxService;
    this._overlay = _overlay;
    this._router = _router;
    this._viewContainerRef = _viewContainerRef;
    this.replyFormActive = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Get the label colors
    this.labelColors = app_modules_admin_apps_mailbox_mailbox_constants__WEBPACK_IMPORTED_MODULE_2__.labelColorDefs;
    // Folders
    this._mailboxService.folders$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(folders => {
      this.folders = folders;
    });
    // Labels
    this._mailboxService.labels$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(labels => {
      this.labels = labels;
    });
    // Mail
    this._mailboxService.mail$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(mail => {
      this.mail = mail;
    });
    // Selected mail changed
    this._mailboxService.selectedMailChanged.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(() => {
      // De-activate the reply form
      this.replyFormActive = false;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get the current folder
   */
  getCurrentFolder() {
    return this._activatedRoute.snapshot.paramMap.get('folder');
  }
  /**
   * Move to folder
   *
   * @param folderSlug
   */
  moveToFolder(folderSlug) {
    // Find the folder details
    const folder = this.folders.find(item => item.slug === folderSlug);
    // Return if the current folder of the mail
    // is already equals to the given folder
    if (this.mail.folder === folder.id) {
      return;
    }
    // Update the mail object
    this.mail.folder = folder.id;
    // Update the mail on the server
    this._mailboxService.updateMail(this.mail.id, {
      folder: this.mail.folder
    }).subscribe();
    // Navigate to the parent
    this._router.navigate(['./'], {
      relativeTo: this._activatedRoute.parent
    });
  }
  /**
   * Toggle label
   *
   * @param label
   */
  toggleLabel(label) {
    let deleted = false;
    // Update the mail object
    if (this.mail.labels.includes(label.id)) {
      // Set the deleted
      deleted = true;
      // Delete the label
      this.mail.labels.splice(this.mail.labels.indexOf(label.id), 1);
    } else {
      // Add the label
      this.mail.labels.push(label.id);
    }
    // Update the mail on the server
    this._mailboxService.updateMail(this.mail.id, {
      labels: this.mail.labels
    }).subscribe();
    // If the label was deleted...
    if (deleted) {
      // If the current activated route has a label parameter and it equals to the one we are removing...
      if (this._activatedRoute.snapshot.paramMap.get('label') && this._activatedRoute.snapshot.paramMap.get('label') === label.slug) {
        // Navigate to the parent
        this._router.navigate(['./'], {
          relativeTo: this._activatedRoute.parent
        });
      }
    }
  }
  /**
   * Toggle important
   */
  toggleImportant() {
    // Update the mail object
    this.mail.important = !this.mail.important;
    // Update the mail on the server
    this._mailboxService.updateMail(this.mail.id, {
      important: this.mail.important
    }).subscribe();
    // If the important was removed...
    if (!this.mail.important) {
      // If the current activated route has a filter parameter and it equals to the 'important'...
      if (this._activatedRoute.snapshot.paramMap.get('filter') && this._activatedRoute.snapshot.paramMap.get('filter') === 'important') {
        // Navigate to the parent
        this._router.navigate(['./'], {
          relativeTo: this._activatedRoute.parent
        });
      }
    }
  }
  /**
   * Toggle star
   */
  toggleStar() {
    // Update the mail object
    this.mail.starred = !this.mail.starred;
    // Update the mail on the server
    this._mailboxService.updateMail(this.mail.id, {
      starred: this.mail.starred
    }).subscribe();
    // If the star was removed...
    if (!this.mail.starred) {
      // If the current activated route has a filter parameter and it equals to the 'starred'...
      if (this._activatedRoute.snapshot.paramMap.get('filter') && this._activatedRoute.snapshot.paramMap.get('filter') === 'starred') {
        // Navigate to the parent
        this._router.navigate(['./'], {
          relativeTo: this._activatedRoute.parent
        });
      }
    }
  }
  /**
   * Toggle unread
   *
   * @param unread
   */
  toggleUnread(unread) {
    // Update the mail object
    this.mail.unread = unread;
    // Update the mail on the server
    this._mailboxService.updateMail(this.mail.id, {
      unread: this.mail.unread
    }).subscribe();
  }
  /**
   * Reply
   */
  reply() {
    // Activate the reply form
    this.replyFormActive = true;
    // Scroll to the bottom of the details pane
    setTimeout(() => {
      this._elementRef.nativeElement.scrollTop = this._elementRef.nativeElement.scrollHeight;
    });
  }
  /**
   * Reply all
   */
  replyAll() {
    // Activate the reply form
    this.replyFormActive = true;
    // Scroll to the bottom of the details pane
    setTimeout(() => {
      this._elementRef.nativeElement.scrollTop = this._elementRef.nativeElement.scrollHeight;
    });
  }
  /**
   * Forward
   */
  forward() {
    // Activate the reply form
    this.replyFormActive = true;
    // Scroll to the bottom of the details pane
    setTimeout(() => {
      this._elementRef.nativeElement.scrollTop = this._elementRef.nativeElement.scrollHeight;
    });
  }
  /**
   * Discard
   */
  discard() {
    // Deactivate the reply form
    this.replyFormActive = false;
  }
  /**
   * Send
   */
  send() {
    // Deactivate the reply form
    this.replyFormActive = false;
  }
  /**
   * Open info details panel
   */
  openInfoDetailsPanel() {
    // Create the overlay
    this._overlayRef = this._overlay.create({
      backdropClass: '',
      hasBackdrop: true,
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._infoDetailsPanelOrigin._elementRef.nativeElement).withFlexibleDimensions(true).withViewportMargin(16).withLockedPosition(true).withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }, {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      }])
    });
    // Create a portal from the template
    const templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.TemplatePortal(this._infoDetailsPanel, this._viewContainerRef);
    // Attach the portal to the overlay
    this._overlayRef.attach(templatePortal);
    // Subscribe to the backdrop click
    this._overlayRef.backdropClick().subscribe(() => {
      // If overlay exists and attached...
      if (this._overlayRef && this._overlayRef.hasAttached()) {
        // Detach it
        this._overlayRef.detach();
      }
      // If template portal exists and attached...
      if (templatePortal && templatePortal.isAttached) {
        // Detach it
        templatePortal.detach();
      }
    });
  }
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  static #_ = this.ɵfac = function MailboxDetailsComponent_Factory(t) {
    return new (t || MailboxDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_3__.MailboxService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MailboxDetailsComponent,
    selectors: [["mailbox-details"]],
    viewQuery: function MailboxDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._infoDetailsPanelOrigin = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._infoDetailsPanel = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 2,
    consts: [[1, "flex", "flex-col", "flex-auto", "overflow-y-auto", "lg:overflow-hidden", "bg-card", "dark:bg-default"], [4, "ngIf", "ngIfElse"], ["selectMailToRead", ""], [1, "z-10", "relative", "flex", "flex-col", "flex-0", "w-full", "border-b"], [1, "flex", "items-center", "min-h-16", "px-4", "md:px-6", "border-b", "bg-gray-50", "dark:bg-transparent"], ["mat-icon-button", "", 1, "lg:hidden", "md:-ml-2", 3, "routerLink"], [3, "svgIcon"], ["mat-icon-button", "", 1, "ml-auto", 3, "matMenuTriggerFor"], ["toggleLabelMenu", "matMenu"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-icon-button", "", 1, "ml-2", 3, "click"], [3, "ngClass", "svgIcon"], ["mat-icon-button", "", 1, "ml-2", 3, "matMenuTriggerFor"], ["mailMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "py-5", "px-6"], [1, "flex", "flex-auto", "my-1", "mr-4", "text-2xl"], [4, "ngIf"], ["fuseScrollReset", "", 1, "flex", "flex-col", "flex-auto", "shrink-0", "lg:shrink", "p-3", "lg:overflow-y-auto", "bg-gray-100", "dark:bg-transparent"], [1, "flex", "flex-col", "flex-0", "w-full", "shadow", "rounded-2xl", "overflow-hidden", "bg-card", "dark:bg-black", "dark:bg-opacity-10"], [1, "flex", "flex-col", "py-8", "px-6"], [1, "flex", "items-center", "w-full"], [1, "flex", "flex-0", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "overflow-hidden"], ["alt", "User avatar", 1, "w-full", "h-full", 3, "src"], [1, "ml-4", "min-w-0"], [1, "font-semibold", "truncate"], [1, "flex", "items-center", "mt-0.5", "leading-5"], [1, "ml-1", "font-semibold"], ["mat-icon-button", "", 1, "w-5", "h-5", "min-h-5", "ml-1", 3, "click"], ["infoDetailsPanelOrigin", ""], [1, "icon-size-5", 3, "svgIcon"], ["infoDetailsPanel", ""], [1, "flex", "mt-8", "whitespace-pre-line", "leading-relaxed", 3, "innerHTML"], [1, "flex", "w-full", "p-6", "border-t", "bg-gray-50", "dark:bg-transparent"], ["mat-menu-item", "", "matRipple", "", 3, "click"], [1, "pointer-events-none", 3, "color", "checked", "disableRipple"], ["mat-menu-item", "", 3, "click"], [1, "flex", "flex-wrap", "items-center", "justify-start", "-mx-1"], [4, "ngFor", "ngForOf"], [1, "m-1", "py-0.5", "px-2.5", "rounded-full", "text-sm", "font-medium", "whitespace-nowrap", 3, "ngClass"], [1, "ml-1"], [1, "ml-1", "font-semibold", 3, "ngPlural"], ["ngPluralCase", "=1"], ["ngPluralCase", "other"], [1, "flex", "flex-col", "py-4", "px-6", "w-full", "max-w-160", "space-y-1.5", "border", "text-md", "rounded", "shadow-md", "overflow-auto", "bg-card"], [1, "flex"], [1, "min-w-14", "font-medium", "text-right"], [1, "pl-2", "whitespace-pre-wrap"], [1, "flex", "flex-col", "w-full"], [1, "flex", "items-center", "mt-12"], [1, "ml-2", "font-semibold"], [1, "flex", "flex-wrap", "-m-3", "mt-3"], [1, "flex", "items-center", "m-3"], ["class", "w-10 h-10 rounded-md overflow-hidden", 3, "src", 4, "ngIf"], ["class", "flex items-center justify-center w-10 h-10 rounded-md overflow-hidden bg-primary-100", 4, "ngIf"], [1, "ml-3"], [1, "text-md", "font-medium", "truncate", 3, "title"], [1, "text-sm", "font-medium", "truncate", "text-secondary", 3, "title"], [1, "w-10", "h-10", "rounded-md", "overflow-hidden", 3, "src"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-md", "overflow-hidden", "bg-primary-100"], [1, "flex", "items-center", "justify-center", "text-sm", "font-semibold", "text-primary-500-800"], [1, "flex", "flex-wrap", "w-full", "-m-2"], ["mat-stroked-button", "", 1, "m-2", 3, "color", "click"], [1, "ml-2"], [1, "icon-size-5", 3, "color", "svgIcon"], ["replyForm", ""], [3, "subscriptSizing"], ["matInput", "", 1, "textarea", 3, "placeholder", "rows"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "mt-4", "sm:mt-6"], [1, "-ml-2"], ["mat-icon-button", ""], [1, "flex", "items-center", "mt-4", "sm:mt-0"], ["mat-button", "", 1, "order-last", "sm:order-first", "ml-3", "sm:ml-0", 3, "click"], ["mat-flat-button", "", 1, "sm:ml-3", 3, "color", "click"], [1, "flex", "flex-col", "flex-auto", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], [1, "icon-size-24", 3, "svgIcon"], [1, "mt-4", "text-2xl", "font-semibold", "tracking-tight", "text-secondary"]],
    template: function MailboxDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MailboxDetailsComponent_ng_container_1_Template, 52, 32, "ng-container", 1)(2, MailboxDetailsComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mail)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _fuse_directives_scroll_reset__WEBPACK_IMPORTED_MODULE_0__.FuseScrollResetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgPlural, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgPluralCase, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _fuse_pipes_find_by_key_find_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__.FuseFindByKeyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 93005:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/empty-details/empty-details.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailboxEmptyDetailsComponent: () => (/* binding */ MailboxEmptyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class MailboxEmptyDetailsComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function MailboxEmptyDetailsComponent_Factory(t) {
    return new (t || MailboxEmptyDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MailboxEmptyDetailsComponent,
    selectors: [["mailbox-empty-details"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 1,
    consts: [[1, "flex", "flex-col", "flex-auto", "overflow-y-auto", "lg:overflow-hidden", "bg-card", "dark:bg-default"], [1, "flex", "flex-col", "flex-auto", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], [1, "icon-size-24", 3, "svgIcon"], [1, "mt-4", "text-2xl", "font-semibold", "tracking-tight", "text-secondary"]],
    template: function MailboxEmptyDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select a mail to read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_outline:envelope");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 79334:
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/list/list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailboxListComponent: () => (/* binding */ MailboxListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.component */ 13535);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.service */ 82781);












const _c0 = ["mailList"];
function MailboxListComponent_ng_container_1_mat_progress_bar_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", "indeterminate");
  }
}
function MailboxListComponent_ng_container_1_ng_container_27_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 29);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_solid:exclamation-circle");
  }
}
function MailboxListComponent_ng_container_1_ng_container_27_div_13_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 33);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_solid:paper-clip");
  }
}
function MailboxListComponent_ng_container_1_ng_container_27_div_13_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 34);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_solid:star");
  }
}
function MailboxListComponent_ng_container_1_ng_container_27_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MailboxListComponent_ng_container_1_ng_container_27_div_13_mat_icon_1_Template, 1, 1, "mat-icon", 31)(2, MailboxListComponent_ng_container_1_ng_container_27_div_13_mat_icon_2_Template, 1, 1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", mail_r7.attachments && mail_r7.attachments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", mail_r7.starred);
  }
}
const _c1 = a0 => [a0];
const _c2 = (a0, a1) => ({
  "border-primary": a0,
  "bg-primary-50 dark:bg-black dark:bg-opacity-5": a1
});
function MailboxListComponent_ng_container_1_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailboxListComponent_ng_container_1_ng_container_27_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const mail_r7 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.onMailSelected(mail_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 20)(3, "div", 21)(4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MailboxListComponent_ng_container_1_ng_container_27_mat_icon_6_Template, 1, 1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 25)(11, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MailboxListComponent_ng_container_1_ng_container_27_div_13_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const mail_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, mail_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](13, _c2, mail_r7.unread, ctx_r6.selectedMail && ctx_r6.selectedMail.id === mail_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mail_r7.from.contact.split("<")[0].trim(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", mail_r7.important);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 8, mail_r7.date, "LLL dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](mail_r7.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", mail_r7.attachments && mail_r7.attachments.length > 0 || mail_r7.starred);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mail_r7.content, "... ");
  }
}
function MailboxListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailboxListComponent_ng_container_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.mailboxComponent.drawer.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 10)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "of");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, MailboxListComponent_ng_container_1_mat_progress_bar_24_Template, 1, 1, "mat-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, MailboxListComponent_ng_container_1_ng_container_27_Template, 16, 16, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.pagination.startIndex + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.pagination.endIndex + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.pagination.totalResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.pagination.currentPage === 1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c1, "../" + (ctx_r0.pagination.currentPage > 1 ? ctx_r0.pagination.currentPage - 1 : 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.pagination.currentPage === ctx_r0.pagination.lastPage)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, "../" + (ctx_r0.pagination.currentPage < ctx_r0.pagination.lastPage ? ctx_r0.pagination.currentPage + 1 : ctx_r0.pagination.lastPage)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.mailsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.mails)("ngForTrackBy", ctx_r0.trackByFn);
  }
}
function MailboxListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "There are no e-mails");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:envelope");
  }
}
const _c3 = (a0, a1) => ({
  "z-20 absolute inset-0 lg:static lg:inset-auto flex": a0,
  "hidden lg:flex": a1
});
function MailboxListComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](1, _c3, ctx_r3.selectedMail && ctx_r3.selectedMail.id, !ctx_r3.selectedMail || !ctx_r3.selectedMail.id));
  }
}
class MailboxListComponent {
  /**
   * Constructor
   */
  constructor(mailboxComponent, _mailboxService) {
    this.mailboxComponent = mailboxComponent;
    this._mailboxService = _mailboxService;
    this.mailsLoading = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Category
    this._mailboxService.category$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(category => {
      this.category = category;
    });
    // Mails
    this._mailboxService.mails$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(mails => {
      this.mails = mails;
    });
    // Mails loading
    this._mailboxService.mailsLoading$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(mailsLoading => {
      this.mailsLoading = mailsLoading;
      // If the mail list element is available & the mails are loaded...
      if (this.mailList && !mailsLoading) {
        // Reset the mail list element scroll position to top
        this.mailList.nativeElement.scrollTo(0, 0);
      }
    });
    // Pagination
    this._mailboxService.pagination$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(pagination => {
      this.pagination = pagination;
    });
    // Selected mail
    this._mailboxService.mail$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(mail => {
      this.selectedMail = mail;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * On mail selected
   *
   * @param mail
   */
  onMailSelected(mail) {
    // If the mail is unread...
    if (mail.unread) {
      // Update the mail object
      mail.unread = false;
      // Update the mail on the server
      this._mailboxService.updateMail(mail.id, {
        unread: false
      }).subscribe();
    }
    // Execute the mailSelected observable
    this._mailboxService.selectedMailChanged.next(mail);
  }
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  static #_ = this.ɵfac = function MailboxListComponent_Factory(t) {
    return new (t || MailboxListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_apps_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_0__.MailboxComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_1__.MailboxService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailboxListComponent,
    selectors: [["mailbox-list"]],
    viewQuery: function MailboxListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mailList = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 3,
    consts: [[1, "relative", "flex", "flex-auto", "w-full", "bg-card", "dark:bg-transparent"], [4, "ngIf", "ngIfElse"], ["noMails", ""], [4, "ngIf"], [1, "relative", "flex", "flex-auto", "flex-col", "w-full", "min-w-0", "lg:min-w-90", "lg:max-w-90", "border-r", "z-10"], [1, "relative", "flex", "flex-0", "items-center", "justify-between", "h-16", "px-4", "border-b", "bg-gray-50", "dark:bg-transparent"], [1, "flex", "items-center"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "ml-2", "font-semibold", "uppercase"], [1, "flex", "items-center", "mr-3", "text-md", "font-medium"], [1, "mx-1", "text-secondary"], ["mat-icon-button", "", 1, "w-8", "h-8", "min-h-8", 3, "disabled", "routerLink"], [1, "icon-size-5", 3, "svgIcon"], ["class", "absolute inset-x-0 bottom-0 h-0.5", 3, "mode", 4, "ngIf"], [1, "overflow-y-auto"], ["mailList", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "absolute", "inset-x-0", "bottom-0", "h-0.5", 3, "mode"], [1, "relative", "flex", "border-t", "first:border-0", "hover:bg-hover", 3, "routerLink", "click"], [1, "flex", "flex-col", "items-start", "justify-start", "w-full", "py-6", "pr-4", "pl-5", "border-l-4", "border-transparent", 3, "ngClass"], [1, "flex", "items-center", "w-full"], [1, "mr-2", "font-semibold", "truncate"], ["class", "mr-3 icon-size-4 text-red-500 dark:text-red-600", 3, "svgIcon", 4, "ngIf"], [1, "ml-auto", "text-md", "text-right", "whitespace-nowrap", "text-hint"], [1, "flex", "items-center", "w-full", "mt-1"], [1, "leading-4", "truncate"], ["class", "flex ml-auto pl-2", 4, "ngIf"], [1, "mt-2", "leading-normal", "line-clamp-2", "text-secondary"], [1, "mr-3", "icon-size-4", "text-red-500", "dark:text-red-600", 3, "svgIcon"], [1, "flex", "ml-auto", "pl-2"], ["class", "flex justify-center icon-size-4", 3, "svgIcon", 4, "ngIf"], ["class", "flex justify-center icon-size-4 ml-1 text-orange-500 dark:text-orange-400", 3, "svgIcon", 4, "ngIf"], [1, "flex", "justify-center", "icon-size-4", 3, "svgIcon"], [1, "flex", "justify-center", "icon-size-4", "ml-1", "text-orange-500", "dark:text-orange-400", 3, "svgIcon"], [1, "z-100", "absolute", "inset-0", "flex", "flex-auto", "flex-col", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], [1, "icon-size-24", 3, "svgIcon"], [1, "mt-4", "text-2xl", "font-semibold", "tracking-tight", "text-secondary"], [1, "flex-auto", 3, "ngClass"]],
    template: function MailboxListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MailboxListComponent_ng_container_1_Template, 28, 18, "ng-container", 1)(2, MailboxListComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(4, MailboxListComponent_ng_container_4_Template, 3, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mails && ctx.mails.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mails && ctx.mails.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 13535:
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/mailbox.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailboxComponent: () => (/* binding */ MailboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 77706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);







const _c0 = ["drawer"];
class MailboxComponent {
  /**
   * Constructor
   */
  constructor(_fuseMediaWatcherService) {
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this.drawerMode = 'side';
    this.drawerOpened = true;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribeAll)).subscribe(({
      matchingAliases
    }) => {
      // Set the drawerMode and drawerOpened if the given breakpoint is active
      if (matchingAliases.includes('md')) {
        this.drawerMode = 'side';
        this.drawerOpened = true;
      } else {
        this.drawerMode = 'over';
        this.drawerOpened = false;
      }
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  static #_ = this.ɵfac = function MailboxComponent_Factory(t) {
    return new (t || MailboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MailboxComponent,
    selectors: [["mailbox"]],
    viewQuery: function MailboxComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 2,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "mode", "opened"], ["drawer", ""], [1, "flex", "flex-col", "overflow-hidden"], [1, "flex", "flex-auto", "overflow-hidden"]],
    template: function MailboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "mailbox-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.MailboxSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5001:
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/mailbox.constants.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   labelColorDefs: () => (/* binding */ labelColorDefs),
/* harmony export */   labelColors: () => (/* binding */ labelColors)
/* harmony export */ });
const labelColors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];
const labelColorDefs = {
  gray: {
    text: 'text-gray-500',
    bg: 'bg-gray-500',
    combined: 'text-gray-800 bg-gray-100'
  },
  red: {
    text: 'text-red-500',
    bg: 'bg-red-500',
    combined: 'text-red-800 bg-red-100'
  },
  orange: {
    text: 'text-orange-500',
    bg: 'bg-orange-500',
    combined: 'text-orange-800 bg-orange-100'
  },
  yellow: {
    text: 'text-yellow-500',
    bg: 'bg-yellow-500',
    combined: 'text-yellow-800 bg-yellow-100'
  },
  green: {
    text: 'text-green-500',
    bg: 'bg-green-500',
    combined: 'text-green-800 bg-green-100'
  },
  teal: {
    text: 'text-teal-500',
    bg: 'bg-teal-500',
    combined: 'text-teal-800 bg-teal-100'
  },
  blue: {
    text: 'text-blue-500',
    bg: 'bg-blue-500',
    combined: 'text-blue-800 bg-blue-100'
  },
  indigo: {
    text: 'text-indigo-500',
    bg: 'bg-indigo-500',
    combined: 'text-indigo-800 bg-indigo-100'
  },
  purple: {
    text: 'text-purple-500',
    bg: 'bg-purple-500',
    combined: 'text-purple-800 bg-purple-100'
  },
  pink: {
    text: 'text-pink-500',
    bg: 'bg-pink-500',
    combined: 'text-pink-800 bg-pink-100'
  }
};

/***/ }),

/***/ 84138:
/*!**************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/mailbox.routes.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_apps_mailbox_details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/details/details.component */ 48565);
/* harmony import */ var app_modules_admin_apps_mailbox_empty_details_empty_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/empty-details/empty-details.component */ 93005);
/* harmony import */ var app_modules_admin_apps_mailbox_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/list/list.component */ 79334);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.component */ 13535);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.service */ 82781);
/* harmony import */ var app_modules_admin_apps_mailbox_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/settings/settings.component */ 19681);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 24164);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 74300);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 17474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 33252);










/**
 * Mailbox custom route matcher
 *
 * @param url
 */
const mailboxRouteMatcher = url => {
  // Prepare consumed url and positional parameters
  let consumed = url;
  const posParams = {};
  // Settings
  if (url[0].path === 'settings') {
    // Do not match
    return null;
  }
  // Filter or label
  else if (url[0].path === 'filter' || url[0].path === 'label') {
    posParams[url[0].path] = url[1];
    posParams['page'] = url[2];
    // Remove the id if exists
    if (url[3]) {
      consumed = url.slice(0, -1);
    }
  }
  // Folder
  else {
    posParams['folder'] = url[0];
    posParams['page'] = url[1];
    // Remove the id if exists
    if (url[2]) {
      consumed = url.slice(0, -1);
    }
  }
  return {
    consumed,
    posParams
  };
};
/**
 * Mailbox custom guards and resolvers runner
 *
 * @param from
 * @param to
 */
const mailboxRunGuardsAndResolvers = (from, to) => {
  // If we are navigating from mail to mails, meaning there is an id in
  // from's deepest first child and there isn't one in the to's, we will
  // trigger the resolver
  // Get the current activated route of the 'from'
  let fromCurrentRoute = from;
  while (fromCurrentRoute.firstChild) {
    fromCurrentRoute = fromCurrentRoute.firstChild;
  }
  // Get the current activated route of the 'to'
  let toCurrentRoute = to;
  while (toCurrentRoute.firstChild) {
    toCurrentRoute = toCurrentRoute.firstChild;
  }
  // Trigger the resolver if the condition met
  if (fromCurrentRoute.paramMap.get('id') && !toCurrentRoute.paramMap.get('id')) {
    return true;
  }
  // If the from and to params are equal, don't trigger the resolver
  const fromParams = {};
  const toParams = {};
  from.paramMap.keys.forEach(key => {
    fromParams[key] = from.paramMap.get(key);
  });
  to.paramMap.keys.forEach(key => {
    toParams[key] = to.paramMap.get(key);
  });
  if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(fromParams, toParams)) {
    return false;
  }
  // Trigger the resolver on other cases
  return true;
};
/**
 * Mails resolver
 *
 * @param route
 * @param state
 */
const mailsResolver = (route, state) => {
  const mailboxService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_4__.MailboxService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router);
  // Don't allow page param to go below 1
  if (route.paramMap.get('page') && parseInt(route.paramMap.get('page'), 10) <= 0) {
    // Get the parent url
    const url = state.url.split('/').slice(0, -1).join('/') + '/1';
    // Navigate to there
    router.navigateByUrl(url);
    // Don't allow request to go through
    return false;
  }
  // Create and build the sources array
  const sources = [];
  // If folder is set on the parameters...
  if (route.paramMap.get('folder')) {
    sources.push(mailboxService.getMailsByFolder(route.paramMap.get('folder'), route.paramMap.get('page')));
  }
  // If filter is set on the parameters...
  if (route.paramMap.get('filter')) {
    sources.push(mailboxService.getMailsByFilter(route.paramMap.get('filter'), route.paramMap.get('page')));
  }
  // If label is set on the parameters...
  if (route.paramMap.get('label')) {
    sources.push(mailboxService.getMailsByLabel(route.paramMap.get('label'), route.paramMap.get('page')));
  }
  // Fork join all the sources
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)(sources).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
    // If there is no selected mail, reset the mail every
    // time mail list changes. This will ensure that the
    // mail will be reset while navigating between the
    // folders/filters/labels, but it won't reset on page
    // reload if we are reading a mail.
    // Try to get the current activated route
    let currentRoute = route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    // Make sure there is no 'id' parameter on the current route
    if (!currentRoute.paramMap.get('id')) {
      // Reset the mail
      mailboxService.resetMail().subscribe();
    }
  }),
  // Error here means the requested page is not available
  (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(error => {
    // Log the error
    console.error(error.message);
    // Get the parent url and append the last possible page number to the parent url
    const url = state.url.split('/').slice(0, -1).join('/') + '/' + error.pagination.lastPage;
    // Navigate to there
    router.navigateByUrl(url);
    // Throw an error
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(error);
  }));
};
/**
 * Mail resolver
 *
 * @param route
 * @param state
 */
const mailResolver = (route, state) => {
  const mailboxService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_4__.MailboxService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router);
  return mailboxService.getMailById(route.paramMap.get('id')).pipe(
  // Error here means the requested mail is either
  // not available on the requested page or not
  // available at all
  (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(error => {
    // Log the error
    console.error(error);
    // Get the parent url
    const parentUrl = state.url.split('/').slice(0, -1).join('/');
    // Navigate to there
    router.navigateByUrl(parentUrl);
    // Throw an error
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(error);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '',
  redirectTo: 'inbox/1',
  pathMatch: 'full'
}, {
  path: 'filter/:funnel',
  redirectTo: 'filter/:filter/1',
  pathMatch: 'full'
}, {
  path: 'label/:label',
  redirectTo: 'label/:label/1',
  pathMatch: 'full'
}, {
  path: ':folder',
  redirectTo: ':folder/1',
  pathMatch: 'full'
}, {
  path: '',
  component: app_modules_admin_apps_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_3__.MailboxComponent,
  resolve: {
    filters: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_4__.MailboxService).getFilters(),
    folders: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_4__.MailboxService).getFolders(),
    labels: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_4__.MailboxService).getLabels()
  },
  children: [{
    component: app_modules_admin_apps_mailbox_list_list_component__WEBPACK_IMPORTED_MODULE_2__.MailboxListComponent,
    matcher: mailboxRouteMatcher,
    runGuardsAndResolvers: mailboxRunGuardsAndResolvers,
    resolve: {
      mails: mailsResolver
    },
    children: [{
      path: '',
      pathMatch: 'full',
      component: app_modules_admin_apps_mailbox_empty_details_empty_details_component__WEBPACK_IMPORTED_MODULE_1__.MailboxEmptyDetailsComponent
    }, {
      path: ':id',
      component: app_modules_admin_apps_mailbox_details_details_component__WEBPACK_IMPORTED_MODULE_0__.MailboxDetailsComponent,
      resolve: {
        mail: mailResolver
      }
    }]
  }, {
    path: 'settings',
    component: app_modules_admin_apps_mailbox_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__.MailboxSettingsComponent
  }]
}]);

/***/ }),

/***/ 82781:
/*!***************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/mailbox.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailboxService: () => (/* binding */ MailboxService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 81891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 54860);



class MailboxService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.selectedMailChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this._category = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this._folders = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this._labels = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this._mails = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this._mailsLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this._mail = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this._pagination = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for category
   */
  get category$() {
    return this._category.asObservable();
  }
  /**
   * Getter for filters
   */
  get filters$() {
    return this._filters.asObservable();
  }
  /**
   * Getter for folders
   */
  get folders$() {
    return this._folders.asObservable();
  }
  /**
   * Getter for labels
   */
  get labels$() {
    return this._labels.asObservable();
  }
  /**
   * Getter for mails
   */
  get mails$() {
    return this._mails.asObservable();
  }
  /**
   * Getter for mails loading
   */
  get mailsLoading$() {
    return this._mailsLoading.asObservable();
  }
  /**
   * Getter for mail
   */
  get mail$() {
    return this._mail.asObservable();
  }
  /**
   * Getter for pagination
   */
  get pagination$() {
    return this._pagination.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get filters
   */
  getFilters() {
    return this._httpClient.get('api/apps/mailbox/filters').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      this._filters.next(response);
    }));
  }
  /**
   * Get folders
   */
  getFolders() {
    return this._httpClient.get('api/apps/mailbox/folders').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      this._folders.next(response);
    }));
  }
  /**
   * Get labels
   */
  getLabels() {
    return this._httpClient.get('api/apps/mailbox/labels').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      this._labels.next(response);
    }));
  }
  /**
   * Get mails by filter
   */
  getMailsByFilter(filter, page = '1') {
    // Execute the mails loading with true
    this._mailsLoading.next(true);
    return this._httpClient.get('api/apps/mailbox/mails', {
      params: {
        filter,
        page
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      this._category.next({
        type: 'filter',
        name: filter
      });
      this._mails.next(response.mails);
      this._pagination.next(response.pagination);
      this._mailsLoading.next(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(response => {
      if (response.mails === null) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
          message: 'Requested page is not available!',
          pagination: response.pagination
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(response);
    }));
  }
  /**
   * Get mails by folder
   */
  getMailsByFolder(folder, page = '1') {
    // Execute the mails loading with true
    this._mailsLoading.next(true);
    return this._httpClient.get('api/apps/mailbox/mails', {
      params: {
        folder,
        page
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      this._category.next({
        type: 'folder',
        name: folder
      });
      this._mails.next(response.mails);
      this._pagination.next(response.pagination);
      this._mailsLoading.next(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(response => {
      if (response.mails === null) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
          message: 'Requested page is not available!',
          pagination: response.pagination
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(response);
    }));
  }
  /**
   * Get mails by label
   */
  getMailsByLabel(label, page = '1') {
    // Execute the mails loading with true
    this._mailsLoading.next(true);
    return this._httpClient.get('api/apps/mailbox/mails', {
      params: {
        label,
        page
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      this._category.next({
        type: 'label',
        name: label
      });
      this._mails.next(response.mails);
      this._pagination.next(response.pagination);
      this._mailsLoading.next(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(response => {
      if (response.mails === null) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
          message: 'Requested page is not available!',
          pagination: response.pagination
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(response);
    }));
  }
  /**
   * Get mail by id
   */
  getMailById(id) {
    return this._mails.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(mails => {
      // Find the mail
      const mail = mails.find(item => item.id === id) || null;
      // Update the mail
      this._mail.next(mail);
      // Return the mail
      return mail;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(mail => {
      if (!mail) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)('Could not found mail with id of ' + id + '!');
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(mail);
    }));
  }
  /**
   * Update mail
   *
   * @param id
   * @param mail
   */
  updateMail(id, mail) {
    return this._httpClient.patch('api/apps/mailbox/mail', {
      id,
      mail
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
      // Re-fetch the folders on mail update
      // to get the updated counts on the sidebar
      this.getFolders().subscribe();
    }));
  }
  /**
   * Reset the current mail
   */
  resetMail() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
      this._mail.next(null);
    }));
  }
  /**
   * Add label
   *
   * @param label
   */
  addLabel(label) {
    return this.labels$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(labels => this._httpClient.post('api/apps/mailbox/label', {
      label
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(newLabel => {
      // Update the labels with the new label
      this._labels.next([...labels, newLabel]);
      // Return the new label
      return newLabel;
    }))));
  }
  /**
   * Update label
   *
   * @param id
   * @param label
   */
  updateLabel(id, label) {
    return this.labels$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(labels => this._httpClient.patch('api/apps/mailbox/label', {
      id,
      label
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(updatedLabel => {
      // Find the index of the updated label within the labels
      const index = labels.findIndex(item => item.id === id);
      // Update the label
      labels[index] = updatedLabel;
      // Update the labels
      this._labels.next(labels);
      // Return the updated label
      return updatedLabel;
    }))));
  }
  /**
   * Delete label
   *
   * @param id
   */
  deleteLabel(id) {
    return this.labels$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(labels => this._httpClient.delete('api/apps/mailbox/label', {
      params: {
        id
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(isDeleted => {
      // Find the index of the deleted label within the labels
      const index = labels.findIndex(item => item.id === id);
      // Delete the label
      labels.splice(index, 1);
      // Update the labels
      this._labels.next(labels);
      // Return the deleted status
      return isDeleted;
    }))));
  }
  static #_ = this.ɵfac = function MailboxService_Factory(t) {
    return new (t || MailboxService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: MailboxService,
    factory: MailboxService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 19681:
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/settings/settings.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailboxSettingsComponent: () => (/* binding */ MailboxSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.constants */ 5001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.component */ 13535);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.service */ 82781);




















function MailboxSettingsComponent_ng_container_22_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:check");
  }
}
function MailboxSettingsComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-option", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MailboxSettingsComponent_ng_container_22_mat_icon_3_Template, 1, 1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", color_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.labelColorDefs[color_r2].bg);
  }
}
function MailboxSettingsComponent_ng_container_26_ng_container_9_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:check");
  }
}
function MailboxSettingsComponent_ng_container_26_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-option", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MailboxSettingsComponent_ng_container_26_ng_container_9_mat_icon_3_Template, 1, 1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const color_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", color_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r8.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r6.labelColorDefs[color_r7].bg);
  }
}
function MailboxSettingsComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-select", 26)(4, "mat-select-trigger", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Label color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MailboxSettingsComponent_ng_container_26_ng_container_9_Template, 5, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MailboxSettingsComponent_ng_container_26_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const label_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.deleteLabel(label_r5.get("id").value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const label_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", label_r5.get("title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", label_r5.get("color"))("disableOptionCentering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.labelColorDefs[label_r5.get("color").value].text)("svgIcon", "heroicons_outline:tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.labelColors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_solid:trash");
  }
}
class MailboxSettingsComponent {
  /**
   * Constructor
   */
  constructor(mailboxComponent, _formBuilder, _mailboxService) {
    this.mailboxComponent = mailboxComponent;
    this._formBuilder = _formBuilder;
    this._mailboxService = _mailboxService;
    this.labelColors = app_modules_admin_apps_mailbox_mailbox_constants__WEBPACK_IMPORTED_MODULE_0__.labelColors;
    this.labelColorDefs = app_modules_admin_apps_mailbox_mailbox_constants__WEBPACK_IMPORTED_MODULE_0__.labelColorDefs;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Create the labels form
    this.labelsForm = this._formBuilder.group({
      labels: this._formBuilder.array([]),
      newLabel: this._formBuilder.group({
        title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        color: ['orange']
      })
    });
    // Labels
    this._mailboxService.labels$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(labels => {
      // Get the labels
      this.labels = labels;
      // Iterate through the labels
      labels.forEach(label => {
        // Create a label form group
        const labelFormGroup = this._formBuilder.group({
          id: [label.id],
          title: [label.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
          slug: [label.slug],
          color: [label.color]
        });
        // Add the label form group to the labels form array
        this.labelsForm.get('labels').push(labelFormGroup);
      });
    });
    // Update labels when there is a value change
    this.labelsForm.get('labels').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(500)).subscribe(() => {
      this.updateLabels();
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Add a label
   */
  addLabel() {
    // Add label to the server
    this._mailboxService.addLabel(this.labelsForm.get('newLabel').value).subscribe(addedLabel => {
      // Push the new label to the labels form array
      this.labelsForm.get('labels').push(this._formBuilder.group({
        id: [addedLabel.id],
        title: [addedLabel.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        slug: [addedLabel.slug],
        color: [addedLabel.color]
      }));
      // Reset the new label form
      this.labelsForm.get('newLabel').markAsPristine();
      this.labelsForm.get('newLabel').markAsUntouched();
      this.labelsForm.get('newLabel.title').reset();
      this.labelsForm.get('newLabel.title').clearValidators();
      this.labelsForm.get('newLabel.title').updateValueAndValidity();
    });
  }
  /**
   * Delete a label
   */
  deleteLabel(id) {
    // Get the labels form array
    const labelsFormArray = this.labelsForm.get('labels');
    // Remove the label from the labels form array
    labelsFormArray.removeAt(labelsFormArray.value.findIndex(label => label.id === id));
    // Delete label on the server
    this._mailboxService.deleteLabel(id).subscribe();
  }
  /**
   * Update labels
   */
  updateLabels() {
    // Iterate through the labels form array controls
    this.labelsForm.get('labels').controls.forEach(labelFormGroup => {
      // If the label has been edited...
      if (labelFormGroup.dirty) {
        // Update the label on the server
        this._mailboxService.updateLabel(labelFormGroup.value.id, labelFormGroup.value).subscribe();
      }
    });
    // Reset the labels form array
    this.labelsForm.get('labels').markAsPristine();
    this.labelsForm.get('labels').markAsUntouched();
  }
  static #_ = this.ɵfac = function MailboxSettingsComponent_Factory(t) {
    return new (t || MailboxSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_modules_admin_apps_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_1__.MailboxComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_2__.MailboxService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MailboxSettingsComponent,
    selectors: [["mailbox-settings"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 27,
    vars: 14,
    consts: [[1, "flex", "flex-col", "flex-auto", "overflow-y-auto", "p-8"], [1, "flex", "items-center"], [1, "md:hidden", "-ml-2", "mr-3"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "text-secondary"], [1, "mt-8", 3, "formGroup"], [1, "flex", "items-center", "justify-start", "w-full", "max-w-80", "mt-6", 3, "formGroupName"], [1, "w-full"], ["matInput", "", 3, "formControlName", "placeholder"], ["matPrefix", "", 3, "formControlName", "disableOptionCentering"], [1, "h-6"], [3, "ngClass", "svgIcon"], [1, "px-4", "pt-5", "text-xl", "font-semibold"], [1, "flex", "flex-wrap", "w-48", "my-4", "mx-3", "-mr-5"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matSuffix", "", 3, "disabled", "click"], [1, "icon-size-5", 3, "svgIcon"], [1, "flex", "flex-col", "w-full", "max-w-80", "mt-4", 3, "formArrayName"], [1, "relative", "flex", "w-12", "h-12", "p-0", "cursor-pointer", "rounded-full", "bg-transparent", 3, "value"], ["matOption", "matOption"], ["class", "absolute m-3 text-white", 3, "svgIcon", 4, "ngIf"], [1, "flex", "w-10", "h-10", "m-1", "rounded-full", 3, "ngClass"], [1, "absolute", "m-3", "text-white", 3, "svgIcon"], ["matInput", "", 3, "formControl"], ["matPrefix", "", 3, "formControl", "disableOptionCentering"], ["mat-icon-button", "", "matSuffix", "", 3, "click"]],
    template: function MailboxSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MailboxSettingsComponent_Template_button_click_3_listener() {
          return ctx.mailboxComponent.drawer.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Manage Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Create, update and delete labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 7)(11, "div", 8)(12, "mat-form-field", 9)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "New Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-select", 11)(17, "mat-select-trigger", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Label color");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, MailboxSettingsComponent_ng_container_22_Template, 5, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MailboxSettingsComponent_Template_button_click_23_listener() {
          return ctx.addLabel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, MailboxSettingsComponent_ng_container_26_Template, 12, 7, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.labelsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", "newLabel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", "title")("placeholder", "Label title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", "color")("disableOptionCentering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.labelColorDefs[ctx.labelsForm.get("newLabel.color").value].text)("svgIcon", "heroicons_outline:tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.labelColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.labelsForm.get("newLabel").valid || !ctx.labelsForm.get("newLabel").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_solid:plus-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formArrayName", "labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.labelsForm.get("labels")["controls"]);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgFor, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 77706:
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/apps/mailbox/sidebar/sidebar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailboxSidebarComponent: () => (/* binding */ MailboxSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/navigation */ 71072);
/* harmony import */ var app_modules_admin_apps_mailbox_compose_compose_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/compose/compose.component */ 90404);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.constants */ 5001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/apps/mailbox/mailbox.service */ 82781);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 17401);












class MailboxSidebarComponent {
  /**
   * Constructor
   */
  constructor(_mailboxService, _matDialog, _fuseNavigationService) {
    this._mailboxService = _mailboxService;
    this._matDialog = _matDialog;
    this._fuseNavigationService = _fuseNavigationService;
    this.menuData = [];
    this._filtersMenuData = [];
    this._foldersMenuData = [];
    this._labelsMenuData = [];
    this._otherMenuData = [];
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Filters
    this._mailboxService.filters$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(filters => {
      this.filters = filters;
      // Generate menu links
      this._generateFiltersMenuLinks();
    });
    // Folders
    this._mailboxService.folders$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(folders => {
      this.folders = folders;
      // Generate menu links
      this._generateFoldersMenuLinks();
      // Update navigation badge
      this._updateNavigationBadge(folders);
    });
    // Labels
    this._mailboxService.labels$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(labels => {
      this.labels = labels;
      // Generate menu links
      this._generateLabelsMenuLinks();
    });
    // Generate other menu links
    this._generateOtherMenuLinks();
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Open compose dialog
   */
  openComposeDialog() {
    // Open the dialog
    const dialogRef = this._matDialog.open(app_modules_admin_apps_mailbox_compose_compose_component__WEBPACK_IMPORTED_MODULE_1__.MailboxComposeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Compose dialog was closed!');
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Generate menus for folders
   *
   * @private
   */
  _generateFoldersMenuLinks() {
    // Reset the folders menu data
    this._foldersMenuData = [];
    // Iterate through the folders
    this.folders.forEach(folder => {
      // Generate menu item for the folder
      const menuItem = {
        id: folder.id,
        title: folder.title,
        type: 'basic',
        icon: folder.icon,
        link: '/apps/mailbox/' + folder.slug
      };
      // If the count is available and is bigger than zero...
      if (folder.count && folder.count > 0) {
        // Add the count as a badge
        menuItem['badge'] = {
          title: folder.count + ''
        };
      }
      // Push the menu item to the folders menu data
      this._foldersMenuData.push(menuItem);
    });
    // Update the menu data
    this._updateMenuData();
  }
  /**
   * Generate menus for filters
   *
   * @private
   */
  _generateFiltersMenuLinks() {
    // Reset the filters menu
    this._filtersMenuData = [];
    // Iterate through the filters
    this.filters.forEach(filter => {
      // Generate menu item for the filter
      this._filtersMenuData.push({
        id: filter.id,
        title: filter.title,
        type: 'basic',
        icon: filter.icon,
        link: '/apps/mailbox/filter/' + filter.slug
      });
    });
    // Update the menu data
    this._updateMenuData();
  }
  /**
   * Generate menus for labels
   *
   * @private
   */
  _generateLabelsMenuLinks() {
    // Reset the labels menu
    this._labelsMenuData = [];
    // Iterate through the labels
    this.labels.forEach(label => {
      // Generate menu item for the label
      this._labelsMenuData.push({
        id: label.id,
        title: label.title,
        type: 'basic',
        icon: 'heroicons_outline:tag',
        classes: {
          icon: app_modules_admin_apps_mailbox_mailbox_constants__WEBPACK_IMPORTED_MODULE_2__.labelColorDefs[label.color].text
        },
        link: '/apps/mailbox/label/' + label.slug
      });
    });
    // Update the menu data
    this._updateMenuData();
  }
  /**
   * Generate other menus
   *
   * @private
   */
  _generateOtherMenuLinks() {
    // Settings menu
    this._otherMenuData.push({
      title: 'Settings',
      type: 'basic',
      icon: 'heroicons_outline:cog-8-tooth',
      link: '/apps/mailbox/settings'
    });
    // Update the menu data
    this._updateMenuData();
  }
  /**
   * Update the menu data
   *
   * @private
   */
  _updateMenuData() {
    this.menuData = [{
      title: 'MAILBOXES',
      type: 'group',
      children: [...this._foldersMenuData]
    }, {
      title: 'FILTERS',
      type: 'group',
      children: [...this._filtersMenuData]
    }, {
      title: 'LABELS',
      type: 'group',
      children: [...this._labelsMenuData]
    }, {
      type: 'spacer'
    }, ...this._otherMenuData];
  }
  /**
   * Update the navigation badge using the
   * unread count of the inbox folder
   *
   * @param folders
   * @private
   */
  _updateNavigationBadge(folders) {
    // Get the inbox folder
    const inboxFolder = this.folders.find(folder => folder.slug === 'inbox');
    // Get the component -> navigation data -> item
    const mainNavigationComponent = this._fuseNavigationService.getComponent('mainNavigation');
    // If the main navigation component exists...
    if (mainNavigationComponent) {
      const mainNavigation = mainNavigationComponent.navigation;
      const menuItem = this._fuseNavigationService.getItem('apps.mailbox', mainNavigation);
      // Update the badge title of the item
      menuItem.badge.title = inboxFolder.count + '';
      // Refresh the navigation
      mainNavigationComponent.refresh();
    }
  }
  static #_ = this.ɵfac = function MailboxSidebarComponent_Factory(t) {
    return new (t || MailboxSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_modules_admin_apps_mailbox_mailbox_service__WEBPACK_IMPORTED_MODULE_3__.MailboxService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_fuse_components_navigation__WEBPACK_IMPORTED_MODULE_0__.FuseNavigationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MailboxSidebarComponent,
    selectors: [["mailbox-sidebar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 6,
    consts: [[1, "flex", "flex-col", "flex-auto", "w-full"], [1, "mt-10", "mb-8", "mx-6", "text-4xl", "font-extrabold", "tracking-tight", "leading-none"], ["mat-flat-button", "", 1, "mx-6", 3, "color", "click"], [3, "svgIcon"], [1, "ml-2"], [3, "navigation", "inner", "mode", "opened"]],
    template: function MailboxSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Mailbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MailboxSidebarComponent_Template_button_click_3_listener() {
          return ctx.openComposeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "fuse-vertical-navigation", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("navigation", ctx.menuData)("inner", true)("mode", "side")("opened", true);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _fuse_components_navigation__WEBPACK_IMPORTED_MODULE_0__.FuseVerticalNavigationComponent],
    styles: ["mailbox-sidebar fuse-vertical-navigation .fuse-vertical-navigation-wrapper {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9hcHBzL21haWxib3gvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRO0VBQ0ksMkJBQUE7QUFIWiIsInNvdXJjZXNDb250ZW50IjpbIm1haWxib3gtc2lkZWJhciB7XG5cbiAgICBmdXNlLXZlcnRpY2FsLW5hdmlnYXRpb24ge1xuXG4gICAgICAgIC5mdXNlLXZlcnRpY2FsLW5hdmlnYXRpb24td3JhcHBlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 77081:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_SetCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ 80795);
/* harmony import */ var _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setCacheAdd.js */ 64924);
/* harmony import */ var _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setCacheHas.js */ 68336);




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__["default"];
SetCache.prototype.has = _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetCache);

/***/ }),

/***/ 72125:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arraySome.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arraySome);

/***/ }),

/***/ 90153:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqual.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqualDeep.js */ 2649);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && !(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other)) {
    return value !== value && other !== other;
  }
  return (0,_baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, other, bitmask, customizer, baseIsEqual, stack);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqual);

/***/ }),

/***/ 2649:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqualDeep.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Stack.js */ 53536);
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ 77604);
/* harmony import */ var _equalByTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_equalByTag.js */ 38790);
/* harmony import */ var _equalObjects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_equalObjects.js */ 40457);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 8020);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ 54752);









/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    othIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
    objTag = objIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
    othTag = othIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
    othIsObj = othTag == objectTag,
    isSameTag = objTag == othTag;
  if (isSameTag && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object)) {
    if (!(0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    return objIsArr || (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object) ? (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, other, bitmask, customizer, equalFunc, stack) : (0,_equalByTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  return (0,_equalObjects_js__WEBPACK_IMPORTED_MODULE_7__["default"])(object, other, bitmask, customizer, equalFunc, stack);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqualDeep);

/***/ }),

/***/ 44066:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_cacheHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cacheHas);

/***/ }),

/***/ 77604:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_equalArrays.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_SetCache.js */ 77081);
/* harmony import */ var _arraySome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arraySome.js */ 72125);
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cacheHas.js */ 44066);




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!(0,_arraySome_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other, function (othValue, othIndex) {
        if (!(0,_cacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"])(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalArrays);

/***/ }),

/***/ 38790:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_equalByTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Uint8Array.js */ 49764);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eq.js */ 28325);
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ 77604);
/* harmony import */ var _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapToArray.js */ 74269);
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_setToArray.js */ 60974);







/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](object), new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0,_eq_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag:
      var convert = _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalByTag);

/***/ }),

/***/ 40457:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_equalObjects.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getAllKeys.js */ 44857);


/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    objProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    objLength = objProps.length,
    othProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalObjects);

/***/ }),

/***/ 74269:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_mapToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapToArray);

/***/ }),

/***/ 64924:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheAdd.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheAdd);

/***/ }),

/***/ 68336:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheHas);

/***/ }),

/***/ 60974:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_setToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToArray);

/***/ }),

/***/ 24164:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isEqual.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsEqual.js */ 90153);


/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return (0,_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, other);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEqual);

/***/ }),

/***/ 11363:
/*!**************************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2022/ngx-quill-config.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUILL_CONFIG_TOKEN: () => (/* binding */ QUILL_CONFIG_TOKEN),
/* harmony export */   QuillConfigModule: () => (/* binding */ QuillConfigModule),
/* harmony export */   defaultModules: () => (/* binding */ defaultModules),
/* harmony export */   provideQuillConfig: () => (/* binding */ provideQuillConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);


const defaultModules = {
  toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
    header: 1
  }, {
    header: 2
  }], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], [{
    script: 'sub'
  }, {
    script: 'super'
  }], [{
    indent: '-1'
  }, {
    indent: '+1'
  }], [{
    direction: 'rtl'
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], [{
    color: []
  }, {
    background: []
  }], [{
    font: []
  }], [{
    align: []
  }], ['clean'], ['link', 'image', 'video'] // link and image, video
  ]
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('config', {
  providedIn: 'root',
  factory: () => ({
    modules: defaultModules
  })
});

/**
 * This `NgModule` provides a global Quill config on the root level, e.g., in `AppModule`.
 * But this eliminates the need to import the entire `ngx-quill` library into the main bundle.
 * The `quill-editor` itself may be rendered in any lazy-loaded module, but importing `QuillModule`
 * into the `AppModule` will bundle the `ngx-quill` into the vendor.
 */
class QuillConfigModule {
  static forRoot(config) {
    return {
      ngModule: QuillConfigModule,
      providers: [{
        provide: QUILL_CONFIG_TOKEN,
        useValue: config
      }]
    };
  }
  static #_ = this.ɵfac = function QuillConfigModule_Factory(t) {
    return new (t || QuillConfigModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: QuillConfigModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuillConfigModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule
  }], null, null);
})();

/**
 * Provides Quill configuration at the root level:
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideQuillConfig(...)]
 * });
 * ```
 */
const provideQuillConfig = config => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([{
  provide: QUILL_CONFIG_TOKEN,
  useValue: config
}]);

/*
 * Public API Surface of ngx-quill/config
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 70945:
/*!*******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2022/ngx-quill.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUILL_CONFIG_TOKEN: () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN),
/* harmony export */   QuillConfigModule: () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QuillConfigModule),
/* harmony export */   QuillEditorBase: () => (/* binding */ QuillEditorBase),
/* harmony export */   QuillEditorComponent: () => (/* binding */ QuillEditorComponent),
/* harmony export */   QuillModule: () => (/* binding */ QuillModule),
/* harmony export */   QuillService: () => (/* binding */ QuillService),
/* harmony export */   QuillViewComponent: () => (/* binding */ QuillViewComponent),
/* harmony export */   QuillViewHTMLComponent: () => (/* binding */ QuillViewHTMLComponent),
/* harmony export */   defaultModules: () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.defaultModules),
/* harmony export */   provideQuillConfig: () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.provideQuillConfig)
/* harmony export */ });
/* harmony import */ var _Users_riccardo_Sources_Gits_MakeItHome_Assets_templates_fuse_starter_v19_0_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-quill/config */ 11363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53558);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 92568);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 31523);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 21650);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 72607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50655);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);












function QuillEditorComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pre", 0);
  }
}
function QuillEditorComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
  }
}
function QuillEditorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillEditorComponent_Conditional_0_Conditional_0_Template, 1, 0, "pre", 0)(1, QuillEditorComponent_Conditional_0_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx_r0.preserve ? 0 : 1);
  }
}
function QuillEditorComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pre", 0);
  }
}
function QuillEditorComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
  }
}
function QuillEditorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillEditorComponent_Conditional_4_Conditional_0_Template, 1, 0, "pre", 0)(1, QuillEditorComponent_Conditional_4_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx_r1.preserve ? 0 : 1);
  }
}
const _c0 = [[["", "above-quill-editor-toolbar", ""]], [["", "quill-editor-toolbar", ""]], [["", "below-quill-editor-toolbar", ""]]];
const _c1 = ["[above-quill-editor-toolbar]", "[quill-editor-toolbar]", "[below-quill-editor-toolbar]"];
function QuillViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pre", 0);
  }
}
function QuillViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
  }
}
const getFormat = (format, configFormat) => {
  const passedFormat = format || configFormat;
  return passedFormat || 'html';
};

/* eslint-disable @typescript-eslint/no-explicit-any */
class QuillService {
  constructor(injector, config) {
    var _this = this;
    this.config = config;
    this.quill$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)( /*#__PURE__*/(0,_Users_riccardo_Sources_Gits_MakeItHome_Assets_templates_fuse_starter_v19_0_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.Quill) {
        // Quill adds events listeners on import https://github.com/quilljs/quill/blob/develop/core/emitter.js#L8
        // We'd want to use the unpatched `addEventListener` method to have all event callbacks to be run outside of zone.
        // We don't know yet if the `zone.js` is used or not, just save the value to restore it back further.
        const maybePatchedAddEventListener = _this.document.addEventListener;
        // There're 2 types of Angular applications:
        // 1) zone-full (by default)
        // 2) zone-less
        // The developer can avoid importing the `zone.js` package and tells Angular that he/she is responsible for running
        // the change detection by himself. This is done by "nooping" the zone through `CompilerOptions` when bootstrapping
        // the root module. We fallback to `document.addEventListener` if `__zone_symbol__addEventListener` is not defined,
        // this means the `zone.js` is not imported.
        // The `__zone_symbol__addEventListener` is basically a native DOM API, which is not patched by zone.js, thus not even going
        // through the `zone.js` task lifecycle. You can also access the native DOM API as follows `target[Zone.__symbol__('methodName')]`.
        _this.document.addEventListener =
        // eslint-disable-next-line @typescript-eslint/dot-notation
        _this.document['__zone_symbol__addEventListener'] || _this.document.addEventListener;
        const quillImport = yield __webpack_require__.e(/*! import() | quill */ "quill").then(__webpack_require__.t.bind(__webpack_require__, /*! quill */ 66000, 19));
        _this.document.addEventListener = maybePatchedAddEventListener;
        _this.Quill = quillImport.default ? quillImport.default : quillImport;
      }
      // Only register custom options and modules once
      _this.config.customOptions?.forEach(customOption => {
        const newCustomOption = _this.Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        _this.Quill.register(newCustomOption, true, _this.config.suppressGlobalRegisterWarning);
      });
      return yield _this.registerCustomModules(_this.Quill, _this.config.customModules, _this.config.suppressGlobalRegisterWarning);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
    if (!this.config) {
      this.config = {
        modules: ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.defaultModules
      };
    }
  }
  getQuill() {
    return this.quill$;
  }
  /**
   * Marked as internal so it won't be available for `ngx-quill` consumers, this is only
   * internal method to be used within the library.
   *
   * @internal
   */
  registerCustomModules(Quill, customModules, suppressGlobalRegisterWarning) {
    return (0,_Users_riccardo_Sources_Gits_MakeItHome_Assets_templates_fuse_starter_v19_0_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (Array.isArray(customModules)) {
        // eslint-disable-next-line prefer-const
        for (let {
          implementation,
          path
        } of customModules) {
          // The `implementation` might be an observable that resolves the actual implementation,
          // e.g. if it should be lazy loaded.
          if ((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.isObservable)(implementation)) {
            implementation = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(implementation);
          }
          Quill.register(path, implementation, suppressGlobalRegisterWarning);
        }
      }
      // Return `Quill` constructor so we'll be able to re-use its return value except of using
      // `map` operators, etc.
      return Quill;
    })();
  }
  static #_ = this.ɵfac = function QuillService_Factory(t) {
    return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: QuillService,
    factory: QuillService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN]
    }]
  }], null);
})();

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @angular-eslint/directive-class-suffix
class QuillEditorBase {
  constructor() {
    this.required = false;
    this.customToolbarPosition = 'top';
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.customModules = [];
    this.preserveWhitespace = false;
    this.trimOnValidation = false;
    this.compareValues = false;
    this.filterNull = false;
    /*
    https://github.com/KillerCodeMonkey/ngx-quill/issues/1257 - fix null value set
           provide default empty value
    by default null
           e.g. defaultEmptyValue="" - empty string
           <quill-editor
      defaultEmptyValue=""
      formControlName="message"
    ></quill-editor>
    */
    this.defaultEmptyValue = null;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onNativeFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onNativeBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.disabled = false; // used to store initial value before ViewInit
    this.preserve = false;
    this.toolbarPosition = 'top';
    this.subscription = null;
    this.quillSubscription = null;
    this.elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    this.document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
    this.cd = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    this.domSanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer);
    this.platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID);
    this.renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2);
    this.zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(QuillService);
    this.valueGetter = (quillEditor, editorElement) => {
      let html = editorElement.querySelector('.ql-editor').innerHTML;
      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }
      let modelValue = html;
      const format = getFormat(this.format, this.service.config.format);
      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }
      return modelValue;
    };
    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);
      if (format === 'html') {
        const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;
        if (sanitize) {
          value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.HTML, value);
        }
        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }
      return value;
    };
    this.selectionChangeHandler = (range, oldRange, source) => {
      const trackChanges = this.trackChanges || this.service.config.trackChanges;
      const shouldTriggerOnModelTouched = !range && !!this.onModelTouched && (source === 'user' || trackChanges && trackChanges === 'all');
      // only emit changes when there's any listener
      if (!this.onBlur.observed && !this.onFocus.observed && !this.onSelectionChanged.observed && !shouldTriggerOnModelTouched) {
        return;
      }
      this.zone.run(() => {
        if (range === null) {
          this.onBlur.emit({
            editor: this.quillEditor,
            source
          });
        } else if (oldRange === null) {
          this.onFocus.emit({
            editor: this.quillEditor,
            source
          });
        }
        this.onSelectionChanged.emit({
          editor: this.quillEditor,
          oldRange,
          range,
          source
        });
        if (shouldTriggerOnModelTouched) {
          this.onModelTouched();
        }
        this.cd.markForCheck();
      });
    };
    this.textChangeHandler = (delta, oldDelta, source) => {
      // only emit changes emitted by user interactions
      const text = this.quillEditor.getText();
      const content = this.quillEditor.getContents();
      let html = this.editorElem.querySelector('.ql-editor').innerHTML;
      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }
      const trackChanges = this.trackChanges || this.service.config.trackChanges;
      const shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!this.onModelChange;
      // only emit changes when there's any listener
      if (!this.onContentChanged.observed && !shouldTriggerOnModelChange) {
        return;
      }
      this.zone.run(() => {
        if (shouldTriggerOnModelChange) {
          this.onModelChange(this.valueGetter(this.quillEditor, this.editorElem));
        }
        this.onContentChanged.emit({
          content,
          delta,
          editor: this.quillEditor,
          html,
          oldDelta,
          source,
          text
        });
        this.cd.markForCheck();
      });
    };
    // eslint-disable-next-line max-len
    this.editorChangeHandler = (event, current, old, source) => {
      // only emit changes when there's any listener
      if (!this.onEditorChanged.observed) {
        return;
      }
      // only emit changes emitted by user interactions
      if (event === 'text-change') {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.editorElem.querySelector('.ql-editor').innerHTML;
        if (html === '<p><br></p>' || html === '<div><br></div>') {
          html = this.defaultEmptyValue;
        }
        this.zone.run(() => {
          this.onEditorChanged.emit({
            content,
            delta: current,
            editor: this.quillEditor,
            event,
            html,
            oldDelta: old,
            source,
            text
          });
          this.cd.markForCheck();
        });
      } else {
        this.zone.run(() => {
          this.onEditorChanged.emit({
            editor: this.quillEditor,
            event,
            oldRange: old,
            range: current,
            source
          });
          this.cd.markForCheck();
        });
      }
    };
  }
  static normalizeClassNames(classes) {
    const classList = classes.trim().split(' ');
    return classList.reduce((prev, cur) => {
      const trimmed = cur.trim();
      if (trimmed) {
        prev.push(trimmed);
      }
      return prev;
    }, []);
  }
  ngOnInit() {
    this.preserve = this.preserveWhitespace;
    this.toolbarPosition = this.customToolbarPosition;
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId)) {
      return;
    }
    // The `quill-editor` component might be destroyed before the `quill` chunk is loaded and its code is executed
    // this will lead to runtime exceptions, since the code will be executed on DOM nodes that don't exist within the tree.
    this.quillSubscription = this.service.getQuill().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(Quill => {
      const promises = [this.service.registerCustomModules(Quill, this.customModules)];
      const beforeRender = this.beforeRender ?? this.service.config.beforeRender;
      if (beforeRender) {
        promises.push(beforeRender());
      }
      return Promise.all(promises).then(() => Quill);
    })).subscribe(Quill => {
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
      const toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
      const modules = Object.assign({}, this.modules || this.service.config.modules);
      if (toolbarElem) {
        modules.toolbar = toolbarElem;
      } else if (modules.toolbar === undefined) {
        modules.toolbar = ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.defaultModules.toolbar;
      }
      let placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;
      if (placeholder === undefined) {
        placeholder = 'Insert text here ...';
      }
      if (this.styles) {
        Object.keys(this.styles).forEach(key => {
          this.renderer.setStyle(this.editorElem, key, this.styles[key]);
        });
      }
      if (this.classes) {
        this.addClasses(this.classes);
      }
      this.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      let bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;
      if (!bounds) {
        bounds = this.service.config.bounds ? this.service.config.bounds : this.document.body;
      }
      let debug = this.debug;
      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }
      let readOnly = this.readOnly;
      if (!readOnly && this.readOnly !== false) {
        readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
      }
      let defaultEmptyValue = this.defaultEmptyValue;
      // eslint-disable-next-line no-prototype-builtins
      if (this.service.config.hasOwnProperty('defaultEmptyValue')) {
        defaultEmptyValue = this.service.config.defaultEmptyValue;
      }
      let scrollingContainer = this.scrollingContainer;
      if (!scrollingContainer && this.scrollingContainer !== null) {
        scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
      }
      let formats = this.formats;
      if (!formats && formats === undefined) {
        formats = this.service.config.formats ? [...this.service.config.formats] : this.service.config.formats === null ? null : undefined;
      }
      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          bounds,
          debug: debug,
          formats: formats,
          modules,
          placeholder,
          readOnly,
          defaultEmptyValue,
          scrollingContainer: scrollingContainer,
          strict: this.strict,
          theme: this.theme || (this.service.config.theme ? this.service.config.theme : 'snow')
        });
        if (this.onNativeBlur.observed) {
          // https://github.com/quilljs/quill/issues/2186#issuecomment-533401328
          this.quillEditor.scroll.domNode.addEventListener('blur', () => this.onNativeBlur.next({
            editor: this.quillEditor,
            source: 'dom'
          }));
          // https://github.com/quilljs/quill/issues/2186#issuecomment-803257538
          this.quillEditor.getModule('toolbar').container.addEventListener('mousedown', e => e.preventDefault());
        }
        if (this.onNativeFocus.observed) {
          this.quillEditor.scroll.domNode.addEventListener('focus', () => this.onNativeFocus.next({
            editor: this.quillEditor,
            source: 'dom'
          }));
        }
        // Set optional link placeholder, Quill has no native API for it so using workaround
        if (this.linkPlaceholder) {
          const tooltip = this.quillEditor?.theme?.tooltip;
          const input = tooltip?.root?.querySelector('input[data-link]');
          if (input?.dataset) {
            input.dataset.link = this.linkPlaceholder;
          }
        }
      });
      if (this.content) {
        const format = getFormat(this.format, this.service.config.format);
        if (format === 'text') {
          this.quillEditor.setText(this.content, 'silent');
        } else {
          const newValue = this.valueSetter(this.quillEditor, this.content);
          this.quillEditor.setContents(newValue, 'silent');
        }
        this.quillEditor.getModule('history').clear();
      }
      // initialize disabled status based on this.disabled as default value
      this.setDisabledState();
      this.addQuillEventListeners();
      // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.
      if (!this.onEditorCreated.observed && !this.onValidatorChanged) {
        return;
      }
      // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
      requestAnimationFrame(() => {
        if (this.onValidatorChanged) {
          this.onValidatorChanged();
        }
        this.onEditorCreated.emit(this.quillEditor);
        this.onEditorCreated.complete();
      });
    });
  }
  ngOnDestroy() {
    this.dispose();
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }
  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }
    /* eslint-disable @typescript-eslint/dot-notation */
    if (changes.readOnly) {
      this.quillEditor.enable(!changes.readOnly.currentValue);
    }
    if (changes.placeholder) {
      this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
    }
    if (changes.defaultEmptyValue) {
      this.quillEditor.root.dataset.defaultEmptyValue = changes.defaultEmptyValue.currentValue;
    }
    if (changes.styles) {
      const currentStyling = changes.styles.currentValue;
      const previousStyling = changes.styles.previousValue;
      if (previousStyling) {
        Object.keys(previousStyling).forEach(key => {
          this.renderer.removeStyle(this.editorElem, key);
        });
      }
      if (currentStyling) {
        Object.keys(currentStyling).forEach(key => {
          this.renderer.setStyle(this.editorElem, key, this.styles[key]);
        });
      }
    }
    if (changes.classes) {
      const currentClasses = changes.classes.currentValue;
      const previousClasses = changes.classes.previousValue;
      if (previousClasses) {
        this.removeClasses(previousClasses);
      }
      if (currentClasses) {
        this.addClasses(currentClasses);
      }
    }
    // We'd want to re-apply event listeners if the `debounceTime` binding changes to apply the
    // `debounceTime` operator or vice-versa remove it.
    if (changes.debounceTime) {
      this.addQuillEventListeners();
    }
    /* eslint-enable @typescript-eslint/dot-notation */
  }

  addClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.addClass(this.editorElem, c);
    });
  }
  removeClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.removeClass(this.editorElem, c);
    });
  }
  writeValue(currentValue) {
    // optional fix for https://github.com/angular/angular/issues/14988
    if (this.filterNull && currentValue === null) {
      return;
    }
    this.content = currentValue;
    if (!this.quillEditor) {
      return;
    }
    const format = getFormat(this.format, this.service.config.format);
    const newValue = this.valueSetter(this.quillEditor, currentValue);
    if (this.compareValues) {
      const currentEditorValue = this.quillEditor.getContents();
      if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
        return;
      }
    }
    if (currentValue) {
      if (format === 'text') {
        this.quillEditor.setText(currentValue);
      } else {
        this.quillEditor.setContents(newValue);
      }
      return;
    }
    this.quillEditor.setText('');
  }
  setDisabledState(isDisabled = this.disabled) {
    // store initial value to set appropriate disabled status after ViewInit
    this.disabled = isDisabled;
    if (this.quillEditor) {
      if (isDisabled) {
        this.quillEditor.disable();
        this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
      } else {
        if (!this.readOnly) {
          this.quillEditor.enable();
        }
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
      }
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChanged = fn;
  }
  validate() {
    if (!this.quillEditor) {
      return null;
    }
    const err = {};
    let valid = true;
    const text = this.quillEditor.getText();
    // trim text if wanted + handle special case that an empty editor contains a new line
    const textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;
    const deltaOperations = this.quillEditor.getContents().ops;
    const onlyEmptyOperation = deltaOperations && deltaOperations.length === 1 && ['\n', ''].includes(deltaOperations[0].insert);
    if (this.minLength && textLength && textLength < this.minLength) {
      err.minLengthError = {
        given: textLength,
        minLength: this.minLength
      };
      valid = false;
    }
    if (this.maxLength && textLength > this.maxLength) {
      err.maxLengthError = {
        given: textLength,
        maxLength: this.maxLength
      };
      valid = false;
    }
    if (this.required && !textLength && onlyEmptyOperation) {
      err.requiredError = {
        empty: true
      };
      valid = false;
    }
    return valid ? null : err;
  }
  addQuillEventListeners() {
    this.dispose();
    // We have to enter the `<root>` zone when adding event listeners, so `debounceTime` will spawn the
    // `AsyncAction` there w/o triggering change detections. We still re-enter the Angular's zone through
    // `zone.run` when we emit an event to the parent component.
    this.zone.runOutsideAngular(() => {
      this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
      this.subscription.add(
      // mark model as touched if editor lost focus
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(this.quillEditor, 'selection-change').subscribe(([range, oldRange, source]) => {
        this.selectionChangeHandler(range, oldRange, source);
      }));
      // The `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
      // will be invoked upon subscription and teardown.
      let textChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(this.quillEditor, 'text-change');
      let editorChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(this.quillEditor, 'editor-change');
      if (typeof this.debounceTime === 'number') {
        textChange$ = textChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(this.debounceTime));
        editorChange$ = editorChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(this.debounceTime));
      }
      this.subscription.add(
      // update model if text changes
      textChange$.subscribe(([delta, oldDelta, source]) => {
        this.textChangeHandler(delta, oldDelta, source);
      }));
      this.subscription.add(
      // triggered if selection or text changed
      editorChange$.subscribe(([event, current, old, source]) => {
        this.editorChangeHandler(event, current, old, source);
      }));
    });
  }
  dispose() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  static #_ = this.ɵfac = function QuillEditorBase_Factory(t) {
    return new (t || QuillEditorBase)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: QuillEditorBase,
    inputs: {
      format: "format",
      theme: "theme",
      modules: "modules",
      debug: "debug",
      readOnly: "readOnly",
      placeholder: "placeholder",
      maxLength: "maxLength",
      minLength: "minLength",
      required: "required",
      formats: "formats",
      customToolbarPosition: "customToolbarPosition",
      sanitize: "sanitize",
      beforeRender: "beforeRender",
      styles: "styles",
      strict: "strict",
      scrollingContainer: "scrollingContainer",
      bounds: "bounds",
      customOptions: "customOptions",
      customModules: "customModules",
      trackChanges: "trackChanges",
      preserveWhitespace: "preserveWhitespace",
      classes: "classes",
      trimOnValidation: "trimOnValidation",
      linkPlaceholder: "linkPlaceholder",
      compareValues: "compareValues",
      filterNull: "filterNull",
      debounceTime: "debounceTime",
      defaultEmptyValue: "defaultEmptyValue",
      valueGetter: "valueGetter",
      valueSetter: "valueSetter"
    },
    outputs: {
      onEditorCreated: "onEditorCreated",
      onEditorChanged: "onEditorChanged",
      onContentChanged: "onContentChanged",
      onSelectionChanged: "onSelectionChanged",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onNativeFocus: "onNativeFocus",
      onNativeBlur: "onNativeBlur"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillEditorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], null, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    beforeRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    trimOnValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    linkPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    compareValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    filterNull: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    defaultEmptyValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onEditorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onNativeFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onNativeBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
class QuillEditorComponent extends QuillEditorBase {
  static #_ = this.ɵfac = /* @__PURE__ */(() => {
    let ɵQuillEditorComponent_BaseFactory;
    return function QuillEditorComponent_Factory(t) {
      return (ɵQuillEditorComponent_BaseFactory || (ɵQuillEditorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](QuillEditorComponent)))(t || QuillEditorComponent);
    };
  })();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: QuillEditorComponent,
    selectors: [["quill-editor"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      multi: true,
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
    }, {
      multi: true,
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 2,
    consts: [["quill-editor-element", ""]],
    template: function QuillEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillEditorComponent_Conditional_0_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QuillEditorComponent_Conditional_4_Template, 2, 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx.toolbarPosition !== "top" ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](4, ctx.toolbarPosition === "top" ? 4 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
    styles: ["[_nghost-%COMP%]{display:inline-block}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.Emulated,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
      }],
      selector: 'quill-editor',
      template: `
    @if (toolbarPosition !== 'top') {
      @if (preserve) {
        <pre quill-editor-element></pre>
      } @else {
        <div quill-editor-element></div>
      }
    }

    <ng-content select="[above-quill-editor-toolbar]"></ng-content>
    <ng-content select="[quill-editor-toolbar]"></ng-content>
    <ng-content select="[below-quill-editor-toolbar]"></ng-content>

    @if (toolbarPosition === 'top') {
      @if (preserve) {
        <pre quill-editor-element></pre>
      } @else {
        <div quill-editor-element></div>
      }
    }
  `,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      styles: [":host{display:inline-block}\n"]
    }]
  }], null, null);
})();
class QuillViewHTMLComponent {
  constructor(sanitizer, service) {
    this.sanitizer = sanitizer;
    this.service = service;
    this.content = '';
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
  }
  ngOnChanges(changes) {
    if (changes.theme) {
      const theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    } else if (!this.theme) {
      const theme = this.service.config.theme ? this.service.config.theme : 'snow';
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    }
    if (changes.content) {
      const content = changes.content.currentValue;
      const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;
      this.innerHTML = sanitize ? content : this.sanitizer.bypassSecurityTrustHtml(content);
    }
  }
  static #_ = this.ɵfac = function QuillViewHTMLComponent_Factory(t) {
    return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](QuillService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: QuillViewHTMLComponent,
    selectors: [["quill-view-html"]],
    inputs: {
      content: "content",
      theme: "theme",
      sanitize: "sanitize"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
    template: function QuillViewHTMLComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.themeClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
    styles: [".ql-container.ngx-quill-view-html{border:0}\n"],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'quill-view-html',
      template: `
  <div class="ql-container" [ngClass]="themeClass">
    <div class="ql-editor" [innerHTML]="innerHTML">
    </div>
  </div>
`,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      styles: [".ql-container.ngx-quill-view-html{border:0}\n"]
    }]
  }], () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer]
    }]
  }, {
    type: QuillService
  }], {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

/* eslint-disable @typescript-eslint/no-explicit-any */
class QuillViewComponent {
  constructor(elementRef, renderer, zone, service, domSanitizer, platformId) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.strict = true;
    this.customModules = [];
    this.customOptions = [];
    this.preserveWhitespace = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.preserve = false;
    this.quillSubscription = null;
    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);
      let content = value;
      if (format === 'text') {
        quillEditor.setText(content);
      } else {
        if (format === 'html') {
          const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;
          if (sanitize) {
            value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.HTML, value);
          }
          content = quillEditor.clipboard.convert(value);
        } else if (format === 'json') {
          try {
            content = JSON.parse(value);
          } catch (e) {
            content = [{
              insert: value
            }];
          }
        }
        quillEditor.setContents(content);
      }
    };
  }
  ngOnInit() {
    this.preserve = this.preserveWhitespace;
  }
  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }
    if (changes.content) {
      this.valueSetter(this.quillEditor, changes.content.currentValue);
    }
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId)) {
      return;
    }
    this.quillSubscription = this.service.getQuill().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(Quill => {
      const promises = [this.service.registerCustomModules(Quill, this.customModules)];
      const beforeRender = this.beforeRender ?? this.service.config.beforeRender;
      if (beforeRender) {
        promises.push(beforeRender());
      }
      return Promise.all(promises).then(() => Quill);
    })).subscribe(Quill => {
      const modules = Object.assign({}, this.modules || this.service.config.modules);
      modules.toolbar = false;
      this.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      let debug = this.debug;
      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }
      let formats = this.formats;
      if (!formats && formats === undefined) {
        formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
      }
      const theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          debug: debug,
          formats: formats,
          modules,
          readOnly: true,
          strict: this.strict,
          theme
        });
      });
      this.renderer.addClass(this.editorElem, 'ngx-quill-view');
      if (this.content) {
        this.valueSetter(this.quillEditor, this.content);
      }
      // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.
      if (!this.onEditorCreated.observers.length) {
        return;
      }
      // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
      requestAnimationFrame(() => {
        this.onEditorCreated.emit(this.quillEditor);
        this.onEditorCreated.complete();
      });
    });
  }
  ngOnDestroy() {
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }
  static #_ = this.ɵfac = function QuillViewComponent_Factory(t) {
    return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: QuillViewComponent,
    selectors: [["quill-view"]],
    inputs: {
      format: "format",
      theme: "theme",
      modules: "modules",
      debug: "debug",
      formats: "formats",
      sanitize: "sanitize",
      beforeRender: "beforeRender",
      strict: "strict",
      content: "content",
      customModules: "customModules",
      customOptions: "customOptions",
      preserveWhitespace: "preserveWhitespace"
    },
    outputs: {
      onEditorCreated: "onEditorCreated"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [["quill-view-element", ""]],
    template: function QuillViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillViewComponent_Conditional_0_Template, 1, 0, "pre", 0)(1, QuillViewComponent_Conditional_1_Template, 1, 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx.preserve ? 0 : 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
    styles: [".ql-container.ngx-quill-view{border:0}\n"],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'quill-view',
      template: `
@if (preserve) {
  <pre quill-view-element></pre>
} @else {
  <div quill-view-element></div>
}
`,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      styles: [".ql-container.ngx-quill-view{border:0}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
  }, {
    type: QuillService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
    }]
  }], {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    beforeRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();
class QuillModule {
  static forRoot(config) {
    return {
      ngModule: QuillModule,
      providers: [{
        provide: ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN,
        useValue: config
      }]
    };
  }
  static #_ = this.ɵfac = function QuillModule_Factory(t) {
    return new (t || QuillModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: QuillModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-quill
 */
// Re-export everything from the secondary entry-point so we can be backwards-compatible
// and don't introduce breaking changes for consumers.

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_apps_mailbox_mailbox_routes_ts.js.map