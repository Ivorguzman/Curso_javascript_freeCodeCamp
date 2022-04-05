
/*👉     
        {
            === EXPLICACION ===

            // Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. OjO ==> ¡Elimina la propiedad constructor! Esta propiedad puede ser usada para verificar cuál función de constructor creó la instancia. Sin embargo, dado que la propiedad ha sido sobrescrita, ahora devuelve resultados falsos:
 
            function Bird(name, color) {
                this.name = name;
                this.color = color;
            }
 
            Bird.prototype = {//¡Elimina la propiedad constructor en forma auomatica!
                numLegs: 2,
                eat: function () {
                    console.log("nom nom nom");
                },
                describe: function () {
                    console.log("My name is " + this.name);
                }
            };
 
            let duck = new Bird();
            duck.name = "lucas";
            console.log(duck.describe());
            console.log(duck.constructor === Bird); //false
            console.log(duck.constructor === Object); //true
 
            console.log(duck instanceof Bird); // true
 
            // Para solucionar esto, cada vez que un prototipo se establece de forma manual a un nuevo objeto, recuerda definir la propiedad constructor:
 
            Bird.prototype = {
                constructor: Bird, // agregando la propiedad constructor
                numLegs: 2,
                eat: function () {
                    console.log("nom nom nom");
                },
                describe: function () {
                    console.log("My name is " + this.name);
                }
            };
        }
👈*/





{

    // ===DESSAFIO  ===

    // Define la propiedad constructor en el Dog prototype.

    function Dog(name) {
        this.name = name;
    }

    // Cambia solo el código debajo de esta línea
    Dog.prototype = {

        numLegs: 4,
        eat: function () {
            console.log("nom nom nom");
        },
        describe: function () {
            console.log("My name is " + this.name);
        }
    };

}

{

    // === SOLUCION===
    // Definir la propiedad constructor en el Dog prototype. 

    // NOTA:  OjO  cuando  se modifica por medio de un Objeto{}, el prototype, se elimina el constructor.

    function Dog(name) {
        this.name = name;
    }

    Dog.prototype = { // Modificando propiesdad prototype
        constructor: Dog,
        numLegs: 2,
        eat: function () {
            console.log("Yo como Rica Perrarina nom,nom,nom")
        },
        describe: function () {
            // console.log("Mi nombre es " + this.name)
            console.log(`Mi nombre es ${this.name}`)
        }
    }
    // NOTA:  OjO  cuando  se modifica por medio de un Objeto{}, el prototype, se elimina el constructor.
}
let labrador = new Dog(); // Creando Instancia de objeto Dog (labrador)
labrador.name = "ortencia";// asignandole {proiedad: valor} a la instancia (labrador)
console.log(labrador.eat()); // Invocando el metodo eat() del objeto. 
console.log(labrador.describe()); // Invocando el metodo eat() del objeto. 

console.log(labrador.constructor === Dog); // true
console.log(labrador instanceof Dog); // true
console.log(labrador.constructor === Bird); // false
console.log(labrador instanceof Bird); // false
