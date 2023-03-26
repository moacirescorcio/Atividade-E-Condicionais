import { question } from "readline-sync";

//30. Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste terceiro número é exatamente o número original de quatro dígitos. Por exemplo: 2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.

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
    
    if ((d1+d2)**2 === n){
        return `O número ${n} obedece a característica.`
    }else{
        return `O número ${n} não obedece a característica.`
    }
}

main()

