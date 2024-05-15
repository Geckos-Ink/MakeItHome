"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_admin_ui_page-layouts_page-layouts_routes_ts"],{

/***/ 95667:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/fullwidth/content-scroll/fullwidth.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedFullwidthContentScrollComponent: () => (/* binding */ CardedFullwidthContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);







class CardedFullwidthContentScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function CardedFullwidthContentScrollComponent_Factory(t) {
    return new (t || CardedFullwidthContentScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CardedFullwidthContentScrollComponent,
    selectors: [["carded-fullwidth-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 35,
    vars: 7,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", ""], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", 3, "color"], ["cdkScrollable", "", 1, "flex-auto", "-mt-16", "p-6", "sm:p-10", "rounded-t-2xl", "shadow", "overflow-y-auto", "bg-card"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedFullwidthContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:pencil-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:link");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.CdkScrollable],
    encapsulation: 2
  });
}

/***/ }),

/***/ 47130:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/fullwidth/normal-scroll/fullwidth.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedFullwidthNormalScrollComponent: () => (/* binding */ CardedFullwidthNormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);






class CardedFullwidthNormalScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function CardedFullwidthNormalScrollComponent_Factory(t) {
    return new (t || CardedFullwidthNormalScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CardedFullwidthNormalScrollComponent,
    selectors: [["carded-fullwidth-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 35,
    vars: 7,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", ""], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", 3, "color"], [1, "flex-auto", "-mt-16", "p-6", "sm:p-10", "rounded-t-2xl", "shadow", "bg-card"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedFullwidthNormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:pencil-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:link");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 71360:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/fullwidth/page-scroll/fullwidth.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedFullwidthPageScrollComponent: () => (/* binding */ CardedFullwidthPageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);







class CardedFullwidthPageScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function CardedFullwidthPageScrollComponent_Factory(t) {
    return new (t || CardedFullwidthPageScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CardedFullwidthPageScrollComponent,
    selectors: [["carded-fullwidth-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 35,
    vars: 7,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", ""], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", 3, "color"], [1, "flex-auto", "-mt-16", "p-6", "sm:p-10", "rounded-t-2xl", "shadow", "bg-card"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedFullwidthPageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:pencil-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:link");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__.CdkScrollable, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 79765:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/left-sidebar-1/content-scroll/left-sidebar-1.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedLeftSidebar1ContentScrollComponent: () => (/* binding */ CardedLeftSidebar1ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);










class CardedLeftSidebar1ContentScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function CardedLeftSidebar1ContentScrollComponent_Factory(t) {
    return new (t || CardedLeftSidebar1ContentScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardedLeftSidebar1ContentScrollComponent,
    selectors: [["carded-left-sidebar-1-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 7,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], ["cdkScrollable", "", 1, "flex-auto", "-mt-16", "p-6", "sm:p-10", "rounded-t-2xl", "shadow", "overflow-y-auto", "bg-card"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedLeftSidebar1ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardedLeftSidebar1ContentScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoFocus", false)("mode", "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6566:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/left-sidebar-1/normal-scroll/left-sidebar-1.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedLeftSidebar1NormalScrollComponent: () => (/* binding */ CardedLeftSidebar1NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);









class CardedLeftSidebar1NormalScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function CardedLeftSidebar1NormalScrollComponent_Factory(t) {
    return new (t || CardedLeftSidebar1NormalScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardedLeftSidebar1NormalScrollComponent,
    selectors: [["carded-left-sidebar-1-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 7,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "-mt-16", "p-6", "sm:p-10", "rounded-t-2xl", "shadow", "bg-card"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedLeftSidebar1NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardedLeftSidebar1NormalScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoFocus", false)("mode", "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 31941:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/left-sidebar-1/page-scroll/left-sidebar-1.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedLeftSidebar1PageScrollComponent: () => (/* binding */ CardedLeftSidebar1PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);










class CardedLeftSidebar1PageScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function CardedLeftSidebar1PageScrollComponent_Factory(t) {
    return new (t || CardedLeftSidebar1PageScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardedLeftSidebar1PageScrollComponent,
    selectors: [["carded-left-sidebar-1-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 7,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex-auto", "overflow-visible"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "-mt-16", "p-6", "sm:p-10", "rounded-t-2xl", "shadow", "bg-card"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedLeftSidebar1PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardedLeftSidebar1PageScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoFocus", false)("mode", "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 87700:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/left-sidebar-2/content-scroll/left-sidebar-2.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedLeftSidebar2ContentScrollComponent: () => (/* binding */ CardedLeftSidebar2ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);












class CardedLeftSidebar2ContentScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function CardedLeftSidebar2ContentScrollComponent_Factory(t) {
    return new (t || CardedLeftSidebar2ContentScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CardedLeftSidebar2ContentScrollComponent,
    selectors: [["carded-left-sidebar-2-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex", "flex-col", "flex-auto", "-mt-16", "rounded-t-2xl", "shadow", "bg-card"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col", "overflow-hidden"], ["cdkScrollable", "", 1, "flex-auto", "p-6", "sm:p-10", "overflow-y-auto"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedLeftSidebar2ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardedLeftSidebar2ContentScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 49465:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/left-sidebar-2/normal-scroll/left-sidebar-2.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedLeftSidebar2NormalScrollComponent: () => (/* binding */ CardedLeftSidebar2NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class CardedLeftSidebar2NormalScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function CardedLeftSidebar2NormalScrollComponent_Factory(t) {
    return new (t || CardedLeftSidebar2NormalScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CardedLeftSidebar2NormalScrollComponent,
    selectors: [["carded-left-sidebar-2-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "-mt-16", "rounded-t-2xl", "shadow", "bg-card"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedLeftSidebar2NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardedLeftSidebar2NormalScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5303:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/left-sidebar-2/page-scroll/left-sidebar-2.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedLeftSidebar2PageScrollComponent: () => (/* binding */ CardedLeftSidebar2PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);












class CardedLeftSidebar2PageScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function CardedLeftSidebar2PageScrollComponent_Factory(t) {
    return new (t || CardedLeftSidebar2PageScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CardedLeftSidebar2PageScrollComponent,
    selectors: [["carded-left-sidebar-2-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "min-w-0", "overflow-y-auto"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "-mt-16", "rounded-t-2xl", "shadow", "overflow-hidden", "bg-card"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedLeftSidebar2PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardedLeftSidebar2PageScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 44343:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/right-sidebar-1/content-scroll/right-sidebar-1.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedRightSidebar1ContentScrollComponent: () => (/* binding */ CardedRightSidebar1ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);










class CardedRightSidebar1ContentScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function CardedRightSidebar1ContentScrollComponent_Factory(t) {
    return new (t || CardedRightSidebar1ContentScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardedRightSidebar1ContentScrollComponent,
    selectors: [["carded-right-sidebar-1-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], ["cdkScrollable", "", 1, "flex-auto", "-mt-16", "p-6", "sm:p-10", "rounded-t-2xl", "shadow", "overflow-y-auto", "bg-card"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedRightSidebar1ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardedRightSidebar1ContentScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoFocus", false)("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9057:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/right-sidebar-1/normal-scroll/right-sidebar-1.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedRightSidebar1NormalScrollComponent: () => (/* binding */ CardedRightSidebar1NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);









class CardedRightSidebar1NormalScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function CardedRightSidebar1NormalScrollComponent_Factory(t) {
    return new (t || CardedRightSidebar1NormalScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardedRightSidebar1NormalScrollComponent,
    selectors: [["carded-right-sidebar-1-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "-mt-16", "p-6", "sm:p-10", "rounded-t-2xl", "shadow", "bg-card"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedRightSidebar1NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardedRightSidebar1NormalScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoFocus", false)("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 98511:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/right-sidebar-1/page-scroll/right-sidebar-1.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedRightSidebar1PageScrollComponent: () => (/* binding */ CardedRightSidebar1PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);










class CardedRightSidebar1PageScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function CardedRightSidebar1PageScrollComponent_Factory(t) {
    return new (t || CardedRightSidebar1PageScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardedRightSidebar1PageScrollComponent,
    selectors: [["carded-right-sidebar-1-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex-auto", "overflow-visible"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "-mt-16", "p-6", "sm:p-10", "rounded-t-2xl", "shadow", "bg-card"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedRightSidebar1PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardedRightSidebar1PageScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoFocus", false)("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8762:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/right-sidebar-2/content-scroll/right-sidebar-2.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedRightSidebar2ContentScrollComponent: () => (/* binding */ CardedRightSidebar2ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);












class CardedRightSidebar2ContentScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function CardedRightSidebar2ContentScrollComponent_Factory(t) {
    return new (t || CardedRightSidebar2ContentScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CardedRightSidebar2ContentScrollComponent,
    selectors: [["carded-right-sidebar-2-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex", "flex-col", "flex-auto", "-mt-16", "rounded-t-2xl", "shadow", "bg-card"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col", "overflow-hidden"], ["cdkScrollable", "", 1, "flex-auto", "p-6", "sm:p-10", "overflow-y-auto"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedRightSidebar2ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardedRightSidebar2ContentScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 29452:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/right-sidebar-2/normal-scroll/right-sidebar-2.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedRightSidebar2NormalScrollComponent: () => (/* binding */ CardedRightSidebar2NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class CardedRightSidebar2NormalScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function CardedRightSidebar2NormalScrollComponent_Factory(t) {
    return new (t || CardedRightSidebar2NormalScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CardedRightSidebar2NormalScrollComponent,
    selectors: [["carded-right-sidebar-2-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "-mt-16", "rounded-t-2xl", "shadow", "bg-card"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedRightSidebar2NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardedRightSidebar2NormalScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 33:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/carded/right-sidebar-2/page-scroll/right-sidebar-2.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardedRightSidebar2PageScrollComponent: () => (/* binding */ CardedRightSidebar2PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);












class CardedRightSidebar2PageScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function CardedRightSidebar2PageScrollComponent_Factory(t) {
    return new (t || CardedRightSidebar2PageScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CardedRightSidebar2PageScrollComponent,
    selectors: [["carded-right-sidebar-2-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "min-w-0", "overflow-y-auto"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "pb-22", "sm:pt-12", "sm:pb-28", "sm:px-10", "bg-default", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "-mt-16", "rounded-t-2xl", "shadow", "overflow-hidden", "bg-card"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function CardedRightSidebar2PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardedRightSidebar2PageScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 76516:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoSidebarComponent: () => (/* binding */ DemoSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _fuse_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/navigation */ 71072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);






const _c0 = ["*"];
class DemoSidebarComponent {
  /**
   * Constructor
   */
  constructor() {
    this.menuData = [{
      title: 'Actions',
      subtitle: 'Task, project & team',
      type: 'group',
      children: [{
        title: 'Create task',
        type: 'basic',
        icon: 'heroicons_outline:plus-circle'
      }, {
        title: 'Create team',
        type: 'basic',
        icon: 'heroicons_outline:user-group'
      }, {
        title: 'Create project',
        type: 'basic',
        icon: 'heroicons_outline:briefcase'
      }, {
        title: 'Create user',
        type: 'basic',
        icon: 'heroicons_outline:user-plus'
      }, {
        title: 'Assign user or team',
        subtitle: 'Assign to a task or a project',
        type: 'basic',
        icon: 'heroicons_outline:check-badge'
      }]
    }, {
      title: 'Tasks',
      type: 'group',
      children: [{
        title: 'All tasks',
        type: 'basic',
        icon: 'heroicons_outline:clipboard-document-list',
        badge: {
          title: '49',
          classes: 'px-2 bg-primary text-on-primary rounded-full'
        }
      }, {
        title: 'Ongoing tasks',
        type: 'basic',
        icon: 'heroicons_outline:clipboard-document-check'
      }, {
        title: 'Completed tasks',
        type: 'basic',
        icon: 'heroicons_outline:clipboard-document-check'
      }, {
        title: 'Abandoned tasks',
        type: 'basic',
        icon: 'heroicons_outline:clipboard'
      }, {
        title: 'Assigned to me',
        type: 'basic',
        icon: 'heroicons_outline:user'
      }, {
        title: 'Assigned to my team',
        type: 'basic',
        icon: 'heroicons_outline:users'
      }]
    }, {
      title: 'Settings',
      type: 'group',
      children: [{
        title: 'General',
        type: 'collapsable',
        icon: 'heroicons_outline:cog-8-tooth',
        children: [{
          title: 'Tasks',
          type: 'basic'
        }, {
          title: 'Users',
          type: 'basic'
        }, {
          title: 'Teams',
          type: 'basic'
        }]
      }, {
        title: 'Account',
        type: 'collapsable',
        icon: 'heroicons_outline:user-circle',
        children: [{
          title: 'Personal',
          type: 'basic'
        }, {
          title: 'Payment',
          type: 'basic'
        }, {
          title: 'Security',
          type: 'basic'
        }]
      }]
    }, {
      type: 'divider'
    }];
  }
  static #_ = this.ɵfac = function DemoSidebarComponent_Factory(t) {
    return new (t || DemoSidebarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DemoSidebarComponent,
    selectors: [["demo-sidebar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 24,
    vars: 14,
    consts: [[1, "py-10"], [1, "extra-content"], [1, "mx-6", "text-3xl", "font-bold", "tracking-tighter"], [3, "appearance", "navigation", "inner", "mode", "name", "opened"], [1, "mx-6", "mt-2"], [1, "flex", "items-center"], [1, "mr-2", "icon-size-5", 3, "svgIcon"], [1, "text-lg", "font-semibold"], [1, "flex", "flex-col", "flex-auto", "mt-4"], [1, "text-sm", "leading-none", "mb-3"], [3, "mode", "color", "value"], [1, "mx-6", "mt-10"]],
    template: function DemoSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Demo Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fuse-vertical-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "19.9 GB of 100 GB used");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8)(21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "8 of 20 users used");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appearance", "default")("navigation", ctx.menuData)("inner", true)("mode", "side")("name", "demo-sidebar-navigation")("opened", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_solid:circle-stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", "determinate")("color", "primary")("value", 19.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "heroicons_solid:users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", "determinate")("color", "accent")("value", 40);
      }
    },
    dependencies: [_fuse_components_navigation__WEBPACK_IMPORTED_MODULE_0__.FuseVerticalNavigationComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBar],
    styles: ["demo-sidebar fuse-vertical-navigation .fuse-vertical-navigation-wrapper {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi91aS9wYWdlLWxheW91dHMvY29tbW9uL2RlbW8tc2lkZWJhci9kZW1vLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNZO0VBQ0ksMkJBQUE7QUFBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIGRlbW8tc2lkZWJhciBmdXNlLXZlcnRpY2FsLW5hdmlnYXRpb24gLmZ1c2UtdmVydGljYWwtbmF2aWdhdGlvbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 400:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/common/layout-overview/layout-overview.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutOverviewComponent: () => (/* binding */ LayoutOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ 10727);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);












const _c0 = (a0, a1) => ({
  "bg-gray-300 dark:bg-gray-700": a0,
  "bg-transparent": a1
});
function LayoutOverviewComponent_mat_button_toggle_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, option_r2.value === ctx_r0.overview.selectedOption, option_r2.value !== ctx_r0.overview.selectedOption))("value", option_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2.title, " ");
  }
}
function LayoutOverviewComponent_ng_container_10_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function LayoutOverviewComponent_ng_container_10_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const selectedOption_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary")("routerLink", selectedOption_r3.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:arrow-top-right-on-square");
  }
}
function LayoutOverviewComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div")(2, "div", 9)(3, "div", 10)(4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 12)(6, "div", 13)(7, "div", 14)(8, "div", 13)(9, "div", 15)(10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16)(12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LayoutOverviewComponent_ng_container_10_ng_container_15_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 23)(19, "div")(20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 24)(23, "code", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LayoutOverviewComponent_ng_container_10_div_25_Template, 5, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const selectedOption_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", selectedOption_r3.component);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](selectedOption_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("/src/app/modules/admin", selectedOption_r3.link, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selectedOption_r3.link);
  }
}
class LayoutOverviewComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute) {
    this._activatedRoute = _activatedRoute;
  }
  /**
   * On init
   */
  ngOnInit() {
    // Get the route data
    this.overview = this._activatedRoute.snapshot.data.overview;
  }
  static #_ = this.ɵfac = function LayoutOverviewComponent_Factory(t) {
    return new (t || LayoutOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LayoutOverviewComponent,
    selectors: [["layout-overview"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 5,
    consts: [[1, "w-full", "max-w-320", "mx-auto", "px-6", "md:px-8"], [1, "py-8"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight"], [1, "text-lg", "md:text-xl", "text-secondary"], [1, "mt-6", "md:mt-8"], ["name", "options", 1, "flex", "flex-wrap", "items-center", "-m-2", 3, "ngModel", "ngModelChange"], ["class", "m-2 font-medium", 3, "ngClass", "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "m-2", "font-medium", 3, "ngClass", "value"], [1, "z-20", "relative", "mt-10", "h-192", "ring-1", "ring-gray-300", "rounded-2xl", "shadow-xl", "overflow-auto", "dark:ring-gray-700"], [1, "flex", "flex-auto", "min-h-full"], [1, "hidden", "md:block", "sticky", "top-0", "flex-0", "w-56", "h-192", "border-r", "border-gray-300", "bg-gray-200", "dark:border-gray-700", "dark:bg-gray-800"], [1, "h-4"], [1, "w-2/3", "h-4", "m-6", "rounded", "bg-gray-300", "dark:bg-gray-700"], [1, "w-3/4", "h-4", "m-6", "rounded", "bg-gray-300", "dark:bg-gray-700"], [1, "w-1/2", "h-4", "m-6", "rounded", "bg-gray-300", "dark:bg-gray-700"], [1, "flex", "flex-col", "flex-auto"], [1, "relative", "z-10", "flex", "items-center", "justify-end", "h-16", "px-6", "sm:px-10", "border-b", "border-gray-300", "bg-gray-200", "dark:border-gray-700", "dark:bg-gray-800"], [1, "w-6", "h-6", "rounded-full", "bg-gray-300", "dark:bg-gray-700"], ["id", "component-container", 1, "relative", "flex", "flex-col", "flex-auto"], [4, "ngComponentOutlet"], [1, "relative", "z-10", "flex", "items-center", "h-14", "px-6", "sm:px-10", "border-t", "border-gray-300", "bg-gray-200", "dark:border-gray-700", "dark:bg-gray-800"], [1, "w-32", "h-4", "rounded-full", "bg-gray-300", "dark:bg-gray-700"], [1, "flex", "items-center", "justify-between", "mt-8"], [1, "mt-1"], [1, "text-md"], ["mat-flat-button", "", 3, "color", "routerLink"], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"]],
    template: function LayoutOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "mat-button-toggle-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LayoutOverviewComponent_Template_mat_button_toggle_group_ngModelChange_8_listener($event) {
          return ctx.overview.selectedOption = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LayoutOverviewComponent_mat_button_toggle_9_Template, 2, 6, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LayoutOverviewComponent_ng_container_10_Template, 26, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.overview.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.overview.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.overview.selectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.overview.availableOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overview.options[ctx.overview.selectedOption]);
      }
    },
    dependencies: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggleModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgComponentOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
    styles: ["layout-overview #component-container > *:first-child {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi91aS9wYWdlLWxheW91dHMvY29tbW9uL2xheW91dC1vdmVydmlldy9sYXlvdXQtb3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBsYXlvdXQtb3ZlcnZpZXcgI2NvbXBvbmVudC1jb250YWluZXIgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 24682:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/empty/normal-scroll/empty.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyNormalScrollComponent: () => (/* binding */ EmptyNormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class EmptyNormalScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function EmptyNormalScrollComponent_Factory(t) {
    return new (t || EmptyNormalScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EmptyNormalScrollComponent,
    selectors: [["empty-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function EmptyNormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 36808:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/empty/page-scroll/empty.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyPageScrollComponent: () => (/* binding */ EmptyPageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);


class EmptyPageScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function EmptyPageScrollComponent_Factory(t) {
    return new (t || EmptyPageScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EmptyPageScrollComponent,
    selectors: [["empty-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function EmptyPageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__.CdkScrollable],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8363:
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/overview/overview.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class OverviewComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function OverviewComponent_Factory(t) {
    return new (t || OverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OverviewComponent,
    selectors: [["overview"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 37,
    vars: 1,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "prose", "prose-sm", "max-w-3xl"]],
    template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Page Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Page layouts are set of pre-made layouts that can be used as the starter on any page/app design. While they provide some styling by default, it's very minimal and can be easily modified from the component you create. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Main benefits of using page layouts are; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul")(22, "li")(23, "p")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consistency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Your apps and pages will all look similar in terms of layout and general styling which essentially make them more user friendly and easy to learn. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "p")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Easy modifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " In the future, if you decide to change the design of your pages, add elements or modify the existing ones, it can be done very easily since all your pages will be sharing same class names and the general code structure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "p")(34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Easier learning curve for your users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Making the general design and layout of your pages similar will make them easier to learn for your users. They won't be looking for a save button or a search field over and over again, trying to find and memorize their locations for each page since all pages will be sharing a similar structure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 68803:
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/page-layouts.routes.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   overviews: () => (/* binding */ overviews)
/* harmony export */ });
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_fullwidth_content_scroll_fullwidth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/fullwidth/content-scroll/fullwidth.component */ 95667);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_fullwidth_normal_scroll_fullwidth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/fullwidth/normal-scroll/fullwidth.component */ 47130);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_fullwidth_page_scroll_fullwidth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/fullwidth/page-scroll/fullwidth.component */ 71360);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_left_sidebar_1_content_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/left-sidebar-1/content-scroll/left-sidebar-1.component */ 79765);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_left_sidebar_1_normal_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/left-sidebar-1/normal-scroll/left-sidebar-1.component */ 6566);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_left_sidebar_1_page_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/left-sidebar-1/page-scroll/left-sidebar-1.component */ 31941);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_left_sidebar_2_content_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/left-sidebar-2/content-scroll/left-sidebar-2.component */ 87700);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_left_sidebar_2_normal_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/left-sidebar-2/normal-scroll/left-sidebar-2.component */ 49465);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_left_sidebar_2_page_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/left-sidebar-2/page-scroll/left-sidebar-2.component */ 5303);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_right_sidebar_1_content_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/right-sidebar-1/content-scroll/right-sidebar-1.component */ 44343);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_right_sidebar_1_normal_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/right-sidebar-1/normal-scroll/right-sidebar-1.component */ 9057);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_right_sidebar_1_page_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/right-sidebar-1/page-scroll/right-sidebar-1.component */ 98511);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_right_sidebar_2_content_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/right-sidebar-2/content-scroll/right-sidebar-2.component */ 8762);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_right_sidebar_2_normal_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/right-sidebar-2/normal-scroll/right-sidebar-2.component */ 29452);
/* harmony import */ var app_modules_admin_ui_page_layouts_carded_right_sidebar_2_page_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/carded/right-sidebar-2/page-scroll/right-sidebar-2.component */ 33);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/layout-overview/layout-overview.component */ 400);
/* harmony import */ var app_modules_admin_ui_page_layouts_empty_normal_scroll_empty_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/empty/normal-scroll/empty.component */ 24682);
/* harmony import */ var app_modules_admin_ui_page_layouts_empty_page_scroll_empty_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/empty/page-scroll/empty.component */ 36808);
/* harmony import */ var app_modules_admin_ui_page_layouts_overview_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/overview/overview.component */ 8363);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_fullwidth_1_content_scroll_fullwidth_1_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/fullwidth-1/content-scroll/fullwidth-1.component */ 24068);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_fullwidth_1_normal_scroll_fullwidth_1_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/fullwidth-1/normal-scroll/fullwidth-1.component */ 9394);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_fullwidth_1_page_scroll_fullwidth_1_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/fullwidth-1/page-scroll/fullwidth-1.component */ 14286);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_fullwidth_2_content_scroll_fullwidth_2_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/fullwidth-2/content-scroll/fullwidth-2.component */ 3343);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_fullwidth_2_normal_scroll_fullwidth_2_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/fullwidth-2/normal-scroll/fullwidth-2.component */ 36456);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_fullwidth_2_page_scroll_fullwidth_2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/fullwidth-2/page-scroll/fullwidth-2.component */ 80000);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_1_content_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-1/content-scroll/left-sidebar-1.component */ 88209);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_1_normal_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-1/normal-scroll/left-sidebar-1.component */ 37353);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_1_page_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-1/page-scroll/left-sidebar-1.component */ 29422);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_2_content_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-2/content-scroll/left-sidebar-2.component */ 21891);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_2_inner_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-2/inner-scroll/left-sidebar-2.component */ 54920);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_2_normal_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-2/normal-scroll/left-sidebar-2.component */ 6414);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_2_page_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-2/page-scroll/left-sidebar-2.component */ 84493);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_3_content_scroll_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-3/content-scroll/left-sidebar-3.component */ 57272);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_3_normal_scroll_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-3/normal-scroll/left-sidebar-3.component */ 77423);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_left_sidebar_3_page_scroll_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/left-sidebar-3/page-scroll/left-sidebar-3.component */ 52254);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_1_content_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-1/content-scroll/right-sidebar-1.component */ 79192);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_1_normal_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-1/normal-scroll/right-sidebar-1.component */ 28705);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_1_page_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-1/page-scroll/right-sidebar-1.component */ 94844);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_2_content_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-2/content-scroll/right-sidebar-2.component */ 66280);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_2_inner_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-2/inner-scroll/right-sidebar-2.component */ 36346);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_2_normal_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-2/normal-scroll/right-sidebar-2.component */ 46810);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_2_page_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-2/page-scroll/right-sidebar-2.component */ 80766);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_3_content_scroll_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-3/content-scroll/right-sidebar-3.component */ 81049);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_3_normal_scroll_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-3/normal-scroll/right-sidebar-3.component */ 93590);
/* harmony import */ var app_modules_admin_ui_page_layouts_simple_right_sidebar_3_page_scroll_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/simple/right-sidebar-3/page-scroll/right-sidebar-3.component */ 27427);













































const overviews = {
  empty: {
    title: 'Empty Layout',
    description: 'Layout that spans the entire width of the content area with 2 different scroll modes.',
    availableOptions: [{
      value: 'normalScroll',
      title: 'Normal Scroll'
    }, {
      value: 'pageScroll',
      title: 'Page Scroll'
    }],
    selectedOption: 'normalScroll',
    options: {
      normalScroll: {
        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
        link: '/ui/page-layouts/empty/normal-scroll',
        component: app_modules_admin_ui_page_layouts_empty_normal_scroll_empty_component__WEBPACK_IMPORTED_MODULE_16__.EmptyNormalScrollComponent
      },
      pageScroll: {
        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
        link: '/ui/page-layouts/empty/page-scroll',
        component: app_modules_admin_ui_page_layouts_empty_page_scroll_empty_component__WEBPACK_IMPORTED_MODULE_17__.EmptyPageScrollComponent
      }
    }
  },
  carded: {
    fullwidth: {
      title: 'Carded Fullwidth Layout',
      description: 'Carded layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/carded/fullwidth/normal-scroll',
          component: app_modules_admin_ui_page_layouts_carded_fullwidth_normal_scroll_fullwidth_component__WEBPACK_IMPORTED_MODULE_1__.CardedFullwidthNormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/carded/fullwidth/page-scroll',
          component: app_modules_admin_ui_page_layouts_carded_fullwidth_page_scroll_fullwidth_component__WEBPACK_IMPORTED_MODULE_2__.CardedFullwidthPageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/carded/fullwidth/content-scroll',
          component: app_modules_admin_ui_page_layouts_carded_fullwidth_content_scroll_fullwidth_component__WEBPACK_IMPORTED_MODULE_0__.CardedFullwidthContentScrollComponent
        }
      }
    },
    leftSidebar1: {
      title: 'Carded Left Sidebar #1',
      description: 'Carded layout with a left sidebar, a dedicated header and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/carded/left-sidebar-1/normal-scroll',
          component: app_modules_admin_ui_page_layouts_carded_left_sidebar_1_normal_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_4__.CardedLeftSidebar1NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/carded/left-sidebar-1/page-scroll',
          component: app_modules_admin_ui_page_layouts_carded_left_sidebar_1_page_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_5__.CardedLeftSidebar1PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/carded/left-sidebar-1/content-scroll',
          component: app_modules_admin_ui_page_layouts_carded_left_sidebar_1_content_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_3__.CardedLeftSidebar1ContentScrollComponent
        }
      }
    },
    leftSidebar2: {
      title: 'Carded Left Sidebar #2',
      description: 'Carded layout with a left sidebar, a dedicated header and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/carded/left-sidebar-2/normal-scroll',
          component: app_modules_admin_ui_page_layouts_carded_left_sidebar_2_normal_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_7__.CardedLeftSidebar2NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/carded/left-sidebar-2/page-scroll',
          component: app_modules_admin_ui_page_layouts_carded_left_sidebar_2_page_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_8__.CardedLeftSidebar2PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/carded/left-sidebar-2/content-scroll',
          component: app_modules_admin_ui_page_layouts_carded_left_sidebar_2_content_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_6__.CardedLeftSidebar2ContentScrollComponent
        }
      }
    },
    rightSidebar1: {
      title: 'Carded Right Sidebar #1',
      description: 'Carded layout with a right sidebar, a dedicated header and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/carded/right-sidebar-1/normal-scroll',
          component: app_modules_admin_ui_page_layouts_carded_right_sidebar_1_normal_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_10__.CardedRightSidebar1NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/carded/right-sidebar-1/page-scroll',
          component: app_modules_admin_ui_page_layouts_carded_right_sidebar_1_page_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_11__.CardedRightSidebar1PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/carded/right-sidebar-1/content-scroll',
          component: app_modules_admin_ui_page_layouts_carded_right_sidebar_1_content_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_9__.CardedRightSidebar1ContentScrollComponent
        }
      }
    },
    rightSidebar2: {
      title: 'Carded Right Sidebar #2',
      description: 'Carded layout with a right sidebar, a dedicated header and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/carded/right-sidebar-2/normal-scroll',
          component: app_modules_admin_ui_page_layouts_carded_right_sidebar_2_normal_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_13__.CardedRightSidebar2NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/carded/right-sidebar-2/page-scroll',
          component: app_modules_admin_ui_page_layouts_carded_right_sidebar_2_page_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_14__.CardedRightSidebar2PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/carded/right-sidebar-2/content-scroll',
          component: app_modules_admin_ui_page_layouts_carded_right_sidebar_2_content_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_12__.CardedRightSidebar2ContentScrollComponent
        }
      }
    }
  },
  simple: {
    fullwidth1: {
      title: 'Fullwidth #1',
      description: 'Layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/fullwidth-1/normal-scroll',
          component: app_modules_admin_ui_page_layouts_simple_fullwidth_1_normal_scroll_fullwidth_1_component__WEBPACK_IMPORTED_MODULE_20__.SimpleFullwidth1NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/fullwidth-1/page-scroll',
          component: app_modules_admin_ui_page_layouts_simple_fullwidth_1_page_scroll_fullwidth_1_component__WEBPACK_IMPORTED_MODULE_21__.SimpleFullwidth1PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/fullwidth-1/content-scroll',
          component: app_modules_admin_ui_page_layouts_simple_fullwidth_1_content_scroll_fullwidth_1_component__WEBPACK_IMPORTED_MODULE_19__.SimpleFullwidth1ContentScrollComponent
        }
      }
    },
    fullwidth2: {
      title: 'Fullwidth #2',
      description: 'Layout that spans the entire width of the content area with a dedicated header, tabs and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/fullwidth-2/normal-scroll',
          component: app_modules_admin_ui_page_layouts_simple_fullwidth_2_normal_scroll_fullwidth_2_component__WEBPACK_IMPORTED_MODULE_23__.SimpleFullwidth2NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/fullwidth-2/page-scroll',
          component: app_modules_admin_ui_page_layouts_simple_fullwidth_2_page_scroll_fullwidth_2_component__WEBPACK_IMPORTED_MODULE_24__.SimpleFullwidth2PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/fullwidth-2/content-scroll',
          component: app_modules_admin_ui_page_layouts_simple_fullwidth_2_content_scroll_fullwidth_2_component__WEBPACK_IMPORTED_MODULE_22__.SimpleFullwidth2ContentScrollComponent
        }
      }
    },
    leftSidebar1: {
      title: 'Left Sidebar #1',
      description: 'Layout with a left sidebar and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/left-sidebar-1/normal-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_1_normal_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_26__.SimpleLeftSidebar1NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/left-sidebar-1/page-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_1_page_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_27__.SimpleLeftSidebar1PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/left-sidebar-1/content-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_1_content_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_25__.SimpleLeftSidebar1ContentScrollComponent
        }
      }
    },
    leftSidebar2: {
      title: 'Left Sidebar #2',
      description: 'Layout with a left sidebar, a dedicated header and 4 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }, {
        value: 'innerScroll',
        title: 'Inner Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/left-sidebar-2/normal-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_2_normal_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_30__.SimpleLeftSidebar2NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/left-sidebar-2/page-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_2_page_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_31__.SimpleLeftSidebar2PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/left-sidebar-2/content-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_2_content_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_28__.SimpleLeftSidebar2ContentScrollComponent
        },
        innerScroll: {
          description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/left-sidebar-2/inner-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_2_inner_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_29__.SimpleLeftSidebar2InnerScrollComponent
        }
      }
    },
    leftSidebar3: {
      title: 'Left Sidebar #3',
      description: 'Layout with left sidebar, a fullwidth dedicated header and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/left-sidebar-3/normal-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_3_normal_scroll_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_33__.SimpleLeftSidebar3NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/left-sidebar-3/page-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_3_page_scroll_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_34__.SimpleLeftSidebar3PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/left-sidebar-3/content-scroll',
          component: app_modules_admin_ui_page_layouts_simple_left_sidebar_3_content_scroll_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_32__.SimpleLeftSidebar3ScrollComponent
        }
      }
    },
    rightSidebar1: {
      title: 'Right Sidebar #1',
      description: 'Layout with a right sidebar and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/right-sidebar-1/normal-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_1_normal_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_36__.SimpleRightSidebar1NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/right-sidebar-1/page-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_1_page_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_37__.SimpleRightSidebar1PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/right-sidebar-1/content-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_1_content_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_35__.SimpleRightSidebar1ContentScrollComponent
        }
      }
    },
    rightSidebar2: {
      title: 'Right Sidebar #2',
      description: 'Layout with a right sidebar, a dedicated header and 4 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }, {
        value: 'innerScroll',
        title: 'Inner Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/right-sidebar-2/normal-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_2_normal_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_40__.SimpleRightSidebar2NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/right-sidebar-2/page-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_2_page_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_41__.SimpleRightSidebar2PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/right-sidebar-2/content-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_2_content_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_38__.SimpleRightSidebar2ContentScrollComponent
        },
        innerScroll: {
          description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/right-sidebar-2/inner-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_2_inner_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_39__.SimpleRightSidebar2InnerScrollComponent
        }
      }
    },
    rightSidebar3: {
      title: 'Right Sidebar #3',
      description: 'Layout with right sidebar, a fullwidth dedicated header and 3 different scroll modes.',
      availableOptions: [{
        value: 'normalScroll',
        title: 'Normal Scroll'
      }, {
        value: 'pageScroll',
        title: 'Page Scroll'
      }, {
        value: 'contentScroll',
        title: 'Content Scroll'
      }],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/right-sidebar-3/normal-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_3_normal_scroll_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_43__.SimpleRightSidebar3NormalScrollComponent
        },
        pageScroll: {
          description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/right-sidebar-3/page-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_3_page_scroll_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_44__.SimpleRightSidebar3PageScrollComponent
        },
        contentScroll: {
          description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/right-sidebar-3/content-scroll',
          component: app_modules_admin_ui_page_layouts_simple_right_sidebar_3_content_scroll_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_42__.SimpleRightSidebar3ContentScrollComponent
        }
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
// Overview
{
  path: 'overview',
  component: app_modules_admin_ui_page_layouts_overview_overview_component__WEBPACK_IMPORTED_MODULE_18__.OverviewComponent
},
// Empty
{
  path: 'empty',
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  }, {
    path: 'overview',
    component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
    data: {
      overview: overviews.empty
    }
  }, {
    path: 'normal-scroll',
    component: app_modules_admin_ui_page_layouts_empty_normal_scroll_empty_component__WEBPACK_IMPORTED_MODULE_16__.EmptyNormalScrollComponent
  }, {
    path: 'page-scroll',
    component: app_modules_admin_ui_page_layouts_empty_page_scroll_empty_component__WEBPACK_IMPORTED_MODULE_17__.EmptyPageScrollComponent
  }]
},
// Carded
{
  path: 'carded',
  children: [{
    path: 'fullwidth',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.carded.fullwidth
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_carded_fullwidth_normal_scroll_fullwidth_component__WEBPACK_IMPORTED_MODULE_1__.CardedFullwidthNormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_carded_fullwidth_page_scroll_fullwidth_component__WEBPACK_IMPORTED_MODULE_2__.CardedFullwidthPageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_carded_fullwidth_content_scroll_fullwidth_component__WEBPACK_IMPORTED_MODULE_0__.CardedFullwidthContentScrollComponent
    }]
  }, {
    path: 'left-sidebar-1',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.carded.leftSidebar1
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_carded_left_sidebar_1_normal_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_4__.CardedLeftSidebar1NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_carded_left_sidebar_1_page_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_5__.CardedLeftSidebar1PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_carded_left_sidebar_1_content_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_3__.CardedLeftSidebar1ContentScrollComponent
    }]
  }, {
    path: 'left-sidebar-2',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.carded.leftSidebar2
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_carded_left_sidebar_2_normal_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_7__.CardedLeftSidebar2NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_carded_left_sidebar_2_page_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_8__.CardedLeftSidebar2PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_carded_left_sidebar_2_content_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_6__.CardedLeftSidebar2ContentScrollComponent
    }]
  }, {
    path: 'right-sidebar-1',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.carded.rightSidebar1
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_carded_right_sidebar_1_normal_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_10__.CardedRightSidebar1NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_carded_right_sidebar_1_page_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_11__.CardedRightSidebar1PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_carded_right_sidebar_1_content_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_9__.CardedRightSidebar1ContentScrollComponent
    }]
  }, {
    path: 'right-sidebar-2',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.carded.rightSidebar2
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_carded_right_sidebar_2_normal_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_13__.CardedRightSidebar2NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_carded_right_sidebar_2_page_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_14__.CardedRightSidebar2PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_carded_right_sidebar_2_content_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_12__.CardedRightSidebar2ContentScrollComponent
    }]
  }]
},
// Simple
{
  path: 'simple',
  children: [{
    path: 'fullwidth-1',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.simple.fullwidth1
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_simple_fullwidth_1_normal_scroll_fullwidth_1_component__WEBPACK_IMPORTED_MODULE_20__.SimpleFullwidth1NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_simple_fullwidth_1_page_scroll_fullwidth_1_component__WEBPACK_IMPORTED_MODULE_21__.SimpleFullwidth1PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_simple_fullwidth_1_content_scroll_fullwidth_1_component__WEBPACK_IMPORTED_MODULE_19__.SimpleFullwidth1ContentScrollComponent
    }]
  }, {
    path: 'fullwidth-2',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.simple.fullwidth2
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_simple_fullwidth_2_normal_scroll_fullwidth_2_component__WEBPACK_IMPORTED_MODULE_23__.SimpleFullwidth2NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_simple_fullwidth_2_page_scroll_fullwidth_2_component__WEBPACK_IMPORTED_MODULE_24__.SimpleFullwidth2PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_simple_fullwidth_2_content_scroll_fullwidth_2_component__WEBPACK_IMPORTED_MODULE_22__.SimpleFullwidth2ContentScrollComponent
    }]
  }, {
    path: 'left-sidebar-1',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.simple.leftSidebar1
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_1_normal_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_26__.SimpleLeftSidebar1NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_1_page_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_27__.SimpleLeftSidebar1PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_1_content_scroll_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_25__.SimpleLeftSidebar1ContentScrollComponent
    }]
  }, {
    path: 'left-sidebar-2',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.simple.leftSidebar2
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_2_normal_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_30__.SimpleLeftSidebar2NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_2_page_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_31__.SimpleLeftSidebar2PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_2_content_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_28__.SimpleLeftSidebar2ContentScrollComponent
    }, {
      path: 'inner-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_2_inner_scroll_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_29__.SimpleLeftSidebar2InnerScrollComponent
    }]
  }, {
    path: 'left-sidebar-3',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.simple.leftSidebar3
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_3_normal_scroll_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_33__.SimpleLeftSidebar3NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_3_page_scroll_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_34__.SimpleLeftSidebar3PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_simple_left_sidebar_3_content_scroll_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_32__.SimpleLeftSidebar3ScrollComponent
    }]
  }, {
    path: 'right-sidebar-1',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.simple.rightSidebar1
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_1_normal_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_36__.SimpleRightSidebar1NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_1_page_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_37__.SimpleRightSidebar1PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_1_content_scroll_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_35__.SimpleRightSidebar1ContentScrollComponent
    }]
  }, {
    path: 'right-sidebar-2',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.simple.rightSidebar2
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_2_normal_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_40__.SimpleRightSidebar2NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_2_page_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_41__.SimpleRightSidebar2PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_2_content_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_38__.SimpleRightSidebar2ContentScrollComponent
    }, {
      path: 'inner-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_2_inner_scroll_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_39__.SimpleRightSidebar2InnerScrollComponent
    }]
  }, {
    path: 'right-sidebar-3',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    }, {
      path: 'overview',
      component: app_modules_admin_ui_page_layouts_common_layout_overview_layout_overview_component__WEBPACK_IMPORTED_MODULE_15__.LayoutOverviewComponent,
      data: {
        overview: overviews.simple.rightSidebar3
      }
    }, {
      path: 'normal-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_3_normal_scroll_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_43__.SimpleRightSidebar3NormalScrollComponent
    }, {
      path: 'page-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_3_page_scroll_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_44__.SimpleRightSidebar3PageScrollComponent
    }, {
      path: 'content-scroll',
      component: app_modules_admin_ui_page_layouts_simple_right_sidebar_3_content_scroll_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_42__.SimpleRightSidebar3ContentScrollComponent
    }]
  }]
}]);

