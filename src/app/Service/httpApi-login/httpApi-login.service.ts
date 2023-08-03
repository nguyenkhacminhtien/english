import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpApiLoginService {
  private token: string;
  constructor(private httpClient: HttpClient, private cookie: CookieService) { this.token = this.cookie.get('token');}
  private REST_API_SERVER = 'http://localhost:3000';
  private get httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token
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
