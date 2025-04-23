var nome:string = 'Mario';
var n1:number = 8;
var n2:number = 7;
var n3:number = 5;
var frequencia = 89;
var media:number = (n1+n2+n3)/3;
if(frequencia>=75){
    if(media >= 7){
        console.log("Aprovado")
    } else if(media>=5&&media<7){
        console.log("Recuperação")
    } else{
        console.log("Reprovado por nota")
    }
} else{
    console.log("Reprovado por falta")
}