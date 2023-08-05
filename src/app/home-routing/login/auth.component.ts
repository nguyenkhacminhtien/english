import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import HttpApiLoginService from 'src/app/Service/httpApi-login.service';
import { HttpApiService } from 'src/app/Service/http-api.service';
import { Observable, switchMap, tap } from 'rxjs';
import { ShareDataService } from 'src/app/Service/share-data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  public formGroup!: FormGroup
  public checkErr = ''
  public isLoggedIn: boolean = false;
  public userData: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private httpCliear: HttpApiLoginService,
    private httpAipService: HttpApiService,
    private sharedata: ShareDataService,
  ) {
     this.formGroup = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(9)]),
      password: new FormControl('', [Validators.required,
      Validators.pattern('^(?=.*[a-zà-ỹ])(?=.*[A-ZÀ-Ỹ])(?=.*[!@#\\$%^&*()_+\\[\\]{};\\\'":|,.<>?]).{8,}$')]),
    });
  }
  get userName() {return this.formGroup.get('userName');}
  get phone() {return this.formGroup.get('phone');}

  ngOnInit(): void {
    this.auth.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
     })
  }


  public headlogin(): void {
    if (this.formGroup.invalid) {
      this.checkErr = 'Thông tin đăng nhập không đầy đủ.';
      return;
    }

    const data = this.formGroup.value;
    this.auth.login(data).pipe(
      tap((isLoggedIn) => {
        console.log(isLoggedIn)
      }),
      switchMap(() => this.getDataUser())
    ).subscribe({
      next: (userData) => {
        console.log({message: userData})
        this.sharedata.setUserData(userData.list[0])
      },
      error: (err) => {
        this.checkErr = 'Đăng nhập thất bại.';
        console.error('Lỗi Đăng nhập:', err);
      }
    });
  }

  public getDataUser(): Observable<any> {
    return this.httpAipService.logged();
  }
}


