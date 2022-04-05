{
    //! Ejercicio

    // /Buscadores guardianes

    // Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.

    function findElement(arr, func) {
        let num = 0;
        return num;
    }

    findElement([1, 2, 3, 4], num => num % 2 === 0);
    findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0) //debe devolver 8.
    findElement([1, 3, 5, 9], (num) => num % 2 === 0) // debe devolver undefined.
}
{
    //! Solucion 1 Imperativa ciclo for in (){}

    // /Buscadores guardianes

    // Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.

    function findElement(arr, func) {
        let num;
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i])) {
                return num = arr[i]
            } undefined;

        }
        return num
    }

    console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));
    console.log(findElement([1, 3, 5, 9], (num) => num % 2 === 0));
}


{
    //! Solucion 2 map()
    function findElement(arr, func) {

        let num = arr[arr.map(func).indexOf(true)]
        return num

    }
    console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));

    // Mire a través de la matriz dada en el primer parámetro "arr" usando el método .map() Use la función en el segundo parámetro como la función de devolución de llamada en arr.map() Adquiera el índice del primer número que cumple la condición en la función . Utilice ese índice para mostrar el primer número disponible que cumpla la condición.
}
{

    //! Solucion 2 metod find()

    function findElement(arr, func) {
        let num = arr;
        return num.find(func)//
    }
    console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));




    /*👉  
      // Arrow function
find((element) => { ➡ ... ⬅ } )
find((element, index) => { ➡ ... ⬅ } )
find((element, index, array) => { ➡ ... ⬅ } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)

// Inline callback function
find(function(element) { ➡ ... ⬅ })
find(function(element, index) { ➡ ... ⬅ })
find(function(element, index, array){ ➡ ... ⬅ })
find(function(element, index, array) { ➡ ... ⬅ }, thisArg)👈*/

}



{
    //! Solucion rescursiva *

    function findElement(arr, func) {
        return arr.length && !func(arr[0])
            ? findElement(arr.slice(1), func)
            : arr[0];
    }


    console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));
    console.log(findElement([1, 3, 5, 9], (num) => num % 2 === 0));
}

