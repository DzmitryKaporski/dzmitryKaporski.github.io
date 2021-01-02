'use strict';

function sortString(firstString = 'sss', secondString = 'iii', thirdString = 'zzz') {
    if (firstString < secondString && firstString < thirdString && secondString < thirdString) {
        return firstString + ' ' + secondString + ' ' + thirdString
    }
    if (firstString < secondString && firstString < thirdString && thirdString < secondString) {
        return firstString + ' ' + thirdString + ' ' + secondString
    }

    if (secondString < thirdString && secondString < firstString && thirdString < firstString) {
        return secondString + ' ' + thirdString + ' ' + firstString
    }
    if (secondString < thirdString && secondString < firstString && firstString < thirdString) {
        return secondString + ' ' + firstString + ' ' + thirdString
    }

    if (thirdString < firstString && thirdString < secondString && firstString < secondString) {
        return thirdString + ' ' + firstString + ' ' + secondString
    }
    if (thirdString < firstString && thirdString < secondString && secondString < firstString) {
        return thirdString + ' ' + secondString + ' ' + firstString;
    }
};

console.log(sortString())