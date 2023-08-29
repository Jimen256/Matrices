function obtenerFilaMasLarga(matriz){
    let filaLarga = matriz[0]

    for(let i = 0; i < matriz.length; i++){
        if(matriz[i].length>filaLarga.length){
            filaLarga = matriz[i]
        }
    }
    return filaLarga
}

const mat1 = [
    [1,4],
    [2,7,5],
    [1]
]

const mat2 = [
    [1,4],
    [2,7,5],
    [1],
    [1,2,3,4,5,6]
]

console.log(obtenerFilaMasLarga(mat2))