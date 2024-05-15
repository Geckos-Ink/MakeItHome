"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["common"],{

/***/ 22261:
/*!*****************************************************!*\
  !*** ./src/@fuse/components/card/card.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseCardComponent: () => (/* binding */ FuseCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 55998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/animations */ 94748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




function FuseCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function FuseCardComponent_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@expandCollapse", undefined);
  }
}
function FuseCardComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FuseCardComponent_ng_container_1_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.expanded);
  }
}
const _c0 = [[["", "fuseCardFront", ""]], [["", "fuseCardBack", ""]], "*", [["", "fuseCardExpansion", ""]]];
const _c1 = ["[fuseCardFront]", "[fuseCardBack]", "*", "[fuseCardExpansion]"];
class FuseCardComponent {
  /**
   * Constructor
   */
  constructor() {
    /* eslint-enable @typescript-eslint/naming-convention */
    this.expanded = false;
    this.face = 'front';
    this.flippable = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Host binding for component classes
   */
  get classList() {
    /* eslint-disable @typescript-eslint/naming-convention */
    return {
      'fuse-card-expanded': this.expanded,
      'fuse-card-face-back': this.flippable && this.face === 'back',
      'fuse-card-face-front': this.flippable && this.face === 'front',
      'fuse-card-flippable': this.flippable
    };
    /* eslint-enable @typescript-eslint/naming-convention */
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes) {
    // Expanded
    if ('expanded' in changes) {
      // Coerce the value to a boolean
      this.expanded = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(changes.expanded.currentValue);
    }
    // Flippable
    if ('flippable' in changes) {
      // Coerce the value to a boolean
      this.flippable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(changes.flippable.currentValue);
    }
  }
  static #_ = this.ɵfac = function FuseCardComponent_Factory(t) {
    return new (t || FuseCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FuseCardComponent,
    selectors: [["fuse-card"]],
    hostVars: 2,
    hostBindings: function FuseCardComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.classList);
      }
    },
    inputs: {
      expanded: "expanded",
      face: "face",
      flippable: "flippable"
    },
    exportAs: ["fuseCard"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [1, "fuse-card-front"], [1, "fuse-card-back"], ["class", "fuse-card-expansion", 4, "ngIf"], [1, "fuse-card-expansion"]],
    template: function FuseCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FuseCardComponent_ng_container_0_Template, 5, 0, "ng-container", 0)(1, FuseCardComponent_ng_container_1_Template, 3, 1, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flippable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.flippable);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: ["fuse-card {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--fuse-bg-card-rgb), var(--tw-bg-opacity));\n  border-radius: 1rem;\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  /* Flippable */\n}\nfuse-card.fuse-card-flippable {\n  border-radius: 0;\n  overflow: visible;\n  transform-style: preserve-3d;\n  transition: transform 1s;\n  perspective: 600px;\n  background: transparent;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\nfuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front {\n  visibility: hidden;\n  opacity: 0;\n  transform: rotateY(180deg);\n}\nfuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back {\n  visibility: visible;\n  opacity: 1;\n  transform: rotateY(360deg);\n}\nfuse-card.fuse-card-flippable .fuse-card-front,\nfuse-card.fuse-card-flippable .fuse-card-back {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  z-index: 10;\n  transition: transform 0.5s ease-out 0s, visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s;\n  backface-visibility: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--fuse-bg-card-rgb), var(--tw-bg-opacity));\n  border-radius: 1rem;\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\nfuse-card.fuse-card-flippable .fuse-card-front {\n  position: relative;\n  opacity: 1;\n  visibility: visible;\n  transform: rotateY(0deg);\n  overflow: hidden;\n}\nfuse-card.fuse-card-flippable .fuse-card-back {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  visibility: hidden;\n  transform: rotateY(180deg);\n  overflow: hidden auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVzZS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxxRUFBQTtFQUFBLG1CQUFBO0VBQUEsMEVBQUE7RUFBQSw4RkFBQTtFQUFBLHVHQUFBO0VBRUEsY0FBQTtBQUFKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUFBLDhCQUFBO0VBQUEsdUdBQUE7QUFDUjtBQUdZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFEaEI7QUFJWTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBRmhCO0FBTVE7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSwyRkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFBQSxxRUFBQTtFQUFBLG1CQUFBO0VBQUEsMEVBQUE7RUFBQSw4RkFBQTtFQUFBLHVHQUFBO0FBSlo7QUFPUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUxaO0FBUVE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FBTloiLCJzb3VyY2VzQ29udGVudCI6WyJmdXNlLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgQGFwcGx5IHJvdW5kZWQtMnhsIHNoYWRvdyBiZy1jYXJkO1xuXG4gICAgLyogRmxpcHBhYmxlICovXG4gICAgJi5mdXNlLWNhcmQtZmxpcHBhYmxlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgQGFwcGx5IHNoYWRvdy1ub25lO1xuXG4gICAgICAgICYuZnVzZS1jYXJkLWZhY2UtYmFjayB7XG5cbiAgICAgICAgICAgIC5mdXNlLWNhcmQtZnJvbnQge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZnVzZS1jYXJkLWJhY2sge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mdXNlLWNhcmQtZnJvbnQsXG4gICAgICAgIC5mdXNlLWNhcmQtYmFjayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwcywgdmlzaWJpbGl0eSAwcyBlYXNlLWluIDAuMnMsIG9wYWNpdHkgMHMgZWFzZS1pbiAwLjJzO1xuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgQGFwcGx5IHJvdW5kZWQtMnhsIHNoYWRvdyBiZy1jYXJkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1c2UtY2FyZC1mcm9udCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAuZnVzZS1jYXJkLWJhY2sge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2,
    data: {
      animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_0__.fuseAnimations
    }
  });
}

