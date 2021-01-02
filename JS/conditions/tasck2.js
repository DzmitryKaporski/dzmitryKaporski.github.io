'use strict';

alert(`2. Написать программу, которая при помощи окон prompt позволит ввести и сложить три числа.
Примерный алгоритм
- введите первое число (prompt);
- введите второе число (prompt);
- сумма = {сумма чисел} (alert);
Итоговую сумму вывести в консоль или через alert.`);

let firstNumber = +prompt('firstNumber', 22);
let secondNumber = +prompt('secondNumber', 33);
let thirdNumber = +prompt('thirdNumber', 45);
alert(firstNumber + secondNumber + thirdNumber);
console.log(firstNumber + secondNumber + thirdNumber);