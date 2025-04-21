class Produto {
    nome: string;
    emEstoque: boolean;

    constructor(nome: string, emEstoque: boolean) {
        this.nome = nome;
        this.emEstoque = emEstoque;
    }
}

function filtrarProdutosDisponiveis(array: Produto[]): Produto[] {
    // Filtra e retorna apenas os produtos em estoque
    return array.filter(item => item.emEstoque === true);
}

// Criando produtos
let produto1 = new Produto('Celular', true);
let produto2 = new Produto('Computador', false);
let produto3 = new Produto('Tablet', true);

// Criando o array com os produtos
let array: Produto[] = [produto1, produto2, produto3];

// Filtrando os produtos disponíveis
let produtosDisponiveis = filtrarProdutosDisponiveis(array);

// Exibindo os produtos disponíveis
console.log(produtosDisponiveis);
