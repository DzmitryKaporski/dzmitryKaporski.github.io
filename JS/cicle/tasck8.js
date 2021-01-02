'use strict';

alert(` IV. Создайте цикл, который при любом диапазоне перебираемых в нем чисел,
прерывался бы на седьмой итерации.`);

let numberFirst = prompt('Enter the first number');
let numberSecond = prompt('Enter the second number');
let numberOfIterations = 0;

while (numberFirst < numberSecond && numberOfIterations < 7) {
    console.log(numberFirst++);
    numberOfIterations++;
};

while (numberFirst > numberSecond && numberOfIterations < 7) {
    console.log(numberFirst--);
    numberOfIterations++;
};
