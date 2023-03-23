import { question } from "readline-sync";

//12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

function main(){
    const n = Number(question('Digite um número: '))

    const resultado = par_impar(n)

    console.log(`O número digitado é ${resultado}!`)
}

function par_impar(n){
    if (n % 2 === 0){
        return `PAR`
    }else{
        return `ÍMPAR`
    }
}

main()
