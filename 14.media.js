import { question } from "readline-sync";

//14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

function main(){
    const n1 = Number(question('Primeiro número: '))
    const n2 = Number(question('Segundo número: '))
    const n3 = Number(question('Terceiro número: '))
    const n4 = Number(question('Quarto número: '))
    const n5 = Number(question('Quinto número: '))

    const media = tirar_media(n1,n2,n3,n4,n5)
    

    console.log(`A média foi de ${media}`)
    maior_q_media(media,n1,n2,n3,n4,n5)
    

}

function tirar_media(n1,n2,n3,n4,n5){
    const r = (n1+n2+n3+n4+n5) / 5
    return Math.floor(r)
}

function maior_q_media(media,n1,n2,n3,n4,n5){
    if (n1 > media){
        console.log(`O número ${n1} é maior que a média.`)
    }
    if (n2 > media){
        console.log(`O número ${n2} é maior que a média.`)
    }
    if (n3 > media){
        console.log (`O número ${n3} é maior que a média.`)
    }
    if (n4 > media){
        console.log (`O número ${n4} é maior que a média.`)
    }
    if (n5 > media){
        console.log(`O número ${n5} é maior que a média.`)
    }
    
}

main()