webpackJsonp([34],{

/***/ 1894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpscreenPageModule", function() { return OtpscreenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Otpscreen__ = __webpack_require__(2027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OtpscreenPageModule = /** @class */ (function () {
    function OtpscreenPageModule() {
    }
    OtpscreenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__Otpscreen__["a" /* OtpscreenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__Otpscreen__["a" /* OtpscreenPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], OtpscreenPageModule);
    return OtpscreenPageModule;
}());

//# sourceMappingURL=otpscreen.module.js.map

/***/ }),

/***/ 2027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpscreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_contentlinks_providers_delegate__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_contentlinks_providers_helper__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(24);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CoreSite } from '@classes/site';






/**
 * Generated class for the OtploginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpscreenPage = /** @class */ (function () {
    function OtpscreenPage(navCtrl, navParams, fb, appProvider, sitesProvider, loginHelper, domUtils, translate, utils, eventsProvider, contentLinksDelegate, contentLinksHelper) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.utils = utils;
        this.eventsProvider = eventsProvider;
        this.contentLinksDelegate = contentLinksDelegate;
        this.contentLinksHelper = contentLinksHelper;
        this.siteChecked = false;
        this.pageLoaded = false;
        this.isBrowserSSO = false;
        this.isFixedUrlSet = false;
        this.eventThrown = false;
        this.viewLeft = false;
        this.siteUrl = navParams.get('siteUrl');
        this.siteConfig = navParams.get('siteConfig');
        this.urlToOpen = navParams.get('urlToOpen');
        this.pfnumber = navParams.get('pfnumber');
        this.phone_number = navParams.get('phone_number');
        this.credForm = fb.group({
            otp: ['', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].required]
        });
    }
    /**
     * View loaded.
     */
    OtpscreenPage.prototype.ionViewDidLoad = function () {
        this.treatSiteConfig();
        this.isFixedUrlSet = this.loginHelper.isFixedUrlSet();
        if (this.isFixedUrlSet) {
            // Fixed URL, we need to check if it uses browser SSO login.
            this.checkSite(this.siteUrl);
        }
        else {
            this.siteChecked = true;
            this.pageLoaded = true;
        }
    };
    /**
     * View left.
     */
    OtpscreenPage.prototype.ionViewDidLeave = function () {
        this.viewLeft = true;
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */].LOGIN_SITE_UNCHECKED, { config: this.siteConfig }, this.siteId);
    };
    /**
     * Check if a site uses local_mobile, requires SSO login, etc.
     * This should be used only if a fixed URL is set, otherwise this check is already performed in CoreLoginSitePage.
     *
     * @param {string} siteUrl Site URL to check.
     * @return {Promise<any>} Promise resolved when done.
     */
    OtpscreenPage.prototype.checkSite = function (siteUrl) {
        var _this = this;
        this.pageLoaded = false;
        // If the site is configured with http:// protocol we force that one, otherwise we use default mode.
        var protocol = siteUrl.indexOf('http://') === 0 ? 'http://' : undefined;
        return this.sitesProvider.checkSite(siteUrl, protocol).then(function (result) {
            _this.siteChecked = true;
            _this.siteUrl = result.siteUrl;
            _this.siteConfig = result.config;
            _this.treatSiteConfig();
            if (result && result.warning) {
                _this.domUtils.showErrorModal(result.warning, true, 4000);
            }
            if (_this.loginHelper.isSSOLoginNeeded(result.code)) {
                // SSO. User needs to authenticate in a browser.
                _this.isBrowserSSO = true;
                // Check that there's no SSO authentication ongoing and the view hasn't changed.
                if (!_this.appProvider.isSSOAuthenticationOngoing() && !_this.viewLeft) {
                    _this.loginHelper.confirmAndOpenBrowserForSSOLogin(result.siteUrl, result.code, result.service, result.config && result.config.launchurl);
                }
            }
            else {
                _this.isBrowserSSO = false;
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
        }).finally(function () {
            _this.pageLoaded = true;
        });
    };
    /**
     * Treat the site configuration (if it exists).
     */
    OtpscreenPage.prototype.treatSiteConfig = function () {
        if (this.siteConfig) {
            this.siteName = this.siteConfig.sitename;
            this.logoUrl = this.siteConfig.logourl || this.siteConfig.compactlogourl;
            this.authInstructions = this.siteConfig.authinstructions || this.translate.instant('core.login.loginsteps');
            this.canSignup = this.siteConfig.registerauth == 'email' && !this.loginHelper.isEmailSignupDisabled(this.siteConfig);
            this.identityProviders = this.loginHelper.getValidIdentityProviders(this.siteConfig);
            if (!this.eventThrown && !this.viewLeft) {
                this.eventThrown = true;
                this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */].LOGIN_SITE_CHECKED, { config: this.siteConfig });
            }
        }
        else {
            this.siteName = null;
            this.logoUrl = null;
            this.authInstructions = null;
            this.canSignup = false;
            this.identityProviders = [];
        }
    };
    /**
     * Tries to authenticate the user.
     *
     * @param {Event} [e] Event.
     */
    OtpscreenPage.prototype.LoginUsingOTP = function (e) {
        var _this = this;
        // Get input data.
        var siteUrl = this.siteUrl, otp = this.credForm.value.otp;
        if (!otp) {
            this.domUtils.showErrorModal('OTP is required', true);
            return;
        }
        if (otp.length != 6) {
            this.domUtils.showErrorModal('Invalid OTP, please try again.', true);
            return;
        }
        var modal = this.domUtils.showModalLoading();
        // Start the authentication process.
        this.sitesProvider.getUserTokenFromPin(siteUrl, this.pfnumber, otp, true).then(function (data) {
            return _this.sitesProvider.newSite(data.siteUrl, data.token, data.privateToken).then(function (id) {
                _this.credForm.controls['otp'].reset();
                _this.siteId = id;
                if (_this.urlToOpen) {
                    // There's a content link to open.
                    return _this.contentLinksDelegate.getActionsFor(_this.urlToOpen, undefined, _this.pfnumber).then(function (actions) {
                        var action = _this.contentLinksHelper.getFirstValidAction(actions);
                        if (action && action.sites.length) {
                            // Action should only have 1 site because we're filtering by username.
                            action.action(action.sites[0]);
                        }
                        else {
                            return _this.loginHelper.goToSiteInitialPage();
                        }
                    });
                }
                else {
                    return _this.appProvider.getRootNavController().push('SetpinPage');
                }
            });
        }).catch(function (error) {
            // tslint:disable-next-line: no-console
            console.log(error);
            _this.loginHelper.treatUserTokenError(siteUrl, error, _this.pfnumber, otp);
        }).finally(function () {
            modal.dismiss();
        });
    };
    OtpscreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPage */])({ segment: 'page-otpscreen' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otpscreen',template:/*ion-inline-start:"D:\FedCampusApp\src\core\login\pages\otpscreen\otpscreen.html"*/'<ion-header>\n\n  <ion-navbar core-back-button>\n\n    <ion-title>{{\'core.login.custom.otpscreen.navtitle\' | translate}}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button *ngIf="isFixedUrlSet" ion-button icon-only [navPush]="\'CoreSettingsListPage\'" [attr.aria-label]="\'core.mainmenu.appsettings\' | translate">\n\n        <ion-icon name="cog"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="core-center-view">\n\n  <core-loading [hideUntil]="pageLoaded">\n\n    <div class="box">\n\n      <div text-wrap text-center margin-bottom>\n\n        <!-- Show site logo or a default image. -->\n\n        <img *ngIf="logoUrl" [src]="logoUrl" role="presentation">\n\n        <img *ngIf="!logoUrl" src="assets/img/login_logo.png" class="login-logo" role="presentation">\n\n\n\n        <!-- If no sitename show big siteurl. -->\n\n        <!--<p *ngIf="!siteName" padding class="item-heading core-siteurl">{{siteUrl}}</p>-->\n\n        <!-- If sitename, show big sitename and small siteurl. -->\n\n        <!--<p *ngIf="siteName" padding class="item-heading core-sitename"><core-format-text [text]="siteName"></core-format-text></p>-->\n\n        <!--<p *ngIf="siteName" class="core-siteurl">{{siteUrl}}</p>-->\n\n      </div>\n\n      <p>{{\'core.login.custom.otpscreen.info\' | translate}}</p>\n\n      <form ion-list [formGroup]="credForm" (ngSubmit)="LoginUsingOTP($event)">\n\n        <ion-item *ngIf="siteChecked && !isBrowserSSO" margin-bottom>\n\n          <ion-input name="otp" type="number" pattern="[0-9]*" placeholder="6-digit code" maxlength="6" formControlName="otp"></ion-input>\n\n        </ion-item>\n\n        <button ion-button block [disabled]="siteChecked && !isBrowserSSO && !credForm.valid">{{\'core.login.custom.optscreen.loginbtn\' | translate}}</button>\n\n      </form>\n\n    </div>\n\n  </core-loading>\n\n</ion-content>'/*ion-inline-end:"D:\FedCampusApp\src\core\login\pages\otpscreen\otpscreen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_9__core_contentlinks_providers_delegate__["a" /* CoreContentLinksDelegate */],
            __WEBPACK_IMPORTED_MODULE_10__core_contentlinks_providers_helper__["a" /* CoreContentLinksHelperProvider */]])
    ], OtpscreenPage);
    return OtpscreenPage;
}());

//# sourceMappingURL=Otpscreen.js.map

/***/ })

});
//# sourceMappingURL=34.js.map