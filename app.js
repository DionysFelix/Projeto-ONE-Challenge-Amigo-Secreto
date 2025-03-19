let amigos = [];

function adicionarAmigo() {
    const nomeDoAmigo = document.getElementById("amigo");
    const nome = nomeDoAmigo.value.trim();

    if (!nome) {
        alert("Amigão, coloca um nome aí!");
        return;
    }

    amigos.push(nome);
    nomeDoAmigo.value = "";
    exibirAmigos();
}

function exibirAmigos() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpa a lista de amigos na tela

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Não há amigos suficientes para sortear. Adicione pelo menos dois.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.querySelector("#resultado");

    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
