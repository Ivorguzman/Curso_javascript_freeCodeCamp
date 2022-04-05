
{

  // Puedes obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

  // Estas operaciones clásicamente se llaman getters y setters.

  // Las funciones getter están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

  // Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto basado en el valor pasado a la función setter. Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior.

  class Book {
    constructor(author) {
      this._author = author;
    }
    // getter ==> Obtener ===> debuelve el valor de un Atributo  y lo retorna
    get writer() {
      return this._author;
    }
    // setter ==> establecer  ===>  establece un nuevo valor a un atributo
    set writer(updatedAuthor) {
      if (updatedAuthor != null) {
        this._author = updatedAuthor;
      }

    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor|';
  console.log(novel.writer);
  novel.writer = 'Alex'
  console.log(novel.writer)

  // La consola mostrará las cadenas anonymous y newAuthor.

  // Ten en cuenta la sintaxis usada para invocar el getter y el setter. Ni siquiera se ven como funciones. Los getter y los setter son importantes porque ocultan los detalles internos de la implementación.

  // Nota: Es convención preceder el nombre de una variable privada con un guión bajo (_). Sin embargo, la práctica en sí misma no hace una variable privada.
}


{
  // === Desafio ===

  // Utiliza la palabra clave class para crear una clase Thermostat. El constructor acepta una temperatura Fahrenheit.

  // En la clase, crea un getter para obtener la temperatura en Celsius y un setter para ajustar la temperatura en Celsius.

  // Recuerda que C = 5/9 * (F - 32) y F = C * 9.0 / 5 + 32 donde F es el valor de la temperatura en Fahrenheit y C es el valor de la misma temperatura en Celsius.

  // Nota: Cuando implementes esto, rastrearás la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius.

  // Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

  // En otras palabras, estás abstrayendo los detalles de la implementación del usuario.
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea

  /*👉const thermos = new Thermostat(76); // Ajuste en escala Farenheit
  let temp = thermos.temperature; // 24.44 en Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 en Celsius👈*/
}

{
  // === Solucion  ===

  // Utiliza la palabra clave class para crear una clase Thermostat. El constructor acepta una temperatura Fahrenheit.

  // En la clase, crea un getter para obtener la temperatura en Celsius y un setter para ajustar la temperatura en Celsius.

  // Recuerda que C = 5/9 * (F - 32) y F = C * 9.0 / 5 + 32 donde F es el valor de la temperatura en Fahrenheit y C es el valor de la misma temperatura en Celsius.

  // Nota: Cuando implementes esto, rastrearás la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius.

  // Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

  // En otras palabras, estás abstrayendo los detalles de la implementación del usuario.
  // Cambia solo el código debajo de esta línea

  class Thermostat {
    constructor(temp) {
      this._temp = temp
    }
    // getter ==> Obtener ===> debuelve el valor de un Atributo  
    get temperature() {
      console.log(this._temp );
      return 5 / 9 * (this._temp - 32)
    }
    // setter ==> establecer  ===>  establece un nuevo valor a un atributo
    set temperature(c) {
      console.log(c);
      console.log(this._temp );
      this._temp = (c * 9.0) / 5 + 32
      console.log(this._temp );
    }
  }

  // Cambia solo el código encima de esta línea

  const thermos = new Thermostat(76); // Ajuste en escala Farenheit
  temp = thermos.temperature; // 24.44 en Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 en Celsius 

}