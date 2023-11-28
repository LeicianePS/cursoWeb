// Add atributos dinamicamente aos Objetos
let nomeAtributo = 'novoAtributo'   // variável para guardar o atributo dinâmico do Obj

const obj = {}     // Obj
obj[nomeAtributo] = 'teste'    // Adicionando o atributo dinamicamente ao Obj por meio de obj[...] que pega o valor da let 'nomeAtributo' e seta como atributo de Obj, 'teste' pode ser uma let ou const também 

const obj1 = { [nomeAtributo]: 'teste' }  // outra forma de fazer 

console.log(obj)
console.log(obj1)


// Declaração de funções dentro de um Obj
const obj2 = {
    funcao1: function() {

    },
    funcao2() {

    }
} 
console.log(obj2)



//Herença entre Objetos, formas de declaração:
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr1, filho.attr2, filho.attr3)

console.log('\n')
const pai2 = { nome: 'Pedro', corCabelo: 'preto'}
const filha = Object.create(pai2)
console.log(filha.corCabelo)
filha.nome = 'Ana'
console.log(filha.nome + ' tem cabelo ' + filha.corCabelo)

