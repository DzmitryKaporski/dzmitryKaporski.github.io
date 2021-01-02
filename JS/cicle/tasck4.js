'use strict';

alert(`4. При помощи конструкции switch-case напишите программу, которая выводит на экран
введенные цифры от 0 до 9 в текстовом виде.
Пример: 0 -> 'ноль', 1 -> 'один', 2 -> 'два' и т.д.
В случае, если введенная цифра превысила 10, программа должна уведомлять об этом
пользователя соответствующим сообщением.
Случай, когда пользователь ввел некорректное значение, которое невозможно
преобразовать к числу, также должен обрабатываться. Для такой проверки можно
использовать функцию isNaN(value) - которая возвращает false для числовых значений и
true для прочих.`);

let number = prompt('Введите число от 0 до 9')
if (isNaN(number)) {
    console.log('Введите числовое значение!')
} else {
    switch (number) {
        case '0':
            console.log('Ноль');
            break;
        case '1':
            console.log('Один');
            break;
        case '2':
            console.log('два');
            break;
        case '3':
            console.log('Три');
            break;
        case '4':
            console.log('Четыре');
            break;
        case '5':
            console.log('Пять');
            break;
        case '6':
            console.log('Шесть');
            break;
        case '7':
            console.log('Семь');
            break;
        case '8':
            console.log('Восемь');
            break;
        case '9':
            console.log('Девять');
            break;
        default:
            console.log('Значение не соответствует числовому диапазону от 0 до 9');
    }
};