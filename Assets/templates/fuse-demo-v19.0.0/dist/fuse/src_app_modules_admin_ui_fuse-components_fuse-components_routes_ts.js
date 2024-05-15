"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_admin_ui_fuse-components_fuse-components_routes_ts"],{

/***/ 67886:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/components/alert/alert.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertComponent: () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 98184);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);











function AlertComponent_ng_template_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fuse-alert", 28)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Primary alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Thank you for joining our newsletter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fuse-alert", 28)(5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Accent alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Your changes has been saved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "fuse-alert", 28)(9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Warn alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Fill all required fields to proceed next step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fuse-alert", 28)(13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Basic alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " You have 3 new notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fuse-alert", 28)(17, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Info alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " This is a alert with an 'info' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "fuse-alert", 28)(21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Success alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " This is a alert with a 'success' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "fuse-alert", 28)(25, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Warning alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " This is a alert with a 'warning' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "fuse-alert", 28)(29, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Error alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " This is a alert with an 'error' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "error");
  }
}
function AlertComponent_ng_template_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fuse-alert", 30)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Primary alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Thank you for joining our newsletter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fuse-alert", 30)(5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Accent alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Your changes has been saved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "fuse-alert", 30)(9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Warn alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Fill all required fields to proceed next step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fuse-alert", 30)(13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Basic alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " You have 3 new notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fuse-alert", 30)(17, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Info alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " This is a alert with an 'info' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "fuse-alert", 30)(21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Success alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " This is a alert with a 'success' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "fuse-alert", 30)(25, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Warning alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " This is a alert with a 'warning' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "fuse-alert", 30)(29, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Error alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " This is a alert with an 'error' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "primary")("appearance", "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "accent")("appearance", "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "warn")("appearance", "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "basic")("appearance", "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "info")("appearance", "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "success")("appearance", "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "warning")("appearance", "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "error")("appearance", "outline");
  }
}
function AlertComponent_ng_template_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fuse-alert", 30)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Primary alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Thank you for joining our newsletter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fuse-alert", 30)(5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Accent alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Your changes has been saved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "fuse-alert", 30)(9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Warn alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Fill all required fields to proceed next step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fuse-alert", 30)(13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Basic alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " You have 3 new notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fuse-alert", 30)(17, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Info alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " This is a alert with an 'info' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "fuse-alert", 30)(21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Success alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " This is a alert with a 'success' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "fuse-alert", 30)(25, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Warning alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " This is a alert with a 'warning' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "fuse-alert", 30)(29, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Error alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " This is a alert with an 'error' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "primary")("appearance", "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "accent")("appearance", "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "warn")("appearance", "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "basic")("appearance", "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "info")("appearance", "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "success")("appearance", "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "warning")("appearance", "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "error")("appearance", "fill");
  }
}
function AlertComponent_ng_template_191_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fuse-alert", 30)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Primary alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Thank you for joining our newsletter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fuse-alert", 30)(5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Accent alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Your changes has been saved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "fuse-alert", 30)(9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Warn alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Fill all required fields to proceed next step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fuse-alert", 30)(13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Basic alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " You have 3 new notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fuse-alert", 30)(17, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Info alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " This is a alert with an 'info' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "fuse-alert", 30)(21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Success alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " This is a alert with a 'success' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "fuse-alert", 30)(25, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Warning alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " This is a alert with a 'warning' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "fuse-alert", 30)(29, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Error alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " This is a alert with an 'error' level severity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "primary")("appearance", "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "accent")("appearance", "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "warn")("appearance", "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "basic")("appearance", "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "info")("appearance", "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "success")("appearance", "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "warning")("appearance", "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "error")("appearance", "border");
  }
}
function AlertComponent_ng_template_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fuse-alert", 31)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Alert title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " This is the alert content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fuse-alert", 31)(5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Alert title without any content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "fuse-alert", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Simple alert without a title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "soft")("type", "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "soft")("type", "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "soft")("type", "info");
  }
}
function AlertComponent_ng_template_240_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fuse-alert", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Success alert with no icon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "soft")("type", "success")("showIcon", false);
  }
}
function AlertComponent_ng_template_257_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fuse-alert", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Info alert with a custom icon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "soft")("type", "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_solid:lock-open");
  }
}
function AlertComponent_ng_template_294_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fuse-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Your subscription model is successfully upgraded to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Lifetime Pro");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "fuse-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " This one has a lot of text so you can see how the text is going to be displayed. Also this is a dismissible alert box which can be dismissed by clicking the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "dismiss");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " button. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "soft")("dismissible", true)("dismissed", false)("name", "alertBox1")("type", "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "soft")("dismissible", true)("dismissed", false)("name", "alertBox2")("type", "info");
  }
}
function AlertComponent_ng_template_311_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlertComponent_ng_template_311_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r9.show("alertBox3");
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.show("alertBox4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Show alert boxes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlertComponent_ng_template_311_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r11.dismiss("alertBox3");
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.dismiss("alertBox4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Dismiss alert boxes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fuse-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Your subscription model is successfully upgraded to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Lifetime Pro");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "fuse-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " This one has a lot of text so you can see how the text is going to be displayed. Also this is a dismissible alert box which can be dismissed by clicking the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " button. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "soft")("dismissible", true)("dismissed", false)("name", "alertBox3")("type", "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "soft")("dismissible", true)("dismissed", false)("name", "alertBox4")("type", "info");
  }
}
class AlertComponent {
  /**
   * Constructor
   */
  constructor(_fuseAlertService, _fuseComponentsComponent) {
    this._fuseAlertService = _fuseAlertService;
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Dismiss the alert via the service
   *
   * @param name
   */
  dismiss(name) {
    // Dismiss
    this._fuseAlertService.dismiss(name);
  }
  /**
   * Show the alert via the service
   *
   * @param name
   */
  show(name) {
    // Show
    this._fuseAlertService.show(name);
  }
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function AlertComponent_Factory(t) {
    return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_2__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AlertComponent,
    selectors: [["alert"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 318,
    vars: 23,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "py-3", "px-6", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], [1, "whitespace-nowrap"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview", 1, "bg-gray-200"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "Preview"], ["mat-button", "", 3, "color", "click"], ["label", "Typescript"], [3, "type"], ["fuseAlertTitle", ""], [3, "type", "appearance"], [3, "appearance", "type"], [3, "appearance", "type", "showIcon"], ["fuseAlertIcon", "", 1, "icon-size-5", 3, "svgIcon"], [3, "appearance", "dismissible", "dismissed", "name", "type"], ["mat-flat-button", "", 1, "mr-3", 3, "color", "click"], ["mat-flat-button", "", 3, "color", "click"]],
    template: function AlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Alert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "fuse-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " is a customizable component for displaying all kinds of alerts across your app. They can be controlled from your components as well as from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "FuseAlertService");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "fuseAlert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "            import { FuseAlertModule } from '@fuse/components/alert';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 15)(40, "table")(41, "thead")(42, "tr")(43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "tbody")(50, "tr")(51, "td", 16)(52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "name: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " A unique name for the alert box to access it from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "FuseAlertService");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td")(62, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Auto generated");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "tr")(65, "td", 16)(66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "appearance: FuseAlertAppearance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " Appearance of the alert box. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "td")(73, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "soft");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "tr")(76, "td", 16)(77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "dismissed: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " Whether the alert box is dismissed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "td")(84, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "tr")(87, "td", 16)(88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "dismissible: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " Whether the alert box is dismissible. This must be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "dismissed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, " to work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "td")(101, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "tr")(104, "td", 16)(105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "showIcon: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " Whether the icon is shown. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "td")(112, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "tr")(115, "td", 16)(116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "type: FuseAlertType");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, " The type of the alert box. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "td")(123, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "tr")(126, "td", 16)(127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "@Output()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "afterDismissed: true");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, " An event emitted after the alert box dismissed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "tr")(136, "td", 16)(137, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "@Output()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "afterShown: true");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " An event emitted after the alert box shown. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Type aliases");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "            export type FuseAlertAppearance =\n                | 'border'\n                | 'fill'\n                | 'outline'\n                | 'soft';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "            export type FuseAlertType =\n                | 'primary'\n                | 'accent'\n                | 'warn'\n                | 'basic'\n                | 'info'\n                | 'success'\n                | 'warning'\n                | 'error';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Appearance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, " Alert component comes with 3 different built-in appearances to choose from: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 18)(156, "div", 19)(157, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Soft (default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "mat-tab-group", 20)(160, "mat-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](161, AlertComponent_ng_template_161_Template, 32, 8, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "mat-tab", 23)(163, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "\n                        <!-- Primary -->\n                        <fuse-alert [type]=\"'primary'\">\n                            <span fuseAlertTitle>Primary alert</span>\n                            Thank you for joining our newsletter\n                        </fuse-alert>\n\n                        <!-- Accent -->\n                        <fuse-alert [type]=\"'accent'\">\n                            <span fuseAlertTitle>Accent alert</span>\n                            Your changes has been saved\n                        </fuse-alert>\n\n                        <!-- Warn -->\n                        <fuse-alert [type]=\"'warn'\">\n                            <span fuseAlertTitle>Warn alert</span>\n                            Fill all required fields to proceed next step\n                        </fuse-alert>\n\n                        <!-- Basic -->\n                        <fuse-alert [type]=\"'basic'\">\n                            <span fuseAlertTitle>Basic alert</span>\n                            You have 3 new notifications\n                        </fuse-alert>\n\n                        <!-- Info -->\n                        <fuse-alert [type]=\"'info'\">\n                            <span fuseAlertTitle>Info alert</span>\n                            This is a alert with an 'info' level severity\n                        </fuse-alert>\n\n                        <!-- Success -->\n                        <fuse-alert [type]=\"'success'\">\n                            <span fuseAlertTitle>Success alert</span>\n                            This is a alert with a 'success' level severity\n                        </fuse-alert>\n\n                        <!-- Warning -->\n                        <fuse-alert [type]=\"'warning'\">\n                            <span fuseAlertTitle>Warning alert</span>\n                            This is a alert with a 'warning' level severity\n                        </fuse-alert>\n\n                        <!-- Error -->\n                        <fuse-alert [type]=\"'error'\">\n                            <span fuseAlertTitle>Error alert</span>\n                            This is a alert with an 'error' level severity\n                        </fuse-alert>\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 18)(166, "div", 19)(167, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "Outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "mat-tab-group", 20)(170, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](171, AlertComponent_ng_template_171_Template, 32, 16, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "mat-tab", 23)(173, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "\n                        <!-- Primary -->\n                        <fuse-alert\n                            [type]=\"'primary'\"\n                            [appearance]=\"'outline'\">\n                            <span fuseAlertTitle>Primary alert</span>\n                            Thank you for joining our newsletter\n                        </fuse-alert>\n\n                        <!-- Accent -->\n                        <fuse-alert [type]=\"'accent'\"\n                                    [appearance]=\"'outline'\">\n                            <span fuseAlertTitle>Accent alert</span>\n                            Your changes has been saved\n                        </fuse-alert>\n\n                        <!-- Warn -->\n                        <fuse-alert\n                            [type]=\"'warn'\"\n                            [appearance]=\"'outline'\">\n                            <span fuseAlertTitle>Warn alert</span>\n                            Fill all required fields to proceed next step\n                        </fuse-alert>\n\n                        <!-- Basic -->\n                        <fuse-alert\n                            [type]=\"'basic'\"\n                            [appearance]=\"'outline'\">\n                            <span fuseAlertTitle>Basic alert</span>\n                            You have 3 new notifications\n                        </fuse-alert>\n\n                        <!-- Info -->\n                        <fuse-alert\n                            [type]=\"'info'\"\n                            [appearance]=\"'outline'\">\n                            <span fuseAlertTitle>Info alert</span>\n                            This is a alert with an 'info' level severity\n                        </fuse-alert>\n\n                        <!-- Success -->\n                        <fuse-alert\n                            [type]=\"'success'\"\n                            [appearance]=\"'outline'\">\n                            <span fuseAlertTitle>Success alert</span>\n                            This is a alert with a 'success' level severity\n                        </fuse-alert>\n\n                        <!-- Warning -->\n                        <fuse-alert\n                            [type]=\"'warning'\"\n                            [appearance]=\"'outline'\">\n                            <span fuseAlertTitle>Warning alert</span>\n                            This is a alert with a 'warning' level severity\n                        </fuse-alert>\n\n                        <!-- Error -->\n                        <fuse-alert\n                            [type]=\"'error'\"\n                            [appearance]=\"'outline'\">\n                            <span fuseAlertTitle>Error alert</span>\n                            This is a alert with an 'error' level severity\n                        </fuse-alert>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 18)(176, "div", 19)(177, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "Fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "mat-tab-group", 20)(180, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](181, AlertComponent_ng_template_181_Template, 32, 16, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "mat-tab", 23)(183, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "\n                        <!-- Primary -->\n                        <fuse-alert\n                            [type]=\"'primary'\"\n                            [appearance]=\"'fill'\">\n                            <span fuseAlertTitle>Primary alert</span>\n                            Thank you for joining our newsletter\n                        </fuse-alert>\n\n                        <!-- Accent -->\n                        <fuse-alert\n                            [type]=\"'accent'\"\n                            [appearance]=\"'fill'\">\n                            <span fuseAlertTitle>Accent alert</span>\n                            Your changes has been saved\n                        </fuse-alert>\n\n                        <!-- Warn -->\n                        <fuse-alert [type]=\"'warn'\"\n                        [appearance]=\"'fill'\">\n                        <span fuseAlertTitle>Warn alert</span>\n                        Fill all required fields to proceed next step\n                        </fuse-alert>\n\n                        <!-- Basic -->\n                        <fuse-alert\n                            [type]=\"'basic'\"\n                            [appearance]=\"'fill'\">\n                            <span fuseAlertTitle>Basic alert</span>\n                            You have 3 new notifications\n                        </fuse-alert>\n\n                        <!-- Info -->\n                        <fuse-alert\n                            [type]=\"'info'\"\n                            [appearance]=\"'fill'\">\n                            <span fuseAlertTitle>Info alert</span>\n                            This is a alert with an 'info' level severity\n                        </fuse-alert>\n\n                        <!-- Success -->\n                        <fuse-alert\n                            [type]=\"'success'\"\n                            [appearance]=\"'fill'\">\n                            <span fuseAlertTitle>Success alert</span>\n                            This is a alert with a 'success' level severity\n                        </fuse-alert>\n\n                        <!-- Warning -->\n                        <fuse-alert\n                            [type]=\"'warning'\"\n                            [appearance]=\"'fill'\">\n                            <span fuseAlertTitle>Warning alert</span>\n                            This is a alert with a 'warning' level severity\n                        </fuse-alert>\n\n                        <!-- Error -->\n                        <fuse-alert\n                            [type]=\"'error'\"\n                            [appearance]=\"'fill'\">\n                            <span fuseAlertTitle>Error alert</span>\n                            This is a alert with an 'error' level severity\n                        </fuse-alert>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 18)(186, "div", 19)(187, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "mat-tab-group", 20)(190, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](191, AlertComponent_ng_template_191_Template, 32, 16, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "mat-tab", 23)(193, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "                        <!-- Primary -->\n                        <fuse-alert\n                            [type]=\"'primary'\"\n                            [appearance]=\"'border'\">\n                            <span fuseAlertTitle>Primary alert</span>\n                            Thank you for joining our newsletter\n                        </fuse-alert>\n\n                        <!-- Accent -->\n                        <fuse-alert\n                            [type]=\"'accent'\"\n                            [appearance]=\"'border'\">\n                            <span fuseAlertTitle>Accent alert</span>\n                            Your changes has been saved\n                        </fuse-alert>\n\n                        <!-- Warn -->\n                        <fuse-alert\n                            [type]=\"'warn'\"\n                            [appearance]=\"'border'\">\n                            <span fuseAlertTitle>Warn alert</span>\n                            Fill all required fields to proceed next step\n                        </fuse-alert>\n\n                        <!-- Basic -->\n                        <fuse-alert\n                            [type]=\"'basic'\"\n                            [appearance]=\"'border'\">\n                            <span fuseAlertTitle>Basic alert</span>\n                            You have 3 new notifications\n                        </fuse-alert>\n\n                        <!-- Info -->\n                        <fuse-alert\n                            [type]=\"'info'\"\n                            [appearance]=\"'border'\">\n                            <span fuseAlertTitle>Info alert</span>\n                            This is a alert with an 'info' level severity\n                        </fuse-alert>\n\n                        <!-- Success -->\n                        <fuse-alert\n                            [type]=\"'success'\"\n                            [appearance]=\"'border'\">\n                            <span fuseAlertTitle>Success alert</span>\n                            This is a alert with a 'success' level severity\n                        </fuse-alert>\n\n                        <!-- Warning -->\n                        <fuse-alert\n                            [type]=\"'warning'\"\n                            [appearance]=\"'border'\">\n                            <span fuseAlertTitle>Warning alert</span>\n                            This is a alert with a 'warning' level severity\n                        </fuse-alert>\n\n                        <!-- Error -->\n                        <fuse-alert\n                            [type]=\"'error'\"\n                            [appearance]=\"'border'\">\n                            <span fuseAlertTitle>Error alert</span>\n                            This is a alert with an 'error' level severity\n                        </fuse-alert>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "Title and alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, " All alert boxes have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, " content that can be customized. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 18)(206, "div", 19)(207, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "mat-tab-group", 20)(210, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](211, AlertComponent_ng_template_211_Template, 9, 6, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "mat-tab", 23)(213, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "                        <fuse-alert\n                            [appearance]=\"'soft'\"\n                            [type]=\"'info'\">\n                            <span fuseAlertTitle>Alert title</span>\n                            This is the alert content\n                        </fuse-alert>\n\n                        <fuse-alert\n                            [appearance]=\"'soft'\"\n                            [type]=\"'info'\">\n                            <span fuseAlertTitle>Alert title without any content</span>\n                        </fuse-alert>\n\n                        <fuse-alert\n                            [appearance]=\"'soft'\"\n                            [type]=\"'info'\">\n                            Simple alert without a title\n                        </fuse-alert>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, " type alert boxes have default icons and they are visible by default. If you wish to hide those icons, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "[showIcon]=\"false\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, " input. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 18)(235, "div", 19)(236, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "mat-tab-group", 20)(239, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](240, AlertComponent_ng_template_240_Template, 2, 3, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "mat-tab", 23)(242, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](243, "                        <fuse-alert\n                            [appearance]=\"'soft'\"\n                            [type]=\"'success'\"\n                            [showIcon]=\"false\">\n                            Success alert with no icon\n                        </fuse-alert>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "Custom icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](247, " All alert boxes come with custom icon support. To use a custom icon, simply use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](249, "fuseAlertIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, " attribute on an element you wish to use as the icon. If there is a default icon for the alert box, custom icon will override it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 18)(252, "div", 19)(253, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "mat-tab-group", 20)(256, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](257, AlertComponent_ng_template_257_Template, 3, 3, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "mat-tab", 23)(259, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "                        <fuse-alert\n                            [appearance]=\"'soft'\"\n                            [type]=\"'info'\">\n                            <mat-icon class=\"icon-size-5\"\n                                      fuseAlertIcon\n                                      [svgIcon]=\"'heroicons_solid:lock-open'\">\n                            </mat-icon>\n                            Info alert with a custom icon\n                        </fuse-alert>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Dismissible alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, " Dismissible alerts can be removed from the view by clicking their ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "dismiss (x)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, " button. In order to get the dismiss button visible, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "[dismissed]");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, " input must be explicitly set either to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, ". Setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "[dismissed]");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, " input to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](282, " or simply removing it from the element will remove the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "dismiss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, " button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "div", 18)(287, "div", 19)(288, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_290_listener() {
          ctx.show("alertBox1");
          return ctx.show("alertBox2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](291, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "mat-tab-group", 20)(293, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](294, AlertComponent_ng_template_294_Template, 10, 10, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "mat-tab", 23)(296, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297, "                        <fuse-alert\n                            [appearance]=\"'soft'\"\n                            [dismissible]=\"true\"\n                            [dismissed]=\"false\"\n                            [name]=\"'alertBox1'\"\n                            [type]=\"'success'\">\n                            Your subscription model is successfully upgraded to the <b>Lifetime Pro</b>.\n                        </fuse-alert>\n\n                        <fuse-alert\n                            [appearance]=\"'soft'\"\n                            [dismissible]=\"true\"\n                            [dismissed]=\"false\"\n                            [name]=\"'alertBox2'\"\n                            [type]=\"'info'\">\n                            This one has a lot of text so you can see how the text is going to be displayed.\n                            Also this is a dismissible alert box which can be dismissed by clicking the <b>dismiss</b> button.\n                        </fuse-alert>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Dismissible alerts controlled from the service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, " Alerts can be shown and dismissed via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "FuseAlertService");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "div", 18)(306, "div", 19)(307, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "mat-tab-group", 20)(310, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](311, AlertComponent_ng_template_311_Template, 14, 12, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "mat-tab", 23)(313, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "                        <button\n                            class=\"mr-3\"\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"show('alertBox3'); show('alertBox4')\">\n                            Show alert boxes\n                        </button>\n\n                        <button\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"dismiss('alertBox3'); dismiss('alertBox4')\">\n                            Dismiss alert boxes\n                        </button>\n\n                        <fuse-alert\n                            [appearance]=\"'soft'\"\n                            [dismissible]=\"true\"\n                            [dismissed]=\"false\"\n                            [name]=\"'alertBox3'\"\n                            [type]=\"'success'\">\n                            Your subscription model is successfully upgraded to the <b>Lifetime Pro</b>.\n                        </fuse-alert>\n\n                        <fuse-alert\n                            [appearance]=\"'soft'\"\n                            [dismissible]=\"true\"\n                            [dismissed]=\"false\"\n                            [name]=\"'alertBox4'\"\n                            [type]=\"'info'\">\n                            This one has a lot of text so you can see how the text is going to be displayed.\n                            Also this is a dismissible alert box which can be dismissed by clicking the <b>close</b> button.\n                        </fuse-alert>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "mat-tab", 27)(316, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "\n                        /**\n                         * Constructor\n                         */\n                        constructor( private _fuseAlertService: FuseAlertService ) {}\n\n                        /**\n                         * Dismiss the alert via the service\n                         *\n                         * @param name\n                         */\n                        dismiss(name: string): void\n                        {\n                            this._fuseAlertService.dismiss(name);\n                        }\n\n                        /**\n                         * Show the alert via the service\n                         *\n                         * @param name\n                         */\n                        show(name: string): void\n                        {\n                            this._fuseAlertService.show(name);\n                        }\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "typescript");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_1__.FuseHighlightComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent],
    styles: ["fuse-alert[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi91aS9mdXNlLWNvbXBvbmVudHMvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1k7RUFDSSxjQUFBO0FBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBmdXNlLWFsZXJ0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 31410:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/components/card/card.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _fuse_components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/card */ 36085);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);











function CardComponent_ng_template_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "fuse-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " This content is in the card and it doesn't have any style applied to it! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function CardComponent_ng_template_113_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 39);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-down");
  }
}
function CardComponent_ng_template_113_mat_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 39);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-up");
  }
}
function CardComponent_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "fuse-card", 30, 31)(4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Title of the card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " A paragraph, an image, a form or simply anything can go here to create the content of the card. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 33)(9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardComponent_ng_template_113_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r3.expanded = !_r3.expanded);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CardComponent_ng_template_113_mat_icon_12_Template, 1, 1, "mat-icon", 36)(13, CardComponent_ng_template_113_mat_icon_13_Template, 1, 1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " This is the expansion and holds an extra information! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r3.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.expanded);
  }
}
function CardComponent_ng_template_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "fuse-card", 40, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 42)(6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Title of the card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " A paragraph, an image, a form or simply anything can go here to create the content of the card. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 43)(11, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardComponent_ng_template_136_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r8.face = "back");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 46)(15, "div", 47)(16, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardComponent_ng_template_136_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r8.face = "front");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " This is the back of the card and holds an extra information! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Also, the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " side of the card holds more information than the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "front");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " of the card which causes scrollbars to appear. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flippable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:arrow-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:arrow-left");
  }
}
class CardComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function CardComponent_Factory(t) {
    return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_2__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CardComponent,
    selectors: [["card"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 140,
    vars: 9,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "py-3", "px-6", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], [1, "whitespace-nowrap"], [1, "bg-card", "rounded", "shadow", "mt-4"], [1, "px-6", "py-3", "font-mono", "text-secondary", "border-b"], [1, "p-6"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], [1, "bg-gray-100", "p-4"], [1, "mx-auto", "max-w-80"], [1, "flex", "flex-col", "px-8", "py-6", "pb-4"], ["fuseCard", ""], [1, "text-lg", "font-bold"], [1, "mt-3", "-mx-3"], ["mat-button", "", 1, "px-3", 3, "color", "click"], [1, "mr-1"], ["class", "icon-size-5", 3, "svgIcon", 4, "ngIf"], ["fuseCardExpansion", ""], [1, "my-2"], [1, "icon-size-5", 3, "svgIcon"], [1, "flex", "flex-col", 3, "flippable"], ["fuseCardFront", ""], [1, "flex", "flex-col", "px-8", "py-6", "pb-3"], [1, "mt-3", "-mx-3", "self-end"], ["mat-icon-button", "", 3, "color", "click"], ["fuseCardBack", ""], [1, "flex", "flex-col", "flex-auto", "px-8", "py-6", "pt-3"], [1, "mb-2", "-mx-3"], [1, "text-secondary"]],
    template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "fuse-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " is a basic card component to show any kind of information or content with features like flipping and expanding. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p")(26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "fuseCard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "            import { FuseCardModule } from '@fuse/components/card';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 15)(37, "table")(38, "thead")(39, "tr")(40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "tbody")(47, "tr")(48, "td", 16)(49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "flippable: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Whether the card is flippable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "td")(56, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 18)(61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " expand(): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Expands the expansion of the card. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 18)(66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " collapse(): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Collapses the expansion of the card. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 18)(71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " toggleExpanded(): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " Toggles the expanded status of the expansion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 18)(76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " flip(): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " Flip the card. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Just wrap the content or the information with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "fuse-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " to show them within the card. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "fuse-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " doesn't apply any kind of style to its content to make customization simpler: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 21)(91, "div", 22)(92, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "mat-tab-group", 23)(95, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, CardComponent_ng_template_96_Template, 4, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "mat-tab", 26)(98, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "                        <fuse-card>\n                            This content is in the card and it doesn't have any style applied to it!\n                        </fuse-card>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Expandable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " Expandable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "fuse-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, " holds an extra content or information hidden in its expandable area which can be toggled by accessing the component itself via a template reference: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 21)(108, "div", 22)(109, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "mat-tab-group", 23)(112, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](113, CardComponent_ng_template_113_Template, 17, 3, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "mat-tab", 26)(115, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "                        <fuse-card\n                            class=\"flex flex-col px-8 py-6 pb-4\"\n                            #fuseCard>\n                            <div class=\"text-lg font-bold\">Title of the card</div>\n                            <div class=\"mt-2\">\n                                A paragraph, an image, a form or simply anything can go here to create the content of the card.\n                            </div>\n                            <div class=\"mt-3 -mx-3\">\n                                <button\n                                    class=\"px-3\"\n                                    mat-button\n                                    [color]=\"'primary'\"\n                                    (click)=\"fuseCard.expanded = !fuseCard.expanded\">\n                                    <span class=\"mr-1\">Details</span>\n                                    <mat-icon\n                                        class=\"icon-size-5\"\n                                        *ngIf=\"!fuseCard.expanded\"\n                                        [svgIcon]=\"'heroicons_solid:chevron-down'\"></mat-icon>\n                                    <mat-icon\n                                        class=\"icon-size-5\"\n                                        *ngIf=\"fuseCard.expanded\"\n                                        [svgIcon]=\"'heroicons_solid:chevron-up'\"></mat-icon>\n                                </button>\n                            </div>\n\n                            <!-- Expansion -->\n                            <ng-container fuseCardExpansion>\n                                <div class=\"my-2\">\n                                    This is the expansion and holds an extra information!\n                                </div>\n                            </ng-container>\n                        </fuse-card>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Flippable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, " Flippable card holds content or information on both sides and can be flipped by accessing the component itself via a template reference. The only limitation with this type of cards is that the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, " of the card will share the same height as the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "front");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, " of the card. If the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, " side has more content, scrollbar will appear. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 21)(131, "div", 22)(132, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "mat-tab-group", 23)(135, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](136, CardComponent_ng_template_136_Template, 28, 5, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "mat-tab", 26)(138, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "                        <fuse-card\n                            class=\"flex flex-col\"\n                            [flippable]=\"true\"\n                            #fuseCard>\n                            <!-- Front -->\n                            <ng-container fuseCardFront>\n                                <div class=\"flex flex-col px-8 py-6 pb-3\">\n                                    <div class=\"text-lg font-bold\">Title of the card</div>\n                                    <div class=\"mt-2\">\n                                        A paragraph, an image, a form or simply anything can go here to create the content of the card.\n                                    </div>\n                                    <div class=\"mt-3 -mx-3 self-end\">\n                                        <button\n                                            mat-icon-button\n                                            [color]=\"'primary'\"\n                                            (click)=\"fuseCard.face = 'back'\">\n                                                <mat-icon\n                                                    class=\"icon-size-5\"\n                                                    [svgIcon]=\"'heroicons_outline:arrow-right'\"></mat-icon>\n                                        </button>\n                                    </div>\n                                </div>\n                            </ng-container>\n\n                            <!-- Back -->\n                            <ng-container fuseCardBack>\n                                <div class=\"flex flex-col flex-auto px-8 py-6 pt-3\">\n                                    <div class=\"mb-2 -mx-3\">\n                                        <button\n                                            mat-icon-button\n                                            [color]=\"'primary'\"\n                                            (click)=\"fuseCard.face = 'front'\">\n                                            <mat-icon\n                                                class=\"icon-size-5\"\n                                                [svgIcon]=\"'heroicons_outline:arrow-left'\"></mat-icon>\n                                        </button>\n                                    </div>\n                                    <p class=\"text-secondary\">\n                                        This is the back of the card and holds an extra information!\n                                    </p>\n                                    <p class=\"text-secondary\">\n                                        Also, the <em>back</em> side of the card holds more information than the <em>front</em> of the card\n                                        which causes scrollbars to appear.\n                                    </p>\n                                </div>\n                            </ng-container>\n                        </fuse-card>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_1__.FuseHighlightComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _fuse_components_card__WEBPACK_IMPORTED_MODULE_0__.FuseCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 30007:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/components/drawer/drawer.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawerComponent: () => (/* binding */ DrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 98184);
/* harmony import */ var _fuse_components_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/drawer */ 87345);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);











