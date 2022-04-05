{
  //! Ejercicio

  ///    Dónde pertenezco
  // Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

  // Por ejemplo, getIndexToIns([1,2,3,4], 1.5)debe devolver 1por que este valor es más grande que 1(índice 0), pero menor que 2(índice 1).

  // De esta forma, getIndexToIns([20,3,5], 19)debe devolver 2porque una vez ordenado el arreglo, éste se verá así [3,5,20]y 19es menor 

  function getIndexToIns(arr, num) {
    return num;
  }

  getIndexToIns([40, 60], 50);
}
{
  //! Solucion

  ///    Dónde pertenezco
  //* https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-sort-javascript-sort-explained-with-examples/14306

  // Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

  // Por ejemplo, getIndexToIns([1,2,3,4], 1.5)debe devolver 1por que este valor es más grande que 1(índice 0), pero menor que 2(índice 1).

  // De esta forma, getIndexToIns([20,3,5], 19)debe devolver 2porque una vez ordenado el arreglo, éste se verá así [3,5,20]y 19es menor 

  function getIndexToIns(arr, num) {
    return num;
  }



  getIndexToIns([40, 60], 50);
  getIndexToIns([40, 60], 80);
}
{
  //! Solucion 1 bucle for i

  ///    Dónde pertenezco

  //* https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-sort-javascript-sort-explained-with-examples/14306

  function getIndexToIns(arr, num) {
    let newArr = arr.slice();
    newArr.sort((a, b) => a - b);
    let i = 0;
    let l = newArr.length;
    for (; i < l; i++) {
      if (newArr[i] >= num) return `Perteneces al indice ${i}`

    }
    return newArr.length;
  }

  // console.log(getIndexToIns([40, 60], 50));
  // console.log(getIndexToIns([40, 60], 80));

  //*    Código Explicación

  // Primero ordeno la matriz usando .sort(callbackFunction)para ordenarla de menor a mayor, de izquierda a derecha.
  // Luego uso un bucle for para comparar los elementos de la matriz a partir del más pequeño. Cuando un elemento en la matriz es mayor que el número con el que estamos comparando, devolvemos el índice.
}

{
  //! Solucion 2 filter
  /// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

  ///    Dónde pertenezco

  // Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

  //* https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-sort-javascript-sort-explained-with-examples/14306

  //? matriz.prototipo.filtro():==>  El método filter() crea un nuevo arreglo con todos los elementos que cumplen la condición implementada por la función dada;


  function getIndexToIns(arr, num) {
    let newArr = arr.slice();
    console.log(arr);
    newArr.sort((a, b) => a - b);
    console.log(newArr.filter((newArr) => num > newArr));
    console.log(arr);
    console.log(newArr);
    return newArr.filter((e) => num > e).length


  }

  console.log(getIndexToIns([40, 60], 50));
  // console.log(getIndexToIns([40, 60], 80));
}

{
  //! Solucion 3 findIndex()

  /// ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex )

  //? Array.prototype.findIndex(). El método findIndex() devuelve el índice del primer elemento de la matriz que satisface la función de prueba proporcionada . De lo contrario, devuelve -1, indicando que ningún elemento pasó la prueba. El método  findIndex() ejecuta la función Fncallback  una vez por cada índice en la matriz hasta que encuentra el que   vuelva un valor verdadero. 

  function getIndexToIns(arr, num) {
    // sort and find right index
    let index = arr
      .sort((a, b) => a - b)
      .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
  }

  //* console.log(getIndexToIns(["hola", 40, 2, 3, 41, 62, 60], 500));


  // Código Explicación
  // Primero ordene la matriz en orden ascendente, esto actualmente se hace usando funciones de matriz para una huella mínima.
  // Una vez que se ordena la matriz, aplicamos directamente el .findIndex()lugar donde vamos a comparar cada elemento de la matriz hasta que encontramos donde num <= currNum, donde el número que queremos insertar es menor o igual que el número actual en la iteración.
  // Luego usamos operaciones ternarias para verificar si obtuvimos un índice devuelto o -1. Solo obtenemos -1 cuando no se encontró el índice, es decir, cuando obtenemos un falso para todos los elementos de la matriz, y en tal caso, significaría que num debe insertarse al final de la lista. Por lo tanto, por qué usamos arr.length.
  // Enlaces relevantes

}


{
  //! Solucion 4 Implementación rápida de ES6

  let getIndexToIns = (arr, num) => { // ES6
    let newArr = arr.slice();//
    console.log(newArr)
    console.log(newArr.push(num));// push() agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz.
    console.log(newArr)
    console.log(newArr.sort((a, b) => a - b))// sort() ordena una matriz de menor a mayor.
    console.log(newArr.sort((a, b) => a - b).indexOf(num)) // indexOf() devuelve el índice del primer elemento de la matriz que coincida con el valor especificado. Si no se encuentra ningún elemento, devuelve -1.
    return newArr.sort((a, b) => a - b).indexOf(num);
  }
  console.log(getIndexToIns(["hola", 40, 2, 3, 41, 62, 60], 500));

}



{
  //! Solucion 5 concatenando la matriz

  function getIndexToIns(arr, num) {
    let newArr = arr.slice();// slice() devuelve una copia de una matriz.
    console.log(newArr.concat(num));
    return newArr
      .concat(num)// concat() agrega uno o más elementos al final de una matriz y devuelve una nueva matriz con los elementos de ambas matrices.
      .sort((a, b) => a - b)
      .indexOf(num);
  }

  console.log(getIndexToIns([1, 3, 4], 2));
}