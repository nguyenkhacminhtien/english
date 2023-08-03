import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation   } from '@angular/core';
import { HttpApiService } from '../Service/http-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../Service/httpApi-login/auth.service';
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
  this.isLoggedIn = this.authService.getIsLoggedIn();
  if (this.isLoggedIn) {
    this.logindata();
  }
 }
public logindata() {
  this.httpClear.logged().subscribe(data => {
   this.Loggedsuccessfully = data.list;
   console.log('data', data);
  })
}


public async logout() {
  const token = await this.cookie.delete('token');
  this.isLoggedIn = false;
 }

 toggleUserInfo(event: Event) {
  event.stopPropagation();
  this.showUserInfo = !this.showUserInfo;
}

 handleItemClick(event: MouseEvent) {
  // Lấy phần tử được click
  const clickedElement = event.target as HTMLElement;

  // Kiểm tra nếu phần tử được click là hình ảnh <img>
  if (clickedElement.tagName === 'IMG') {
    // Gọi hàm toggleUserInfo() chỉ khi click vào hình ảnh
    this.toggleUserInfo(event);
  }
}
 home()  {

 }
}
