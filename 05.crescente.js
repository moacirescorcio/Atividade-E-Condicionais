import { question } from "readline-sync";

//5. Leia 3 (três) números e escreva-os em ordem crescente.

function main(){
    const n1 = Number(question('Número 1: '))
    const n2 = Number(question('Número 2: '))
    const n3 = Number(question('Número 3: '))

    const resultado = crescente(n1,n2,n3)
   
}

function crescente(n1,n2,n3){


    if (n1 > n2 && n1 > n3 && n2 > n3){
        console.log(`Ordem crescente dos números:${n1},${n2},${n3}.`)
    }else if (n1 > n2 && n1 > n3 && n3 > n2) {
        console.log(`Ordem crescente dos números:${n1},${n3},${n2}.`)
    }else if (n2 > n1 && n2 > n3 && n1 > n3){
        console.log(`Ordem crescente dos números:${n2},${n1},${n3}.`)
    }else if(n2 > n1 && n2 > n3 && n3 > n1){
        console.log(`Ordem crescente dos números:${n2},${n3},${n1}.`)
    }else if(n3 > n1 && n3 > n2 && n2 > n1){
        console.log(`Ordem crescente dos números:${n3},${n2},${n1}.`)
    }else if(n3 > n1 && n3 > n2 && n1 > n2){
        console.log(`Ordem crescente dos números:${n3},${n1},${n2}.`)
    }
}

main()