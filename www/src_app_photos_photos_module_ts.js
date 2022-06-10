"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_photos_photos_module_ts"],{

/***/ 4192:
/*!*************************************************!*\
  !*** ./src/app/photos/photos-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotosPageRoutingModule": () => (/* binding */ PhotosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _photos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos.page */ 4281);




const routes = [
    {
        path: '',
        component: _photos_page__WEBPACK_IMPORTED_MODULE_0__.PhotosPage
    }
];
let PhotosPageRoutingModule = class PhotosPageRoutingModule {
};
PhotosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PhotosPageRoutingModule);



/***/ }),

/***/ 3481:
/*!*****************************************!*\
  !*** ./src/app/photos/photos.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotosPageModule": () => (/* binding */ PhotosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _photos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos-routing.module */ 4192);
/* harmony import */ var _photos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos.page */ 4281);







let PhotosPageModule = class PhotosPageModule {
};
PhotosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _photos_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotosPageRoutingModule
        ],
        declarations: [_photos_page__WEBPACK_IMPORTED_MODULE_1__.PhotosPage]
    })
], PhotosPageModule);



/***/ }),

/***/ 4281:
/*!***************************************!*\
  !*** ./src/app/photos/photos.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotosPage": () => (/* binding */ PhotosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _photos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos.page.html?ngResource */ 4548);
/* harmony import */ var _photos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos.page.scss?ngResource */ 5972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 8283);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsbarcode */ 2081);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 4587);







let PhotosPage = class PhotosPage {
    constructor(barcodeScanner, camera) {
        this.barcodeScanner = barcodeScanner;
        this.camera = camera;
    }
    ngOnInit() {
    }
    // constructor() { }
    scanBarcode() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            alert(barcodeData);
        }).catch(err => {
            console.log('Error', err);
            alert('====>' + err);
        });
    }
    genBarcode() {
        jsbarcode__WEBPACK_IMPORTED_MODULE_3__("#barcode", "sor1234567890!");
    }
    cameraTake() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }
};
PhotosPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera }
];
PhotosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-photos',
        template: _photos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_photos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhotosPage);



/***/ }),

/***/ 5972:
/*!****************************************************!*\
  !*** ./src/app/photos/photos.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90b3MucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4548:
/*!****************************************************!*\
  !*** ./src/app/photos/photos.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>photos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button (click)=\"this.scanBarcode()\">scanbar code</ion-button>\n  <ion-button (click)=\"this.genBarcode()\">genBarcode code</ion-button>\n  <ion-button (click)=\"cameraTake()\">take photo</ion-button>\n\n\n  <img id=\"barcode\"/>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_photos_photos_module_ts.js.map