import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Service/httpApi-login/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import HttpApiLoginService from 'src/app/Service/httpApi-login/httpApi-login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  public formGroup!: FormGroup
  public checkErr = ''

  constructor(
    private auth: AuthService,
    private router: Router,
    private httpCliear: HttpApiLoginService
  ) {
     this.formGroup = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(9)]),
      password: new FormControl('', [Validators.required,
      Validators.pattern('^(?=.*[a-zà-ỹ])(?=.*[A-ZÀ-Ỹ])(?=.*[!@#\\$%^&*()_+\\[\\]{};\\\'":|,.<>?]).{8,}$')      ]),
    });
  }
  get userName() {return this.formGroup.get('userName');}
  get phone() {return this.formGroup.get('phone');}

  ngOnInit(): void {
    if (this.auth.getIsLoggedIn()) {
      this.router.navigate(['ListEnglish']);
  }
  }


  public headlogin(): void {
    if (this.formGroup.invalid) {
      this.checkErr = 'Thông tin đăng nhập không đầy đủ.';
      return;
    }

    const data = this.formGroup.value;
    this.auth.login(data).subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['ListEnglish']);
        } else {
          this.checkErr = 'Đăng nhập thất bại.';
        }
      },
      error: (err) => {
        this.checkErr = 'Đăng nhập thất bại.';
        console.error('Lỗi Đăng nhập:', err);
      },
    });
  }

}
