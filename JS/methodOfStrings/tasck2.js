'use strict';

alert(`Напишите функцию, которая инвертирует регистр введенной строки. Другими
словами, меняет большие буквы на маленькие и наоборот.`);

let firstSentence = 'Follow the white raBbiT';
let secondSentence = 'Call me Ishmael';
let thirdSentence = 'Repent before bloody rabbit punish you!';

function styleFormat(string) {
    let newString = '';
    let stringLength = string.length;
    for (let i = 0; i < stringLength; i++) {
        if (string[i] === string[i].toUpperCase()) {
            newString += string[i].toLowerCase();
        } else {
            newString += string[i].toUpperCase();
        };
    };
    return newString;
};

console.log(styleFormat(firstSentence));
console.log(styleFormat(secondSentence));
console.log(styleFormat(thirdSentence));