function DrawerComponent_ng_template_213_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DrawerComponent_ng_template_213_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleDrawerMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Toggle drawer mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DrawerComponent_ng_template_213_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toggleDrawerOpen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Toggle drawer open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 32)(5, "fuse-drawer", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("openedChanged", function DrawerComponent_ng_template_213_Template_fuse_drawer_openedChanged_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.drawerOpenedChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Left drawer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Some content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", "leftDrawer")("opened", ctx_r0.drawerOpened)("mode", ctx_r0.drawerMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Current mode: ", ctx_r0.drawerMode, "");
  }
}
class DrawerComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
    // Set the defaults
    this.drawerMode = 'side';
    this.drawerOpened = true;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer mode
   */
  toggleDrawerMode() {
    this.drawerMode = this.drawerMode === 'side' ? 'over' : 'side';
  }
  /**
   * Toggle the drawer open
   */
  toggleDrawerOpen() {
    this.drawerOpened = !this.drawerOpened;
  }
  /**
   * Drawer opened changed
   *
   * @param opened
   */
  drawerOpenedChanged(opened) {
    this.drawerOpened = opened;
  }
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function DrawerComponent_Factory(t) {
    return new (t || DrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_3__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DrawerComponent,
    selectors: [["drawer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 220,
    vars: 8,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], [3, "appearance", "type"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "py-3", "px-6", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], [1, "whitespace-nowrap"], [1, "mb-2"], [1, "text-xs", "font-bold"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "Typescript"], ["mat-flat-button", "", 3, "color", "click"], ["mat-flat-button", "", 1, "ml-4", 3, "color", "click"], [1, "relative", "flex", "overflow-hidden", "border", "mt-8", "min-h-80"], [3, "name", "opened", "mode", "openedChanged"], [1, "p-4"], [1, "flex-auto", "bg-gray-100", "p-4"]],
    template: function DrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Drawer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DrawerComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "fuse-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " is a simple drawer component that can be programmed in various ways. The main difference between Angular Material's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "mat-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " component is that the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "fuse-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " can be placed anywhere on the DOM and it doesn't have to wrap the content like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "mat-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "fuse-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Since fuse-drawer works with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "absolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " positioning by default, the parent of the drawer must have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "position: relative");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "overflow-x: hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " properties otherwise the drawer won't be able to work correctly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p")(46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "fuseDrawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "            import { FuseDrawerModule } from '@fuse/components/drawer';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " Here's the basic usage of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "fuse-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "            <fuse-drawer\n                [fixed]=\"true\"\n                [mode]=\"isScreenSmall ? 'over' : 'side'\"\n                [name]=\"'rightDrawer'\"\n                [opened]=\"!isScreenSmall\"\n                [position]=\"'right'\"\n                [transparentOverlay]=\"false\">\n            </fuse-drawer>\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 17)(66, "table")(67, "thead")(68, "tr")(69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "tbody")(76, "tr")(77, "td", 18)(78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "fixed: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, " Whether the position of the drawer is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "absolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "td")(91, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "tr")(94, "td", 18)(95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "mode: FuseDrawerMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "td")(100, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, " mode can be used to place the drawer on top of the content and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, " mode can be used to push the content and place the drawer next to it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "td")(107, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "tr")(110, "td", 18)(111, "div", 20)(112, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "REQUIRED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "name: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, " Unique name of the drawer. Required for drawer to work correctly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "tr")(123, "td", 18)(124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "opened: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, " Whether the drawer is opened. Only works with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, " mode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "td")(134, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "tr")(137, "td", 18)(138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "position: FuseDrawerPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, " Position of the drawer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "td")(145, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "tr")(148, "td", 18)(149, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "transparentOverlay: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, " Whether the overlay of the drawer is transparent. Only works with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, " mode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "td")(159, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "tr")(162, "td", 18)(163, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "@Output()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "modeChanged: FuseNavigationMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, " An event emitted after the mode of the navigation changed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "tr")(172, "td", 18)(173, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "@Output()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, "openedChanged: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, " An event emitted after the opened status of the drawer changed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "tr")(182, "td", 18)(183, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "@Output()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "positionChanged: FuseNavigationPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, " An event emitted after the position of the drawer changed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "Type aliases");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "            export type FuseDrawerMode =\n                | 'over'\n                | 'side';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "            export type FuseDrawerPosition =\n                | 'left'\n                | 'right';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](198, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, "FuseDrawerService");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](203, " can be used to remotely accessing to drawers using their ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, " properties to control them: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "div", 22)(208, "div", 23)(209, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "mat-tab-group", 24)(212, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](213, DrawerComponent_ng_template_213_Template, 12, 6, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "mat-tab", 27)(215, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](216, "                        <button\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"toggleDrawerMode();\">\n                                Toggle drawer mode\n                        </button>\n\n                        <button\n                            class=\"ml-4\"\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"toggleDrawerOpen();\">\n                            Toggle drawer open\n                        </button>\n\n                        <div class=\"relative flex overflow-hidden border mt-8 min-h-80\">\n                            <fuse-drawer\n                                [name]=\"'leftDrawer'\"\n                                [opened]=\"drawerOpened\"\n                                [mode]=\"drawerMode\">\n                                <div class=\"p-4\">\n                                    Left drawer\n                                </div>\n                            </fuse-drawer>\n\n                            <div class=\"flex-auto bg-gray-100 p-4\">\n                                Some content\n                            </div>\n\n                            <!-- Right drawer must be positioned after the content\n\n                                <fuse-drawer\n                                    [name]=\"'leftDrawer'\"\n                                    [opened]=\"true\"\n                                    [position]=\"'right'\"\n                                    [mode]=\"'side'\">\n                                    <div class=\"p-4\">\n                                        Right drawer\n                                    </div>\n                                </fuse-drawer>\n\n                            -->\n                        </div>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "mat-tab", 29)(218, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "\n                        // Set the defaults\n                        this.drawerMode = 'side';\n                        this.drawerOpened = true;\n\n                        /**\n                         * Toggle the drawer mode\n                         */\n                        toggleDrawerMode(): void\n                        {\n                            this.drawerMode = this.drawerMode === 'side' ? 'over' : 'side';\n                        }\n\n                        /**\n                         * Toggle the drawer open\n                         */\n                        toggleDrawerOpen(): void\n                        {\n                            this.drawerOpened = !this.drawerOpened;\n                        }\n\n                        /**\n                         * Drawer opened changed\n                         *\n                         * @param opened\n                         */\n                        drawerOpenedChanged(opened: boolean): void\n                        {\n                            this.drawerOpened = opened;\n                        }\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appearance", "border")("type", "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "typescript");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_2__.FuseHighlightComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup, _fuse_components_drawer__WEBPACK_IMPORTED_MODULE_1__.FuseDrawerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 98641:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/components/fullscreen/fullscreen.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullscreenComponent: () => (/* binding */ FullscreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class FullscreenComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function FullscreenComponent_Factory(t) {
    return new (t || FullscreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FullscreenComponent,
    selectors: [["fullscreen"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 80,
    vars: 3,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "py-3", "px-6", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"]],
    template: function FullscreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Fullscreen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullscreenComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "fuse-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " is a small component that toggles the fullscreen on and off. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p")(26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "fuseFullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "            import { FuseFullscreenModule } from '@fuse/components/fullscreen';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Here's the basic usage of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "fuse-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "fuse-fullscreen>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "/fuse-fullscreen>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 16)(50, "table")(51, "thead")(52, "tr")(53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "tbody")(60, "tr")(61, "td", 17)(62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "iconTpl: TemplateRef<any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Template reference for the icon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tr")(71, "td", 17)(72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "tooltip: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Tooltip of the toggle button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " 'Toggle Fullscreen' ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 91607:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/components/highlight/highlight.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightComponent: () => (/* binding */ HighlightComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class HighlightComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function HighlightComponent_Factory(t) {
    return new (t || HighlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HighlightComponent,
    selectors: [["highlight"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 117,
    vars: 3,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "py-3", "px-6", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], ["href", "https://highlightjs.org/usage/", "rel", "noreferrer", "target", "_blank"]],
    template: function HighlightComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Highlight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HighlightComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "fuse-highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " is a syntax highlighter component to display syntax highlighted codes within the content. Internally, it uses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "highlight.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "fuseHighlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "            import { FuseHighlightModule } from '@fuse/components/highlight';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Here's the basic usage of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "fuse-highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "textarea fuse-highlight\n                      lang=\"html\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\n                <");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Some HTML code to highlight<");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "/div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\n            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "/textarea>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p")(55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "fuse-highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " doesn't have its own selector and cannot be used like any other components. It must be used with a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "<textarea>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " The main reason of this is that the Angular parses the templates before binding and running components. Because of this mechanic, anything you place into templates will be taken as a literal content and parsed by Angular. Only the contents of a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "<textarea>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " can be preserved as is. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 16)(69, "table")(70, "thead")(71, "tr")(72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "tbody")(79, "tr")(80, "td", 17)(81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "code: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " Piece of code to highlight. If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " input is not provided, the actual content of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " will be used. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "tr")(96, "td", 17)(97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "lang: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Which language to highlight the code. See: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "https://highlightjs.org/usage/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " for full list of supported languages. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "FuseHighlightService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " can also be used to format and highlight code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "            import { FuseHighlightService } from '@fuse/components/highlight';\n\n            code = '<div> Some code to highlight </div>'\n\n            /**\n             * Constructor\n             */\n            constructor(private _fuseHighlightService: FuseHighlightService)\n            {\n                const highlightedCode = this._fuseHighlightService.highlight(code, 'html');\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 67347:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/components/loading-bar/loading-bar.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingBarComponent: () => (/* binding */ LoadingBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 59293);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ 70549);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 17474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);
/* harmony import */ var _fuse_services_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/loading */ 92499);
















function LoadingBarComponent_ng_template_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoadingBarComponent_ng_template_119_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.showLoadingBar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Show loading bar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoadingBarComponent_ng_template_119_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.hideLoadingBar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Hide loading bar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
  }
}
function LoadingBarComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "div", 32)(2, "mat-slide-toggle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function LoadingBarComponent_ng_template_132_Template_mat_slide_toggle_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.setAutoMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Auto Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoadingBarComponent_ng_template_132_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.makeAPICall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Make an API call (2000ms delay) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", true)("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("API call status: ", ctx_r1.apiCallStatus, "");
  }
}
function LoadingBarComponent_ng_template_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "div", 35)(2, "div", 36)(3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoadingBarComponent_ng_template_145_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.showLoadingBar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Show loading bar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoadingBarComponent_ng_template_145_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.hideLoadingBar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Hide loading bar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-slide-toggle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function LoadingBarComponent_ng_template_145_Template_mat_slide_toggle_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.toggleMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Toggle determinate mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Progress value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-slider", 37)(12, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function LoadingBarComponent_ng_template_145_Template_input_valueChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.sliderValue = $event);
    })("valueChange", function LoadingBarComponent_ng_template_145_Template_input_valueChange_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.setProgress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", false)("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.sliderValue);
  }
}
class LoadingBarComponent {
  /**
   * Constructor
   */
  constructor(_httpClient, _fuseComponentsComponent, _fuseLoadingService) {
    this._httpClient = _httpClient;
    this._fuseComponentsComponent = _fuseComponentsComponent;
    this._fuseLoadingService = _fuseLoadingService;
    this.apiCallStatus = '-';
    this.mode = 'indeterminate';
    this.sliderValue = 0;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  /**
   * Show the loading bar
   */
  showLoadingBar() {
    this._fuseLoadingService.show();
  }
  /**
   * Hide the loading bar
   */
  hideLoadingBar() {
    this._fuseLoadingService.hide();
  }
  /**
   * Set the auto mode
   *
   * @param change
   */
  setAutoMode(change) {
    this._fuseLoadingService.setAutoMode(change.checked);
  }
  /**
   * Make a fake API call
   */
  makeAPICall() {
    this.apiCallStatus = 'Waiting...';
    this._httpClient.get('https://jsonplaceholder.typicode.com/posts?_delay=2000').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
      this.apiCallStatus = 'Finished!';
    })).subscribe(response => {
      console.log(response);
    });
  }
  /**
   * Toggle the mode
   */
  toggleMode() {
    // Show the loading bar
    this._fuseLoadingService.show();
    // Set the mode
    this.mode = this.mode === 'indeterminate' ? 'determinate' : 'indeterminate';
    this._fuseLoadingService.setMode(this.mode);
  }
  /**
   * Set the progress
   */
  setProgress() {
    this._fuseLoadingService.setProgress(this.sliderValue);
  }
  static #_ = this.ɵfac = function LoadingBarComponent_Factory(t) {
    return new (t || LoadingBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fuse_services_loading__WEBPACK_IMPORTED_MODULE_2__.FuseLoadingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoadingBarComponent,
    selectors: [["loading-bar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 152,
    vars: 13,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "py-3", "px-6", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], [1, "bg-card", "rounded", "shadow", "mt-4"], [1, "px-6", "py-3", "font-mono", "text-secondary", "border-b"], [1, "p-6"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "Typescript"], [1, "bg-gray-100", "p-4"], [1, "flex", "mx-auto", "max-w-80", "space-x-4"], ["mat-flat-button", "", 3, "color", "click"], [1, "flex", "flex-col", "items-center", "mx-auto", "max-w-80"], [3, "checked", "color", "change"], [1, "w-24", "pt-6", "mb-6", "border-b"], [1, "flex", "flex-col", "items-center", "mx-auto", "max-w-80", "space-y-8"], [1, "flex", "items-center", "space-x-4"], [3, "color"], ["matSliderThumb", "", 3, "value", "valueChange"]],
    template: function LoadingBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Loading Bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoadingBarComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "fuse-loading-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " is a small component to show the loading status at the top of the page. It can be configured to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Auto Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " to show/hide automatically on each HTTP request. It can also be toggled manually using its service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "fuseLoadingBar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "            import { FuseLoadingBarModule } from '@fuse/components/loading-bar';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Here's the basic usage of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "fuse-loading-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, ". We already placed the component to the layout templates for you but you can always move it! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "            <");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "fuse-loading-bar>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "/fuse-loading-bar>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 16)(53, "table")(54, "thead")(55, "tr")(56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "tbody")(63, "tr")(64, "td", 17)(65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "autoMode: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Turn on or off the Auto Mode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "td")(72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "p")(77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "FuseLoadingService");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " can be injected to control the loading bar from anywhere. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 18)(81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " show(): void; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " Shows the loading bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 18)(86, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " hide(): void; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " Hides the loading bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 18)(91, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, " setAutoMode(value: boolean): void; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, " Sets the Auto Mode. In Auto mode, loading bar will show when there is an HTTP request and it will hide when all HTTP requests are completed or failed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 18)(96, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, " setMode(value: 'determinate' | 'indeterminate'): void; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, " Sets the mode of the underlying ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "MatProgressBar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, " component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 18)(104, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, " setProgress(value: number): void; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, " Sets the progress manually. Only available on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "determinate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " mode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 21)(114, "div", 22)(115, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Show / hide the loading bar manually");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "mat-tab-group", 23)(118, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](119, LoadingBarComponent_ng_template_119_Template, 6, 2, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "mat-tab", 26)(121, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "                        <button\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"showLoadingBar()\">\n                            Show loading bar\n                        </button>\n\n                        <button\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"hideLoadingBar()\">\n                            Hide loading bar\n                        </button>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "mat-tab", 28)(124, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "                        /**\n                         * Constructor\n                         */\n                        constructor( private _fuseLoadingService: FuseLoadingService ) { }\n\n                        ...\n\n                        /**\n                         * Show the loading bar\n                         */\n                        showLoadingBar(): void\n                        {\n                            this._fuseLoadingService.show();\n                        }\n\n                        /**\n                         * Hide the loading bar\n                         */\n                        hideLoadingBar(): void\n                        {\n                            this._fuseLoadingService.hide();\n                        }\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 21)(127, "div", 22)(128, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Toggle the Auto Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "mat-tab-group", 23)(131, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](132, LoadingBarComponent_ng_template_132_Template, 9, 4, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "mat-tab", 26)(134, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "mat-tab", 28)(137, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "                        apiCallStatus: string = '-';\n\n                        /**\n                         * Constructor\n                         */\n                        constructor(\n                            private _httpClient: HttpClient,\n                            private _fuseLoadingService: FuseLoadingService\n                        )\n                        { }\n\n                        ...\n\n                        /**\n                         * Set the auto mode\n                         *\n                         * @param change\n                         */\n                        setAutoMode(change: MatSlideToggleChange): void\n                        {\n                            this._fuseLoadingService.setAutoMode(change.checked);\n                        }\n\n                        /**\n                         * Make a fake API call\n                         */\n                        makeAPICall(): void\n                        {\n                            this.apiCallStatus = 'Waiting...';\n\n                            this._httpClient.get('https://jsonplaceholder.typicode.com/posts?_delay=2000')\n                                .pipe(finalize(() => { this.apiCallStatus = 'Finished!'; }))\n                                .subscribe((response) => {\n                                    console.log(response);\n                                });\n                        }\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 21)(140, "div", 22)(141, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Manually set the progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "mat-tab-group", 23)(144, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](145, LoadingBarComponent_ng_template_145_Template, 13, 6, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "mat-tab", 26)(147, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "                        <mat-slide-toggle\n                            [checked]=\"false\"\n                            [color]=\"'primary'\"\n                            (change)=\"toggleMode()\">\n                            Toggle determinate mode\n                        </mat-slide-toggle>\n\n                        <mat-slider\n                            [color]=\"'primary'\"\n                            (change)=\"setProgress($event)\">\n                            Progress value\n                        </mat-slider>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "mat-tab", 28)(150, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "                        mode: 'determinate' | 'indeterminate' = 'indeterminate';\n\n                        /**\n                         * Constructor\n                         */\n                        constructor( private _fuseLoadingService: FuseLoadingService ) { }\n\n                        ...\n\n                        /**\n                         * Toggle the mode\n                         */\n                        toggleMode(): void\n                        {\n                            // Show the loading bar\n                            this._fuseLoadingService.show();\n\n                            // Turn off the auto mode\n                            this._fuseLoadingService.setAutoMode(false);\n\n                            // Set the mode\n                            this.mode = this.mode === 'indeterminate' ? 'determinate' : 'indeterminate';\n                            this._fuseLoadingService.setMode(this.mode);\n                        }\n\n                        /**\n                         * Set the progress\n                         *\n                         * @param change\n                         */\n                        setProgress(change: MatSliderChange): void\n                        {\n                            this._fuseLoadingService.setProgress(change.value);\n                        }\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("                        <mat-slide-toggle\n                            [checked]=\"true\"\n                            [color]=\"'primary'\"\n                            (change)=\"setAutoMode($event)\">\n                            Auto Mode\n                        </mat-slide-toggle>\n\n                        <div class=\"w-24 pt-6 mb-6 border-b\"></div>\n\n                        <button\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"makeAPICall()\">\n                            Make an API call (2000ms delay)\n                        </button>\n\n                        <div class=\"mt-2\">API call status: ", ctx.apiCallStatus, "</div>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lang", "ts");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle, _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderThumb],
    encapsulation: 2
  });
}

