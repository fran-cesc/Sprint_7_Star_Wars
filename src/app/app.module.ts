import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StarshipsPageComponent } from './components/starships/starshipsPage.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ShipCardComponent } from './components/ship-card/ship-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsPageComponent,
    MainPageComponent,
    AuthPageComponent,
    WelcomePageComponent,
    NavbarComponent,
    ShipCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
