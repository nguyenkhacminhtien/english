import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'token';

  constructor(private cookieService: CookieService) {}

  public getToken(): string {
    return this.cookieService.get(this.tokenKey);
  }
}
