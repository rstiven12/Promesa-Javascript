const prom = new Promise(function (resolve, reject) {
    console.log("me ejecuto asincronamente");
  
    setTimeout(() => {
      resolve(4755662);
    }, 1000);
  });
  
  prom.then((res) => {
    console.log("termina mi promesa con", res);
  });
  
  console.log("estoy al final");
  