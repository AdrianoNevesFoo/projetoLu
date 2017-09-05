import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { FuncionarioModel } from '../model/funcionarioModel';
import { FormularioModel } from '../model/formularioModel';

import * as firebase from 'firebase';

@Injectable()
export class DataService {


  //--------------------------Observables Topicos----------------------------------------------------
  funcionariosObservable: Observable<FuncionarioModel[]>; // Observable padrao usado em toda APP
  private _funcionariosSubject: BehaviorSubject<FuncionarioModel[]>;  // Inplementacao melhorada de Observable
  private _funcionarios:FuncionarioModel[]; // Os dados de fato!
  private _funcionario: FuncionarioModel;
  //-------------------------------------------------------------------------------------------------

  //--------------------------Observables Formulario----------------------------------------------------
  formularioObservable: Observable<FormularioModel>; // Observable padrao usado em toda APP
  private _formularioSubject: Subject<FormularioModel>;  // Inplementacao melhorada de Observable  
  private _formulario: FormularioModel;
  //-------------------------------------------------------------------------------------------------


  //--------------------------Observable Funcionario----------------------------------------------------
  currentFuncionarioObservable: Observable<FuncionarioModel>; // Observable padrao usado em toda APP
  private _currentFuncionarioSubject: Subject<FuncionarioModel>;  // Inplementacao melhorada de Observable  
  private _currentFuncionario: FuncionarioModel;
  //-------------------------------------------------------------------------------------------------


  constructor() {
    this._funcionariosSubject = <BehaviorSubject<FuncionarioModel[]>>new BehaviorSubject([]);    
    this.funcionariosObservable = this._funcionariosSubject.asObservable();
    this._funcionarios = [];
    this._funcionario = new FuncionarioModel(); 
    
    //--------------------------Current Funcionario--------------------------------------------
    this._currentFuncionarioSubject = <Subject<FuncionarioModel>> new Subject();
    this.currentFuncionarioObservable = this._currentFuncionarioSubject.asObservable();
    // this._currentFuncionario = new FuncionarioModel();

    //-------------------------- Formulario----------------------------------------------------
    this._formularioSubject = <Subject<FormularioModel>>new Subject();    
    this.formularioObservable = this._formularioSubject.asObservable();
    this._formulario = new FormularioModel();

  }


  criaNovoFuncionario(funcionario: FuncionarioModel): firebase.Promise<any> {
    let cpf = funcionario.getCpf().trim();

    let messageListRef = firebase.database().ref('/usuarios/'+cpf+'/dados');
    
    return messageListRef.set({
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
      'dependentes': funcionario.getDependentes(), 
      'cpfSupervisor': funcionario.getCpfSupervisor(), 
    });
  }  

  

  verificaCPF(cpf:string):string{
    let cpfNum = parseInt(cpf);
    let cpfString = "";
    if(cpfNum.toString().length == 10){      
      cpfString = "0".concat(cpfNum.toString());
      
    }else{
      cpfString = cpfNum.toString();
    }    
    return cpfString;
  }

  getFuncionariosList():Observable<FuncionarioModel[]> {
        let queryRef = firebase.database().ref('usuarios');        
             
        this._funcionarios = [];         
      
        queryRef.once('value')           
          .then(funcionarios_snapshot => {              
              funcionarios_snapshot.forEach(um_funcionario_snapshot => {                    
                    let funcionarioKey = um_funcionario_snapshot.key;
                    console.log(console.log(funcionarioKey));
                    let newReference = firebase.database().ref('usuarios/'+funcionarioKey+"/dados"); 
                    newReference.once('value')
                      .then(snapshot => {
                      var vardata = (snapshot.val());
                      let newFunc = new FuncionarioModel();
                      newFunc.setAdmissao(vardata["admissao"]);
                      newFunc.setName(vardata["nome"]);
                      newFunc.setCargo(vardata["cargo"]);
                      newFunc.setSupervisao(vardata["supervisao"]);
                      this._funcionarios.push(newFunc)
                      })                    
              });
              this._funcionariosSubject.next(this._funcionarios);  
          });              
        return this.funcionariosObservable;
  } 

  getFuncionarios(): firebase.Promise<any>{
    let queryRef = firebase.database().ref('usuarios');                             
        return queryRef.once("value");
  }
  
