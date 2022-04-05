{
    // Como has visto anteriormente, al aplicar Array.prototype.map(), o simplemente map(), el método map devuelve un arreglo de la misma longitud que el arreglo dentro del que fue llamado. Esto tampoco altera el arreglo original, siempre y cuando su función callback no lo haga.

    // En otras palabras, map es una función pura, y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

    // Puedes aprender mucho sobre el método map si implementas tu propia versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().


}

{
    // === Desafio ===


    // Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). No debes utilizar el método incorporado map. Se puede acceder a la instancia de Array en el método myMap usando this.

    // La variable global
    const s = [23, 65, 98, 5];

    Array.prototype.myMap = function (callback) {
        const newArray = [];
        // Cambia solo el código debajo de esta línea

        // Cambia solo el código encima de esta línea
        return newArray;
    };

    const new_s = s.myMap(function (item) {
        return item * 2;
    });
}


{
    // === Solucion ===


    // Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). No debes utilizar el método incorporado map. Se puede acceder a la instancia de Array en el método myMap usando this.

    // La variable global
    const array = [23, 65, 98, 5];


    Array.prototype.Map = function (funcionCallBack) {
        const nuevo_array = [];
        // Cambia solo el código debajo de esta línea //;
        for (let i = 0; i < array.length; i++) {
            nuevo_array[i] = funcionCallBack(array[i]);
            // console.log(funcionCallBack)
            //console.log(nuevo_array[i])

        }
        // Cambia solo el código encima de esta línea
        return nuevo_array;
    };


    /*👉const nuevo_array = array.MAP()👈*/
    const nuevo_array = array.Map((items) => items * 2);
}



{
    const array = [23, 65, 98, 5];
    const nuevo_array = array.map(function (items) {
            items = items * 2;
            return items;
        })

    // console.log(nuevo_array);
}







{

    /*👉=== Prctica de funcion Call Back ===👈*/

    miMap = function (funcionCallBack) {
        resultado = funcionCallBack(2, 3)
        console.log(funcionCallBack);
        console.log(`El resultado de esta operacion es : ${resultado}`);
    }

    miMap(function (a, b) {
        return ((a + b) * 2);
    })



}


{
    const almuerzos = [
        { principal: 'arepa', postre: 'helado' },
        { principal: 'tacos', postre: 'torta de queso' },
        { principal: 'pizza', postre: 'galletas' },
        { principal: 'suchi', postre: 'qesillo' }

    ];

    {
        /*👉 === Paradigma imperativo ===👈*/

        const platosPrincipales = [];

        for (let i = 1; i <= almuerzos.length; i++) {
            platosPrincipales.push(almuerzos[i - 1].principal);
        }
        console.log(platosPrincipales)
    }

    {
        /*👉 === Paradigma funcional ===👈*/

        const platosPrincipales = almuerzos.map((itemDelArray, indiceDelArray, elArray) => {
            console.log(itemDelArray);
            console.log(indiceDelArray);
            console.log(elArray);
            return itemDelArray.principal
        });
        console.log(platosPrincipales);
    }
}

{

    // Solución 1 
    // The global Array
    var array = [23, 65, 98, 5];
    /*👉 Sintaxis: ==> Array.prototype.name = value👈*/

    // Recive funcion que a su ves retorna su parametro multiplicado por 2
    Array.prototype.myMap = function (callBack) {
        var new_array = [];
        // console.log(this);
        for (let i = 0; i < this.length; i++) {
            new_array.push(callBack(this[i]));
        }

        return new_array;
    };

    var arrayFinal = array.myMap((itemDelArray) => itemDelArray * 2);


    // console.log(arrayFinal);

    // Código Explicación
    // Resuelve este desafío usando un bucle "for" y this

    // El uso de un bucle "for" nos permite aplicar la función callBack a cada elemento de la matriz global y luego enviar los elementos modificados a la nueva matriz vacía que se devuelve al final.

}



{
    // Solución 2  usando el método forEach


    /*👉    Este es un prototipo de un método llamado myMap. El método llama a una determinada función llamada "devolución de llamada" (podría ser cualquier otro nombre), que:
    
    1.  Crea un newArray;

    2. Usando la palabra clave this, establece la propiedad, como es habitual en un constructor, y en este caso la propiedad es la función (método forEach );

    3. Itera a través de [s] matriz usando el método forEach;

    4.En cada elemento de [s] matriz ejecuta la función llamada "callback()";

    5. El resultado de cada paso de ejecución de la función se inserta en el newArray creado  ;
    el método devuelve newArray.

    6. Cuando llamamos al método myMap() en la matriz de origen s, realiza todas estas acciones, además de callback(a)performs item*2, en este ejemplo, y devuelve el resultado general.
    
    
    Esto todavía no es del todo correcto, considerando que tanto forEach() como map() esperan más de un argumento, el código adecuado debería ser algo así: this.forEach((...arg) => newArray.push(callback(.. .arg))); esto en JS se refiere a un contexto de ejecución actual, que es, en otras palabras, qué objeto se ejecuta.
    👈*/

    // the global Array
    var s = [23, 65, 98, 5];

    Array.prototype.myMap = function (callback) {
        var newArray = [];
        // Add your code below this line
        this.forEach(a => newArray.push(callback(a)));
        // Add your code above this line
        return newArray;
    };

    var new_s = s.myMap(function (item) {
        return item * 2;
    });

    console.log(new_s)
    // Código Explicación
    // Resuelve este desafío usando this y el método forEach

    // La palabra clave this nos da acceso al objeto al que llamamos myMap.

    // A partir de ahí, podemos usar el método forEach para agregar elementos a una matriz vacía ya declarada a medida que modificamos cada elemento con el método de devolución de llamada dado.
}

{
    // Solución 3   Resuelve este desafío usando recursividad y metodo ternario parametreos por defecto

    // The global Array
    var s = [23, 65, 98, 5];
debugger;
    Array.prototype.myMap = function (callback, newArray = [], i = 0) {
        return i < this.length
            ? (this.myMap(callback, newArray.concat(callback(this[i])), i + 1))
            : (
                newArray
            )
    };

    var new_s = s.myMap((item) => item * 2)
    console.log(new_s);



    console.log(s.myMap((item) => item * 2));


}