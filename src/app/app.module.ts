import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [AppComponent, MainInfoComponent, SearchBoxComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
