import { question } from "readline-sync";

//10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

function main(){
    const dia = Number(question('Dia: '))
    const mes = Number(question('Mês: '))
    const ano = Number(question('Ano: '))

    const resultado = verificar_data(dia,mes,ano)

    console.log(`A data é ${resultado}!`)
}

function verificar_data(d,m,a){
    if (d < 1){
        return `INVÁLIDA`
    }else if (d > 31){
        return `INVÁLIDA`
    }else if(m === 4 || m === 6 || m === 9 || m === 11 && d > 30){
        return `INVÁLIDA`
    }else if(m == 2){
        if (a % 4 === 0 && d > 29){
            return `INVÁLIDA`
        }else if(d > 28){
            return `INVÁLIDA`
        }
    }else{
        return `VÁLIDA`
    }
}

main()