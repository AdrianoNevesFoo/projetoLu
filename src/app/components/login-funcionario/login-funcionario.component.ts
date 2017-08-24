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
  

  constructor(private dataService: DataService,  private router: Router, private activatedRout: ActivatedRoute) {     
    this.funcionarioKey="";
  }

  ngOnInit() {
    this.dataService.getFuncionarios()
      .then(funcionarios_snapshot => {              
          funcionarios_snapshot.forEach(um_funcionario_snapshot => {
                let newFuncionario = new FuncionarioModel();
                let funcionarioKey = um_funcionario_snapshot.key;
                let func = um_funcionario_snapshot.val();
                newFuncionario.setName(func["nome"]);
                newFuncionario.setCargo(func["cargo"]);
                newFuncionario.setSupervisao(func["supervisao"]);  
                newFuncionario.setNumberID(func["numberID"]);                  
                this.mapFuncionarios.set(funcionarioKey, newFuncionario);
          });           
      },
        erro => 
            {
              //  this.showError(erro.message);
            }
      );

    
  }

  loginFuncionario(){
    if(this.mapFuncionarios.has(this.funcionarioKey)){
      let currentFuncionario = this.mapFuncionarios.get(this.funcionarioKey);  
      
      let navigationExtras: NavigationExtras = {
                  queryParams: {
                    "name":currentFuncionario.getName(),
                    "cargo":currentFuncionario.getCargo(),
                    "key":this.funcionarioKey
                  }
              };       
      this.router.navigate(['/funcionario'], navigationExtras);
    }
   
  }



}
