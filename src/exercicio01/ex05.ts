let notas: number[]= []; 
var soma: number=0;
for(let i=0; i<4; i++){
    notas.push(5);
    soma+=notas[i]
}
var media:number = soma/4;
console.log(`Notas = ${notas}\nMédia = ${media}`);