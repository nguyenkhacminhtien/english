"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpApiLoginService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var HttpApiLoginService = /** @class */ (function () {
    function HttpApiLoginService(httpClient, cookie, tokenService) {
        this.httpClient = httpClient;
        this.cookie = cookie;
        this.tokenService = tokenService;
        this.REST_API_SERVER = 'http://localhost:3000';
    }
    Object.defineProperty(HttpApiLoginService.prototype, "httpOptions", {
        get: function () {
            var token = this.tokenService.getToken();
            return {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'token': token
                })
            };
        },
        enumerable: false,
        configurable: true
    });
    // post create English
    HttpApiLoginService.prototype.postRegister = function (data) {
        var url = this.REST_API_SERVER + "/register";
        return this.httpClient.post(url, data);
    };
    //  postLogin
    HttpApiLoginService.prototype.postlogin = function (data) {
        var url = this.REST_API_SERVER + "/login";
        return this.httpClient.post(url, data);
    };
    HttpApiLoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpApiLoginService);
    return HttpApiLoginService;
}());
exports.HttpApiLoginService = HttpApiLoginService;
exports["default"] = HttpApiLoginService;