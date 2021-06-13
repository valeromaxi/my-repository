const getSleepHours = day => {
    switch (day){
      case 'lunes':
      return 8;
      break;
      case 'martes':
      return 8;
      break;
      case 'miercoles':
      return 8;
      break;
      case 'jueves':
      return 8;
      break;
      case 'viernes':
      return 8;
      break;
      case 'sabado':
      return 8;
      break;
      case 'domingo':
      return 8;
      break;
      default:
      console.log('no es un dia de la semana');
    }
  };
  // dos formas diferentes de hacer las horas dormidas semanales
  //console.log(getSleepHours('lunes'));
  /*const getActualSleepHours = () => getSleepHours('lunes') + getSleepHours('martes') + getSleepHours('miercoles') + getSleepHours('jueves') + getSleepHours('viernes') + getSleepHours('sabado') + getSleepHours('domingo');*/
  //const getActualSleepHours = () => (8+5+4+3+8+10+12);
  let getActualSleepHours = 8+5+4+3+8+10+12;
  
  //console.log(getActualSleepHours());
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  /*const getIdealSleepHours = () => {
    idealHours = 7;
    return idealHours * 7;
  };*/
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours;
    idealSleepHours = getIdealSleepHours(10);
    hsMas = (actualSleepHours - idealSleepHours);
    hsMenos = idealSleepHours - actualSleepHours;
    actualSleepHours >= idealSleepHours ? console.log(`bien dormido, has dormido  ${hsMas} horas extras semanales!`) : console.log(`has dormido ${hsMenos} horas de menos semanales, casi eres un zombiee`);
  };
  calculateSleepDebt();
  
  
  
  
  
  