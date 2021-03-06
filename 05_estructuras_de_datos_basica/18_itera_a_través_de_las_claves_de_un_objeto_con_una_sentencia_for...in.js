
{
    //*    === Explicacion ===
    // A veces es necesario iterar por todas las claves de un objeto. Esto requiere una sintaxis espec铆fica en JavaScript llamada sentencia for...in. Para nuestro objeto users, esto podr铆a verse as铆:
    /*馃憠{
        let users = {
            Alan: {
                age: 27,
                online: true
            },
            Jeff: {
                age: 32,
                online: true
            },
            Sarah: {
                age: 48,
                online: true
            },
            Ryan: {
                age: 19,
                online: true
            }
        };

        for (let user in users) {
            console.log(user);
        }
    }馃憟*/

    // Esto registrar谩 Alan, Jeff, Sarah, y Ryan, cada valor en su propia l铆nea.

    // En esta sentencia, definimos una variable user, y como puedes ver, esta variable se restablece durante cada iteraci贸n a cada una de las claves del objeto a medida que la sentencia hace un bucle a trav茅s del objeto, dando como resultado que el nombre de cada usuario se imprima en la consola.

    // NOTA: Los objetos no mantienen un orden para las claves almacenadas como lo hacen los arreglos; por lo tanto, la posici贸n de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante cuando se hace referencia o se accede a esa clave.

}

{
    //  === Desafio ===
    
    const users = {
        Alan: {
            online: false
        },
        Jeff: {
            online: true
        },
        Sarah: {
            online: false
        }
    }

    function countOnline(usersObj) {
        // Cambia solo el c贸digo debajo de esta l铆nea

        // Cambia solo el c贸digo encima de esta l铆nea
    }

    console.log(countOnline(users));
}

{
    // === Solucion === 

    // Hemos definido una funci贸n countOnline que acepta un argumento (un objeto usuario). Utiliza una sentencia for...in dentro de esta funci贸n para iterar sobre el objeto usuarios (users) pasado a la funci贸n y devuelve el n煤mero de usuarios cuya propiedad online est茅 establecida como true. A continuaci贸n se muestra un ejemplo de un objeto usuario que podr铆a pasarse a countOnline. Cada usuario tendr谩 una propiedad online con un valor true o false.

    {
        let users = {
            Alan: {
                online: true
            },
            Jeff: {
                online: false
            },
            Sarah: {
                online: false
            }
        }

        function countOnline(userObj) {
            let contador = 0;
            for (let user in userObj) {
                if (userObj[user].online === true) {
                    contador += 1;
                }

            }
            return contador;
            // Cambia solo el c贸digo encima de esta l铆nea
        }

        console.log(countOnline(users))
    }
}