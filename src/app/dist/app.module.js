"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var table_1 = require("@angular/material/table");
var select_1 = require("@angular/material/select");
var app_component_1 = require("./app.component");
var admin_module_1 = require("./admin-routing/admin.module");
var router_1 = require("@angular/router");
var home_module_1 = require("./home-routing/home.module");
var app_routing_module_1 = require("./app-routing.module");
var http_api_service_1 = require("./Service/http-api.service");
var auth_service_1 = require("./Service/auth.service");
var httpApi_login_service_1 = require("./Service/httpApi-login.service");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var auth_component_1 = require("./home-routing/login/auth.component");
var share_data_service_1 = require("./Service/share-data.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                auth_component_1.AuthComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                admin_module_1.AdminModule,
                router_1.RouterModule,
                home_module_1.HomeModule,
                common_1.CommonModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                table_1.MatTableModule,
                select_1.MatSelectModule,
                animations_1.BrowserAnimationsModule,
            ],
            providers: [auth_service_1.AuthService, http_api_service_1.HttpApiService, httpApi_login_service_1.HttpApiLoginService, ngx_cookie_service_1.CookieService, share_data_service_1.ShareDataService,],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
