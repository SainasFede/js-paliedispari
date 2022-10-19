const pariODispari = prompt('Scegli pari o dispari');
const sceltaNum = prompt ('Scegli un numero da 1 a 5');
let sommaNum;

if(sommaNum % 2 && pariODispari === 'pari'){
  document.querySelector('esito').innerHTML = 'Hai vinto, la somma è pari';
}else if(sommaNum % 3 && pariODispari === 'dispari'){
  document.querySelector('esito').innerHTML = 'Hai vinto, la somma è dispari';
}else{
  document.querySelector('esito').innerHTML = 'Hai perso';
}







function randomNum(numIA, numUser){
  for( let i = 0; i => 5; i++){
    let numRandom = Math.floor(Math.random() * 5) + 1;
  }
  let sommaNum = numRandom + sceltaNum;
  return sommaNum;
}
