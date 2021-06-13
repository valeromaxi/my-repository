let input = 'hela samigus';
const vowels = ['a','e','i','o','u'];
let resulArray = [];
for (let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
    if (input [i] === vowels [j]){
      if (input [i] === 'e'|| input [i] === 'u'){
        resulArray.push(input[i]);
        }
    resulArray.push(vowels[j]);
    }
  } 
}
console.log(resulArray.join ('').toUpperCase());
