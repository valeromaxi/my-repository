const arrMjs = [['Hola ', 'Buenas ', 'Que tal '], ['saamigos ', 'loquito loquito ', 'Bro '], ['Que Dios te Bendiga', 'Buena jornada', 'Forza!']];
//console.log(arrMjs[0][1]);

const msjGenerator = (newArr) => {
    let firstWord = newArr[0][Math.floor(Math.random() * 3)];
    let secondWord = newArr[1][Math.floor(Math.random() * 3)];
    let thirdWord = newArr[2][Math.floor(Math.random() * 3)];
    return firstWord + secondWord + thirdWord;
}

console.log(msjGenerator(arrMjs));
