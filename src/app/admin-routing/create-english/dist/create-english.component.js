"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateEnglishComponent = void 0;
var core_1 = require("@angular/core");
var CreateEnglishComponent = /** @class */ (function () {
    function CreateEnglishComponent(httpClear, routes, route) {
        this.httpClear = httpClear;
        this.routes = routes;
        this.route = route;
        this.wordLuckValue = '';
        this.grammarValue = '';
        this.translationValue = '';
    }
    CreateEnglishComponent.prototype.saveData = function () {
        var _this = this;
        var data = {
            wordLuck: this.wordLuckValue,
            grammar: this.grammarValue,
            translation: this.translationValue
        };
        this.httpClear.createEnglish(data).subscribe(function (data) {
            console.log('data', data);
            _this.routes.navigate(['admin/English']);
        });
    };
    CreateEnglishComponent = __decorate([
        core_1.Component({
            selector: 'app-create-english',
            templateUrl: './create-english.component.html',
            styleUrls: ['./create-english.component.css']
        })
    ], CreateEnglishComponent);
    return CreateEnglishComponent;
}());
exports.CreateEnglishComponent = CreateEnglishComponent;
