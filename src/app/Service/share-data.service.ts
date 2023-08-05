import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  constructor(private authService: AuthService) {
   if(this.authService.isLoggedIn()) {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
    this.userDataSubject.next(JSON.parse(storedUserData));
  }
   }
  }

  private userDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  setUserData(userData: any) {
    this.userDataSubject.next(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  getUserData(): Observable<any> {
    return this.userDataSubject.asObservable();
  }

  clearUserData() {
    this.userDataSubject.next(null);
    localStorage.removeItem('userData');
  }
}
