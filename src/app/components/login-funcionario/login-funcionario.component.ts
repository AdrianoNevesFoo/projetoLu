import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { FuncionarioModel } from '../../model/funcionarioModel';
import {Router, ActivatedRoute, NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})
export class LoginFuncionarioComponent implements OnInit {
  
  private funcionarioKey:string;
  private mapFuncionarios = new Map();
  private currentFuncionario:FuncionarioModel;
  

  constructor(private dataService: DataService,  private router: Router, private activatedRout: ActivatedRoute) {     
    this.funcionarioKey="";
    this.currentFuncionario = new FuncionarioModel();
    
  }

  ngOnInit() {
  
  }

  loginFuncionario(){
    
    this.dataService.getFuncionario(this.funcionarioKey)
        .subscribe(
            funcionario => {                              
                this.currentFuncionario = funcionario;                
                let navigationExtras: NavigationExtras = {
                    queryParams: {
                      "nome":this.currentFuncionario.getName(),
                      "cpf":this.currentFuncionario.getCpf(),
                      "cpfSupervisor":this.currentFuncionario.getCpfSupervisor(),
                      "email":this.currentFuncionario.getEmail(),
                      "dependentes":this.currentFuncionario.getDependentes(),
                      "cargo":this.currentFuncionario.getCargo(),
                      "supervisao":this.currentFuncionario.getSupervisao(),
                      "key":this.funcionarioKey,
                    }
                }; 
                if(this.currentFuncionario.getDependentes().length == 0){  
                  console.log("Analista");
                  this.router.navigate(['/analistaview'], navigationExtras);
                }else{
                  console.log("Supervisor");
                  this.router.navigate(['/supervisorview'], navigationExtras);
                }
            }
        );
    }
}
