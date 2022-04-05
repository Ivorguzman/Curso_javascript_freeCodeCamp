{
    //! ===Explicacion ===

    //! Utiliza el método "reduce" para analizar datos

    // Array.prototype.reduce() o simplemente reduce() es la operación más común de todas para arreglos en JavaScript. Se puede resolver casi cualquier problema de procesamiento de arreglos utilizando el método reduce.

    // El método reduce permite formas más generales de procesamiento de arreglos y es posible mostrar que tanto filter como map pueden derivarse como aplicaciones especiales de reduce. El método reduce itera sobre cada elemento del arreglo y devuelve un solo valor (por ejemplo una cadena, número, objeto, arreglo). Esto se consigue mediante una función callback que se llama en cada iteración.

    //* La función callback acepta cuatro argumentos. El primer argumento se conoce como acumulador, que recibe el valor retornado de la función callback de la iteración anterior, el segundo es el elemento actual que se está procesando, el tercero es el índice de ese elemento y el cuarto es el arreglo sobre el que se llama a la función reduce.

    // Además de la función callback, reduce tiene un parámetro adicional que toma un valor inicial para el acumulador. Si este segundo parámetro no se utiliza, entonces la primera iteración se omite y la segunda se pasa por el primer elemento del arreglo como acumulador.

    // Mira a continuación un ejemplo con reduce en el arreglo users para devolver la suma de todas las edades de los usuarios. Para hacerlo más fácil, el ejemplo sólo utiliza el primer y segundo argumento.

    {
        const users = [
            { name: 'John', age: 34 },
            { name: 'Amy', age: 20 },
            { name: 'camperCat', age: 10 }
        ];

        const sumOfAges = users.reduce((sum, user) => {
            console.log("valor de sum ==> " + sum);
            console.log("valor de user.age==> " + user.age);

            return sum + user.age;
        }, 0);
        console.log(sumOfAges);
        // La consola mostrará el valor 64.}

        // En otro ejemplo, se puede observar cómo un objeto puede ser devuelto con los nombres de los usuarios como propiedades con las edades como valores.
        {
            const users = [
                { name: 'John', age: 34 },
                { name: 'Amy', age: 20 },
                { name: 'camperCat', age: 10 }
            ];

            const usersObj = users.reduce((obj, user) => {
                obj[user.name] = user.age;
                console.log("valor de user.name==> " + user.name);
                console.log("valor de obj[user.name]==> " + obj[user.name]);
                return obj;
            }, {});
            console.log(usersObj);
            // La consola mostrará el valor { John: 34, Amy: 20, camperCat: 10 }.}
        }
    }
}

// The global variable
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

{
    //! === Desafio === 

    //La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher Nolan. Recuerda de desafíos anteriores filtrar (filter) los datos y mapear (map) sobre ellos para extraer lo que necesitas. Puede que necesites crear otras variables y devolver la calificación media con la función getRating. Ten en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números antes de ser utilizados en cualquier operación matemática.



    function getRating(watchList) {
        // Only change code below this line
        let averageRating;


        // Only change code above this line
        return averageRating;
    }

    // console.log(getRating(watchList));
}





{
    //! === Solución === 

    //La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher Nolan. Recuerda de desafíos anteriores filtrar (filter) los datos y mapear (map) sobre ellos para extraer lo que necesitas. Puede que necesites crear otras variables y devolver la calificación media con la función getRating. Ten en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números antes de ser utilizados en cualquier operación matemática.



    function getRating(watchList) {
        // Only change code below this line
        // let averageRating;
        let contador = 0;
        let christopherNolan = watchList.filter((itemArray) => itemArray.Director == "Christopher Nolan")
            .map((itemArrayFiltrado) => {
                contador = contador + 1
                let rating = Number(itemArrayFiltrado.imdbRating)
                console.log(rating);
                return rating
            })
            .reduce((sumandoRating, sumaRating) => {
                return (sumandoRating + sumaRating / contador);
            }, 0)
        return christopherNolan;
        // Only change code above this line
        // return averageRating;
    }

    console.log(getRating(watchList));

    /*👉La variable watchList contiene un arreglo de objetos con información sobre varias películas.
    
    Utiliza reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher Nolan.
    Recuerda de desafíos anteriores filtrar(filter) los datos y mapear(map) sobre ellos para extraer lo que necesitas.
    Puede que necesites crear otras variables y devolver la calificación media con la función getRating. 
    en en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números
    antes de ser utilizados en cualquier operación matemática.
👈*/

    /*👉1)  Encontrar la calificación (imdbRating) media en IMDB de las películas dirigidas por Christopher Nolan.👈*/


    /*👉La variable watchList no debe cambiar.👈*/

    /*👉Tu código debe utilizar el método reduce.👈*/

    /*👉getRating(watchList) debe ser igual a 8.675.👈*/

    /*👉Tu código no debe usar un bucle for.👈*/

    /*👉Tu código debe devolver el resultado correcto después de modificar el objeto watchList.👈*/


}


