// function convertirEnMatriz(columnas,array){
//     const matriz = [];

//     for(let i = 0; i<array.length; i++){
//         const fila = array.slice(i, i + columnas)
//         matriz.push(fila)
//     }
//     return matriz
// }

// console.log(convertirEnMatriz(2,[1,2,3,4,5,6,7,8]))


function convertirEnMatriz(columnas, array) {
    const matriz = [];

    for (let i = 0; i < array.length; i += columnas) {
        const fila = array.slice(i, i + columnas);
        if (fila.length === columnas) {
            matriz.push(fila);
        }
    }
    
    return matriz;
}

console.log(convertirEnMatriz(2, [1, 2, 3, 4, 5, 6, 7, 8]));