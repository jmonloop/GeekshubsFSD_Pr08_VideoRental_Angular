import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HambModalComponent } from './components/hamb-modal/hamb-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Materials} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HambModalComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Materials,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
