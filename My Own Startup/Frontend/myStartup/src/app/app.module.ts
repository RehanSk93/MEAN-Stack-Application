import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BigFooterComponent } from './component/footer/big-footer/big-footer.component';
import { SmallFooterComponent } from './component/footer/small-footer/small-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BigFooterComponent,
    SmallFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
