let nCartas;
let acertos = 0;
let jogadas = 0;
let contadorTempo = 0;
let tempo;
numeroCartas();

function numeroCartas() {
    //Número de cartas que o usuário escolhe
    do {
        nCartas = prompt("Com quantas cartas deseja jogar? insira um número par entre 4 e 14:");
    } while (nCartas < 4 || nCartas > 14 || (nCartas % 2) !== 0);
    //Número de cartas 
    let mesa = document.querySelector("main");

    //Array com gif's:
    const gif = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];

    let gifAdicionar = [];
    for (let i = 0; i < nCartas / 2; i++) {
        gifAdicionar.push(gif[i]);
        gifAdicionar.push(gif[i]);
    }
    //Embaralhar 
    gifAdicionar.sort(comparador);

    mesa.innerHTML = "";
    for (let i = 0; i < nCartas; i++) {
        mesa.innerHTML +=
            `<section data-identifier="card" class="card" onclick="virarCartas(this)">
            <div data-identifier="front-face" class="front-face face">
              <img src="/images/front.png" alt="">    
            </div>
            <div data-identifier="back-face" class="back-face face">
             <img src="/images/${gifAdicionar[i]}" alt="">  
            </div>
          </section>`;
    }
    tempo = setInterval(encrementarTempo, 1000);
}

function encrementarTempo() {
    let numero = document.querySelector(".cronometro");
    numero.innerHTML = contadorTempo++;
}

//Para embaralhar as cartas posteriormente com a função: "minhaArray.sort(comparador);"  Após esta linha, a minhaArray estará embaralhada
function comparador() {
    return Math.random() - 0.5;
}

function virarCartas(card) {
    const verificarBack = document.querySelector(".virarBack");
    const verificarFront = document.querySelector(".virarFront");
    const cardFront = card.children[0];
    const cardBack = card.children[1];
    if (!card.classList.contains("virarBackSempre") && verificarBack === null) {
        cardFront.classList.add("virarFront");
        cardBack.classList.add("virarBack");
        jogadas++;

    } if (!card.classList.contains("virarBackSempre") && verificarBack !== null) {
        cardFront.classList.add("virarFront");
        cardBack.classList.add("virarBack");
        jogadas++;
    }
    setTimeout(verificarCartas, 1000, verificarBack, verificarFront, cardBack, cardFront);
}

function verificarCartas(verificarBack, verificarFront, cardBack, cardFront) {
    if (verificarBack.innerHTML === cardBack.innerHTML) {
        verificarFront.classList.remove("virarFront");
        verificarBack.classList.remove("virarBack");
        cardFront.classList.remove("virarFront");
        cardBack.classList.remove("virarBack");

        verificarFront.classList.add("virarFrontSempre");
        verificarBack.classList.add("virarBackSempre");
        cardFront.classList.add("virarFrontSempre");
        cardBack.classList.add("virarBackSempre");

        acertos++;
    }
    if (verificarBack.innerHTML !== cardBack.innerHTML) {
        verificarFront.classList.remove("virarFront");
        verificarBack.classList.remove("virarBack");
        cardFront.classList.remove("virarFront");
        cardBack.classList.remove("virarBack");
    }
    verificarTodos();
}

function verificarTodos() {
    if (acertos === nCartas / 2) {
        clearInterval(tempo);
        alert("Voce ganhou! Com " + jogadas + " jogadas, em " + (contadorTempo - 1) + " segundos.");

        let jogarNovamente = prompt("Quer jogar novamente? Digite 'S' ou 'N':");
        while (jogarNovamente !== 'S' && jogarNovamente !== 'N') {
            jogarNovamente = prompt("Quer jogar novamente? Digite 'S' ou 'N':");
        }

        if (jogarNovamente === "S") {
            numeroCartas();
            jogadas = 0;
            acertos = 0;
            contadorTempo = 0;
        }
    }
}