/***/ }),

/***/ 32851:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/components/masonry/masonry.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasonryComponent: () => (/* binding */ MasonryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _fuse_components_masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/masonry */ 76354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);













function MasonryComponent_ng_template_106_ng_template_3_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8, " ");
  }
}
function MasonryComponent_ng_template_106_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MasonryComponent_ng_template_106_ng_template_3_ng_container_0_ng_container_2_Template, 3, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", column_r6.items);
  }
}
function MasonryComponent_ng_template_106_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MasonryComponent_ng_template_106_ng_template_3_ng_container_0_Template, 3, 1, "ng-container", 30);
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", columns_r4);
  }
}
const _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function MasonryComponent_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fuse-masonry", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MasonryComponent_ng_template_106_ng_template_3_Template, 1, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("columns", 4)("columnsTemplate", _r3);
  }
}
function MasonryComponent_ng_template_128_ng_template_3_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r15, " ");
  }
}
function MasonryComponent_ng_template_128_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MasonryComponent_ng_template_128_ng_template_3_ng_container_0_ng_container_2_Template, 3, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", column_r13.items);
  }
}
function MasonryComponent_ng_template_128_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MasonryComponent_ng_template_128_ng_template_3_ng_container_0_Template, 3, 1, "ng-container", 30);
  }
  if (rf & 2) {
    const columns_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", columns_r11);
  }
}
const _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function MasonryComponent_ng_template_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fuse-masonry", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MasonryComponent_ng_template_128_ng_template_3_Template, 1, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1))("columns", ctx_r1.columns)("columnsTemplate", _r10);
  }
}
class MasonryComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent, _fuseMediaWatcherService) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this.columns = 4;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(({
      matchingAliases
    }) => {
      // Set the masonry columns
      //
      // This if block structured in a way so that only the
      // biggest matching alias will be used to set the column
      // count.
      if (matchingAliases.includes('xl')) {
        this.columns = 5;
      } else if (matchingAliases.includes('lg')) {
        this.columns = 4;
      } else if (matchingAliases.includes('md')) {
        this.columns = 3;
      } else if (matchingAliases.includes('sm')) {
        this.columns = 2;
      } else {
        this.columns = 1;
      }
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function MasonryComponent_Factory(t) {
    return new (t || MasonryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_2__.FuseComponentsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_3__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MasonryComponent,
    selectors: [["masonry"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 135,
    vars: 8,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "py-3", "px-6", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], [1, "whitespace-nowrap"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "TypeScript"], [1, "bg-gray-100", "p-4"], [1, "mx-auto", "max-w-80"], [1, "-mx-2", 3, "items", "columns", "columnsTemplate"], ["columnsTemplate", ""], [4, "ngFor", "ngForOf"], [1, "flex-1", "mx-2", "p-2", "border", "rounded", "space-y-2"], [1, "p-2", "text-center", "rounded", "bg-primary", "text-on-primary"]],
    template: function MasonryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Masonry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MasonryComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "fuse-masonry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " is a basic Masonry layout component to show items in Masonry grid layout. Since it doesn't use any other third party library or complex calculations to keep everything smooth and fast; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ul")(26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "It does NOT work with elements with different widths ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "It does NOT sort items based on their heights (This here is the real performance killer)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " If you don't need to mix and match different width items and don't need to sort items based on their heights, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "fuse-masonry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " will do the job for you and it will do it very smoothly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p")(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "fuseMasonry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "            import { FuseMasonry } from '@fuse/components/masonry';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 15)(47, "table")(48, "thead")(49, "tr")(50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "tbody")(57, "tr")(58, "td", 16)(59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "columnsTemplate: TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, " Column template for masonry component to lay out. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "td")(66, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "tr")(69, "td", 16)(70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "columns: number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " Number of columns to create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "td")(77, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "tr")(80, "td", 16)(81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "items: any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " Items to distribute into columns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "td")(88, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "This component doesn't have any public methods.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "p")(97, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "fuse-masonry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, " doesn't provide a default template or styling to the items. You can think of it as a helper function but in a component form: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 18)(101, "div", 19)(102, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "mat-tab-group", 20)(105, "mat-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](106, MasonryComponent_ng_template_106_Template, 5, 4, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "mat-tab", 23)(108, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "                        <fuse-masonry\n                            class=\"-mx-2\"\n                            [items]=\"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\"\n                            [columns]=\"4\"\n                            [columnsTemplate]=\"columnsTemplate\">\n                        </fuse-masonry>\n\n                        <ng-template\n                            #columnsTemplate\n                            let-columns>\n                            <ng-container *ngFor=\"let column of columns\">\n                                <!-- Column -->\n                                <div class=\"flex-1 mx-2 p-2 border rounded space-y-2\">\n                                    <ng-container *ngFor=\"let item of column.items\">\n                                        <!-- Item -->\n                                        <div class=\"p-2 text-center rounded bg-primary text-on-primary\">\n                                            ITEM CONTENT\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </ng-container>\n                        </ng-template>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "p")(113, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "fuse-masonry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, " doesn't provide a way of changing the column count depending on breakpoints but this can easily be handled by combining ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "fuse-masonry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, " with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "FuseMediaWatcherService");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 18)(123, "div", 19)(124, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "mat-tab-group", 20)(127, "mat-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](128, MasonryComponent_ng_template_128_Template, 5, 4, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "mat-tab", 23)(130, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "                        <fuse-masonry\n                            class=\"-mx-2\"\n                            [items]=\"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\"\n                            [columns]=\"columns\"\n                            [columnsTemplate]=\"columnsTemplate\">\n                        </fuse-masonry>\n\n                        <ng-template\n                            #columnsTemplate\n                            let-columns>\n                            <ng-container *ngFor=\"let column of columns\">\n                                <!-- Column -->\n                                <div class=\"flex-1 mx-2 p-2 border rounded space-y-2\">\n                                    <ng-container *ngFor=\"let item of column.items\">\n                                        <!-- Item -->\n                                        <div class=\"p-2 text-center rounded bg-primary text-on-primary\">\n                                            ITEM CONTENT\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </ng-container>\n                        </ng-template>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "mat-tab", 25)(133, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "                        columns: number = 4;\n\n                        // Subscribe to media changes\n                        this._fuseMediaWatcherService.onMediaChange$\n                            .pipe(takeUntil(this._unsubscribeAll))\n                            .subscribe(({matchingAliases}) => {\n\n                                // Set the masonry columns\n                                //\n                                // This if block structured in a way so that only the\n                                // biggest matching alias will be used to set the column\n                                // count.\n                                if ( matchingAliases.includes('xl') )\n                                {\n                                    this.columns = 5;\n                                }\n                                else if ( matchingAliases.includes('lg') )\n                                {\n                                    this.columns = 4;\n                                }\n                                else if ( matchingAliases.includes('md') )\n                                {\n                                    this.columns = 3;\n                                }\n                                else if ( matchingAliases.includes('sm') )\n                                {\n                                    this.columns = 2;\n                                }\n                                else\n                                {\n                                    this.columns = 1;\n                                }\n                            });\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "ts");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabGroup, _fuse_components_masonry__WEBPACK_IMPORTED_MODULE_1__.FuseMasonryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor],
    encapsulation: 2
  });
}

/***/ }),

/***/ 49911:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/components/navigation/navigation.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 98184);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_components_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/components/navigation */ 71072);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);