/***/ }),

/***/ 36085:
/*!********************************************!*\
  !*** ./src/@fuse/components/card/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseCardComponent: () => (/* reexport safe */ _fuse_components_card_public_api__WEBPACK_IMPORTED_MODULE_0__.FuseCardComponent)
/* harmony export */ });
/* harmony import */ var _fuse_components_card_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/card/public-api */ 28598);


/***/ }),

/***/ 28598:
/*!*************************************************!*\
  !*** ./src/@fuse/components/card/public-api.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseCardComponent: () => (/* reexport safe */ _fuse_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.FuseCardComponent)
/* harmony export */ });
/* harmony import */ var _fuse_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/card/card.component */ 22261);


/***/ }),

/***/ 76354:
/*!***********************************************!*\
  !*** ./src/@fuse/components/masonry/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseMasonryComponent: () => (/* reexport safe */ _fuse_components_masonry_public_api__WEBPACK_IMPORTED_MODULE_0__.FuseMasonryComponent)
/* harmony export */ });
/* harmony import */ var _fuse_components_masonry_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/masonry/public-api */ 20967);


/***/ }),

/***/ 18648:
/*!***********************************************************!*\
  !*** ./src/@fuse/components/masonry/masonry.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseMasonryComponent: () => (/* binding */ FuseMasonryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/animations */ 94748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/media-watcher */ 37499);




function FuseMasonryComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
const _c0 = a0 => ({
  $implicit: a0
});
class FuseMasonryComponent {
  /**
   * Constructor
   */
  constructor(_fuseMediaWatcherService) {
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this.items = [];
    this.distributedColumns = [];
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes) {
    // Columns
    if ('columns' in changes) {
      // Distribute the items
      this._distributeItems();
    }
    // Items
    if ('items' in changes) {
      // Distribute the items
      this._distributeItems();
    }
  }
  /**
   * After view init
   */
  ngAfterViewInit() {
    // Distribute the items for the first time
    this._distributeItems();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Distribute items into columns
   */
  _distributeItems() {
    // Return an empty array if there are no items
    if (this.items.length === 0) {
      this.distributedColumns = [];
      return;
    }
    // Prepare the distributed columns array
    this.distributedColumns = Array.from(Array(this.columns), item => ({
      items: []
    }));
    // Distribute the items to columns
    for (let i = 0; i < this.items.length; i++) {
      this.distributedColumns[i % this.columns].items.push(this.items[i]);
    }
  }
  static #_ = this.ɵfac = function FuseMasonryComponent_Factory(t) {
    return new (t || FuseMasonryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_1__.FuseMediaWatcherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FuseMasonryComponent,
    selectors: [["fuse-masonry"]],
    inputs: {
      columnsTemplate: "columnsTemplate",
      columns: "columns",
      items: "items"
    },
    exportAs: ["fuseMasonry"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 4,
    consts: [[1, "flex"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function FuseMasonryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FuseMasonryComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.columnsTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx.distributedColumns));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
    encapsulation: 2,
    data: {
      animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_0__.fuseAnimations
    }
  });
}

/***/ }),

