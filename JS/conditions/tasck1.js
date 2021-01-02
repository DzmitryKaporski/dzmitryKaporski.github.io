'use strict';

alert(` 1. При помощи модального окна prompt выведите в консоль или через alert введенный в окно текст.
Примерный алгоритм
- введите текст (prompt);
- {введенный текст} (alert);`);

let yourName = prompt('Your name?', '');
console.log('Hello ' + yourName + '!');
alert('Hello ' + yourName + '!');