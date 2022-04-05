
{
    // === Explicacion ===

    // Un patrón común en JavaScript es la ejecución de una función apenas declarada:

    (function () {
        console.log("Chirp, chirp!");
    })();

    // Esta es una expresión de función anónima que se ejecuta de inmediato y produce Chirp, chirp! inmediatamente.

    // Ten en cuenta que la función no tiene nombre y que no se almacena en un valor.Los dos paréntesis() al final de la expresión de la función hacen que se ejecute o invoque de forma inmediata.Este patrón se conoce como una expresión de función inmediatamente invocada o IIFE(por sus siglas en inglés).
}




// === Desafio === 

// Crea un módulo llamado funModule para envolver los dos mixins isCuteMixin y singMixin. funModule debe devolver un objeto.

{

    //Modifica este codigo

    let isCuteMixin = function (obj) {
        obj.isCute = function () {
            return true;
        }
    };

    let singMixin = function (obj) {
        obj.sing = function () {
            console.log("Singing to an awesome tune");
        };

    };
}

{

    // === Solucion ===

    let funModule = (function () {
        return {
            isCuteMixin: function (obj) {
                obj.isCute = function () {
                    return true;
                };
            },

            singMixin: function (obj) {
                obj.sing = function () {
                    return true;
                }
            }
        }



    })()
}


