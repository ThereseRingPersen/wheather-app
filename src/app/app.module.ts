import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    HttpClient,
    MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
