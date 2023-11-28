console.log("\nFunção sem retorno")
// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)

console.log("\nFunção com retorno")
// função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 5))
console.log(soma(2))
console.log(soma())

console.log("\nArmazenando uma função em uma variável")
// Armazenando uma função em uma variável

const printSoma = function (a, b) {
    console.log(a + b)
}

printSoma(2, 3)

console.log("\nArmazenando uma função 'arrow' em uma variável")
// Armazenando uma função 'arrow' em uma variável
const somaArrow = (a, b) => {
    return a + b
}

console.log(somaArrow(2, 3))

console.log("\nRetorno implícito")
//Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

const imprimir = a => console.log(a)
imprimir('Legal !!!')
const imprimir2 = a => console.log(++a)
imprimir2(7)

