/*   const pariODispari = prompt('Scegli pari o dispari');
const sceltaNum = prompt ('Scegli un numero da 1 a 5');
let sommaNum;

if(sommaNum % 2 && pariODispari === 'pari'){
  document.querySelector('esito').innerHTML = 'Hai vinto, la somma è pari';
}else if(sommaNum % 3 && pariODispari === 'dispari'){
  document.querySelector('esito').innerHTML = 'Hai vinto, la somma è dispari';
}else{
  document.querySelector('esito').innerHTML = 'Hai perso';
};




function randomNum(numIA, numUser){
  for( let i = 0; i => 5; i++){
    let numRandom = Math.floor(Math.random() * 5) + 1;
  }
  let sommaNum = numRandom + sceltaNum;
  return sommaNum;
};     */

/*    const outputEsito = document.querySelector('esito');

const numUser = parseInt(prompt('scegli tra 1 e 5'));
const pariODispari = prompt('scegli pari o dispari');

const numIA = numRandom();
const somma = sommaNum(numUser, numIA);

if(checkNum(somma) === pariODispari){
  console.log('hai vinto');
}else{
  console.log('hai perso');
}

function numRandom (){
  return Math.floor(Math.random() * 5) + 1;
}

function sommaNum(num1, num2){
  return num1 + num2;
}

function checkNum(num){
  if(num % 2 === 0){
    return 'pari'
  }else{
    return 'dispari'
  };
};     */

const numUser = prompt('Scegli pari o dispari');
const sceltaUser = parseInt(prompt('Scegli un numero da 1 a 5'));
const numPc = numRandom();
const somma = sommaNum(numUser, numRandom);
const btnGioca = document.getElementById('Gioca');
const risultato = document.getElementById('risultato');
const sceltaPc = document.getElementById('scelta-pc');
const sceltaUtente = document.getElementById('scelta-user');

if(check(somma) === sceltaUser){
  document.getElementById('esito').innerHTML = 'Hai vinto';
}else{
  document.getElementById('esito').innerHTML = 'Hai perso mi dispiace, ritenta sarai più fortunato';
};
sceltaUtente.innerHTML = sceltaUser;


function sommaNum(num1, num2){
  return num1 + num2;
};


function check(num){
  if(num % 2 === 0){
    return 'pari'
  }else{
    return 'dispari'
  };
};

function numRandom(){
  return Math.floor(Math.ceil() * 5) + 1;
};
