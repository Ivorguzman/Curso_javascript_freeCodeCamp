{
    // Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro rest (...) para los parámetros de función. Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos. Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.
    { // === Explicacion 1===

        // Echa un vistazo a este código:

        function howMany(...args) {
            return "You have passed " + args.length + "arguments.";
        }
        console.log(howMany(0, 1, 2, "A", 100, 200));
        console.log(howMany("string", null, [1, 2, 3], {}));

        // La consola mostrará las cadenas You have passed 3 arguments. y You have passed 4 arguments..

        // El parámetro rest elimina la necesidad de comprobar el arreglo args y nos permite aplicar map(), filter() y reduce() en el arreglo de parámetros.}

    }


    {

        {
            // === Explicacion 1 ===
            function myFun(...moreMoreArgs) {
                console.log(...moreMoreArgs)
                return moreMoreArgs
            }
            let valor = myFun(1, 2, 3, 4, 5, 6, 7);
            console.log(valor)
        }


        {
             // === Explicacion 2 ===
            function myFun(a, b, ...manyMoreArgs) {
                console.log("a", a);
                console.log("b", b);
                console.log("ZAPATO", "MEDIAS", manyMoreArgs);
                console.log(a, b, manyMoreArgs);
                console.log(a, manyMoreArgs);
                console.log(manyMoreArgs);
                console.log("manyMoreArgs", manyMoreArgs);
            }

            let valor = myFun("one", "two", "three", "four", "five", "six");
            console.log(valor)
        }


    }

}
// === Desafio ===

{
    // Modifica la función sum usando el parámetro rest de tal manera que la función sum sea capaz de recibir cualquier número de argumentos y devolver su suma.

    const sum = (x, y, z) => {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    }

}

{
    // === Solucion incompleta 1===

    const sum = (x, y, z, ...arg) => {
        const args = [x, y, z, arg] //? 
        return args.reduce((a, b) => a + b, 0);
    }
    console.log(sum(1, 2, 3, 4))
    // console.log(sum());

}

{
    // === Solucion incompleta 2 ===

    const sum = (...arg) => {
        const args = [arg] //? 
        return args.reduce((a, b) => a + b, 0);
    }
    console.log(sum(1, 2, 3, 4))
}
{
    // === Solucion  como funcion nombrada===

    function sum(...arg) {
        const args = arg; //?
        return args.reduce((a, b) => a + b, 0);
    }
    console.log(sum(5))
}

{
    // === Solucion como funcion flecha1 ===

    const sum = (...arg) => {
        const args = arg //?
        return args.reduce((a, b) => a + b, 0);
    }
    console.log(sum(5))
}
{
    // === Solucion como funcion flecha2 Dfinitiva===

    const sum = (...args) => {
        console.log(...args)
        return args.reduce((a, b) => a + b, 0);
    }
    sum(1, 2, 3, 4) //?
    console.log(sum(1, 2, 3, 4))
}
