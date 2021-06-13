/*const arr = [2,11,5].sort()[1];
console.log(arr);

const clamp = (number, min, max) =>{
    return Math.max(min, Math.min(number, max));
}

console.log(clamp(1, 2, 5));

const inRange = (number, start, end) =>{
    if (end == undefined){
        end = 0;
        if (end < start){
            const newEnd = start;
            const newStart = end;
            return number >= newStart && number < newEnd ? true : false;
        }
    } else if (end < start){
        const newEnd = start;
        const newStart = end;
        return number >= newStart && number < newEnd ? true : false;        
    } else {
        return number >= start && number < end ? true : false;
    }
}
console.log(inRange(-2, -1, -4));

const frase = 'hola, mi nombre es Maximiliano';
const newArr = frase.split(' ');
console.log(newArr);

const pad = (arr, len) =>{ 
    if (len <= arr.length) {
        return arr;
    } else {
        const totalPadding = len - arr.length;
        const bigginingPadding = Math.floor(totalPadding / 2);
        const endingPadding = totalPadding - bigginingPadding;
        const newArr = ' '.repeat(bigginingPadding) + arr + ' '.repeat(endingPadding);
        return newArr;
    }    
}

console.log(pad('caca', 3));

const has = (obj, key) =>{
    for (const kei in obj){
        console.log(`${kei} in ${obj}`);
        if (kei == key){
            return true;
        } else {
            return false;
        }
    }
}
console.log(has(object, ['a', 'b']));

let obj = { 'a': { 'b': 2 } };
console.log(obj.a);

const has = (object, key) =>{
    const hasValue = object[key];
    if(hasValue != undefined){
        return true;
    } return false;
}

console.log(has(obj, ['a', 'b']));

var object = { 'a': 1, 'b': 2, 'c': 1 };
const invert = (object) => {
    let invertedObject = {};
    for (let key in object) {
      invertedObject[object[key]] = key;
      }
    return invertedObject;
  }

  console.log(invert(object));
console.log(object['a']);

var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

for (const key in users){
    let value = users[key];
    let predValue = ''
    if (value = {'age': 1, 'active': true}){
        console.log(predValue = true);
    } else {
        console.log(predValue = false);
    }
}
console.log(users['barney']);

const findKey = (object, predicate) =>{
    for(let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      };      
    };
    undefined
    return undefined;
  }

console.log(findKey(users, { 'age': 1, 'active': true }));

const drop = (array, num) =>{
    if(num == undefined){
        num = 1;
    }
    const newArr = array.slice(num);
    return newArr;    
}

const arr = [1, 2, 3];
console.log(drop(arr, 1));

const array = ['a', 'b', 'c', 'd'];

function chunk (arr, size = 1) {
    let arrayChunks = [];
    for(let i = 0; i < arr.length; i += size){
        let arrayChunk = arr.slice(i, i+size);
        arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
};
console.log(chunk(array, 3));*/

