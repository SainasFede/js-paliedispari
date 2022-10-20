/* let word = prompt('scegli una parola che pensi sia Palindroma');
let newWord;

function reverseWord(word){
  let newWord = '';
  
  
  for(let i = word.lenght - 1; i >= 0; i--){
    newWord += word[i];
    if(newWord === word[i]){
      console.log(word);
      console.log('è palindroma');
    }else{
      console.log('non è palindroma');
    }
  }
    return newWord;
}; */
const output = document.getElementById('risultato');
const verificaWord = checkWord(prompt('scegli una parola'));
output.innerHTML = verificaWord;









function checkWord(word){

  for (let i=0; i<word.length; i++){
      if(word[i] === word[word.length-1-i]){
        console.log('la parola è palindroma!');
        console.log(word);
        return 'complimenti è palindroma!';
        
      }else{
        console.log('non è palindroma!');
        console.log(word);
        return 'Mi spiace, non è palindroma.';}

  }
};