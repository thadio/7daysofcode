// Jogo interativo

// Parte 1: Escolha inicial
const area = prompt("Você quer seguir para a área de Front-End ou seguir para a área de Back-End? Responda com 'Front-End' ou 'Back-End'.");

// Parte 2: Escolha da tecnologia
let tecnologia;+
if (area === "Front-End") {
    tecnologia = prompt("Você quer aprender React ou aprender Vue? Responda com 'React' ou 'Vue'.");
} else if (area === "Back-End") {
    tecnologia = prompt("Você quer aprender C# ou aprender Java? Responda com 'C#' ou 'Java'.");
} else {
    alert("Área não reconhecida. Por favor, recarregue a página e tente novamente.");
}

// Parte 3: Escolha de especialização ou Fullstack
const caminho = prompt(`Você quer seguir se especializando na área de ${area} ou seguir se desenvolvendo para se tornar Fullstack? Responda com 'Especializar' ou 'Fullstack'.`);

if (caminho === "Especializar") {
    alert(`Ótima escolha! Continue se aprofundando em ${tecnologia} e se torne um especialista na área de ${area}!`);
} else if (caminho === "Fullstack") {
    alert("Fantástico! Expandir seus conhecimentos para se tornar Fullstack abrirá muitas portas!");
} else {
    alert("Escolha não reconhecida. Por favor, recarregue a página e tente novamente.");
}

// Parte 4: Tecnologias adicionais
let maisTecnologias = true;
while (maisTecnologias) {
    const novaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite o nome da tecnologia ou cancele para parar.");
    if (novaTecnologia) {
        alert(`Interessante! ${novaTecnologia} é uma ótima tecnologia para aprender.`);
    } else {
        maisTecnologias = false;
        alert("Obrigado por compartilhar suas preferências! Boa sorte em sua jornada de aprendizado!");
    }
}
