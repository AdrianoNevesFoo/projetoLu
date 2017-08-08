import { RouterModule, Routes } from '@angular/router';


//Componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [  
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];




export const routing = RouterModule.forRoot(routes); //, { enableTracing: true }