// crea un nuevo objeto Promise que resuelve con la cadena "Correcto" 
// si la condición 2 >= 2 es verdadera,
//  y rechaza con la cadena "Incorrecto" si la condición es falsa.

let equals = new Promise((resolve, reject) => {

  if (1 >= 2) {
    resolve("Correcto"); //todo salio bien
  }else{
    reject("Incorrecto"); //algo salio mal
  }
  
});



//Forma 1 
equals.then((success) => {  
  console.log(success);
}).catch((error) => {
  console.warn(error); 
});


//Forma 2
equals.then((success) => {
  console.log(success);
},(error) => {
  console.warn(error);
});
