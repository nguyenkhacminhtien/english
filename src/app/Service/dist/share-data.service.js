"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShareDataService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ShareDataService = /** @class */ (function () {
    function ShareDataService(authService) {
        this.authService = authService;
        this.userDataSubject = new rxjs_1.BehaviorSubject(null);
        if (this.authService.isLoggedIn()) {
            var storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                this.userDataSubject.next(JSON.parse(storedUserData));
            }
        }
    }
    ShareDataService.prototype.setUserData = function (userData) {
        this.userDataSubject.next(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
    };
    ShareDataService.prototype.getUserData = function () {
        return this.userDataSubject.asObservable();
    };
    ShareDataService.prototype.clearUserData = function () {
        this.userDataSubject.next(null);
        localStorage.removeItem('userData');
    };
    ShareDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ShareDataService);
    return ShareDataService;
}());
exports.ShareDataService = ShareDataService;
