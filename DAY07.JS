// Funções para as operações
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    return a / b;
}

// Função principal
function calculadora() {
    let continuar = true;

    while (continuar) {
        // Exibe o menu
        const operacao = prompt(
            "Escolha uma operação:\n" +
            "1 - Soma\n" +
            "2 - Subtração\n" +
            "3 - Multiplicação\n" +
            "4 - Divisão\n" +
            "5 - Sair"
        );

        // Verifica a opção escolhida
        switch (operacao) {
            case "1": {
                const num1 = parseFloat(prompt("Digite o primeiro número:"));
                const num2 = parseFloat(prompt("Digite o segundo número:"));
                alert(`Resultado: ${soma(num1, num2)}`);
                break;
            }
            case "2": {
                const num1 = parseFloat(prompt("Digite o primeiro número:"));
                const num2 = parseFloat(prompt("Digite o segundo número:"));
                alert(`Resultado: ${subtracao(num1, num2)}`);
                break;
            }
            case "3": {
                const num1 = parseFloat(prompt("Digite o primeiro número:"));
                const num2 = parseFloat(prompt("Digite o segundo número:"));
                alert(`Resultado: ${multiplicacao(num1, num2)}`);
                break;
            }
            case "4": {
                const num1 = parseFloat(prompt("Digite o primeiro número:"));
                const num2 = parseFloat(prompt("Digite o segundo número:"));
                alert(`Resultado: ${divisao(num1, num2)}`);
                break;
            }
            case "5":
                alert("Até a próxima!");
                continuar = false;
                break;
            default:
                alert("Opção inválida. Por favor, escolha uma operação válida.");
        }
    }
}

// Inicia a calculadora
calculadora();
