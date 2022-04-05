{
    //! Ejercicios
    ///    Devuelve la longitud de la palabra más larga en la oración proporcionada.

    //* Tu respuesta debe ser un número.
    function findLongestWordLength(str) {
        return str.length;
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog");

}
{
    /// 1. (Enfoque procesal) Utilizando ciclo for(){}

    function findLongestWordLength(str) {
        let arrPalabras = str.split(" ");
        let maximaLongitudPalabra = 0;

        for (let i = 0; i < arrPalabras.length; i++) {
            if (arrPalabras[i].length > maximaLongitudPalabra) {
                maximaLongitudPalabra = arrPalabras[i].length;
            }
        }
        return maximaLongitudPalabra;
    }
    findLongestWordLength("jumped The quick brown fox over the lazy dog camello");
}
{
    /// 2. Solucion Funcional Utilizando.reduce()
    {
        //? Utilizando.reduce()
        debugger;
        function findLongestWordLength(str) {

            return str.split(' ')
                .reduce((longest, word) =>
                    Math.max(longest, word.length), '');
        }
        console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
    }


    {
        /// 2.1 Solucion Funcional Utilizando.reduce()
        //! Variente del  ejercicio (palabra mas larga)

        //? Utilizando.reduce()

        function findLongestWord(str) {
            let palabraMasLarga = str.split(' ')
                .reduce((laMasLarga, palabraActual) => palabraActual.length > laMasLarga.length ? palabraActual : laMasLarga, " ");
            return palabraMasLarga;
        }
        let laMasLargaEs = findLongestWord("The quick brown fox jumped over the lazy dog");
        // console.log(laMasLargaEs);
    }

    {
        /// 3. Solucion Funcional Utilizando.map()

        function findLongestWordLength(str) {
            let longitudMasLarga = [...str.split(" ").map((word) => word.length)]
            let imprimir = console.log(Math.max(...longitudMasLarga))
            return; imprimir
        }

        // findLongestWordLength("The quick brown fox jumped over the lazy dog")
    }
    {

        /// 3.2 Solucion Funcional Utilizando.map()
        function findLongestWordLength(str) {
            let wordLengths = str.split(" ").map(w => w.length);
            const maxLength = Math.max(...wordLengths);
            return maxLength;
        }
        console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

    }
    {
        /*👉        /// 3. Solucion Funcional Utilizando la recurcion
                function findLongestWordLength(str) {
                    //? dividir la cadena en palabras individuales
                    const words = str.split(" ");
                    //? palabras solo tengan 1 elemento,  que es el elemento más largo
                    if (words.length == 1) {
                        return words[0].length;
                    }
        
                    //? si las palabras tienen varios elementos, elimine el primer elemento
                    //? y recursivamente llamar a la función
                    let queDebuelveSlice = words.slice(1)
                    return Math.max(words[0].length, findLongestWordLength(words.slice(1).join(" "))
                    );
        
                }
                findLongestWordLength("The quick brown fox jumped over the lazy dog");
        👈*/



        {
            /// 3. Solucion Funcional Utilizando la recurcion
            function findLongestWordLength(str) {
                const words = str.split(" ");
                if (words.length == 1) {
                    return words[0].length;
                }
                return findLongestWordLength(words.slice(1).join(" "));
                // return Math.max(words[0].length, findLongestWordLength(words.slice(1).join(" "))

            }

        }

    }
}


