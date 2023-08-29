function generarGrillas(filas,columnas,items){
    const grilla = []
    for(let i = 0; i<filas; i++){
        const fila = []
        for(let j = 0; j<columnas; j++){
            const indiceAleatorio= Math.floor(Math.random()*items.length)
            fila.push(items[indiceAleatorio])
        }
        grilla.push(fila)
    }
    return grilla;
}

const grilla1 = generarGrillas(2,3,[1,2])
const grilla2 = generarGrillas(3,3,['a','b','c'])
console.log(grilla1)
console.log(grilla2)