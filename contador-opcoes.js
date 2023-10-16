const readline = require('readline-sync')

console.log("._________________________________. ")
console.log("|  Escolha uma opção de contador  |")
console.log("|                                 |")
console.log("|  [1]   Para contar de 1 ate 10  |")
console.log("|  [2]   Para contar de 10 ate 1  |")
console.log("|  [3]   Sair                     |")
console.log("|_________________________________|")

let opcao = readline.questionInt("Opção: ")

if(opcao < 1 || opcao > 3) {
   opcao = console.log("Opção inálida. Escolha uma das opções sugeridas. ")

} else {

    switch(opcao) {
        case 1:
            console.log("Contagem de 1 até 10 ")
            for(let c = 1; c <= 10; c++){
                console.log(c)
            }
            break
    
        case 2:
            console.log("Contagem de 10 até 1 ")
            for(let c = 10; c >= 1; c--){
                console.log(c)
            }
            break
    
        default:
            console.log("Você saiu do programa. ")
            break
        }
}


    

