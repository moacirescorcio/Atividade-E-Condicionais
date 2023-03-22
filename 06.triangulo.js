import { question } from "readline-sync";

//6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau).

function main(){
    const n1 = Number(question('Ângulo 1: '))
    const n2 = Number(question('Ângulo 2: '))
    const n3 = Number(question('Ângulo 3: '))

    if (n1 != 0 && n2!= 0 && n3!=0){
            const triangulo = e_triangulo(n1,n2,n3)
        

        console.log(`Os ângulos ${triangulo} um triângulo.`)

        if (triangulo === 'FORMAM'){
            const tipo = qual_tipo(n1,n2,n3)
        }
    }else{
        console.log('Não existe ângulo de 0º!')
    }

}

function e_triangulo(n1,n2,n3){
    let resultado

    if (n1 + n2 + n3 === 180){
        resultado = 'FORMAM'
    }else{
        resultado = 'NÃO FORMAM'
    }

    return resultado
}

function qual_tipo(n1,n2,n3){
    if (n1 < 90 && n2 < 90 && n3 < 90){
        console.log(`É um triângulo acutângulo!`)
    }else if (n1 === 90 || n2 === 90 || n3 === 90){
        console.log("É um triângulo retângulo!")
    }else if (n1 > 90 || n2 > 90 || n3 > 90){
        console.log('É um triângulo obtusângulo!')
    }
}

main()