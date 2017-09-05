import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service'
import { FuncionarioModel } from '../../model/funcionarioModel';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css']
})
export class FuncionariosListComponent implements OnInit {

  private funcionariosBanco: FuncionarioModel[];


  constructor(private dataService: DataService, private auth:AuthService) {      
    this.funcionariosBanco = [];
    this.funcionariosBanco.keys;
  }

  ngOnInit() {

    this.dataService.getFuncionariosList()
        .subscribe(
            topicos_observable => {
              this.funcionariosBanco = topicos_observable;                    
              console.log(topicos_observable );
            }
        );
  }
}
