'use strict'

alert(`II. Создайте программу, которая проверяет введенный пользователем PIN-код. На ввод
дается три попытки. В случае, если все попытки будут провальными, пользователь
должен ввести для проверки PUK-код, имея на это также три попытки.
Итоговый успех или провал операции операции должен отображаться на либо при
помощи alert, либо в консоли.`);

let pin;
let puc;
let entryNumberPin = 0;
let entryNumberPuc = 0;

do {
    entryNumberPin++;
    pin = prompt('Enter a PINcode');
} while (pin != '1234' && entryNumberPin < 3);
if (pin === '1234') {
    console.log('Success');
} else {
    do {
        entryNumberPuc++;
        puc = prompt('Enter a PUCcode');
    } while (puc != '1111' && entryNumberPuc < 3);
    puc === '1111' ? console.log('Success') : console.log('Sim card is blocked');
};