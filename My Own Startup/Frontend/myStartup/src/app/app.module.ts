import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BigFooterComponent } from './component/footer/big-footer/big-footer.component';
import { SmallFooterComponent } from './component/footer/small-footer/small-footer.component';
import { BigBannerComponent } from './component/home/big-banner/big-banner.component';
import { AboutUsComponent } from './component/home/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BigFooterComponent,
    SmallFooterComponent,
    BigBannerComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
