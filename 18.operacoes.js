import { question } from "readline-sync";

//18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 – Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação sobre os dois valores lidos.

function main(){
    const n1 = Number(question('Número 1: '))
    const n2 = Number(question('Número 2: '))
    const opcao = Number(question('Qual operação (1 – Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão): '))

    const resultado = operacoes(opcao,n1,n2)

    if(opcao === 1){
        console.log(`O resultado da adição dos dois números é de ${resultado}!`)
    }else if(opcao === 2){
        console.log(`O resultado da subtração dos dois números é de ${resultado}!`)
    }else if(opcao===3){
        console.log(`O resultado da multiplicação dos dois números é de ${resultado}!`)
    }else if(opcao===4){
        console.log(`O resultado da divisão dos dois números é de ${resultado}!`)
    }

}

function operacoes(op,n1,n2){
    let soma
    let sub
    let mul
    let div
    if (op === 1){
        soma = n1 + n2
        return soma
    }else if(op === 2){
        sub = n1 - n2
        return sub
    }else if(op === 3){
        mul = n1 * n2
        return mul
    }else if(op === 4){
        div = n1 / n2
        return div
    }
}

main()