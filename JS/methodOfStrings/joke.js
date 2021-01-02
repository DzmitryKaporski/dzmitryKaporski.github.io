'use strict';

let button = document.getElementById('button');
button.addEventListener('click', function () {
    swal(`Тех, кто презирает программистов, 
    программисты презирают сильнее, чем те, 
    кто презирает тех программистов, которые
     презирают тех, кто их презирает.`)
        .then((value) => {
            swal(`Если ты понял предыдущее — то ты программист.`);
        });
});