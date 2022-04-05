{
    // !  Ejercicio

    /// Haz que la primera letra de una palabra este en mayúscula

    // Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

    // Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.

    function titleCase(str) {
        return str;
    }

    titleCase("I'm a little tea pot");

}

{
    // !  Solucion 1 con map()

    /// Haz que la primera letra de una palabra este en mayúscula

    // Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

    // Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.

    function titleCase(str) {
        console.log(str.toLowerCase().trim().split(' '));
        return str.toLowerCase().trim().split(' ').map(((newStr) => {
            console.log(newStr[0]);
            console.log(newStr[0].toUpperCase());
            console.log(newStr.substr(1));
            return newStr[0].toUpperCase() + newStr.substr(1);
        })).join(' ')
    }
    titleCase("I'm a lTttle teA pOt")

    //!  === Nota: con más de 2 espacios entre palabras no va a funcionar===.
}


{
    // !  Solucion 2  Implementación compatible con ES5:

    /// Haz que la primera letra de una palabra este en mayúscula

    // Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

    // Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.

    function titleCase(str) {
        return str.toLowerCase().replace(/\b[a-z]/g, l => l.toUpperCase())
    }
    console.log(titleCase("I'm a little tea pot"));
    console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

    //! Nota: no funciona con ñ ,ni acentos, ni apostrofes



    //?  La expresión regular coincide con la primera letra de cada palabra dentro de la cadena dada y transforma solo esa letra en mayúscula:esto \b  coincide con un límite de palabra (el comienzo o el final de la palabra),y  [a-z]  coincide con el siguiente metacaracteres desde la "a" la "z" en minuscula

}




{
    // !  Solucion 3  (Expresiones regulares) Implementación compatible con ES6:

    /// Haz que la primera letra de una palabra este en mayúscula

    // Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

    // Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.

    function titleCase(str) {
        return str.toLowerCase().replace(/\b[a-z]/g, function (l) {
            return l.toUpperCase();
        })
    }
    console.log(titleCase("I'm a little tea pot"));
    console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

    //! Nota: no funciona con ñ ,ni acentos, ni apostrofes
    
}


{
     // !  Solucion 4  (Expresiones regulares) Implementación compatible con ES6:

    
    function titleCase(str) {
        return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, L => L.toUpperCase());
    }
    console.log(titleCase("I'm a little tea pot"));


    //? Ponga en minúsculas toda la cadena usando str.toLowerCase(). Reemplace el primer carácter de cada palabra a mayúsculas usando .replace. Busque el carácter al comienzo de cada palabra, es decir, coincida con cualquier carácter que siga a un espacio o coincida con el primer carácter de toda la cadena, utilizando el siguiente patrón. Explicación de expresiones regulares: encuentre todos los caracteres que no sean espacios en blanco (\ S) al comienzo de la cadena (^) o después de cualquier carácter de espacio en blanco (\ s) El modificador g busca otro patrón de palabras en toda la cadena y los reemplaza. Esta solución funciona con símbolos nacionales y letras acentuadas, como se ilustra en los siguientes ejemplos de caracteres internacionales: ‘бабушка

}


{
    // !  Solucion 5 con for in

    function titleCase(str) {
        const newTitle = str.split(" ");
        const updatedTitle = [];

        for (let st in newTitle) {
            console.log(st)
            console.log(newTitle[st])
            console.log(newTitle[st][0])
            console.log(newTitle[st][0].toUpperCase())
            console.log(newTitle[st].slice(1))
            console.log(newTitle[st][0].toUpperCase() + newTitle[st].slice(1))
            console.log(newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase())


            updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
        }
        return updatedTitle.join(" ");
    }

    // console.log(titleCase("I'm a little tea pot"));
    console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

}