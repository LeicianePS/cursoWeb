// 'var' tem escopo global e de função: 
// se declaradas dentro do escopo de uma função seu valor não será manipulado fora dela, 
// se declarados globalmente seu valor pode ser manipulado em qual quer escopo do projeto.
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)



// 'let' tem escopo global e de função como o var, e ainda tem mais um escopo de bloco  (declaração mais recomendada para variáveis)
for (let j = 0; j < 10; j++) {
    console.log(j)
}
// como 'j' foi declarado dentro do bloco for{} como let, ele não será acessível fora do bloco
// console.log('j =', j)