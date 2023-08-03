import { Component, OnInit,  } from '@angular/core';
import { HttpApiService } from '../../Service/http-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';
import { MatTableDataSource } from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Service/httpApi-login/auth.service';
@Component({
  selector: 'app-from-luck-english',
  templateUrl: './from-luck-english.component.html',
  styleUrls: ['./from-luck-english.component.css'],

})
export class FromLuckEnglishComponent implements OnInit  {
  [x: string]: any;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['wordLuckValue', 'grammarValue', 'translationValue', 'wordId',];
  public currentPage: any = 1;
  private routeSubscription!: Subscription;
  public isLoggedIn: boolean = false;
  constructor (
    private httpClear : HttpApiService,
    private cookie: CookieService,
    private authService: AuthService,
  ){}

  ngOnInit(): void {
      this.loadDataEnglish();
      this.isLoggedIn = this.authService.getIsLoggedIn()
  }

  loadDataEnglish(): void {
    // Gọi API để lấy dữ liệu English
    const token = this.cookie.get('token');
    if (token) {
      this.httpClear.getDataEnglish(this.currentPage).subscribe(data => {
        this.dataSource = data.result.list;
        console.log('data:', data);
      })
    }
  }


  deleteEnglish(data: number) {
    this.httpClear.deletaEnglish(data).subscribe(data => {
      console.log('data:', data);
      window.location.reload();
    })
  }

  public onclickPage(page: any) {
    if (page === 'previous') {
      this.currentPage--;
      this.loadDataEnglish();

      if (this.currentPage === 1) {
        $('.btn-dispatch').addClass('dispatch');
      } else {
        $('.btn-dispatch').removeClass('dispatch');
      }
    }
    if(page === 'next') {
      this.currentPage++;
      this.loadDataEnglish()
    }
  }

}
