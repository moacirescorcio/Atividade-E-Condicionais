import { question } from "readline-sync";

//01.Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

function main(){
    //entrada
    const num1 = Number(question('Número 1: '))
    const num2 = Number(question('Número 2: '))
    const num3 = Number(question('Número 3: '))

    //processamento
    const iguais = numeros_iguais(num1,num2,num3)

    //saída
    console.log(`Os números foram ${num1},${num2} e ${num3}. São ${iguais} números iguais!`)
}

function numeros_iguais(n1,n2,n3){
    let resultado = 0
    if (n1 === n2 && n1 === n3){
        resultado = 3
    }else if (n1 === n2 || n1 === n3 || n2 === n3){
        resultado = 2
    }
    
    return resultado
}


main()