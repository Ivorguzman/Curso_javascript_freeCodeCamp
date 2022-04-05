{
    // !  Ejercicio 1

    // Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

    // Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito de este desafío, nos gustaría que usaras uno 

    function confirmEnding(str, target) {
        return str;
    }

    // confirmEnding("Bastian", "n");

}
{
    // !  Solucion 1

    // Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target). 

    function confirmEnding(str, target) {
        console.log(str.length)
        console.log(target.length)
        console.log(str.length - target.length)
        //! Valor devuelto Una nueva cadena que contiene la sección extraída de la cadena ==> (r).
        console.log(str.slice(str.length - target.length))
        console.log(target)
        console.log(str)

        return str.slice(str.length - target.length) === target;
    }

    console.log(confirmEnding("Connor", "n"));
    // console.log(confirmEnding("Congratulation", "on"));
    // console.log(confirmEnding("Bastian", "n"));

}
{
    // !  Solucion 2

    // Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target). 


    /// Explicación del código

    /// Si se proporciona un número negativo como primer parámetro para , el desplazamiento se toma hacia atrás desde el final de la cadena.slice()

    function confirmEnding(str, target) {
        console.log(str.length)
        console.log(target.length)
        console.log(str.length - target.length)
        //! Valor devuelto Una nueva cadena que contiene la sección extraída de la cadena ==> (r).
        console.log(target)
        console.log(str)

        return str.slice(-target.length) === target
    }

    console.log(confirmEnding("Connor", "n"));
    // console.log(confirmEnding("Congratulation", "on"));
    // console.log(confirmEnding("Bastian", "n"));

}