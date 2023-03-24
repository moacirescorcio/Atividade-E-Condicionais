import { question } from "readline-sync";

//23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais recente.

function main(){
    const dia_1 = Number(question('Dia 1: '))
    const mes_1 = Number(question('Mês 1: '))
    const ano_1 = Number(question('Ano 1: '))
    const dia_2 = Number(question('Dia 2: '))
    const mes_2 = Number(question('Mês 2: '))
    const ano_2 = Number(question('Ano 2: '))

    console.log(data_mais_recente(dia_1,mes_1,ano_1,dia_2,mes_2,ano_2))
}

function data_mais_recente(dia_1,mes_1,ano_1,dia_2,mes_2,ano_2){
    if (ano_1 === ano_2){
        if (mes_1 === mes_2){
            if(dia_1 > dia_2){
                return `Data mais recente é ${dia_1}/${mes_1}/${ano_1}`
            }else{
                return `Data mais recente é ${dia_2}/${mes_2}/${ano_2}`
            }
        }else if ( mes_1 > mes_2){
            return `Data mais recente é ${dia_1}/${mes_1}/${ano_1}`
        }else{
            return `Data mais recente é ${dia_2}/${mes_2}/${ano_2}`
        }
    }else if (ano_1 > ano_2){
        return `Data mais recente é ${dia_1}/${mes_1}/${ano_1}`
    }else{
        return `Data mais recente é ${dia_2}/${mes_2}/${ano_2}`
    }
}
main()