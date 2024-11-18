// Inicializando categorias
const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

// Função para exibir a lista de compras
function exibirLista() {
    let mensagem = "Lista de compras:\n";
    for (let categoria in listaDeCompras) {
        mensagem += `  ${categoria}: ${listaDeCompras[categoria].join(", ") || "Nenhum item"}\n`;
    }
    alert(mensagem);
}

// Loop principal
let continuar = true;

while (continuar) {
    const acao = prompt("Você deseja adicionar, remover um item da lista de compras ou encerrar? Responda com 'adicionar', 'remover' ou 'encerrar'.").toLowerCase();

    if (acao === "adicionar") {
        const comida = prompt("Qual comida você deseja adicionar?");
        const categoria = prompt("Em qual categoria essa comida se encaixa? Escolha entre: 'Frutas', 'Laticínios', 'Congelados', 'Doces' ou 'Outros'.").toLowerCase();

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
    } else if (acao === "remover") {
        // Verifica se há itens na lista
        const itensNaLista = Object.values(listaDeCompras).some(categoria => categoria.length > 0);

        if (!itensNaLista) {
            alert("A lista está vazia. Não há itens para remover.");
        } else {
            exibirLista();
            const itemParaRemover = prompt("Digite o nome do item que deseja remover:");

            let itemEncontrado = false;
            for (let categoria in listaDeCompras) {
                const index = listaDeCompras[categoria].indexOf(itemParaRemover);
                if (index !== -1) {
                    listaDeCompras[categoria].splice(index, 1);
                    alert(`O item "${itemParaRemover}" foi removido da categoria ${categoria}.`);
                    itemEncontrado = true;
                    break;
                }
            }

            if (!itemEncontrado) {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
        }
    } else if (acao === "encerrar") {
        continuar = false;
        alert("Encerrando o programa. Aqui está sua lista final:");
        exibirLista();
    } else {
        alert("Opção inválida. Por favor, responda com 'adicionar', 'remover' ou 'encerrar'.");
    }
}

