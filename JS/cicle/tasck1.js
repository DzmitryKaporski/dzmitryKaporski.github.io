'use strict';

alert(`1. Напишите программу, которая последовательно запрашивает у пользователя имя,
фамилию и никнейм. Далее при помощи alert или консоли отобразите приветственное
сообщение исходя из следующих условий:
- введены имя, фамилия и никнейм -> обратиться к пользователю по имени и фамилии;
- введены имя, фамилия -> обратиться к пользователю по имени и фамилии;
- введены никнейм и фамилия -> обратиться к пользователю через никнейм;
- введены никнейм и имя -> обратиться к пользователю через имя;
- не введено ни одно значение или введена только фамилия или только никнейм ->
обратиться к пользователю через ‘Noname’.`);

let userName = prompt('Your name?', ' Антон ');
let userSurName = prompt('Your surname?', ' Панков ');
let userNickName = prompt('Your nickname?', ' XXX ');
if ((userName && userSurName && userNickName) || userName && userSurName) {
    console.log('Hello ,' + (userName + userSurName));
} else {
    if (userNickName && (userName || userSurName)) {
        console.log('Hello ,' + (userName || userNickName));
    } else {
        console.log('Hi, Noname!')
    }
};