import { question } from "readline-sync";

//2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

function main(){
    const n1 = Number(question('Número 1: '))
    const n2 = Number(question('Número 2: '))

    const menor = descobrir_menor(n1,n2)
    const maior = descobrir_maior(n1,n2)

    console.log(`O menor número é ${menor} e o maior é ${maior}.`)
}

function descobrir_menor(n1,n2){
    let resultado
    if (n1 < n2){
        resultado = n1
    }else{
        resultado = n2
    }

    return resultado
}

function descobrir_maior(n1,n2){
    let resultado
    if (n1 > n2){
        resultado = n1
    }else{
        resultado = n2
    }

    return resultado
}
main()