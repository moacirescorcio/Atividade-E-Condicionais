import { question } from "readline-sync";

//7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).

function main(){
    const n1 = Number(question('Lado 1: '))
    const n2 = Number(question('Lado 2: '))
    const n3 = Number(question('Lado 3: '))

    if (n1 != 0 && n2!= 0 && n3!=0){
        const triangulo = e_triangulo(n1,n2,n3)
    

        console.log(`Os lados ${triangulo} um triângulo.`)

        if (triangulo === 'FORMAM'){
            const tipo = qual_tipo(n1,n2,n3)
        }
    }else{
        console.log('Não existe lado de tamanho 0!')
    }

}

function e_triangulo(n1,n2,n3){
    let resultado
    if (n1+n2 > n3 && n1+n3 > n2 && n2+n3 > n1 && n3+n1 > n2){
        resultado = 'FORMAM'
    }else{
        resultado = 'NÃO FORMAM'
    }

    return resultado
}

function qual_tipo(n1,n2,n3){
    let resultado
    if (n1 === n2 && n2 === n3){
        console.log('É um triângulo equilátero!')
    }else if (n1 === n2 || n2 === n3 || n3 === n1){
        console.log('É um triângulo isóceles!')
    }else{
        console.log('É um triângulo escaleno!')
    }

    return resultado
}

main()