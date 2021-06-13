
//ejemplo n`
//funcion que toma un menu en formato de objeto y retorna true si todos los platos son source:'plant' y false si no es asi.
/*const isTheDinnerVegan = (obj) =>{
  const respArr = [];
  obj.forEach(element =>{
    return element.source != 'plant' ? respArr.push(false) : respArr.push(true);
  })
  return respArr.every(elemento => elemento === true);
}/*
//forma mas corta
const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

console.log(isTheDinnerVegan(meal));*/


//ejemplo n`
var arrayOfObjects = [   
    {
        name: 'Diana',
        born: 1373925600000, // Mon, Jul 15 2013
        num: 4,
        sex: 'female'
    },
    {

        name: 'Beyonce',
        born: 1366832953000, // Wed, Apr 24 2013
        num: 2,
        sex: 'female'
    },
    {            
        name: 'Albert',
        born: 1370288700000, // Mon, Jun 3 2013
        num: 3,
        sex: 'male'
    },    
    {
        name: 'Doris',
        born: 1354412087000, // Sat, Dec 1 2012
        num: 1,
        sex: 'female'
    }
];
//forma corta
const byDate = arr => arr.sort((elementoDelArraya, elementoDelArrayb) => elementoDelArraya.born - elementoDelArrayb.born);
console.log(byDate(arrayOfObjects));
//forma larga
// use slice() to copy the array and not just make a reference
/*var byDate = arrayOfObjects.slice(0);
byDate.sort(function(a,b) {
    return a.born - b.born;
});*/

//console.log('by date:');
//console.log(byDate);
/*
var byName = arrayOfObjects.slice(0);
byName.sort(function(a,b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});

console.log('by name:');
console.log(byName);

console.log(arrayOfObjects);*/