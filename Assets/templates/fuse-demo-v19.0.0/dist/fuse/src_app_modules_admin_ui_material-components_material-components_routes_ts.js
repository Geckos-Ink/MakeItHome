"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_admin_ui_material-components_material-components_routes_ts"],{

/***/ 80385:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/material-components/material-components.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialComponentsComponent: () => (/* binding */ MaterialComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);






function MaterialComponentsComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18)(4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const component_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://material.angular.io/components/" + component_r1.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/ui/angular-material/scenes/" + component_r1.id + ".scene.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](component_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](component_r1.summary);
  }
}
class MaterialComponentsComponent {
  /**
   * Constructor
   */
  constructor() {
    this.components = [{
      id: 'autocomplete',
      name: 'Autocomplete',
      summary: 'Suggests relevant options as the user types.',
      exampleSpecs: {
        prefix: 'autocomplete-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-autocomplete-testing.html'
      }]
    }, {
      id: 'badge',
      name: 'Badge',
      summary: 'A small value indicator that can be overlaid on another object.',
      exampleSpecs: {
        prefix: 'badge-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-badge-testing.html'
      }]
    }, {
      id: 'bottom-sheet',
      name: 'Bottom Sheet',
      summary: 'A large interactive panel primarily for mobile devices.',
      exampleSpecs: {
        prefix: 'bottom-sheet-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-bottom-sheet-testing.html'
      }]
    }, {
      id: 'button',
      name: 'Button',
      summary: 'An interactive button with a range of presentation options.',
      exampleSpecs: {
        prefix: 'button-',
        exclude: ['button-toggle-']
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-button-testing.html'
      }]
    }, {
      id: 'button-toggle',
      name: 'Button toggle',
      summary: 'A groupable on/off toggle for enabling and disabling options.',
      exampleSpecs: {
        prefix: 'button-toggle-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-button-toggle-testing.html'
      }]
    }, {
      id: 'card',
      name: 'Card',
      summary: 'A styled container for pieces of itemized content.',
      exampleSpecs: {
        prefix: 'card-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-card-testing.html'
      }]
    }, {
      id: 'checkbox',
      name: 'Checkbox',
      summary: 'Captures boolean input with an optional indeterminate mode.',
      exampleSpecs: {
        prefix: 'checkbox-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-checkbox-testing.html'
      }]
    }, {
      id: 'chips',
      name: 'Chips',
      summary: 'Presents a list of items as a set of small, tactile entities.',
      exampleSpecs: {
        prefix: 'chips-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-chips-testing.html'
      }]
    }, {
      id: 'core',
      name: 'Core',
      summary: 'Reusable parts used by other components in the library.',
      exampleSpecs: {
        prefix: 'core-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-core-testing.html'
      }]
    }, {
      id: 'datepicker',
      name: 'Datepicker',
      summary: 'Captures dates, agnostic about their internal representation.',
      exampleSpecs: {
        prefix: 'date'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-datepicker-testing.html'
      }]
    }, {
      id: 'dialog',
      name: 'Dialog',
      summary: 'A configurable modal that displays dynamic content.',
      exampleSpecs: {
        prefix: 'dialog-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-dialog-testing.html'
      }]
    }, {
      id: 'divider',
      name: 'Divider',
      summary: 'A vertical or horizontal visual divider.',
      exampleSpecs: {
        prefix: 'divider-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-divider-testing.html'
      }]
    }, {
      id: 'expansion',
      name: 'Expansion Panel',
      summary: 'A container which can be expanded to reveal more content.',
      exampleSpecs: {
        prefix: 'expansion-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-expansion-testing.html'
      }]
    }, {
      id: 'form-field',
      name: 'Form field',
      summary: 'Wraps input fields so they are displayed consistently.',
      exampleSpecs: {
        prefix: 'form-field-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-form-field-testing.html'
      }]
    }, {
      id: 'grid-list',
      name: 'Grid list',
      summary: 'A flexible structure for presenting content items in a grid.',
      exampleSpecs: {
        prefix: 'grid-list-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-grid-list-testing.html'
      }]
    }, {
      id: 'icon',
      name: 'Icon',
      summary: 'Renders a specified icon.',
      exampleSpecs: {
        prefix: 'icon-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-icon-testing.html'
      }]
    }, {
      id: 'input',
      name: 'Input',
      summary: 'Enables native inputs to be used within a Form field.',
      exampleSpecs: {
        prefix: 'input-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-input-testing.html'
      }]
    }, {
      id: 'list',
      name: 'List',
      summary: 'Presents conventional lists of items.',
      exampleSpecs: {
        prefix: 'list-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-list-testing.html'
      }]
    }, {
      id: 'menu',
      name: 'Menu',
      summary: 'A floating panel of nestable options.',
      exampleSpecs: {
        prefix: 'menu-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-menu-testing.html'
      }]
    }, {
      id: 'paginator',
      name: 'Paginator',
      summary: 'Controls for displaying paged data.',
      exampleSpecs: {
        prefix: 'paginator-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-paginator-testing.html'
      }]
    }, {
      id: 'progress-bar',
      name: 'Progress bar',
      summary: 'A linear progress indicator.',
      exampleSpecs: {
        prefix: 'progress-bar-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-progress-bar-testing.html'
      }]
    }, {
      id: 'progress-spinner',
      name: 'Progress spinner',
      summary: 'A circular progress indicator.',
      exampleSpecs: {
        prefix: 'progress-spinner-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-progress-spinner-testing.html'
      }]
    }, {
      id: 'radio',
      name: 'Radio button',
      summary: 'Allows the user to select one option from a group.',
      exampleSpecs: {
        prefix: 'radio-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-radio-testing.html'
      }]
    }, {
      id: 'ripple',
      name: 'Ripples',
      overviewPath: 'material/core/ripple/ripple.html',
      summary: 'Directive for adding Material Design ripple effects',
      exampleSpecs: {
        prefix: 'ripple-'
      }
    }, {
      id: 'select',
      name: 'Select',
      summary: 'Allows the user to select one or more options using a dropdown.',
      exampleSpecs: {
        prefix: 'select-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-select-testing.html'
      }]
    }, {
      id: 'sidenav',
      name: 'Sidenav',
      summary: 'A container for content that is fixed to one side of the screen.',
      exampleSpecs: {
        prefix: 'sidenav-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-sidenav-testing.html'
      }]
    }, {
      id: 'slide-toggle',
      name: 'Slide toggle',
      summary: 'Captures boolean values as a clickable and draggable switch.',
      exampleSpecs: {
        prefix: 'slide-toggle-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-slide-toggle-testing.html'
      }]
    }, {
      id: 'slider',
      name: 'Slider',
      summary: 'Allows the user to input a value by dragging along a slider.',
      exampleSpecs: {
        prefix: 'slider-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-slider-testing.html'
      }]
    }, {
      id: 'snack-bar',
      name: 'Snackbar',
      summary: 'Displays short actionable messages as an uninvasive alert.',
      exampleSpecs: {
        prefix: 'snack-bar-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-snack-bar-testing.html'
      }]
    }, {
      id: 'sort',
      name: 'Sort header',
      summary: 'Allows the user to configure how tabular data is sorted.',
      exampleSpecs: {
        prefix: 'sort-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-sort-testing.html'
      }]
    }, {
      id: 'stepper',
      name: 'Stepper',
      summary: 'Presents content as steps through which to progress.',
      exampleSpecs: {
        prefix: 'stepper-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-stepper-testing.html'
      }]
    }, {
      id: 'table',
      name: 'Table',
      summary: 'A configurable component for displaying tabular data.',
      exampleSpecs: {
        prefix: 'table-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-table-testing.html'
      }]
    }, {
      id: 'tabs',
      name: 'Tabs',
      summary: 'Only presents one view at a time from a provided set of views.',
      exampleSpecs: {
        prefix: 'tab-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-tabs-testing.html'
      }]
    }, {
      id: 'toolbar',
      name: 'Toolbar',
      summary: 'A container for top-level titles and controls.',
      exampleSpecs: {
        prefix: 'toolbar-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-toolbar-testing.html'
      }]
    }, {
      id: 'tooltip',
      name: 'Tooltip',
      summary: 'Displays floating content when an object is hovered.',
      exampleSpecs: {
        prefix: 'tooltip-'
      },
      additionalApiDocs: [{
        name: 'Testing',
        path: 'material-tooltip-testing.html'
      }]
    }, {
      id: 'tree',
      name: 'Tree',
      summary: 'Presents hierarchical content as an expandable tree.',
      exampleSpecs: {
        prefix: 'tree-'
      }
    }];
  }
  static #_ = this.ɵfac = function MaterialComponentsComponent_Factory(t) {
    return new (t || MaterialComponentsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MaterialComponentsComponent,
    selectors: [["material-components"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 32,
    vars: 3,
    consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "flex-0", "sm:items-center", "sm:justify-between", "p-6", "sm:py-8", "sm:px-10", "border-b", "bg-card", "dark:bg-transparent"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "mt-2"], [1, "text-3xl", "md:text-4xl", "font-extrabold", "tracking-tight", "leading-7", "sm:leading-10", "truncate"], [1, "flex", "shrink-0", "items-center", "mt-6", "sm:mt-0", "sm:ml-4"], ["mat-flat-button", "", "href", "https://material.angular.io/components/categories", "target", "_blank", "rel", "noreferrer", 3, "color"], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "max-w-4xl", "prose", "prose-sm"], ["href", "https://material.angular.io/components/categories", "rel", "noreferrer", "target", "_blank", 1, "link"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "xl:grid-cols-5", "gap-10", "mt-8"], [4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noreferrer", 1, "flex", "flex-col", "rounded-2xl", "shadow", "overflow-hidden", "bg-card", "hover:shadow-xl", "transition-shadow", "duration-200", "ease-in-out", 3, "href"], [1, "w-full", "object-cover", "border-b", 3, "src"], [1, "py-4", "px-5"], [1, "text-xl", "font-semibold"], [1, "mt-1", "text-secondary"]],
    template: function MaterialComponentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Angular Material Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Official docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Fuse uses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Angular Material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " as its primary user interface library. It offers form controls, buttons, tabs, sidebars, icons, modals, tooltips, data tables and many more well tested and widely used components. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Even though Fuse doesn't follow Google's Material design specifications, Angular Material is one of the best Angular component libraries out there and since it's developed and maintained by Google itself, it offers the best compatibility and support for Angular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Fuse is 100% compatible with all Angular Material components. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Component examples and API documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Following, you can find links to the official documentation. Click on the component you want to learn more about and it will redirect you to the related section of the official documentation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MaterialComponentsComponent_ng_container_31_Template, 8, 4, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_mini:arrow-top-right-on-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.components);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor],
    encapsulation: 2
  });
}

/***/ }),

/***/ 30999:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/ui/material-components/material-components.routes.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_modules_admin_ui_material_components_material_components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/ui/material-components/material-components.component */ 80385);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '',
  component: app_modules_admin_ui_material_components_material_components_component__WEBPACK_IMPORTED_MODULE_0__.MaterialComponentsComponent
}]);

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_ui_material-components_material-components_routes_ts.js.map