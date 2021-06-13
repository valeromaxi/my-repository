const inventory = {
    sunglasses: 10,
    pants: 1088,
    bags: 1344
  };
  
  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {//.every determina si TODOS los elementos en un array cumplen una condicion y retorna true o false.
        //la funcion inStock determina si las cantidades de los items del array order, estan en el objeto inventario.
        let inStock = order.every(item => inventory[item[0]] >= item[1]); /*inventory[item[0]] se refiere al indice cero del primer item de 
        inventario osea, 10.//item [1] se refiere al indice 1 del array order, osea 1 para la 1ra iteracion y 2 para la segunda.*/
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };
  
  module.exports = { checkInventory };