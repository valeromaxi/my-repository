const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty(){
  try {
    let resolveValue = await cookBeanSouffle();
    console.log(resolveValue + ' is served!');
  } catch(error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}
hostDinnerParty();




