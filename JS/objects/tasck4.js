'use strict';

alert(`IV) Создайте функцию, которая выводит в консоль свойства и значения объекта в виде
строки - "property: value."`);

let human = {
    name: 'Anton',
    patronymic: 'Nikolaevich',
    surname: 'Pancov',
};

function fulName() {
    for (let key in human) {
        console.log(key + ' - ' + human[key]);
    };
};

fulName();