function NavigationComponent_ng_template_553_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavigationComponent_ng_template_553_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.getNavItem("documentation.changelog", "mainNavigation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Get the Changelog item (See browser console) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
  }
}
function NavigationComponent_ng_template_576_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavigationComponent_ng_template_576_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.updateBadgeTitle("documentation.changelog", "mainNavigation", "9.9.99"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Update the 'Changelog' badge title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
  }
}
function NavigationComponent_ng_template_589_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavigationComponent_ng_template_589_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.toggleDisabled("documentation.changelog", "mainNavigation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Toggle the disabled status of 'Changelog' item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
  }
}
function NavigationComponent_ng_template_606_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "fuse-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Reload the page to load the default navigation! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavigationComponent_ng_template_606_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.swapNavigationData("mainNavigation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Swap the entire navigation data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary");
  }
}
class NavigationComponent {
  /**
   * Constructor
   */
  constructor(_fuseNavigationService, _fuseComponentsComponent) {
    this._fuseNavigationService = _fuseNavigationService;
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get navigation item
   *
   * @param itemId
   * @param navigationName
   */
  getNavItem(itemId, navigationName) {
    // Get the component -> navigation data -> item
    const navComponent = this._fuseNavigationService.getComponent(navigationName);
    // Return if the navigation component does not exist
    if (!navComponent) {
      return null;
    }
    // Get the navigation item
    const navigation = navComponent.navigation;
    const item = this._fuseNavigationService.getItem(itemId, navigation);
    console.log(item);
    return item;
  }
  /**
   * Update badge title
   *
   * @param itemId
   * @param navigationName
   * @param title
   */
  updateBadgeTitle(itemId, navigationName, title) {
    // Get the component -> navigation data -> item
    const navComponent = this._fuseNavigationService.getComponent(navigationName);
    // Return if the navigation component does not exist
    if (!navComponent) {
      return null;
    }
    // Get the navigation item, update the badge and refresh the component
    const navigation = navComponent.navigation;
    const item = this._fuseNavigationService.getItem(itemId, navigation);
    item.badge.title = title;
    navComponent.refresh();
  }
  /**
   * Toggle disabled status
   *
   * @param itemId
   * @param navigationName
   */
  toggleDisabled(itemId, navigationName) {
    // Get the component -> navigation data -> item
    const navComponent = this._fuseNavigationService.getComponent(navigationName);
    // Return if the navigation component does not exist
    if (!navComponent) {
      return null;
    }
    // Get the navigation item, update the badge and refresh the component
    const navigation = navComponent.navigation;
    const item = this._fuseNavigationService.getItem(itemId, navigation);
    item.disabled = !item.disabled;
    navComponent.refresh();
  }
  /**
   * Swap navigation data
   *
   * @param navigationName
   */
  swapNavigationData(navigationName) {
    // Get the component -> navigation data -> item
    const navComponent = this._fuseNavigationService.getComponent(navigationName);
    // Return if the navigation component does not exist
    if (!navComponent) {
      return null;
    }
    // A navigation data to replace with
    const newNavigation = [{
      id: 'supported-components',
      title: 'Supported components',
      subtitle: 'Compatible third party components',
      type: 'group',
      icon: 'memory',
      children: [{
        id: 'supported-components.apex-charts',
        title: 'ApexCharts',
        type: 'basic',
        icon: 'insert_chart',
        link: '/supported-components/apex-charts'
      }, {
        id: 'supported-components.google-maps',
        title: 'Google Maps',
        type: 'basic',
        icon: 'map',
        link: '/supported-components/google-maps'
      }, {
        id: 'supported-components.quill-editor',
        title: 'Quill editor',
        type: 'basic',
        icon: 'font_download',
        link: '/supported-components/quill-editor'
      }, {
        id: 'supported-components.youtube-player',
        title: 'Youtube player',
        type: 'basic',
        icon: 'play_circle_filled',
        link: '/supported-components/youtube-player'
      }]
    }];
    // Replace the navigation data
    navComponent.navigation = newNavigation;
    navComponent.refresh();
  }
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function NavigationComponent_Factory(t) {
    return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_components_navigation__WEBPACK_IMPORTED_MODULE_2__.FuseNavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_3__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NavigationComponent,
    selectors: [["navigation"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 613,
    vars: 17,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], [3, "appearance", "type"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "py-3", "px-6", "mt-2", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], ["href", "https://angular.io/api/router/IsActiveMatchOptions", "target", "_blank", "rel", "noreferrer"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "py-3", "px-6", "rounded", "shadow"], [1, "whitespace-nowrap"], [1, "mb-2"], [1, "text-xs", "font-bold"], [1, "bg-card", "py-3", "px-6", "mt-4", "rounded", "shadow"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "Typescript"], ["mat-flat-button", "", 3, "color", "click"], ["appearance", "outline", "type", "info"], ["mat-flat-button", "", 1, "mt-4", 3, "color", "click"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Navigation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "fuse-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " is a set of components for creating navigations from data. It has two different variations; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "fuse-vertical-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " for creating vertical and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "fuse-horizontal-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " for creating horizontal navigations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " navigation comes with built-in drawer that can be programmed in various ways to show the navigation in different styles and to control the mobile behavior. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p")(37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "fuse-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " also provides a service which can be used to store navigation data as well as accessing navigation items with their ids from the navigation data. It's a utility service, you don't have to use it to make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "fuse-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p")(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "fuseVerticalNavigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "fuseHorizontalNavigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "fuse-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " fuse-navigation designed to work with data and it must be supplied in certain format. If you want to create a navigation from an HTML structure, this component is not for you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "            import { FuseVerticalNavigationModule } from '@fuse/components/navigation';\n            import { FuseHorizontalNavigationModule } from '@fuse/components/navigation';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Navigation item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " This is the interface of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Navigation item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, ". Both ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " navigation items use the same interface: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "            export interface FuseNavigationItem\n            {\n                id?: string;\n                title?: string;\n                subtitle?: string;\n                type:\n                    | 'aside'\n                    | 'basic'\n                    | 'collapsable'\n                    | 'divider'\n                    | 'group'\n                    | 'spacer';\n                hidden?: (item: FuseNavigationItem) => boolean;\n                active?: boolean;\n                disabled?: boolean;\n                tooltip?: string;\n                link?: string;\n                fragment?: string;\n                preserveFragment?: boolean;\n                queryParams?: Params | null;\n                queryParamsHandling?: QueryParamsHandling | null;\n                externalLink?: boolean;\n                target?:\n                    | '_blank'\n                    | '_self'\n                    | '_parent'\n                    | '_top'\n                    | string;\n                exactMatch?: boolean;\n                isActiveMatchOptions?: IsActiveMatchOptions;\n                function?: (item: FuseNavigationItem) => void;\n                classes?: {\n                    title?: string;\n                    subtitle?: string;\n                    icon?: string;\n                    wrapper?: string;\n                };\n                icon?: string;\n                badge?: {\n                    title?: string;\n                    classes?: string;\n                };\n                children?: FuseNavigationItem[];\n                meta?: any;\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 16)(73, "table")(74, "thead")(75, "tr")(76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "tbody")(81, "tr")(82, "td", 17)(83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " Unique id of the navigation item. It's important to supply navigation items with ids if you want to access and modify them after generating the navigation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "tr")(88, "td", 17)(89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " Title of the navigation item. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "tr")(94, "td", 17)(95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, " Subtitle of the navigation item. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "tr")(100, "td", 17)(101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, " Type of the navigation item. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "tr")(106, "td", 17)(107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, " A function that returns a boolean. It gets one parameter which is the navigation item. Returning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, " from the function will hide the item and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, " will show it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "tr")(118, "td", 17)(119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, " Whether to force the navigation item to be active. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "tr")(124, "td", 17)(125, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, " Whether the navigation item is disabled. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "tr")(130, "td", 17)(131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, " Tooltip to show on item hover. Empty string will remove the tooltip. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "tr")(136, "td", 17)(137, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, " String representation of the item link. It can be either a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "router");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, " link or a normal, outgoing link. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "tr")(145, "td", 17)(146, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "fragment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, " Sets the hash fragment for the URL. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "tr")(151, "td", 17)(152, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "preserveFragment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, " When true, preserves the URL fragment for the next navigation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "tr")(157, "td", 17)(158, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "queryParams");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, " Sets query parameters to the URL. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "tr")(163, "td", 17)(164, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "queryParamsHandling");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, " How to handle query parameters in the router link for the next navigation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "tr")(169, "td", 17)(170, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, "externalLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, " Whether the supplied link should be parsed as an external link. It must be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, " if you supply a normal, outgoing link in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, " property. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "tr")(181, "td", 17)(182, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, "target");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185, " Sets the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "target");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, " attribute of the external, outgoing link. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "tr")(190, "td", 17)(191, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "exactMatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, " Sets the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "exact");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, " parameter on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "[routerLinkActiveOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "tr")(202, "td", 17)(203, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "isActiveMatchOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, " Sets the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](208, "isActiveMatchOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, " object on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211, "[routerLinkActiveOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, ". If provided, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214, "exactMatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](215, " option will be ignored. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "https://angular.io/api/router/IsActiveMatchOptions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "tr")(219, "td", 17)(220, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](221, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](223, " A function to run on navigation item click. It gets one parameter which is the navigation item. Supplying function will ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](225, "NOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, " override the link functionality of the navigation item, they will run in parallel. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "tr")(228, "td", 17)(229, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](230, "classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, " Custom class names for the navigation item's specific parts. Multiple class names can be added by separating them with whitespace: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](234, "'class1 class2 class3'");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "tr")(236, "td", 17)(237, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](240, " Icon name for the navigation item. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "tr")(242, "td", 17)(243, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244, "badge.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](246, " Title of the badge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "tr")(248, "td", 17)(249, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250, "badge.classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](252, " Classes to add to the badge. This can be used to customize the look of the badge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "tr")(254, "td", 17)(255, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256, "children");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](258, " Array of navigation items to create child items. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](259, "tr")(260, "td", 17)(261, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](262, "meta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](264, " An object to hold custom data for the navigation item. It can be used for anything such as storing the access role and authorization of the navigation item. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](265, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](266, "Vertical navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](268, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](270, " Here's the basic usage of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, "fuse-vertical-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](273, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](275, "            <fuse-vertical-navigation\n                [appearance]=\"'classic'\"\n                [autoCollapse]=\"true\"\n                [inner]=\"false\"\n                [mode]=\"isScreenSmall ? 'over' : 'side'\"\n                [name]=\"'leftNavigation'\"\n                [navigation]=\"navigationData\"\n                [opened]=\"!isScreenSmall\"\n                [position]=\"'left'\"\n                [transparentOverlay]=\"false\">\n            </fuse-vertical-navigation>\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](277, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "div", 20)(279, "table")(280, "thead")(281, "tr")(282, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](283, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](285, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](287, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "tbody")(289, "tr")(290, "td", 17)(291, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](294, "appearance: FuseVerticalNavigationAppearance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](296, " Appearance of the navigation and its drawer. This is a string type and can be used to override the style of the navigation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "td")(298, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](299, "classic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](300, "tr")(301, "td", 17)(302, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](303, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](305, "autoCollapse: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](307, " Whether expanding an expandable navigation item should close other expanded items excluding the active menu item's parent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "td")(309, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](310, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](311, "tr")(312, "td", 17)(313, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](314, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](316, "inner: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318, " Whether the inner mode is active. This mode allows using navigation without its drawer. Suitable for using it inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](319, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](320, "mat-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](321, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323, "mat-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](324, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](325, "td")(326, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](327, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](328, "tr")(329, "td", 17)(330, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](331, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](332, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](333, "mode: FuseVerticalNavigationMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](334, "td")(335, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](336, "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](337, " mode can be used to place the drawer on top of the content and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](338, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](339, "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](340, " mode can be used to push the content and place the drawer next to it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](341, "td")(342, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](343, "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "tr")(345, "td", 17)(346, "div", 22)(347, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](348, "REQUIRED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](350, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](351, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](352, "name: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](354, " Unique name of the navigation. Required for navigation and its drawer to work correctly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](356, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](357, "tr")(358, "td", 17)(359, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](360, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](362, "navigation: FuseNavigationItem[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](364, " Array of navigation items to build the navigation from. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](366, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](367, "tr")(368, "td", 17)(369, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](370, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](371, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](372, "opened: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](374, " Whether the navigation drawer is opened. Only works with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](375, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](376, "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](377, " mode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](378, "td")(379, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](380, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](381, "tr")(382, "td", 17)(383, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](384, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](385, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](386, "position: FuseVerticalNavigationPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](388, " Position of the drawer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](389, "td")(390, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](391, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "tr")(393, "td", 17)(394, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](395, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](396, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](397, "transparentOverlay: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](398, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](399, " Whether the overlay of the drawer is transparent. Only works with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](401, "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](402, " mode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](403, "td")(404, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](405, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](406, "tr")(407, "td", 17)(408, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](409, "@Output()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](410, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](411, "appearanceChanged: FuseVerticalNavigationAppearance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](413, " An event emitted after the appearance of the navigation changed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](415, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](416, "tr")(417, "td", 17)(418, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](419, "@Output()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](421, "modeChanged: FuseVerticalNavigationMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](423, " An event emitted after the mode of the navigation changed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](425, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](426, "tr")(427, "td", 17)(428, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](429, "@Output()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](430, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](431, "openedChanged: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](433, " An event emitted after the opened status of the navigation changed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](435, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](436, "tr")(437, "td", 17)(438, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](439, "@Output()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](440, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](441, "positionChanged: FuseVerticalNavigationPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](443, " An event emitted after the position of the navigation changed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](445, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](446, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](447, "Custom content hooks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](448, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](449, " Since the entire navigation will be created from the supplied navigation data, it's only possible to attach custom content inside the navigation drawer using custom content hooks. There are four of these hooks; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](450, "div", 24)(451, "table")(452, "thead")(453, "tr")(454, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](455, "Hook");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](456, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](457, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](458, "tbody")(459, "tr")(460, "td", 17)(461, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](462, "fuseVerticalNavigationHeader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](463, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](464, " Fixed header hook. Anything put inside this hook will not scroll with drawer content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](465, "tr")(466, "td", 17)(467, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](468, "fuseVerticalNavigationContentHeader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](470, " Header hook. Anything put inside this hook will be scrolled with the drawer content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](471, "tr")(472, "td", 17)(473, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](474, "fuseVerticalNavigationFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](476, " Fixed footer hook. Anything put inside this hook will not scroll with drawer content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](477, "tr")(478, "td", 17)(479, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](480, "fuseVerticalNavigationContentFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](482, " Footer hook. Anything put inside this hook will be scrolled with the drawer content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](483, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](484, "            <!-- Navigation -->\n            <fuse-vertical-navigation>\n\n                <div fuseVerticalNavigationHeader>\n                    At the top, fixed into position.\n                </div>\n\n                <div fuseVerticalNavigationContentHeader>\n                    At the top, scrolls with the content.\n                </div>\n\n                <div fuseVerticalNavigationContentFooter>\n                    At the bottom, scrolls with the content.\n                </div>\n\n                <div fuseVerticalNavigationFooter>\n                    At the bottom, fixed into position.\n                </div>\n\n            </fuse-vertical-navigation>\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](485, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](486, "Type aliases");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](487, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](488, "            export type FuseVerticalNavigationAppearance =\n                | 'default'\n                | 'compact'\n                | 'dense'\n                | 'futuristic'\n                | 'thin'\n                | string;\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](489, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](490, "            export type FuseVerticalNavigationMode =\n                | 'over'\n                | 'side';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](491, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](492, "            export type FuseVerticalNavigationPosition =\n                | 'left'\n                | 'right';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](493, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](494, "Horizontal navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](495, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](496, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](497, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](498, " Here's the basic usage of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](500, "fuse-horizontal-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](501, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](502, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](503, "            <fuse-horizontal-navigation\n                [name]=\"'topNavigation'\"\n                [navigation]=\"navigationData\">\n            </fuse-horizontal-navigation>\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](504, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](505, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](506, "div", 20)(507, "table")(508, "thead")(509, "tr")(510, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](511, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](512, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](513, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](514, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](515, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](516, "tbody")(517, "tr")(518, "td", 17)(519, "div", 22)(520, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](521, "REQUIRED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](522, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](523, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](524, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](525, "name: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](527, " Unique name of the navigation. Required for navigation and its drawer to work correctly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](529, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](530, "tr")(531, "td", 17)(532, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](533, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](534, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](535, "navigation: FuseNavigationItem[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](536, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](537, " Array of navigation items to build the navigation from. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](538, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](539, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](540, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](541, "Accessing navigation items");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](542, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](543, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](545, "FuseNavigationService");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](546, " provides couple helper methods to access navigation items from the navigation data using their ids. This is especially useful if you want to change something from any item like updating its badge title, hiding or disabling it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](547, "div", 25)(548, "div", 26)(549, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](550, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](551, "mat-tab-group", 27)(552, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](553, NavigationComponent_ng_template_553_Template, 2, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](554, "mat-tab", 30)(555, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](556, "                        <button\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"getNavItem('documentation.changelog', 'mainNavigation');\">\n                            Get the Changelog item (See browser console)\n                        </button>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](557, "mat-tab", 32)(558, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](559, "\n                        /**\n                         * Get navigation item\n                         *\n                         * @param itemId\n                         * @param navigationName\n                         */\n                        getNavItem(itemId, navigationName): FuseNavigationItem | null\n                        {\n                            // Get the component -> navigation data -> item\n                            const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);\n\n                            // Return if the navigation component does not exist\n                            if ( !navComponent )\n                            {\n                                return null;\n                            }\n\n                            // Get the navigation item\n                            const navigation = navComponent.navigation;\n                            const item = this._fuseNavigationService.getItem(itemId, navigation);\n                            console.log(item);\n                            return item;\n                        }\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](560, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](561, "Modifying navigation items");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](562, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](563, " After accessing a navigation item, you can simply modify the object and then call the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](564, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](565, "refresh()");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](566, " method on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](567, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](568, "Navigation component");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](569, " to apply the changes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](570, "div", 25)(571, "div", 26)(572, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](573, "Change badge title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](574, "mat-tab-group", 27)(575, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](576, NavigationComponent_ng_template_576_Template, 2, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](577, "mat-tab", 30)(578, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](579, "                        <button\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"updateBadgeTitle('documentation.changelog', 'mainNavigation', '9.9.99');\">\n                            Update the 'Changelog' badge title\n                        </button>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](580, "mat-tab", 32)(581, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](582, "\n                        /**\n                         * Update badge title\n                         *\n                         * @param itemId\n                         * @param navigationName\n                         * @param title\n                         */\n                        updateBadgeTitle(itemId, navigationName, title): void\n                        {\n                            // Get the component -> navigation data -> item\n                            const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);\n\n                            // Return if the navigation component does not exist\n                            if ( !navComponent )\n                            {\n                                return null;\n                            }\n\n                            // Get the navigation item, update the badge and refresh the component\n                            const navigation = navComponent.navigation;\n                            const item = this._fuseNavigationService.getItem(itemId, navigation);\n                            item.badge.title = title;\n                            navComponent.refresh();\n                        }\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](583, "div", 25)(584, "div", 26)(585, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](586, "Disable/Enable navigation item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](587, "mat-tab-group", 27)(588, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](589, NavigationComponent_ng_template_589_Template, 2, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](590, "mat-tab", 30)(591, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](592, "                        <button\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"toggleDisabled('documentation.changelog', 'mainNavigation');\">\n                            Toggle the disabled status of 'Changelog' item\n                        </button>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](593, "mat-tab", 32)(594, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](595, "\n                        /**\n                         * Toggle disabled status\n                         *\n                         * @param itemId\n                         * @param navigationName\n                         */\n                        toggleDisabled(itemId, navigationName): void\n                        {\n                            // Get the component -> navigation data -> item\n                            const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);\n\n                            // Return if the navigation component does not exist\n                            if ( !navComponent )\n                            {\n                                return null;\n                            }\n\n                            // Get the navigation item, update the badge and refresh the component\n                            const navigation = navComponent.navigation;\n                            const item = this._fuseNavigationService.getItem(itemId, navigation);\n                            item.disabled = !item.disabled;\n                            navComponent.refresh();\n                        }\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](596, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](597, "Swapping entire navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](598, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](599, " Sometimes it's best to use more than one set of data and swap between them to provide correct navigation. An example use case would be user roles. Different roles may require access to different areas and rather than showing/hiding individual navigation items, it's best to swap the entire navigation data to show a personalized navigation for that role. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](600, "div", 25)(601, "div", 26)(602, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](603, "Swap the entire navigation data");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](604, "mat-tab-group", 27)(605, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](606, NavigationComponent_ng_template_606_Template, 4, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](607, "mat-tab", 30)(608, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](609, "                        <button\n                            mat-flat-button\n                            [color]=\"'primary'\"\n                            (click)=\"swapNavigationData('mainNavigation');\">\n                            Swap the entire navigation data\n                        </button>\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](610, "mat-tab", 32)(611, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](612, "\n                        /**\n                         * Swap navigation data\n                         *\n                         * @param navigationName\n                         */\n                        swapNavigationData(navigationName): void\n                        {\n                            // Get the component -> navigation data -> item\n                            const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);\n\n                            // Return if the navigation component does not exist\n                            if ( !navComponent )\n                            {\n                                return null;\n                            }\n\n                            // A navigation data to replace with\n                            const newNavigation: FuseNavigationItem[] = [\n                                {\n                                    id      : 'supported-components',\n                                    title   : 'Supported components',\n                                    subtitle: 'Compatible third party components',\n                                    type    : 'group',\n                                    icon    : 'memory',\n                                    children: [\n                                        {\n                                            id   : 'supported-components.apex-charts',\n                                            title: 'ApexCharts',\n                                            type : 'basic',\n                                            icon : 'insert_chart',\n                                            link : '/supported-components/apex-charts'\n                                        },\n                                        {\n                                            id   : 'supported-components.full-calendar',\n                                            title: 'FullCalendar',\n                                            type : 'basic',\n                                            icon : 'today',\n                                            link : '/supported-components/full-calendar'\n                                        },\n                                        {\n                                            id   : 'supported-components.google-maps',\n                                            title: 'Google Maps',\n                                            type : 'basic',\n                                            icon : 'map',\n                                            link : '/supported-components/google-maps'\n                                        },\n                                        {\n                                            id   : 'supported-components.quill-editor',\n                                            title: 'Quill editor',\n                                            type : 'basic',\n                                            icon : 'font_download',\n                                            link : '/supported-components/quill-editor'\n                                        },\n                                        {\n                                            id   : 'supported-components.youtube-player',\n                                            title: 'Youtube player',\n                                            type : 'basic',\n                                            icon : 'play_circle_filled',\n                                            link : '/supported-components/youtube-player'\n                                        }\n                                    ]\n                                }\n                            ];\n\n                            // Replace the navigation data\n                            navComponent.navigation = newNavigation;\n                            navComponent.refresh();\n                        }\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appearance", "border")("type", "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](500);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animationDuration", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lang", "typescript");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_1__.FuseHighlightComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup],
    encapsulation: 2
  });
}

/***/ }),

