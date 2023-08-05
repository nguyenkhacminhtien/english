import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation   } from '@angular/core';
import { HttpApiService } from './Service/http-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './Service/auth.service';
import { FormControl } from '@angular/forms';
import { ShareDataService } from './Service/share-data.service';
import { Observable } from 'rxjs';

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
 userData: any;
 userSelectControl = new FormControl();
 constructor(
  private httpClear : HttpApiService,
  private authService: AuthService,
  private route: ActivatedRoute,
  private cookie: CookieService,
  private shareData: ShareDataService,
 ) {}
 ngOnInit(): void {
  this.authService.isLoggedIn().subscribe((loggedIn) => {
  this.isLoggedIn = loggedIn;
 })
  //  if(this.shareData.isUserDataReady()) {
  //   this.userData = this.shareData.getUserData();
  //  }
 }


// public async logout() {
//   this.authService.logout();
//  }

}
