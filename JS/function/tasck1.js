'use strict';

let firstParameter = prompt('Enter the first number or string') || ' ';
let secondParameter = prompt('Enter the second number or string') || ' ';
let thirdParameter = prompt('Enter the third number or string') || ' ';

let sumNumber = +firstParameter + +secondParameter + +thirdParameter

let sumString = firstParameter + ' ' + secondParameter + ' ' + thirdParameter

function sumParameter(firstParameter, secondParameter, thirdParameter) {

    if (sumNumber === +sumNumber)
        return (sumNumber);
    return (sumString);
};

console.log(sumParameter(firstParameter, secondParameter, thirdParameter));