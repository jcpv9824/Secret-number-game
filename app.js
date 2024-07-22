// Declare global variables
let secretNumber;
let counter;
let drawnNumbers = [0];

// Initialize the game with initial conditions
initialConditions();

// Function to assign text to an HTML element
function assignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

// Function to generate a secret number
function generateSecretNumber() {
    let number = Math.floor(Math.random() * 10) + 1;
    // Reset the array if it contains 11 numbers
    if (drawnNumbers.length == 11) {
        drawnNumbers = [0];
    } else {
        // Ensure the number is not repeated
        while (drawnNumbers.includes(number)) {
            number = Math.floor(Math.random() * 10) + 1;
            console.log('Repeated number');
        }
    }
    drawnNumbers.push(number);
    console.log(drawnNumbers);
    return number;
}

// Function to verify the user's attempt
function checkAttempt() {
    let attempt = parseInt(document.getElementById('userValue').value);
    if (attempt == secretNumber) {
        assignTextToElement('p', `You guessed the number in ${counter} ${(counter == 1) ? "try" : "tries"}`);
        document.getElementById('restart').removeAttribute('disabled');
    } else if (attempt <= secretNumber) {
        assignTextToElement('p', 'The secret number is higher');
        counter++;
        clearBox();
    } else {
        assignTextToElement('p', 'The secret number is lower');
        counter++;
        clearBox();
    }
    console.log(counter);
}

// Function to clear the input box
function clearBox() {
    document.getElementById('userValue').value = '';
}

// Function to set initial conditions for the game
function initialConditions() {
    assignTextToElement('h1', 'Game of the Secret Number');
    assignTextToElement('p', 'Select a number between 1 to 10');
    secretNumber = generateSecretNumber();
    console.log(secretNumber);
    counter = 1;
    console.log(counter);
}

// Function to restart the game
function restartGame() {
    clearBox();
    initialConditions();
    document.getElementById('restart').setAttribute('disabled', 'true');
}
