// Global variables
let numeroSecreto;
let counter;
let numerosSorteados = [0];

// Set initial conditions for the game
initialConditions();

/**
 * Assigns text to a specified HTML element.
 * elemento - The selector of the HTML element.
 * texto - The text to assign to the element.
 */
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

/**
 * Generates a secret number between 1 and 10.
 * Ensures the number hasn't been generated before in the current game session.
 * Returns the generated secret number.
 */
function generarNumeroSecreto() {
    let number = Math.floor(Math.random() * 10) + 1;

    // Reset the sorted numbers array if it has 11 elements
    if (numerosSorteados.length == 11) {
        numerosSorteados = [0];
    } else {
        // Ensure the number is unique
        while (numerosSorteados.includes(number)) {
            number = Math.floor(Math.random() * 10) + 1;
            console.log('Repeated number');
        }
    }

    numerosSorteados.push(number);
    console.log(numerosSorteados);
    return number;
}

/**
 * Verifies the user's attempt to guess the secret number.
 * Provides feedback and updates the counter.
 */
function verificarIntento() {
    let intento = parseInt(document.getElementById('valorUsuario').value);

    if (intento == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${counter} ${(counter == 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (intento <= numeroSecreto) {
        asignarTextoElemento('p', 'El numero secreto es mayor');
        counter++;
        cleanBox();
    } else {
        asignarTextoElemento('p', 'El numero secreto es menor');
        counter++;
        cleanBox();
    }
    console.log(counter);
}

/**
 * Clears the input box where the user enters their guess.
 */
function cleanBox() {
    document.getElementById('valorUsuario').value = '';
}

/**
 * Sets the initial conditions for the game.
 * Displays initial messages and generates a secret number.
 */
function initialConditions() {
    asignarTextoElemento('h1', 'Game of the secret number');
    asignarTextoElemento('p', 'Select a number between 1 to 10');
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    counter = 1;
    console.log(counter);
}

/**
 * Restarts the game by resetting conditions and disabling the restart button.
 */
function reiniciarJuego() {
    cleanBox();
    initialConditions();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
