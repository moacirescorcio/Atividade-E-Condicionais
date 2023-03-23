import { question } from "readline-sync";

//17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1 escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4 divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação escreva o quadrado dos números lidos.

function main(){
    const n1 = Number(question('Número 1: '))
    const n2 = Number(question('Número 2: '))

    console.log(contas(n1,n2))
}

function contas(n1,n2){
    let quadrado1
    let quadrado2
    let soma
    let resto
    let mult
    let div

    //se o resto da divisão for igual a 1
    if (n1%n2 === 1){
        soma = n1 + n2
        resto = n1 % n2
        return `O resto da divisão dos dois números é ${resto} e a soma entre eles é ${soma}.`
    
    //se o resto da divisão for igual a 2
    }else if (n1%n2 === 2){
        if (n1%2 === 0 && n2%2 === 0){
            return `O número 1 e número 2 são pares!`
        }else if(n1 % 2 === 0 && n2%2 != 0){
            return `O número 1 é par e o número 2 é ímpar`
        }else if (n1%2 != 0 && n2%2 === 0){
            return `O número 1 é ímpar e o número 2 é par`
        }else if (n1 != 0 && n2 % 2 != 0){
            return `Os números 1 e 2 são ímpares.`
        }
    
    //se o resto da divisão for igual a 3    
    }else if (n1%n2 === 3){
        mult = soma * n1
        return `A multiplicação da soma dos valores pelo primeiro valor é igual a ${mult}`
    
    //se o resto da divisão for igual a 4
    }else if (n1%n2 === 4){
        div = soma / n2
        return `A divisão da soma dos valores lidos pelo segundo valor é igual a ${div}`
    
    //demais casos
    }else{
        quadrado1 = n1**2
        quadrado2 = n2**2
        return `O quadrado do primeiro número é igual a ${quadrado1} e do segundo é igual a ${quadrado2}.`
    }
}

main()