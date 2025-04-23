function verificarAprovacao (vet:any[]){
    for(let aluno of vet){
        let media:number = (aluno.nota1+aluno.nota2+aluno.nota3)/3
        if(media >= 7){
            console.log(`${aluno.nome} - Média ${media} - Situação: Aprovado`)
        } else if(media>5&&media<=6.9){
            console.log(`${aluno.nome} - Média ${media} - Situação: Recuperação`)
        } else{
            console.log(`${aluno.nome} - Média ${media} - Situação: Reprovado`)
        }
    }
}
const aluno001 = {
    nome : "Maria",
    nota1 : 8,
    nota2 : 6,
    nota3 : 4,
}
const aluno002 = {
    nome : "João",
    nota1 : 8,
    nota2 : 5,
    nota3 : 9,
}
const aluno003 = {
    nome : "Kaio",
    nota1 : 1,
    nota2 : 2,
    nota3 : 3,
}
var vet =[aluno001,aluno002,aluno003] 
verificarAprovacao(vet)