import { question } from "readline-sync";

//20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou quarto) em que o ângulo se localiza.

function main(){
    const angulo = Number(question('Digite a medida de um ângulo entre O e 360°:'))

    const resultado = qual_quadrante(angulo)

    console.log(`O ângulo digitado fica localiza no ${resultado}`)
}

function qual_quadrante(angulo){
    
    if (angulo <= 90){
        return '1º QUADRANTE'
    }else if (angulo <= 180){
        return `2º QUADRANTE`
    }else if (angulo <= 270){
        return '3º QUADRANTE'
    }else{
        return '4º QUADRANTE'
    }
}

main()