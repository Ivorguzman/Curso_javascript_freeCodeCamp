{

    //! Invierte la cadena proporcionada.

    // Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

    // Tu resultado debe ser una cadena.

    function reverseString(str) {
        return str;
    }

    reverseString("hello");

}
{


    //! === Solucion ===


    //! Invierte la cadena proporcionada.

    // Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

    // Tu resultado debe ser una cadena.

    {
        //! Con implementacion de metodos

        function reverseString(str) {
            let newStr = str
            return newStr
                .split("")  //!split() divide el String en un array (vector) 
                .reverse()
                .join("")//! El método join() une todos los elementos de una matriz en una cadena y  la devuelve 
        }


        console.log(reverseString("hello"));
    };

    {
        //! con Lopp for

        function reverseString(str) {
                      //! inzializando contador con lonjitud de el string
            let newString = "";
            for (i; i >= 0; i--) {
                newString = newString + str[i]  //! concatetenandoc/el  string con "" y acumulandolo en cada iteracion
                return newString
            }
        }
        reverseString("hello");
    }


    {

        //! Con operador ternario
        //? https:es.stackoverflow.com/questions/226746/invertir-un-string-sin-reverse-en-js
        const reverseString = (str = "") => {
            (str)
            // ? console.info(str.split("").reverse().join(""))
            // : console.warn("No hay una cadena de texto")
            let newString = str.split("").reverse().join("")
            let imprimir = console.log(newString)
            return imprimir
        }



        reverseString("hello") //ejemplo del warn
        // console.log(reverseString("hello"));
    }

    {
        //! Invirtiendo  una cadena de caracters con  map()

        let reverseString = (str) => {
            let arrayString = [str];
            let resultado = arrayString.map((valor) => {
                let cadena = valor.split("").reverse().join("")
                return cadena
            })
            let imprimir = console.log(resultado)
            return imprimir
        }

        reverseString("hello")
    }



}
