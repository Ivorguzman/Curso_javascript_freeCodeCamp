
// Implementa el método filter en un prototipo

// Puedes aprender mucho sobre el método filter si implementas tu propia versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().



{

  // === Desafio ===
  // Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). No debes utilizar el método incorporado filter. Se puede acceder a la instancia Array en el método myFilter usando this.


  // La variable global
  const s = [23, 65, 98, 5];

  Array.prototype.myFilter = function (callback) {
    // Cambia solo el código debajo de esta línea
    const newArray = [];
    // Cambia solo el código encima de esta línea
    return newArray;
  };

  const new_s = s.myFilter(function (item) {
    return item % 2 === 1;
  });
}


{
  // === Solucion con ciclo For(){} ===

    // La variable global
  let s = [23, 65, 98, 5];
  {
    {
      /*👉{ === Solucion sin el This ===👈*/

      // La variable global

      // push
      Array.prototype.myFilter = function (funcionCallBack) {
        // Cambia solo el código debajo de esta línea
        let newArray = [];
        for (let i = 0; i < s.length; i++) {
          /*👉if (funcionCallBack(this[i] === true))  ==> ERROR:👈{*/
          if (funcionCallBack(s[i]) === true) {
            newArray.push(s[i])
          }
        }

        // Cambia solo el código encia de esta línea
        return newArray;
      };
    }

    {
      /*👉=== Solucion con el This ===👈*/

      Array.prototype.myFilter = function (callback) {
        var newArray = [];
        // Add your code below this line
        for (let i = 0; i < this.length; i++) {
          if (callback(this[i]) === true) {
            newArray.push(this[i]);
          }
        }
        // Add your code above this line
        return newArray;
      };

      var new_s = s.myFilter(function (item) {
        return item % 2 === 1;
      });

      console.log(new_s)
    }
  }
}

// ===  Explicacion ===
// Solución 2
{
   // === Solucion con ciclo ForEach(){}  sin this===

  // The global variable
  let s = [23, 65, 98, 5];

  Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    let newArray = [];
    s.forEach(function (x) {
      if (callback(x) == 1) {
        newArray.push(x);
      }
    });
    // Only change code above this line
    return newArray;
  };

  let new_s = s.myFilter(function (item) {
    return item % 2 === 1;
  });
  console.log(new_s);
}

{
   // === Solucion con ciclo ForEach(){}  con  el  this===

  // The global variable
  let s = [23, 65, 98, 5];

  Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    let newArray = [];
    this.forEach(function (x) {
      if (callback(x) == true) {
        newArray.push(x);
      }
    });
    // Only change code above this line
    return newArray;
  };

  let new_s = s.myFilter(function (item) {
    return item % 2 === 1;
  });
  console.log(new_s);
}



