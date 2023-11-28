/* Inizializziamo la funzione */
function checkPalindrome(word) {
    /* Verifichiamo la parola venga invertita */
    let reversedWord = word.split('').reverse().join('').toLowerCase();

    /* Controllo della parola e output risultato*/
    if(word === reversedWord){
        console.log('La parola è palindroma')
    }else{
        console.log('La parola NON è palindroma')
    }
}

/* Diamo in input la parola da verificare */
/* let parola = prompt('Inserisci una parola'); */
/* checkPalindrome(parola); */

/* ESERCIZIO 2 */
/* Inizializzazione variabili */
let oddEven = '';
let even = true;

/* Prendiamo in input la scelta del giocatore */
oddEven = prompt('Scrivi "pari" o "dispari" per giocare');

/* Verifichiamo che il giocatore scriva correttamente la scelta */
while(oddEven != "pari" && oddEven != "dispari"){
    oddEven = prompt('Hai sbagliato! Scrivi "pari" o "dispari" per giocare');
}

console.log(oddEven);
let userNumber = prompt('Scegli un numero da 1 a 5');

while(userNumber == 0 || userNumber>5){
    userNumber = prompt('Scegli un maggiore di 0 e minore di 5');
}

console.log(userNumber);

