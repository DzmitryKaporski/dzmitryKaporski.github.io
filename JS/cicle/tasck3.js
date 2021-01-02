'use strict';

alert(`3. Перепишите задачи '2' и '3' из предыдущего домашнего задания, используя вместо if
тернарный оператор.`);

let name = prompt('Your name?', '');
let age = prompt('Your age?', '');
let message = (age < 18) ? ('Sorry! ' + name + ' access closed!') : ('Welcome ' + name + '!');
alert(message);