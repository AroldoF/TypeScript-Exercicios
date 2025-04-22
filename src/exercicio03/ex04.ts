const aluno01:any = {
    nome: "Maria",
    idade: 21,
    curso: "Análise e Desenvolvimento de Sistemas"
  };
for(const i in aluno01){
    console.log(`${i}: ${aluno01[i]}`)
}