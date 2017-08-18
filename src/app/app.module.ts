import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//************************************Services************************************

import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';



import { routing } from './app.routing';

import * as $ from 'jquery';
import 'bootstrap';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import { AuthService } from './providers/auth.service';
import * as firebase from 'firebase';


firebase.initializeApp({
    apiKey: "AIzaSyDGWmsFh0ZiIB6j_LBwAtSWZ_NqXAbC1g8",
    authDomain: "sistemarh-57bd4.firebaseapp.com",
    databaseURL: "https://sistemarh-57bd4.firebaseio.com",
    projectId: "sistemarh-57bd4",
    storageBucket: "sistemarh-57bd4.appspot.com",
    messagingSenderId: "1022553262181"    
});


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    FormularioComponent,          
  ],
  imports: [
    BrowserModule,    
    HttpModule,
    FormsModule,    
    FlashMessagesModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
