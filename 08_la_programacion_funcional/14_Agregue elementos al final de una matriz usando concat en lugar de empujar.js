{

    /*馃憠=== Explicacion ===馃憟*/

    // Agregue elementos al final de una matriz usando concat en lugar de empujar
    // La programaci贸n funcional tiene que ver con la creaci贸n y el uso de funciones que no mutan.

    // El 煤ltimo desaf铆o introdujo el concatm茅todo como una forma de combinar arreglos en uno nuevo sin mutar los arreglos originales. Comparar concatcon el pushm茅todo. pushagrega un elemento al final de la misma matriz en la que se llama, lo que muta esa matriz. Aqu铆 hay un ejemplo:

    const arr = [1, 2, 3];
    arr.push([4, 5, 6]);

    // arrtendr铆a un valor modificado de [1, 2, 3, [4, 5, 6]], que no es la forma de programaci贸n funcional.

    // concatofrece una forma de agregar nuevos elementos al final de una matriz sin ning煤n efecto secundario mutante.

}

{
    /*馃憠=== Desafio ===馃憟*/
    // Cambie la   funci贸n nonMutatingPush para que se use concat para agregar newItemal final de original en lugar de push. La funci贸n debe devolver una matriz.
    const original = [1, 2, 3];
    const newItem = [4, 5, 6];

    function nonMutatingPush(original, newItem) {
        // Only change code below this line
        /*馃憠return original.push(newItem);馃憟*/


        // Only change code above this line
    }

    const first = [1, 2, 3];
    const second = [4, 5];
    nonMutatingPush(first, second);
}

{
    /*馃憠=== Solucion ===馃憟*/
    // Cambie la   funci贸n nonMutatingPush para que se use concat para agregar newItem al final de original en lugar de push. La funci贸n debe devolver una matriz.
    const original = [1, 2, 3];
    const newItem = [4, 5, 6];

    function nonMutatingPush(original, newItem) {
        // Only change code below this line
        /*馃憠return original.push(newItem);馃憟*/
        return original.concat(newItem)

        // Only change code above this line
    }

    const first = [1, 2, 3];
    const second = [4, 5];
    nonMutatingPush(first, second);
}
