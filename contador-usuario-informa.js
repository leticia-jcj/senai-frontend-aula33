const readline = require('readline-sync')

let inicioContagem = readline.questionInt("Início da contagem: ")

let fimContagem = readline.questionInt("Fim da contagem: ")

for(let c = inicioContagem; c <= fimContagem; c++){
    console.log(c)
   }
   