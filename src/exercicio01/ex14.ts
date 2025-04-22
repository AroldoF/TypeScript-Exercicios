class Pessoa{
    nome:string
    idade:number
    profissao:string
    constructor(nome:string,idade:number,profissao:string){
        this.nome =nome
        this.idade =idade
        this.profissao = profissao
    }
}

function descreverPessoa(objeto:Pessoa):string{
    return `Olá, me chamo ${objeto.nome}! Tenho ${objeto.idade} e sou ${objeto.profissao}.`
}

let pessoa = new Pessoa('grace',21,'desiner')
console.log(descreverPessoa(pessoa))