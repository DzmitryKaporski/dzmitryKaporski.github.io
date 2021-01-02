'use strict';

alert(`Напишите функцию сокращения, которая принимает в качестве параметра строку
текста, сокращает ее до длины в 30 символов, заканчивает ее многоточием и возвращает
итоговый результат.`);

let firstStr = 'So many men, so many minds.  (Сколько людей столько и мнений.)';
let secondStr = 'Because they could stand that these were not monsters.';
let thirdStr = 'And I want to remember it. I never want to forget it.';

function stringFormatting(firstStr) {
    let begin = firstStr.slice(0, 30);
    let finish = '...';
    return begin + finish;
};
console.log(stringFormatting(firstStr));
console.log(stringFormatting(secondStr));
console.log(stringFormatting(thirdStr));