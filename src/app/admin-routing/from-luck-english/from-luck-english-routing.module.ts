import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromLuckEnglishComponent } from './from-luck-english.component';

const routes: Routes = [
  { path: '', component: FromLuckEnglishComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FromLuckEnglishRoutingModule { }