/***/ 37442:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/directives/scroll-reset/scroll-reset.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollResetComponent: () => (/* binding */ ScrollResetComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class ScrollResetComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function ScrollResetComponent_Factory(t) {
    return new (t || ScrollResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ScrollResetComponent,
    selectors: [["scroll-reset"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 56,
    vars: 3,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], ["fuse-highlight", "", "lang", "html", 1, "mt-8"]],
    template: function ScrollResetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " ScrollReset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScrollResetComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "fuseScrollReset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " is a helper directive to reset the given element's scroll position to the top on route changes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " This directive is especially useful in situations like having a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " inside a scrollable area such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " or a custom scrollable element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p")(37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "fuseScrollReset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "            import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Here are some of the basic usages of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "fuseScrollReset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "            <mat-drawer-content fuseScrollReset>\n                <router-outlet></router-outlet>\n            </mat-drawer-content>\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "            <div class=\"mail\">\n                <div\n                    class=\"threads\"\n                    fuseScrollReset>\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 20906:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/directives/scrollbar/scrollbar.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollbarComponent: () => (/* binding */ ScrollbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class ScrollbarComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function ScrollbarComponent_Factory(t) {
    return new (t || ScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ScrollbarComponent,
    selectors: [["scrollbar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 166,
    vars: 4,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["href", "https://github.com/mdbootstrap/perfect-scrollbar", "rel", "noreferrer", "target", "_blank"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "py-3", "px-6", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], [1, "whitespace-nowrap"], [1, "bg-card", "rounded", "shadow", "mt-4"], [1, "px-6", "py-3", "font-mono", "text-secondary", "border-b"], [1, "p-6"]],
    template: function ScrollbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Scrollbar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScrollbarComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "fuseScrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " is a wrapper directive for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Perfect Scrollbar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " plugin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Exported as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "fuseScrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "            import { FuseScrollbarModule } from '@fuse/directives/scrollbar';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Here's the basic usage of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "fuseScrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "            <div fuseScrollbar\n                 [fuseScrollbarOptions]=\"{wheelPropagation: false, suppressScrollX: true}\">\n                A very long content to add scrollbars.\n            </div>\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 17)(49, "table")(50, "thead")(51, "tr")(52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "tbody")(59, "tr")(60, "td", 18)(61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "fuseScrollbar: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Whether to enable or disable the custom scrollbars. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "td")(68, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tr")(71, "td", 18)(72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "fuseScrollbarOptions: any");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Perfect Scrollbar options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "td")(79, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " It's possible to access the methods of this directive using a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "@ViewChild");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "@ViewChildren");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "            <!-- Content #1 with custom scrollbar -->\n            <div fuseScrollbar>\n                A very long content to add scrollbars.\n            </div>\n\n            <!-- Content #2 with custom scrollbar -->\n            <div fuseScrollbar>\n                Another long content to add scrollbars.\n            </div>\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "            import { FuseScrollbarDirective } from '@fuse/directives/scrollbar/scrollbar.directive';\n\n            @ViewChildren(FuseScrollbarDirective)\n            private _fuseScrollbarDirectives: QueryList<FuseScrollbarDirective>\n\n            ngAfterViewInit(): void\n            {\n                // Iterate through the directives and update all of them\n                fuseScrollbarDirectives.forEach((fuseScrollbarDirective) => {\n                    fuseScrollbarDirective.update();\n                });\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Here's the list of all available methods: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 20)(98, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " update(): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " Updates the scrollbar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 20)(103, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " destroy(): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " Destroy the custom scrollbar instance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 20)(108, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " geometry(prefix: string = 'scroll'): ScrollbarGeometry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " Returns the geometry of the scrollable element (scrollLeft, scrollTop, scrollHeight, scrollWidth etc.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 20)(113, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " position(absolute: boolean = false): ScrollbarPosition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " Returns the position of the scrollable element (scrollLeft, scrollTop) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 20)(118, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, " scrollTo(x: number, y?: number, speed?: number): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " Scrolls to given position. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 20)(123, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " scrollToX(x: number, speed?: number): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " Scrolls to given position on X axis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 20)(128, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, " scrollToY(y: number, speed?: number): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " Scrolls to given position on Y axis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 20)(133, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, " scrollToTop(offset: number = 0, speed?: number): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, " Scrolls to top. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 20)(138, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, " scrollToBottom(offset: number = 0, speed?: number): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, " Scrolls to bottom. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 20)(143, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, " scrollToLeft(offset: number = 0, speed?: number): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, " Scrolls to left. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 20)(148, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, " scrollToRight(offset: number = 0, speed?: number): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, " Scrolls to right. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 20)(153, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, " scrollToElement(qs: string, offset: number = 0, ignoreVisible: boolean = false, speed?: number): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, " Scrolls to found element based on the given ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "QuerySelector");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, ". If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "ignoreVisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, " then scroll won't be triggered if the element is already inside the current viewport. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("{}");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 52731:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/fuse-components.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseComponentsComponent: () => (/* binding */ FuseComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _fuse_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/navigation */ 71072);
/* harmony import */ var _fuse_directives_scroll_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/directives/scroll-reset */ 98429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);








const _c0 = ["matDrawer"];
class FuseComponentsComponent {
  /**
   * Constructor
   */
  constructor(_fuseMediaWatcherService) {
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.menuData = [{
      id: 'fuse-components.libraries',
      title: 'Libraries',
      type: 'group',
      children: [{
        id: 'fuse-components.libraries.mock-api',
        title: 'MockAPI',
        type: 'basic',
        link: '/ui/fuse-components/libraries/mock-api'
      }]
    }, {
      id: 'fuse-components.components',
      title: 'Components',
      type: 'group',
      children: [{
        id: 'fuse-components.components.alert',
        title: 'Alert',
        type: 'basic',
        link: '/ui/fuse-components/components/alert'
      }, {
        id: 'fuse-components.components.card',
        title: 'Card',
        type: 'basic',
        link: '/ui/fuse-components/components/card'
      }, {
        id: 'fuse-components.components.drawer',
        title: 'Drawer',
        type: 'basic',
        link: '/ui/fuse-components/components/drawer'
      }, {
        id: 'fuse-components.components.fullscreen',
        title: 'Fullscreen',
        type: 'basic',
        link: '/ui/fuse-components/components/fullscreen'
      }, {
        id: 'fuse-components.components.highlight',
        title: 'Highlight',
        type: 'basic',
        link: '/ui/fuse-components/components/highlight'
      }, {
        id: 'fuse-components.components.loading-bar',
        title: 'Loading Bar',
        type: 'basic',
        link: '/ui/fuse-components/components/loading-bar'
      }, {
        id: 'fuse-components.components.masonry',
        title: 'Masonry',
        type: 'basic',
        link: '/ui/fuse-components/components/masonry'
      }, {
        id: 'fuse-components.components.navigation',
        title: 'Navigation',
        type: 'basic',
        link: '/ui/fuse-components/components/navigation'
      }]
    }, {
      id: 'fuse-components.directives',
      title: 'Directives',
      type: 'group',
      children: [{
        id: 'fuse-components.directives.scrollbar',
        title: 'Scrollbar',
        type: 'basic',
        link: '/ui/fuse-components/directives/scrollbar'
      }, {
        id: 'fuse-components.directives.scroll-reset',
        title: 'ScrollReset',
        type: 'basic',
        link: '/ui/fuse-components/directives/scroll-reset'
      }]
    }, {
      id: 'fuse-components.services',
      title: 'Services',
      type: 'group',
      children: [{
        id: 'fuse-components.services.config',
        title: 'Config',
        type: 'basic',
        link: '/ui/fuse-components/services/config'
      }, {
        id: 'fuse-components.services.confirmation',
        title: 'Confirmation',
        type: 'basic',
        link: '/ui/fuse-components/services/confirmation'
      }, {
        id: 'fuse-components.services.splash-screen',
        title: 'SplashScreen',
        type: 'basic',
        link: '/ui/fuse-components/services/splash-screen'
      }, {
        id: 'fuse-components.services.media-watcher',
        title: 'MediaWatcher',
        type: 'basic',
        link: '/ui/fuse-components/services/media-watcher'
      }]
    }, {
      id: 'fuse-components.pipes',
      title: 'Pipes',
      type: 'group',
      children: [{
        id: 'fuse-components.pipes.find-by-key',
        title: 'FindByKey',
        type: 'basic',
        link: '/ui/fuse-components/pipes/find-by-key'
      }]
    }, {
      id: 'fuse-components.validators',
      title: 'Validators',
      type: 'group',
      children: [{
        id: 'fuse-components.validators.must-match',
        title: 'MustMatch',
        type: 'basic',
        link: '/ui/fuse-components/validators/must-match'
      }]
    }];
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Subscribe to media query change
    this._fuseMediaWatcherService.onMediaChange$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(({
      matchingAliases
    }) => {
      // Set the drawerMode and drawerOpened
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
  static #_ = this.ɵfac = function FuseComponentsComponent_Factory(t) {
    return new (t || FuseComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_2__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FuseComponentsComponent,
    selectors: [["fuse-components"]],
    viewQuery: function FuseComponentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.matDrawer = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 8,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full"], [1, "flex", "w-60", "min-w-60", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["matDrawer", ""], [3, "navigation", "inner", "mode", "name", "opened"], ["fuseScrollReset", "", 1, "flex", "flex-col"], [1, "flex-auto"]],
    template: function FuseComponentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "fuse-vertical-navigation", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-drawer-content", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("navigation", ctx.menuData)("inner", true)("mode", "side")("name", "docs-core-features-navigation")("opened", true);
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContent, _fuse_components_navigation__WEBPACK_IMPORTED_MODULE_0__.FuseVerticalNavigationComponent, _fuse_directives_scroll_reset__WEBPACK_IMPORTED_MODULE_1__.FuseScrollResetDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
    styles: ["fuse-components fuse-vertical-navigation .fuse-vertical-navigation-wrapper {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi91aS9mdXNlLWNvbXBvbmVudHMvZnVzZS1jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRO0VBQ0ksMkJBQUE7QUFIWiIsInNvdXJjZXNDb250ZW50IjpbImZ1c2UtY29tcG9uZW50cyB7XG5cbiAgICBmdXNlLXZlcnRpY2FsLW5hdmlnYXRpb24ge1xuXG4gICAgICAgIC5mdXNlLXZlcnRpY2FsLW5hdmlnYXRpb24td3JhcHBlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 48783:
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/fuse-components.routes.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_modules_admin_ui_fuse_components_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/components/alert/alert.component */ 67886);
/* harmony import */ var app_modules_admin_ui_fuse_components_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/components/card/card.component */ 31410);
/* harmony import */ var app_modules_admin_ui_fuse_components_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/components/drawer/drawer.component */ 30007);
/* harmony import */ var app_modules_admin_ui_fuse_components_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/components/fullscreen/fullscreen.component */ 98641);
/* harmony import */ var app_modules_admin_ui_fuse_components_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/components/highlight/highlight.component */ 91607);
/* harmony import */ var app_modules_admin_ui_fuse_components_components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/components/loading-bar/loading-bar.component */ 67347);
/* harmony import */ var app_modules_admin_ui_fuse_components_components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/components/masonry/masonry.component */ 32851);
/* harmony import */ var app_modules_admin_ui_fuse_components_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/components/navigation/navigation.component */ 49911);
/* harmony import */ var app_modules_admin_ui_fuse_components_directives_scroll_reset_scroll_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/directives/scroll-reset/scroll-reset.component */ 37442);
/* harmony import */ var app_modules_admin_ui_fuse_components_directives_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/directives/scrollbar/scrollbar.component */ 20906);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);
/* harmony import */ var app_modules_admin_ui_fuse_components_libraries_mock_api_mock_api_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/libraries/mock-api/mock-api.component */ 37710);
/* harmony import */ var app_modules_admin_ui_fuse_components_pipes_find_by_key_find_by_key_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/pipes/find-by-key/find-by-key.component */ 78839);
/* harmony import */ var app_modules_admin_ui_fuse_components_services_config_config_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/services/config/config.component */ 65485);
/* harmony import */ var app_modules_admin_ui_fuse_components_services_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/services/confirmation/confirmation.component */ 97579);
/* harmony import */ var app_modules_admin_ui_fuse_components_services_media_watcher_media_watcher_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/services/media-watcher/media-watcher.component */ 55625);
/* harmony import */ var app_modules_admin_ui_fuse_components_services_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/services/splash-screen/splash-screen.component */ 38357);
/* harmony import */ var app_modules_admin_ui_fuse_components_validators_must_match_must_match_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/validators/must-match/must-match.component */ 9185);


















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '',
  component: app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_10__.FuseComponentsComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'libraries/mock-api'
  }, {
    path: 'libraries',
    children: [{
      path: 'mock-api',
      component: app_modules_admin_ui_fuse_components_libraries_mock_api_mock_api_component__WEBPACK_IMPORTED_MODULE_11__.MockApiComponent
    }]
  }, {
    path: 'components',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'alert'
    }, {
      path: 'alert',
      component: app_modules_admin_ui_fuse_components_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent
    }, {
      path: 'card',
      component: app_modules_admin_ui_fuse_components_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent
    }, {
      path: 'drawer',
      component: app_modules_admin_ui_fuse_components_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__.DrawerComponent
    }, {
      path: 'fullscreen',
      component: app_modules_admin_ui_fuse_components_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__.FullscreenComponent
    }, {
      path: 'highlight',
      component: app_modules_admin_ui_fuse_components_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_4__.HighlightComponent
    }, {
      path: 'loading-bar',
      component: app_modules_admin_ui_fuse_components_components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_5__.LoadingBarComponent
    }, {
      path: 'masonry',
      component: app_modules_admin_ui_fuse_components_components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_6__.MasonryComponent
    }, {
      path: 'navigation',
      component: app_modules_admin_ui_fuse_components_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__.NavigationComponent
    }]
  }, {
    path: 'directives',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'scrollbar'
    }, {
      path: 'scrollbar',
      component: app_modules_admin_ui_fuse_components_directives_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_9__.ScrollbarComponent
    }, {
      path: 'scroll-reset',
      component: app_modules_admin_ui_fuse_components_directives_scroll_reset_scroll_reset_component__WEBPACK_IMPORTED_MODULE_8__.ScrollResetComponent
    }]
  }, {
    path: 'services',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'config'
    }, {
      path: 'config',
      component: app_modules_admin_ui_fuse_components_services_config_config_component__WEBPACK_IMPORTED_MODULE_13__.ConfigComponent
    }, {
      path: 'confirmation',
      component: app_modules_admin_ui_fuse_components_services_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_14__.ConfirmationComponent
    }, {
      path: 'splash-screen',
      component: app_modules_admin_ui_fuse_components_services_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_16__.SplashScreenComponent
    }, {
      path: 'media-watcher',
      component: app_modules_admin_ui_fuse_components_services_media_watcher_media_watcher_component__WEBPACK_IMPORTED_MODULE_15__.MediaWatcherComponent
    }]
  }, {
    path: 'pipes',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'find-by-key'
    }, {
      path: 'find-by-key',
      component: app_modules_admin_ui_fuse_components_pipes_find_by_key_find_by_key_component__WEBPACK_IMPORTED_MODULE_12__.FindByKeyComponent
    }]
  }, {
    path: 'validators',
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'must-match'
    }, {
      path: 'must-match',
      component: app_modules_admin_ui_fuse_components_validators_must_match_must_match_component__WEBPACK_IMPORTED_MODULE_17__.MustMatchComponent
    }]
  }]
}]);

/***/ }),

/***/ 37710:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/libraries/mock-api/mock-api.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockApiComponent: () => (/* binding */ MockApiComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 98184);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);








class MockApiComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function MockApiComponent_Factory(t) {
    return new (t || MockApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_2__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MockApiComponent,
    selectors: [["mock-api"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 329,
    vars: 9,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], [3, "appearance", "type"], [1, "bg-card", "rounded", "shadow", "mt-4"], [1, "px-6", "py-3", "font-mono", "text-secondary", "border-b"], [1, "p-6"], [1, "bg-card", "rounded", "shadow", "mt-4", "mb-4"], ["href", "https://en.wikipedia.org/wiki/List_of_HTTP_status_codes", "rel", "noreferrer", "target", "_blank"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "p-6", "mt-6", "rounded", "shadow", "font-mono", "text-secondary"]],
    template: function MockApiComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Libraries");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Mock API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MockApiComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " is a helper library developed specifically for Fuse to mock API endpoints and provide data to your app without having to create an actual backend application. This way, you can focus on your frontend app and once you finish with the frontend, you can create your backend application to provide real API endpoints with real data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " This not only makes you progress faster and put together your app very quickly but you will also know exactly what you will be needing from your API. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " While ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " is not suitable for every use case or for every project, there are some cases that using it would make your life easier. These cases are but not limited to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ul")(33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "If you want to focus on the frontend first");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "If you want to create a mockup of your idea to see if it's going to work or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "If you want to create a small side project for yourself or for your colleagues/company");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "If you need to present your idea to your client or to your boss without spending many hours and resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "fuse-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " MockAPI is NOT a database or a backend replacement! It works on memory. As soon as you reload your app, all the changes you have made using Mock API endpoints will go away and replaced with defaults. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "How it works?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p")(46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " module provides an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "HttpInterceptor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " which intercepts all outgoing http requests to return a mock response based on user provided callback functions. While it intercepts all requests, if the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " module cannot find a callback function for the request type and url, it will let the request to pass through. This way, you can use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " along with your real API endpoints. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "FuseMockApiService");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "FuseMockApiService");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " is the core of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " module. This singleton service is used to register API endpoints and callbacks. This is the only thing you will need to mock API endpoints. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " All methods return an instance of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "FuseMockApiHandler");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 15)(76, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " .onGet(url: string, delay?: number): FuseMockApiHandler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " Registers a url for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "GET");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " requests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Delay (milliseconds)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " can be set to delay the response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 15)(87, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " .onPatch(url: string, delay?: number): FuseMockApiHandler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " Registers a url for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "PATCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " requests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Delay (milliseconds)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " can be set to delay the response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 15)(98, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, " .onPost(url: string, delay?: number): FuseMockApiHandler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, " Registers a url for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, " requests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Delay (milliseconds)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, " can be set to delay the response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 15)(109, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " .onPut(url: string, delay?: number): FuseMockApiHandler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, " Registers a url for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "PUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, " requests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Delay (milliseconds)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, " can be set to delay the response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 15)(120, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, " .onDelete(url: string, delay?: number): FuseMockApiHandler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, " Registers a url for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, " requests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Delay (milliseconds)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, " can be set to delay the response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "FuseMockApiHandler");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, " This is the return type of all methods from the service. This class instance is not directly accessible. It can only be accessed through the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "FuseMockApiService");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, " allowing method chaining. It has 2 methods: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 18)(138, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, " .reply(callback: FuseMockApiReplyCallback): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, " .replyCount(count: number): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 17)(143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, " These methods can be used to register the callback function for the request. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, " has an access to the outgoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "HttpRequest");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, " which can be used to access anything from the request such as form data and headers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " You can limit the reply by chaining the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, ".replyCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, " and providing the number of times this request should be handled. After the limit has reached, the request handler will throw an error and won't let the request to pass through. It can be useful for creating one-time-use endpoints to test \"Reset Password\" links or testing an unreachable API endpoints and etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, " The callbacks must return either an array ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "[number, any | string]");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, " or an observable that returns the said array. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, " represents the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "HTTP status code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, " of the response while the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "any | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, " represents the actual response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Basic usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "            this.fuseMockApiService\n                .onPut('api/navigation')\n                .reply(({request: HttpRequest<any>}) => {\n\n                    // Get the body from the request\n                    const body = request.body;\n\n                    // Do something with your data\n\n                    // Return a success code along with some data\n                    return [200, { newNavigation }];\n            })\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "            this.fuseMockApiService\n                .onGet('api/navigation')\n                .reply(() => {\n\n                    // Do something with your data\n\n                    // Return an observable with success code and data\n                    return of(someFunctionToCall()).pipe(map((response) => {\n\n                        // Do some stuff with the response from 'someFunctionToCall()'\n\n                        // Return a success code along with some data\n                        return [200, { newNavigation }];\n                    });\n            });\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "Step by step guide to start using FuseMockApi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, " It's pretty easy and straightforward to setup the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, " module for mocking API endpoints and their responses. Once you understand the underlying mechanic, you will be able to mock API endpoints in no time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "fuse-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, " Please keep in mind that the following step-by-step guide assumes you are doing everything from scratch for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, " like creating directories, adding files, exporting via barrels etc. Majority of these already setup in both Demo and Starter apps for you so it's a bit easier to start working with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "1. Prepare the files");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, " Choose a location to store your mocks. By default the Demo app uses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "src/app/mock-api/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, " directory. You can use the same directory or choose another one. For this guide, we will assume you are going to use the default directory. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "fuse-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, " It's important to keep all mock related files in the same directory because we will create a barrel file that exports all the mock classes and provide that to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "FuseMockApiModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, " so it can register and use them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, " After choosing the location, create a sub-directory relevant to your endpoint and create 2 files in it; one for the mock class and one for the data json: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, " src/app/mock-api/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, " \u00A0\u2514\u2500 navigation/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, " \u00A0\u00A0\u00A0\u00A0\u2514\u2500 data.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, " \u00A0\u00A0\u00A0\u00A0\u2514\u2500 api.ts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "2. Create the class");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, " Edit the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, "api.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, " file and inside create an injectable class. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "FuseMockApi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, " requires one public method called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "registerHandlers()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, " and it must be implemented. It also needs to be called within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "constructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, " of your mock class: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "            import { Injectable } from '@angular/core';\n            import { FuseMockApiService } from '@fuse/lib/mock-api';\n\n            @Injectable({\n                providedIn: 'root'\n            })\n            export class NavigationMockApi\n            {\n                /**\n                 * Constructor\n                 */\n                constructor(private _fuseMockApiService: FuseMockApiService)\n                {\n                    // Register Mock API handlers\n                    this.registerHandlers();\n                }\n\n                /**\n                * Register Mock API handlers\n                */\n                registerHandlers(): void\n                {\n\n                }\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234, "3. Create the data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, " Edit the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "data.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, " file and add your default data as an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](241, "exported const");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, " value. You can have more than one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "const");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, " per file, just remember to export all of them: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](247, "            // An array of navigation items for compact layout\n            export const compactNavigation = [ ]\n\n            // An array of navigation items for default layout\n            export const defaultNavigation = [ ]\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](249, "3. Import the data into the Mock class");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](251, " Return back to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "api.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, " file, import your data and set them as class properties so they can be accessible within the class: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "            import { Injectable } from '@angular/core';\n            import { FuseMockApiService } from '@fuse/lib/mock-api';\n            import { compactNavigation, defaultNavigation } from 'app/mock-api/navigation/data';\n\n            @Injectable({\n                providedIn: 'root'\n            })\n            export class NavigationMockApi\n            {\n                private readonly _compactNavigation: any[];\n                private readonly _defaultNavigation: any[];\n\n                /**\n                 * Constructor\n                 */\n                constructor(private _fuseMockApiService: FuseMockApiService)\n                {\n                    // Set the data\n                    this._compactNavigation = compactNavigation;\n                    this._defaultNavigation = defaultNavigation;\n\n                    // Register Mock API handlers\n                    this.registerHandlers();\n                }\n\n                /**\n                 * Register Mock API handlers\n                 */\n                registerHandlers(): void\n                {\n\n                }\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "4. Register the endpoints and callbacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, " Inside the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "registerHandlers()");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, " method, define your endpoints and callbacks to provide data: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "            import { Injectable } from '@angular/core';\n            import { cloneDeep } 'lodash-es';\n            import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';\n            import { compactNavigation, defaultNavigation } from 'app/mock-api/navigation/data';\n\n            @Injectable({\n                providedIn: 'root'\n            })\n            export class NavigationMockApi\n            {\n                ...\n\n                /**\n                 * Register Mock API handlers\n                 */\n                registerHandlers(): void\n                {\n                    // Navigation - GET\n                    this._fuseMockApiService\n                        .onGet('api/navigation')\n                        .reply(() => {\n\n                        // Clone the data to preserve the originals\n                        const compactNavigation = cloneDeep(this._compactNavigation);\n                        const defaultNavigation = cloneDeep(this._defaultNavigation);\n\n                        // Do some stuff with your data\n\n                        // Return\n                        return [200, {\n                            compact: compactNavigation,\n                            default: defaultNavigation,\n                        }];\n                    })\n\n                    // Navigation - PUT\n                    this._fuseMockApiService\n                        .onPut('api/navigation')\n                        .reply(({request}) => {\n\n                        // Save the new navigation item\n                        const newNavigationItem = cloneDeep(request.body.navigationItem);\n                        newNavigationItem.id = FuseMockApiUtils.guid();\n                        this._defaultNavigation.unshift(newNavigationItem);\n\n                        // Return\n                        return [200, newNavigationItem];\n                    });\n                }\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, "5. Create a barrel file");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, " Navigate back to the root of your mock data directory, by default it's the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](271, "src/app/mock-api/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, " directory, and create an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, "index.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, " file. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, " src/app/mock-api/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](278, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, " \u00A0\u2514\u2500 auth/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](280, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, " \u00A0\u2514\u2500 navigation/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](282, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, " \u00A0\u2514\u2500 user/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](284, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, " \u00A0\u2514\u2500 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, "index.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](288, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, " Edit the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "index.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](293, " file to create a barrel from the services. Only import the services and not the data files, create an array from them and then export that array: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](295, "            import { AuthMockApi } from 'app/mock-api/auth';\n            import { NavigationMockApi } from 'app/mock-api/navigation';\n            import { UserMockApi } from 'app/mock-api/user';\n\n            export const mockApiServices = [\n                AuthMockApi,\n                NavigationMockApi,\n                UserMockApi\n            ];\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297, " After that, head to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "app.config.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](300, " file, provide the array of services you have exported: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](302, "            ...\n            import { provideFuse } from '@fuse';\n            import { mockApiServices } from 'app/mock-api';\n\n            ...\n            provideFuse({\n                mockApi: {\n                    services: mockApiServices,\n                },\n            ...\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](303, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "6. (Optional) Set a global delay");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, " You can also set a global delay (ms) to all of your Mock API endpoints to simulate a slow connection, a server that's under attack or failing, some kind of service interruption and etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, "            ...\n            import { provideFuse } from '@fuse';\n            import { mockApiServices } from 'app/mock-api';\n\n            ...\n            provideFuse({\n                mockApi: {\n                    delay   : 250,\n                    services: mockApiServices,\n                },\n            ...\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](310, "7. Consume the mock API endpoints");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, " Now you can consume your mock API endpoints anywhere from your app using Angular's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "HttpClient");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](315, " and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318, " module will catch the requests. If there is a matching url and a request type, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](321, " will provide the response from the provided callback. If there isn't one, then the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](322, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](323, "MockAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, " will let the request to pass through allowing you to use a real API endpoints along with the mocked ones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "            /**\n             * Get navigation\n             */\n            getNavigation(): Observable<");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](327, "any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, "\n            {\n                return this._httpClient.get<any[]>('api/navigation').pipe(\n                    tap((response: any) => {\n                        this._navigation.next(response);\n                    })\n                );\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "border")("type", "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "border")("type", "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", "border")("type", "info");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_1__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 78839:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/pipes/find-by-key/find-by-key.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FindByKeyComponent: () => (/* binding */ FindByKeyComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class FindByKeyComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function FindByKeyComponent_Factory(t) {
    return new (t || FindByKeyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FindByKeyComponent,
    selectors: [["find-by-key"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 78,
    vars: 7,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"]],
    template: function FindByKeyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " findByKey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FindByKeyComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "fuseFindByKey");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " is a helper pipe that finds entries from an object using given key-source set. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "            import { FuseFindByKeyPipeModule } from '@fuse/pipe/find-by-key';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "            value | fuseFindByKey:key:source\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Consider this array of objects representing the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " data stored on the backend: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "            const tags = [\n                {\n                    id   : 'tag-00',\n                    title: 'Api',\n                    color: 'red'\n                },\n                {\n                    id   : 'tag-01',\n                    title: 'Frontend',\n                    color: 'blue'\n                },\n                {\n                    id   : 'tag-02',\n                    title: 'Bug',\n                    color: 'green'\n                }\n            ];\n\n            const tasks = [\n                {\n                    id   : 'task-00',\n                    title: 'Company internal application v2.0.0',\n                    tags : [\n                        'tag-00',\n                        'tag-01'\n                    ]\n                },\n                {\n                    id   : 'task-01',\n                    title: 'Create the landing/marketing page and host it on the beta channel',\n                    tags : [\n                        'tag-02'\n                    ]\n                },\n                {\n                    id   : 'task-01',\n                    title: 'Move dependency system to Yarn for easier package management',\n                    tags : [\n                        'tag-00',\n                        'tag-01',\n                        'tag-02'\n                    ]\n                }\n            ]\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Normally, you would ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "join");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " these two data together in the backend before sending it to the frontend so you can access tags of a task right from the task itself: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "            const tasksWithTags = [\n                {\n                    id   : 'task-00',\n                    title: 'Company internal application v2.0.0',\n                    tags : [\n                        {\n                            id   : 'tag-00',\n                            title: 'Api',\n                            color: 'red'\n                        },\n                        {\n                            id   : 'tag-01',\n                            title: 'Frontend',\n                            color: 'blue'\n                        }\n                    ]\n                },\n                {\n                    id   : 'task-01',\n                    title: 'Create the landing/marketing page and host it on the beta channel',\n                    tags : [\n                        {\n                            id   : 'tag-02',\n                            title: 'Bug',\n                            color: 'green'\n                        }\n                    ]\n                },\n                {\n                    id   : 'task-01',\n                    title: 'Move dependency system to Yarn for easier package management',\n                    tags : [\n                        {\n                            id   : 'tag-00',\n                            title: 'Api',\n                            color: 'red'\n                        },\n                        {\n                            id   : 'tag-01',\n                            title: 'Frontend',\n                            color: 'blue'\n                        },\n                        {\n                            id   : 'tag-02',\n                            title: 'Bug',\n                            color: 'green'\n                        }\n                    ]\n                }\n            ]\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " But, let's say you cannot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "join");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " them. You have no access to the backend app or you cannot make any changes to it and you have to work with what you have. In this case, you can use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "fuseFindByKey");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " pipe to get the tags of a task without joining the two data using javascript: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " The above code will iterate through the tasks, and for each task, it will also iterate the task's tags. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p")(63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "task.tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " array normally holds the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " of the assigned tags. But using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "fuseFindByKey");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " pipe, we can use those ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " to extract the actual tag object from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " array. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"]("            <!-- Iterate through the tasks -->\n            <ng-container *ngFor=\"let task of tasks\">\n\n                <!-- Iterate through the tags of the task but rather than returning\n                     the tag id, use that id to find the actual tag object from 'tags'\n                     so we can access the properties like title and color of the tag -->\n                <ng-container *ngFor=\"let tag of (task.tags | fuseFindByKey:'id':tags);\">\n                    <div>", "{", "", "{", "tag.title", "}", "", "}", "</div>\n                </ng-container>\n\n            </ng-container>\n        ");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 65485:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/services/config/config.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigComponent: () => (/* binding */ ConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class ConfigComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function ConfigComponent_Factory(t) {
    return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ConfigComponent,
    selectors: [["config"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 82,
    vars: 3,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"]],
    template: function ConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Config ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "FuseConfigService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " is a singleton service to store and access an application wide configuration object. It can be used to store any kind of data and can be accessed from anywhere within your application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "            import { FuseConfigModule } from '@fuse/services/config';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Default configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " By default, the application wide configuration is stored in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "src/app/core/config/app.config.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " file and it includes the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "layout style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " as well as the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "color theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " configurations: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "            import { Layout } from 'app/layout/layout.types';\n\n            // Types\n            export type Scheme = 'auto' | 'dark' | 'light';\n            export type Screens = { [key: string]: string };\n            export type Theme = 'theme-default' | string;\n            export type Themes = { id: string; name: string }[];\n\n            /**\n             * AppConfig interface. Update this interface to strictly type your config\n             * object.\n             */\n            export interface AppConfig\n            {\n                layout: Layout;\n                scheme: Scheme;\n                screens: Screens;\n                theme: Theme;\n                themes: Themes;\n            }\n\n            /**\n             * Default configuration for the entire application. This object is used by\n             * FuseConfigService to set the default configuration.\n             *\n             * If you need to store global configuration for your app, you can use this\n             * object to set the defaults. To access, update and reset the config, use\n             * FuseConfigService and its methods.\n             *\n             * \"Screens\" are carried over to the BreakpointObserver for accessing them within\n             * components, and they are required.\n             *\n             * \"Themes\" are required for Tailwind to generate themes.\n             */\n            export const appConfig: AppConfig = {\n                layout : 'classy',\n                scheme : 'light',\n                screens: {\n                    sm: '600px',\n                    md: '960px',\n                    lg: '1280px',\n                    xl: '1440px'\n                },\n                theme  : 'theme-default',\n                themes : [\n                    {\n                        id  : 'theme-default',\n                        name: 'Default'\n                    },\n                    {\n                        id  : 'theme-brand',\n                        name: 'Brand'\n                    },\n                    {\n                        id  : 'theme-teal',\n                        name: 'Teal'\n                    },\n                    {\n                        id  : 'theme-rose',\n                        name: 'Rose'\n                    },\n                    {\n                        id  : 'theme-purple',\n                        name: 'Purple'\n                    },\n                    {\n                        id  : 'theme-amber',\n                        name: 'Amber'\n                    }\n                ]\n            };\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " The default configuration is supplied to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "FuseConfigService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "FuseConfigModule.forRoot()");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "AppModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "            import { appConfig } from 'app/core/config/app.config';\n\n            ...\n\n            imports: [\n                FuseConfigModule.forRoot(appConfig)\n            ...\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " To set a configuration use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "config");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " setter on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "FuseConfigService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, ". The setter will intelligently merge the configuration by replacing only the given options if they exist while preserving others. If the supplied option does not exist on the configuration, it will be added: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "            import { FuseConfigService } from '@fuse/services/config';\n\n            /**\n             * Constructor\n             */\n            constructor(private _fuseConfigService: FuseConfigService)\n            {\n                this._fuseConfigService.config = {layout: 'classy'};\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " To get the configuration use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "config$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " getter on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "FuseConfigService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " which returns an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " of the configuration object: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "            import { FuseConfigService } from '@fuse/services/config';\n            import { AppConfig } from 'app/core/config/app.config';\n\n            config: AppConfig;\n\n            /**\n             * Constructor\n             */\n            constructor(private _fuseConfigService: FuseConfigService)\n            {\n                this._fuseConfigService.config$\n                    .pipe(takeUntil(this._unsubscribeAll))\n                    .subscribe((config: AppConfig) => {\n                        this.config = config;\n                    }\n            });\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 97579:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/services/confirmation/confirmation.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationComponent: () => (/* binding */ ConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class ConfirmationComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function ConfirmationComponent_Factory(t) {
    return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ConfirmationComponent,
    selectors: [["confirmation"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 180,
    vars: 4,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "py-3", "px-6", "mt-2", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], [1, "bg-card", "rounded", "shadow", "mt-4"], [1, "px-6", "py-3", "font-mono", "text-secondary", "border-b"], [1, "p-6"], ["href", "https://material.angular.io/components/dialog/api#MatDialogRef", "target", "_blank", "rel", "noreferrer"], ["fuse-highlight", "", 3, "lang"]],
    template: function ConfirmationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Confirmation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "FuseConfirmationService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " is a singleton service for creating confirmation and information dialogs. Internally it uses MatDialog to create and show the dialog. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "            import { FuseConfirmationModule } from '@fuse/services/confirmation';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Confirmation Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Here is the interface for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Confirmation configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "            export interface FuseConfirmationConfig\n            {\n                title?: string;\n                message?: string;\n                icon?: {\n                    show?: boolean;\n                    name?: string;\n                    color?:\n                        | 'primary'\n                        | 'accent'\n                        | 'warn'\n                        | 'basic'\n                        | 'info'\n                        | 'success'\n                        | 'warning'\n                        | 'error';\n                };\n                actions?: {\n                    confirm?: {\n                        show?: boolean;\n                        label?: string;\n                        color?:\n                            | 'primary'\n                            | 'accent'\n                            | 'warn';\n                    };\n                    cancel?: {\n                        show?: boolean;\n                        label?: string;\n                    };\n                };\n                dismissible?: boolean;\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 15)(39, "table")(40, "thead")(41, "tr")(42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tbody")(47, "tr")(48, "td", 16)(49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Title of the confirmation dialog, HTML is allowed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "tr")(54, "td", 16)(55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Message of the confirmation dialog, HTML is allowed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "tr")(60, "td", 16)(61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "icon.show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Whether to show the icon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "tr")(66, "td", 16)(67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "icon.name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Name of the icon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr")(72, "td", 16)(73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "icon.color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Color of the icon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "tr")(78, "td", 16)(79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "actions.confirm.show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " Whether to show the confirmation button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "tr")(84, "td", 16)(85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "actions.confirm.label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Label of the confirmation button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "tr")(90, "td", 16)(91, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "actions.confirm.color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Color of the confirmation button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "tr")(96, "td", 16)(97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "actions.cancel.show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, " Whether to show the cancel button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "tr")(102, "td", 16)(103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "actions.confirm.label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " Label of the cancel button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "tr")(108, "td", 16)(109, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "dismissible");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " Sets the dismissible status of the confirmation dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, ", confirmation dialog cannot be closed by clicking on backdrop or pressing Escape key. The close button on the top right corner also won't show up. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 17)(121, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, " open(config: FuseConfirmationConfig): MatDialogRef<FuseConfirmationDialogComponent> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " Opens the confirmation dialog with the given configuration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "MatDialogRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " Since ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "FuseConfirmationService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " uses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "MatDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, " behind the scenes, it returns a reference to the created dialog. You can use all available methods from that reference such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "updateSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "updatePosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, " to further customize the dialog. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, " See ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, " https://material.angular.io/components/dialog/api#MatDialogRef ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, " for the complete list of available methods. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, " Using the reference, you can also access to the user input: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "            // Open the confirmation and save the reference\n            const dialogRef = this._fuseConfirmationService.open({...});\n\n            // Subscribe to afterClosed from the dialog reference\n            dialogRef.afterClosed().subscribe((result) => {\n                console.log(result);\n            });\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 15)(151, "table")(152, "thead")(153, "tr")(154, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "tbody")(159, "tr")(160, "td", 16)(161, "div")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "'confirmed'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, " This is the result if the user pressed the Confirm button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "tr")(167, "td", 16)(168, "div")(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "'cancelled'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, " This is the result if the user pressed the Cancel button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "tr")(174, "td", 16)(175, "div")(176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, " This is the result if the confirmation dismissed either using the close button, clicking on the backdrop or pressing the Escape key. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("lang", "ts");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 55625:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/services/media-watcher/media-watcher.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaWatcherComponent: () => (/* binding */ MediaWatcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class MediaWatcherComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function MediaWatcherComponent_Factory(t) {
    return new (t || MediaWatcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MediaWatcherComponent,
    selectors: [["media-watcher"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 45,
    vars: 3,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"]],
    template: function MediaWatcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Media Watcher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MediaWatcherComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "FuseMediaWatcherService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " is a singleton service to watch media changes. It automatically registers the breakpoints from TailwindCSS configuration, so you can use the service without needing to configure it first. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "            import { FuseMediaWatcherModule } from '@fuse/services/media-watcher';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " To watch changes on registered breakpoints, you can use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "onMediaChange$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " getter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "            import { FuseMediaWatcherService } from '@fuse/services/config';\n\n            /**\n             * Constructor\n             */\n            constructor(private _fuseMediaWatcherService: FuseMediaWatcherService)\n            {\n                // Subscribe to media changes\n                this._fuseMediaWatcherService.onMediaChange$\n                    .pipe(takeUntil(this._unsubscribeAll))\n                    .subscribe(({matchingAliases}) => {\n\n                        // Check if the breakpoint is 'md' and up\n                        this.isScreenSmall = matchingAliases.includes('md');\n                    });\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " You can also listen for custom media queries using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "onMediaQueryChange$(query: string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " method: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "            import { FuseMediaWatcherService } from '@fuse/services/config';\n\n            /**\n             * Constructor\n             */\n            constructor(private _fuseMediaWatcherService: FuseMediaWatcherService)\n            {\n                // Subscribe to media changes\n                this._fuseMediaWatcherService.onMediaQueryChange$('(min-width: 1440px)')\n                    .pipe(takeUntil(this._unsubscribeAll))\n                    .subscribe((state) => {\n\n                        // Calculate the drawer mode\n                        this.drawerMode = state.matches ? 'side' : 'over';\n                    });\n            }\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 38357:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/services/splash-screen/splash-screen.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplashScreenComponent: () => (/* binding */ SplashScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class SplashScreenComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function SplashScreenComponent_Factory(t) {
    return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SplashScreenComponent,
    selectors: [["splash-screen"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 41,
    vars: 3,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "rounded", "shadow", "mt-4"], [1, "px-6", "py-3", "font-mono", "text-secondary", "border-b"], [1, "p-6"]],
    template: function SplashScreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Splash Screen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SplashScreenComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "FuseSplashScreenService");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " is a singleton service to control the splash screen. By default, the splash screen goes away automatically as soon as Angular loads for the first time but, you can still show or hide it using the service afterwards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "            import { FuseSplashScreenModule } from '@fuse/services/splash-screen';\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 15)(32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " show(): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Shows the splash screen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 15)(37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " hide(): void ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Hides the splash screen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9185:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/fuse-components/validators/must-match/must-match.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MustMatchComponent: () => (/* binding */ MustMatchComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/highlight */ 93145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/ui/fuse-components/fuse-components.component */ 52731);







class MustMatchComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    // Toggle the drawer
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static #_ = this.ɵfac = function MustMatchComponent_Factory(t) {
    return new (t || MustMatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_modules_admin_ui_fuse_components_fuse_components_component__WEBPACK_IMPORTED_MODULE_1__.FuseComponentsComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MustMatchComponent,
    selectors: [["must-match"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 82,
    vars: 3,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "flex", "items-center", "ml-1", "whitespace-nowrap"], [1, "icon-size-5", "text-secondary", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "ml-1", "text-secondary"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], ["mat-icon-button", "", 1, "-ml-3", "sm:ml-0", "mb-2", "sm:mb-0", "order-first", "sm:order-last", 3, "click"], [3, "svgIcon"], [1, "flex-auto", "max-w-3xl", "p-6", "sm:p-10", "prose", "prose-sm"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "py-3", "px-6", "mb-4", "rounded", "shadow"], [1, "font-mono", "text-md", "text-secondary"], ["fuse-highlight", "", "lang", "html"]],
    template: function MustMatchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fuse Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " mustMatch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MustMatchComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "mustMatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " validator can be used to check if two different form fields has the same value. For example, a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " should have the same value with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " field. To validate that, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "mustMatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " validator can be used. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "            FuseValidators.mustMatch(controlPath, matchingControlPath)\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 15)(42, "table")(43, "thead")(44, "tr")(45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tbody")(50, "tr")(51, "td", 16)(52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "controlPath: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " A dot-delimited string values that define the path to the control. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr")(57, "td", 16)(58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "matchingControlPath: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " A dot-delimited string values that define the path to the matching control. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Because the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "mustMatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " validator requires parameters, it must be used within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " option of the form builder: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "            import { FuseValidators } from '@fuse/validators';\n\n            // Create the reset password form\n            this.resetPasswordForm = this._formBuilder.group(\n                {\n                    password       : ['', Validators.required],\n                    passwordConfirm: ['', Validators.required]\n                },\n                {\n                    validators: FuseValidators.mustMatch('password', 'passwordConfirm')\n                }\n            );\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " To show an error message on the field, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " element can be used within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "            <mat-error *ngIf=\"resetPasswordForm.get('passwordConfirm').hasError('mustMatch')\">\n                Passwords must match\n            </mat-error>\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_mini:chevron-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_outline:bars-3");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _fuse_components_highlight__WEBPACK_IMPORTED_MODULE_0__.FuseHighlightComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 70549:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/slider.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatSlider: () => (/* binding */ MatSlider),
/* harmony export */   MatSliderChange: () => (/* binding */ MatSliderChange),
/* harmony export */   MatSliderModule: () => (/* binding */ MatSliderModule),
/* harmony export */   MatSliderRangeThumb: () => (/* binding */ MatSliderRangeThumb),
/* harmony export */   MatSliderThumb: () => (/* binding */ MatSliderThumb),
/* harmony export */   MatSliderVisualThumb: () => (/* binding */ MatSliderVisualThumb)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 55998);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 73274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 61699);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 72513);











/**
 * Injection token that can be used for a `MatSlider` to provide itself as a
 * parent to the `MatSliderThumb` and `MatSliderRangeThumb`.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
const _c0 = ["knob"];
const _c1 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4, 5)(2, "div", 6)(3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.valueIndicatorText);
  }
}
const _c2 = ["trackActive"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
  }
  if (rf & 2) {
    const tickMark_r6 = ctx.$implicit;
    const i_r7 = ctx.$index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tickMark_r6 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r5._calcTickMarkTransform(i_r7));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](0, ctx_r4._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx_r1._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-slider-visual-thumb", 6);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
const _c3 = ["*"];
const MAT_SLIDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('_MatSlider');
/**
 * Injection token that can be used to query for a `MatSliderThumb`.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
const MAT_SLIDER_THUMB = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('_MatSliderThumb');
/**
 * Injection token that can be used to query for a `MatSliderRangeThumb`.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
const MAT_SLIDER_RANGE_THUMB = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('_MatSliderRangeThumb');
/**
 * Injection token that can be used to query for a `MatSliderVisualThumb`.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
const MAT_SLIDER_VISUAL_THUMB = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('_MatSliderVisualThumb');
/**
 * A simple change event emitted by the MatSlider component.
 * @deprecated Use event bindings directly on the MatSliderThumbs for `change` and `input` events. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatSliderChange {}

/**
 * The visual slider thumb.
 *
 * Handles the slider thumb ripple states (hover, focus, and active),
 * and displaying the value tooltip on discrete sliders.
 * @docs-private
 */
class MatSliderVisualThumb {
  constructor(_cdr, _ngZone, _elementRef, _slider) {
    this._cdr = _cdr;
    this._ngZone = _ngZone;
    this._slider = _slider;
    /** Whether the slider thumb is currently being hovered. */
    this._isHovered = false;
    /** Whether the slider thumb is currently being pressed. */
    this._isActive = false;
    /** Whether the value indicator tooltip is visible. */
    this._isValueIndicatorVisible = false;
    this._onPointerMove = event => {
      if (this._sliderInput._isFocused) {
        return;
      }
      const rect = this._hostElement.getBoundingClientRect();
      const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
      this._isHovered = isHovered;
      if (isHovered) {
        this._showHoverRipple();
      } else {
        this._hideRipple(this._hoverRippleRef);
      }
    };
    this._onMouseLeave = () => {
      this._isHovered = false;
      this._hideRipple(this._hoverRippleRef);
    };
    this._onFocus = () => {
      // We don't want to show the hover ripple on top of the focus ripple.
      // Happen when the users cursor is over a thumb and then the user tabs to it.
      this._hideRipple(this._hoverRippleRef);
      this._showFocusRipple();
      this._hostElement.classList.add('mdc-slider__thumb--focused');
    };
    this._onBlur = () => {
      // Happens when the user tabs away while still dragging a thumb.
      if (!this._isActive) {
        this._hideRipple(this._focusRippleRef);
      }
      // Happens when the user tabs away from a thumb but their cursor is still over it.
      if (this._isHovered) {
        this._showHoverRipple();
      }
      this._hostElement.classList.remove('mdc-slider__thumb--focused');
    };
    this._onDragStart = event => {
      if (event.button !== 0) {
        return;
      }
      this._isActive = true;
      this._showActiveRipple();
    };
    this._onDragEnd = () => {
      this._isActive = false;
      this._hideRipple(this._activeRippleRef);
      // Happens when the user starts dragging a thumb, tabs away, and then stops dragging.
      if (!this._sliderInput._isFocused) {
        this._hideRipple(this._focusRippleRef);
      }
    };
    this._hostElement = _elementRef.nativeElement;
  }
  ngAfterViewInit() {
    this._ripple.radius = 24;
    this._sliderInput = this._slider._getInput(this.thumbPosition);
    this._sliderInputEl = this._sliderInput._hostElement;
    const input = this._sliderInputEl;
    // These listeners don't update any data bindings so we bind them outside
    // of the NgZone to prevent Angular from needlessly running change detection.
    this._ngZone.runOutsideAngular(() => {
      input.addEventListener('pointermove', this._onPointerMove);
      input.addEventListener('pointerdown', this._onDragStart);
      input.addEventListener('pointerup', this._onDragEnd);
      input.addEventListener('pointerleave', this._onMouseLeave);
      input.addEventListener('focus', this._onFocus);
      input.addEventListener('blur', this._onBlur);
    });
  }
  ngOnDestroy() {
    const input = this._sliderInputEl;
    input.removeEventListener('pointermove', this._onPointerMove);
    input.removeEventListener('pointerdown', this._onDragStart);
    input.removeEventListener('pointerup', this._onDragEnd);
    input.removeEventListener('pointerleave', this._onMouseLeave);
    input.removeEventListener('focus', this._onFocus);
    input.removeEventListener('blur', this._onBlur);
  }
  /** Handles displaying the hover ripple. */
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add('mat-mdc-slider-hover-ripple');
    }
  }
  /** Handles displaying the focus ripple. */
  _showFocusRipple() {
    // Show the focus ripple event if noop animations are enabled.
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add('mat-mdc-slider-focus-ripple');
    }
  }
  /** Handles displaying the active ripple. */
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add('mat-mdc-slider-active-ripple');
    }
  }
  /** Whether the given rippleRef is currently fading in or visible. */
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === 0 /* RippleState.FADING_IN */ || rippleRef?.state === 1 /* RippleState.VISIBLE */;
  }
  /** Manually launches the slider thumb ripple using the specified ripple animation config. */
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === 1 /* _MatThumb.START */ ? 2 /* _MatThumb.END */ : 1 /* _MatThumb.START */);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  /**
   * Fades out the given ripple.
   * Also hides the value indicator if no ripple is showing.
   */
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  /** Shows the value indicator ui. */
  _showValueIndicator() {
    this._hostElement.classList.add('mdc-slider__thumb--with-indicator');
  }
  /** Hides the value indicator ui. */
  _hideValueIndicator() {
    this._hostElement.classList.remove('mdc-slider__thumb--with-indicator');
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === 1 /* _MatThumb.START */ ? 2 /* _MatThumb.END */ : 1 /* _MatThumb.START */);
  }
  /** Gets the value indicator container's native HTML element. */
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  /** Gets the native HTML element of the slider thumb knob. */
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static #_ = this.ɵfac = function MatSliderVisualThumb_Factory(t) {
    return new (t || MatSliderVisualThumb)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SLIDER));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatSliderVisualThumb,
    selectors: [["mat-slider-visual-thumb"]],
    viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._ripple = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._knob = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._valueIndicatorContainer = _t.first);
      }
    },
    hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
    inputs: {
      discrete: "discrete",
      thumbPosition: "thumbPosition",
      valueIndicatorText: "valueIndicatorText"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_SLIDER_VISUAL_THUMB,
      useExisting: MatSliderVisualThumb
    }])],
    decls: 4,
    vars: 2,
    consts: [["class", "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["knob", ""], ["matRipple", "", 1, "mat-mdc-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator-container"], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
    template: function MatSliderVisualThumb_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1, 2)(3, "div", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx.discrete ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", true);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple],
    styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSliderVisualThumb, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-slider-visual-thumb',
      host: {
        'class': 'mdc-slider__thumb mat-mdc-slider-visual-thumb'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      template: "@if (discrete) {\n  <div class=\"mdc-slider__value-indicator-container\" #valueIndicatorContainer>\n    <div class=\"mdc-slider__value-indicator\">\n      <span class=\"mdc-slider__value-indicator-text\">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class=\"mdc-slider__thumb-knob\" #knob></div>\n<div matRipple class=\"mat-mdc-focus-indicator\" [matRippleDisabled]=\"true\"></div>\n",
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_SLIDER]
    }]
  }], {
    discrete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    thumbPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueIndicatorText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple]
    }],
    _knob: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['knob']
    }],
    _valueIndicatorContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['valueIndicatorContainer']
    }]
  });
})();

