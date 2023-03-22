import { question } from "readline-sync";

//3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

function main(){
    const n1 = Number(question('Número 1: '))
    const n2 = Number(question('Número 2: '))
    const n3 = Number(question('Número 3: '))

    const maior = descobrir_maior(n1,n2,n3)

    console.log(`O maior número digitado é ${maior}.`)

}

function descobrir_maior(n1,n2,n3){
    let resultado
    if (n1 > n2 && n1 > n3){
        resultado = n1
    }else if (n2 > n3 && n2 > n3){
        resultado = n2
    }else if (n3 > n1 && n3 > n2){
        resultado = n3
    }

    return resultado
}


main()