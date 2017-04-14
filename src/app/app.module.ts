import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
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
import { ServiceDetailsEditComponent } from './component/service-details/service-details-edit/service-details-edit.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';


import { HomeComponent } from './component/home/home.component';
import { HeaderInternalComponent } from './component/internal/header-internal/header-internal.component';
import { ContentInternalComponent } from './component/internal/content-internal/content-internal.component';
import { FooterInternalComponent } from './component/internal/footer-internal/footer-internal.component';
import { MediumEditorDirective } from 'angular2-medium-editor/medium-editor.directive';
import { LoginComponent } from './component/login/login.component';
import { UploadImagesService } from './service/upload-images.service';


const firebaseConfig = {
  apiKey: "AIzaSyDTdga1yF8R130Asi8Tm224xX5DynYUu54",
  authDomain: "tekmes-6f3e2.firebaseapp.com",
  databaseURL: "https://tekmes-6f3e2.firebaseio.com",
  storageBucket: "tekmes-6f3e2.appspot.com",
  messagingSenderId: "95932860564"
}

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
    ServiceDetailsEditComponent,
    HomeComponent,
    HeaderInternalComponent,
    ContentInternalComponent,
    FooterInternalComponent,
    MediumEditorDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [
    WindowService,
    AuthService,
    AuthGuard,
    UploadImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
