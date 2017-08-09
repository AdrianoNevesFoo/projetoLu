import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

//********************************PROVIDERS********************************
import { AuthService } from './providers/auth.service';


import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap';
import { BootstrapModalModule } from 'ng2-bootstrap-modal'


import { FormularioComponent } from './components/formulario/formulario.component';
import { ModalComponent } from './components/modal/modal.component';


import * as $ from 'jquery';
import * as firebase from 'firebase';


firebase.initializeApp({
    apiKey: "AIzaSyDGWmsFh0ZiIB6j_LBwAtSWZ_NqXAbC1g8",
    authDomain: "sistemarh-57bd4.firebaseapp.com",
    databaseURL: "https://sistemarh-57bd4.firebaseio.com",
    projectId: "sistemarh-57bd4",
    storageBucket: "",
    messagingSenderId: "1022553262181"    
});



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    FormularioComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,    
    BootstrapModalModule.forRoot({ container: document.body }),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
