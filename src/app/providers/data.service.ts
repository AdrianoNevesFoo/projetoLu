import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FuncionarioModel } from '../model/funcionarioModel';
import * as firebase from 'firebase';

@Injectable()
export class DataService {


  //--------------------------Observables Topicos----------------------------------------------------
  funcionariosObservable: Observable<Map<string, FuncionarioModel>>; // Observable padrao usado em toda APP
  private _funcionariosSubject: BehaviorSubject<Map<string, FuncionarioModel>>;  // Inplementacao melhorada de Observable
  private _funcionarios: Map<string, FuncionarioModel>; // Os dados de fato!
  private _funcionario: FuncionarioModel;
  //-------------------------------------------------------------------------------------------------

  



  constructor() {
    this._funcionariosSubject = <BehaviorSubject<Map<string, FuncionarioModel>>>new BehaviorSubject(new Map());
    
    this.funcionariosObservable = this._funcionariosSubject.asObservable();
    this._funcionarios = new Map();
    this._funcionario = new FuncionarioModel();    

  }


  criaNovoFuncionario(funcionario: FuncionarioModel): firebase.Promise<any> {
    
    let messageListRef = firebase.database().ref('/usuarios');

    let newMessageRef = messageListRef.push();    


    return newMessageRef.set({
      'nome': funcionario.getName(),
      'codigo': funcionario.getCodigo(),
      'cidade': funcionario.getCidade(),
      'regional': funcionario.getRegional(),
      'estado': funcionario.getEstado(),
      'admissao': funcionario.getAdmissao(),
      'experiencia': funcionario.getExperiencia(),
      'formacao': funcionario.getFormacao(),
      'setor': funcionario.getSetor(),
      'cargo': funcionario.getCargo(),
      'supervisao': funcionario.getSupervisao(),
      'coordenador': funcionario.getCoordenador(),
      'gerencia': funcionario.getGerencia(),
      'diretoria': funcionario.getDiretoria(),
      'email': funcionario.getEmail(),
      'data': funcionario.getData(),
      'cpf': funcionario.getCpf(),  
      'numberID': funcionario.getNumberID(),      
    });
  }  


    getFuncionariosList():Observable<Map<string, FuncionarioModel>> {
        let queryRef = firebase.database().ref('usuarios');        
        // console.log("User ID: "+firebase.auth().currentUser.uid);      
        this._funcionarios = new Map();         
      
        queryRef.once("value")           
          .then(funcionarios_snapshot => {              
              funcionarios_snapshot.forEach(um_funcionario_snapshot => {
                    let newFuncionario = new FuncionarioModel();
                    let funcionarioKey = um_funcionario_snapshot.key;
                    let func = um_funcionario_snapshot.val();
                    newFuncionario.setName(func["nome"]);
                    newFuncionario.setCargo(func["cargo"]);
                    newFuncionario.setSupervisao(func["supervisao"]);  
                    newFuncionario.setNumberID(func["numberID"]);                                                                             
                    this._funcionarios.set(funcionarioKey, newFuncionario);
              });
              this._funcionariosSubject.next(this._funcionarios);  
          });              
        return this.funcionariosObservable;
  } 

  getFuncionarios(): firebase.Promise<any>{
    let queryRef = firebase.database().ref('usuarios');                             
        return queryRef.once("value");
  }
  
  getUser(key:string){    
    return firebase.database().ref('usuarios').child(key).once('value');
  }

  equal(userKey:string){
    let isUser = false;    
    console.log(firebase.database().ref('usuarios').child(userKey).key);
  }

}
