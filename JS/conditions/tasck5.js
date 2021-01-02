'use stript';

alert(` 5. Написать программу, которая производит одну из четырех арифметических операций
с двумя числами по выбору пользователя.
Выбор нужной арифметической операции напрямую подскажите пользователю в тексте
окна.
Примерный алгоритм:
- введите первое число (prompt);
- введите второе число (prompt);
- выберите нужную арифметическую операцию (div, plus, mult, minus) (prompt);
- вывести итоговый результат в консоль / alert.
Примечания:
1. Помните, что prompt возвращает введенные данные в виде строки.
2. Самые важные переменные лучше всего объявить в начале скрипта
3. Вторым параметром в prompt можно указать текст по умолчанию.`);

let numberFirst = +prompt('Введите первое число', '7');
let numberSecond = +prompt('Введите второе число', '2');
let arithmeticOperation = prompt('Bыберите нужную арифметическую операцию', 'div, plus, mult, minus');
if (arithmeticOperation == 'mult') {
    let question = prompt('What do you think, how many will turn out?');
    mult = (numberFirst * numberSecond);
    alert(mult);
}
if (arithmeticOperation == 'div') {
    let question = prompt('What do you think, how many will turn out?');
    div = (numberFirst / numberSecond);
    alert(div);
}
if (arithmeticOperation == 'plus') {
    let question = prompt('What do you think, how many will turn out?');
    plus = (numberFirst + numberSecond);
    alert(plus);
}
if (arithmeticOperation == 'minus') {
    let question = prompt('What do you think, how many will turn out?');
    minus = (numberFirst - numberSecond);
    alert(minus);
};