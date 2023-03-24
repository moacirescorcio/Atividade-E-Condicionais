import { question } from "readline-sync";

//21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso contrario, é arredondado para o inteiro imediatamente inferior.

function main(){
    const n = Number(question('Digite um número: '))

    const n2 = arredondar_numero(n)

    console.log(`O número arredondado é ${n2}.`)

}

function arredondar_numero(n){
    let inteiro
    let frac
    //seprando a parte inteira com o Math.truc e dimnuido do proprio número para descobrir a parte decimal
    inteiro = Math.trunc(n)
    frac = n - inteiro
    if (frac >= 0.5){
        return inteiro+1
    }else{
        return inteiro
    }
}

main()