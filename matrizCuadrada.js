function matrizCuadrada(matriz){
    const filas = matriz.length;

    for(let i = 0; i<filas; i++){
        if(matriz[i].length !== filas){
            return false
        }
    }
    return true
}


const matriz = [
    [2,7,12,1],
    [8,23],
    [9,45,7],
    [22,3,54,20]
    // false
]

const matrizCuadradi= [
    [4,5,9],
    [2,7,1],
    [8,10,5]
    // true
]

console.log(matrizCuadrada(matrizCuadradi))