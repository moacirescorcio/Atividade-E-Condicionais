import { question } from "readline-sync";

//25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever uma mensagem de permissão de acesso ou não.

function main(){
    const senha = Number(question('Digite a senha: '))

    const acesso = validar_senha(senha)

    console.log(`Acesso ${acesso}!`)
}

function validar_senha(s){
    let ac
    if (s === 1234){
        return ac = 'PERMITIDO'
    }else{
        return ac = 'NEGADO. Tente novamente'
    }
}

main()