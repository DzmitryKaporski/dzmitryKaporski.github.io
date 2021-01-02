'use strict';

alert(`3. Напишите программу, которая:
- запрашивает имя пользователя (prompt);
- запрашивает возраcт пользователя (prompt);
- если возраст пользователя больше либо равен 18 выводит сообщение в духе "Добро
пожаловать {имя пользователя}" (alert);
- если возраст пользователя меньше 18 выводит сообщение в духе "Простите, {имя
пользователя}, доступ закрыт".`);

let name = prompt('Your name', '');
let age = prompt('Your age', '');
if (age > 17) {
    let joke = confirm('Show your passport!');
    alert('Joke, ' + 'Welcome ' + name + '!');
} else {
    alert('Sorry! ' + name + ' access closed!');
};