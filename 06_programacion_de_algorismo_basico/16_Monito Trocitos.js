{

    //!      Ejercicio


    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

    function chunkArrayInGroups(arr, size) {
        return arr;
    }

    chunkArrayInGroups(["a", "b", "c", "d"], 2);
}

{
    //! Solucion 1
    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

    function chunkArrayInGroups(arr, size) {
        let temp = [],result = [];
        let i = 0;
        let l = arr.length;
        for (; i < l; i++) {
            if (i % size !== size - 1) temp.push(arr[i]);
            else {
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
     //! Solucion 2  Ope. Ternario ==>Ojo  No esta funcionando
    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

    function chunkArrayInGroups(arr, size) {
        let temp = [], result = [];
        let i = 0;
        let l = arr.length;
        for (; i < l; i++) {
            (i % size !== size - 1) ? temp.push(arr[i])
                :
                temp.push(arr[i]), result.push(temp), temp = [];


        }

        if (temp.length !== 0) result.push(temp);
        return result;
    }

    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
}
