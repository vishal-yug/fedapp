webpackJsonp([33],{

/***/ 1938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfLoginCredentialsPageModule", function() { return PfLoginCredentialsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pflogin__ = __webpack_require__(2073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
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






var PfLoginCredentialsPageModule = /** @class */ (function () {
    function PfLoginCredentialsPageModule() {
    }
    PfLoginCredentialsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pflogin__["a" /* PfLoginCredentialsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pflogin__["a" /* PfLoginCredentialsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], PfLoginCredentialsPageModule);
    return PfLoginCredentialsPageModule;
}());

//# sourceMappingURL=pflogin.module.js.map

/***/ }),

/***/ 2073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PfLoginCredentialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_contentlinks_providers_delegate__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_contentlinks_providers_helper__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_utils_text__ = __webpack_require__(11);
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













/**
 * Page to enter the user credentials.
 */
var PfLoginCredentialsPage = /** @class */ (function () {
    function PfLoginCredentialsPage(platform, textUtils, navCtrl, navParams, fb, appProvider, sitesProvider, loginHelper, domUtils, translate, utils, eventsProvider, contentLinksDelegate, contentLinksHelper) {
        var _this = this;
        this.platform = platform;
        this.textUtils = textUtils;
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
        this.credForm = fb.group({
            pfnumber: [navParams.get('pfnumber') || '', [__WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].maxLength(6), __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].pattern('^[0-9]+$')]],
            pin: ['', [__WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].maxLength(6), __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].pattern('[0-9]{6}')]]
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
    PfLoginCredentialsPage.prototype.ionViewDidLoad = function () {
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
    PfLoginCredentialsPage.prototype.ionViewDidLeave = function () {
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
    PfLoginCredentialsPage.prototype.checkSite = function (siteUrl) {
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
    PfLoginCredentialsPage.prototype.treatSiteConfig = function () {
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
     * Tries to limit input character
     *
     * @param {Event} [e] Event.
     */
    PfLoginCredentialsPage.prototype.onKeyPressEvent = function (event) {
        if ((this.credForm.value.pfnumber).length > 5) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Tries to authenticate the user.
     *
     * @param {Event} [e] Event.
     */
    PfLoginCredentialsPage.prototype.login = function (e) {
        var _this = this;
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.appProvider.closeKeyboard();
        // Get input data.
        var siteUrl = this.siteUrl, pfnumber = this.credForm.value.pfnumber, pin = this.credForm.value.pin;
        if (!this.siteChecked || this.isBrowserSSO) {
            // Site wasn't checked (it failed) or a previous check determined it was SSO. Let's check again.
            this.checkSite(siteUrl).then(function () {
                if (!_this.isBrowserSSO) {
                    // Site doesn't use browser SSO, throw app's login again.
                    return _this.login();
                }
            });
            return;
        }
        if (!pfnumber) {
            this.domUtils.showErrorModal('PF number is required', true);
            return;
        }
        if (!pin) {
            this.domUtils.showErrorModal('PIN is required', true);
            return;
        }
        if (pin.length != 6) {
            this.domUtils.showErrorModal('Invalid PIN, please try again.', true);
            return;
        }
        if (!this.appProvider.isOnline()) {
            this.domUtils.showErrorModal('core.networkerrormsg', true);
            return;
        }
        var modal = this.domUtils.showModalLoading();
        // Start the authentication process.
        this.sitesProvider.getUserTokenFromPin(siteUrl, pfnumber, pin).then(function (data) {
            return _this.sitesProvider.newSite(data.siteUrl, data.token, data.privateToken).then(function (id) {
                // Reset fields so the data is not in the view anymore.
                _this.credForm.controls['pfnumber'].reset();
                _this.credForm.controls['pin'].reset();
                _this.siteId = id;
                if (_this.urlToOpen) {
                    // There's a content link to open.
                    return _this.contentLinksDelegate.getActionsFor(_this.urlToOpen, undefined, pfnumber).then(function (actions) {
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
                    return _this.loginHelper.goToSiteInitialPage();
                }
            });
        }).catch(function (error) {
            // tslint:disable-next-line: no-console
            console.log(error);
            _this.loginHelper.treatUserTokenError(siteUrl, error, pfnumber, pin);
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Forgotten password button clicked.
     */
    PfLoginCredentialsPage.prototype.firstTimeLogin = function () {
        // Check if password reset can be done through the app.
        this.navCtrl.push('OtploginPage', { siteUrl: this.siteUrl, siteConfig: this.siteConfig });
    };
    PfLoginCredentialsPage.prototype.customLogOutWithDelete = function () {
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
    PfLoginCredentialsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pf-login-credentials',template:/*ion-inline-start:"D:\FedCampusApp\src\core\login\pages\pflogin\pflogin.html"*/'<ion-header>\n\n  <ion-navbar core-back-button>\n\n    <ion-title>{{ \'core.login.custom.pflogin.login\' | translate }}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button *ngIf="isFixedUrlSet" ion-button icon-only [navPush]="\'CoreSettingsListPage\'" [attr.aria-label]="\'core.mainmenu.appsettings\' | translate">\n\n        <ion-icon name="cog"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="core-center-view">\n\n  <core-loading [hideUntil]="pageLoaded">\n\n    <div class="box">\n\n      <div text-wrap text-center margin-bottom>\n\n        <!-- Show site logo or a default image. -->\n\n        <img *ngIf="!logoUrl" src="assets/img/fb_logo.png" class="fed-logo" role="presentation"><br>\n\n        <img *ngIf="logoUrl" [src]="logoUrl" role="presentation">\n\n        <img *ngIf="!logoUrl" src="assets/img/login_logo.png" class="login-logo" role="presentation">\n\n\n\n        <!-- If no sitename show big siteurl. -->\n\n        <!--<p *ngIf="!siteName" padding class="item-heading core-siteurl">{{siteUrl}}</p>-->\n\n        <!-- If sitename, show big sitename and small siteurl. -->\n\n        <!--<p *ngIf="siteName" padding class="item-heading core-sitename"><core-format-text [text]="siteName"></core-format-text></p>-->\n\n        <!--<p *ngIf="siteName" class="core-siteurl">{{siteUrl}}</p>-->\n\n      </div>\n\n      <form ion-list [formGroup]="credForm" (ngSubmit)="login($event)">\n\n        <ion-item *ngIf="siteChecked && !isBrowserSSO">\n\n          <ion-input  name="pfnumber"  type="number" maxlength="6" placeholder="PF Number" formControlName="pfnumber" autocapitalize="none" autocorrect="off"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="siteChecked && !isBrowserSSO" margin-bottom>\n\n          <core-show-password item-content [name]="\'pin\'">\n\n            <ion-input class="core-ioninput-password" name="pin" type="number"  placeholder="PIN" maxlength="6" formControlName="pin" core-show-password [clearOnEdit]="false"></ion-input>\n\n          </core-show-password>\n\n        </ion-item>\n\n        <button ion-button block [disabled]="siteChecked && !isBrowserSSO && !credForm.valid">{{ \'core.login.custom.pflogin.login\' | translate }}</button>\n\n      </form>\n\n\n\n      <!-- Forgotten password button. -->\n\n      <div padding-top>\n\n        <button ion-button block text-wrap class="removebg removepd" color="light" (click)="firstTimeLogin()">{{\'core.login.custom.pflogin.forgotpassword\' | translate}}</button>\n\n      </div>\n\n\n\n    </div>\n\n  </core-loading>\n\n</ion-content>'/*ion-inline-end:"D:\FedCampusApp\src\core\login\pages\pflogin\pflogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_12__providers_utils_text__["a" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_9__core_contentlinks_providers_delegate__["a" /* CoreContentLinksDelegate */],
            __WEBPACK_IMPORTED_MODULE_10__core_contentlinks_providers_helper__["a" /* CoreContentLinksHelperProvider */]])
    ], PfLoginCredentialsPage);
    return PfLoginCredentialsPage;
}());

//# sourceMappingURL=pflogin.js.map

/***/ })

});
//# sourceMappingURL=33.js.map