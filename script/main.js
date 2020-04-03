// Palidromo
alert('Benvenuto al gioco del Palindromo');

var userWord = prompt('Inserisci una parola, non preoccuparti del case sensitive').toLowerCase().trim();

if ( userWord == (palindromo(userWord)) ){
  alert('La parola digitata è palindroma');
} else{
  alert('La parola digitata NON è palindroma')
}

function palindromo (word){
  var reverseWord = '';
  
  for (var i = (word.length - 1); i >= 0 ; i--){
    reverseWord += word[i];
  }

  return reverseWord;
}

// Pari e Dispari
alert('Benvenuto al gioco Pari o Dispari');

// Respingo l'utente se la scelta è diversa da pari / dispari, con fix su Case Sensitive
while ( userChoice !== 'PARI' && userChoice !== 'DISPARI') {
  var userChoice = prompt('Scegli pari o dispari').toUpperCase();
}

console.log('Scelta utente: ' + userChoice);

// Verifico che la scelta sia coerente con il range richiesto
while ( (userNumber < 1 || userNumber > 5) || isNaN(userNumber) ) {
  var userNumber = parseInt( prompt('Scegli un numero da 1 a 5') );
}

console.log('Numero Utente: ' + userNumber);

var computerNumber = randomNumber(1,5);
console.log('Numero Computer: ' + computerNumber);
alert('Il computer ha scelto il numero: ' + computerNumber);

function randomNumber (min, max){
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

var somma = userNumber + computerNumber;
console.log('Somma dei due numeri = ' + somma);
alert('La somma dei due numeri è: ' + somma);

if (pariDispari(somma) == 'PARI'){
  alert('La somma dei due numeri è pari');
} else{
  alert('La somma dei due numeri è dispari');
}

if (pariDispari(somma) == userChoice) {
  alert('Il giocatore vince');
} else{
  alert('Il computer vince');
}

function pariDispari (numberCheck){
  if ( (numberCheck % 2) == 0 ){
    return 'PARI';
  } 
  return 'DISPARI';

}

