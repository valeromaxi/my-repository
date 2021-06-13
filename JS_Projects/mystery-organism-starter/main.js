// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//console.log(mockUpStrand());

function pAequorFactory (specimenNum, dna) {
  this.specimenNum = specimenNum;
  this.dna = dna;
  this.mutate = function (){    
    const baseMutInx = Math.floor(Math.random() * 15);//determina al azar q index hay q cambiar.
    const baseMutVal = this.dna[baseMutInx];//retorna el valor del index a reemplazar, al azar.
    let baseChang = '';//almacena el valor de reemplazo.
    //este while es para retornar un valor de reemplazo utilizando la funcion returnRandBase.
    do{
      baseChang = returnRandBase();
    }
    while(baseChang == baseMutVal);
    console.log(baseChang);
    this.dna.splice(baseMutInx, 1, baseChang);
    return this.dna;
  };
  this.compareDNA = function (pAequor){
    const dnaAComp = pAequor.dna;//array con el dna del specimenes a comparar.   
    const dnaTestigo = this.dna;//array con dna del testigo.
    let arrFinal = [];//array con las bases compartidas entre los dos. Se tiene en cuenta tambien la posicion de a base, q debe ser la misma en ambos. 
    for(let i in dnaAComp){//loop para comparar cada base de los dna de los specimenes.
      if(dnaAComp[i] == dnaTestigo[i]){
        arrFinal.push(dnaAComp[i]);
      }
    }    
    const dnaInCommon = (arrFinal.length/15) * 100;//calcula el % de dna q comparten.
    return `specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${dnaInCommon.toFixed(2)}% DNA in common.`;
  };
  this.willLikelySurvive = function (){//funcion que evalua el porcentaje de bases C y G q tiene el specimen. si este es >=60% retorna true
    const dnaSpec = this.dna;    
    let arrCGbases = 0;    
    for(let j in dnaSpec){
      if(dnaSpec[j] == 'C' || dnaSpec[j] == 'G'){
        arrCGbases ++;
      }
    }    
    const porCGBases = (arrCGbases/15) * 100;
    return porCGBases >= 60 ? true : false;    
  };
  this.complementStrand = function (){//retorna la cadena complementaria de dna del specimen.
    const dna1 = this.dna;
    let dna2 = [];
    for(let i in dna1){
      switch (dna1[i]){
        case 'A':
          dna2.push('T');
          break;
        case 'T':
          dna2.push('A');
          break;
        case 'C':
          dna2.push('G');
          break;
        case 'G':
            dna2.push('C');
            break;
      }
    }
    return dna2;
  }
};



const spec1 = new pAequorFactory(1, ['A', 'A', 'A', 'T',
'T', 'A', 'A', 'T',
'A', 'G', 'G', 'A',
'C', 'C', 'G']);
//console.log(spec1.mutate());
const spec2 = new pAequorFactory(2, [
  'T', 'G', 'T', 'G',
  'C', 'G', 'A', 'T',
  'T', 'C', 'A', 'A',
  'T', 'C', 'C'
]);

//console.log(spec1.complementStrand());

/*const spec5 = new pAequorFactory(5, mockUpStrand());
console.log(spec5.willLikelySurvive());
console.log(spec5.dna);*/

//este codigo crea un array (arrPAequors) con 30 specimenes que tienen un dna con >=60% de bases C o G, lo que les da mas sobrevida.
const arrPAequors = [];
let x = 0
let y = 1;
while(x<30){
  const spec = new pAequorFactory(y, mockUpStrand());
  if(spec.willLikelySurvive()){
    arrPAequors.push(spec);
    x ++;
    y ++;
  }  
};

console.log(arrPAequors.length);
//console.log(arrPAequors);

/*const compare = (arrToCompare) =>{
  let afinidad = 0;
  for(let i in arrToCompare){
    let compPar = arrToCompare[i].compareDNA(arrToCompare[i+1]);
    if(compPar > afinidad){
      afinidad.push(compPar);
    }
  }
  return afinidad.toFixed(2);
}

console.log(compare(arrPAequors));*/
