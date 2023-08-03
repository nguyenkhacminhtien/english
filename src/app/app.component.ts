import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation   } from '@angular/core';
import { HttpApiService } from './Service/http-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './Service/httpApi-login/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppComponent implements OnInit  {
 public isLoggedIn: boolean = false;
 public Loggedsuccessfully: any[] = []
 public showUserInfo = false;
 userSelectControl = new FormControl();
 constructor(
  private httpClear : HttpApiService,
  private authService: AuthService,
  private route: ActivatedRoute,
  private cookie: CookieService,
 ) {}
 ngOnInit(): void {
  // this.isLoggedIn = this.authService.getIsLoggedIn();
  // if (this.isLoggedIn) {
  //   this.logindata();
  // }
 }


public async logout() {
  const token = await this.cookie.delete('token');
  this.isLoggedIn = false;
 }

 toggleUserInfo(event: Event) {
  event.stopPropagation();
  this.showUserInfo = !this.showUserInfo;
}
 home()  {

 }
}
