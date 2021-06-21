const arrMjs = ['Hola saamigos!', 'Buena jornada', 'Hola loquito loquito'];
const msjGenerator = (newArr) => {
    return newArr[Math.floor(Math.random() * 3)];
}

console.log(msjGenerator(arrMjs));
