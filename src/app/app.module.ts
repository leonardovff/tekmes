import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ToolbarComponent } from './component/header/toolbar/toolbar.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { WindowService } from './service/window.service';
import { ServicesComponent } from './component/services/services.component';
import { ItemComponent } from './component/services/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    PaginationComponent,
    ServicesComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
