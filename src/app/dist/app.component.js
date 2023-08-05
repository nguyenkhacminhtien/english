"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = /** @class */ (function () {
    function AppComponent(httpClear, authService, route, cookie, shareData) {
        this.httpClear = httpClear;
        this.authService = authService;
        this.route = route;
        this.cookie = cookie;
        this.shareData = shareData;
        this.isLoggedIn = false;
        this.Loggedsuccessfully = [];
        this.showUserInfo = false;
        this.userSelectControl = new forms_1.FormControl();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn().subscribe(function (loggedIn) {
            _this.isLoggedIn = loggedIn;
        });
        //  if(this.shareData.isUserDataReady()) {
        //   this.userData = this.shareData.getUserData();
        //  }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            encapsulation: core_1.ViewEncapsulation.Emulated
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
