
// function obtenerCantidad(item, items) {
//     let contador = 0;
//     for (let i = 0; i < items.length; i++) {
//         for (let j = 0; j < items[i].length; j++) {
//             if (item === items[i][j]) { 
//                 contador = contador + 1;
//             }
//         }
//     }
//     return contador;
// }

// console.log(obtenerCantidad(1, [[2, 1, 1], [3, 4, 67, 8], [1, 2, 3], [1, 1, 1]]));


function obtenerCantidad(item, items) {
    const array = items.flat();
    const busqueda = array.filter(e => e === item).length;
    return busqueda
}

let items = [
    [2, 1, 1], 
    [3, 4, 67, 8], 
    [1, 1, 3], 
    [1, 1, 1]
]

console.log(obtenerCantidad(1, items));
