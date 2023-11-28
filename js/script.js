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

/* Inizializzazione variabili */
let even = true;
let botNum = randomNumber();
let userChoose = userEvenOdd();
let userNum = userNumber();


console.log(userChoose);
console.log(userNum);
console.log(botNum);
