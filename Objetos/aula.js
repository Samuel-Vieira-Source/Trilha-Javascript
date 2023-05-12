
// OBJJETO -> Coleção dinamica de chave e valor
// Função dentro de um objeto chama se de Metodo

// const pessoa = {
//     nome: 'Samuel A Vieira',
//     idade: 31,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
    
// };


class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;

    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
}

const samuel = new Pessoa('Samel A Vieira', 31);
const camila = new Pessoa('Camila S Bento', 29);

console.log(samuel);
console.log(camila);
