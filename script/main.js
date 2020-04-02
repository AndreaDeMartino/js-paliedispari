// Palidromo
alert('Benvenuto al gioco del Palindromo');

var userWord = prompt('Inserisci una parola, non preoccuparti del case sensitive').toLowerCase();

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

var userChoice = prompt('Scegli pari o dispari').toUpperCase();
console.log('Scelta utente: ' + userChoice);

// Respingo l'utente se la scelta è un numero o se è diversa da pari / dispari, con fix su Case Sensitive
if  ( (userChoice == isNaN) || 
    ((userChoice !== 'PARI' && userChoice !== 'DISPARI'))
    ){
  alert('Scelta errata');
} 

else{

var userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log('Numero Utente: ' + userNumber);

// Verifico che la scelta sia coerente con il range richiesto
if (userNumber == 0 || userNumber < 1 || userNumber > 5){
  alert('Scelta errata');
}

else{

var computerNumber = randomNumber();
console.log('Numero Computer: ' + computerNumber);
alert('Il computer ha scelto il numero: ' + computerNumber);

function randomNumber (){
  var number = Math.floor(Math.random() * 5 + 1);
  return number;
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
  var check = '';
  if ( (numberCheck % 2) == 0 ){
    check = 'PARI';
  } else{
    check = 'DISPARI';
  }
  return check;
}
}
}