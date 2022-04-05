{
    //! Ejercicio

    ///     Rebote falsy
    // Quita todos los valores falsos de un arreglo.

    // Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

    // Sugerencia: Intenta convertir cada valor a booleano.

    function bouncer(arr) {
        return arr;
    }

    bouncer([7, "ate", "", false, 9]);
}




{
    //! Solucion  1 con filter

    ///     Rebote falsy
    // Quita todos los valores falsos de un arreglo.

    // Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

    // Sugerencia: Intenta convertir cada valor a booleano.



    function bouncer(arr) {
        let newArr = arr.slice()
        return newArr.filter(Boolean);
    }


    // console.log(bouncer([7, "ate", "", false, 9]));
    // bouncer(["a", "b", "c"]) //debe devolver["a", "b", "c"].

    // bouncer([false, null, 0, NaN, undefined, ""]) //debe devolver[].

    // bouncer([null, NaN, 1, 2, undefined]) //debe devolver[1, 2].


};

{
    //! EjercSolucion 2 ciclo for i
    ///     Rebote falsy
    // Quita todos los valores falsos de un arreglo.

    // Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

    // Sugerencia: Intenta convertir cada valor a booleano.

    //*  https://forum.freecodecamp.org/t/javascript-truthy-value-explained-with-examples/15975

    function bouncer(arr) {
        let newArr = [];
        let i;
        let l = arr.length;
        for (i = 0; i < l; i++) {
            console.log(arr[i])
            console.log(typeof arr[i], arr[i] == false, i);
            console.log(typeof arr[i], arr[i] == true, i);

            //?  Un valor veraz es un valor que se traduce como verdadero cuando se evalúa en un contexto booleano .Todos los valores son verdaderos a menos que se definan como falsos. 245(es decir, excepto para, false, 0, ""y null

            if (arr[i]) {
                newArr.push(arr[i])
                console.log(newArr)
            }
        }

        return newArr;
    }


    console.log(bouncer([7, "ate", "", false, 9]));
}




