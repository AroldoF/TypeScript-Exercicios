interface Aluno{
    nome:string;
    matricula:string;
    ativo:boolean;
}

class alunos implements Aluno{
    nome:string;
    matricula:string;
    ativo:boolean;
    constructor(nome:string,matricula:string,ativo:boolean){
        this.nome = nome
        this.matricula = matricula
        this.ativo = ativo
    }
}

let aluno1 = new alunos('Maria','1111',true)
let aluno2 = new alunos('kaio','2222',false)
let aluno3 = new alunos('João','3333',true)

let vetor:alunos[] = [aluno1,aluno2,aluno3]

for(let item of vetor){
    if(item.ativo === true){
        console.log(item.nome)
    }
}