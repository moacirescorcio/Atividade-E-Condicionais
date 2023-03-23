import { question } from "readline-sync";

//15. Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um. Escreva na tela qual dos professores tem salário total maior.

function main(){
    const hora_prof1 = Number(question('Quantidade de horas aula dada - Prof. 1: '))
    const hora_prof2 = Number(question('Quantidade de horas aula dada - Prof. 2: '))
    const valor_hora_aula = Number(question('Valor hora aula: '))

    const prof1 = salario_prof1(hora_prof1,valor_hora_aula)
    const prof2 = salario_prof2(hora_prof2,valor_hora_aula)
    const maior = salario_maior(prof1,prof2)

    console.log(`O Professor 1 recebeu R$${prof1}.`)
    console.log(`O Professor 2 recebeu R$${prof2}.`)
    console.log(`O maior salário foi do ${maior}.`)
}

function salario_prof1(hora_prof1,valor_hora_aula){
    const resultado  = hora_prof1 * valor_hora_aula
    return resultado
}

function salario_prof2(hora_prof2,valor_hora_aula){
    const resultado  = hora_prof2 * valor_hora_aula
    return resultado
}

function salario_maior(prof1,prof2){
    let resultado
    if (prof1 > prof2){
        resultado = 'Professor 1'
    }else{
        resultado = 'Professor 2'
    }

    return resultado
}


main()