/***/ 20967:
/*!****************************************************!*\
  !*** ./src/@fuse/components/masonry/public-api.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseMasonryComponent: () => (/* reexport safe */ _fuse_components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_0__.FuseMasonryComponent)
/* harmony export */ });
/* harmony import */ var _fuse_components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/masonry/masonry.component */ 18648);


/***/ }),

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

/***/ 91011:
/*!*********************************************************!*\
  !*** ./src/@fuse/pipes/find-by-key/find-by-key.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseFindByKeyPipe: () => (/* binding */ FuseFindByKeyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

/**
 * Finds an object from given source using the given key - value pairs
 */
class FuseFindByKeyPipe {
  /**
   * Constructor
   */
  constructor() {}
  /**
   * Transform
   *
   * @param value A string or an array of strings to find from source
   * @param key Key of the object property to look for
   * @param source Array of objects to find from
   */
  transform(value, key, source) {
    // If the given value is an array of strings...
    if (Array.isArray(value)) {
      return value.map(item => source.find(sourceItem => sourceItem[key] === item));
    }
    // If the value is a string...
    return source.find(sourceItem => sourceItem[key] === value);
  }
  static #_ = this.ɵfac = function FuseFindByKeyPipe_Factory(t) {
    return new (t || FuseFindByKeyPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "fuseFindByKey",
    type: FuseFindByKeyPipe,
    pure: false,
    standalone: true
  });
}

/***/ }),

/***/ 91781:
/*!***************************************!*\
  !*** ./src/@fuse/validators/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseValidators: () => (/* reexport safe */ _fuse_validators_public_api__WEBPACK_IMPORTED_MODULE_0__.FuseValidators)
/* harmony export */ });
/* harmony import */ var _fuse_validators_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/validators/public-api */ 35325);


/***/ }),

/***/ 35325:
/*!********************************************!*\
  !*** ./src/@fuse/validators/public-api.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseValidators: () => (/* reexport safe */ _fuse_validators_validators__WEBPACK_IMPORTED_MODULE_0__.FuseValidators)
/* harmony export */ });
/* harmony import */ var _fuse_validators_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/validators/validators */ 39796);


/***/ }),

/***/ 39796:
/*!********************************************!*\
  !*** ./src/@fuse/validators/validators.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuseValidators: () => (/* binding */ FuseValidators)
/* harmony export */ });
class FuseValidators {
  /**
   * Check for empty (optional fields) values
   *
   * @param value
   */
  static isEmptyInputValue(value) {
    return value == null || value.length === 0;
  }
  /**
   * Must match validator
   *
   * @param controlPath A dot-delimited string values that define the path to the control.
   * @param matchingControlPath A dot-delimited string values that define the path to the matching control.
   */
  static mustMatch(controlPath, matchingControlPath) {
    return formGroup => {
      // Get the control and matching control
      const control = formGroup.get(controlPath);
      const matchingControl = formGroup.get(matchingControlPath);
      // Return if control or matching control doesn't exist
      if (!control || !matchingControl) {
        return null;
      }
      // Delete the mustMatch error to reset the error on the matching control
      if (matchingControl.hasError('mustMatch')) {
        delete matchingControl.errors.mustMatch;
        matchingControl.updateValueAndValidity();
      }
      // Don't validate empty values on the matching control
      // Don't validate if values are matching
      if (this.isEmptyInputValue(matchingControl.value) || control.value === matchingControl.value) {
        return null;
      }
      // Prepare the validation errors
      const errors = {
        mustMatch: true
      };
      // Set the validation error on the matching control
      matchingControl.setErrors(errors);
      // Return the errors
      return errors;
    };
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map