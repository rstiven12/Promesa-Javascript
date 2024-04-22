//* Ejercicio
// * Inicia una promesa que se resuelva después de 2 segundos con un número aleatorio entre 1 y 100.
// Luego, toma ese número y crea una segunda promesa que se resuelva después de 3 segundos con el resultado de elevar ese número al cuadrado.
// Finalmente, toma el resultado de la segunda promesa y crea una tercera promesa que se resuelva después de 1 segundo con la raíz cuadrada del número resultante.

function ejercicio1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        resolve(numeroAleatorio);
      }, 2000);
    })
      .then((numero) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(numero * numero);
          }, 3000);
        });
      })
      .then((numeroCuadrado) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(Math.sqrt(numeroCuadrado));
          }, 1000);
        });
      });
  }
  
  ejercicio1().then((result) => {
    console.log("este es el resultado");
    console.log(result);
  });
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "CustomToken":"CustomToken"
    },
    body: JSON.stringify(jsonData)
  };
  function ejercicio2(urls) {
    const fetchPromises = urls.map((url) =>
      fetch(url, options).then((response) => response.json())
    );
    return Promise.all(fetchPromises);
  }
  
  function ejercicio3(promisesFunctions) {
    const promises = promisesFunctions.map((fn) => fn());
    return Promise.all(promises);
  }
  
  function ejercicio4(n) {
    let promiseChain = Promise.resolve();
    for (let i = 0; i < n; i++) {
      promiseChain = promiseChain.then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(i);
            resolve();
          }, n * 1000);
        });
      });
    }
  
    return promiseChain.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Todas las promesas se resolvieron");
        }, n * 1000);
      });
    });
  }
  
  function ejercicio5() {
    let cancel;
    const promise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        resolve("Promesa resuelta");
      }, 5000);
  
      cancel = () => {
        clearTimeout(timer);
        reject("Promesa cancelada");
      };
    });
  
    return {
      promise,
      cancel,
    };
  }