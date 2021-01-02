'use strict';

alert(`V) Создайте функцию, которая определяет, является ли объект многоуровневым,
другими словами, обладает ли объект свойствами, которые тоже представляют собой
объекты.
В качестве параметра функция принимает объект, и в случае, если объект
многоуровневый - возвращает true, если нет - false.
Случай, при котором свойство имеет значение null, также должен обрабатываться
корректно.`);

let car1 = {};

let car2 = {
    carModel: 'BMW',
    color: 'Black',
}

let car3 = {
    carModel: 'BMW',
    color: 'Black',
    yearOfIssue: '2020',
    manufacturer: {
        country: 'Germany',
        city: 'Munich',
        reliable: true,
    },
};

let car4 = {
    carModel: 'BMW',
    color: 'Black',
    yearOfIssue: '2020',
    theNumberOfAccidents: null,
};

function objectDefinition(car) {

    for (let key in car) {
        if (typeof car[key] === 'object' && !!car[key])
            return true;
    };
    return false;
};
console.log(objectDefinition(car1));
console.log(objectDefinition(car2));
console.log(objectDefinition(car3));
console.log(objectDefinition(car4));