import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import {Slider2Component} from './slider2/slider2.component';
// import {LogoComponent} from './logo/logo.component';
import {SocialIconsComponent} from './social-icons/social-icons.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {CarouselModule} from 'angular4-carousel';
import {appRouting} from './app.routing';
import {ContactComponent} from './contact/contact.component';
import { MulticolumnsliderComponent } from './multicolumnslider/multicolumnslider.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FooterComponent,
    // Slider2Component,
    // LogoComponent,
    SocialIconsComponent,
    NavbarComponent,
    ContactComponent,
    MulticolumnsliderComponent,
    BrowserAnimationsModule,
    this.MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouting),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static MdButtonModule: any;
}
