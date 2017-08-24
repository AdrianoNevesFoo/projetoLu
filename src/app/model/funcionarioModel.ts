
export class FuncionarioModel {

    private name:string;
    private codigo:string;
    private cidade:string;
    private regional:string;
    private estado:string;
    private admissao:string;
    private experiencia:string;
    private formacao:string;
    private setor:string;
    private cargo:string;
    private supervisao:string;
    private coordenador:string;
    private gerencia:string;
    private diretoria:string;
    private email:string;
    private data:string;
    private cpf:string;

    private numberID:string;
    
    constructor() {
    }

    getName(){
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
    getCodigo(){
        return this.codigo;
    }
    setCodigo(codigo:string){        
        this.codigo = codigo;
    }
     getCidade(){
        return this.cidade;
    }
    setCidade(cidade:string){        
        this.cidade = cidade;
    }
     getRegional(){
        return this.regional;
    }
    setRegional(regional:string){        
        this.regional = regional;
    }      
    getEstado(){
        return this.estado;
    }
    setEstado(estado:string){        
        this.estado = estado;
    }
    getAdmissao(){
        return this.admissao;
    }
    setAdmissao(admissao:string){        
        this.admissao = admissao;
    }
    getExperiencia(){
        return this.experiencia;
    }
    setExperiencia(experiencia:string){        
        this.experiencia = experiencia;
    }
    getFormacao(){
        return this.formacao;
    }
    setFormacao(formacao:string){        
        this.formacao = formacao;
    }
    getSetor(){
        return this.setor;
    }
    setSetor(setor:string){        
        this.setor = setor;
    }
    getCargo(){
        return this.cargo;
    }
    setCargo(cargo:string){        
        this.cargo = cargo;
    }
    getSupervisao(){
        return this.supervisao;
    }
    setSupervisao(supervisao:string){        
        this.supervisao = supervisao;
    }
    getCoordenador(){
        return this.coordenador;
    }
    setCoordenador(coordenador:string){        
        this.coordenador = coordenador;
    }    
    getGerencia(){
        return this.gerencia;
    }
    setGerencia(gerencia:string){        
        this.gerencia = gerencia;
    }  
    getDiretoria(){
        return this.diretoria;
    }
    setDiretoria(diretoria:string){        
        this.diretoria = diretoria;
    }      
    getEmail(){
        return this.email;
    }
    setEmail(email:string){        
        this.email = email;
    }
    getData(){
        return this.data;
    }
    setData(data:string){        
        this.data = data;
    }    
    getCpf(){
        return this.cpf;
    }
    setCpf(newCpf:string){
        this.cpf = newCpf;
    }
    getNumberID(){
        return this.numberID;
    }
    setNumberID(numberID:string){
        this.numberID = numberID;
    }    
}