/***/ }),

/***/ 24068:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/fullwidth-1/content-scroll/fullwidth-1.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleFullwidth1ContentScrollComponent: () => (/* binding */ SimpleFullwidth1ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);







class SimpleFullwidth1ContentScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function SimpleFullwidth1ContentScrollComponent_Factory(t) {
    return new (t || SimpleFullwidth1ContentScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SimpleFullwidth1ContentScrollComponent,
    selectors: [["simple-fullwidth-1-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 35,
    vars: 7,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", ""], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", 3, "color"], ["cdkScrollable", "", 1, "flex-auto", "p-6", "sm:p-10", "overflow-y-auto"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleFullwidth1ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:pencil-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:link");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.CdkScrollable],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9394:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/fullwidth-1/normal-scroll/fullwidth-1.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleFullwidth1NormalScrollComponent: () => (/* binding */ SimpleFullwidth1NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);






class SimpleFullwidth1NormalScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function SimpleFullwidth1NormalScrollComponent_Factory(t) {
    return new (t || SimpleFullwidth1NormalScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SimpleFullwidth1NormalScrollComponent,
    selectors: [["simple-fullwidth-1-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 35,
    vars: 7,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", ""], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", 3, "color"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleFullwidth1NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:pencil-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:link");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 14286:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/fullwidth-1/page-scroll/fullwidth-1.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleFullwidth1PageScrollComponent: () => (/* binding */ SimpleFullwidth1PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);







class SimpleFullwidth1PageScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function SimpleFullwidth1PageScrollComponent_Factory(t) {
    return new (t || SimpleFullwidth1PageScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SimpleFullwidth1PageScrollComponent,
    selectors: [["simple-fullwidth-1-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 35,
    vars: 7,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", ""], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", 3, "color"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleFullwidth1PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:pencil-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:link");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__.CdkScrollable, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3343:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/fullwidth-2/content-scroll/fullwidth-2.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleFullwidth2ContentScrollComponent: () => (/* binding */ SimpleFullwidth2ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);









class SimpleFullwidth2ContentScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function SimpleFullwidth2ContentScrollComponent_Factory(t) {
    return new (t || SimpleFullwidth2ContentScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SimpleFullwidth2ContentScrollComponent,
    selectors: [["simple-fullwidth-2-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 47,
    vars: 8,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", ""], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", 3, "color"], ["cdkScrollable", "", 1, "flex-auto", "pt-6", "sm:px-4", "sm:pb-4", "overflow-y-auto"], [3, "animationDuration"], ["label", "First Tab"], [1, "flex", "justify-center", "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"], [1, "mt-52", "text-4xl", "font-bold", "text-hint"], ["label", "Second Tab"], ["label", "Third Tab"]],
    template: function SimpleFullwidth2ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19)(34, "mat-tab-group", 20)(35, "mat-tab", 21)(36, "div", 22)(37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "First tab content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-tab", 24)(40, "div", 22)(41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Second tab content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-tab", 25)(44, "div", 22)(45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Third tab content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:pencil-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationDuration", "0");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.CdkScrollable, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup],
    encapsulation: 2
  });
}

/***/ }),

/***/ 36456:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/fullwidth-2/normal-scroll/fullwidth-2.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleFullwidth2NormalScrollComponent: () => (/* binding */ SimpleFullwidth2NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);








class SimpleFullwidth2NormalScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function SimpleFullwidth2NormalScrollComponent_Factory(t) {
    return new (t || SimpleFullwidth2NormalScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SimpleFullwidth2NormalScrollComponent,
    selectors: [["simple-fullwidth-2-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 47,
    vars: 8,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", ""], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", 3, "color"], [1, "flex-auto", "pt-6", "sm:px-4", "sm:pb-4"], [3, "animationDuration"], ["label", "First Tab"], [1, "flex", "justify-center", "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"], [1, "mt-52", "text-4xl", "font-bold", "text-hint"], ["label", "Second Tab"], ["label", "Third Tab"]],
    template: function SimpleFullwidth2NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19)(34, "mat-tab-group", 20)(35, "mat-tab", 21)(36, "div", 22)(37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "First tab content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-tab", 24)(40, "div", 22)(41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Second tab content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-tab", 25)(44, "div", 22)(45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Third tab content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:pencil-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationDuration", "0");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup],
    encapsulation: 2
  });
}

/***/ }),

/***/ 80000:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/fullwidth-2/page-scroll/fullwidth-2.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleFullwidth2PageScrollComponent: () => (/* binding */ SimpleFullwidth2PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);









class SimpleFullwidth2PageScrollComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function SimpleFullwidth2PageScrollComponent_Factory(t) {
    return new (t || SimpleFullwidth2PageScrollComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SimpleFullwidth2PageScrollComponent,
    selectors: [["simple-fullwidth-2-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 47,
    vars: 8,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-stroked-button", ""], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", 3, "color"], [1, "flex-auto", "pt-6", "sm:px-4", "sm:pb-4"], [3, "animationDuration"], ["label", "First Tab"], [1, "flex", "justify-center", "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"], [1, "mt-52", "text-4xl", "font-bold", "text-hint"], ["label", "Second Tab"], ["label", "Third Tab"]],
    template: function SimpleFullwidth2PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19)(34, "mat-tab-group", 20)(35, "mat-tab", 21)(36, "div", 22)(37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "First tab content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-tab", 24)(40, "div", 22)(41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Second tab content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-tab", 25)(44, "div", 22)(45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Third tab content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:pencil-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationDuration", "0");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__.CdkScrollable, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup],
    encapsulation: 2
  });
}

