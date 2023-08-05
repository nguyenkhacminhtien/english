"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_1 = require("./Service/auth.guard");
var admin_component_1 = require("./admin-routing/admin.component");
var auth_component_1 = require("./home-routing/login/auth.component");
var home_component_1 = require("./home-routing/home.component");
var from_luck_english_component_1 = require("./admin-routing/from-luck-english/from-luck-english.component");
var create_english_component_1 = require("./admin-routing/create-english/create-english.component");
var product_component_1 = require("./admin-routing/product/product.component");
var routes = [
    { path: 'login', component: auth_component_1.AuthComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard], canActivateChild: [auth_guard_1.AuthGuard], children: [] },
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [auth_guard_1.AuthGuard], canActivateChild: [auth_guard_1.AuthGuard], children: [
            { path: 'English', component: from_luck_english_component_1.FromLuckEnglishComponent, runGuardsAndResolvers: 'always' },
            { path: 'CreateEnglish', component: create_english_component_1.CreateEnglishComponent, runGuardsAndResolvers: 'always' },
            { path: 'Product', component: product_component_1.ProductComponent, runGuardsAndResolvers: 'always' },
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
