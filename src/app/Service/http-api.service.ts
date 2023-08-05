import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { TokenService } from './TokenService ';


@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
    private getCookie: CookieService,
    private tokenService: TokenService,
  ) {}

  private get httpOptions() {
    const token = this.tokenService.getToken();
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
      })
    };
  }
    // post create English
  public createEnglish(data: any) : Observable<any> {
    const url = `${this.REST_API_SERVER}/create`;
    return this.httpClient.post<any>(url, data, this.httpOptions)
  }

  // get data english
  public getDataEnglish(currentPage: any) : Observable<any> {
    const url = `${this.REST_API_SERVER}/admin/English/${currentPage}`;
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  // delete English
  public deletaEnglish(wordId: number) : Observable<any> {
    const url = `${this.REST_API_SERVER}/deleteEnglish/${wordId}`;
    return this.httpClient.delete<any>(url, this.httpOptions)
  }

  public logged() : Observable<any> {
    const url = `${this.REST_API_SERVER}/login/successfully`;
    return this.httpClient.get<any>(url, this.httpOptions)
  }



}
