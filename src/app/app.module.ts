import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AboutMeComponent } from './about-me/about-me.component';
import { WhatsNextComponent } from './whats-next/whats-next.component';
import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    WhatsNextComponent,
    HomeComponent,
    HowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //material design imports:
    BrowserAnimationsModule, MatSliderModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
