{

    //!      Ejercicio


    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

    function chunkArrayInGroups(arr, size) {//size es el numero de elementos que va a tener cada grupo
        return arr;
    }

    chunkArrayInGroups(["a", "b", "c", "d"], 2);
}

{
    //! Solucion 1
    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

    function chunkArrayInGroups(arr, size) {
        let temp = [], result = [];// crea una variable temporal y otra para guardar los resultados
        let i = 0;
        let l = arr.length; // guarda la longitud del arreglo
        for (; i < l; i++) {
            if (i % size !== size - 1) temp.push(arr[i]);// si el indice no es multiplo de size, agrega el elemento al arreglo temporal
            else {// si el indice es multiplo de size, agrega el arreglo temporal al arreglo resultado
                temp.push(arr[i]);
                result.push(temp);
                temp = [];
            }
        }

        if (temp.length !== 0) result.push(temp);
        return result;
    }

    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

}



{
    //! Solucion 2  Operador Ternario ==>

   /// NOTA: ==> Ojo ==>  No esta funcionando bien, no se porque, pero funciona con el codigo de arriba
    
    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

    function chunkArrayInGroups(arr, size) {
        let temp = [], result = [];// crea una variable temporal y otra para guardar los resultados
        let i = 0;
        let l = arr.length;// guarda la longitud del arreglo
        for (; i < l; i++) {
            (i % size !== size - 1) ? temp.push(arr[i]) // si el indice no es multiplo de size, agrega el elemento al arreglo temporal
                :
                temp.push(arr[i]), result.push(temp), temp = [];// si el indice es multiplo de size, agrega el arreglo temporal al arreglo resultado
        }
        return (temp.length !== 0) ? result.push(temp) : result;// si el arreglo temporal no esta vacio, agrega el arreglo temporal al arreglo resultado
    }

    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
}
