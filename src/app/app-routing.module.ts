import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsPageComponent} from "./news-page/news-page.component";

const routes: Routes = [
  {path: '', component: NewsPageComponent},
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
