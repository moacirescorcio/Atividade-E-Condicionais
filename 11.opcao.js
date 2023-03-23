import { question } from "readline-sync";

//11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores possíveis para a variável opção são 1, 2 e 3.

function main(){
    const opcao = Number(question('Escolha opção de 1 a 3: '))
    const n1 = Number(question('Número 1: '))
    const n2 = Number(question('Número 2: '))
    const n3 = Number(question('Número 3: '))

    const escolha = opcao_escolhida(opcao,n1,n2,n3)

    console.log(`Opção escolhida foi o ${escolha}!`)
}

function opcao_escolhida(opcao,n1,n2,n3){
    if (opcao === 1){
        return `Número 1: ${n1}`
    }else if (opcao === 2){
        return `Número 2: ${n2}`
    }else if (opcao === 3){
        return `Número 3: ${n3}`
    }
}

main()