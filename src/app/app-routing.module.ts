import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-routing/admin.component';
import { AuthComponent } from './home-routing/auth/login/auth.component';

const routes: Routes = [
  // { path: 'admin', loadChildren: () => import('./admin-routing/admin.module').then(m => m.AdminModule) },
   {path: 'login', component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






