let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
//console.log(storyWords.length);
//determina si la palabra unnWords esta dentro de unnecessaryWords
const betterWords = storyWords.filter(unnWords => {
  /*.includes() retorna true o false. En esta caso esta iterando sobre unnecessaryWords y comparando cada valor con el valor de unnWords tomado por .filter() arriba. Si esta incluida es true (es el valor por defecto de este iterator). Por otra parte si no esta incluida retorna false. Como aca necesitamos que si la palabra evaluada con .filter sobre storywords esta incluida en unnecessaryword, NO la tenga en cta y que la saque de la const nueva betterwords. Invertimos el retorno de .includes con el  NOT "!".*/
  return ! unnecessaryWords.includes(unnWords);
})
console.log(betterWords.length);

//esta funcion retorna la cantidad de overussedWords q hay dentro de betterWords.
const overWords = betterWords.filter(oWords => {
  return overusedWords.includes(oWords);
})
//console.log(overWords);
//console.log(storyWords);

let reallyW = 0;
let basicallyW = 0;
let veryW = 0;
let sumOverussedWords = 0;
let indicesOUW = [];
//console.log(indicesOUW.push(betterWords.indexOf('really')));
/*
let idx = betterWords.indexOf('really');
while (idx != -1) {
  indicesOUW.push(idx);
  idx = betterWords.indexOf('really', idx + 1);
}*/

let idxR = betterWords.indexOf('really');
let idxB = betterWords.indexOf('basically');
let idxV = betterWords.indexOf('very');
//este loop retorna la cantidad de cada overussedWords
for (word of betterWords){//por cada word en overwords
  if (word === 'really'){
    reallyW++;//se puede poner reallyW += 1 tambien
    while (idxR != -1) {//este loop retorna un nuevo array con los numeros de indice de las overussedwords encontradas
      indicesOUW.push(idxR);
      idxR = betterWords.indexOf('really', idxR + 1);
    }
  } else if (word === 'basically') {
    basicallyW++;
    while (idxB != -1) {
      indicesOUW.push(idxB);
      idxB = betterWords.indexOf('basically', idxB + 1);
    }    
  } else if (word === 'very') {
    veryW++;
    while (idxV != -1) {
      indicesOUW.push(idxV);
      idxV = betterWords.indexOf('very', idxV + 1);
    }
  }
};

const indOuW = Object.keys(indicesOUW);//retorna los indices del array evaluado
//retorna el indice de las overussedwords impares para eliminar
const indOUWImpar = indOuW.filter(ind => {
  if (ind % 2 !== 0){
    return ind;
  }
})
//console.log(indOUWImpar);
//retorna el indice de las overussedwords, dentro del texto betterwords, ya seleccionadas para eliminar.
const ouwList = indOUWImpar.map(ind2=> {
  return indicesOUW[ind2];
})

//retorna la historia sin la mitad de las overussedwords
const storySinOUW = betterWords.filter(palInn => {
  return ! ouwList.includes(betterWords.indexOf(palInn));
})

console.log(storySinOUW.join(' '))
console.log(storySinOUW.length);
//esta funcion cuenta las oraciones o sentences en betterWords
let sentencesCount = 0;
for (word of betterWords){//por cada word en overwords
  if (word[word.length - 1]/*esta es la forma de enfocar sobre el ultimo caracter de un string*/ === '.'|| word[word.length - 1] ==='!'){
    sentencesCount++;//se puede poner += 1 tambien
  };
}
//console.log('sentencesCount: '+sentencesCount);

//console.log(betterWords.join(' '));//con .jpin('') convertimos a betterwords en un single string


//funcion que retorna el elemento del array q mas se repite
function mode(arr){
  return arr.sort((a,b) =>
    arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop();
}
console.log('La palabra que mas se repite es: '+mode(betterWords));
