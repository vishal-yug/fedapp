webpackJsonp([24],{

/***/ 1903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuPageModule", function() { return CoreMainMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__more__ = __webpack_require__(2036);
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






var CoreMainMenuPageModule = /** @class */ (function () {
    function CoreMainMenuPageModule() {
    }
    CoreMainMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__more__["a" /* CoreMainMenuMorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__more__["a" /* CoreMainMenuMorePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreMainMenuPageModule);
    return CoreMainMenuPageModule;
}());

//# sourceMappingURL=more.module.js.map

/***/ }),

/***/ 2036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreMainMenuMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_delegate__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mainmenu__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_login_providers_helper__ = __webpack_require__(81);
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
 * Page that displays the list of main menu options that aren't in the tabs.
 */
var CoreMainMenuMorePage = /** @class */ (function () {
    function CoreMainMenuMorePage(domUtils, textUtils, menuDelegate, sitesProvider, navCtrl, mainMenuProvider, loginHelper, eventsProvider) {
        this.domUtils = domUtils;
        this.textUtils = textUtils;
        this.menuDelegate = menuDelegate;
        this.sitesProvider = sitesProvider;
        this.navCtrl = navCtrl;
        this.mainMenuProvider = mainMenuProvider;
        this.loginHelper = loginHelper;
        this.langObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */].LANGUAGE_CHANGED, this.loadSiteInfo.bind(this));
        this.updateSiteObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */].SITE_UPDATED, this.loadSiteInfo.bind(this), sitesProvider.getCurrentSiteId());
        this.loadSiteInfo();
    }
    /**
     * View loaded.
     */
    CoreMainMenuMorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Load the handlers.
        this.subscription = this.menuDelegate.getHandlers().subscribe(function (handlers) {
            // Calculate the main handlers to not display them in this view.
            var mainHandlers = handlers.filter(function (handler) {
                return !handler.onlyInMore;
            }).slice(0, __WEBPACK_IMPORTED_MODULE_5__providers_mainmenu__["a" /* CoreMainMenuProvider */].NUM_MAIN_HANDLERS);
            // Get only the handlers that don't appear in the main view.
            _this.handlers = [];
            handlers.forEach(function (handler) {
                if (mainHandlers.indexOf(handler) == -1) {
                    _this.handlers.push(handler);
                }
            });
            _this.handlersLoaded = _this.menuDelegate.areHandlersLoaded();
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
    };
    /**
     * Page destroyed.
     */
    CoreMainMenuMorePage.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Load the site info required by the view.
     */
    CoreMainMenuMorePage.prototype.loadSiteInfo = function () {
        var _this = this;
        var currentSite = this.sitesProvider.getCurrentSite(), config = currentSite.getStoredConfig();
        this.siteInfo = currentSite.getInfo();
        this.logoutLabel = 'core.mainmenu.' + (config && config.tool_mobile_forcelogout == '1' ? 'logout' : 'changesite');
        this.showWeb = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_website');
        this.showHelp = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_help');
        currentSite.getDocsUrl().then(function (docsUrl) {
            _this.docsUrl = docsUrl;
        });
        this.mainMenuProvider.getCustomMenuItems().then(function (items) {
            _this.customItems = items;
        });
    };
    /**
     * Open a handler.
     *
     * @param {CoreMainMenuHandlerData} handler Handler to open.
     */
    CoreMainMenuMorePage.prototype.openHandler = function (handler) {
        this.navCtrl.push(handler.page, handler.pageParams);
    };
    /**
     * Open an embedded custom item.
     *
     * @param {CoreMainMenuCustomItem} item Item to open.
     */
    CoreMainMenuMorePage.prototype.openItem = function (item) {
        this.navCtrl.push('CoreViewerIframePage', { title: item.label, url: item.url });
    };
    /**
     * Open settings page.
     */
    CoreMainMenuMorePage.prototype.openPinSettingsPage = function () {
        this.navCtrl.push('ConfirmexistingpinPage');
    };
    /**
     * Open settings page.
     */
    CoreMainMenuMorePage.prototype.openSettings = function () {
        this.navCtrl.push('CoreSettingsListPage');
    };
    /**
     * Logout the user.
     */
    CoreMainMenuMorePage.prototype.logout = function () {
        this.sitesProvider.logout();
    };
    CoreMainMenuMorePage.prototype.customLogOutWithDelete = function () {
        var _this = this;
        // tslint:disable-next-line: no-console
        console.log(this.sites);
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
            }).catch(function (error) {
                //  this.logger.error('Error deleting site ' + site.id, error);
                _this.domUtils.showErrorModalDefault(error, 'Delete site failed.');
                _this.domUtils.showErrorModal('core.login.errordeletesite', true);
            });
        });
    };
    CoreMainMenuMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-mainmenu-more',template:/*ion-inline-start:"D:\FedCampusApp\src\core\mainmenu\pages\more\more.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="siteInfo.sitename"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <a ion-item core-user-link [userId]="siteInfo.userid">\n\n            <ion-avatar core-user-avatar [user]="siteInfo" item-start></ion-avatar>\n\n            <p>{{siteInfo.fullname}}</p>\n\n        </a>\n\n        <ion-item-divider></ion-item-divider>\n\n        <ion-item text-center *ngIf="(!handlers || !handlers.length) && !handlersLoaded">\n\n            <ion-spinner></ion-spinner>\n\n        </ion-item>\n\n        <a ion-item *ngFor="let handler of handlers" [ngClass]="[\'core-moremenu-handler\', handler.class]" (click)="openHandler(handler)" title="{{ handler.title | translate }}" detail-push>\n\n            <core-icon [name]="handler.icon" item-start></core-icon>\n\n            <p>{{ handler.title | translate}}</p>\n\n            <ion-badge item-end *ngIf="handler.showBadge" [hidden]="handler.loading || !handler.badge">{{handler.badge}}</ion-badge>\n\n            <ion-spinner item-end *ngIf="handler.showBadge && handler.loading"></ion-spinner>\n\n        </a>\n\n        <div *ngFor="let item of customItems" class="core-moremenu-customitem">\n\n            <a ion-item *ngIf="item.type != \'embedded\'" [href]="item.url" core-link [capture]="item.type == \'app\'" [inApp]="item.type == \'inappbrowser\'" title="{{item.label}}">\n\n                <core-icon [name]="item.icon" item-start></core-icon>\n\n                <p>{{item.label}}</p>\n\n            </a>\n\n            <a ion-item *ngIf="item.type == \'embedded\'" (click)="openItem(item)" title="{{item.label}}">\n\n                <core-icon [name]="item.icon" item-start></core-icon>\n\n                <p>{{item.label}}</p>\n\n            </a>\n\n        </div>\n\n        <a *ngIf="showWeb" ion-item [href]="siteInfo.siteurl" core-link autoLogin="yes" title="{{ \'core.mainmenu.website\' | translate }}">\n\n            <ion-icon name="globe" item-start></ion-icon>\n\n            <p>{{ \'core.mainmenu.website\' | translate }}</p>\n\n        </a>\n\n        <a *ngIf="showHelp" ion-item [href]="docsUrl" core-link autoLogin="no" title="{{ \'core.mainmenu.help\' | translate }}">\n\n            <ion-icon name="help-buoy" item-start></ion-icon>\n\n            <p>{{ \'core.mainmenu.help\' | translate }}</p>\n\n        </a>\n\n        <a ion-item (click)="openSettings()" title="{{ \'core.mainmenu.appsettings\' | translate }}">\n\n            <ion-icon name="cog" item-start></ion-icon>\n\n            <p>{{ \'core.mainmenu.appsettings\' | translate }}</p>\n\n        </a>\n\n        <a ion-item (click)="openPinSettingsPage()" title="{{ \'core.mainmenu.appsettings\' | translate }}">\n\n            <ion-icon name="lock" item-start></ion-icon>\n\n            <p>{{ \'core.login.custom.setpin.navtitle\' | translate }}</p>\n\n        </a>\n\n        <a ion-item (click)="customLogOutWithDelete()" title="{{ logoutLabel | translate }}">\n\n            <ion-icon name="log-out" item-start></ion-icon>\n\n            <p>{{ logoutLabel | translate }}</p>\n\n        </a>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FedCampusApp\src\core\mainmenu\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__["a" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_delegate__["a" /* CoreMainMenuDelegate */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_mainmenu__["a" /* CoreMainMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_8__core_login_providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */]])
    ], CoreMainMenuMorePage);
    return CoreMainMenuMorePage;
}());

//# sourceMappingURL=more.js.map

/***/ })

});
//# sourceMappingURL=24.js.map