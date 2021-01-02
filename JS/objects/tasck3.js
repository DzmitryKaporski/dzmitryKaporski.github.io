'use strict';

alert(`III) Добавьте к объекту два метода, первый использует в качестве параметров внешние
данные, второй - имеющиеся свойства объекта.`);

let owner = 'Kaporski Dzmitry';
let insurance = 'Yes';

car = {
    carModel: 'BMW',
    color: 'Black',
    yearOfIssue: '2020',

    externalData: function (a = owner, b = insurance) {
        console.log('Owner -' + ' ' + a);
        console.log('Insurance -' + '' + b);
    },

    internalData: function () {
        console.log('*Model - ' + car.carModel, '*Color - ' + car.color, '*Year of issue - ' +
            car.yearOfIssue);
        console.log('*Fuel Type - ' + car.fuelType, '*Engine Capacity - ' + car.engineCapacity)
    }
};

car.fuelType = 'gasoline';
car.engineCapacity = 3.0;

console.log(car);

car.externalData();
car.internalData();