
{
    // === Explicacion ===

    // 1.  En lecciones anteriores, aprendiste que un objeto puede heredar su comportamiento (métodos) de otro objeto al referenciar su prototype:
    /*👉ObjetoHijo.prototype = Object.create(ObjetoPadre.prototype);👈*/
    // 2. Luego, el ObjetoHijo recibió sus propios métodos (nombreDelMetodo) al encadenarlos a su prototype:
    /*👉ObjetoHijo.prototype.nombreDelMetodo = function () { return "???"; };👈*/

    // Es posible sobreescribir un método heredado. Se hace de la misma manera: agregando un método a ObjetoHijo.prototype usando el mismo nombre de método que el que se va a sobrescribir. Aquí hay un ejemplo de Bird sobrescribiendo el método eat() heredado de Animal:

    function Animal() { }
    Animal.prototype.eat = function () {
        return "nom nom nom";
    };
    function Bird() { }

    Bird.prototype = Object.create(Animal.prototype);

    Bird.prototype.eat = function () {
        return "peck peck peck";
    };

    // 1. duck => ¿Está eat() definido aquí? No.(fue heredado)
    // 2. Bird => ¿Está eat() definido aquí? => Sí. 
    // 3. Animal => ¿Está eat() definido aquí? => Sí. 

}


{


    // === Desafio ===

    // Sobrescribe el método fly() para Penguin de manera que devuelva la cadena de texto Alas, this is a flightless bird.


    function Bird() { }

    Bird.prototype.fly = function() { return "I am flying!"; };
    
    function Penguin() { }
    Penguin.prototype = Object.create(Bird.prototype);
    Penguin.prototype.constructor = Penguin;
    
    // Cambia solo el código debajo de esta línea
    
    
    
    // Cambia solo el código encima de esta línea
    
    let penguin = new Penguin();
    console.log(penguin.fly());
}
{


    // === Solucion ===

    // Sobrescribe el método fly() para Penguin de manera que devuelva la cadena de texto Alas, this is a flightless bird.


    function Bird() { }

    Bird.prototype.fly = function () { return "I am flying!"; };

    function Penguin() { }
    Penguin.prototype = Object.create(Bird.prototype);

    // Cambia solo el código debajo de esta línea

    Penguin.prototype.fly = function () { return "Alas, this is a flightless bird."; };

    // Cambia solo el código encima de esta línea

    let penguin = new Penguin();

    console.log(penguin.constructor)
    Penguin.prototype.constructor = Penguin;
    console.log(penguin.constructor)

    console.log(penguin.fly());
}