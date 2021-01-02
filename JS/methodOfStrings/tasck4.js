'use strict';

alert(`Напишите функцию модерации, которая принимает в качестве параметров
предложение (строку) текста и запрещенное слово, и при наличии в предложении
запрещенного слова в любом регистре, заменяет его символы на астериксы ('звездочки')
- '*' и возвращает измененное предложение.
В случае, если запрещенного слова в предложении нет, возвращает предложение без
изменений.`);

let string1 = 'xWxwXw Follow the white xWxwXw';
let string2 = 'Call me Ishmael';
let string3 = 'Repent before bloody xWxwXw punish you!';
let string4 = 'xWxwXwRepent     xWxwXw   before sdgxWxwXwbloody xWxwXw punish you!';
let string5 = 'xW Repent  xW  xW beforexW sdgxWloody xW punish you!';

let bannedWordLowercase = 'xwxwxw';
let bannedWordLowercase2 = 'xw';

function moderation(string, bannedWord) {

    let stringLowercase = string.toLowerCase();
    if (stringLowercase.includes(bannedWord)) {
        let bannedWordStar = '';
        let lengthBannedWord = bannedWord.length;
        for (let i = 0; i < lengthBannedWord; i++) {
            bannedWordStar += '*';
        };

        let arrStringLowercase = stringLowercase.split(' ');
        let indexBannedWord;

        do {
            indexBannedWord = arrStringLowercase.indexOf(bannedWord);
            arrStringLowercase.splice(indexBannedWord, 1, bannedWordStar);
            indexBannedWord = arrStringLowercase.indexOf(bannedWord);
        } while (indexBannedWord >= 0);

        let newString1 = arrStringLowercase.join(' ');

        let newString2 = '';
        let stringLength1 = newString1.length;
        for (let i = 0; i < stringLength1; i++) {
            if (string[i] === newString1[i]) {
                newString2 += newString1[i].toLowerCase();
            } else {
                newString2 += newString1[i].toUpperCase();
            };
        };
        return newString2;
    } else {
        return string;
    };
};

console.log(moderation(string1, bannedWordLowercase));
console.log(moderation(string2, bannedWordLowercase));
console.log(moderation(string3, bannedWordLowercase));
console.log(moderation(string4, bannedWordLowercase));
console.log(moderation(string5, bannedWordLowercase2));