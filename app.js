function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoHTML("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"} :v/`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoHTML("p","El número es menor >:v")    
        } else {
            asignarTextoHTML("p","El número es mayor >:v")    
        }
        limpiarCaja();
        intentos++;
    }
    return
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = ""
}

function asignarTextoHTML(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto

}

function generarNumeroSecreto() {
    let numeroAleatorio = Math.floor(Math.random()*numeroMax)+1;
    if (listaNumeroSorteado.length == numeroMax) {
        asignarTextoHTML("p","Ya se sortearon todos los números posibles")
    } else {
        if (listaNumeroSorteado.includes(numeroAleatorio)) {
            return generarNumeroSecreto()
        } else {
            listaNumeroSorteado.push(numeroAleatorio)
            return numeroAleatorio
        }
    }
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar el mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    parametrosIniciales()
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true")
}

function parametrosIniciales() {
    numeroSecreto = generarNumeroSecreto()
    intentos = 1    
    asignarTextoHTML("h1","Juego del número secreto")
    asignarTextoHTML("p",`Indica un número del 1 al ${numeroMax}`)
}
let numeroSecreto = 0
let intentos = 0
let numeroMax = 10
let listaNumeroSorteado = []
parametrosIniciales()
