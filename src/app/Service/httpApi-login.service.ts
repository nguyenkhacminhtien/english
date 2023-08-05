import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { TokenService } from './TokenService ';

@Injectable({
  providedIn: 'root'
})
export class HttpApiLoginService {
  [x: string]: any;
  constructor(
    private httpClient: HttpClient,
    private cookie: CookieService,
    private tokenService: TokenService
    ) {}
  private REST_API_SERVER = 'http://localhost:3000';

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
  public postRegister(data: any) : Observable<any> {
    const url = `${this.REST_API_SERVER}/register`;
    return this.httpClient.post<any>(url, data)
  }
  //  postLogin
  public postlogin(data: any) : Observable<any> {
    const url = `${this.REST_API_SERVER}/login`;
    return this.httpClient.post<any>(url, data)
  }


}

export default HttpApiLoginService;
