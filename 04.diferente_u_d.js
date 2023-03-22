import { question } from "readline-sync";

//4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade.

function main(){
    const n = Number(question('Qual o número? '))

    const resultado = igual_diferente(n)

    console.log(`O número possui a dezena e a unidade ${resultado}!`)
}

function igual_diferente(n){
    let resultado
    const d = Math.floor(n/10)
    const u = n % 10

    if (d === u){
        resultado = 'IGUAIS' 
    }else{
        resultado = 'DIFERENTES'
    }

    return resultado
}

main()