import { question } from "readline-sync";

//28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área não pode ser negativo.

function main(){
    const x = Number(question('Coordenanda x: '))
    const y = Number(question('Coordenanda y: '))

    if (x > 0 && y > 0){
        const resultado = area_retangulo(x,y)
        console.log(`O retângulo tem área de ${resultado}.`)
    }else{
        console.log(`Insira valores acima de 0!`)
    }


}

function area_retangulo(x,y){
    let area

    area = x * y
    return area
}

main()