/***/ }),

/***/ 88209:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-1/content-scroll/left-sidebar-1.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar1ContentScrollComponent: () => (/* binding */ SimpleLeftSidebar1ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);










class SimpleLeftSidebar1ContentScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar1ContentScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar1ContentScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar1ContentScrollComponent,
    selectors: [["simple-left-sidebar-1-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 4,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], ["mat-icon-button", "", 1, "mb-4", 3, "click"], [3, "svgIcon"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar1ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar1ContentScrollComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 37353:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-1/normal-scroll/left-sidebar-1.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar1NormalScrollComponent: () => (/* binding */ SimpleLeftSidebar1NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);










class SimpleLeftSidebar1NormalScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar1NormalScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar1NormalScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar1NormalScrollComponent,
    selectors: [["simple-left-sidebar-1-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 4,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], ["mat-icon-button", "", 1, "mb-4", 3, "click"], [3, "svgIcon"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar1NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar1NormalScrollComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 29422:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-1/page-scroll/left-sidebar-1.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar1PageScrollComponent: () => (/* binding */ SimpleLeftSidebar1PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleLeftSidebar1PageScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar1PageScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar1PageScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar1PageScrollComponent,
    selectors: [["simple-left-sidebar-1-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 4,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex-auto", "overflow-visible"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], ["mat-icon-button", "", 1, "mb-4", 3, "click"], [3, "svgIcon"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar1PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar1PageScrollComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 21891:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-2/content-scroll/left-sidebar-2.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar2ContentScrollComponent: () => (/* binding */ SimpleLeftSidebar2ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleLeftSidebar2ContentScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar2ContentScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar2ContentScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar2ContentScrollComponent,
    selectors: [["simple-left-sidebar-2-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar2ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar2ContentScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 54920:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-2/inner-scroll/left-sidebar-2.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar2InnerScrollComponent: () => (/* binding */ SimpleLeftSidebar2InnerScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);












class SimpleLeftSidebar2InnerScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar2InnerScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar2InnerScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar2InnerScrollComponent,
    selectors: [["simple-left-sidebar-2-inner-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], ["cdkScrollable", "", 1, "flex-auto", "p-6", "sm:p-10", "overflow-y-auto"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar2InnerScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar2InnerScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6414:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-2/normal-scroll/left-sidebar-2.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar2NormalScrollComponent: () => (/* binding */ SimpleLeftSidebar2NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleLeftSidebar2NormalScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar2NormalScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar2NormalScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar2NormalScrollComponent,
    selectors: [["simple-left-sidebar-2-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar2NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar2NormalScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 84493:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-2/page-scroll/left-sidebar-2.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar2PageScrollComponent: () => (/* binding */ SimpleLeftSidebar2PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);












class SimpleLeftSidebar2PageScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar2PageScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar2PageScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar2PageScrollComponent,
    selectors: [["simple-left-sidebar-2-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex-auto", "overflow-visible"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar2PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar2PageScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 57272:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-3/content-scroll/left-sidebar-3.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar3ScrollComponent: () => (/* binding */ SimpleLeftSidebar3ScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleLeftSidebar3ScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar3ScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar3ScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar3ScrollComponent,
    selectors: [["simple-left-sidebar-3-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar3ScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar3ScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 77423:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-3/normal-scroll/left-sidebar-3.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar3NormalScrollComponent: () => (/* binding */ SimpleLeftSidebar3NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleLeftSidebar3NormalScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar3NormalScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar3NormalScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar3NormalScrollComponent,
    selectors: [["simple-left-sidebar-3-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar3NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar3NormalScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 52254:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/left-sidebar-3/page-scroll/left-sidebar-3.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLeftSidebar3PageScrollComponent: () => (/* binding */ SimpleLeftSidebar3PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);












class SimpleLeftSidebar3PageScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleLeftSidebar3PageScrollComponent_Factory(t) {
    return new (t || SimpleLeftSidebar3PageScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleLeftSidebar3PageScrollComponent,
    selectors: [["simple-left-sidebar-3-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 8,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "overflow-visible"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleLeftSidebar3PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleLeftSidebar3PageScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 79192:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-1/content-scroll/right-sidebar-1.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar1ContentScrollComponent: () => (/* binding */ SimpleRightSidebar1ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);










class SimpleRightSidebar1ContentScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar1ContentScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar1ContentScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar1ContentScrollComponent,
    selectors: [["simple-right-sidebar-1-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 5,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], ["mat-icon-button", "", 1, "mb-4", 3, "click"], [3, "svgIcon"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar1ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar1ContentScrollComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 28705:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-1/normal-scroll/right-sidebar-1.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar1NormalScrollComponent: () => (/* binding */ SimpleRightSidebar1NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);










class SimpleRightSidebar1NormalScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar1NormalScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar1NormalScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar1NormalScrollComponent,
    selectors: [["simple-right-sidebar-1-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 5,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], ["mat-icon-button", "", 1, "mb-4", 3, "click"], [3, "svgIcon"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar1NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar1NormalScrollComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 94844:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-1/page-scroll/right-sidebar-1.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar1PageScrollComponent: () => (/* binding */ SimpleRightSidebar1PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleRightSidebar1PageScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar1PageScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar1PageScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar1PageScrollComponent,
    selectors: [["simple-right-sidebar-1-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 5,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex-auto", "overflow-visible"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], ["mat-icon-button", "", 1, "mb-4", 3, "click"], [3, "svgIcon"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar1PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar1PageScrollComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 66280:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-2/content-scroll/right-sidebar-2.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar2ContentScrollComponent: () => (/* binding */ SimpleRightSidebar2ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleRightSidebar2ContentScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar2ContentScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar2ContentScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar2ContentScrollComponent,
    selectors: [["simple-right-sidebar-2-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar2ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar2ContentScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 36346:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-2/inner-scroll/right-sidebar-2.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar2InnerScrollComponent: () => (/* binding */ SimpleRightSidebar2InnerScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);












class SimpleRightSidebar2InnerScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar2InnerScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar2InnerScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar2InnerScrollComponent,
    selectors: [["simple-right-sidebar-2-inner-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], ["cdkScrollable", "", 1, "flex-auto", "p-6", "sm:p-10", "overflow-y-auto"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar2InnerScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar2InnerScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 46810:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-2/normal-scroll/right-sidebar-2.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar2NormalScrollComponent: () => (/* binding */ SimpleRightSidebar2NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleRightSidebar2NormalScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar2NormalScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar2NormalScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar2NormalScrollComponent,
    selectors: [["simple-right-sidebar-2-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar2NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar2NormalScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 80766:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-2/page-scroll/right-sidebar-2.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar2PageScrollComponent: () => (/* binding */ SimpleRightSidebar2PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);












class SimpleRightSidebar2PageScrollComponent {
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
      // Set the drawerMode and drawerOpened
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar2PageScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar2PageScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar2PageScrollComponent,
    selectors: [["simple-right-sidebar-2-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex-auto", "overflow-visible"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar2PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7)(10, "div")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar2PageScrollComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 81049:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-3/content-scroll/right-sidebar-3.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar3ContentScrollComponent: () => (/* binding */ SimpleRightSidebar3ContentScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleRightSidebar3ContentScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar3ContentScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar3ContentScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar3ContentScrollComponent,
    selectors: [["simple-right-sidebar-3-content-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "h-full"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar3ContentScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar3ContentScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 93590:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-3/normal-scroll/right-sidebar-3.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar3NormalScrollComponent: () => (/* binding */ SimpleRightSidebar3NormalScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);











class SimpleRightSidebar3NormalScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar3NormalScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar3NormalScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar3NormalScrollComponent,
    selectors: [["simple-right-sidebar-3-normal-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar3NormalScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar3NormalScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 27427:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/page-layouts/simple/right-sidebar-3/page-scroll/right-sidebar-3.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRightSidebar3PageScrollComponent: () => (/* binding */ SimpleRightSidebar3PageScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.component */ 76516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);












class SimpleRightSidebar3PageScrollComponent {
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
      // Set the drawerMode and drawerOpened if
      if (matchingAliases.includes('lg')) {
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
  static #_ = this.ɵfac = function SimpleRightSidebar3PageScrollComponent_Factory(t) {
    return new (t || SimpleRightSidebar3PageScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SimpleRightSidebar3PageScrollComponent,
    selectors: [["simple-right-sidebar-3-page-scroll"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 9,
    consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "hidden", "sm:flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "flex", "sm:hidden"], [1, "inline-flex", "items-center", "-ml-1.5", "text-secondary", "font-medium", 3, "routerLink"], [1, "ml-1"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "overflow-visible"], [1, "w-72", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened", "position"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
    template: function SimpleRightSidebar3PageScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Weekend Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Page heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SimpleRightSidebar3PageScrollComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-drawer-container", 17)(28, "mat-drawer", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-drawer-content", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "./..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened)("position", "end");
      }
    },
    dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContent, app_modules_admin_ui_page_layouts_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_ui_page-layouts_page-layouts_routes_ts.js.map