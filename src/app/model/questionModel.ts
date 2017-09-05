
export class QuestionModel {

    pergunta: string;
    opcoes: string[];
    id;
    questionNumber;
    type:string;
    descricao:string;
    dataInicio:string;
    dataFinal:string;

    obsAnalista:string;
    obsSupervisor:string;

    notaAnalista:string;
    notaSupervisor:string;
    
    constructor() {
        this.opcoes = [];
        this.id=0;
        this.questionNumber = 0;
        this.obsAnalista = "";
        this.obsSupervisor = "";
        this.notaAnalista = "";
        this.notaSupervisor = "";
    }

    getPergunta(){
        return this.pergunta;
    }
    setPergunta(newPergunta:string){
        this.pergunta = newPergunta;
    }
    getQuestionNumber(){
        return this.questionNumber;
    }
    setQuestionNumber(number:string){
        this.questionNumber = number;
    }
    getDescricao(){
        return this.getDescricao;
    }
    setDescricao(descricao:string){
        this.descricao = descricao;
    }    
    getObsAnalista(){
        return this.obsAnalista;
    }
    setObsAnalista(obs:string){
        this.obsAnalista = obs;
    }
    getObsSupervisor(){
        return this.obsSupervisor;
    }
    setObsSupervisor(obs:string){
        this.obsSupervisor = obs;
    }
    getNotaAnalista(){
        return this.notaAnalista;
    }
    setNotaAnalista(nota:string){
        this.notaAnalista = nota;
    }      
    getNotaSupervisor(){
        return this.notaSupervisor;
    }
    setNotaSupervisor(nota:string){
        this.notaSupervisor = nota;
    }      
}