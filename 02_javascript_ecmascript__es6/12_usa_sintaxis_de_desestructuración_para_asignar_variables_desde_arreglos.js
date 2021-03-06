{
    // ES6 hace que desestructurar arreglos sea tan f谩cil como desestructurar objetos.

    /*馃憠Una diferencia clave entre el operador de propagaci贸n y la desestructuraci贸n de arreglos es que el operador de propagaci贸n desempaca todos los contenidos de un arreglo en una lista separada por comas. En consecuencia, no puedes elegir qu茅 elementos deseas asignar como variables.馃憟*/

    // Desestructurar un arreglo nos permite hacer exactamente eso:

    {
        const [a, b] = [1, 2, 3, 4, 5, 6];
        console.log(a, b);
    }
    // La consola muestra los valores de ay bcomo 1, 2.

    // A la variable ase le asigna el primer valor del arreglo, ya bse le asigna el segundo valor del arreglo. Tambi茅n podemos acceder al valor en cualquier 铆ndice de un arreglo con la desestructuraci贸n usando comas para alcanzar el 铆ndice deseado:
    {
        const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
        console.log(a, b, c);
    }
    // La consola muestra los valores de a, b, y ccomo 1, 2, 5.
}
{
    // Utilice la sintaxis de desestructuraci贸n para intercambiar los valores de ay bpara que areciba el valor almacenado en b, y breciba el valor almacenado en a.

    let a = 8, b = 6;
    // Cambia solo el c贸digo debajo de esta l铆nea

}

{
    // === Solucion 1  ineficas===
    {
        // Utilice la sintaxis de desestructuraci贸n para intercambiar los valores de  ay b para que areciba el valor almacenado en b, y breciba el valor almacenado en a.

        let a = 8, b = 6;
        // Cambia solo el c贸digo debajo de esta l铆nea
        [, , , , , a, , b] = [1, 2, 3, 4, 5, 6, 7, 8]
        console.log(a)
        console.log(b)
    }
}


{

    // === Solucion 2 correcta ===
    {


        let a = 8, b = 6;
        
        // Cambia solo el c贸digo debajo de esta l铆nea
        [a, b] = [b, a];
        console.log(a)
        console.log(b)
        

    }
}

