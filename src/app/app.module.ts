import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

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
import { NewsLineComponent } from './news-line/news-line.component';

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
    NewsLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
