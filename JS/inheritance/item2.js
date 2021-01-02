'use strict';

button0.addEventListener('click', function () {
    swal(`Цепочка наследования состоящая из четырёх классов.`)
        .then(() => {
            console.log(
                retroAuto); // Call 'retroAuto' new object with properties and parameters 'RetroCar'
            console.log(
                modernAuto
            ); // Call 'modernAuto' new object with properties and parameters 'ModernCar & RetroCar'
            console.log(
                electroAuto
            ); // Call 'electroAuto' new object with properties and parameters 'ElectroCar & ModernCar & RetroCar'
            console.log(
                flyingAuto
            ); // Call 'flyingAuto' new object with properties and parameters 'FlyingCar & ElectroCar & ModernCar & RetroCar'
            swal(`Inheritance chain 
                         class RetroCar => class ModernCar extends RetroCar =>
                         class ElectroCar extends ModernCar => class FlyingCar extends ElectroCar`);
        });
});

button1.addEventListener('click', function () {
    swal(`- реализовано не менее двух статических методов;`)
        .then(() => {
            console.log(retroAuto);
            console.log(RetroCar.carOwnerPresence(retroAuto)); // call a static method 
            console.log(RetroCar.havingACarVinkoda(retroAuto)); // call a static method 
            swal('retroAuto have two static method');
        });
});

button2.addEventListener('click', function () {
    swal(`- не менее трех классов должны обладать конструкторами;`)
        .then(() => {
            console.log(retroAuto);
            console.log(modernAuto);
            console.log(electroAuto);
            swal(`retroAuto have constructor
                          modernAuto have constructor
                          electroAuto have constructor`);
        });
});

button3.addEventListener('click', function () {
    swal(`- в цепочке хотя бы два класса должны обладать одним или двумя собственными методами;`)
        .then(() => {
            console.log(retroAuto);
            retroAuto.toSay(); // call toSay method RetroCar class
            retroAuto.goAhead(); // call goAhead method RetroCar class
            retroAuto.stay(); // call stay method RetroCar class
            retroAuto.goBack(); // call goBack method RetroCar class
            console.log(flyingAuto);
            flyingAuto.fly(); // call fly method FlyingCar class
            flyingAuto.sitDown(); // call sitDown method FlyingCar class
            swal(`retroAuto have four method
                          flyingAuto have two method`);
        });
});

button4.addEventListener('click', function () {
    swal(`- хотя бы один метод должен расширять метод своего предка 
            (например вызывать метод предка и потом реализовывать свою функциональность);`)
        .then(() => {
            console.log(retroAuto);
            retroAuto.toSay(); // call toSay method RetroCar class
            console.log(modernAuto);
            modernAuto.toSay(); // call toSay method ModernCar class
            console.log(electroAuto);
            electroAuto.toSay(); // call toSay method ElectroCar class
            console.log(flyingAuto);
            flyingAuto.toSay(); // call toSay method FlyingCar class
            swal(`Inherited method toSay RetroCar class`);
        });
});

button5.addEventListener('click', function () {
    swal(
        `- минимум один класс должен обладать защищенным свойством, а также геттером и сеттером для него.`
    )
        .then(() => {
            console.log(retroAuto);
            console.log(retroAuto.vinCode); // call the getter method
            console.log(retroAuto.setVinCode()); // call the setter method
            console.log(modernAuto);
            console.log(modernAuto.vinCode);
            console.log(modernAuto.setVinCode());
            console.log(electroAuto);
            console.log(electroAuto.vinCode);
            console.log(electroAuto.setVinCode());
            console.log(flyingAuto);
            console.log(flyingAuto.vinCode);
            console.log(flyingAuto.setVinCode());
        });
});

button6.addEventListener('click', function () {
    swal({
        title: "Good job!",
        text: "Have a nice day!!!",
        icon: "success",
        button: "Yes!",
    });
});