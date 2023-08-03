"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(cookieService, httpClient) {
        this.cookieService = cookieService;
        this.httpClient = httpClient;
        this.isLoggedIn = false;
        this.checkLoginStatus();
    }
    AuthService.prototype.checkLoginStatus = function () {
        var token = this.cookieService.get('token');
        this.isLoggedIn = !!token;
    };
    AuthService.prototype.getIsLoggedIn = function () {
        return this.isLoggedIn;
    };
    AuthService.prototype.login = function (data) {
        var _this = this;
        return this.httpClient.postlogin(data).pipe(rxjs_1.tap(function (response) {
            var token = response;
            if (!token) {
                throw new Error('Token không hợp lệ hoặc không được trả về từ server.');
            }
            var tokenString = typeof token === 'object' || typeof token === 'number' ? JSON.stringify(token) : token;
            _this.cookieService.set('token', tokenString);
            _this.isLoggedIn = true;
        }), rxjs_1.catchError(function (error) {
            console.log('Lỗi khi gọi API postlogin:', error);
            return rxjs_1.of(false);
        }), rxjs_1.tap(function () {
            _this.isLoggedIn = true;
        }));
    };
    AuthService.prototype.logout = function () {
        this.cookieService["delete"]('token');
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
