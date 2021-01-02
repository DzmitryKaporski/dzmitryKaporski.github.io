'use strict';

function showMessage(message = 'С уважением, ', name = '') {

    if (message && name)

        return message + name

    name = prompt('Введите имя') || 'Инкогнито.';

    return message + name
}
console.log(showMessage());