import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/home/header/header.component';
import { ToolbarComponent } from './component/home/header/toolbar/toolbar.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { WindowService } from './service/window.service';
import { ServicesComponent } from './component/home/services/services.component';
import { ItemComponent } from './component/home/services/item/item.component';
import { TkButtonComponent } from './component/tk-button/tk-button.component';
import { PortfolioComponent } from './component/home/portfolio/portfolio.component';
import { CardListComponent } from './component/home/portfolio/card-list/card-list.component';
import { CardComponent } from './component/card/card.component';
import { NewsComponent } from './component/home/news/news.component';
import { NewsItemComponent } from './component/home/news/news-item/news-item.component';
import { AboutComponent } from './component/home/about/about.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';
import { HomeComponent } from './component/home/home.component';

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
    NewsItemComponent,
    AboutComponent,
    FooterComponent,
    ServiceDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
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
