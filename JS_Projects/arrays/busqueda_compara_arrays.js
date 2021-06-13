/*
const gradeNum = (num1, num2, num3) =>{
  const promedio = Math.floor((num1 + num2 + num3)/3);
  const newNum = [num1, num2, num3];
  const invalGrade = newNum.filter(n =>{
    return n >= 0 && n <= 100;
  });
  if(invalGrade.length < 3){
    return 'Numero erroneo';
  } else if (promedio < 60){
    return promedio + ' Grade C';
  }else if (promedio < 80){
    return promedio + ' Grade B';
  }else if (promedio < 90){
    return promedio + ' Grade A';
  }
}

console.log(gradeNum(52, 83, 100));


const howOld = (age, year) => {

  //calculating current year.
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  
  //calculating difference in year
  const yearDifference = year - currentYear;
  const calculatedAge = age + yearDifference;
  
  switch (year) {
    case (calculatedAge > age):
      return `You will be ${calculatedAge} in the year ${year}`;
      break;
    case (calculatedAge < 0 ):
      return `The year ${year} was ${-calculatedAge} year before you were born`;
      break;
    default:
      return `You were ${calculatedAge} in the year ${year}`;
      break;
  }
}
console.log(howOld(42, 2024));

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
const compareGuesses = (userGuess, pcGuess) => {
  const secretTarget = generateTarget();
  const result = userGuess - secretTarget >= pcGuess - secretTarget;
  return result ? true : false; 
}


console.log(compareGuesses(5, 6));


function containsCake(string) {
  const hayCake = string.split(' ');
  const siCake = (element) => element === 'cake';
  return hayCake.some(siCake);
  };

console.log(containsCake('I think cake is my soul mate.'));
*/

/*
const isStringPerfectLength = (string, minLength, maxLength) =>{
  const stringLength = string.length;
  console.log(stringLength);
  if (stringLength < minLength || stringLength > maxLength) {
    return false;
  } else {
    return true;
  }
}
//otra forma utilizando un ternary operator
const isStringPerfectLength = (string, minLength, maxLength) =>{
  const stringLength = string.length;
  return (stringLength < minLength || stringLength > maxLength ? false : true);
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));

//funcion que retorna la 2 potencia de cada numero. toma cada numero como un solo digito.
const sdaPotNumero = (numero) =>{
  const potNum = `${numero}`;//numero a string
  const numArr = potNum.split('');//separa el string en cada index
  let arrNum = Array.from(numArr, i => i**2);//a cada index lo eleva a la 2da potencia
  let sqArr = arrNum.join('');//une el string en una sola cadena
  const sqNum = Number(sqArr);//string a numero
  return sqNum;
}

console.log(sdaPotNumero(3852));


const reverseArray = (sentence) =>{
  const newArr = [];
  for (let i = sentence.length - 1; i >=0; i--){
    newArr.push(sentence[i]);
  }
  return newArr;
}
//console.log(newArr);
// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));


const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = i * 2;
                  results.push(j);
            }
            
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

//dos funciones para rechazar/aceptar todo lo de una lista, utilizando .forEach.
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = (veggies) =>{
  veggies.forEach(politelyDecline);//.forEach ejecuta una call back a cada elemento.
  };
declineEverything(veggies);

const politelyAccept = (veg) => {
      console.log(`Ok, I guess I will eat some ${veg}.`);
}

const acceptEverything = (veggies) =>{
  veggies.forEach(politelyAccept);//.forEach ejecuta una call back a cada elemento.
  };
acceptEverything(veggies);

const shoutGreetings = (sentence) =>{
  const newArr = [];
  sentence.forEach(element =>{
    newArr.push(element.toUpperCase() + '!');    
  });
  console.log(newArr);
}
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
shoutGreetings(greetings);

//funcion para ordenar los elementos de un array. en este caso anos de manera decreciente.
const sortYears = (elements) =>{
  const comparar = ( a, b ) =>{ return b - a; }//esta funcion es la que compara para ordenar creciente o decreciente.
  return elements.sort(comparar);//element.sort((a,b)=>b-a) otra forma mas corta
}
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

//funcion que compara dos strings y retorna una nueva array (newArr) con los elementos coincidentes, utilizando .filter.
const justCoolStuff = (myStuff, coolStuff) =>{
  const newArr = [];
  myStuff.filter(element=>{
    coolStuff.filter(elem=>{
      if (element === elem){
        newArr.push(elem);
      }
    })
  })
  return newArr;
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]*/

// funcion que busca en un string si existe el indice con valor 'keys' y retorna el valor del 1er numero de index que coincida. si no encuentra ninguno retorna -1.
const findMyKeys = key => key.indexOf('keys');

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff));





