import {QuestionModel} from './questionModel' 


export class FormularioModel {

    private ehNulo:boolean;
    private dataInicio:string;
    private dataFinal:string;
    private descricao:string;
    private questoes:QuestionModel[];
    private formIDFirebase:string;


    constructor() {
        this.questoes = [];
        this.ehNulo = true;
    }

    addQuestion(question:QuestionModel){
        this.questoes.push(question);
    }

    getQuestions(){
        return this.questoes;
    }
    
    getQuestionsAt(position){
        return this.questoes[position];
    }

    setQuestoes(questions:QuestionModel[]){
        this.questoes = questions;
    }

    getDataInicio(){
        return this.dataInicio;
    }

    getDataFinal(){
        return this.dataFinal;
    }

    getDescricao(){
        return this.descricao;
    }

    setDataInicio(data:string){
        this.dataInicio = data;
    }

    setDataFinal(data:string){
        this.dataFinal = data;
    }

    setDescricao(desc:string){
        this.descricao = desc;
    }
    getEhNulo(){
        return this.ehNulo;
    }
    setEhNulo(valor:boolean){
        this.ehNulo = valor;
    }
    getFormIDFirebase(){
        return this.formIDFirebase;
    }
    setFormIDFirebase(id:string){
        this.formIDFirebase = id;
    }
}