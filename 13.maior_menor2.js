import { question } from "readline-sync";

//13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são diferentes.

function main(){
    const n1 = Number(question('Primeiro número: '))
    const n2 = Number(question('Segundo número: '))
    const n3 = Number(question('Terceiro número: '))
    const n4 = Number(question('Quarto número: '))
    const n5 = Number(question('Quinto número: '))

    const maior = qual_maior(n1,n2,n3,n4,n5)
    const menor = qual_menor(n1,n2,n3,n4,n5)

    console.log(`O maior número é ${maior} e o menor é ${menor}!`)

}

function qual_maior(n1,n2,n3,n4,n5){
    let maior = n1
    if (n1 < n2){
        maior = n2
    }
    if (n1 < n3){
        maior = n3
    }
    if (n1 < n4){
        maior = n4
    }
    if(n1 < n5){
        maior = n5
    }

    return maior
}

function qual_menor(n1,n2,n3,n4,n5){
    let menor = n1
    if (n1 > n2){
        menor = n2
    }
    if (n1 > n3){
        menor = n3
    }
    if (n1 > n4){
        menor = n4
    }
    if (n1 > n5){
        menor = n5
    }

    return menor
}

main()