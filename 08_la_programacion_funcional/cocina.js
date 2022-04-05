/*👉 const productosConDescuentos = productos.map(({ precio }) => { //!  ==> Desarmar el parametro👈*/

const productos = [
    {
        nombre: "Camiseta",
        precio: 500
    },
    {
        nombre: " Zapatillas",
        precio: 2000
    },
    {
        nombre: "Pantalón",
        precio: 1000
    }
];

//   const productosConDescuentos = productos.map((producto) => {
//           if (producto.precio < 1000)return producto;



//           return {
//               ...producto,
//               precio: producto.precio * 0.10
//           };


//       });
const productosConDescuentos = productos.map((producto) => {
    if (producto.precio < 1000) return producto; //! nos sacamos de ensima el caso que no interesa (Retorno temprano)

    // producto.precio = producto.precio * 0.9; //! ERROR: se modifica el array original

    // return {
    //     ...producto,
    //     precio: producto.precio * 0.9,
    // }


    // return {
    //     ...producto,
    //     precio: producto.precio * 0.9,
    // };


    return {
        ...producto,
        precio: producto.precio * 0.9
    };


});



        // console.log(productos);
        // console.log(productosConDescuentos);


