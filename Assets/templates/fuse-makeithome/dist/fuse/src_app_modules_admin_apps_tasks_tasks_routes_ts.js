"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_admin_apps_tasks_tasks_routes_ts"],{

/***/ 63471:
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/apps/tasks/details/details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksDetailsComponent: () => (/* binding */ TasksDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/portal */ 83517);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/text-field */ 5802);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _fuse_pipes_find_by_key_find_by_key_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/pipes/find-by-key/find-by-key.pipe */ 91011);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 12903);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ 17765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 74520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/confirmation */ 75012);
/* harmony import */ var app_modules_admin_apps_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/apps/tasks/list/list.component */ 69815);
/* harmony import */ var app_modules_admin_apps_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/admin/apps/tasks/tasks.service */ 33894);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ 72698);



































const _c0 = ["tagsPanelOrigin"];
const _c1 = ["tagsPanel"];
const _c2 = ["titleField"];
function TasksDetailsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "MARK AS COMPLETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:check-circle");
  }
}
function TasksDetailsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "MARK AS INCOMPLETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:check-circle");
  }
}
function TasksDetailsComponent_ng_container_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 43)(2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tag_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r18.title);
  }
}
function TasksDetailsComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TasksDetailsComponent_ng_container_28_ng_container_1_Template, 4, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "fuseFindByKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 2, ctx_r4.task.tags, "id", ctx_r4.tags))("ngForTrackBy", ctx_r4.trackByFn);
  }
}
function TasksDetailsComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:pencil-square");
  }
}
function TasksDetailsComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:plus-circle");
  }
}
function TasksDetailsComponent_ng_template_33_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 45);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:pencil-square");
  }
}
function TasksDetailsComponent_ng_template_33_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 45);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:check");
  }
}
function TasksDetailsComponent_ng_template_33_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_ng_template_33_ng_container_11_ng_container_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const tag_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.toggleTaskTag(tag_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-checkbox", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tag_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r25.task.tags.includes(tag_r26.id))("color", "primary")("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r26.title);
  }
}
function TasksDetailsComponent_ng_template_33_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TasksDetailsComponent_ng_template_33_ng_container_11_ng_container_1_Template, 5, 4, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r22.filteredTags)("ngForTrackBy", ctx_r22.trackByFn);
  }
}
function TasksDetailsComponent_ng_template_33_ng_container_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5)(2, "mat-form-field", 60)(3, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function TasksDetailsComponent_ng_template_33_ng_container_12_ng_container_2_Template_input_input_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const tag_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.updateTagTitle(tag_r30, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_ng_template_33_ng_container_12_ng_container_2_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const tag_r30 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.deleteTag(tag_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tag_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("subscriptSizing", "dynamic");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tag_r30.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:trash");
  }
}
function TasksDetailsComponent_ng_template_33_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TasksDetailsComponent_ng_template_33_ng_container_12_ng_container_2_Template, 6, 3, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r23.filteredTags)("ngForTrackBy", ctx_r23.trackByFn);
  }
}
function TasksDetailsComponent_ng_template_33_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_ng_template_33_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r34.createTag(_r19.value);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r19.value = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Create \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:plus-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_r19.value);
  }
}
function TasksDetailsComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 49)(5, "input", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function TasksDetailsComponent_ng_template_33_Template_input_input_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.filterTags($event));
    })("keydown", function TasksDetailsComponent_ng_template_33_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r38.filterTagsInputKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_ng_template_33_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.toggleTagsEditMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TasksDetailsComponent_ng_template_33_mat_icon_8_Template, 1, 1, "mat-icon", 53)(9, TasksDetailsComponent_ng_template_33_mat_icon_9_Template, 1, 1, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TasksDetailsComponent_ng_template_33_ng_container_11_Template, 2, 2, "ng-container", 4)(12, TasksDetailsComponent_ng_template_33_ng_container_12_Template, 3, 2, "ng-container", 4)(13, TasksDetailsComponent_ng_template_33_div_13_Template, 7, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:magnifying-glass");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxLength", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r8.tagsEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.tagsEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r8.tagsEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.tagsEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.shouldShowCreateTagButton(_r19.value));
  }
}
function TasksDetailsComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_mini:arrow-long-down");
  }
}
function TasksDetailsComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:minus");
  }
}
function TasksDetailsComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_mini:arrow-long-up");
  }
}
function TasksDetailsComponent_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r14.task.dueDate, "longDate"));
  }
}
function TasksDetailsComponent_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Not set");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
const _c3 = () => ["../"];
const _c4 = (a0, a1, a2) => ({
  "text-green-800 bg-green-200 dark:text-green-100 dark:bg-green-500": a0,
  "text-gray-800 bg-gray-200 dark:text-gray-100 dark:bg-gray-500": a1,
  "text-red-800 bg-red-200 dark:text-red-100 dark:bg-red-500": a2
});
const _c5 = a0 => ({
  "bg-hover": a0
});
const _c6 = (a0, a1, a2) => ({
  "text-gray-500 bg-gray-100 dark:text-gray-300 dark:bg-gray-700": a0,
  "text-green-800 bg-green-200 dark:text-green-100 dark:bg-green-500": a1,
  "text-red-800 bg-red-200 dark:text-red-100 dark:bg-red-500": a2
});
class TasksDetailsComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _changeDetectorRef, _formBuilder, _fuseConfirmationService, _renderer2, _router, _tasksListComponent, _tasksService, _overlay, _viewContainerRef) {
    this._activatedRoute = _activatedRoute;
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this._fuseConfirmationService = _fuseConfirmationService;
    this._renderer2 = _renderer2;
    this._router = _router;
    this._tasksListComponent = _tasksListComponent;
    this._tasksService = _tasksService;
    this._overlay = _overlay;
    this._viewContainerRef = _viewContainerRef;
    this.tagsEditMode = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Open the drawer
    this._tasksListComponent.matDrawer.open();
    // Create the task form
    this.taskForm = this._formBuilder.group({
      id: [''],
      type: [''],
      title: [''],
      notes: [''],
      completed: [false],
      dueDate: [null],
      priority: [0],
      tags: [[]],
      order: [0]
    });
    // Get the tags
    this._tasksService.tags$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(tags => {
      this.tags = tags;
      this.filteredTags = tags;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    // Get the tasks
    this._tasksService.tasks$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(tasks => {
      this.tasks = tasks;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    // Get the task
    this._tasksService.task$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(task => {
      // Open the drawer in case it is closed
      this._tasksListComponent.matDrawer.open();
      // Get the task
      this.task = task;
      // Patch values to the form from the task
      this.taskForm.patchValue(task, {
        emitEvent: false
      });
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    // Update task when there is a value change on the task form
    this.taskForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(value => {
      // Update the task object
      this.task = (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(this.task, value);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(value => {
      // Update the task on the server
      this._tasksService.updateTask(value.id, value).subscribe();
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    // Listen for NavigationEnd event to focus on the title field
    this._router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationEnd)).subscribe(() => {
      // Focus on the title field
      this._titleField.nativeElement.focus();
    });
  }
  /**
   * After view init
   */
  ngAfterViewInit() {
    // Listen for matDrawer opened change
    this._tasksListComponent.matDrawer.openedChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(opened => opened)).subscribe(() => {
      // Focus on the title element
      this._titleField.nativeElement.focus();
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
    // Dispose the overlay
    if (this._tagsPanelOverlayRef) {
      this._tagsPanelOverlayRef.dispose();
    }
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Close the drawer
   */
  closeDrawer() {
    return this._tasksListComponent.matDrawer.close();
  }
  /**
   * Toggle the completed status
   */
  toggleCompleted() {
    // Get the form control for 'completed'
    const completedFormControl = this.taskForm.get('completed');
    // Toggle the completed status
    completedFormControl.setValue(!completedFormControl.value);
  }
  /**
   * Open tags panel
   */
  openTagsPanel() {
    // Create the overlay
    this._tagsPanelOverlayRef = this._overlay.create({
      backdropClass: '',
      hasBackdrop: true,
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._tagsPanelOrigin.nativeElement).withFlexibleDimensions(true).withViewportMargin(64).withLockedPosition(true).withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }])
    });
    // Subscribe to the attachments observable
    this._tagsPanelOverlayRef.attachments().subscribe(() => {
      // Focus to the search input once the overlay has been attached
      this._tagsPanelOverlayRef.overlayElement.querySelector('input').focus();
    });
    // Create a portal from the template
    const templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__.TemplatePortal(this._tagsPanel, this._viewContainerRef);
    // Attach the portal to the overlay
    this._tagsPanelOverlayRef.attach(templatePortal);
    // Subscribe to the backdrop click
    this._tagsPanelOverlayRef.backdropClick().subscribe(() => {
      // If overlay exists and attached...
      if (this._tagsPanelOverlayRef && this._tagsPanelOverlayRef.hasAttached()) {
        // Detach it
        this._tagsPanelOverlayRef.detach();
        // Reset the tag filter
        this.filteredTags = this.tags;
        // Toggle the edit mode off
        this.tagsEditMode = false;
      }
      // If template portal exists and attached...
      if (templatePortal && templatePortal.isAttached) {
        // Detach it
        templatePortal.detach();
      }
    });
  }
  /**
   * Toggle the tags edit mode
   */
  toggleTagsEditMode() {
    this.tagsEditMode = !this.tagsEditMode;
  }
  /**
   * Filter tags
   *
   * @param event
   */
  filterTags(event) {
    // Get the value
    const value = event.target.value.toLowerCase();
    // Filter the tags
    this.filteredTags = this.tags.filter(tag => tag.title.toLowerCase().includes(value));
  }
  /**
   * Filter tags input key down event
   *
   * @param event
   */
  filterTagsInputKeyDown(event) {
    // Return if the pressed key is not 'Enter'
    if (event.key !== 'Enter') {
      return;
    }
    // If there is no tag available...
    if (this.filteredTags.length === 0) {
      // Create the tag
      this.createTag(event.target.value);
      // Clear the input
      event.target.value = '';
      // Return
      return;
    }
    // If there is a tag...
    const tag = this.filteredTags[0];
    const isTagApplied = this.task.tags.find(id => id === tag.id);
    // If the found tag is already applied to the task...
    if (isTagApplied) {
      // Remove the tag from the task
      this.deleteTagFromTask(tag);
    } else {
      // Otherwise add the tag to the task
      this.addTagToTask(tag);
    }
  }
  /**
   * Create a new tag
   *
   * @param title
   */
  createTag(title) {
    const tag = {
      title
    };
    // Create tag on the server
    this._tasksService.createTag(tag).subscribe(response => {
      // Add the tag to the task
      this.addTagToTask(response);
    });
  }
  /**
   * Update the tag title
   *
   * @param tag
   * @param event
   */
  updateTagTitle(tag, event) {
    // Update the title on the tag
    tag.title = event.target.value;
    // Update the tag on the server
    this._tasksService.updateTag(tag.id, tag).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300)).subscribe();
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Delete the tag
   *
   * @param tag
   */
  deleteTag(tag) {
    // Delete the tag from the server
    this._tasksService.deleteTag(tag.id).subscribe();
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Add tag to the task
   *
   * @param tag
   */
  addTagToTask(tag) {
    // Add the tag
    this.task.tags.unshift(tag.id);
    // Update the task form
    this.taskForm.get('tags').patchValue(this.task.tags);
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Delete tag from the task
   *
   * @param tag
   */
  deleteTagFromTask(tag) {
    // Remove the tag
    this.task.tags.splice(this.task.tags.findIndex(item => item === tag.id), 1);
    // Update the task form
    this.taskForm.get('tags').patchValue(this.task.tags);
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle task tag
   *
   * @param tag
   */
  toggleTaskTag(tag) {
    if (this.task.tags.includes(tag.id)) {
      this.deleteTagFromTask(tag);
    } else {
      this.addTagToTask(tag);
    }
  }
  /**
   * Should the create tag button be visible
   *
   * @param inputValue
   */
  shouldShowCreateTagButton(inputValue) {
    return !!!(inputValue === '' || this.tags.findIndex(tag => tag.title.toLowerCase() === inputValue.toLowerCase()) > -1);
  }
  /**
   * Set the task priority
   *
   * @param priority
   */
  setTaskPriority(priority) {
    // Set the value
    this.taskForm.get('priority').setValue(priority);
  }
  /**
   * Check if the task is overdue or not
   */
  isOverdue() {
    return luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.fromISO(this.task.dueDate).startOf('day') < luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.now().startOf('day');
  }
  /**
   * Delete the task
   */
  deleteTask() {
    // Open the confirmation dialog
    const confirmation = this._fuseConfirmationService.open({
      title: 'Delete task',
      message: 'Are you sure you want to delete this task? This action cannot be undone!',
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
        // Get the current task's id
        const id = this.task.id;
        // Get the next/previous task's id
        const currentTaskIndex = this.tasks.findIndex(item => item.id === id);
        const nextTaskIndex = currentTaskIndex + (currentTaskIndex === this.tasks.length - 1 ? -1 : 1);
        const nextTaskId = this.tasks.length === 1 && this.tasks[0].id === id ? null : this.tasks[nextTaskIndex].id;
        // Delete the task
        this._tasksService.deleteTask(id).subscribe(isDeleted => {
          // Return if the task wasn't deleted...
          if (!isDeleted) {
            return;
          }
          // Navigate to the next task if available
          if (nextTaskId) {
            this._router.navigate(['../', nextTaskId], {
              relativeTo: this._activatedRoute
            });
          }
          // Otherwise, navigate to the parent
          else {
            this._router.navigate(['../'], {
              relativeTo: this._activatedRoute
            });
          }
        });
        // Mark for check
        this._changeDetectorRef.markForCheck();
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
  static #_ = this.ɵfac = function TasksDetailsComponent_Factory(t) {
    return new (t || TasksDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_2__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_modules_admin_apps_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_3__.TasksListComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_modules_admin_apps_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_4__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TasksDetailsComponent,
    selectors: [["tasks-details"]],
    viewQuery: function TasksDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._tagsPanelOrigin = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._tagsPanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._titleField = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 82,
    vars: 53,
    consts: [[1, "flex", "flex-auto"], [1, "flex", "flex-col", "flex-auto", "p-6", "pt-10", "sm:p-8", "sm:pt-10", "overflow-y-auto", 3, "formGroup"], [1, "flex", "items-center", "justify-between", "-mt-3", "-ml-4"], ["mat-button", "", 1, "pr-4", "pl-3.5", 3, "click"], [4, "ngIf"], [1, "flex", "items-center"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "svgIcon"], ["moreMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", 3, "routerLink"], [1, "mt-6", "mb-8"], [1, "w-full", 3, "subscriptSizing"], ["matInput", "", "cdkTextareaAutosize", "", 3, "formControlName", "spellcheck"], ["titleField", ""], [1, "mt-8"], [1, "font-medium", "mb-1.5"], [1, "flex", "flex-wrap", "items-center", "-m-1.5"], [1, "flex", "items-center", "justify-center", "px-4", "m-1.5", "rounded-full", "leading-9", "cursor-pointer", "text-gray-500", "bg-gray-100", "dark:text-gray-300", "dark:bg-gray-700", 3, "click"], ["tagsPanelOrigin", ""], ["tagsPanel", ""], [1, "flex", "flex-wrap", "items-center", "mt-8"], [1, "font-medium"], [1, "flex", "items-center", "mt-1.5", "px-4", "leading-9", "rounded-full", "cursor-pointer", 3, "ngClass", "matMenuTriggerFor"], ["priorityMenu", "matMenu"], ["mat-menu-item", "", 3, "ngClass", "click"], [1, "inline-flex", "items-center", "justify-between", "w-full", "min-w-30", "leading-5"], [1, "mr-0", "icon-size-4", "text-green-600", "dark:text-green-500", 3, "svgIcon"], [1, "mr-0", "icon-size-4", "text-gray-600", "dark:text-gray-500", 3, "svgIcon"], [1, "mr-0", "icon-size-4", "text-red-600", "dark:text-red-500", 3, "svgIcon"], [1, "ml-6"], [1, "relative", "flex", "items-center", "mt-1.5", "px-4", "leading-9", "rounded-full", "cursor-pointer", 3, "ngClass", "click"], [1, "icon-size-5", "text-current", 3, "svgIcon"], [1, "ml-2", "text-md", "font-medium"], [1, "fuse-mat-dense", "invisible", "absolute", "inset-0", "-mt-2.5", "opacity-0", "pointer-events-none", 3, "subscriptSizing"], ["matInput", "", 3, "formControlName", "matDatepicker"], ["dueDatePicker", ""], ["mat-button", "", "matDatepickerCancel", "", 3, "click"], ["mat-flat-button", "", "matDatepickerApply", "", 1, "", 3, "color"], [1, "flex", "items-center", "justify-center"], [1, "ml-2", "font-semibold"], [1, "text-primary", 3, "svgIcon"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "justify-center", "px-4", "m-1.5", "rounded-full", "leading-9", "text-gray-500", "bg-gray-100", "dark:text-gray-300", "dark:bg-gray-700"], [1, "text-md", "font-medium", "whitespace-nowrap"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-1.5", "text-md", "font-medium", "whitespace-nowrap"], [1, "w-60", "rounded", "border", "shadow-md", "bg-card"], [1, "flex", "items-center", "m-3", "mr-2"], [1, "ml-2"], ["type", "text", "placeholder", "Enter tag name", 1, "w-full", "min-w-0", "py-1", "border-0", 3, "maxLength", "input", "keydown"], ["newTagInput", ""], ["mat-icon-button", "", 1, "ml-1", 3, "click"], ["class", "icon-size-5", 3, "svgIcon", 4, "ngIf"], [1, "flex", "flex-col", "max-h-64", "py-2", "border-t", "overflow-y-auto"], ["class", "flex items-center h-10 min-h-10 -ml-0.5 pl-4 pr-3 leading-none cursor-pointer hover:bg-hover", "matRipple", "", 3, "click", 4, "ngIf"], ["matRipple", "", 1, "flex", "items-center", "h-10", "min-h-10", "pl-1", "pr-4", "cursor-pointer", "hover:bg-hover", 3, "click"], [1, "flex", "items-center", "h-10", "min-h-10", "pointer-events-none", 3, "checked", "color", "disableRipple"], [1, "ml-1"], [1, "py-2", "space-y-2"], [1, "fuse-mat-dense", "w-full", "mx-4", 3, "subscriptSizing"], ["matInput", "", 3, "value", "input"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "icon-size-5", "ml-2", 3, "svgIcon"], ["matRipple", "", 1, "flex", "items-center", "h-10", "min-h-10", "-ml-0.5", "pl-4", "pr-3", "leading-none", "cursor-pointer", "hover:bg-hover", 3, "click"], [1, "mr-2", "icon-size-5", 3, "svgIcon"], [1, "break-all"], [1, "icon-size-4", "text-current", 3, "svgIcon"], [1, "ml-2", "mr-1", "text-md", "font-medium"]],
    template: function TasksDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_Template_button_click_3_listener() {
          return ctx.toggleCompleted();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TasksDetailsComponent_ng_container_4_Template, 5, 1, "ng-container", 4)(5, TasksDetailsComponent_ng_container_5_Template, 5, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-menu", null, 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_Template_button_click_11_listener() {
          return ctx.deleteTask();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "mat-divider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div")(19, "mat-form-field", 12)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "textarea", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 15)(25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, TasksDetailsComponent_ng_container_28_Template, 3, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_Template_div_click_29_listener() {
          return ctx.openTagsPanel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, TasksDetailsComponent_ng_container_31_Template, 4, 1, "ng-container", 4)(32, TasksDetailsComponent_ng_container_32_Template, 4, 1, "ng-container", 4)(33, TasksDetailsComponent_ng_template_33_Template, 14, 7, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 21)(36, "div")(37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, TasksDetailsComponent_ng_container_40_Template, 4, 1, "ng-container", 4)(41, TasksDetailsComponent_ng_container_41_Template, 4, 1, "ng-container", 4)(42, TasksDetailsComponent_ng_container_42_Template, 4, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-menu", null, 24)(45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_Template_button_click_45_listener() {
          return ctx.setTaskPriority(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 26)(47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_Template_button_click_50_listener() {
          return ctx.setTaskPriority(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "span", 26)(52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_Template_button_click_55_listener() {
          return ctx.setTaskPriority(2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span", 26)(57, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 30)(61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Due date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_Template_div_click_63_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
          const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](71);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r16.open());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "mat-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, TasksDetailsComponent_ng_container_66_Template, 3, 4, "ng-container", 4)(67, TasksDetailsComponent_ng_container_67_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-form-field", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "mat-datepicker", null, 36)(72, "mat-datepicker-actions")(73, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TasksDetailsComponent_Template_button_click_73_listener() {
          return ctx.taskForm.get("dueDate").setValue(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 15)(78, "mat-form-field", 12)(79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.taskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.taskForm.get("completed").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.taskForm.get("completed").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:ellipsis-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Delete ", ctx.task.type === "task" ? "task" : "section", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](38, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:x-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("subscriptSizing", "dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.task.type === "task" ? "Task title" : "Section title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", "title")("spellcheck", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.task.tags.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.task.tags.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.task.tags.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](39, _c4, ctx.task.priority === 0, ctx.task.priority === 1, ctx.task.priority === 2))("matMenuTriggerFor", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.task.priority === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.task.priority === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.task.priority === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](43, _c5, ctx.task.priority === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_mini:arrow-long-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](45, _c5, ctx.task.priority === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:minus");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](47, _c5, ctx.task.priority === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_mini:arrow-long-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](49, _c6, !ctx.task.dueDate, ctx.task.dueDate && !ctx.isOverdue(), ctx.task.dueDate && ctx.isOverdue()));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.task.dueDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.task.dueDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("subscriptSizing", "dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", "dueDate")("matDatepicker", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("subscriptSizing", "dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", "notes")("spellcheck", false);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuTrigger, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__.CdkTextareaAutosize, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__.TextFieldModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgFor, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRipple, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerActions, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerCancel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerApply, _fuse_pipes_find_by_key_find_by_key_pipe__WEBPACK_IMPORTED_MODULE_0__.FuseFindByKeyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
    styles: ["\n    .mat-datepicker-popup {\n        scale:0.7;\n        translate: 0px 70px !important;\n    }\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 69815:
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/apps/tasks/list/list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksListComponent: () => (/* binding */ TasksListComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 17792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 74520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var app_modules_admin_apps_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/apps/tasks/tasks.service */ 33894);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);
/* harmony import */ var _fuse_components_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/components/navigation */ 71072);

















const _c0 = ["matDrawer"];
function TasksListComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All tasks completed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TasksListComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.tasksCount.incomplete, " remaining tasks");
  }
}
function TasksListComponent_ng_container_23_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 28);
  }
}
function TasksListComponent_ng_container_23_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function TasksListComponent_ng_container_23_ng_container_2_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:check-circle");
  }
}
function TasksListComponent_ng_container_23_ng_container_2_button_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:check-circle");
  }
}
function TasksListComponent_ng_container_23_ng_container_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TasksListComponent_ng_container_23_ng_container_2_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.toggleCompleted(task_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TasksListComponent_ng_container_23_ng_container_2_button_7_ng_container_1_Template, 2, 1, "ng-container", 9)(2, TasksListComponent_ng_container_23_ng_container_2_button_7_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r7.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !task_r7.completed);
  }
}
function TasksListComponent_ng_container_23_ng_container_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r7.title);
  }
}
function TasksListComponent_ng_container_23_ng_container_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, task_r7.type), " title");
  }
}
function TasksListComponent_ng_container_23_ng_container_2_ng_container_12_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 37);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:arrow-long-down")("title", "Low");
  }
}
function TasksListComponent_ng_container_23_ng_container_2_ng_container_12_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 38);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_mini:arrow-long-up")("title", "High");
  }
}
function TasksListComponent_ng_container_23_ng_container_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TasksListComponent_ng_container_23_ng_container_2_ng_container_12_mat_icon_2_Template, 1, 2, "mat-icon", 35)(3, TasksListComponent_ng_container_23_ng_container_2_ng_container_12_mat_icon_3_Template, 1, 2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r7.priority === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r7.priority === 2);
  }
}
function TasksListComponent_ng_container_23_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, task_r7.dueDate, "LLL dd"), " ");
  }
}
const _c1 = (a0, a1, a2) => ({
  "h-12 text-lg font-semibold bg-gray-50 dark:bg-transparent": a0,
  "h-16": a1,
  "text-hint": a2
});
const _c2 = a0 => [a0];
function TasksListComponent_ng_container_23_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TasksListComponent_ng_container_23_ng_container_2_div_2_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TasksListComponent_ng_container_23_ng_container_2_ng_container_4_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TasksListComponent_ng_container_23_ng_container_2_button_7_Template, 3, 2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 25)(9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, TasksListComponent_ng_container_23_ng_container_2_ng_container_10_Template, 3, 1, "ng-container", 9)(11, TasksListComponent_ng_container_23_ng_container_2_ng_container_11_Template, 4, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TasksListComponent_ng_container_23_ng_container_2_ng_container_12_Template, 4, 2, "ng-container", 9)(13, TasksListComponent_ng_container_23_ng_container_2_div_13_Template, 3, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const first_r8 = ctx.first;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("border-t", first_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "task-" + task_r7.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](13, _c1, task_r7.type === "section", task_r7.type === "task", task_r7.completed))("cdkDragLockAxis", "y");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.selectedTask && ctx_r6.selectedTask.id === task_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_solid:bars-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r7.type === "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c2, task_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !task_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r7.type === "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r7.type === "task");
  }
}
function TasksListComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function TasksListComponent_ng_container_23_Template_div_cdkDropListDropped_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.dropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TasksListComponent_ng_container_23_ng_container_2_Template, 14, 19, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDropListData", ctx_r3.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.tasks)("ngForTrackBy", ctx_r3.trackByFn);
  }
}
function TasksListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add a task to start planning!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:clipboard-document-list");
  }
}
class TasksListComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _changeDetectorRef, _document, _router, _tasksService, _fuseMediaWatcherService, _fuseNavigationService) {
    this._activatedRoute = _activatedRoute;
    this._changeDetectorRef = _changeDetectorRef;
    this._document = _document;
    this._router = _router;
    this._tasksService = _tasksService;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._fuseNavigationService = _fuseNavigationService;
    this.tasksCount = {
      completed: 0,
      incomplete: 0,
      total: 0
    };
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Get the tags
    this._tasksService.tags$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(tags => {
      this.tags = tags;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    // Get the tasks
    this._tasksService.tasks$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(tasks => {
      this.tasks = tasks;
      // Update the counts
      this.tasksCount.total = this.tasks.filter(task => task.type === 'task').length;
      this.tasksCount.completed = this.tasks.filter(task => task.type === 'task' && task.completed).length;
      this.tasksCount.incomplete = this.tasksCount.total - this.tasksCount.completed;
      // Mark for check
      this._changeDetectorRef.markForCheck();
      // Update the count on the navigation
      setTimeout(() => {
        // Get the component -> navigation data -> item
        const mainNavigationComponent = this._fuseNavigationService.getComponent('mainNavigation');
        // If the main navigation component exists...
        if (mainNavigationComponent) {
          const mainNavigation = mainNavigationComponent.navigation;
          const menuItem = this._fuseNavigationService.getItem('apps.tasks', mainNavigation);
          // Update the subtitle of the item
          menuItem.subtitle = this.tasksCount.incomplete + ' remaining tasks';
          // Refresh the navigation
          mainNavigationComponent.refresh();
        }
      });
    });
    // Get the task
    this._tasksService.task$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(task => {
      this.selectedTask = task;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    // Subscribe to media query change
    this._fuseMediaWatcherService.onMediaQueryChange$('(min-width: 1440px)').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(state => {
      // Calculate the drawer mode
      this.drawerMode = state.matches ? 'side' : 'over';
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    // Listen for shortcuts
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this._document, 'keydown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(event => (event.ctrlKey === true || event.metaKey // Ctrl or Cmd
    ) && (event.key === '/' || event.key === '.'))).subscribe(event => {
      // If the '/' pressed
      if (event.key === '/') {
        this.createTask('task');
      }
      // If the '.' pressed
      if (event.key === '.') {
        this.createTask('section');
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
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * On backdrop clicked
   */
  onBackdropClicked() {
    // Go back to the list
    this._router.navigate(['./'], {
      relativeTo: this._activatedRoute
    });
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Create task
   *
   * @param type
   */
  createTask(type) {
    // Create the task
    this._tasksService.createTask(type).subscribe(newTask => {
      // Go to the new task
      this._router.navigate(['./', newTask.id], {
        relativeTo: this._activatedRoute
      });
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * Toggle the completed status
   * of the given task
   *
   * @param task
   */
  toggleCompleted(task) {
    // Toggle the completed status
    task.completed = !task.completed;
    // Update the task on the server
    this._tasksService.updateTask(task.id, task).subscribe();
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Task dropped
   *
   * @param event
   */
  dropped(event) {
    // Move the item in the array
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    // Save the new order
    this._tasksService.updateTasksOrders(event.container.data).subscribe();
    // Mark for check
    this._changeDetectorRef.markForCheck();
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
  static #_ = this.ɵfac = function TasksListComponent_Factory(t) {
    return new (t || TasksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_modules_admin_apps_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fuse_components_navigation__WEBPACK_IMPORTED_MODULE_2__.FuseNavigationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TasksListComponent,
    selectors: [["tasks-list"]],
    viewQuery: function TasksListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.matDrawer = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 26,
    vars: 14,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden"], [1, "flex-auto", "h-full", "bg-card", "dark:bg-transparent", 3, "backdropClick"], [1, "w-full", "sm:w-128", "dark:bg-gray-900", 3, "mode", "opened", "position", "disableClose"], ["matDrawer", ""], [1, "flex", "flex-col"], [1, "flex", "flex-col", "flex-auto"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "sm:justify-between", "py-8", "px-6", "md:px-8"], [1, "text-4xl", "font-extrabold", "tracking-tight", "leading-none"], [1, "ml-0.5", "font-medium", "text-secondary"], [4, "ngIf"], [1, "mt-4", "sm:mt-0"], ["mat-flat-button", "", 3, "color", "matTooltip", "click"], [3, "svgIcon"], [1, "ml-2", "mr-1"], ["mat-flat-button", "", 1, "ml-3", 3, "color", "matTooltip", "click"], [4, "ngIf", "ngIfElse"], ["noTasks", ""], ["cdkDropList", "", 1, "divide-y", 3, "cdkDropListData", "cdkDropListDropped"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["cdkDrag", "", 1, "group", "w-full", "select-none", "hover:bg-gray-100", "dark:hover:bg-hover", 3, "id", "ngClass", "cdkDragLockAxis"], ["class", "flex flex-0 w-0 h-0", 4, "cdkDragPreview"], [1, "relative", "flex", "items-center", "h-full", "pl-10"], ["cdkDragHandle", "", 1, "md:hidden", "absolute", "flex", "items-center", "justify-center", "inset-y-0", "left-0", "w-8", "cursor-move", "md:group-hover:flex"], [1, "icon-size-5", "text-hint", 3, "svgIcon"], ["class", "mr-2 -ml-2.5 leading-none", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "flex", "flex-auto", "items-center", "min-w-0", "h-full", "pr-7", 3, "routerLink"], [1, "flex-auto", "mr-2", "truncate"], ["class", "text-sm whitespace-nowrap text-secondary", 4, "ngIf"], [1, "flex", "flex-0", "w-0", "h-0"], [1, "z-10", "absolute", "-top-px", "right-0", "-bottom-px", "flex", "flex-0", "w-1", "bg-primary"], ["mat-icon-button", "", 1, "mr-2", "-ml-2.5", "leading-none", 3, "click"], [1, "text-primary", 3, "svgIcon"], [1, "text-hint", 3, "svgIcon"], [1, "select-none", "text-hint"], [1, "w-4", "h-4", "mr-3"], ["class", "icon-size-4 text-green-600 dark:text-green-400", 3, "svgIcon", "title", 4, "ngIf"], ["class", "icon-size-4 text-red-600 dark:text-red-400", 3, "svgIcon", "title", 4, "ngIf"], [1, "icon-size-4", "text-green-600", "dark:text-green-400", 3, "svgIcon", "title"], [1, "icon-size-4", "text-red-600", "dark:text-red-400", 3, "svgIcon", "title"], [1, "text-sm", "whitespace-nowrap", "text-secondary"], [1, "flex", "flex-auto", "flex-col", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], [1, "icon-size-24", 3, "svgIcon"], [1, "mt-4", "text-2xl", "font-semibold", "tracking-tight", "text-secondary"]],
    template: function TasksListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("backdropClick", function TasksListComponent_Template_mat_drawer_container_backdropClick_1_listener() {
          return ctx.onBackdropClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TasksListComponent_span_12_Template, 2, 0, "span", 9)(13, TasksListComponent_span_13_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TasksListComponent_Template_button_click_15_listener() {
          return ctx.createTask("section");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Add Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TasksListComponent_Template_button_click_19_listener() {
          return ctx.createTask("task");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, TasksListComponent_ng_container_23_Template, 3, 3, "ng-container", 15)(24, TasksListComponent_ng_template_24_Template, 4, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", ctx.drawerMode)("opened", false)("position", "end")("disableClose", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tasksCount.incomplete === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tasksCount.incomplete !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent")("matTooltip", "Shortcut: Ctrl + .");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "primary")("matTooltip", "Shortcut: Ctrl + /");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tasks && ctx.tasks.length > 0)("ngIfElse", _r5);
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawerContent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDropList, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDrag, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDragPreview, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDragHandle, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 79023:
/*!*************************************************************!*\
  !*** ./src/app/modules/admin/apps/tasks/tasks.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksComponent: () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);


class TasksComponent {
  /**
   * Constructor
   */
  constructor() {}
  static #_ = this.ɵfac = function TasksComponent_Factory(t) {
    return new (t || TasksComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TasksComponent,
    selectors: [["tasks"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    template: function TasksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 77924:
/*!**********************************************************!*\
  !*** ./src/app/modules/admin/apps/tasks/tasks.routes.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var app_modules_admin_apps_tasks_details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/apps/tasks/details/details.component */ 63471);
/* harmony import */ var app_modules_admin_apps_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/apps/tasks/list/list.component */ 69815);
/* harmony import */ var app_modules_admin_apps_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/apps/tasks/tasks.component */ 79023);
/* harmony import */ var app_modules_admin_apps_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/apps/tasks/tasks.service */ 33894);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33252);







/**
 * Task resolver
 *
 * @param route
 * @param state
 */
const taskResolver = (route, state) => {
  const tasksService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_modules_admin_apps_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__.TasksService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
  return tasksService.getTaskById(route.paramMap.get('id')).pipe(
  // Error here means the requested task is not available
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
 * Can deactivate tasks details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */
const canDeactivateTasksDetails = (component, currentRoute, currentState, nextState) => {
  // Get the next route
  let nextRoute = nextState.root;
  while (nextRoute.firstChild) {
    nextRoute = nextRoute.firstChild;
  }
  // If the next state doesn't contain '/tasks'
  // it means we are navigating away from the
  // tasks app
  if (!nextState.url.includes('/tasks')) {
    // Let it navigate
    return true;
  }
  // If we are navigating to another task...
  if (nextRoute.paramMap.get('id')) {
    // Just navigate
    return true;
  }
  // Otherwise, close the drawer first, and then navigate
  return component.closeDrawer().then(() => true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '',
  component: app_modules_admin_apps_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__.TasksComponent,
  resolve: {
    tags: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_modules_admin_apps_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__.TasksService).getTags()
  },
  children: [{
    path: '',
    component: app_modules_admin_apps_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_1__.TasksListComponent,
    resolve: {
      tasks: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_modules_admin_apps_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__.TasksService).getTasks()
    },
    children: [{
      path: ':id',
      component: app_modules_admin_apps_tasks_details_details_component__WEBPACK_IMPORTED_MODULE_0__.TasksDetailsComponent,
      resolve: {
        task: taskResolver
      },
      canDeactivate: [canDeactivateTasksDetails]
    }]
  }]
}]);

/***/ }),

/***/ 33894:
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/apps/tasks/tasks.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksService: () => (/* binding */ TasksService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var _fuse_lib_mock_api_mock_api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/lib/mock-api/mock-api.utils */ 99839);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 48717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);





class TasksService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    // Private
    this._tags = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._task = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._tasks = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for tags
   */
  get tags$() {
    return this._tags.asObservable();
  }
  /**
   * Getter for task
   */
  get task$() {
    return this._task.asObservable();
  }
  /**
   * Getter for tasks
   */
  get tasks$() {
    return this._tasks.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get tags
   */
  getTags() {
    return this._httpClient.get('api/apps/tasks/tags').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      this._tags.next(response);
    }));
  }
  updateTags() {
    let tags = this._tags.value;
    return this._httpClient.post('api/apps/tasks/tags', tags).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      this._tags.next(response);
    }));
  }
  /**
   * Crate tag
   *
   * @param tag
   */
  createTag(tag) {
    let tags = this._tags.value || [];
    tag.id = _fuse_lib_mock_api_mock_api_utils__WEBPACK_IMPORTED_MODULE_0__.FuseMockApiUtils.guid();
    tags = [...tags, tag];
    // Update the tags with the new tag
    this._tags.next(tags);
    this.updateTags().subscribe();
    // Return new tag from observable
    let resp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(tag);
    return resp.asObservable();
  }
  /**
   * Update the tag
   *
   * @param id
   * @param tag
   */
  updateTag(id, tag) {
    let tags = this._tags.value;
    // Find the index of the updated tag
    const index = tags.findIndex(item => item.id === id);
    // Update the tag
    tags[index] = tag;
    // Update the tags
    this._tags.next(tags);
    this.updateTags().subscribe();
    let resp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(tag);
    return resp.asObservable();
  }
  /**
   * Delete the tag
   *
   * @param id
   */
  deleteTag(id) {
    let tags = this._tags.value;
    let tasks = this._tasks.value;
    // Find the index of the deleted tag
    const index = tags.findIndex(item => item.id === id);
    // Delete the tag
    tags.splice(index, 1);
    // Update the tags
    this._tags.next(tags);
    // Iterate through the tasks
    tasks.forEach(task => {
      const tagIndex = task.tags.findIndex(tag => tag === id);
      // If the task has a tag, remove it
      if (tagIndex > -1) {
        task.tags.splice(tagIndex, 1);
        this._tasks.next(tasks);
        this.updateTasks().subscribe();
      }
    });
    this.updateTags().subscribe();
    let resp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
    return resp.asObservable();
  }
  /**
   * Get tasks
   */
  getTasks() {
    return this._httpClient.get('api/apps/tasks').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      this._tasks.next(response);
    }));
  }
  /**
   * Update tasks orders
   *
   * @param tasks
   */
  updateTasksOrders(tasks) {
    // Go through the tasks
    this._tasks.value.forEach(task => {
      // Find this task's index within the tasks array that comes with the request
      // and assign that index as the new order number for the task
      task.order = tasks.findIndex(item => item.id === task.id);
    });
    // Clone the tasks
    this._tasks.next(tasks);
    return this._httpClient.patch('api/apps/tasks', tasks);
  }
  updateTasks() {
    let tasks = this._tasks.getValue();
    return this._httpClient.post('api/apps/tasks', tasks).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (!deepEqual(response, tasks)) {
        setTimeout(() => {
          this.updateTasks().subscribe();
        }, 100);
      }
    }));
  }
  /**
   * Search tasks with given query
   *
   * @param query
   */
  searchTasks(query) {
    // Prepare the search results
    let results;
    // If the query exists...
    if (query) {
      // Clone the tasks
      let tasks = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(this._tasks.value);
      // Filter the tasks
      tasks = tasks.filter(task => task.title && task.title.toLowerCase().includes(query.toLowerCase()) || task.notes && task.notes.toLowerCase().includes(query.toLowerCase()));
      // Mark the found chars
      tasks.forEach(task => {
        const re = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'ig');
        task.title = task.title.replace(re, '<mark>$1</mark>');
      });
      // Set them as the search result
      results = tasks;
    }
    // Otherwise, set the results to null
    else {
      results = null;
    }
    let resp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(results);
    return resp.asObservable();
  }
  /**
   * Get task by id
   */
  getTaskById(id) {
    const tasks = this._tasks.value;
    // Find the task
    const task = tasks.find(item => item.id === id) || null;
    // Update the task
    this._task.next(task);
    // Return the task
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(task);
  }
  /**
   * Create task
   *
   * @param type
   */
  createTask(type) {
    let tasks = this._tasks.value || [];
    // Generate a new task
    const newTask = {
      id: _fuse_lib_mock_api_mock_api_utils__WEBPACK_IMPORTED_MODULE_0__.FuseMockApiUtils.guid(),
      type: type,
      title: '',
      notes: null,
      completed: false,
      dueDate: null,
      priority: 1,
      tags: [],
      order: 0
    };
    // Update the tasks with the new task
    this._tasks.next([newTask, ...tasks]);
    this.updateTasks().subscribe();
    // Return the new task
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(newTask);
  }
  /**
   * Update task
   *
   * @param id
   * @param task
   */
  updateTask(id, task) {
    let tasks = this._tasks.value;
    // Find the index of the updated task
    const index = tasks.findIndex(item => item.id === id);
    // Update the task
    tasks[index] = task;
    // Update the tasks
    this._tasks.next(tasks);
    this.updateTasks().subscribe();
    // Return the updated task
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(task);
  }
  /**
   * Delete the task
   *
   * @param id
   */
  deleteTask(id) {
    let tasks = this._tasks.value;
    // Find the index of the deleted task
    const index = tasks.findIndex(item => item.id === id);
    // Delete the task
    tasks.splice(index, 1);
    // Update the tasks
    this._tasks.next(tasks);
    this.updateTasks().subscribe();
    // Return the deleted status
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
  }
  static #_ = this.ɵfac = function TasksService_Factory(t) {
    return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: TasksService,
    factory: TasksService.ɵfac,
    providedIn: 'root'
  });
}
// same function in notes. todo: create import
function deepEqual(obj1, obj2) {
  // Check if the objects are of the same type
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  // If both are primitive types or null, compare them directly
  if (obj1 === obj2) {
    return true;
  }
  // If one of them is null, they are not equal
  if (obj1 === null || obj2 === null) {
    return false;
  }
  // If they are objects, compare their properties recursively
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // Check if they have the same number of properties
    if (keys1.length !== keys2.length) {
      return false;
    }
    // Check if all properties are deeply equal
    for (const key of keys1) {
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  // If none of the above conditions match, the objects are not equal
  return false;
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_apps_tasks_tasks_routes_ts.js.map