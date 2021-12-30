
var interval;

var timer = 0;

function atualizarTexto(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += " " + numero;
    numero++;
}



function iniciar() {

    timer = setTimeout( atualizarTexto, 3000);

}

function parar(){
    clearInterval(timer);
}