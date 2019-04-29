webpackJsonp([35],{

/***/ 1939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtploginPageModule", function() { return OtploginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Otplogin__ = __webpack_require__(2074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OtploginPageModule = /** @class */ (function () {
    function OtploginPageModule() {
    }
    OtploginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__Otplogin__["a" /* OtploginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__Otplogin__["a" /* OtploginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], OtploginPageModule);
    return OtploginPageModule;
}());

//# sourceMappingURL=otplogin.module.js.map

/***/ }),

/***/ 2074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtploginPage; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_constants__ = __webpack_require__(19);
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
var OtploginPage = /** @class */ (function () {
    function OtploginPage(navCtrl, navParams, fb, appProvider, sitesProvider, loginHelper, domUtils, translate, utils, eventsProvider, contentLinksDelegate, contentLinksHelper, http) {
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
        this.http = http;
        this.countries = [
            { code: '+91' }, { code: '+880' }, { code: '+32' }, { code: '+226' }, { code: '+359' }, { code: '+387' },
            { code: '+1-246' }, { code: '+681' }, { code: '+590' }, { code: '+1-441' }, { code: '+673' }, { code: '+591' },
            { code: '+973' }, { code: '+257' }, { code: '+229' }, { code: '+975' }, { code: '+1-876' }, { code: '+267' },
            { code: '+685' }, { code: '+599' }, { code: '+55' }, { code: '+1-242' }, { code: '+44-1534' }, { code: '+375' },
            { code: '+501' }, { code: '+7' }, { code: '+250' }, { code: '+381' }, { code: '+670' }, { code: '+262' },
            { code: '+993' }, { code: '+992' }, { code: '+40' }, { code: '+690' }, { code: '+245' }, { code: '+1-671' },
            { code: '+502' }, { code: '+30' }, { code: '+240' }, { code: '+590' }, { code: '+81' }, { code: '+592' },
            { code: '+44-1481' }, { code: '+594' }, { code: '+995' }, { code: '+1-473' }, { code: '+44' }, { code: '+241' },
            { code: '+503' }, { code: '+224' }, { code: '+220' }, { code: '+299' }, { code: '+350' }, { code: '+233' },
            { code: '+968' }, { code: '+216' }, { code: '+962' }, { code: '+385' }, { code: '+509' }, { code: '+36' },
            { code: '+852' }, { code: '+504' }, { code: '+58' }, { code: '+1-787' }, { code: '+1-939' }, { code: '+970' },
            { code: '+680' }, { code: '+351' }, { code: '+47' }, { code: '+595' }, { code: '+964' }, { code: '+507' },
            { code: '+689' }, { code: '+675' }, { code: '+51' }, { code: '+92' }, { code: '+63' }, { code: '+870' },
            { code: '+48' }, { code: '+508' }, { code: '+260' }, { code: '+212' }, { code: '+372' }, { code: '+20' },
            { code: '+27' }, { code: '+593' }, { code: '+39' }, { code: '+84' }, { code: '+677' }, { code: '+251' },
            { code: '+252' }, { code: '+263' }, { code: '+39' }, { code: '+966' }, { code: '+34' }, { code: '+291' },
            { code: '+382' }, { code: '+373' }, { code: '+261' }, { code: '+590' }, { code: '+212' }, { code: '+377' },
            { code: '+998' }, { code: '+95' }, { code: '+223' }, { code: '+853' }, { code: '+976' }, { code: '+389' },
            { code: '+230' }, { code: '+356' }, { code: '+265' }, { code: '+960' }, { code: '+596' }, { code: '+1-670' },
            { code: '+1-664' }, { code: '+222' }, { code: '+44-1624' }, { code: '+960' }, { code: '+256' }, { code: '+255' },
            { code: '+60' }, { code: '+52' }, { code: '+972' }, { code: '+33' }, { code: '+246' }, { code: '+290' },
            { code: '+358' }, { code: '+679' }, { code: '+500' }, { code: '+691' }, { code: '+298' }, { code: '+505' },
            { code: '+31' }, { code: '+47' }, { code: '+264' }, { code: '+678' }, { code: '+687' }, { code: '+227' },
            { code: '+672' }, { code: '+234' }, { code: '+64' }, { code: '+977' }, { code: '+674' }, { code: '+683' },
            { code: '+662' }, { code: '+383' }, { code: '+225' }, { code: '+41' }, { code: '+57' }, { code: '+86' },
            { code: '+237' }, { code: '+56' }, { code: '+61' }, { code: '+1' }, { code: '+242' }, { code: '+236' },
            { code: '+243' }, { code: '+420' }, { code: '+357' }, { code: '+506' }, { code: '+599' }, { code: '+238' },
            { code: '+53' }, { code: '+268' }, { code: '+963' }, { code: '+269' }, { code: '+996' }, { code: '+254' },
            { code: '+211' }, { code: '+597' }, { code: '+686' }, { code: '+855' }, { code: '+1-869' }, { code: '+269' },
            { code: '+239' }, { code: '+421' }, { code: '+82' }, { code: '+386' }, { code: '+850' }, { code: '+965' },
            { code: '+221' }, { code: '+378' }, { code: '+232' }, { code: '+248' }, { code: '+7' }, { code: '+1-345' },
            { code: '+65' }, { code: '+46' }, { code: '+1-809' }, { code: '+249' }, { code: '+1-829' }, { code: '+1-767' },
            { code: '+253' }, { code: '+45' }, { code: '+1-284' }, { code: '+49' }, { code: '+967' }, { code: '+213' },
            { code: '+598' }, { code: '+262' }, { code: '+961' }, { code: '+1-758' }, { code: '+856' }, { code: '+688' },
            { code: '+886' }, { code: '+1-868' }, { code: '+961' }, { code: '+90' }, { code: '+94' }, { code: '+423' },
            { code: '+352' }, { code: '+231' }, { code: '+266' }, { code: '+66' }, { code: '+228' }, { code: '+235' },
            { code: '+1-649' }, { code: '+218' }, { code: '+379' }, { code: '+1-784' }, { code: '+971' }, { code: '+376' },
            { code: '+1-268' }, { code: '+93' }, { code: '+1-264' }, { code: '+1-340' }, { code: '+354' }, { code: '+98' },
            { code: '+374' }, { code: '+355' }, { code: '+244' }, { code: '+672' }, { code: '+1-684' }, { code: '+54' },
            { code: '+61' }, { code: '+43' }, { code: '+297' }, { code: '+358-18' }, { code: '+994' }, { code: '+353' },
            { code: '+62' }, { code: '+380' }, { code: '+974' }, { code: '+258' }
        ];
        this.siteChecked = false;
        this.pageLoaded = false;
        this.isBrowserSSO = false;
        this.isFixedUrlSet = false;
        this.eventThrown = false;
        this.viewLeft = false;
        this.siteUrl = navParams.get('siteUrl');
        this.siteConfig = navParams.get('siteConfig');
        this.urlToOpen = navParams.get('urlToOpen');
        this.country = "+91";
        this.credForm = fb.group({
            pfnumber: [navParams.get('pfnumber') || '', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].required],
            phone_number: ['', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].required]
        });
    }
    /**
     * View loaded.
     */
    OtploginPage.prototype.ionViewDidLoad = function () {
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
    OtploginPage.prototype.ionViewDidLeave = function () {
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
    OtploginPage.prototype.checkSite = function (siteUrl) {
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
    OtploginPage.prototype.treatSiteConfig = function () {
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
    OtploginPage.prototype.SendOTP = function (e) {
        var _this = this;
        // Get input data.
        var siteUrl = this.siteUrl, pfnumber = this.credForm.value.pfnumber, phone_number = this.credForm.value.phone_number, country = this.credForm.value.country;
        if (!pfnumber) {
            this.domUtils.showErrorModal('PF Number Required', true);
            return;
        }
        if (!phone_number) {
            this.domUtils.showErrorModal('Required your Phone Number', true);
            return;
        }
        var params = {
            pfnumber: pfnumber,
            phone_number: country + ',' + phone_number
        };
        console.log(params);
        var modal = this.domUtils.showModalLoading();
        var promise = this.http.post(siteUrl + '/local/pin_authentication/pf-mobile-auth.php', params).timeout(__WEBPACK_IMPORTED_MODULE_13__core_constants__["a" /* CoreConstants */].WS_TIMEOUT).toPromise();
        return promise.catch(function () {
            return Promise.reject({ error: _this.translate.instant('core.cannotconnect') });
        }).then(function (data) {
            console.log("we received our data");
            console.log(data);
            if (typeof data == 'undefined') {
                return Promise.reject(_this.translate.instant('core.cannotconnect'));
            }
            else if (typeof data.success != 'undefined' && !data.success) {
                _this.domUtils.showErrorModal(data.error_message);
            }
            else {
                _this.navCtrl.push('OtpscreenPage', { siteUrl: _this.siteUrl, siteConfig: _this.siteConfig, phone_number: phone_number, pfnumber: pfnumber });
            }
        }).finally(function () {
            modal.dismiss();
        });
    };
    OtploginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPage */])({ segment: 'page-otplogin' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otplogin',template:/*ion-inline-start:"D:\FedCampusApp\src\core\login\pages\otplogin\otplogin.html"*/'<ion-header>\n\n  <ion-navbar core-back-button>\n\n    <ion-title>{{\'core.login.custom.otplgoin.navtitle\' | translate}} </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button *ngIf="isFixedUrlSet" ion-button icon-only [navPush]="\'CoreSettingsListPage\'" [attr.aria-label]="\'core.mainmenu.appsettings\' | translate">\n\n        <ion-icon name="cog"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="core-center-view">\n\n  <core-loading [hideUntil]="pageLoaded">\n\n    <div class="box">\n\n      <div text-wrap text-center margin-bottom>\n\n        <!-- Show site logo or a default image. -->\n\n        <img *ngIf="logoUrl" [src]="logoUrl" role="presentation">\n\n        <img *ngIf="!logoUrl" src="assets/img/login_logo.png" class="login-logo" role="presentation">\n\n\n\n        <!-- If no sitename show big siteurl. -->\n\n        <!--<p *ngIf="!siteName" padding class="item-heading core-siteurl">{{siteUrl}}</p>-->\n\n        <!-- If sitename, show big sitename and small siteurl. -->\n\n        <!--<p *ngIf="siteName" padding class="item-heading core-sitename"><core-format-text [text]="siteName"></core-format-text></p>-->\n\n        <!--<p *ngIf="siteName" class="core-siteurl">{{siteUrl}}</p>-->\n\n      </div>\n\n      <form ion-list [formGroup]="credForm" (ngSubmit)="SendOTP($event)">\n\n        <ion-item *ngIf="siteChecked && !isBrowserSSO">\n\n          <ion-input type="text" name="pfnumber" placeholder="PF Number" formControlName="pfnumber"></ion-input>\n\n        </ion-item>\n\n        <ion-item text-wrap>\n\n          <ion-select item-start [(ngModel)]="country" name="country" formControlName="country" placeholder="Country Code">\n\n              <ion-option *ngFor="let c of countries" value="{{c.code}}">{{c.code}}</ion-option>\n\n          </ion-select>\n\n          <ion-input item-end name="phone_number" id="phone_number" type="number" pattern="[0-9]*" placeholder="Mobile Number" formControlName="phone_number" ></ion-input>\n\n        </ion-item>\n\n        <button ion-button block [disabled]="siteChecked && !isBrowserSSO && !credForm.valid">{{\'core.login.custom.otplogin.btn\' | translate}}</button>\n\n      </form>\n\n    </div>\n\n  </core-loading>\n\n</ion-content>'/*ion-inline-end:"D:\FedCampusApp\src\core\login\pages\otplogin\otplogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_9__core_contentlinks_providers_delegate__["a" /* CoreContentLinksDelegate */],
            __WEBPACK_IMPORTED_MODULE_10__core_contentlinks_providers_helper__["a" /* CoreContentLinksHelperProvider */], __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClient */]])
    ], OtploginPage);
    return OtploginPage;
}());

//# sourceMappingURL=Otplogin.js.map

/***/ })

});
//# sourceMappingURL=35.js.map