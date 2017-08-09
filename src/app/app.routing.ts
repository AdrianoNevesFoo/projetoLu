import { RouterModule, Routes } from '@angular/router';


//Componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [  
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
];




export const routing = RouterModule.forRoot(routes); //, { enableTracing: true }