import { question } from "readline-sync";

//27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu nascimento e a data (dia, mês e ano) atual.

function main(){
    const d_nas = Number(question('Dia de nascimento: '))
    const m_nas = Number(question('Mês de nascimento: '))
    const a_nas = Number(question('Ano de nascimento: '))
    const d_atual = Number(question('Dia atual: '))
    const m_atual = Number(question('Mês atual: '))
    const a_atual = Number(question('Ano atual: '))

    console.log(descobrir_idade(d_nas,m_nas,a_nas,d_atual,m_atual,a_atual))
}

function descobrir_idade(d1,m1,a1,d2,m2,a2){
    let anos
    let meses
    let dias
    anos = a2 - a1
    meses = m2 - m1
    dias = d2 - d1
    
    if (m2 < m1){
        anos = anos - 1
    }else if (m2 === m1 && d2 < d1){
        anos = anos -1
        meses = 11
        dias = dias+31
        
    }

    return `Você tem ${anos} anos, ${meses} meses e ${dias} dias.`
}

main()