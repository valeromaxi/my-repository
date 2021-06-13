let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 42;
if (age >18 && registeredEarly === true){
  console.log('Run at 9:30 am. Race number: '+(raceNumber += 1000));
} else if (age > 18 && registeredEarly === false){
   console.log('Run at 11:00 am. Race number: '+(raceNumber));
} else if (age < 18){
  console.log('Run at 12:30 pm. Race number: '+(raceNumber));
} else{
  console.log('Should see the registration desk');
}



/*
let timeToRegistered = '9:31'
if (timeToRegistered <= '9:30'){
  console.log('Early adult runner');
} else {
  console.log('Late adult runner');
}*/
