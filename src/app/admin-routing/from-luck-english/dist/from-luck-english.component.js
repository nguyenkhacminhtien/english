"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FromLuckEnglishComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var FromLuckEnglishComponent = /** @class */ (function () {
    function FromLuckEnglishComponent(httpClear, cookie, authService) {
        this.httpClear = httpClear;
        this.cookie = cookie;
        this.authService = authService;
        this.dataSource = new table_1.MatTableDataSource([]);
        this.displayedColumns = ['wordLuckValue', 'grammarValue', 'translationValue', 'wordId',];
        this.currentPage = 1;
        this.isLoggedIn = false;
        this.totalPages = 1;
    }
    FromLuckEnglishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadDataEnglish();
        this.authService.isLoggedIn().subscribe(function (loggedIn) {
            _this.isLoggedIn = loggedIn;
        });
    };
    FromLuckEnglishComponent.prototype.loadDataEnglish = function () {
        var _this = this;
        var token = this.cookie.get('token');
        if (token) {
            this.httpClear.getDataEnglish(this.currentPage).subscribe(function (data) {
                _this.dataSource = data.result.list;
                _this.totalPages = data.result.totalPages;
                if (typeof data.result.totalPages === 'number') {
                    console.log('đúng');
                }
                else {
                    console.log('sai');
                }
                console.log('data:', data);
            });
        }
    };
    FromLuckEnglishComponent.prototype.deleteEnglish = function (data) {
        this.httpClear.deletaEnglish(data).subscribe(function (data) {
            console.log('data:', data);
            window.location.reload();
        });
    };
    FromLuckEnglishComponent.prototype.onclickPage = function (page) {
        if (page === 'previous' && this.totalPages > 1) {
            this.currentPage--;
            this.loadDataEnglish();
        }
        if (page === 'next' && this.currentPage < this.totalPages) {
            this.currentPage++;
            this.loadDataEnglish();
        }
    };
    FromLuckEnglishComponent.prototype.isPreviousDisabled = function () {
        return this.currentPage <= 1 || this.totalPages <= 1;
    };
    FromLuckEnglishComponent.prototype.isNextDisabled = function () {
        return this.currentPage === this.totalPages;
    };
    FromLuckEnglishComponent = __decorate([
        core_1.Component({
            selector: 'app-from-luck-english',
            templateUrl: './from-luck-english.component.html',
            styleUrls: ['./from-luck-english.component.css']
        })
    ], FromLuckEnglishComponent);
    return FromLuckEnglishComponent;
}());
exports.FromLuckEnglishComponent = FromLuckEnglishComponent;
