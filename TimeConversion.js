'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    //solucion semana 10 dia miercoles
    let arrTemp=s.split(':');
    let temp=arrTemp[2];
    let tiempo=temp[2]+temp[3];
    let concat;
    let segundos=temp[0]+temp[1];
    if(tiempo=='PM'){
        arrTemp[0]=Number(arrTemp[0])+12;
    }
    concat=arrTemp[0]+':'+arrTemp[1]+':'+segundos;
    return concat;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();
    const result = timeConversion(s);
    console.log(result); 

    ws.write(result + '\n');

    ws.end();
}
