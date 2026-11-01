function irAEscena(numero) {
    const escenas = document.querySelectorAll(".escena");

    escenas.forEach(function(escena) {
        escena.classList.remove("activa");
    });

    const destino = document.getElementById("escena" + numero);

    if (destino) {
        destino.classList.add("activa");
    }
}

function comenzarHistoria() {
    const portada = document.getElementById("portada");
    const primeraEscena = document.getElementById("escena1");
    const musica = document.getElementById("musicaFondo");

    if (portada && primeraEscena) {
        primeraEscena.classList.add("activa");

        if (musica) {
            musica.volume = 0.35;
            musica.play();
        }

        portada.remove();
    }
}