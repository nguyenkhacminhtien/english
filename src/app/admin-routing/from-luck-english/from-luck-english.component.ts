import { Component, OnInit,  } from '@angular/core';
import { HttpApiService } from '../../Service/http-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-from-luck-english',
  templateUrl: './from-luck-english.component.html',
  styleUrls: ['./from-luck-english.component.css'],

})
export class FromLuckEnglishComponent implements OnInit  {
  [x: string]: any;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['wordLuckValue', 'grammarValue', 'translationValue', 'wordId',];
  public currentPage: number = 1;
  private routeSubscription!: Subscription;
  public isLoggedIn: boolean = false;
  public totalPages: number = 1
  constructor (
    private httpClear : HttpApiService,
    private cookie: CookieService,
    private authService: AuthService,
  ){}

  ngOnInit(): void {
      this.loadDataEnglish();
      this.authService.isLoggedIn().subscribe((loggedIn) => {
        this.isLoggedIn = loggedIn;
       })
  }

  loadDataEnglish(): void {
    const token = this.cookie.get('token');
    if (token) {
      this.httpClear.getDataEnglish(this.currentPage).subscribe(data => {
        this.dataSource = data.result.list;
        this.totalPages = data.result.totalPages;
        if(typeof data.result.totalPages === 'number') {
          console.log('đúng')
        } else {
          console.log('sai')
        }
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

    if (page === 'previous' && this.totalPages > 1) {
      this.currentPage--;
      this.loadDataEnglish();
    }
    if(page === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadDataEnglish()

    }
  }

  isPreviousDisabled(): boolean {
    return this.currentPage <= 1 || this.totalPages <= 1;
  }

  isNextDisabled(): boolean {
    return this.currentPage === this.totalPages;
  }

}
