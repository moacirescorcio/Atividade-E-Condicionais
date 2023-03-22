import { question } from "readline-sync";

//9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

function main(){
    const n = Number(question('Digite um número entre 0 e 100: '))

    const primo = e_primo(n)

    console.log(`O número ${primo} primo!`)
}

function e_primo(n){
    let resultado
    if (n <= 1){
        resultado = 'NÃO É'
    }else if (n === 2 || n === 3 || n === 5 || n === 7){
        resultado = 'É'
    }else if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0){
        resultado = 'NÃO É'
    }else{
        resultado = 'É'
    }

    return resultado
}

main()