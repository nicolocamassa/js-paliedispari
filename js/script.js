/* Inizializziamo la funzione */
function checkPalindrome(word) {
    /* Verifichiamo la parola venga invertita */
    let reversedWord = word.split('').reverse().join('').toLowerCase();

    /* Controllo della parola e output risultato*/
    if (word === reversedWord) {
        console.log('La parola è palindroma')
    } else {
        console.log('La parola NON è palindroma')
    }
}

/* Diamo in input la parola da verificare */
/* let parola = prompt('Inserisci una parola'); */
/* checkPalindrome(parola); */

/* ESERCIZIO 2 */
/* Numero random per il bot */
function randomNumber() {
    let num = Math.floor(Math.random() * 5) + 1;

    return num;
}

/* Scelta del pari o dispari da parte del giocatore */
function userEvenOdd() {
    let oddEven = '';

    /* Prendiamo in input la scelta del giocatore */
    oddEven = prompt('Scrivi "pari" o "dispari" per giocare').toLowerCase();

    /* Verifichiamo che il giocatore scriva correttamente la scelta */
    while (oddEven != "pari" && oddEven != "dispari") {
        oddEven = prompt('Hai sbagliato! Scrivi "pari" o "dispari" per giocare').toLowerCase();;
    }

    return oddEven; 
}

/* Scelta del numero da parte dell'utente */
function userNumber() {
    let userNumber = prompt('Scegli un numero da 1 a 5');

    /* Richiedi la scelta se non rispetta i requisti */
    while (userNumber == 0 || userNumber > 5) {
        userNumber = prompt('Scegli un maggiore di 0 e minore di 5');
    }

    return parseInt(userNumber);
}

function winChecker( userNum, botNum, userChoose){
    let result = userNum + botNum;
    let message = '';

    if(result%2 == 0 && userChoose == "pari"){
        message = `La somma è: ${result}. Complimenti, hai vinto!`;
    }else if(result%2 != 0 && userChoose == "dispari"){
        message = `La somma è: ${result}. Complimenti, hai vinto!`;
    }else{
        message = `La somma è: ${result}. Mi dispiace hai perso`;
    }

    return message;
}

/* Inizializzazione variabili */
let even = true;
let botNum = randomNumber();
let userChoose = userEvenOdd();
let userNum = userNumber();


console.log('La tua scelta: ' + userChoose);
console.log('Il tuo numero: '+userNum);
console.log('Il numero del computer: '+botNum);
console.log(winChecker(userNum, botNum, userChoose));
