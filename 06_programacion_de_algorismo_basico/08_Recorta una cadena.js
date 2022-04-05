

{
    //! Ejercicio 

    ///  Recorta una cadena

    // Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.
    function truncateString(str, num) {
        return str;
    }

    truncateString("A-tisket a-tasket A green and yellow basket", 8);
}






{

    //!solucion 1  con splice (Mutabilidad)

    ///  Recorta una cadena

    // Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.


    function truncateString(str, num) {
        if (str.length > num) {
            return `${str.split("").splice(0, num).join("")}...`
        }
        else {

            return str;
        }
    }
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
    // console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
}
{

    //!solucion 2  con splice y ternario

    ///  Recorta una cadena

    // Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.


    function truncateString(str, num) {
        return str.length > num ? `${str.split("").splice(0, num).join("")}...` : str;

    }
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
    // console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
}
{

    //!solucion 3  con slice 

    ///  Recorta una cadena

    // Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.


    function truncateString(str, num) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
    // console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
}

{

    //!solucion 4  con slice  y ternario

    ///  Recorta una cadena

    // Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.


    function truncateString(str, num) {
        return str.length > num ? str.slice(0, num) + "..." : str;
    }
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
    // console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
}



//! Pruebas

// / Las cadenas son inmutables en JavaScript 

{
    // ! comportamiento de string transformado en array (Seudo Array)
    let str = "A-tisket a-tasket A green and yellow basket"
    console.log(str.split(""))
    let oracion = str.split("").splice(0, 8, "String añadido").join("")
    console.log(str)
    console.log(`${oracion}... `)
    console.log(str)

}

{

    // ! comportamiento de un  en array original
    let str = ['A', '-', 't', 'i', 's', 'k', 'e', 't', ' ', 'a', '-', 't', 'a', 's', 'k', 'e', 't', ' ', 'A', ' ', 'g', 'r', 'e', 'e', 'n', ' ', 'a', 'n', 'd', ' ', 'y', 'e', 'l', 'l', 'o', 'w', ' ', 'b', 'a', 's', 'k', 'e', 't']

    console.log(str)
    let oracion = str.splice(0, 8, "String añadido").join("")
    console.log(str)
    console.log(`${oracion}... `)
}
