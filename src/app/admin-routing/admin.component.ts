import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation   } from '@angular/core';
import { HttpApiService } from '../Service/http-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../Service/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})

export class AdminComponent implements OnInit  {
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
 }

}
