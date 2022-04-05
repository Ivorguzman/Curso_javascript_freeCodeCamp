{
    //* Establece el prototipo de hijo para una instancia del padre

// En el desafío anterior, viste el primer paso para heredar el comportamiento del supertipo (o padre) Animal: creando una nueva instancia de Animal.

// Este desafío cubre el siguiente paso: establecer el prototipo prototype del subtipo (o hijo) —en este caso, Bird— para ser una instancia de Animal.

Bird.prototype = Object.create(Animal.prototype);
// Recuerda que el prototipo prototype es como la "receta" para crear un objeto. En cierto modo, la receta de Bird ahora incluye todos los "ingredientes" clave de Animal.

let duck = new Bird("Donald");
duck.eat();
// duck hereda todas las propiedades de Animal, incluyendo el método eat.


}




{
    // == Desafio ===
    // Modifica el código para que las instancias de Dog hereden de Animal.

    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("nom nom nom");
        }
    };

    function Dog() { }

    // Cambia solo el código debajo de esta línea


    let beagle = new Dog();


}
{
    // == solucion ===
    // Modifica el código para que las instancias de Dog hereden de Animal.

    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("Guao Guao Guao");
        }
    };

    function Dog() { }

    // Cambia solo el código debajo de esta línea


    Dog.prototype = Object.create(Animal.prototype)

    let beagle = new Dog();

    beagle.eat();


}

{

    // { ===Mis Practicas===

    function Animal(tipo) {
        this.tipo = tipo
    };

    Animal.prototype = {
        eat: function () {
            console.log("nom nom nom")
        },
        color: function () {
            console.log("Blanco")
        }

    }


    function Bird(name) {
        this.name = name;
    }

    Bird.prototype = Object.create(Animal.prototype);


    // Recuerda que el prototipo prototype es como la "receta" para crear un objeto. En cierto modo, la receta de Bird ahora incluye todos los "ingredientes" clave de Animal.

    let duck = new Bird("Donald");

    console.log(duck.name);
    duck.tipo = "Pato";
    console.log(duck.tipo);
    duck.color();
    duck.eat();

    // duck hereda todas las propiedades de Animal, incluyendo el método eat(),color() sumandosels a las propiedades directas que tenga (name)
}

.
