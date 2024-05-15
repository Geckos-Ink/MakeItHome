"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_admin_apps_scrumboard_scrumboard_routes_ts"],{

/***/ 85444:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/apps/scrumboard/board/add-card/add-card.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrumboardBoardAddCardComponent: () => (/* binding */ ScrumboardBoardAddCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/text-field */ 5802);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);











const _c0 = ["titleInput"];
const _c1 = ["titleAutosize"];
const _c2 = a0 => ({
  "opacity-0 pointer-events-none": a0
});
const _c3 = a0 => ({
  "opacity-0": a0
});
class ScrumboardBoardAddCardComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _formBuilder) {
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this.buttonTitle = 'Add a card';
    this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.formVisible = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Initialize the new list form
    this.form = this._formBuilder.group({
      title: ['']
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Save
   */
  save() {
    // Get the new list title
    const title = this.form.get('title').value;
    // Return, if the title is empty
    if (!title || title.trim() === '') {
      return;
    }
    // Execute the observable
    this.saved.next(title.trim());
    // Clear the new list title and hide the form
    this.formVisible = false;
    this.form.get('title').setValue('');
    // Reset the size of the textarea
    setTimeout(() => {
      this.titleInput.nativeElement.value = '';
      this.titleAutosize.reset();
    });
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle the visibility of the form
   */
  toggleFormVisibility() {
    // Toggle the visibility
    this.formVisible = !this.formVisible;
    // If the form becomes visible, focus on the title field
    if (this.formVisible) {
      this.titleInput.nativeElement.focus();
    }
  }
  static #_ = this.ɵfac = function ScrumboardBoardAddCardComponent_Factory(t) {
    return new (t || ScrumboardBoardAddCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ScrumboardBoardAddCardComponent,
    selectors: [["scrumboard-board-add-card"]],
    viewQuery: function ScrumboardBoardAddCardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleAutosize = _t.first);
      }
    },
    inputs: {
      buttonTitle: "buttonTitle"
    },
    outputs: {
      saved: "saved"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 17,
    vars: 18,
    consts: [[1, "p-3", "pt-0"], [1, "relative", "flex", "w-full", "h-full", "rounded-lg"], ["mat-button", "", "disableRipple", "", 1, "absolute", "inset-0", "justify-start", "w-full", "rounded-lg", 3, "ngClass", "click"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2", "text-secondary"], [1, "flex", "flex-col", "items-start", "w-full", 3, "ngClass", "formGroup"], [1, "flex", "w-full", "p-5", "rounded-lg", "shadow", "bg-card"], ["cdkTextareaAutosize", "", 1, "w-full", "text-lg", "font-medium", "leading-5", 3, "spellcheck", "formControlName", "placeholder", "keydown.enter"], ["titleInput", "", "titleAutosize", "cdkTextareaAutosize"], [1, "flex", "items-center", "mt-2"], ["mat-flat-button", "", 1, "h-8", "min-h-8", 3, "color", "type", "click"], ["mat-icon-button", "", 1, "ml-1", "w-8", "h-8", "min-h-8", 3, "type", "click"], [1, "icon-size-4", 3, "svgIcon"]],
    template: function ScrumboardBoardAddCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrumboardBoardAddCardComponent_Template_button_click_2_listener() {
          return ctx.toggleFormVisibility();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5)(7, "div", 6)(8, "textarea", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ScrumboardBoardAddCardComponent_Template_textarea_keydown_enter_8_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrumboardBoardAddCardComponent_Template_button_click_13_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrumboardBoardAddCardComponent_Template_button_click_15_listener() {
          return ctx.toggleFormVisibility();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("h-13", !ctx.formVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.formVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, !ctx.formVisible))("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spellcheck", "off")("formControlName", "title")("placeholder", "Enter card title...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary")("type", "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:x-mark");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatIconButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__.TextFieldModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__.CdkTextareaAutosize],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 39195:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/apps/scrumboard/board/add-list/add-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrumboardBoardAddListComponent: () => (/* binding */ ScrumboardBoardAddListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);









const _c0 = ["titleInput"];
const _c1 = a0 => ({
  "opacity-0 pointer-events-none": a0
});
const _c2 = a0 => ({
  "opacity-0": a0
});
class ScrumboardBoardAddListComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _formBuilder) {
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this.buttonTitle = 'Add a list';
    this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.formVisible = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Initialize the new list form
    this.form = this._formBuilder.group({
      title: ['']
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Save
   */
  save() {
    // Get the new list title
    const title = this.form.get('title').value;
    // Return, if the title is empty
    if (!title || title.trim() === '') {
      return;
    }
    // Execute the observable
    this.saved.next(title.trim());
    // Clear the new list title and hide the form
    this.form.get('title').setValue('');
    this.formVisible = false;
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle the visibility of the form
   */
  toggleFormVisibility() {
    // Toggle the visibility
    this.formVisible = !this.formVisible;
    // If the form becomes visible, focus on the title field
    if (this.formVisible) {
      this.titleInput.nativeElement.focus();
    }
  }
  static #_ = this.ɵfac = function ScrumboardBoardAddListComponent_Factory(t) {
    return new (t || ScrumboardBoardAddListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ScrumboardBoardAddListComponent,
    selectors: [["scrumboard-board-add-list"]],
    viewQuery: function ScrumboardBoardAddListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleInput = _t.first);
      }
    },
    inputs: {
      buttonTitle: "buttonTitle"
    },
    outputs: {
      saved: "saved"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 18,
    consts: [[1, "mt-11", "w-64", "py-2.5", "px-2"], [1, "relative", "flex", "w-full", "h-full", "overflow-hidden", "rounded-xl", "bg-gray-200", "dark:bg-gray-700"], ["mat-button", "", "disableRipple", "", 1, "absolute", "inset-0", "justify-start", "w-full", "px-3", "rounded-xl", "bg-transparent", 3, "ngClass", "click"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2", "text-secondary"], [1, "flex", "flex-col", "items-start", "w-full", "p-3", 3, "ngClass", "formGroup"], [1, "w-full", "py-2", "px-3", "leading-5", "rounded-md", "shadow-sm", "border", "border-gray-300", "bg-white", "focus:border-primary", "dark:border-gray-500", "dark:focus:border-primary", "dark:bg-black", "dark:bg-opacity-5", 3, "autocomplete", "formControlName", "placeholder", "keydown.enter"], ["titleInput", ""], [1, "flex", "items-center", "mt-2"], ["mat-flat-button", "", 1, "h-8", "min-h-8", 3, "color", "type", "click"], ["mat-icon-button", "", 1, "ml-1", "w-8", "h-8", "min-h-8", 3, "type", "click"], [1, "icon-size-4", 3, "svgIcon"]],
    template: function ScrumboardBoardAddListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrumboardBoardAddListComponent_Template_button_click_2_listener() {
          return ctx.toggleFormVisibility();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5)(7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ScrumboardBoardAddListComponent_Template_input_keydown_enter_7_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrumboardBoardAddListComponent_Template_button_click_10_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Add list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrumboardBoardAddListComponent_Template_button_click_12_listener() {
          return ctx.toggleFormVisibility();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("h-15", !ctx.formVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.formVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, !ctx.formVisible))("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocomplete", "off")("formControlName", "title")("placeholder", "Enter list title...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary")("type", "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:x-mark");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatIconButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 7422:
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/apps/scrumboard/board/board.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrumboardBoardComponent: () => (/* binding */ ScrumboardBoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 17792);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/scrumboard.models */ 97393);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ 17765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-card/add-card.component */ 85444);
/* harmony import */ var _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-list/add-list.component */ 39195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/confirmation */ 75012);
/* harmony import */ var app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/scrumboard.service */ 1692);



















function ScrumboardBoardComponent_ng_container_17_ng_container_21_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const card_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", card_r5.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function ScrumboardBoardComponent_ng_container_17_ng_container_21_ng_container_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const label_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", label_r11.title, " ");
  }
}
function ScrumboardBoardComponent_ng_container_17_ng_container_21_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div")(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ScrumboardBoardComponent_ng_container_17_ng_container_21_ng_container_5_ng_container_3_Template, 3, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const card_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", card_r5.labels)("ngForTrackBy", ctx_r7.trackByFn);
  }
}
const _c0 = a0 => ({
  "text-red-600": a0
});
function ScrumboardBoardComponent_ng_container_17_ng_container_21_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const card_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, ctx_r8.isOverdue(card_r5.dueDate)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "heroicons_outline:clock");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 3, card_r5.dueDate, "longDate"), " ");
  }
}
const _c1 = a1 => ["card", a1];
function ScrumboardBoardComponent_ng_container_17_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ScrumboardBoardComponent_ng_container_17_ng_container_21_ng_container_2_Template, 3, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ScrumboardBoardComponent_ng_container_17_ng_container_21_ng_container_5_Template, 4, 2, "ng-container", 28)(6, ScrumboardBoardComponent_ng_container_17_ng_container_21_ng_container_6_Template, 6, 8, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, card_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", card_r5.coverImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](card_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", card_r5.labels.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", card_r5.dueDate);
  }
}
function ScrumboardBoardComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focusout", function ScrumboardBoardComponent_ng_container_17_Template_input_focusout_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const list_r1 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.updateListTitle($event, list_r1));
    })("keydown.enter", function ScrumboardBoardComponent_ng_container_17_Template_input_keydown_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r2.blur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 21)(9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-menu", null, 23)(13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ScrumboardBoardComponent_ng_container_17_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.renameList(_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Rename list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ScrumboardBoardComponent_ng_container_17_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const list_r1 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.deleteList(list_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Delete list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 25)(20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cdkDropListDropped", function ScrumboardBoardComponent_ng_container_17_Template_div_cdkDropListDropped_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.cardDropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ScrumboardBoardComponent_ng_container_17_ng_container_21_Template, 7, 7, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "scrumboard-board-add-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("saved", function ScrumboardBoardComponent_ng_container_17_Template_scrumboard_board_add_card_saved_22_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const list_r1 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.addCard(list_r1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cdkDragLockAxis", "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("spellcheck", "false")("value", list_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", list_r1.cards.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "heroicons_solid:ellipsis-vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "heroicons_solid:pencil-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "heroicons_solid:trash");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", list_r1.id)("cdkDropListData", list_r1.cards);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", list_r1.cards)("ngForTrackBy", ctx_r0.trackByFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonTitle", list_r1.cards.length ? "Add another card" : "Add a card");
  }
}
const _c2 = () => [".."];
class ScrumboardBoardComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _formBuilder, _fuseConfirmationService, _scrumboardService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this._fuseConfirmationService = _fuseConfirmationService;
    this._scrumboardService = _scrumboardService;
    // Private
    this._positionStep = 65536;
    this._maxListCount = 200;
    this._maxPosition = this._positionStep * 500;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Initialize the list title form
    this.listTitleForm = this._formBuilder.group({
      title: ['']
    });
    // Get the board
    this._scrumboardService.board$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(board => {
      this.board = {
        ...board
      };
      // Mark for check
      this._changeDetectorRef.markForCheck();
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
   * Focus on the given element to start editing the list title
   *
   * @param listTitleInput
   */
  renameList(listTitleInput) {
    // Use timeout so it can wait for menu to close
    setTimeout(() => {
      listTitleInput.focus();
    });
  }
  /**
   * Add new list
   *
   * @param title
   */
  addList(title) {
    // Limit the max list count
    if (this.board.lists.length >= this._maxListCount) {
      return;
    }
    // Create a new list model
    const list = new app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__.List({
      boardId: this.board.id,
      position: this.board.lists.length ? this.board.lists[this.board.lists.length - 1].position + this._positionStep : this._positionStep,
      title: title
    });
    // Save the list
    this._scrumboardService.createList(list).subscribe();
  }
  /**
   * Update the list title
   *
   * @param event
   * @param list
   */
  updateListTitle(event, list) {
    // Get the target element
    const element = event.target;
    // Get the new title
    const newTitle = element.value;
    // If the title is empty...
    if (!newTitle || newTitle.trim() === '') {
      // Reset to original title and return
      element.value = list.title;
      return;
    }
    // Update the list title and element value
    list.title = element.value = newTitle.trim();
    // Update the list
    this._scrumboardService.updateList(list).subscribe();
  }
  /**
   * Delete the list
   *
   * @param id
   */
  deleteList(id) {
    // Open the confirmation dialog
    const confirmation = this._fuseConfirmationService.open({
      title: 'Delete list',
      message: 'Are you sure you want to delete this list and its cards? This action cannot be undone!',
      actions: {
        confirm: {
          label: 'Delete'
        }
      }
    });
    // Subscribe to the confirmation dialog closed action
    confirmation.afterClosed().subscribe(result => {
      // If the confirm button pressed...
      if (result === 'confirmed') {
        // Delete the list
        this._scrumboardService.deleteList(id).subscribe();
      }
    });
  }
  /**
   * Add new card
   */
  addCard(list, title) {
    // Create a new card model
    const card = new app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__.Card({
      boardId: this.board.id,
      listId: list.id,
      position: list.cards.length ? list.cards[list.cards.length - 1].position + this._positionStep : this._positionStep,
      title: title
    });
    // Save the card
    this._scrumboardService.createCard(card).subscribe();
  }
  /**
   * List dropped
   *
   * @param event
   */
  listDropped(event) {
    // Move the item
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    // Calculate the positions
    const updated = this._calculatePositions(event);
    // Update the lists
    this._scrumboardService.updateLists(updated).subscribe();
  }
  /**
   * Card dropped
   *
   * @param event
   */
  cardDropped(event) {
    // Move or transfer the item
    if (event.previousContainer === event.container) {
      // Move the item
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Transfer the item
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      // Update the card's list it
      event.container.data[event.currentIndex].listId = event.container.id;
    }
    // Calculate the positions
    const updated = this._calculatePositions(event);
    // Update the cards
    this._scrumboardService.updateCards(updated).subscribe();
  }
  /**
   * Check if the given ISO_8601 date string is overdue
   *
   * @param date
   */
  isOverdue(date) {
    return luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.fromISO(date).startOf('day') < luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.now().startOf('day');
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
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Calculate and set item positions
   * from given CdkDragDrop event
   *
   * @param event
   * @private
   */
  _calculatePositions(event) {
    // Get the items
    let items = event.container.data;
    const currentItem = items[event.currentIndex];
    const prevItem = items[event.currentIndex - 1] || null;
    const nextItem = items[event.currentIndex + 1] || null;
    // If the item moved to the top...
    if (!prevItem) {
      // If the item moved to an empty container
      if (!nextItem) {
        currentItem.position = this._positionStep;
      } else {
        currentItem.position = nextItem.position / 2;
      }
    }
    // If the item moved to the bottom...
    else if (!nextItem) {
      currentItem.position = prevItem.position + this._positionStep;
    }
    // If the item moved in between other items...
    else {
      currentItem.position = (prevItem.position + nextItem.position) / 2;
    }
    // Check if all item positions need to be updated
    if (!Number.isInteger(currentItem.position) || currentItem.position >= this._maxPosition) {
      // Re-calculate all orders
      items = items.map((value, index) => {
        value.position = (index + 1) * this._positionStep;
        return value;
      });
      // Return items
      return items;
    }
    // Return currentItem
    return [currentItem];
  }
  static #_ = this.ɵfac = function ScrumboardBoardComponent_Factory(t) {
    return new (t || ScrumboardBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_5__.ScrumboardService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ScrumboardBoardComponent,
    selectors: [["scrumboard-board"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 10,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", "", 3, "routerLink"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2"], ["mat-stroked-button", "", 1, "ml-3"], ["cdkScrollable", "", 1, "flex-auto", "p-6", "sm:p-8", "sm:pt-4", "overflow-y-auto"], ["cdkDropList", "", 1, "flex", 3, "cdkDropListData", "cdkDropListOrientation", "cdkDropListDropped"], ["cdkDropListGroup", "", 1, "flex", "items-start"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "buttonTitle", "saved"], [1, "absolute", "invisible", "w-0", "h-0", "opacity-0", "pointer-events-none"], ["cdkDrag", "", 1, "flex-0", "w-72", "p-2", "rounded-2xl", "bg-default", 3, "cdkDragLockAxis"], ["cdkDragHandle", "", 1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "w-full", "py-2", "px-3", "rounded-md", "cursor-text", "border", "border-transparent", "focus-within:bg-white", "focus-within:shadow-sm", "focus-within:border-primary", "dark:focus-within:bg-gray-900"], [1, "w-full", "font-medium", "leading-5", "bg-transparent", 3, "spellcheck", "value", "focusout", "keydown.enter"], ["listTitleInput", ""], [1, "flex", "items-center", "justify-center", "min-w-6", "ml-4", "text-sm", "font-semibold", "leading-6", "rounded-full", "bg-gray-300", "text-secondary", "dark:bg-gray-700"], [1, "ml-1"], ["mat-icon-button", "", 1, "w-8", "h-8", "min-h-8", 3, "matMenuTriggerFor"], ["listMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "mt-2", "rounded-xl", "bg-gray-400", "bg-opacity-12", "dark:bg-transparent", "dark:border"], ["cdkDropList", "", 1, "p-3", "pb-0", 3, "id", "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", 1, "flex", "flex-col", "items-start", "mb-3", "p-5", "space-y-3", "shadow", "rounded-lg", "overflow-hidden", "bg-card", 3, "routerLink"], [4, "ngIf"], [1, "text-lg", "font-medium", "leading-5"], [1, "-mx-5", "-mt-5", "mb-2"], [1, "w-full", "object-cover", 3, "src"], [1, "flex", "flex-wrap", "-mx-1", "-mb-2"], [1, "mx-1", "mb-2", "py-0.5", "px-3", "rounded-full", "text-sm", "font-medium", "text-gray-500", "bg-gray-100", "dark:text-gray-300", "dark:bg-gray-700"], [1, "flex", "items-center", "rounded", "text-sm", "font-medium", "leading-5", "text-secondary", 3, "ngClass"], [1, "icon-size-4", "text-current", 3, "svgIcon"]],
    template: function ScrumboardBoardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Boards");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9)(15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cdkDropListDropped", function ScrumboardBoardComponent_Template_div_cdkDropListDropped_15_listener($event) {
          return ctx.listDropped($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ScrumboardBoardComponent_ng_container_17_Template, 23, 13, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "scrumboard-board-add-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("saved", function ScrumboardBoardComponent_Template_scrumboard_board_add_list_saved_18_listener($event) {
          return ctx.addList($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.board.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "heroicons_solid:view-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "heroicons_solid:cog-8-tooth");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cdkDropListData", ctx.board.lists)("cdkDropListOrientation", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.board.lists)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonTitle", ctx.board.lists.length ? "Add another list" : "Add a list");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkScrollable, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDropListGroup, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgFor, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDragHandle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_2__.ScrumboardBoardAddCardComponent, _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_3__.ScrumboardBoardAddListComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
    styles: [".cdk-drag-preview {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drop-list-dragging div:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9hcHBzL3NjcnVtYm9hcmQvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBQSxnREFBQTtFQUFBLDZEQUFBO0VBQUE7QUFBQTs7QUFHSjtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLHNEQUFBO0FBQ0o7O0FBRUE7RUFDSSxzREFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNkay1kcmFnLXByZXZpZXcge1xuICAgIEBhcHBseSBzaGFkb3ctMnhsO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgZGl2Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 62297:
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/apps/scrumboard/boards/boards.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrumboardBoardsComponent: () => (/* binding */ ScrumboardBoardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 17765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/scrumboard.service */ 1692);









function ScrumboardBoardsComponent_ng_container_5_ng_container_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", member_r5.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ScrumboardBoardsComponent_ng_container_5_ng_container_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const board_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", board_r1.members.slice(5).length, " ");
  }
}
function ScrumboardBoardsComponent_ng_container_5_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ScrumboardBoardsComponent_ng_container_5_ng_container_8_ng_container_3_Template, 2, 1, "ng-container", 4)(4, ScrumboardBoardsComponent_ng_container_5_ng_container_8_ng_container_4_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const board_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", board_r1.members.slice(0, 5))("ngForTrackBy", ctx_r2.trackByFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", board_r1.members.length > 5);
  }
}
const _c0 = a0 => [a0];
function ScrumboardBoardsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ScrumboardBoardsComponent_ng_container_5_ng_container_8_Template, 5, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 13)(10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Edited:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const board_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, board_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", board_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](board_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](board_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", board_r1.members == null ? null : board_r1.members.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formatDateAsRelative(board_r1.lastActivity));
  }
}
class ScrumboardBoardsComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _scrumboardService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._scrumboardService = _scrumboardService;
    // Private
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Get the boards
    this._scrumboardService.boards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(boards => {
      this.boards = boards;
      // Mark for check
      this._changeDetectorRef.markForCheck();
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
   * Format the given ISO_8601 date as a relative date
   *
   * @param date
   */
  formatDateAsRelative(date) {
    return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(date).toRelative();
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
  static #_ = this.ɵfac = function ScrumboardBoardsComponent_Factory(t) {
    return new (t || ScrumboardBoardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_1__.ScrumboardService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ScrumboardBoardsComponent,
    selectors: [["scrumboard-boards"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 3,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex", "flex-col", "flex-auto", "items-center", "p-6", "sm:p-10"], [1, "mt-4", "md:mt-24", "text-3xl", "md:text-6xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "mt-8", "md:mt-16"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "flex-col", "items-center", "justify-center", "w-56", "rounded-lg", "cursor-pointer", "border-2", "border-gray-300", "border-dashed", "hover:bg-hover", "transition-colors", "duration-150", "ease-in-out"], [1, "icon-size-12", "text-hint", 3, "svgIcon"], [1, "flex", "flex-col", "items-start", "w-56", "p-6", "rounded-lg", "shadow", "bg-card", "rounded-lg", "hover:shadow-xl", "transition-shadow", "duration-150", "ease-in-out", 3, "routerLink"], [1, "flex", "items-center", "justify-center", "p-4", "rounded-full", "bg-primary-50", "text-primary-700", "dark:bg-primary", "dark:text-on-primary"], [1, "text-current", 3, "svgIcon"], [1, "mt-5", "text-lg", "font-medium", "leading-5"], [1, "mt-0.5", "line-clamp-2", "text-secondary"], [4, "ngIf"], [1, "flex", "items-center", "mt-4", "text-md", "font-md"], [1, "text-secondary"], [1, "ml-1"], [1, "w-12", "h-1", "mt-6", "border-t-2"], [1, "flex", "items-center", "mt-6", "-space-x-1.5"], ["alt", "Member avatar", 1, "flex-0", "w-8", "h-8", "rounded-full", "ring", "ring-offset-1", "ring-bg-card", "ring-offset-transparent", "object-cover", 3, "src"], [1, "flex", "flex-0", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "ring", "ring-offset-1", "ring-bg-card", "ring-offset-transparent", "bg-gray-200", "text-gray-500"], [1, "text-md", "font-semibold"]],
    template: function ScrumboardBoardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Scrumboard Boards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ScrumboardBoardsComponent_ng_container_5_Template, 14, 8, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.boards)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 17297:
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/apps/scrumboard/card/card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrumboardCardComponent: () => (/* binding */ ScrumboardCardComponent)
/* harmony export */ });
/* harmony import */ var app_modules_admin_apps_scrumboard_card_details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/card/details/details.component */ 83094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 17401);




class ScrumboardCardComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _matDialog, _router) {
    this._activatedRoute = _activatedRoute;
    this._matDialog = _matDialog;
    this._router = _router;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Launch the modal
    this._matDialog.open(app_modules_admin_apps_scrumboard_card_details_details_component__WEBPACK_IMPORTED_MODULE_0__.ScrumboardCardDetailsComponent, {
      autoFocus: false
    }).afterClosed().subscribe(() => {
      // Go up twice because card routes are set up like this; "card/CARD_ID"
      this._router.navigate(['./../..'], {
        relativeTo: this._activatedRoute
      });
    });
  }
  static #_ = this.ɵfac = function ScrumboardCardComponent_Factory(t) {
    return new (t || ScrumboardCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ScrumboardCardComponent,
    selectors: [["scrumboard-card"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    template: function ScrumboardCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "SCRUMBOARD -> BOARDS -> LIST -> CARD\n");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 83094:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/apps/scrumboard/card/details/details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrumboardCardDetailsComponent: () => (/* binding */ ScrumboardCardDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/text-field */ 5802);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 12903);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 17765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/scrumboard.service */ 1692);























const _c0 = ["labelInput"];
function ScrumboardCardDetailsComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r0.card.dueDate, "longDate"));
  }
}
function ScrumboardCardDetailsComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Not set");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function ScrumboardCardDetailsComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ScrumboardCardDetailsComponent_ng_container_43_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const label_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.toggleProductTag(label_r4, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const label_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "primary")("checked", ctx_r3.hasLabel(label_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", label_r4.title, " ");
  }
}
const _c1 = (a0, a1, a2) => ({
  "text-gray-500 bg-gray-100 dark:text-gray-300 dark:bg-gray-700": a0,
  "text-green-800 bg-green-200 dark:text-green-100 dark:bg-green-500": a1,
  "text-red-800 bg-red-200 dark:text-red-100 dark:bg-red-500": a2
});
class ScrumboardCardDetailsComponent {
  /**
   * Constructor
   */
  constructor(matDialogRef, _changeDetectorRef, _formBuilder, _scrumboardService) {
    this.matDialogRef = matDialogRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this._scrumboardService = _scrumboardService;
    // Private
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Get the board
    this._scrumboardService.board$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(board => {
      // Board data
      this.board = board;
      // Get the labels
      this.labels = this.filteredLabels = board.labels;
    });
    // Get the card details
    this._scrumboardService.card$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(card => {
      this.card = card;
    });
    // Prepare the card form
    this.cardForm = this._formBuilder.group({
      id: [''],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      description: [''],
      labels: [[]],
      dueDate: [null]
    });
    // Fill the form
    this.cardForm.setValue({
      id: this.card.id,
      title: this.card.title,
      description: this.card.description,
      labels: this.card.labels,
      dueDate: this.card.dueDate
    });
    // Update card when there is a value change on the card form
    this.cardForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(value => {
      // Update the card object
      this.card = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(this.card, value);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(value => {
      // Update the card on the server
      this._scrumboardService.updateCard(value.id, value).subscribe();
      // Mark for check
      this._changeDetectorRef.markForCheck();
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
   * Return whether the card has the given label
   *
   * @param label
   */
  hasLabel(label) {
    return !!this.card.labels.find(cardLabel => cardLabel.id === label.id);
  }
  /**
   * Filter labels
   *
   * @param event
   */
  filterLabels(event) {
    // Get the value
    const value = event.target.value.toLowerCase();
    // Filter the labels
    this.filteredLabels = this.labels.filter(label => label.title.toLowerCase().includes(value));
  }
  /**
   * Filter labels input key down event
   *
   * @param event
   */
  filterLabelsInputKeyDown(event) {
    // Return if the pressed key is not 'Enter'
    if (event.key !== 'Enter') {
      return;
    }
    // If there is no label available...
    if (this.filteredLabels.length === 0) {
      // Return
      return;
    }
    // If there is a label...
    const label = this.filteredLabels[0];
    const isLabelApplied = this.card.labels.find(cardLabel => cardLabel.id === label.id);
    // If the found label is already applied to the card...
    if (isLabelApplied) {
      // Remove the label from the card
      this.removeLabelFromCard(label);
    } else {
      // Otherwise add the label to the card
      this.addLabelToCard(label);
    }
  }
  /**
   * Toggle card label
   *
   * @param label
   * @param change
   */
  toggleProductTag(label, change) {
    if (change.checked) {
      this.addLabelToCard(label);
    } else {
      this.removeLabelFromCard(label);
    }
  }
  /**
   * Add label to the card
   *
   * @param label
   */
  addLabelToCard(label) {
    // Add the label
    this.card.labels.unshift(label);
    // Update the card form data
    this.cardForm.get('labels').patchValue(this.card.labels);
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Remove label from the card
   *
   * @param label
   */
  removeLabelFromCard(label) {
    // Remove the label
    this.card.labels.splice(this.card.labels.findIndex(cardLabel => cardLabel.id === label.id), 1);
    // Update the card form data
    this.cardForm.get('labels').patchValue(this.card.labels);
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Check if the given date is overdue
   */
  isOverdue(date) {
    return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(date).startOf('day') < luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now().startOf('day');
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
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Read the given file for demonstration purposes
   *
   * @param file
   */
  _readAsDataURL(file) {
    // Return a new promise
    return new Promise((resolve, reject) => {
      // Create a new reader
      const reader = new FileReader();
      // Resolve the promise on success
      reader.onload = () => {
        resolve(reader.result);
      };
      // Reject the promise on error
      reader.onerror = e => {
        reject(e);
      };
      // Read the file as the
      reader.readAsDataURL(file);
    });
  }
  static #_ = this.ɵfac = function ScrumboardCardDetailsComponent_Factory(t) {
    return new (t || ScrumboardCardDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_1__.ScrumboardService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ScrumboardCardDetailsComponent,
    selectors: [["scrumboard-card-details"]],
    viewQuery: function ScrumboardCardDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.labelInput = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 44,
    vars: 27,
    consts: [[1, "flex", "flex-col", "flex-auto", "md:w-160", "md:min-w-160", "max-h-160", "-m-6", "overflow-y-auto"], [1, "flex", "flex-0", "items-center", "justify-between", "h-16", "pr-3", "sm:pr-5", "pl-6", "sm:pl-8", "bg-primary", "text-on-primary"], [1, "text-lg", "font-medium"], ["mat-icon-button", "", 3, "tabIndex", "click"], [1, "text-current", 3, "svgIcon"], [1, "flex", "flex-col", "flex-0", "items-start", "w-full", "p-6", "sm:p-8", "space-y-6", "overflow-y-auto", 3, "formGroup"], [1, "w-full", 3, "subscriptSizing"], ["matInput", "", "cdkTextareaAutosize", "", 3, "formControlName", "rows", "cdkAutosizeMinRows"], [1, "font-medium"], [1, "relative", "flex", "items-center", "mt-1.5", "px-4", "leading-9", "rounded-full", "cursor-pointer", 3, "ngClass", "click"], [1, "icon-size-5", "text-current", 3, "svgIcon"], [1, "ml-2", "text-md", "font-medium"], [4, "ngIf"], [1, "fuse-mat-dense", "invisible", "absolute", "inset-0", "-mt-2.5", "opacity-0", "pointer-events-none", 3, "subscriptSizing"], ["matInput", "", 3, "formControlName", "matDatepicker"], ["dueDatePicker", ""], ["mat-button", "", "matDatepickerCancel", "", 3, "click"], ["mat-flat-button", "", "matDatepickerApply", "", 3, "color"], [1, "w-full"], [1, "mt-1", "rounded-md", "border", "border-gray-300", "shadow-sm", "overflow-hidden"], [1, "flex", "items-center", "my-2", "mx-3"], [1, "flex", "items-center", "flex-auto", "min-w-0"], [1, "icon-size-5", 3, "svgIcon"], ["type", "text", "placeholder", "Enter label name", 1, "min-w-0", "ml-2", "py-1", "border-0", 3, "maxLength", "input", "keydown"], [1, "max-h-40", "leading-none", "overflow-y-auto", "border-t"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "h-10", "min-h-10", "pl-1", "pr-4", 3, "color", "checked", "change"]],
    template: function ScrumboardCardDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScrumboardCardDetailsComponent_Template_button_click_4_listener() {
          return ctx.matDialogRef.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 5)(7, "mat-form-field", 6)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Due date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScrumboardCardDetailsComponent_Template_div_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.open());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ScrumboardCardDetailsComponent_ng_container_23_Template, 3, 4, "ng-container", 12)(24, ScrumboardCardDetailsComponent_ng_container_24_Template, 2, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-datepicker", null, 15)(29, "mat-datepicker-actions")(30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScrumboardCardDetailsComponent_Template_button_click_30_listener() {
          return ctx.cardForm.get("dueDate").setValue(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18)(35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19)(38, "div", 20)(39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ScrumboardCardDetailsComponent_Template_input_input_41_listener($event) {
          return ctx.filterLabels($event);
        })("keydown", function ScrumboardCardDetailsComponent_Template_input_keydown_41_listener($event) {
          return ctx.filterLabelsInputKeyDown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ScrumboardCardDetailsComponent_ng_container_43_Template, 3, 3, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tabIndex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:x-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.cardForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("subscriptSizing", "dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", "title")("rows", 1)("cdkAutosizeMinRows", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("subscriptSizing", "dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", "description")("rows", 1)("cdkAutosizeMinRows", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](23, _c1, !ctx.card.dueDate, ctx.card.dueDate && !ctx.isOverdue(ctx.card.dueDate), ctx.card.dueDate && ctx.isOverdue(ctx.card.dueDate)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_solid:calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.card.dueDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.card.dueDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("subscriptSizing", "dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", "dueDate")("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_solid:magnifying-glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maxLength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredLabels)("ngForTrackBy", ctx.trackByFn);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__.CdkTextareaAutosize, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__.TextFieldModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerActions, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerCancel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerApply, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgFor, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 97393:
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/apps/scrumboard/scrumboard.models.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board),
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Member: () => (/* binding */ Member)
/* harmony export */ });
// -----------------------------------------------------------------------------------------------------
// @ Board
// -----------------------------------------------------------------------------------------------------
class Board {
  /**
   * Constructor
   */
  constructor(board) {
    this.id = board.id || null;
    this.title = board.title;
    this.description = board.description || null;
    this.icon = board.icon || null;
    this.lastActivity = board.lastActivity || null;
    this.lists = [];
    this.labels = [];
    this.members = [];
    // Lists
    if (board.lists) {
      this.lists = board.lists.map(list => {
        if (!(list instanceof List)) {
          return new List(list);
        }
        return list;
      });
    }
    // Labels
    if (board.labels) {
      this.labels = board.labels.map(label => {
        if (!(label instanceof Label)) {
          return new Label(label);
        }
        return label;
      });
    }
    // Members
    if (board.members) {
      this.members = board.members.map(member => {
        if (!(member instanceof Member)) {
          return new Member(member);
        }
        return member;
      });
    }
  }
}
// -----------------------------------------------------------------------------------------------------
// @ List
// -----------------------------------------------------------------------------------------------------
class List {
  /**
   * Constructor
   */
  constructor(list) {
    this.id = list.id || null;
    this.boardId = list.boardId;
    this.position = list.position;
    this.title = list.title;
    this.cards = [];
    // Cards
    if (list.cards) {
      this.cards = list.cards.map(card => {
        if (!(card instanceof Card)) {
          return new Card(card);
        }
        return card;
      });
    }
  }
}
// -----------------------------------------------------------------------------------------------------
// @ Card
// -----------------------------------------------------------------------------------------------------
class Card {
  /**
   * Constructor
   */
  constructor(card) {
    this.id = card.id || null;
    this.boardId = card.boardId;
    this.listId = card.listId;
    this.position = card.position;
    this.title = card.title;
    this.description = card.description || null;
    this.labels = [];
    this.dueDate = card.dueDate || null;
    // Labels
    if (card.labels) {
      this.labels = card.labels.map(label => {
        if (!(label instanceof Label)) {
          return new Label(label);
        }
        return label;
      });
    }
  }
}
// -----------------------------------------------------------------------------------------------------
// @ Member
// -----------------------------------------------------------------------------------------------------
class Member {
  /**
   * Constructor
   */
  constructor(member) {
    this.id = member.id || null;
    this.name = member.name;
    this.avatar = member.avatar || null;
  }
}
// -----------------------------------------------------------------------------------------------------
// @ Label
// -----------------------------------------------------------------------------------------------------
class Label {
  /**
   * Constructor
   */
  constructor(label) {
    this.id = label.id || null;
    this.boardId = label.boardId;
    this.title = label.title;
  }
}

/***/ }),

/***/ 59406:
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/apps/scrumboard/scrumboard.routes.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_apps_scrumboard_board_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/board/board.component */ 7422);
/* harmony import */ var app_modules_admin_apps_scrumboard_boards_boards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/boards/boards.component */ 62297);
/* harmony import */ var app_modules_admin_apps_scrumboard_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/card/card.component */ 17297);
/* harmony import */ var app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/scrumboard.service */ 1692);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33252);







/**
 * Board resolver
 *
 * @param route
 * @param state
 */
const boardResolver = (route, state) => {
  const scrumboardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_3__.ScrumboardService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
  return scrumboardService.getBoard(route.paramMap.get('boardId')).pipe(
  // Error here means the requested board is not available
  (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
    // Log the error
    console.error(error);
    // Get the parent url
    const parentUrl = state.url.split('/').slice(0, -1).join('/');
    // Navigate to there
    router.navigateByUrl(parentUrl);
    // Throw an error
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
  }));
};
/**
 * Card resolver
 *
 * @param route
 * @param state
 */
const cardResolver = (route, state) => {
  const scrumboardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_3__.ScrumboardService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
  return scrumboardService.getCard(route.paramMap.get('cardId')).pipe(
  // Error here means the requested card is not available
  (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
    // Log the error
    console.error(error);
    // Get the parent url
    const parentUrl = state.url.split('/').slice(0, -1).join('/');
    // Navigate to there
    router.navigateByUrl(parentUrl);
    // Throw an error
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '',
  component: app_modules_admin_apps_scrumboard_boards_boards_component__WEBPACK_IMPORTED_MODULE_1__.ScrumboardBoardsComponent,
  resolve: {
    boards: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_modules_admin_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_3__.ScrumboardService).getBoards()
  }
}, {
  path: ':boardId',
  component: app_modules_admin_apps_scrumboard_board_board_component__WEBPACK_IMPORTED_MODULE_0__.ScrumboardBoardComponent,
  resolve: {
    board: boardResolver
  },
  children: [{
    path: 'card/:cardId',
    component: app_modules_admin_apps_scrumboard_card_card_component__WEBPACK_IMPORTED_MODULE_2__.ScrumboardCardComponent,
    resolve: {
      card: cardResolver
    }
  }]
}]);

/***/ }),

