const arrMjs = [['Hola ', 'Buenas ', 'Que tal '], ['saamigos ', 'loquito loquito ', 'Bro '], ['Que Dios te Bendiga', 'Buena jornada', 'Forza!']];

//this function returns aleatory msj from arrMsj
const msjGenerator = (newArr) => {
    let firstWord = newArr[0][Math.floor(Math.random() * newArr[0].length)];
    let secondWord = newArr[1][Math.floor(Math.random() * newArr[1].length)];
    let thirdWord = newArr[2][Math.floor(Math.random() * newArr[2].length)];
    return firstWord + secondWord + thirdWord;
}

console.log(msjGenerator(arrMjs));


