import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, of, tap } from 'rxjs';
import HttpApiLoginService from './httpApi-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor(
    private cookieService: CookieService,
    private httpClient: HttpApiLoginService
  ) {
    this.checkLoginStatus();
  }

  private checkLoginStatus() {
    const token = this.cookieService.get('token');
    this.isLoggedIn = !!token;
  }

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  public login(data: any): Observable<boolean> {
    return this.httpClient.postlogin(data).pipe(
      tap((response) => {
        const token = response;

        if (!token) {
          throw new Error('Token không hợp lệ hoặc không được trả về từ server.');
        }

        const tokenString = typeof token === 'object' || typeof token === 'number' ? JSON.stringify(token) : token;
        this.cookieService.set('token', tokenString);
        this.isLoggedIn = true;
      }),
      catchError((error) => {
        console.log('Lỗi khi gọi API postlogin:', error);
        return of(false);
      }),
      tap(() => {
        this.isLoggedIn = true;
      })
    );
  }

  public logout(): void {
    this.cookieService.delete('token');
    this.isLoggedIn = false;
  }
}
