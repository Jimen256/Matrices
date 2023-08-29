// que sume 2 matrices y almacenarlos en otra matriz
function sumarMatrices (matriz1,matriz2){
    let n = matriz1.length;
    let resultado = [];
    for(let i = 0; i < n; i++){
        resultado[i] = [];
        for(let j = 0; j < n; j++){
            resultado[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }
    return resultado
}
let matriz = [[1,0,0],[0,2,0],[0,0,3]]
let matriz2 = [[1,2,2],[0,2,0],[0,0,3]]
console.log(sumarMatrices(matriz,matriz2))


// function suma (array){
//     const resultadoA = array.reduce((accumulator, currentNumber) => {
//         return accumulator + currentNumber
//       }, 0)
//       console.log(resultadoA)
//   }


//   suma([2,2,2,1,3])