'use strict';

class RetroCar {
    constructor(modelCar, nameAuto, colorCar, yearOfIssue) { // constructor - template to create an object
        this.modelCar = modelCar;
        this.nameAuto = nameAuto;
        this.colorCar = colorCar;
        this.yearOfIssue = yearOfIssue;
    }

    ownerCar = 'Grandfather'; // assign property ownerCar object
    _vinCode = '7897HJL347'; // assign a secure property _vinCode object RetroCar

    static carOwnerPresence(obj) { // static method - this property of the class
        return obj.ownerCar.length ? 'static method carOwnerPresence' + ' - ' + true : undefined;
    }
    static havingACarVinkoda(obj) { // static method - this property of the class
        return obj._vinCode.length ? 'static method havingACarVinkoda' + ' - ' + true : undefined;
    }

    get vinCode() { // getter method 
        return this._vinCode
    }

    setVinCode = function () { // setter method
        let vinCode = prompt(`Enter the _VIN code "${this.modelCar}" for check`, `${this._vinCode}`);
        if (vinCode === this._vinCode)
            return true;
        return false;
    }

    toSay() { // Method for class
        console.log(`Hello from ${this.ownerCar}`);
    }
    goAhead() { // Method for class
        console.log(`Full speed ahead ${this.nameAuto}`);
    }
    stay() { // Method for class
        console.log(`Brake ${this.nameAuto}`);
    }
    goBack() { // Method for class
        console.log(`Full back ${this.nameAuto}`);
    };
};
const retroAuto = new RetroCar('Retro car', 'BMW', 'black', '1893');

class ModernCar extends RetroCar {
    constructor(modelCar, nameAuto, colorCar, yearOfIssue, fourWheelDrive) {
        super(modelCar, nameAuto, colorCar, yearOfIssue);
        this.fourWheelDrive = fourWheelDrive;
    }

    ownerCar = 'Father';
    _vinCode = '777WWW9069JK';

    toSay() {
        super.toSay();
        console.log(`${this.modelCar} it is my choice`);
    }
};
const modernAuto = new ModernCar('Modern car', 'BMW', 'black metallic', '1943', true);

class ElectroCar extends ModernCar {
    constructor(modelCar, nameAuto, colorCar, yearOfIssue, fourWheelDrive, batteryChargingTime) {
        super(modelCar, nameAuto, colorCar, yearOfIssue, fourWheelDrive);
        this.batteryChargingTime = batteryChargingTime;
    }
    ownerCar = 'Son';
    _vinCode = '1212YOU235COD';
};
const electroAuto = new ElectroCar('Electro car', 'BMW', 'white', '2000', true, 'three hours');

class FlyingCar extends ElectroCar {
    ownerCar = 'Grandson';
    _vinCode = 'WE4768FR90';
    automaticControl = 'Automatic control';

    fly() { // Method for class FlyingCar
        console.log(`Fly ${this.nameAuto}`);
    }

    sitDown() { // Method for class FlyingCar
        console.log(`Sit down ${this.nameAuto}`);
    }
};
const flyingAuto = new FlyingCar('Flying car', 'BMW', 'white', '2030', false, 'five hours');