  getFuncionario(funcionarioKey:string):Observable<FuncionarioModel>{
        let queryRef = firebase.database().ref('usuarios/'+funcionarioKey+"/dados");                
        this._funcionarios = [];         
      
        queryRef.once('value')           
          .then(funcionario_snapshot => { 
            let newFunc = new FuncionarioModel();
            let funcSnap = funcionario_snapshot.val();
            newFunc.setName(funcSnap["nome"]);
            newFunc.setAdmissao(funcSnap["admisao"]);
            newFunc.setCpf(funcSnap["cpf"]);
            newFunc.setCargo(funcSnap["cargo"]);
            newFunc.setCidade(funcSnap["cidade"]);
            newFunc.setCodigo(funcSnap["codigo"]);
            newFunc.setCoordenador(funcSnap["coordenador"]);
            newFunc.setCpfSupervisor(funcSnap["cpfSupervisor"]);
            newFunc.setData(funcSnap["data"]);
            newFunc.setDiretoria(funcSnap["diretoria"]);
            newFunc.setEmail(funcSnap["email"]);
            newFunc.setEstado(funcSnap["estado"]);
            newFunc.setExperiencia(funcSnap["experiencia"]);
            newFunc.setFormacao(funcSnap["formacao"]);
            newFunc.setGerencia(funcSnap["gerencia"]);
            newFunc.setNumberID(funcSnap["numberID"]);
            newFunc.setRegional(funcSnap["regional"]);
            newFunc.setSetor(funcSnap["setor"]);
            newFunc.setSupervisao(funcSnap["supervisao"]);

            if(funcSnap["dependentes"] != null){
              funcSnap["dependentes"].forEach(element => {
                newFunc.addDependente(element);
              });
            } 
            this._currentFuncionario = newFunc;
            this._currentFuncionarioSubject.next(this._currentFuncionario);
          });          
          return this.currentFuncionarioObservable;
  }

  getUser(key:string){    
    return firebase.database().ref('usuarios/').child(key+"/dados").once('value');
  }

  equal(userKey:string){
    let isUser = false;    
    console.log(firebase.database().ref('usuarios').child(userKey).key);
  }

  enviaFormularioFuncionarioList(formulario:FormularioModel){
    let funcionariosKeys = [];
    let queryRef = firebase.database().ref('usuarios');        
        // console.log("User ID: "+firebase.auth().currentUser.uid);                      
      
        queryRef.once("value")           
          .then(funcionarios_snapshot => {              
              funcionarios_snapshot.forEach(um_funcionario_snapshot => {                    
                    let funcionarioKey = um_funcionario_snapshot.key;                    
                    var messageListRef = firebase.database().ref('usuarios/'+funcionarioKey+"/novoFormulario/");
                    
                    let newMessageRef = messageListRef.push();
                    let idNovoForm = newMessageRef.ref.key;
                    let formRef = messageListRef.child(idNovoForm);            
                    formRef.set(formulario);                                                            
              });              
          });                      
  }

  deleteFormularioNovo(){
    let funcionariosKeys = [];
    let queryRef = firebase.database().ref('usuarios');  
    queryRef.once("value")
      .then(funcionarios_snapshot => {
        funcionarios_snapshot.forEach(um_funcionario_snapshot => {
          let funcionarioKey = um_funcionario_snapshot.key;
          var formularioNode = firebase.database().ref('usuarios/'+funcionarioKey+"/novoFormulario");
          formularioNode.once("value")
            .then(newForms_snapshat => {
              newForms_snapshat.forEach(newForm_snapshat => {                
                var adaRef = firebase.database().ref('usuarios/'+funcionarioKey+'/novoFormulario/'+newForm_snapshat.key);
                adaRef.remove()
                  .then(function() {
                    console.log("Remove succeeded.")
                  })
                  .catch(function(error) {
                    console.log("Remove failed: " + error.message)
                  });
              });

            });
                    
        });
      });      
  }

  getFormularioNovo(userKey:string):Observable<FormularioModel>{
    let queryRef = firebase.database().ref('usuarios/'+userKey.trim()+'/novoFormulario/');      
    let formularioNulo = true;
    queryRef.once("value")
      .then(snapshot => {               
        if(!snapshot.exists()){                
          this._formulario.setEhNulo(true);
          this._formularioSubject.next(this._formulario);
        }else{          
        snapshot.forEach(form_snapshot => {           
          this._formulario.setFormIDFirebase(form_snapshot.key);
          formularioNulo = false;
          let form = form_snapshot.val();
          this._formulario.setEhNulo(false);
          this._formulario.setDataFinal(form["dataInicio"]);
          this._formulario.setDataInicio(form["dataFinal"]);
          this._formulario.setDescricao(form["descricao"]);
          this._formulario.setQuestoes(form["questoes"]);  
          this._formularioSubject.next(this._formulario);                    
        });
        }
      }, erro => {
        console.log(erro)
      });            
      return this.formularioObservable;
  }

  updateFormAnalista(userKey:string, formKey:string, updates, questionID:string): firebase.Promise<any>{        
    let queryRef = firebase.database().ref('usuarios/'+userKey.trim()+'/novoFormulario/'+formKey+"/questoes/"+questionID+"/");
    return queryRef.update({notaAnalista:updates.notaAna, obsAnalista:updates.obsAna});                      
  }

  enviarFormularioParaSupervisor(cpfAnalista:string, cpfSupervisor:string, formulario:FormularioModel){
    let queryRef = firebase.database().ref('usuarios/'+cpfSupervisor+"/dados/FormDependentes/"+cpfAnalista);
    queryRef.once("value")
      .then(snapshot => {               
       queryRef.set({
          'formulario': formulario,
        });
      }, error =>{
        console.log(error);
      });        
  }
}
