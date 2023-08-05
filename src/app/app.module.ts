import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { AdminModule } from './admin-routing/admin.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home-routing/home.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpApiService } from './Service/http-api.service';
import { AuthService } from './Service/auth.service';
import { HttpApiLoginService } from './Service/httpApi-login.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthComponent } from './home-routing/login/auth.component';
import { ShareDataService } from './Service/share-data.service';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    RouterModule,
    HomeModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, HttpApiService, HttpApiLoginService, CookieService, ShareDataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
