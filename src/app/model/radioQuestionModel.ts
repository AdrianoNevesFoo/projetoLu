
export class RadioQuestionModel {

    pergunta: string;
    opcoes: string[];
    id;
    questionNumber;
    
    constructor() {
        this.opcoes = [];
        this.id=0;
        this.questionNumber = 0;
    }
}