// TODO(wagnermaciel): maybe handle the following edge case:
// 1. start dragging discrete slider
// 2. tab to disable checkbox
// 3. without ending drag, disable the slider
// Boilerplate for applying mixins to MatSlider.
const _MatSliderMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}), 'primary');
/**
 * Allows users to select from a range of values by moving the slider thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */
class MatSlider extends _MatSliderMixinBase {
  /** Whether the slider is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
    const endInput = this._getInput(2 /* _MatThumb.END */);
    const startInput = this._getInput(1 /* _MatThumb.START */);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
    this._updateValueIndicatorUIs();
  }
  /** Whether the slider displays tick marks along the slider track. */
  get showTickMarks() {
    return this._showTickMarks;
  }
  set showTickMarks(v) {
    this._showTickMarks = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
  }
  /** The minimum value that the slider can have. */
  get min() {
    return this._min;
  }
  set min(v) {
    const min = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(v, this._min);
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(2 /* _MatThumb.END */);
    const startInput = this._getInput(1 /* _MatThumb.START */);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input = this._getInput(2 /* _MatThumb.END */);
    if (input) {
      const oldValue = input.value;
      input.min = min;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The maximum value that the slider can have. */
  get max() {
    return this._max;
  }
  set max(v) {
    const max = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(v, this._max);
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(2 /* _MatThumb.END */);
    const startInput = this._getInput(1 /* _MatThumb.START */);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input = this._getInput(2 /* _MatThumb.END */);
    if (input) {
      const oldValue = input.value;
      input.max = max;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The values at which the thumb will snap. */
  get step() {
    return this._step;
  }
  set step(v) {
    const step = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(v, this._step);
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(2 /* _MatThumb.END */);
    const startInput = this._getInput(1 /* _MatThumb.START */);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input = this._getInput(2 /* _MatThumb.END */);
    if (input) {
      const oldValue = input.value;
      input.step = this._step;
      if (this._platform.SAFARI) {
        input.value = input.value;
      }
      input._updateThumbUIByValue();
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  constructor(_ngZone, _cdr, elementRef, _dir, _globalRippleOptions, animationMode) {
    super(elementRef);
    this._ngZone = _ngZone;
    this._cdr = _cdr;
    this._dir = _dir;
    this._globalRippleOptions = _globalRippleOptions;
    this._disabled = false;
    this._discrete = false;
    this._showTickMarks = false;
    this._min = 0;
    this._max = 100;
    this._step = 1;
    /**
     * Function that will be used to format the value before it is displayed
     * in the thumb label. Can be used to format very large number in order
     * for them to fit into the slider thumb.
     */
    this.displayWith = value => `${value}`;
    this._rippleRadius = 24;
    // The value indicator tooltip text for the visual slider thumb(s).
    /** @docs-private */
    this.startValueIndicatorText = '';
    /** @docs-private */
    this.endValueIndicatorText = '';
    this._isRange = false;
    /** Whether the slider is rtl. */
    this._isRtl = false;
    this._hasViewInitialized = false;
    /**
     * The width of the tick mark track.
     * The tick mark track width is different from full track width
     */
    this._tickMarkTrackWidth = 0;
    this._hasAnimation = false;
    this._resizeTimer = null;
    this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform);
    /** The radius of the native slider's knob. AFAIK there is no way to avoid hardcoding this. */
    this._knobRadius = 8;
    /** Whether or not the slider thumbs overlap. */
    this._thumbsOverlap = false;
    this._noopAnimations = animationMode === 'NoopAnimations';
    this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
    this._isRtl = this._dir.value === 'rtl';
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(2 /* _MatThumb.END */);
    const sInput = this._getInput(1 /* _MatThumb.START */);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(2 /* _MatThumb.END */), this._getInput(1 /* _MatThumb.START */));
    }

    const thumb = this._getThumb(2 /* _MatThumb.END */);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._inputOffset = this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  /** Handles updating the slider ui after a dir change. */
  _onDirChange() {
    this._isRtl = this._dir.value === 'rtl';
    this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
    this._updateTickMarkUI();
  }
  _onDirChangeRange() {
    const endInput = this._getInput(2 /* _MatThumb.END */);
    const startInput = this._getInput(1 /* _MatThumb.START */);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input = this._getInput(2 /* _MatThumb.END */);
    input._updateThumbUIByValue();
  }
  /** Starts observing and updating the slider if the host changes its size. */
  _observeHostResize() {
    if (typeof ResizeObserver === 'undefined' || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  /** Whether any of the thumbs are currently active. */
  _isActive() {
    return this._getThumb(1 /* _MatThumb.START */)._isActive || this._getThumb(2 /* _MatThumb.END */)._isActive;
  }
  _getValue(thumbPosition = 2 /* _MatThumb.END */) {
    const input = this._getInput(thumbPosition);
    if (!input) {
      return this.min;
    }
    return input.value;
  }
  _skipUpdate() {
    return !!(this._getInput(1 /* _MatThumb.START */)?._skipUIUpdate || this._getInput(2 /* _MatThumb.END */)?._skipUIUpdate);
  }
  /** Stores the slider dimensions. */
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  /** Sets the styles for the active portion of the track. */
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  /** Returns the translateX positioning for a tick mark based on it's index. */
  _calcTickMarkTransform(index) {
    // TODO(wagnermaciel): See if we can avoid doing this and just using flex to position these.
    const translateX = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    return `translateX(${translateX}px`;
  }
  // Handlers for updating the slider ui.
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(2 /* _MatThumb.END */);
      const sInput = this._getInput(1 /* _MatThumb.START */);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(2 /* _MatThumb.END */);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  /** Returns true if the slider knobs are overlapping one another. */
  _areThumbsOverlapping() {
    const startInput = this._getInput(1 /* _MatThumb.START */);
    const endInput = this._getInput(2 /* _MatThumb.END */);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  /**
   * Updates the class names of overlapping slider thumbs so
   * that the current active thumb is styled to be on "top".
   */
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove('mdc-slider__thumb--top');
    sourceThumb._hostElement.classList.toggle('mdc-slider__thumb--top', this._thumbsOverlap);
  }
  /** Updates the UI of slider thumbs when they begin or stop overlapping. */
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  // _MatThumb styles update conditions
  //
  // 1. TranslateX, resize, or dir change
  //    - Reason: The thumb styles need to be updated according to the new translateX.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the translateX of the given thumb. */
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === 2 /* _MatThumb.END */ ? 2 /* _MatThumb.END */ : 1 /* _MatThumb.START */);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  // Value indicator text update conditions
  //
  // 1. Value
  //    - Reason: The value displayed needs to be updated.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the value indicator tooltip ui for the given thumb. */
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext = valuetext : source._hostElement.setAttribute('aria-valuetext', valuetext);
    if (this.discrete) {
      source.thumbPosition === 1 /* _MatThumb.START */ ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add('mdc-slider__thumb--short-value') : visualThumb._hostElement.classList.remove('mdc-slider__thumb--short-value');
    }
  }
  /** Updates all value indicator UIs in the slider. */
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(2 /* _MatThumb.END */);
    const sInput = this._getInput(1 /* _MatThumb.START */);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  // Update Tick Mark Track Width
  //
  // 1. Min, max, or step
  //    - Reason: The maximum reachable value may have changed.
  //    - Side note: The maximum reachable value is different from the maximum value set by the
  //      user. For example, a slider with [min: 5, max: 100, step: 10] would have a maximum
  //      reachable value of 95.
  // 2. Resize
  //    - Reason: The position for the maximum reachable value needs to be recalculated.
  /** Updates the width of the tick mark track. */
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = this._cachedWidth * percentage - 6;
  }
  // Track active update conditions
  //
  // 1. TranslateX
  //    - Reason: The track active should line up with the new thumb position.
  // 2. Min or max
  //    - Reason #1: The 'active' percentage needs to be recalculated.
  //    - Reason #2: The value may have silently changed.
  // 3. Step
  //    - Reason: The value may have silently changed causing the thumb(s) to shift.
  // 4. Dir change
  //    - Reason: The track active will need to be updated according to the new thumb position(s).
  // 5. Resize
  //    - Reason: The total width the 'active' tracks translateX is based on has changed.
  /** Updates the scale on the active portion of the track. */
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: 'auto',
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: 'right',
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: 'auto',
        transformOrigin: 'left',
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl ? this._setTrackActiveStyles({
      left: 'auto',
      right: '0px',
      transformOrigin: 'right',
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: '0px',
      right: 'auto',
      transformOrigin: 'left',
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  // Tick mark update conditions
  //
  // 1. Value
  //    - Reason: a tick mark which was once active might now be inactive or vice versa.
  // 2. Min, max, or step
  //    - Reason #1: the number of tick marks may have changed.
  //    - Reason #2: The value may have silently changed.
  /** Updates the dots along the slider track. */
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === undefined || this.min === undefined || this.max === undefined) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
    if (this._isRtl) {
      this._tickMarks.reverse();
    }
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0);
    let numInactive = Math.max(Math.round((this.max - value) / step), 0);
    this._isRtl ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(0 /* _MatTickMark.ACTIVE */).concat(Array(numInactive).fill(1 /* _MatTickMark.INACTIVE */));
  }

  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(1 /* _MatThumb.START */);
    const numInactiveBeforeStartThumb = Math.max(Math.floor((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.floor((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.floor((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(1 /* _MatTickMark.INACTIVE */).concat(Array(numActive).fill(0 /* _MatTickMark.ACTIVE */), Array(numInactiveAfterEndThumb).fill(1 /* _MatTickMark.INACTIVE */));
  }
  /** Gets the slider thumb input of the given thumb position. */
  _getInput(thumbPosition) {
    if (thumbPosition === 2 /* _MatThumb.END */ && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === 1 /* _MatThumb.START */ ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  /** Gets the slider thumb HTML input element of the given thumb position. */
  _getThumb(thumbPosition) {
    return thumbPosition === 2 /* _MatThumb.END */ ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle('mat-mdc-slider-with-animation', this._hasAnimation);
  }
  /** Whether the given pointer event occurred within the bounds of the slider pointer's DOM Rect. */
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static #_ = this.ɵfac = function MatSlider_Factory(t) {
    return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatSlider,
    selectors: [["mat-slider"]],
    contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_SLIDER_THUMB, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._input = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputs = _t);
      }
    },
    viewQuery: function MatSlider_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MAT_SLIDER_VISUAL_THUMB, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._trackActive = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbs = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
    hostVars: 10,
    hostBindings: function MatSlider_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      color: "color",
      disableRipple: "disableRipple",
      disabled: "disabled",
      discrete: "discrete",
      showTickMarks: "showTickMarks",
      min: "min",
      max: "max",
      step: "step",
      displayWith: "displayWith"
    },
    exportAs: ["matSlider"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_SLIDER,
      useExisting: MatSlider
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 5,
    consts: [[1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], ["trackActive", ""], ["class", "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [1, "mdc-slider__tick-marks"], ["tickMarkContainer", ""], [3, "class", "transform"]],
    template: function MatSlider_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatSlider_Conditional_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-slider-visual-thumb", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, ctx.showTickMarks ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](7, ctx._isRange ? 7 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
      }
    },
    dependencies: [MatSliderVisualThumb],
    styles: [".mdc-slider{cursor:pointer;height:48px;margin:0 24px;position:relative;touch-action:pan-y}.mdc-slider .mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%}.mdc-slider .mdc-slider__track--active,.mdc-slider .mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider .mdc-slider__track--active{overflow:hidden}.mdc-slider .mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;-webkit-transform-origin:left;transform-origin:left}[dir=rtl] .mdc-slider .mdc-slider__track--active_fill,.mdc-slider .mdc-slider__track--active_fill[dir=rtl]{-webkit-transform-origin:right;transform-origin:right}.mdc-slider .mdc-slider__track--inactive{left:0;top:0}.mdc-slider .mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider .mdc-slider__value-indicator-container{bottom:44px;left:50%;left:var(--slider-value-indicator-container-left, 50%);pointer-events:none;position:absolute;right:var(--slider-value-indicator-container-right);transform:translateX(-50%);transform:var(--slider-value-indicator-container-transform, translateX(-50%))}.mdc-slider .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);align-items:center;border-radius:4px;display:flex;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom}.mdc-slider .mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:\"\";height:0;left:50%;left:var(--slider-value-indicator-caret-left, 50%);position:absolute;right:var(--slider-value-indicator-caret-right);transform:translateX(-50%);transform:var(--slider-value-indicator-caret-transform, translateX(-50%));width:0}.mdc-slider .mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}@media(prefers-reduced-motion){.mdc-slider .mdc-slider__value-indicator,.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:none}}.mdc-slider .mdc-slider__thumb{display:flex;left:-24px;outline:none;position:absolute;user-select:none;height:48px;width:48px}.mdc-slider .mdc-slider__thumb--top{z-index:1}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-style:solid;border-width:1px;box-sizing:content-box}.mdc-slider .mdc-slider__thumb-knob{box-sizing:border-box;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%)}.mdc-slider .mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:transform 80ms ease}@media(prefers-reduced-motion){.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:none}}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;pointer-events:none;position:absolute;top:2px;width:44px}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;margin-left:8px;margin-right:8px;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider .mdc-slider__thumb-knob{background-color:var(--mdc-slider-handle-color);border-color:var(--mdc-slider-handle-color)}.mat-mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mdc-slider-disabled-handle-color);border-color:var(--mdc-slider-disabled-handle-color)}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider .mdc-slider__thumb::before,.mat-mdc-slider .mdc-slider__thumb::after{background-color:var(--mdc-slider-handle-color)}.mat-mdc-slider .mdc-slider__thumb:hover::before,.mat-mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:var(--mdc-ripple-hover-opacity)}.mat-mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,.mat-mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:var(--mdc-ripple-focus-opacity)}.mat-mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mat-mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:var(--mdc-ripple-press-opacity)}.mat-mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity)}.mat-mdc-slider .mdc-slider__track--active_fill{border-color:var(--mdc-slider-active-track-color)}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mdc-slider-disabled-active-track-color)}.mat-mdc-slider .mdc-slider__track--inactive{background-color:var(--mdc-slider-inactive-track-color);opacity:.24}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mdc-slider-disabled-inactive-track-color);opacity:.24}.mat-mdc-slider .mdc-slider__tick-mark--active{background-color:var(--mdc-slider-with-tick-marks-active-container-color);opacity:var(--mdc-slider-with-tick-marks-active-container-opacity)}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active{background-color:var(--mdc-slider-with-tick-marks-active-container-color);opacity:var(--mdc-slider-with-tick-marks-active-container-opacity)}.mat-mdc-slider .mdc-slider__tick-mark--inactive{background-color:var(--mdc-slider-with-tick-marks-inactive-container-color);opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity)}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive{background-color:var(--mdc-slider-with-tick-marks-disabled-container-color);opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity)}.mat-mdc-slider .mdc-slider__value-indicator{background-color:var(--mdc-slider-label-container-color);opacity:1}.mat-mdc-slider .mdc-slider__value-indicator::before{border-top-color:var(--mdc-slider-label-container-color)}.mat-mdc-slider .mdc-slider__value-indicator{color:var(--mdc-slider-label-label-text-color)}.mat-mdc-slider .mdc-slider__track{height:var(--mdc-slider-inactive-track-height)}.mat-mdc-slider .mdc-slider__track--active{height:var(--mdc-slider-active-track-height);top:calc((var(--mdc-slider-inactive-track-height) - var(--mdc-slider-active-track-height)) / 2)}.mat-mdc-slider .mdc-slider__track--active_fill{border-top-width:var(--mdc-slider-active-track-height)}.mat-mdc-slider .mdc-slider__track--inactive{height:var(--mdc-slider-inactive-track-height)}.mat-mdc-slider .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-mark--inactive{height:var(--mdc-slider-with-tick-marks-container-size);width:var(--mdc-slider-with-tick-marks-container-size)}.mat-mdc-slider.mdc-slider--disabled{opacity:0.38}.mat-mdc-slider .mdc-slider__value-indicator-text{letter-spacing:var(--mdc-slider-label-label-text-tracking);font-size:var(--mdc-slider-label-label-text-size);font-family:var(--mdc-slider-label-label-text-font);font-weight:var(--mdc-slider-label-label-text-weight);line-height:var(--mdc-slider-label-label-text-line-height)}.mat-mdc-slider .mdc-slider__track--active{border-radius:var(--mdc-slider-active-track-shape)}.mat-mdc-slider .mdc-slider__track--inactive{border-radius:var(--mdc-slider-inactive-track-shape)}.mat-mdc-slider .mdc-slider__thumb-knob{border-radius:var(--mdc-slider-handle-shape);width:var(--mdc-slider-handle-width);height:var(--mdc-slider-handle-height);border-style:solid;border-width:calc(var(--mdc-slider-handle-height) / 2) calc(var(--mdc-slider-handle-width) / 2)}.mat-mdc-slider .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-mark--inactive{border-radius:var(--mdc-slider-with-tick-marks-container-shape)}.mat-mdc-slider .mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mdc-slider-hover-handle-color);border-color:var(--mdc-slider-hover-handle-color)}.mat-mdc-slider .mdc-slider__thumb:hover .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb:hover .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb:hover .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider .mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mdc-slider-focus-handle-color);border-color:var(--mdc-slider-focus-handle-color)}.mat-mdc-slider .mdc-slider__thumb--focused .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--focused .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--focused .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider .mdc-slider__thumb:not(:disabled):active .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb:not(:disabled):active .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb:not(:disabled):active .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:var(--mdc-slider-with-overlap-handle-outline-color);border-width:var(--mdc-slider-with-overlap-handle-outline-width)}.mat-mdc-slider .mdc-slider__thumb-knob{box-shadow:var(--mdc-slider-handle-elevation)}.mat-mdc-slider .mdc-slider__input{box-sizing:content-box;pointer-events:auto}.mat-mdc-slider .mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mat-mdc-slider .mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mdc-slider__track,.mat-mdc-slider .mdc-slider__thumb{pointer-events:none}.mat-mdc-slider .mdc-slider__value-indicator{opacity:var(--mat-slider-value-indicator-opacity)}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-mdc-slider-ripple-color, transparent)}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-mdc-slider-hover-ripple-color, transparent)}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-mdc-slider-focus-ripple-color, transparent)}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slider .mdc-slider__value-indicator{word-break:normal}.mdc-slider__thumb--focused .mat-mdc-focus-indicator::before{content:\"\"}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-slider',
      host: {
        'class': 'mat-mdc-slider mdc-slider',
        '[class.mdc-slider--range]': '_isRange',
        '[class.mdc-slider--disabled]': 'disabled',
        '[class.mdc-slider--discrete]': 'discrete',
        '[class.mdc-slider--tick-marks]': 'showTickMarks',
        '[class._mat-animation-noopable]': '_noopAnimations'
      },
      exportAs: 'matSlider',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      inputs: ['color', 'disableRipple'],
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      template: "<!-- Inputs -->\n<ng-content></ng-content>\n\n<!-- Track -->\n<div class=\"mdc-slider__track\">\n  <div class=\"mdc-slider__track--inactive\"></div>\n  <div class=\"mdc-slider__track--active\">\n    <div #trackActive class=\"mdc-slider__track--active_fill\"></div>\n  </div>\n  @if (showTickMarks) {\n    <div class=\"mdc-slider__tick-marks\" #tickMarkContainer>\n      @if (_cachedWidth) {\n        @for (tickMark of _tickMarks; track tickMark; let i = $index) {\n          <div\n            [class]=\"tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'\"\n            [style.transform]=\"_calcTickMarkTransform(i)\"></div>\n        }\n      }\n    </div>\n  }\n</div>\n\n<!-- Thumbs -->\n@if (_isRange) {\n  <mat-slider-visual-thumb\n    [discrete]=\"discrete\"\n    [thumbPosition]=\"1\"\n    [valueIndicatorText]=\"startValueIndicatorText\">\n  </mat-slider-visual-thumb>\n}\n\n<mat-slider-visual-thumb\n  [discrete]=\"discrete\"\n  [thumbPosition]=\"2\"\n  [valueIndicatorText]=\"endValueIndicatorText\">\n</mat-slider-visual-thumb>\n",
      styles: [".mdc-slider{cursor:pointer;height:48px;margin:0 24px;position:relative;touch-action:pan-y}.mdc-slider .mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%}.mdc-slider .mdc-slider__track--active,.mdc-slider .mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider .mdc-slider__track--active{overflow:hidden}.mdc-slider .mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;-webkit-transform-origin:left;transform-origin:left}[dir=rtl] .mdc-slider .mdc-slider__track--active_fill,.mdc-slider .mdc-slider__track--active_fill[dir=rtl]{-webkit-transform-origin:right;transform-origin:right}.mdc-slider .mdc-slider__track--inactive{left:0;top:0}.mdc-slider .mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider .mdc-slider__value-indicator-container{bottom:44px;left:50%;left:var(--slider-value-indicator-container-left, 50%);pointer-events:none;position:absolute;right:var(--slider-value-indicator-container-right);transform:translateX(-50%);transform:var(--slider-value-indicator-container-transform, translateX(-50%))}.mdc-slider .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);align-items:center;border-radius:4px;display:flex;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom}.mdc-slider .mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:\"\";height:0;left:50%;left:var(--slider-value-indicator-caret-left, 50%);position:absolute;right:var(--slider-value-indicator-caret-right);transform:translateX(-50%);transform:var(--slider-value-indicator-caret-transform, translateX(-50%));width:0}.mdc-slider .mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}@media(prefers-reduced-motion){.mdc-slider .mdc-slider__value-indicator,.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:none}}.mdc-slider .mdc-slider__thumb{display:flex;left:-24px;outline:none;position:absolute;user-select:none;height:48px;width:48px}.mdc-slider .mdc-slider__thumb--top{z-index:1}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-style:solid;border-width:1px;box-sizing:content-box}.mdc-slider .mdc-slider__thumb-knob{box-sizing:border-box;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%)}.mdc-slider .mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:transform 80ms ease}@media(prefers-reduced-motion){.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:none}}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;pointer-events:none;position:absolute;top:2px;width:44px}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;margin-left:8px;margin-right:8px;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider .mdc-slider__thumb-knob{background-color:var(--mdc-slider-handle-color);border-color:var(--mdc-slider-handle-color)}.mat-mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mdc-slider-disabled-handle-color);border-color:var(--mdc-slider-disabled-handle-color)}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider .mdc-slider__thumb::before,.mat-mdc-slider .mdc-slider__thumb::after{background-color:var(--mdc-slider-handle-color)}.mat-mdc-slider .mdc-slider__thumb:hover::before,.mat-mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:var(--mdc-ripple-hover-opacity)}.mat-mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,.mat-mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:var(--mdc-ripple-focus-opacity)}.mat-mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mat-mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:var(--mdc-ripple-press-opacity)}.mat-mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity)}.mat-mdc-slider .mdc-slider__track--active_fill{border-color:var(--mdc-slider-active-track-color)}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mdc-slider-disabled-active-track-color)}.mat-mdc-slider .mdc-slider__track--inactive{background-color:var(--mdc-slider-inactive-track-color);opacity:.24}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mdc-slider-disabled-inactive-track-color);opacity:.24}.mat-mdc-slider .mdc-slider__tick-mark--active{background-color:var(--mdc-slider-with-tick-marks-active-container-color);opacity:var(--mdc-slider-with-tick-marks-active-container-opacity)}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active{background-color:var(--mdc-slider-with-tick-marks-active-container-color);opacity:var(--mdc-slider-with-tick-marks-active-container-opacity)}.mat-mdc-slider .mdc-slider__tick-mark--inactive{background-color:var(--mdc-slider-with-tick-marks-inactive-container-color);opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity)}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive{background-color:var(--mdc-slider-with-tick-marks-disabled-container-color);opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity)}.mat-mdc-slider .mdc-slider__value-indicator{background-color:var(--mdc-slider-label-container-color);opacity:1}.mat-mdc-slider .mdc-slider__value-indicator::before{border-top-color:var(--mdc-slider-label-container-color)}.mat-mdc-slider .mdc-slider__value-indicator{color:var(--mdc-slider-label-label-text-color)}.mat-mdc-slider .mdc-slider__track{height:var(--mdc-slider-inactive-track-height)}.mat-mdc-slider .mdc-slider__track--active{height:var(--mdc-slider-active-track-height);top:calc((var(--mdc-slider-inactive-track-height) - var(--mdc-slider-active-track-height)) / 2)}.mat-mdc-slider .mdc-slider__track--active_fill{border-top-width:var(--mdc-slider-active-track-height)}.mat-mdc-slider .mdc-slider__track--inactive{height:var(--mdc-slider-inactive-track-height)}.mat-mdc-slider .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-mark--inactive{height:var(--mdc-slider-with-tick-marks-container-size);width:var(--mdc-slider-with-tick-marks-container-size)}.mat-mdc-slider.mdc-slider--disabled{opacity:0.38}.mat-mdc-slider .mdc-slider__value-indicator-text{letter-spacing:var(--mdc-slider-label-label-text-tracking);font-size:var(--mdc-slider-label-label-text-size);font-family:var(--mdc-slider-label-label-text-font);font-weight:var(--mdc-slider-label-label-text-weight);line-height:var(--mdc-slider-label-label-text-line-height)}.mat-mdc-slider .mdc-slider__track--active{border-radius:var(--mdc-slider-active-track-shape)}.mat-mdc-slider .mdc-slider__track--inactive{border-radius:var(--mdc-slider-inactive-track-shape)}.mat-mdc-slider .mdc-slider__thumb-knob{border-radius:var(--mdc-slider-handle-shape);width:var(--mdc-slider-handle-width);height:var(--mdc-slider-handle-height);border-style:solid;border-width:calc(var(--mdc-slider-handle-height) / 2) calc(var(--mdc-slider-handle-width) / 2)}.mat-mdc-slider .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-mark--inactive{border-radius:var(--mdc-slider-with-tick-marks-container-shape)}.mat-mdc-slider .mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mdc-slider-hover-handle-color);border-color:var(--mdc-slider-hover-handle-color)}.mat-mdc-slider .mdc-slider__thumb:hover .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb:hover .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb:hover .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider .mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mdc-slider-focus-handle-color);border-color:var(--mdc-slider-focus-handle-color)}.mat-mdc-slider .mdc-slider__thumb--focused .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--focused .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--focused .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider .mdc-slider__thumb:not(:disabled):active .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb:not(:disabled):active .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb:not(:disabled):active .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mat-mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mat-mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:var(--mdc-slider-with-overlap-handle-outline-color);border-width:var(--mdc-slider-with-overlap-handle-outline-width)}.mat-mdc-slider .mdc-slider__thumb-knob{box-shadow:var(--mdc-slider-handle-elevation)}.mat-mdc-slider .mdc-slider__input{box-sizing:content-box;pointer-events:auto}.mat-mdc-slider .mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mat-mdc-slider .mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mdc-slider__track,.mat-mdc-slider .mdc-slider__thumb{pointer-events:none}.mat-mdc-slider .mdc-slider__value-indicator{opacity:var(--mat-slider-value-indicator-opacity)}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-mdc-slider-ripple-color, transparent)}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-mdc-slider-hover-ripple-color, transparent)}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-mdc-slider-focus-ripple-color, transparent)}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slider .mdc-slider__value-indicator{word-break:normal}.mdc-slider__thumb--focused .mat-mdc-focus-indicator::before{content:\"\"}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    _trackActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['trackActive']
    }],
    _thumbs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    discrete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTickMarks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/** Ensures that there is not an invalid configuration for the slider thumb inputs. */
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute('matSliderStartThumb');
  const endValid = endInputElement._hostElement.hasAttribute(isRange ? 'matSliderEndThumb' : 'matSliderThumb');
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}

/**
 * Provider that allows the slider thumb to register as a ControlValueAccessor.
 * @docs-private
 */
const MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSliderThumb),
  multi: true
};
/**
 * Provider that allows the range slider thumb to register as a ControlValueAccessor.
 * @docs-private
 */
const MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSliderRangeThumb),
  multi: true
};
/**
 * Directive that adds slider-specific behaviors to an input element inside `<mat-slider>`.
 * Up to two may be placed inside of a `<mat-slider>`.
 *
 * If one is used, the selector `matSliderThumb` must be used, and the outcome will be a normal
 * slider. If two are used, the selectors `matSliderStartThumb` and `matSliderEndThumb` must be
 * used, and the outcome will be a range slider with two slider thumbs.
 */
class MatSliderThumb {
  get value() {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(this._hostElement.value);
  }
  set value(v) {
    const val = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(v).toString();
    if (!this._hasSetInitialValue) {
      this._initialValue = val;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._hostElement.value = val;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  /**
   * The current translateX in px of the slider visual thumb.
   * @docs-private
   */
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = 0;
      return this._translateX;
    }
    if (this._translateX === undefined) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  /** @docs-private */
  get min() {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(this._hostElement.min);
  }
  set min(v) {
    this._hostElement.min = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(v).toString();
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get max() {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(this._hostElement.max);
  }
  set max(v) {
    this._hostElement.max = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(v).toString();
    this._cdr.detectChanges();
  }
  get step() {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(this._hostElement.step);
  }
  set step(v) {
    this._hostElement.step = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(v).toString();
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get disabled() {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  /** The percentage of the slider that coincides with the value. */
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  /** @docs-private */
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  /** Used to relay updates to _isFocused to the slider visual thumbs. */
  _setIsFocused(v) {
    this._isFocused = v;
  }
  constructor(_ngZone, _elementRef, _cdr, _slider) {
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._cdr = _cdr;
    this._slider = _slider;
    /** Event emitted when the `value` is changed. */
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the slider thumb starts being dragged. */
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the slider thumb stops being dragged. */
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Indicates whether this thumb is the start or end thumb.
     * @docs-private
     */
    this.thumbPosition = 2 /* _MatThumb.END */;
    /** The radius of a native html slider's knob. */
    this._knobRadius = 8;
    /** Whether user's cursor is currently in a mouse down state on the input. */
    this._isActive = false;
    /** Whether the input is currently focused (either by tab or after clicking). */
    this._isFocused = false;
    /**
     * Whether the initial value has been set.
     * This exists because the initial value cannot be immediately set because the min and max
     * must first be relayed from the parent MatSlider component, which can only happen later
     * in the component lifecycle.
     */
    this._hasSetInitialValue = false;
    /** Emits when the component is destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /**
     * Indicates whether UI updates should be skipped.
     *
     * This flag is used to avoid flickering
     * when correcting values on pointer up/down.
     */
    this._skipUIUpdate = false;
    /** Callback called when the slider input has been touched. */
    this._onTouchedFn = () => {};
    /**
     * Whether the NgModel has been initialized.
     *
     * This flag is used to ignore ghost null calls to
     * writeValue which can break slider initialization.
     *
     * See https://github.com/angular/angular/issues/14988.
     */
    this._isControlInitialized = false;
    this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform);
    this._hostElement = _elementRef.nativeElement;
    this._ngZone.runOutsideAngular(() => {
      this._hostElement.addEventListener('pointerdown', this._onPointerDown.bind(this));
      this._hostElement.addEventListener('pointermove', this._onPointerMove.bind(this));
      this._hostElement.addEventListener('pointerup', this._onPointerUp.bind(this));
    });
  }
  ngOnDestroy() {
    this._hostElement.removeEventListener('pointerdown', this._onPointerDown);
    this._hostElement.removeEventListener('pointermove', this._onPointerMove);
    this._hostElement.removeEventListener('pointerup', this._onPointerUp);
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  /** @docs-private */
  initProps() {
    this._updateWidthInactive();
    // If this or the parent slider is disabled, just make everything disabled.
    if (this.disabled !== this._slider.disabled) {
      // The MatSlider setter for disabled will relay this and disable both inputs.
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  /** @docs-private */
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === undefined) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    // only used to handle the edge case where user
    // mousedown on the slider then uses arrow keys.
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    // handles arrowing and updating the value when
    // a step is defined.
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    // only used to handle when the value change
    // originates outside of the slider.
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    // On IOS, dragging only works if the pointer down happens on the
    // slider thumb and the slider does not receive focus from pointer events.
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    // Does nothing if a step is defined because we
    // want the value to snap to the values on input.
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  /**
   * Corrects the value of the slider on pointer up/down.
   *
   * Called on pointer down and up because the value is set based
   * on the inactive width instead of the active width.
   */
  _handleValueCorrection(event) {
    // Don't update the UI with the current value! The value on pointerdown
    // and pointerup is calculated in the split second before the input(s)
    // resize. See _updateWidthInactive() and _updateWidthActive() for more
    // details.
    this._skipUIUpdate = true;
    // Note that this function gets triggered before the actual value of the
    // slider is updated. This means if we were to set the value here, it
    // would immediately be overwritten. Using setTimeout ensures the setting
    // of the value happens after the value has been updated by the
    // pointerdown event.
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  /** Corrects the value of the slider based on the pointer event's position. */
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;
    // To ensure the percentage is rounded to the necessary number of decimals.
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      // Because we prevented UI updates, if it turns out that the race
      // condition didn't happen and the value is already correct, we
      // have to apply the ui updates now.
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    // Again, does nothing if a step is defined because
    // we want the value to snap to the values on input.
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      // This setTimeout is to prevent the pointerup from triggering a value
      // change on the input based on the inactive width. It's not clear why
      // but for some reason on IOS this race condition is even more common so
      // the timeout needs to be increased.
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    return Math.max(Math.min(v, this._slider._cachedWidth), 0);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl) {
      return (1 - this.percentage) * this._slider._cachedWidth;
    }
    return this.percentage * this._slider._cachedWidth;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  /**
   * Used to set the slider width to the correct
   * dimensions while the user is dragging.
   */
  _updateWidthActive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding}px)`;
  }
  /**
   * Sets the slider input to disproportionate dimensions to allow for touch
   * events to be captured on touch devices.
   */
  _updateWidthInactive() {
    this._hostElement.style.padding = '0px';
    this._hostElement.style.width = 'calc(100% + 48px)';
    this._hostElement.style.left = '-24px';
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  /**
   * Registers a callback to be invoked when the input's value changes from user input.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  /**
   * Registers a callback to be invoked when the input is blurred by the user.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  /**
   * Sets the disabled state of the slider.
   * @param isDisabled The new disabled state
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static #_ = this.ɵfac = function MatSliderThumb_Factory(t) {
    return new (t || MatSliderThumb)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SLIDER));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatSliderThumb,
    selectors: [["input", "matSliderThumb", ""]],
    hostAttrs: ["type", "range", 1, "mdc-slider__input"],
    hostVars: 1,
    hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatSliderThumb_change_HostBindingHandler() {
          return ctx._onChange();
        })("input", function MatSliderThumb_input_HostBindingHandler() {
          return ctx._onInput();
        })("blur", function MatSliderThumb_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("focus", function MatSliderThumb_focus_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx._valuetext);
      }
    },
    inputs: {
      value: "value"
    },
    outputs: {
      valueChange: "valueChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd"
    },
    exportAs: ["matSliderThumb"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_THUMB,
      useExisting: MatSliderThumb
    }])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSliderThumb, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[matSliderThumb]',
      exportAs: 'matSliderThumb',
      host: {
        'class': 'mdc-slider__input',
        'type': 'range',
        '[attr.aria-valuetext]': '_valuetext',
        '(change)': '_onChange()',
        '(input)': '_onInput()',
        // TODO(wagnermaciel): Consider using a global event listener instead.
        // Reason: I have found a semi-consistent way to mouse up without triggering this event.
        '(blur)': '_onBlur()',
        '(focus)': '_onFocus()'
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_SLIDER]
    }]
  }], {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class MatSliderRangeThumb extends MatSliderThumb {
  /** @docs-private */
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? 1 /* _MatThumb.START */ : 2 /* _MatThumb.END */);
    }

    return this._sibling;
  }
  /**
   * Returns the minimum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return 0;
  }
  /**
   * Returns the maximum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl || !this._isEndThumb && !this._slider._isRtl;
  }
  constructor(_ngZone, _slider, _elementRef, _cdr) {
    super(_ngZone, _elementRef, _cdr, _slider);
    this._cdr = _cdr;
    this._isEndThumb = this._hostElement.hasAttribute('matSliderEndThumb');
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? 2 /* _MatThumb.END */ : 1 /* _MatThumb.START */;
  }

  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add('mat-mdc-slider-input-no-pointer-events');
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove('mat-mdc-slider-input-no-pointer-events');
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    // Extend the native input width by the radius of the ripple
    let ripplePadding = this._slider._rippleRadius;
    // If one of the inputs is maximally sized (the value of both thumbs is
    // equal to the min or max), make that input take up all of the width and
    // make the other unselectable.
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = '0px';
    if (this._isLeftThumb) {
      this._hostElement.style.left = '-24px';
      this._hostElement.style.right = 'auto';
    } else {
      this._hostElement.style.left = 'auto';
      this._hostElement.style.right = '-24px';
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle('mat-slider__right-input', !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  static #_ = this.ɵfac = function MatSliderRangeThumb_Factory(t) {
    return new (t || MatSliderRangeThumb)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SLIDER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatSliderRangeThumb,
    selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
    exportAs: ["matSliderRangeThumb"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_RANGE_THUMB,
      useExisting: MatSliderRangeThumb
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSliderRangeThumb, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[matSliderStartThumb], input[matSliderEndThumb]',
      exportAs: 'matSliderRangeThumb',
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_SLIDER]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], null);
})();
class MatSliderModule {
  static #_ = this.ɵfac = function MatSliderModule_Factory(t) {
    return new (t || MatSliderModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatSliderModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSliderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb],
      declarations: [MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_ui_fuse-components_fuse-components_routes_ts.js.map