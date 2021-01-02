'use strict';

function involution(firstNumber, secondNumber = 2) {
    if (firstNumber && secondNumber)
        return (Math.pow(firstNumber, secondNumber));
};

console.log(involution(5, 3));
