webpackJsonp([31],{

/***/ 1900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpinPageModule", function() { return SetpinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setpin__ = __webpack_require__(2033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SetpinPageModule = /** @class */ (function () {
    function SetpinPageModule() {
    }
    SetpinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setpin__["a" /* SetpinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setpin__["a" /* SetpinPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SetpinPageModule);
    return SetpinPageModule;
}());

//# sourceMappingURL=setpin.module.js.map

/***/ }),

/***/ 2033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetpinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configconstants__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utils_text__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the SetpinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetpinPage = /** @class */ (function () {
    function SetpinPage(platform, navCtrl, fb, appProvider, sitesProvider, loginHelper, domUtils, translate, eventsProvider, textUtils) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.eventsProvider = eventsProvider;
        this.textUtils = textUtils;
        this.siteChecked = false;
        this.pageLoaded = false;
        this.isBrowserSSO = false;
        this.isFixedUrlSet = false;
        this.eventThrown = false;
        this.viewLeft = false;
        this.credForm = fb.group({
            setpin: ['', [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].maxLength(6), __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].pattern('[0-9]{6}')]],
            confirmpin: ['', [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].maxLength(6), __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].pattern('[0-9]{6}')]]
        });
        this.sitesProvider.getSortedSites().then(function (sites) {
            // Remove protocol from the url to show more url text.
            _this.sites = sites.map(function (site) {
                site.siteUrl = site.siteUrl.replace(/^https?:\/\//, '');
                site.badge = 0;
                return site;
            });
        }).catch(function () {
            // Shouldn't happen.
        });
        platform.ready().then(function () {
            _this.platform.pause.subscribe(function () {
                _this.customLogOutWithDelete();
            });
        });
    }
    /**
     * View loaded.
     */
    SetpinPage.prototype.ionViewDidLoad = function () {
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
    SetpinPage.prototype.ionViewDidLeave = function () {
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
    SetpinPage.prototype.checkSite = function (siteUrl) {
        var _this = this;
        this.pageLoaded = false;
        siteUrl = __WEBPACK_IMPORTED_MODULE_8__configconstants__["a" /* CoreConfigConstants */].siteurl;
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
    SetpinPage.prototype.treatSiteConfig = function () {
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
     * Set the Pin of the user of his own choice.
     *
     */
    SetpinPage.prototype.SetPIN = function () {
        var _this = this;
        var pin = this.credForm.value.setpin, confirmpin = this.credForm.value.confirmpin;
        if ((pin != confirmpin)) {
            this.domUtils.showErrorModal("Confirm PIN doesn't match with the PIN you enter", true);
            return;
        }
        var siteid = this.sitesProvider.getCurrentSiteId();
        this.sitesProvider.getSite(siteid).then(function (site) {
            var params = {
                pin: pin
            };
            return site.write('set_user_pin', params).then(function (data) {
                if (data.status) {
                    _this.domUtils.showAlert('Success', _this.translate.instant('core.login.custom.pinupdatesuccessmessage'));
                    //this.navCtrl.push('CoreMainMenuPage');
                    _this.customLogOutWithDelete();
                }
                else {
                    _this.domUtils.showErrorModal('There is an issue while setting up the PIN please try again after some time', true);
                }
            }).catch(function () {
                // Unable to get mime type, assume it's not supported.
            });
        });
    };
    SetpinPage.prototype.customLogOutWithDelete = function () {
        var _this = this;
        var index = 0;
        var site = this.sites[index], siteName = site.siteName;
        this.textUtils.formatText(siteName).then(function (siteName) {
            _this.sitesProvider.deleteSite(site.id).then(function () {
                _this.sites.splice(index, 1);
                // If there are no sites left, go to add site.
                _this.sitesProvider.hasSites().then(function (hasSites) {
                    if (!hasSites) {
                        _this.loginHelper.goToAddSite(true, true);
                    }
                });
                // tslint:disable-next-line: no-empty
            }).catch(function (error) {
            });
        });
    };
    SetpinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setpin',template:/*ion-inline-start:"D:\FedCampusApp\src\core\login\pages\setpin\setpin.html"*/'<ion-header>\n\n  <ion-navbar core-back-button>\n\n    <ion-title>{{\'core.login.custom.setpin.navtitle\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="core-center-view">\n\n  <core-loading [hideUntil]="pageLoaded">      \n\n    <div class="box">\n\n        <h3 class="text-center"> {{\'core.login.custom.setpin.info\' | translate}} </h3>\n\n      <form ion-list [formGroup]="credForm" (ngSubmit)="SetPIN()">\n\n        <ion-item>\n\n          <core-show-password item-content [name]="\'setpin\'">\n\n            <ion-input class="core-ioninput-password" name="setpin" type="password" placeholder="PIN"\n\n             maxlength="6" formControlName="setpin" core-show-password [clearOnEdit]="false"></ion-input>\n\n          </core-show-password>\n\n        </ion-item>\n\n        <ion-item>\n\n          <core-show-password item-content [name]="\'confirmpin\'">\n\n            <ion-input class="core-ioninput-password" name="confirmpin" type="password"\n\n             maxlength="6" placeholder="Confirm PIN" formControlName="confirmpin" core-show-password\n\n              [clearOnEdit]="false"></ion-input>\n\n          </core-show-password>\n\n        </ion-item>\n\n        <button ion-button block [disabled]="!credForm.valid">{{\'core.login.custom.setpin.btn\' | translate}}</button>\n\n      </form>\n\n    </div>\n\n  </core-loading>\n\n</ion-content>'/*ion-inline-end:"D:\FedCampusApp\src\core\login\pages\setpin\setpin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_utils_text__["a" /* CoreTextUtilsProvider */]])
    ], SetpinPage);
    return SetpinPage;
}());

//# sourceMappingURL=setpin.js.map

/***/ })

});
//# sourceMappingURL=31.js.map