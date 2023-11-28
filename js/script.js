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
let parola = prompt('Inserisci una parola');
checkPalindrome(parola);
