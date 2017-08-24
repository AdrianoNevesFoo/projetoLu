import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from '../../model/funcionarioModel';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  
  compInfo: string = "Loading";
  file: any = null;
  isFileReaderWork: boolean = false;
  lines;


  quantidadeColunas = 17;
  constructor() {
    this.compInfo = "Page Loaded";

  }

  ngOnInit() {
  }

  fileChanged($event): void {
    console.log("MyApp.fileChanged");
    this.compInfo = "Selected a file";

    this.file = (<HTMLInputElement>document.getElementById("file")).files[0];
    this.compInfo = "Selected file: " + this.file.name;
    
    var fileReader = new FileReader();
    fileReader.readAsText(this.file);
    var resultSet = [];
    fileReader.onloadend =  () => { 
      this.isFileReaderWork = true;
      this.lines = fileReader.result.split("\n");      
    };
  }

  printBase(){
    this.lines.forEach(element => {        
      
    let line = element.split(";");
      if(this.validaLinha(line)){
        
      }


    });
  }

  validaLinha(line:string){
    if(line.length == this.quantidadeColunas){
      return true;
    }else{
      if(line.length > this.quantidadeColunas){
        console.log("A linha possui uma quantidade maior de colunas do que o especificado");
      }else if(line.length < this.quantidadeColunas){
        console.log("A linha possui uma quantidade menor de colunas do que o especificado");
      }        
      if(line.length == 1){
        console.log("Linha vazia");
      }
      return false;
    }
  }

  createFuncionarioModel(){
      let cabecalhoControl = true;
      this.lines.forEach(element => {
        if(cabecalhoControl){          
          cabecalhoControl = false;
        }else{          
          let funcionario = new FuncionarioModel();
          let line = element.split(";"); 
          funcionario.setName(line[0]);         
          funcionario.setCodigo(line[1]);
          funcionario.setCidade(line[2]);        
          funcionario.setRegional(line[3]);
          funcionario.setEstado(line[4]);
          funcionario.setAdmissao(line[5]);
          funcionario.setExperiencia(line[6]);
          funcionario.setFormacao(line[7]);
          funcionario.setSetor(line[8]);
          funcionario.setCargo(line[9]);
          funcionario.setSupervisao(line[10]);
          funcionario.setCoordenador(line[11]);
          funcionario.setGerencia(line[12]);
          funcionario.setDiretoria(line[13]);
          funcionario.setEmail(line[14]);
          funcionario.setData(line[15]);
          funcionario.setCpf(line[16]);

          
        }

      });    
  }
}
