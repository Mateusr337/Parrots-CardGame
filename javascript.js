numeroCartas();

function numeroCartas() {
    let nCartas = prompt("Com quantas cartas deseja jogar? insira um número par entre 4 e 14:");

    while (nCartas < 4 || nCartas > 14 || (nCartas % 2) != 0) {
        nCartas = prompt("Com quantas cartas deseja jogar? insira um número par entre 4 e 14:");
    }

    let mesa = document.querySelector("main");
    for (let i = 0; i < nCartas; i++) {
        mesa.innerHTML += `<section> <img src="/images/front.png" alt=""> </section>`;
    }
}

function comparador() {
    return Math.random() - 0.5;
}
