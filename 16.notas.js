import { question } from "readline-sync";

//16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve escreva “Reprovado”.

function main(){
    const nota1 = Number(question('Nota 1: '))
    const nota2 = Number(question('Nota 2: '))

    const media = calcular_media(nota1,nota2)

    console.log(`O aluno está ${media}!`)
}

function calcular_media(n1,n2){
    let resultado
    let media

    media = (n1+n2)/2
    if (media >= 7){
        resultado = 'APROVADO'
    }else if(media < 7){
        console.log('Aluno de prova final. Não obteve média 7!')
        const nota_final = Number(question('Nota prova final: '))
        const media_final = (media+nota_final)/2
        if (media_final >= 5){
            resultado = 'APROVADO'
        }else{
            resultado = 'REPROVADO'
        }
    }
    return resultado
}

main()