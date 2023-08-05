import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import HttpApiLoginService from './httpApi-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.getIsLoggedIn());
  constructor(
    private cookieService: CookieService,
    private httpClient: HttpApiLoginService,
  ) {}

  public getIsLoggedIn(): boolean {
    return !!this.cookieService.get('token');
  }

  public isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  public login(data: any): Observable<boolean> {
    if (this.getIsLoggedIn()) {
      this.isLoggedInSubject.next(true);
      return of(true);
    }
    return this.httpClient.postlogin(data).pipe(
      tap((response) => {
        const token = response;

        if (!token) {
          throw new Error('Token không hợp lệ hoặc không được trả về từ server.');
        }

        const tokenString = typeof token === 'object' || typeof token === 'number' ? JSON.stringify(token) : token;
        this.cookieService.set(this.tokenKey, tokenString);
        this.isLoggedInSubject.next(true);
        return true;
      }),
      catchError((error) => {
        console.log('Lỗi khi gọi API postlogin:', error);
        return of(false);
      })
    );
  }

  public logout(): void {
    this.cookieService.delete(this.tokenKey);
    this.isLoggedInSubject.next(false);
  }
}
