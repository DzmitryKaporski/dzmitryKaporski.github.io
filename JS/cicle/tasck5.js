'use strict'

function cycles() {
    alert(`I. Создайте программу, которая выводит в консоль числа по нарастающей в диапазоне,
    обозначенном пользователем при помощи 'prompt'.
    Примерный алгоритм
    1. Введите первое число диапазона
    2. Введите второе число диапазона
    3. Вывод чисел в консоль
    В случае, если диапазон чисел включает в себя менее пяти значений, у пользователя
    повторно запрашиваются корректные данные.
    В случае, если первое число диапазона больше второго, вывод чисел должен идти в
    обратном порядке, т.е. от большего к меньшему.`);

    let firstNumber = +prompt('Enter the first number');
    let secondNumber = +prompt('Enter the second number');

    let maxNumber = (firstNumber < secondNumber) ? secondNumber - firstNumber : firstNumber - secondNumber;

    if (maxNumber > 5) {
        while (firstNumber < secondNumber) {
            console.log(firstNumber++);
        }
        while (firstNumber > secondNumber) {
            console.log(firstNumber--);
        }
    } else {
        alert('Range of numbers includes at least five values');
        cycles();
    };
};

cycles();