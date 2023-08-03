import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/httpApi-login/auth.service';
import { HttpApiService } from '../Service/http-api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public isLoggedIn: boolean = false;
 public Loggedsuccessfully: any[] = []
 public showUserInfo = false;
 constructor (
  private authService: AuthService,
  private httpClear: HttpApiService,
  private cookie: CookieService,
  ) {}

 ngOnInit(): void {
    this.isLoggedIn = this.authService.getIsLoggedIn();
 }

   toggleUserInfo(event: Event) {
    event.stopPropagation();
    this.showUserInfo = !this.showUserInfo;
    console.log("toggleUserInfo() is called!");
  }
}

