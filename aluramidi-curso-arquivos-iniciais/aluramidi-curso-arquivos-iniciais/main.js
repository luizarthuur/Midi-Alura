function tocaSom (idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio).play();

    if  (elemento != null && elemento.localname === 'audio') {
        elemento.play();
    }

    else {
        console.log('O elemento não foi encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let cont = 0;

while (cont < listaDeTeclas.length) {

    const tecla = listaDeTeclas[cont]
    const instrumento = tecla.classList[1]

    tecla.onclick = function () {
        tocaSom(`#som_${instrumento}`);
    }

    cont ++

    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}


// event.code tras as informações do que está acontecendo na página em tempo real a partir de uma função com o parametro event

//listaDeTeclas[0].classList class list serve para pegar as informações de todas as classes do item (de acordo com o indice)
/*

mesma coisa, utilizando o for

for (let contador = 0; contador < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont]
    const instrumento = tecla.classList[1]

    tecla.onclick = function () {
        tocaSom(`#som_${instrumento}`);
    }

}
*/

