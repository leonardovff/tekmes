import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ToolbarComponent } from './component/header/toolbar/toolbar.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { WindowService } from './service/window.service';
import { ServicesComponent } from './component/services/services.component';
import { ItemComponent } from './component/services/item/item.component';
import { TkButtonComponent } from './component/tk-button/tk-button.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { CardListComponent } from './component/portfolio/card-list/card-list.component';
import { CardComponent } from './component/card/card.component';
import { NewsComponent } from './component/news/news.component';
import { NewsItemComponent } from './component/news/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    PaginationComponent,
    ServicesComponent,
    ItemComponent,
    TkButtonComponent,
    PortfolioComponent,
    CardListComponent,
    CardComponent,
    NewsComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDTdga1yF8R130Asi8Tm224xX5DynYUu54",
      authDomain: "tekmes-6f3e2.firebaseapp.com",
      databaseURL: "https://tekmes-6f3e2.firebaseio.com",
      storageBucket: "tekmes-6f3e2.appspot.com",
      messagingSenderId: "95932860564"
    })
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
