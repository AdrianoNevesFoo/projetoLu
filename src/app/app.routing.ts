import { RouterModule, Routes } from '@angular/router';


//Componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { AdicionarFuncionariosComponent } from './components/adicionar-funcionarios/adicionar-funcionarios.component';
import { FuncionariosListComponent } from './components/funcionarios-list/funcionarios-list.component';
import { LoginFuncionarioComponent } from './components/login-funcionario/login-funcionario.component';
import { FuncionarioPageComponent } from './components/funcionario-page/funcionario-page.component';
import { AnalistaViewComponent } from './components/analista-view/analista-view.component';
import { SupervisorViewComponent } from './components/supervisor-view/supervisor-view.component' 


const routes: Routes = [  
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  { path: 'addFuncionarios', component: AdicionarFuncionariosComponent },
  { path: 'funcionariosList', component: FuncionariosListComponent },
  { path: 'loginFuncionario', component: LoginFuncionarioComponent },  
  { path: 'analistaview', component: AnalistaViewComponent },  
  { path: 'supervisorview', component: SupervisorViewComponent },  

];




export const routing = RouterModule.forRoot(routes); //, { enableTracing: true }