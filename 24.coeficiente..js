import { question } from "readline-sync";

//24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o coeficiente A deve ser diferente de 0 (zero).

function main(){
    const a = Number(question('Coeficiente de A: '))
    const b = Number(question('Coeficiente de B: '))
    const c = Number(question('Coeficiente de C: '))

    if (a != 0){
        console.log(raiz_quadrada(a,b,c))
    }else{
        console.log('Coeficiente de A deve ser diferente de 0!')
    }
}

function raiz_quadrada(a,b,c){
    let r1
    let r2
    let r3
    r1 = Math.floor(Math.sqrt(a))
    r2 = Math.floor(Math.sqrt(b))
    r3 = Math.floor(Math.sqrt(c))

    return `A raiz quadrada dos coeficientes A,B e C são, respectivamente ${r1},${r2} e ${r3}`


}

main()