{

    //!Ejercicio

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

    // Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

    // Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

    // Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.

    function mutation(arr) {
        return arr;
    }

    mutation(["hello", "hey"]);

}
{

    //!solucion 

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

    // Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

    // Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

    // Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.

    function mutation(arr) {
        return arr;
    }

    mutation(["hello", "hey"]);

}



{

    //!solucion 1

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.



    function mutation(arr) {
        let index_01 = arr[1].toLowerCase();
        let index_02 = arr[0].toLowerCase();

        let i = 0;
        let l = index_01.length;

        for (; i < l; i++) {
            if (index_02.indexOf(index_01[i]) === -1) return false;
        }
        return true;
    }

    console.log(mutation(["hello", "neo"]));
}


{



    //!solucion  2 con every() con   ES6

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.


    function mutation(arr) {
        return arr[1]
            .toLowerCase()
            .split("")
            .every((letter) => arr[0].toLowerCase().indexOf(letter) !== -1);
    }

    mutation(["hello", "hey"]);



    /*👉
function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every((letter) => arr[0].toLowerCase().indexOf(letter) !== -1);
}

mutation(["hello", "hey"]);

👈*/


}





{




    //!solucion  3 con incluide ()

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.


    function mutation([target, test], i = 0) {
        target = target.toLowerCase();
        test = test.toLowerCase();
        return i >= test.length
            ? true
            : !target.includes(test[i])
                ? false
                : mutation([target, test], i + 1);
    }



    /*👉
        function mutation([target, test], i = 0) {
            target = target.toLowerCase();
            test = test.toLowerCase();
            return i >= test.length
                ? true
                : !target.includes(test[i])
                    ? false
                    : mutation([target, test], i + 1);
        }
    
    👈*/


}



{




    //! Solucion 4 map()

    function mutation(arr) {
        word = arr[0].toLowerCase();
        letters = arr[1].toLowerCase().split("");
        wrong = false;


        letters.map(function (letter) {
            if (word.indexOf(letter) == -1) {
                wrong = true;
            }

        });

        if (wrong) {
            return false;
        }

        return true;
    }

    // console.log(mutation(["hello", "neo"]));
}




{
    //! Solucion  5 Expre3ciones regulares

    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.



    function mutation(arr) {
        var re = new RegExp('[^' + arr[0] + ']', "i");
        return !re.test(arr[1]);
    }
}
























































