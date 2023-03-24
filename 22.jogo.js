import { question } from "readline-sync";

//22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia seguinte.

function main(){
    const h_inicio = Number(question('Hora de ínicio: '))
    const m_inicio = Number(question('Minutos de ínicio: '))
    const h_term = Number(question('Hora do término: '))
    const m_term = Number(question('Minutos do término: '))

    console.log(duracao(h_inicio,m_inicio,h_term,m_term))
}

function duracao(h1, m1, h2, m2) {
    let horas, minutos;
  
    // se forem 24h
    if (h1 === h2 && m1 === m2) {
      return "Jogo durou 24 horas!";
    }
  
    // se forem 23h ou menos
    if (h1 === h2) {
      horas = 0;
      minutos = Math.abs(m2 - m1);
    } else if (h1 < h2) {
      horas = h2 - h1;
      minutos = m2 - m1;
    } else {
      horas = 24 - h1 + h2;
      minutos = m2 - m1;
    }
  
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
  
    return `Jogo durou ${horas} horas e ${minutos} minutos`;
  }
  


main()