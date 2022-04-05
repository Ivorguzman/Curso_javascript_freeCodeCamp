
{
    // ==Explicacion ===

    // Una función constructor que hereda su objeto prototype de una función constructor "supertype" puede seguir teniendo sus propios métodos además de los heredados.

    // Por ejemplo, Bird es un constructor que hereda su prototype de Animal:


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

    function Bird() { };
    Bird.prototype = Object.create(Animal.prototype);

    // Además de lo que se hereda de Animal, se quiere añadir un comportamiento que sea exclusivo de los objetos Bird. Aquí, Bird obtendrá una función fly(). Las funciones se añaden al prototype de Bird's del mismo modo que cualquier función constructor:

    Bird.prototype.fly = function () {
        console.log(" ¡I'm flying !");
    }

    // Ahora las instancias de Bird tendrán métodos tanto eat() como fly():

    // let duck = new Bird();
    // duck.tipo = "Donald";
    // console.log(duck.tipo)
    // duck.eat();
    // duck.color();
}



{
    // === Desafio ===

    // Añade el código necesario para que el objeto Dog herede de Animal y el constructor prototype de Dog sea establecido en Dog. A continuación agrega el método bark() al objeto Dog, para que beagle pueda "comer" eat() y "ladrar" bark(). El método bark() debe imprimir Woof! por consola.
    Animal.prototype.eat = function () { console.log("nom nom nom"); };

    function Dog() { }

    // Cambia solo el código debajo de esta línea




    // Cambia solo el código encima de esta línea

    let beagle = new Dog();


}
{
    // === solucion ===

    // Añade el código necesario para que el objeto Dog herede de Animal y el constructor prototype de Dog sea establecido en Dog. A continuación agrega el método bark() al objeto Dog, para que beagle pueda "comer" eat() y "ladrar" bark(). El método bark() debe imprimir Woof! por consola.

    function Animal() { }
    Animal.prototype.eat = function () {
        console.log("nom nom nom");
    };

    function Dog() { };

    // Cambia solo el código debajo de esta línea
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.bark = function () {
        console.log("Woof!");
    }



    // Cambia solo el código encima de esta línea


    let beagle = new Dog()

    beagle.eat();
    beagle.bark();

    console.log(beagle instanceof Dog)

    // ===Ojo===
    // SE RASIGNO EL CONTRUCTOR DE ANIMAL(){} A DOG (){}
    // console.log(beagle.constructor)
    Dog.prototype.constructor = Dog;

    console.log(beagle.constructor)


}