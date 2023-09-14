'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let conPositive=0;
    let conNegative=0;
    let conCero=0;
    let ratio01;
    let ratio02;
    let ratio03;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==0){
            conCero++;
        }
        else if(arr[i]<0)
        {
            conNegative++;
        }
        else{
            conPositive++
        }
    }
    ratio01=conPositive/arr.length;
    ratio02=conNegative/arr.length;
    ratio03=conCero/arr.length;
    console.log(ratio01.toFixed(6));
    console.log(ratio02.toFixed(6));
    console.log(ratio03.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
