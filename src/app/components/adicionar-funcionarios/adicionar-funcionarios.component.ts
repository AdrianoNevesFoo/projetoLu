import { Component, OnInit } from '@angular/core';

import { FuncionarioModel } from '../../model/funcionarioModel';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';



@Component({
  selector: 'app-adicionar-funcionarios',
  templateUrl: './adicionar-funcionarios.component.html',
  styleUrls: ['./adicionar-funcionarios.component.css']
})
export class AdicionarFuncionariosComponent implements OnInit {

  private registerCredentials = { email: '', password: '' };
  private funcionarisBanco: FuncionarioModel[];

  private funcionariosSet: FuncionarioModel[];  
  
  private file: any = null;
  private isFileReaderWork: boolean = false;
  private lines;


  private quantidadeColunas = 17;
  private cabecalho: string[];
  private exitLogVector: string[];
  private exitLogString: string;

  private newPassword:string;


  constructor(private dataService: DataService, private auth: AuthService) {     
    this.exitLogVector = []; 
    this.funcionariosSet = [];
    this.exitLogString = "";
      
  
  }

  ngOnInit() {
  }

  criaFuncionariosLista(){    
    this.funcionariosSet.forEach(element => {      
      this.criarNovoFuncionario(element);
    });
  }

  criarNovoFuncionario(newFuncionario: FuncionarioModel) {          
    // this.showLoading();
    this.dataService.criaNovoFuncionario(newFuncionario).then(
      _=>{
        // console.log("Email do funcionario criado!:"+newFuncionario.getEmail());
        // alert("Funcionario criado com sucesso!!!");
      },
      erro =>{
        //mensagem de erro
      } 
    );
  }

  fileChanged($event): void {        
    this.file = (<HTMLInputElement>document.getElementById("file")).files[0];    
    
    var fileReader = new FileReader();
    fileReader.readAsText(this.file);
    var resultSet = [];
    fileReader.onloadend =  () => {       
      this.lines = fileReader.result.split("\n");      
    };
  }

  cancelarCarregamentoBase(){    
    this.isFileReaderWork = false;
    this.exitLogString = "";    
  }

  //le a base de dados, cria todos os objetos FuncionarioModel e cria todos os logs de saída
  verificarBase(){
    let lineNumber = 1;
    //percorre todas as linhas criadas no metodo fileChanged
    this.lines.forEach(element => {  
      //primeiro captura apenas o cabeçalho
      if(lineNumber == 1){
        let cabecalhoSplit = element.split(";");
        this.cabecalho = cabecalhoSplit;                    
        lineNumber++;
      }
      else //le a base inteira menos o cabeçalho
        {                 
        let line = element.split(";");
          if(this.validaLinha(line, lineNumber)){
            this.criaNovoFuncionario(line, lineNumber);            
            lineNumber++;
          }
      }
    });    
    this.isFileReaderWork = true;    
  }

  criaNovoFuncionario(line:string[], lineNumber){
    let fieldNumber=0;
    let newFuncionario = new FuncionarioModel();
    newFuncionario.setNumberID(lineNumber);
    
    //percorre uma linha da base de dados, adionando ao novo funcionario os valores correspondes à cada coluna
    line.forEach( element => {    
      switch (fieldNumber) {
        case 0:
            newFuncionario.setName(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 1:
            newFuncionario.setCodigo(element);
            this.validaCampo(element, fieldNumber, lineNumber);          
            break;
        case 2:
            newFuncionario.setCidade(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 3:
            newFuncionario.setRegional(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 4:
            newFuncionario.setEstado(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 5:
            newFuncionario.setAdmissao(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 6:
            newFuncionario.setExperiencia(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 7:
            newFuncionario.setFormacao(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 8:
            newFuncionario.setSetor(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 9:
            newFuncionario.setCargo(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 10:
            newFuncionario.setSupervisao(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;    
        case 11:
            newFuncionario.setCoordenador(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 12:
            newFuncionario.setGerencia(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 13:
            newFuncionario.setDiretoria(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 14:
            newFuncionario.setEmail(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 15:            
            newFuncionario.setData(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
        case 16:
            newFuncionario.setCpf(element);
            this.validaCampo(element, fieldNumber, lineNumber);
            break;
      }        
        fieldNumber++;
      });    
    
    //adiciona cada novo funcionario criado à lista de funcionarios
    this.funcionariosSet.push(newFuncionario);
    // console.log(newFuncionario.getCodigo());
  }

  //essa funcao verifica se uma tupla possui uma coluna vazia...
  // se posssuir, o objeto funcionario será criado normalmenete, mas o campo vazio será 
  //mostrado no log de saída.
  validaCampo(campo:string, fieldNumber, lineNumber){
    if(campo.length == 0){
      // console.log("linha: "+lineNumber+"  campo: "+this.cabecalho[fieldNumber]+"        "+campo);
      this.exitLogVector.push("Linha "+lineNumber+" campo vazio. \n\t"+this.cabecalho[fieldNumber]+": "+campo+"\"\"");
      this.exitLogString = this.exitLogString.concat("Linha "+lineNumber+": (campo vazio). \n\t"+this.cabecalho[fieldNumber]+": "+campo+"\"\"\n\n");
      
    }
  }

  //valida uma linha da base de dados... verifica se a linha possui a quantidade de colunas corretas
  //no caso, cada linha deve ter a mesma quantidade de colunas que o cabeçalho
  validaLinha(line:string, lineNumber){
    if(line.length == this.quantidadeColunas){
      if(line[14].search("@") > 3){
        return true;
      }else{
      this.exitLogVector.push("O funcionário "+line[0]+" não possui email.\nVocê pode cancelar essa operação,"+
      "inserir o endereço de email e começar novamente ou pode concluir a operação e inserir o funcionario manualmente no menu 'Listar Funcionarios'");
      return false;
      }     
    }else{      
      if(line.length > this.quantidadeColunas){
        this.exitLogVector.push("A linha "+lineNumber+" possui uma quantidade maior de colunas do que o especificado"); 
        this.exitLogString = this.exitLogString.concat("A linha "+lineNumber+" possui uma quantidade maior de colunas do que o especificado\n\n");       
      }
      else if(line.length < this.quantidadeColunas){
         if(line.length == 1){
           this.exitLogVector.push("A linha "+lineNumber+" é vazia.");
           this.exitLogString = this.exitLogString.concat("A linha "+lineNumber+" é vazia.\n\n");
         }
          else{
           this.exitLogVector.push("A linha "+lineNumber+" possui uma quantidade menor de colunas do que o especificado");
           this.exitLogString = this.exitLogString.concat("A linha "+lineNumber+" possui uma quantidade menor de colunas do que o especificado\n\n");
         }        
      }        
      return false;
    }
  }

  criarUsuario(){
    this.auth.createUser(this.registerCredentials.email, this.registerCredentials.password).then(
      _=>{
        console.log("Funcionario criado com sucesso");
      },
      error =>{
        console.log(error);
      }
    )
  }

  atualizarSenha(){
    this.auth.redefinirSenhaUsuario(this.newPassword).then(
      _=>{  
        console.log("Senha atualizada com sucesso!")
    },error =>{
        console.log("Não foi possível redefinir a senha!");
    }
    )
  }

  emailDefinicaoSenha(){
    this.auth.passwordResetEmail("adrianonevesps@gmail.com").then(
      _ =>{
        console.log("Email enviado com sucesso!!!!");
    },error =>{
      console.log(error);
    });
  }
}
