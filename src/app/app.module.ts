import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuBarSelectComponent } from './menu-bar-select/menu-bar-select.component';
import { MenuBarFilterComponent } from './menu-bar-filter/menu-bar-filter.component';
import { MenuBarSelfcreatedComponent } from './menu-bar-selfcreated/menu-bar-selfcreated.component';
import { MenuBarAddComponent } from './menu-bar-add/menu-bar-add.component';
import { NewsBlockComponent } from './news-block/news-block.component';
import { MoreComponent } from './more/more.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { ManageBlockComponent } from './manage-block/manage-block.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { AboutComponent } from './about/about.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {LoginService} from "./services/login.service";
import {NewsService} from "./services/news.service";
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes =[
  { path: '', component: NewsPageComponent},
  { path: 'about', component: AboutComponent, pathMatch:'full'},
  { path: 'login', component: LoginPageComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuBarComponent,
    MenuBarSelectComponent,
    MenuBarFilterComponent,
    MenuBarSelfcreatedComponent,
    MenuBarAddComponent,
    NewsBlockComponent,
    MoreComponent,
    NewsCardComponent,
    ManageBlockComponent,
    NewsPageComponent,
    AboutComponent,
    LoginPageComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    NewsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
