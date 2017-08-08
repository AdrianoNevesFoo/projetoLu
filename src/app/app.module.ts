import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

//********************************PROVIDERS********************************
// import { AuthService } from './providers/auth.service';

//********************************ngxBootstrap********************************
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    CollapseModule.forRoot()
       
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
