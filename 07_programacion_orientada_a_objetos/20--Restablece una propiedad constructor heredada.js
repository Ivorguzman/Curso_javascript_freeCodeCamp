
{
    // Cuando un objeto hereda el prototype de otro objeto, también hereda la propiedad del constructor del supertipo.

    // Por ejemplo:

    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("Guao Guao Guao");
        }
    };
    function Bird() { }
    Bird.prototype = Object.create(Animal.prototype);
    let duck = new Bird();
    console.log(duck.constructor);
    // Pero duck y todas las instancias de Bird deberían mostrar que fueron construidas por Bird y no Animal. Para ello, puedes establecer manualmente la propiedad del constructor de Bird al objeto Bird:


    console.log(duck instanceof Bird);

    // El método {Object.getPrototypeOf()} devuelve el prototipo (es decir, el valor de la [[Prototype]]propiedad interna ) del objeto especificado.

    Bird.prototype.constructor = Bird;
    duck.constructor
    console.log(duck.constructor);
}

{
    // === Desafio ===

    // Corrige el código para que duck.constructor y beagle.constructor devuelvan sus constructores respectivos.


    function Animal() { }
    function Bird() { }
    function Dog() { }
    
    Bird.prototype = Object.create(Animal.prototype);
    Dog.prototype = Object.create(Animal.prototype);
    
    // Cambia solo el código debajo de esta línea
    
    
    
    let duck = new Bird();
    let beagle = new Dog();



}
{
    // === solucion ===

    // Corrige el código para que duck.constructor y beagle.constructor devuelvan sus constructores respectivos.

    function Animal() { }
    function Bird() { }
    function Dog() { }

    Bird.prototype = Object.create(Animal.prototype);
    Dog.prototype = Object.create(Animal.prototype);

    // Cambia solo el código debajo de esta línea



    let duck = new Bird();
    Bird.prototype.constructor = Bird;

    let beagle = new Dog();
    Dog.prototype.constructor = Dog;

    console.log(Object.getPrototypeOf(duck));
    console.log(Object.getPrototypeOf(beagle));



}