{
    //! === PRACTICAS PERSONALES ==> 1 ===

    const almuerzos = [
        { principal: 'arepa', postre: 'helado' },
        { principal: 'tacos', postre: 'torta de queso' },
        { principal: 'arepa', postre: 'bienmesabe' },
        { principal: 'pizza', postre: 'galletas' },
        { principal: 'arepa', postre: 'golfeados' },
        { principal: 'suchi', postre: 'quesillo' },
        { principal: 'arepa', postre: 'churros' }

    ];

    {
        //* === Paradigma imperativo ciclo For(){} ===

        const postresParaPlatosConArepas = [];

        for (i = 0; i < almuerzos.length; i++) {
            if (almuerzos[i].principal === 'arepa') {
                // console.log(almuerzos[i].postre)
                postresParaPlatosConArepas.push(almuerzos[i].postre)
            }
        }
        // console.log(postresParaPlatosConArepas);
    }
    {

        //* === Paradigma funcional  filter y Map  ===

        const postresSoloArepas = almuerzos.filter((ItemFilter) => {
            console.log(ItemFilter.principal === 'arepa');
            return ItemFilter.principal === 'arepa';

        })
            .map((itemMap) => {
                console.log(itemMap)
                return itemMap.postre

            })


        console.log(postresSoloArepas);
    }
}


{
    //! === PRACTICAS PERSONALES ==> 2 ===

    // The global variable
    const watchList = [
        {
            "Title": "Inception",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "16 Jul 2010",
            "Runtime": "148 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Christopher Nolan",
            "Doblada": "Aleman",
            "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
            "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "Language": "English, Japanese, French",
            "Country": "USA, UK",
            "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.8",
            "imdbVotes": "1,446,708",
            "imdbID": "tt1375666",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Interstellar",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "07 Nov 2014",
            "Runtime": "169 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan, Christopher Nolan",
            "Doblada": "Aleman,China",
            "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.6",
            "imdbVotes": "910,366",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "The Dark Knight",
            "Year": "2008",
            "Rated": "PG-13",
            "Released": "18 Jul 2008",
            "Runtime": "152 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
            "Doblada": "Aleman, Costa rica",
            "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            "Language": "English, Mandarin",
            "Country": "USA, UK",
            "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            "Metascore": "82",
            "imdbRating": "9.0",
            "imdbVotes": "1,652,832",
            "imdbID": "tt0468569",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Batman Begins",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "15 Jun 2005",
            "Runtime": "140 min",
            "Genre": "Action, Adventure",
            "Director": "Christopher Nolan",
            "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            "Doblada": "Aleman, Peru, China",
            "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes ,Alexander Guzman",
            "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
            "Language": "English, Urdu, Mandarin",
            "Country": "USA, UK",
            "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
            "Metascore": "70",
            "imdbRating": "8.3",
            "imdbVotes": "972,584",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Response": "True",
        },
        {
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Writer": "James Cameron",
            "Doblada": "Aleman,Venezuela",
            "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "Language": "English, Spanish",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "876,575",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Response": "True",

        }
    ];

    /*👉const averageRating = watchList.filter((pelicula) => {
        return pelicula.imdbRating >=8;
    })👈*/


    /*👉 const averageRating = watchList.filter((pelicula) => {
        return pelicula.Runtime== "162 min" });👈*/

    /*👉    const averageRating2 = watchList.filter((pelicula) => {
            return pelicula.Doblada.includes("Peru");
        })👈*/

    /*👉 const averageRating = watchList.filter((pelicula) => {
    return pelicula.Actors.includes("Christian Bale");
    })
    
    const averageRating2 = watchList.filter((pelicula) => {
    return pelicula.Doblada.includes("Peru") || pelicula.Doblada.includes("Venezuela");
    
    
    console.log(averageRating);
    console.log(averageRating2);
    })👈*/



    /*👉  
        const busquedaUsuario = prompt("Introdusca Titulo de la pelicula");
        const busquedaSistema = busquedaUsuario.toLocaleLowerCase()
     
        let titulo = ""
        const resultadoBusuqeda = watchList.filter((pelicula, indice, array) => {
            titulo = pelicula.Title.toLocaleLowerCase();
            console.log(array);
            console.log(indice);
            console.log(titulo)
            console.log(busquedaSistema)
            return titulo.includes(busquedaSistema.toLocaleLowerCase())
     
        });
     
        if (titulo === busquedaSistema) {
     
            console.log(resultadoBusuqeda)
        }
        else {
            console.log("No existe la pelicula")
        }👈*/

    // const busquedaUsuario = prompt("Introdusca Titulo de la pelicula");
    // const busquedaSistema = busquedaUsuario.toLocaleLowerCase()ea

    console.log(watchList[4].Actors = "Alexander Guzman");

    const resultadoBusqueda = watchList.filter((item, index, array) => {
        console.log(item);
        console.log(index);
        console.log(array);
        return item.Actors.includes("Alexander") && item.Actors.includes("Christian"); //! utilizando includes


    })

    console.log(watchList);

    8
    console.log(resultadoBusqueda);
    // console.log(watchList[4]);



    /*👉
    El método  includes()determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo  trueo falsecorresponde según.
    El método  includes() es "case-Sensible" (tiene en cuenta mayúsculas y minúsculas) Por ejemplo, la siguiente expresión devolverá false:
    'Ballena azul'.includes('ballena'); // devuelve false
    
        Ejemplos
    usando includes()
    const str = 'To be, or not to be, that is the question.'
    
    console.log(str.includes('To be'))        // true
    console.log(str.includes('question'))     // true
    console.log(str.includes('nonexistent'))  // false
    console.log(str.includes('To be', 1))     // false
    console.log(str.includes('TO BE'))        // false
    console.log(str.includes(''))             // true
     
     
    👈*/

}


{
    //! === PRACTICAS PERSONALES ==> 3 ===

    const numeros = [71, 41, 19, 88, 65];
    const dobles = numeros.reduce(acumuladores);


}

