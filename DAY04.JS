function iniciarJogo() {
    // Gerar número randômico entre 0 e 10
    const numeroSecreto = Math.floor(Math.random() * 11);
 
    // Variáveis para controle
    let tentativas = 3;
    let acertou = false;
 
    // Loop para as tentativas
    while (tentativas > 0 && !acertou) {
        const chute = parseInt(prompt(`Você tem ${tentativas} tentativa(s). Qual é o seu palpite?`), 10);
 
        if (isNaN(chute)) {
            alert("Por favor, insira um número válido.");
            continue; // Ignora essa tentativa sem descontar
        }
 
        if (chute === numeroSecreto) {
            alert("Parabéns! Você acertou o número!");
            acertou = true;
        } else {
            tentativas--;
            if (tentativas > 0) {
                const dica = chute > numeroSecreto ? "menor" : "maior";
                alert(`Errou! Tente um número ${dica}.`);
            }
        }
    }
 
    // Caso o usuário não acerte
    if (!acertou) {
        alert(`Que pena! Você usou todas as tentativas. O número secreto era ${numeroSecreto}.`);
    }
 
    // Perguntar se o usuário deseja jogar novamente
    const jogarNovamente = prompt("Deseja jogar novamente? Responda com 'sim' ou 'não'.").toLowerCase();
    if (jogarNovamente === "sim") {
        iniciarJogo(); // Reinicia o jogo
    } else {
        alert("Obrigado por jogar! Até a próxima.");
    }
}
 
// Inicia o jogo pela primeira vez
iniciarJogo();