/***/ 1692:
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/apps/scrumboard/scrumboard.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrumboardService: () => (/* binding */ ScrumboardService)
/* harmony export */ });
/* harmony import */ var app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/apps/scrumboard/scrumboard.models */ 97393);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 54860);




class ScrumboardService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    // Set the private defaults
    this._board = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._boards = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._card = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for board
   */
  get board$() {
    return this._board.asObservable();
  }
  /**
   * Getter for boards
   */
  get boards$() {
    return this._boards.asObservable();
  }
  /**
   * Getter for card
   */
  get card$() {
    return this._card.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get boards
   */
  getBoards() {
    return this._httpClient.get('api/apps/scrumboard/boards').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.map(item => new app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__.Board(item))), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(boards => this._boards.next(boards)));
  }
  /**
   * Get board
   *
   * @param id
   */
  getBoard(id) {
    return this._httpClient.get('api/apps/scrumboard/board', {
      params: {
        id
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => new app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__.Board(response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(board => this._board.next(board)));
  }
  /**
   * Create board
   *
   * @param board
   */
  createBoard(board) {
    return this.boards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(boards => this._httpClient.put('api/apps/scrumboard/board', {
      board
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(newBoard => {
      // Update the boards with the new board
      this._boards.next([...boards, newBoard]);
      // Return new board from observable
      return newBoard;
    }))));
  }
  /**
   * Update the board
   *
   * @param id
   * @param board
   */
  updateBoard(id, board) {
    return this.boards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(boards => this._httpClient.patch('api/apps/scrumboard/board', {
      id,
      board
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(updatedBoard => {
      // Find the index of the updated board
      const index = boards.findIndex(item => item.id === id);
      // Update the board
      boards[index] = updatedBoard;
      // Update the boards
      this._boards.next(boards);
      // Return the updated board
      return updatedBoard;
    }))));
  }
  /**
   * Delete the board
   *
   * @param id
   */
  deleteBoard(id) {
    return this.boards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(boards => this._httpClient.delete('api/apps/scrumboard/board', {
      params: {
        id
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(isDeleted => {
      // Find the index of the deleted board
      const index = boards.findIndex(item => item.id === id);
      // Delete the board
      boards.splice(index, 1);
      // Update the boards
      this._boards.next(boards);
      // Update the board
      this._board.next(null);
      // Update the card
      this._card.next(null);
      // Return the deleted status
      return isDeleted;
    }))));
  }
  /**
   * Create list
   *
   * @param list
   */
  createList(list) {
    return this._httpClient.post('api/apps/scrumboard/board/list', {
      list
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => new app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__.List(response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(newList => {
      // Get the board value
      const board = this._board.value;
      // Update the board lists with the new list
      board.lists = [...board.lists, newList];
      // Sort the board lists
      board.lists.sort((a, b) => a.position - b.position);
      // Update the board
      this._board.next(board);
    }));
  }
  /**
   * Update the list
   *
   * @param list
   */
  updateList(list) {
    return this._httpClient.patch('api/apps/scrumboard/board/list', {
      list
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => new app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__.List(response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(updatedList => {
      // Get the board value
      const board = this._board.value;
      // Find the index of the updated list
      const index = board.lists.findIndex(item => item.id === list.id);
      // Update the list
      board.lists[index] = updatedList;
      // Sort the board lists
      board.lists.sort((a, b) => a.position - b.position);
      // Update the board
      this._board.next(board);
    }));
  }
  /**
   * Update the lists
   *
   * @param lists
   */
  updateLists(lists) {
    return this._httpClient.patch('api/apps/scrumboard/board/lists', {
      lists
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.map(item => new app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__.List(item))), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(updatedLists => {
      // Get the board value
      const board = this._board.value;
      // Go through the updated lists
      updatedLists.forEach(updatedList => {
        // Find the index of the updated list
        const index = board.lists.findIndex(item => item.id === updatedList.id);
        // Update the list
        board.lists[index] = updatedList;
      });
      // Sort the board lists
      board.lists.sort((a, b) => a.position - b.position);
      // Update the board
      this._board.next(board);
    }));
  }
  /**
   * Delete the list
   *
   * @param id
   */
  deleteList(id) {
    return this._httpClient.delete('api/apps/scrumboard/board/list', {
      params: {
        id
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(isDeleted => {
      // Get the board value
      const board = this._board.value;
      // Find the index of the deleted list
      const index = board.lists.findIndex(item => item.id === id);
      // Delete the list
      board.lists.splice(index, 1);
      // Sort the board lists
      board.lists.sort((a, b) => a.position - b.position);
      // Update the board
      this._board.next(board);
    }));
  }
  /**
   * Get card
   */
  getCard(id) {
    return this._board.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(board => {
      // Find the card
      const card = board.lists.find(list => list.cards.some(item => item.id === id)).cards.find(item => item.id === id);
      // Update the card
      this._card.next(card);
      // Return the card
      return card;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(card => {
      if (!card) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)('Could not found the card with id of ' + id + '!');
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(card);
    }));
  }
  /**
   * Create card
   *
   * @param card
   */
  createCard(card) {
    return this._httpClient.put('api/apps/scrumboard/board/card', {
      card
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => new app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__.Card(response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(newCard => {
      // Get the board value
      const board = this._board.value;
      // Find the list and push the new card in it
      board.lists.forEach((listItem, index, list) => {
        if (listItem.id === newCard.listId) {
          list[index].cards.push(newCard);
        }
      });
      // Update the board
      this._board.next(board);
      // Return the new card
      return newCard;
    }));
  }
  /**
   * Update the card
   *
   * @param id
   * @param card
   */
  updateCard(id, card) {
    return this.board$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(board => this._httpClient.patch('api/apps/scrumboard/board/card', {
      id,
      card
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(updatedCard => {
      // Find the card and update it
      board.lists.forEach(listItem => {
        listItem.cards.forEach((cardItem, index, array) => {
          if (cardItem.id === id) {
            array[index] = updatedCard;
          }
        });
      });
      // Update the board
      this._board.next(board);
      // Update the card
      this._card.next(updatedCard);
      // Return the updated card
      return updatedCard;
    }))));
  }
  /**
   * Update the cards
   *
   * @param cards
   */
  updateCards(cards) {
    return this._httpClient.patch('api/apps/scrumboard/board/cards', {
      cards
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.map(item => new app_modules_admin_apps_scrumboard_scrumboard_models__WEBPACK_IMPORTED_MODULE_0__.Card(item))), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(updatedCards => {
      // Get the board value
      const board = this._board.value;
      // Go through the updated cards
      updatedCards.forEach(updatedCard => {
        // Find the index of the updated card's list
        const listIndex = board.lists.findIndex(list => list.id === updatedCard.listId);
        // Find the index of the updated card
        const cardIndex = board.lists[listIndex].cards.findIndex(item => item.id === updatedCard.id);
        // Update the card
        board.lists[listIndex].cards[cardIndex] = updatedCard;
        // Sort the cards
        board.lists[listIndex].cards.sort((a, b) => a.position - b.position);
      });
      // Update the board
      this._board.next(board);
    }));
  }
  /**
   * Delete the card
   *
   * @param id
   */
  deleteCard(id) {
    return this.board$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(board => this._httpClient.delete('api/apps/scrumboard/board/card', {
      params: {
        id
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(isDeleted => {
      // Find the card and delete it
      board.lists.forEach(listItem => {
        listItem.cards.forEach((cardItem, index, array) => {
          if (cardItem.id === id) {
            array.splice(index, 1);
          }
        });
      });
      // Update the board
      this._board.next(board);
      // Update the card
      this._card.next(null);
      // Return the deleted status
      return isDeleted;
    }))));
  }
  /**
   * Create label
   *
   * @param label
   */
  createLabel(label) {
    return this.board$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(board => this._httpClient.post('api/apps/scrumboard/board/label', {
      label
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(newLabel => {
      // Update the board labels with the new label
      board.labels = [...board.labels, newLabel];
      // Update the board
      this._board.next(board);
      // Return new label from observable
      return newLabel;
    }))));
  }
  /**
   * Update the label
   *
   * @param id
   * @param label
   */
  updateLabel(id, label) {
    return this.board$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(board => this._httpClient.patch('api/apps/scrumboard/board/label', {
      id,
      label
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(updatedLabel => {
      // Find the index of the updated label
      const index = board.labels.findIndex(item => item.id === id);
      // Update the label
      board.labels[index] = updatedLabel;
      // Update the board
      this._board.next(board);
      // Return the updated label
      return updatedLabel;
    }))));
  }
  /**
   * Delete the label
   *
   * @param id
   */
  deleteLabel(id) {
    return this.board$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(board => this._httpClient.delete('api/apps/scrumboard/board/label', {
      params: {
        id
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(isDeleted => {
      // Find the index of the deleted label
      const index = board.labels.findIndex(item => item.id === id);
      // Delete the label
      board.labels.splice(index, 1);
      // If the label is deleted...
      if (isDeleted) {
        // Remove the label from any card that uses it
        board.lists.forEach(list => {
          list.cards.forEach(card => {
            const labelIndex = card.labels.findIndex(label => label.id === id);
            if (labelIndex > -1) {
              card.labels.splice(labelIndex, 1);
            }
          });
        });
      }
      // Update the board
      this._board.next(board);
      // Return the deleted status
      return isDeleted;
    }))));
  }
  /**
   * Search within board cards
   *
   * @param query
   */
  search(query) {
    // @TODO: Update the board cards based on the search results
    return this._httpClient.get('api/apps/scrumboard/board/search', {
      params: {
        query
      }
    });
  }
  static #_ = this.ɵfac = function ScrumboardService_Factory(t) {
    return new (t || ScrumboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: ScrumboardService,
    factory: ScrumboardService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_apps_scrumboard_scrumboard_routes_ts.js.map