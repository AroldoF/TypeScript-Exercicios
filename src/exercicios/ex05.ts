let notas: number[]= []; 
let soma: number=0;
for(let i=0; i<4; i++){
    notas.push(5);
    soma+=notas[i]
}
let media:number = soma/4;
console.log(`Notas = ${notas}\nMédia = ${media}`);