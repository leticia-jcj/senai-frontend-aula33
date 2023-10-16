const readline = require('readline-sync')

let numero = readline.questionInt("Digite um número: ")

console.log(`Tabudada de ${numero}`)
for (let c = 0; c <= 10; c++) {
    console.log(`${numero} x ${c} = ${numero*c}`)
}