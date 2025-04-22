interface Aluno{
    nome:string;
    matricula:string;
    ativo:boolean;
}

class AlunoClass implements Aluno{
    nome:string;
    matricula:string;
    ativo:boolean;

    constructor(nome:string,matricula:string,ativo:boolean){
        this.nome = nome;
        this.matricula = matricula;
        this.ativo = ativo;
    }
}

let aluno = new AlunoClass('Carlos','2024283145',true);
console.log(`aluno: ${aluno.nome}\nmatrícula: ${aluno.matricula}\nativo: ${aluno.ativo}`);