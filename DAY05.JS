// Inicializando categorias
const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

// Loop principal para adicionar itens
let adicionarMais = true;

while (adicionarMais) {
    const desejaAdicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda com 'sim' ou 'não'.").toLowerCase();

    if (desejaAdicionar === "sim") {
        const comida = prompt("Qual comida você deseja adicionar?");
        const categoria = prompt("Em qual categoria essa comida se encaixa? Escolha entre: 'Frutas', 'Laticínios', 'Congelados', 'Doces' ou 'Outros'.").toLowerCase();

        // Adicionando o item na categoria correspondente
        if (categoria === "frutas") {
            listaDeCompras.Frutas.push(comida);
        } else if (categoria === "laticínios") {
            listaDeCompras.Laticínios.push(comida);
        } else if (categoria === "congelados") {
            listaDeCompras.Congelados.push(comida);
        } else if (categoria === "doces") {
            listaDeCompras.Doces.push(comida);
        } else {
            listaDeCompras.Outros.push(comida);
        }
    } else if (desejaAdicionar === "não") {
        adicionarMais = false;
    } else {
        alert("Resposta inválida. Por favor, responda com 'sim' ou 'não'.");
    }
}

// Exibindo a lista de compras
let mensagem = "Lista de compras:\n";
for (let categoria in listaDeCompras) {
    mensagem += `  ${categoria}: ${listaDeCompras[categoria].join(", ") || "Nenhum item"}\n`;
}

alert(mensagem);
