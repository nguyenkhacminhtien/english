"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_component_1 = require("./home.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var table_1 = require("@angular/material/table");
var select_1 = require("@angular/material/select");
var auth_register_component_1 = require("./register/auth-register.component");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent,
                auth_register_component_1.AuthRegiserComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                table_1.MatTableModule,
                select_1.MatSelectModule,
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
