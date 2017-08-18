
export class QuestionModel {

    pergunta: string;
    opcoes: string[];
    id;
    questionNumber;
    type:string;
    
    constructor() {
        this.opcoes = [];
        this.id=0;
        this.questionNumber = 0;
    }
}