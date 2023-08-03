"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpApiService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var HttpApiService = /** @class */ (function () {
    function HttpApiService(httpClient, getCookie) {
        this.httpClient = httpClient;
        this.getCookie = getCookie;
        this.REST_API_SERVER = 'http://localhost:3000';
        this.token = this.getCookie.get('token');
    }
    Object.defineProperty(HttpApiService.prototype, "httpOptions", {
        get: function () {
            return {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'token': this.token
                })
            };
        },
        enumerable: false,
        configurable: true
    });
    // post create English
    HttpApiService.prototype.createEnglish = function (data) {
        var url = this.REST_API_SERVER + "/create";
        return this.httpClient.post(url, data, this.httpOptions);
    };
    // get data english
    HttpApiService.prototype.getDataEnglish = function (currentPage) {
        var url = this.REST_API_SERVER + "/listEnglish/" + currentPage;
        return this.httpClient.get(url, this.httpOptions);
    };
    // delete English
    HttpApiService.prototype.deletaEnglish = function (wordId) {
        var url = this.REST_API_SERVER + "/deleteEnglish/" + wordId;
        return this.httpClient["delete"](url, this.httpOptions);
    };
    HttpApiService.prototype.logged = function () {
        var url = this.REST_API_SERVER + "/login/successfully";
        return this.httpClient.get(url, this.httpOptions);
    };
    HttpApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpApiService);
    return HttpApiService;
}());
exports.HttpApiService = HttpApiService;
