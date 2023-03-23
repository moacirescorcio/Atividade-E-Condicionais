import { question } from "readline-sync";

//19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea (IMC = peso / altura2 ). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).

function main(){
    const altura = Number(question('Qual sua altura?(m) '))
    const peso = Number(question('Qual peso peso? '))

    const imc = calcular_imc(altura,peso)
    const resultado = tipo(imc)

    console.log(`Seu imc foi de ${imc}`)
    console.log(`Você está: ${resultado}`)

}

function calcular_imc(altura,peso){
    let resultado

    resultado = Math.floor(peso / (altura**2))
    return resultado
}

function tipo(imc){
    let resultado
    if (imc < 25){
        return resultado = 'PESO NORMAL'
    }else if(imc < 30){
        return resultado = 'OBESO'
    }else{
        return resultado = 'OBESIDADE MÓRBIDA'
    }
}

main()