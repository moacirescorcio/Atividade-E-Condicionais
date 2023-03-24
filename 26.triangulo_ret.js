import { question } from "readline-sync";

//26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

//h² = c² + c²

function main(){
    const l1 = Number(question('Lado 1: '))
    const l2 = Number(question('Lado 2: '))
    const l3 = Number(question('Lado 3: '))

    console.log(hip_cat(l1,l2,l3))

}

function hip_cat(l1,l2,l3){
    if (l1 === Math.sqrt(l2**2+l3**2)){
        return `${l1} é a hipotenusa e ${l2} e ${l3} são os catetos.`
    }else if (l2 === Math.sqrt(l1**2+l3**2)){
        return `${l2} é a hipotenusa e ${l1} e ${l3} são os catetos.`
    }else if (l3 === Math.sqrt(l2**2+l1**2)){
        return `${l3} é a hipotenusa e ${l1} e ${l2} são os catetos.`
}   }

main()