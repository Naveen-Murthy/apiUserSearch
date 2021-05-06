import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { UserDataComponent } from './user-data/user-data.component';
import { UserIndividualDataComponent } from './user-individual-data/user-individual-data.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserIndividualDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
