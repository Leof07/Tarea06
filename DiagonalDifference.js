/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    //Recorrer matriz
    let sumatoriaUno=0;
    let sumatoriaDos=0;
    let valor;
    for(let i=0;i<arr.length;i++){
        sumatoriaUno=sumatoriaUno+arr[i][i];
        sumatoriaDos=sumatoriaDos+arr[i][arr.length-i-1];
    }
    return Math.abs(sumatoriaUno-sumatoriaDos);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
