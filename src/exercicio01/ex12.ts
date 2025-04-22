function tipos(valor:string|number){
    if(typeof valor === 'string')
    {
        return 'string';
    } else if(typeof valor === 'number'){
        return 'number';
    }
}
console.log(tipos('ola')); // saída: 'string'
console.log(tipos(42));    // saída: 'number