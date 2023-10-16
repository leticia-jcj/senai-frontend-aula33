const readline = require('readline-sync')

let soma = 0
let situacao = ""

const aluno = readline.question("Aluno: ")
const matricula = readline.questionInt("Matrícula: ")

for(let c = 0; c < 4; c++){

    let nota = readline.questionFloat(`${c + 1}ª nota: `)
    while(nota < 0 || nota > 10){

        console.log("Nota invalida!")
        nota = readline.questionFloat("Nota deve ser entre 0 e 10: ")

    }

    soma += nota
    // soma = soma + nota (quarda a nota)

}

const media = soma / 4

if(media >= 7){
    situacao = "Aprovado(a)!"

} else if(media >= 4){
    situacao = "Recuperação!"

} else {
    situacao = "Reprovado(a)!"

}

console.log("| --- BOLETIM --- ")
console.log(`| Aluno: ${aluno}`)
console.log(`| Matrícula: ${matricula}`)
console.log(`| Média: ${media}`)
console.log(`| Status: ${situacao}`)