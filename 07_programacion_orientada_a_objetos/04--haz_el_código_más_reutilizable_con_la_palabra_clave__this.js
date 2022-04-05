
// === EXPLICACION ===
{

    // El último desafío introdujo un método al objeto duck. Usó la notación de puntos duck.name para acceder al valor de la propiedad name dentro de la declaración de retorno:
    {
        console.log("=== BLOQUE 1 ===")
        let duck = {
            name: "Aflac",
            numLegs: 2,
            sayName: function () { return "The name of this duck is " + duck.name + "."; }
        };
        console.log(duck.sayName())
    }
    // Aunque esta es una forma válida de acceder a la propiedad del objeto, existe un problema. Si el nombre de la variable cambia, cualquier código que haga referencia al nombre original también tendría que ser actualizado. En una definición breve de un objeto, esto no es un problema, pero si un objeto tiene muchas referencias a sus propiedades hay una mayor probabilidad de error.
}
console.log(" ")
{
    console.log("=== BLOQUE 2 ===")
    let duck = {
        name: "Aflac",
        numLegs: 2,
        sayName: function () {
            console.log("La propiedad nombre del objeto duck tiene el valor de ==> " + this.name + ".");
            console.log("Valor de (this) dentro del objeto duck es:");
            console.log(this);// contesto  dentro del objeto duck
        }
    };
    console.log(duck.sayName());
    console.log("Valor de (this) fuera del objeto duck es:");
    console.log(this); // contrsto global
    console.log(window);
}
// this es un tema profundo, y el ejemplo anterior es sólo una forma de usarlo. En el contexto actual, this se refiere al objeto con el que el método está asociado al objeto (duck). Si el nombre del objeto se cambia a mallard, no es necesario encontrar todas las referencias a duck en el código. Hace que el código sea reutilizable y mas fácil de leer.


{
    //  === DESAFIO ===
    // Modifica el método dog.sayLegs para eliminar cualquier referencia a dog. Utiliza el ejemplo de duck como orientación.


    let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function () { return "This dog has " + dog.numLegs + " legs."; }
    };
}


{
    //  === SOLUCION ===

    // Modifica el método dog.sayLegs para eliminar cualquier referencia a dog. Utiliza el ejemplo de duck como orientación.

    {
        let dog = {
            name: "Spot",
            numLegs: 4,
            sayLegs: function () { return "This dog has " + dog.numLegs + " legs."; }
        };
    }

    {
        let dog = {
            name: "Spot",
            numLegs: 4,
            sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
        };
    }
}


