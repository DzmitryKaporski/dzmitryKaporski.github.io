'use stript';

alert(`4. Напишите программу, позволит вывести в консоль название для класса html элемента,
которая будет работать по следующему алгоритму. Программа предполагает
последовательное суммирование названий блока, элемента и модификатора, если они
будут обозначены.
Хотите ввести название блока? (confirm)
- нет - вывести в консоль сообщение о том, что элементу не присвоен класс (confirm);
- да - вывести окно для ввода названия блока (prompt)
Хотите ввести название элемента? (confirm)
- нет - вывести в консоль название блока. Закончить выполнение скрипта.
- да - вывести окно для ввода названия элемента (prompt)
Хотите ввести название модификатора? (confirm)
- да - вывести окно для ввода названия элемента (prompt). Вывести в консоль итоговое
название класса (блок + элемент + модификатор).
- нет - вывести в консоль итоговое название (блок + элемент).
Демо-видео с работой программы.
https://drive.google.com/open?id=1LJqY9Hawjk9nspqvRvNY4fhNsoTiMLQl`);

let questionFirst = confirm('Хотите ввести название блока?');
let block;
if (questionFirst) {
    block = prompt('Окно для ввода названия блока', 'block');
    if (block) {
        let questionSecond = confirm('Хотите ввести название элемента?', '');
        let element;
        if (questionSecond) {
            element = prompt('Окно для ввода названия элемента', '__element');
            if (questionSecond) {
                let questionThree = confirm('Хотите ввести название модификатора?', '');
                let modifier;
                if (questionThree) {
                    modifier = prompt('Окно для ввода названия модификатора', '_modifier');
                    if (questionThree) {
                        console.log(block + element + modifier);
                    }
                } else {
                    confirm(block + element);
                }
            } else {
                confirm(block + element);
            }
        } else {
            confirm(block);
        }
    } else {
        confirm(block);
    }
} else {
    confirm('Блоку не присвоено название!');
};