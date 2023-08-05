import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Service/auth.guard';
import { AdminComponent } from './admin-routing/admin.component';
import { AuthComponent } from './home-routing/login/auth.component';
import { HomeComponent } from './home-routing/home.component';
import { FromLuckEnglishComponent } from './admin-routing/from-luck-english/from-luck-english.component';
import { CreateEnglishComponent } from './admin-routing/create-english/create-english.component';
import { ProductComponent } from './admin-routing/product/product.component';

const routes: Routes = [
   {path: 'login', component: AuthComponent},
   {path: 'home', component: HomeComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
   ]},
   {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
   {path: 'English', component: FromLuckEnglishComponent, runGuardsAndResolvers: 'always'},
   {path: 'CreateEnglish', component: CreateEnglishComponent, runGuardsAndResolvers: 'always'},
   {path: 'Product', component: ProductComponent, runGuardsAndResolvers: 'always'},
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






