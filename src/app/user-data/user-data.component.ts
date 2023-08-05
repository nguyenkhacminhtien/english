import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../Service/share-data.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
 public userData: any;
 public isLoggedIn: boolean = false
 constructor(
  private shareData: ShareDataService,
  private authService: AuthService
  ){}
  ngOnInit(): void {
      this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
     })

      this.shareData.getUserData().subscribe((userData) => {
      this.userData = userData;
      console.log({ userdata: this.userData });
    });


  }

  public async logout() {
    this.authService.logout();
    this.shareData.clearUserData()
   }

}
