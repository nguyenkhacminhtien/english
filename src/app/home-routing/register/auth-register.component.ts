import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import HttpApiLoginService from 'src/app/Service/httpApi-login.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})

export class AuthRegiserComponent implements OnInit {
  public formGroup!: FormGroup
  public checkErr = ''

  constructor(
    private auth: AuthService,
    private router: Router,
    private httpCliear: HttpApiLoginService
  ) {
     this.formGroup = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.required]),
      password: new FormControl('', [Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/),      ]),
      email: new FormControl('', [Validators.required, Validators.email ]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(9)])
    });
  }
  get userName() {return this.formGroup.get('userName');}
  get password() {return this.formGroup.get('password');}
  get email() {return this.formGroup.get('email');}
  get phone() {return this.formGroup.get('phone');}

  ngOnInit(): void {

  }

  public regsiter(): void {
    if (this.formGroup.invalid) {
      this.checkErr = 'Thông tin đăng kí không đầy đủ.';
      return;
    }
    var data = this.formGroup.value;
    this.httpCliear.postRegister(data).subscribe({
      next: (response) => {
        console.log('Đăng Kí Thành Công');
      },
      error: (error) => {
        this.checkErr = 'Số điện thoại đã được đăng kí';
      }
    });
  }

}
