"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var table_1 = require("@angular/material/table");
var select_1 = require("@angular/material/select");
var from_luck_english_component_1 = require("./from-luck-english/from-luck-english.component");
var create_english_component_1 = require("./create-english/create-english.component");
var admin_component_1 = require("./admin.component");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                from_luck_english_component_1.FromLuckEnglishComponent,
                create_english_component_1.CreateEnglishComponent,
                admin_component_1.AdminComponent,
            ],
            imports: [
                common_1.CommonModule,
                form_field_1.MatFormFieldModule,
                select_1.MatSelectModule,
                table_1.MatTableModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
