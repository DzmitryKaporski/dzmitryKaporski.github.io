'use strict'

alert(`III. Создайте программу, которая выводит на экран (alert, console.log) данные для чисел
произвольного диапазона (можно установить его самостоятельно) по аналогии с задачей
2 предыдущего домашнего задания (больше 100, четное/нечетное,
положительное/отрицательное).`);

let num = +prompt('Enter the first number');
let numSecond = +prompt('Enter the second number');

while (num <= numSecond) {
    valueNumber()
    num++;
};

while (num > numSecond) {
    valueNumber()
    num--;
};

function valueNumber() {
    let resultFractionalNofractional = (num % 1 == 0) ? ' недробное, ' : 'дробное,';
    let resultEvenOld = (num % 2 == 0) ? ' чётное, ' : ' нечётное, ';
    let resultPlusMinus = (num > 0) ? ' положительное, ' : (num < 0) ? ' отрицательное,' : ' равно нулю,';
    let resultMoreLess = (num < 100) ? ' меньше 100! ' : (num > 100) ? ' больше 100! ' : ' равно 100! ';
    console.log(num + resultPlusMinus + resultEvenOld + resultFractionalNofractional +
        resultMoreLess);
};