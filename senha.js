const readline = require('readline-sync');

const senhaCorreta = '1234'

for(let c = 0; c < 3; c++){

    let senha = readline.question("Senha: ")

    if(senha == senhaCorreta && c < 3){

        console.log("Usuario autenticado!")

        break

    }else if(senha != senhaCorreta && c < 2){

        console.log("Senha invalida!")

    } else {

        console.log("Usuario bloqueado")

    }

}