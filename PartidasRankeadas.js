// Importação do prompt-sync para rodar no Node.js
const prompt = require('prompt-sync')();

// Função principal que recebe vitórias e derrotas e calcula o saldo
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para definir o nível
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Nível não identificado";
    }

    // Mensagem de saída
    console.log(`O Herói tem de saldo **${saldoVitorias}** está no nível de **${nivel}**`);
}

// Laço para rodar repetidamente
while (true) {
    let vitorias = parseInt(prompt("Digite a quantidade de vitórias do herói: "));
    let derrotas = parseInt(prompt("Digite a quantidade de derrotas do herói: "));

    calcularRank(vitorias, derrotas);

    let continuar = prompt("Deseja calcular outro herói? (s/n): ").toLowerCase();
    if (continuar !== 's') {
        console.log("Programa finalizado.");
        break;
    }
}
