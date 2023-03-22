import { question } from "readline-sync";

//8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva sua idade exata (em anos).

function main(){
    const dia_atual = Number(question('Dia atual: '))
    const mes_atual = Number(question('Mês atual: '))
    const ano_atual = Number(question('Ano atual: '))
    const dia_nasc = Number(question('Dia de nascimento: '))
    const mes_nasc = Number(question('Mês de nascimento: '))
    const ano_nasc = Number(question('Ano de nascimento: '))

    const idade = descobrir_idade(dia_atual,mes_atual,ano_atual,dia_nasc,mes_nasc,ano_nasc)

    console.log(`Você possui ${idade} anos de idade!`)
}

function descobrir_idade(dia_atual,mes_atual,ano_atual,dia_nasc,mes_nasc,ano_nasc){
    let idade
    if (mes_atual < mes_nasc){
        idade = (ano_atual - ano_nasc) - 1
    }else if (mes_atual === mes_nasc){
        if (dia_atual < dia_nasc){
            idade = (ano_atual - ano_nasc) - 1
        }else{
            idade = (ano_atual - ano_nasc)
        }
    }else{
        idade = (ano_atual - ano_nasc)
    }

    return idade
}



main()