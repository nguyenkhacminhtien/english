"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(auth, router, httpCliear) {
        this.auth = auth;
        this.router = router;
        this.httpCliear = httpCliear;
        this.checkErr = '';
        this.formGroup = new forms_1.FormGroup({
            phone: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(12), forms_1.Validators.minLength(9)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required,
                forms_1.Validators.pattern('^(?=.*[a-zà-ỹ])(?=.*[A-ZÀ-Ỹ])(?=.*[!@#\\$%^&*()_+\\[\\]{};\\\'":|,.<>?]).{8,}$')])
        });
    }
    Object.defineProperty(AuthComponent.prototype, "userName", {
        get: function () { return this.formGroup.get('userName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthComponent.prototype, "phone", {
        get: function () { return this.formGroup.get('phone'); },
        enumerable: false,
        configurable: true
    });
    AuthComponent.prototype.ngOnInit = function () {
        if (this.auth.getIsLoggedIn()) {
            this.router.navigate(['ListEnglish']);
        }
    };
    AuthComponent.prototype.headlogin = function () {
        var _this = this;
        if (this.formGroup.invalid) {
            this.checkErr = 'Thông tin đăng nhập không đầy đủ.';
            return;
        }
        var data = this.formGroup.value;
        this.auth.login(data).subscribe({
            next: function (isLoggedIn) {
                if (isLoggedIn) {
                    _this.router.navigate(['ListEnglish']);
                }
                else {
                    _this.checkErr = 'Đăng nhập thất bại.';
                }
            },
            error: function (err) {
                _this.checkErr = 'Đăng nhập thất bại.';
                console.error('Lỗi Đăng nhập:', err);
            }
        });
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css']
        })
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
