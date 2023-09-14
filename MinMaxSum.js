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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let min=0;
    let max=0;
    let acum=0;
    let sumMax;
    let sumMin;
    for(let i=0;i<arr.length;i++){
        if(i==0){
            min=arr[i];
        }
        if(arr[i]>=max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        acum=acum+arr[i];
    }
    
    sumMax=acum-min;
    sumMin=acum-max;
    console.log(sumMin,sumMax);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}