{
  // ES6 proporciona una nueva sintaxis para crear objetos, usando la palabra clave class.

  // Debemos notar que la sintaxis class es s贸lo sintaxis, y no una implementaci贸n completa basada en clases de un paradigma orientado a objetos, a diferencia de lenguajes como Java, Python, Ruby, etc.

  // En ES5, normalmente definimos una funci贸n constructor y usamos la palabra clave new para instanciar un objeto.

  {
    /*馃憠 funci贸n constructor馃憟*/
    var SpaceShuttle = function (targetPlanet) {
      this.targetPlanet = targetPlanet;
    };
    /*馃憠 instanciar un objeto.馃憟*/
    var zeus = new SpaceShuttle();
    zeus.targetPlanet = 'Jupiter';//asignar un valor a una propiedad de un objeto  (targetPlanet)
  }
  /*馃憠  La sintaxis class simplemente reemplaza la creaci贸n de la funci贸n constructor:馃憟*/

  {
    /*馃憠 sintaxis class 馃憟*/
    class SpaceShuttle {
      constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
      }
    }
    const zeus = new SpaceShuttle();
    zeus.targetPlanet = 'Jupiter';//asignar un valor a una propiedad de un objeto  (targetPlanet)
    console.log(zeus);


  }
  // Debe tenerse en cuenta que la  palabra " clave === class === declara una nueva funci贸n === ", ==>  a la cual"se a帽ade un ===constructor===". Este constructor se invoca cuando new es llamado para crear un nuevo objeto.

  // Nota: ==> "UpperCamelCase"debe ser utilizado por convenci贸n para nombres de clase en ES6, como SpaceShuttle fue usado arriba.

  // "=== El m茅todo constructor es un m茅todo especial para crear e inicializar un objeto creado con una clase ===". Aprender谩s m谩s sobre ello en la secci贸n de Programaci贸n Orientada a Objetos de la Certificaci贸n en Algoritmos de JavaScript y Estructuras de Datos.

}

{
  // === Desafio === 

  // Usa la palabra clave class y escribe un constructor para crear la clase Vegetable.

  // La clase Vegetable te permite crear un objeto vegetal con una propiedad name que es pasada al constructor.

  // Cambia solo el c贸digo debajo de esta l铆nea

  // Cambia solo el c贸digo encima de esta l铆nea

  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Deber铆a mostrar 'carrot'
}
{
  // === Solucion === 

  // Usa la palabra clave class y escribe un constructor para crear la clase Vegetable.

  // La clase Vegetable te permite crear un objeto vegetal con una propiedad name que es pasada al constructor.

  // Cambia solo el c贸digo debajo de esta l铆nea
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  };
  let carrot = new Vegetable();

  carrot.name = 'carrot';
  console.log(carrot.name);
}