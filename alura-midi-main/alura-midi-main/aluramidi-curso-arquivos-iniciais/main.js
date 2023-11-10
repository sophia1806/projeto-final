function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const litaDeTelas = document.querySelectorAll('.tecla');

for(let contador = 0; contador<listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.claslist[1];
    const isAudio = '#som_${instrumento}';

    tecla.onclick = function () {
        tocaSomPom(idAudio);
    }
}

