'use strict';

alert(`Напишите функицию, которая принимает в качестве параметра текст (строку) и
анализирует ее на количество символов без пробелов, количество слов и определяет
характер предложения (вопросительное, отрицательное, утвердительное).
Если тип предлоежния не удалось пределить, присвоить свойству значение
null.`);

let firstString = `I'am here.`;
let secondString = `Where are you?`;
let thirdString = `I don't hera.`;
let fourthString = `I'm going!`;
let fiveString = `I'm going,`;
let sixString = `I'm going`;


function lineAnalysis(str) {

    let allSymbols = str.length;

    let theNumberOfSpaces = (str.split(' ').length - 1);
    let symbolsWithoutSpaces = str.length - theNumberOfSpaces;

    let quantityOfWords = theNumberOfSpaces + 1;

    let theLastValue = (str[str.length - 1]);

    let not = (str.includes(`don't`));

    let sentenceType = (theLastValue === '?') ? 'question' : (theLastValue === '!') ? 'statement' : (not === true) ? 'denial' : (theLastValue === '.') ? 'statement' :
        'null';

    let object = {
        allSymbols: allSymbols,
        symbolsWithoutSpaces: symbolsWithoutSpaces,
        quantityOfWords: quantityOfWords,
        theNumberOfSpaces: theNumberOfSpaces,
        sentenceType: sentenceType,
    }
    return object;
};

console.log(lineAnalysis(firstString));
console.log(lineAnalysis(secondString));
console.log(lineAnalysis(thirdString));
console.log(lineAnalysis(fourthString));
console.log(lineAnalysis(fiveString));
console.log(lineAnalysis(sixString));


        // console.log('количество всех символов в строке = ' +  allSymbols)
        // console.log('количество символов без пробелов, в строке = ' +  symbolsWithoutSpaces)
        // console.log('количество слов в строке = ' + quantityOfWords)
        // console.log('количество пробелов в строке = ' + theNumberOfSpaces)
        // console.log('тип предложения - ' + sentenceType)