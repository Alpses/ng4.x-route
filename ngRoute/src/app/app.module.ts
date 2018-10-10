import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {GetHeroesService} from './get-heroes.service';
import { MessagesComponent } from './messages/messages.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetHeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
