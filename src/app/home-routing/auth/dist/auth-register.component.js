"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthRegiserComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AuthRegiserComponent = /** @class */ (function () {
    function AuthRegiserComponent(auth, router, httpCliear) {
        this.auth = auth;
        this.router = router;
        this.httpCliear = httpCliear;
        this.checkErr = '';
        this.formGroup = new forms_1.FormGroup({
            userName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required,
                forms_1.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/),]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            phone: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(12), forms_1.Validators.minLength(9)])
        });
    }
    Object.defineProperty(AuthRegiserComponent.prototype, "userName", {
        get: function () { return this.formGroup.get('userName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthRegiserComponent.prototype, "password", {
        get: function () { return this.formGroup.get('password'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthRegiserComponent.prototype, "email", {
        get: function () { return this.formGroup.get('email'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthRegiserComponent.prototype, "phone", {
        get: function () { return this.formGroup.get('phone'); },
        enumerable: false,
        configurable: true
    });
    AuthRegiserComponent.prototype.ngOnInit = function () {
    };
    AuthRegiserComponent.prototype.regsiter = function () {
        var _this = this;
        if (this.formGroup.invalid) {
            this.checkErr = 'Thông tin đăng kí không đầy đủ.';
            return;
        }
        var data = this.formGroup.value;
        this.httpCliear.postRegister(data).subscribe({
            next: function (response) {
                console.log('Đăng Kí Thành Công');
            },
            error: function (error) {
                _this.checkErr = 'Số điện thoại đã được đăng kí';
            }
        });
    };
    AuthRegiserComponent = __decorate([
        core_1.Component({
            selector: 'app-auth-register',
            templateUrl: './auth-register.component.html',
            styleUrls: ['./auth.component.css']
        })
    ], AuthRegiserComponent);
    return AuthRegiserComponent;
}());
exports.AuthRegiserComponent = AuthRegiserComponent;
