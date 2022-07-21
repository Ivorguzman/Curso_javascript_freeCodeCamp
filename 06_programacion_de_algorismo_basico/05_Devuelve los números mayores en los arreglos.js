
{


    //* === Practica con un array Palano===

    {

        //!=== Con ciclo for  ===

        const numeros = [30, 1, 2, 3, 90, 10, 5, 6];
        let numMax = 0;
        let numMaxAcumulado = 0;
        for (let i = 0; i < numeros.length; i++) {
            numMax = numeros[i];
            if (numMaxAcumulado < numMax) {
                numMaxAcumulado = numMax;
            }
        }

    }

    //!=== Con ciclo for of ===

    const numeros = [30, 1, 2, 3, 90, 10, 5, 6];

    let numMax = 0;
    for (let numMaxAcumulado of numeros) {
        if (numMax < numMaxAcumulado) {
            numMax = numMaxAcumulado;
        }
    }


    {
        //! Usando el operarador spread operator y metodo max()

        const numeros = [30, 1, 2, 3, 90, 10, 5, 6, 120];
        let resultado = Math.max(...numeros);

    }
    {
        //! === Solucion Funcional metodo reduce() ===

        const numeros = [30, 1, 2, 3, 90, 10, 5, 6, 120];

        let numeroMayor = numeros.reduce(function (numMaxAcumulado, numMax) {
            return Math.max(numMax, numMaxAcumulado);
        });
        // console.log(numeroMayor)
    }
}





{
    //! === Ejercicio ===

    //* Devuelve los números mayores en los arreglos
    // Devuelve un arreglo que consista en el mayor número de cada sub arreglo proporcionado Por simplicidad, el arreglo dado contendrá exactamente 4 sub arreglos.

    // Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle For  y acceder a cada miembro del arreglo con la sintaxis arr [i]

    function largestOfFour(arr) {
        return arr;
    }

    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
}

{
    //! === Solucion 1 bucle for tradicional ===

    //* Devuelve los números mayores en los arreglosa
    function largestOfFour(arr) {
        let valorMayor = [];
        for (let i = 0; i < arr.length; i++) {
          console.log(arr[i])
          console.log("########")
          for (let j = 0; j < arr[i].length; j++) {
             console.log(arr[i][j]);
            if (arr[i][j] > valorMayor) {
              valorMayor.push(arr[j])
              console.log(valorMayor)
              console.log("______")
              console.log("******")
              console.log(i, j, arr[i][j])
            }
          }
        }
        console.log()
        console.log()
        console.log("°°°°°°°°°°°°")
        console.log(valorMayor)
      }
      largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    //* Código Explicación

    // Cree una variable para almacenar los resultados como una matriz.
    // Cree un bucle externo para iterar a través de la matriz externa.
    // Cree una segunda variable para contener el número más grande e inicialícela con el primer número. Esto debe estar fuera de un bucle interno, por lo que no se reasignará hasta que encontremos un número mayor.
    // Cree dicho bucle interno para trabajar con los subconjuntos.
    // Compruebe si el elemento de la submatriz es más grande que el número más grande actualmente almacenado. Si es así, actualice el número en la variable.
    // Después del ciclo interno, guarde el número más grande en la posición correspondiente dentro de la resultsmatriz.
    // Y finalmente devolver dicha matriz.


}


{
    //! Solución funcional map () y Reduce ()

    {

        function largestOfFour(arr) {
            return arr;
        }

        largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

    }

    //* Código Explicación
    // asignamos todos los elementos dentro de la matriz principal a una nueva matriz usando Array.prototype.map()y devolvemos esta matriz como el resultado final
    // dentro de cada matriz interna, reducimos su contenido a un solo valor usandoArray.prototype.reduce()
    // la función de devolución de llamada pasada al método reduce toma el valor anterior y el valor actual y compara los dos valores
    // si el valor actual es más alto que el valor anterior, lo establecemos como el nuevo valor anterior para compararlo con el siguiente elemento dentro de la matriz o lo devolvemos a la devolución de llamada del método de mapa si es el último elemento
}


{
    //! === los metodos map, bimd  Y   Math.max===

    function largestOfFour(arr) {
        return arr;
    }

    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


    //* Código Explicación

    // TL;DR: construimos una función de devolución de llamada especial (usando el Function.bindmétodo), que funciona igual Math.maxpero también tiene Function.prototype.applyla capacidad de tomar matrices como argumentos.

    // Comenzamos mapeando los elementos dentro de la matriz principal. Es decir, cada una de las matrices internas.
    // Ahora necesita una función de devolución de llamada para encontrar el máximo de cada matriz interna proporcionada por el mapa.
    // Entonces, queremos crear una función que haga el trabajo Math.maxy acepte la entrada como una matriz (que por defecto no lo hace).

    // En otras palabras, sería realmente bueno y simple si esto funcionara solo:

    // Math.max([9, 43, 20, 6]); // Resulting in 43

    // Por desgracia, no lo hace.

    // Para hacer el trabajo de aceptar argumentos en forma de matriz, existe este Function.prototype.applymétodo, pero complica un poco las cosas al invocar la función de contexto .
    // es decir Math.max.apply(null, [9, 43, 20, 6]);, invocaría algo como un Max.maxmétodo. Lo que estamos buscando... casi.

    // Aquí estamos pasando nullcomo el contexto del Function.prototype.applymétodo ya Math.maxque no necesita ningún contexto.

    // Dado arr.mapque espera una función de devolución de llamada, no solo una expresión, creamos una función a partir de la expresión anterior utilizando el Function.bindmétodo.
    // Dado que, es un métodoFunction.prototype.apply estático del mismo objeto , podemos llamar a ie .Function Function.prototype.bindFunction.prototype.applyFunction.prototype.apply.bind
    // Ahora pasamos el contexto para la Function.prototype.apply.bindllamada (en este caso queremos Math.maxque podamos obtener su funcionalidad).
    // Dado que el método incrustado Function.prototype.applytambién requerirá un contexto como primer argumento, debemos pasarle un contexto falso .
    // Entonces, pasamos nullcomo el segundo parámetro al Function.prototype.apply.bindque le da un contexto al Math.maxmétodo.

    // Dado que Math.maxes independiente de cualquier contexto , ignora el contexto falso proporcionado por la Function.prototype.applyllamada al método.

    // Por lo tanto, nuestro Function.prototype.apply.bind(Math.max, null)crea una nueva función que acepta los arr.mapvalores, es decir, las matrices internas.



}
{

    // !=== Enfoque recursivo ===

    function largestOfFour(arr, finalArr = []) {
        return !arr.length
            ? finalArr
            : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
    }


    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
}