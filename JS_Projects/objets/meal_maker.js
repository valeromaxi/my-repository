const menu = {
  _courses: {
    appetizers: [],
    mains:[],
    desserts:[],
  },/*//todos los getters and setters no serian necesarios para el funcionamiento del programa.
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn){
    this._courses.appetizers = appetizerIn;
  },
  get mains(){
    return this._courses._mains;
  },
  set mains(mainIn){
    this._courses.mains = mainIn;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set desserts(dessertIn){
    this._courses.desserts = dessertIn;
  },
   get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },*/
  //este metodo permite llenar el menu con platos nuevos. registra los datos de la variable dish, dentro del objeto courseName (que tiene que ser appetizer, mains or desserts).
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
//este metodo es para que el programa elija un plato al azar con el metodo random que en base a su length genera un numero de index para encontrar el elemento del array que coincida con este index.
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex]; 
  },
//este metodo genera un plato random con un elemento (appetizer, main and dessert) de cada uno y suma el total.
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total is ${totalPrice} dollars`;

  },
    
};

menu.addDishToCourse('appetizers', 'ragoons', 5.00);
menu.addDishToCourse('appetizers', 'tots', 4.50);
menu.addDishToCourse('appetizers', 'queso', 6.25);

menu.addDishToCourse('mains', 'stake', 25.00);
menu.addDishToCourse('mains', 'Burger', 14.50);
menu.addDishToCourse('mains', 'pasta', 16.00);

menu.addDishToCourse('desserts', 'pay', 4.00);
menu.addDishToCourse('desserts', 'cake', 7.00);
menu.addDishToCourse('desserts', 'ice cream', 5.00);

const meal = menu.generateRandomMeal();
console.log(meal);
console.log(menu._courses.appetizers);
