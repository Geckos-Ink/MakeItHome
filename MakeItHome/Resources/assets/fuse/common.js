"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["common"],{

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

/***/ })

}]);
//# sourceMappingURL=common.js.map