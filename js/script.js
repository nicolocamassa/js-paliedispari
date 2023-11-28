/* Inizializziamo la funzione */
function checkPalindrome(word){
        /* Verifichiamo la parola venga invertita */
        console.log(word.split('').reverse().join('').toLowerCase())
}

/* Diamo in input la parola da verificare */
let parola = prompt('Inserisci una parola');
checkPalindrome(parola);
