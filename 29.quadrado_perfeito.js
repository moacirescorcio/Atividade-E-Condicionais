import { question } from "readline-sync";

//29. Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas formadas pelos seus dois primeiros e dois últimos dígitos. Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito. Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.


function main(){
    const n = Number(question('Digite um número de 4 dígitos: '))

    const d1 = separar_dezena1(n)
    const d2 = separar_dezena2(n)
    console.log(quadrado_perfeito(d1,d2,n))
}

function separar_dezena1(n){
    let dezena
    dezena = Math.floor(n/100)
    return dezena
}

function separar_dezena2(n){
    let dezena
    dezena = n % 100
    return dezena
}
function quadrado_perfeito(d1,d2,n){
    
    if (d1 + d2 === Math.sqrt(n)){
        return `O número ${n} é um quadrado perfeito!`
    }else{
        return `O número ${n} não é um quadrado perfeito!`
    }
}

main()