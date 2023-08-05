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
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService(cookieService, httpClient) {
        this.cookieService = cookieService;
        this.httpClient = httpClient;
        this.tokenKey = 'token';
        this.isLoggedInSubject = new rxjs_1.BehaviorSubject(this.getIsLoggedIn());
    }
    AuthService.prototype.getIsLoggedIn = function () {
        return !!this.cookieService.get('token');
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.isLoggedInSubject.asObservable();
    };
    AuthService.prototype.login = function (data) {
        var _this = this;
        if (this.getIsLoggedIn()) {
            this.isLoggedInSubject.next(true);
            return rxjs_1.of(true);
        }
        return this.httpClient.postlogin(data).pipe(operators_1.tap(function (response) {
            var token = response;
            if (!token) {
                throw new Error('Token không hợp lệ hoặc không được trả về từ server.');
            }
            var tokenString = typeof token === 'object' || typeof token === 'number' ? JSON.stringify(token) : token;
            _this.cookieService.set(_this.tokenKey, tokenString);
            _this.isLoggedInSubject.next(true);
            return true;
        }), operators_1.catchError(function (error) {
            console.log('Lỗi khi gọi API postlogin:', error);
            return rxjs_1.of(false);
        }));
    };
    AuthService.prototype.logout = function () {
        this.cookieService["delete"](this.tokenKey);
        this.isLoggedInSubject.next(false);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
