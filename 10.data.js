import { question } from "readline-sync";

//10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

function main(){
    const dia = Number(question('Dia: '))
    const mes = Number(question('Mês: '))
    const ano = Number(question('Ano: '))

    const resultado = verificar_data(dia,mes,ano)

    console.log(`A data ${resultado} válida!`)
}

function verificar_data(d,m,a){
    if (m = )
}

main()