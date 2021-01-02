'use strict';

let button0 = document.getElementById('button0');
button0.style.margin = '10px 10px 10px 10px';
button0.style.border = 'solid 2px blue';
button0.style.width = '200px';
button0.onmouseenter = function () {
    button0.style.background = 'rgb(226, 161, 21)';
};
button0.onmouseleave = function () {
    button0.style.background = '';
};

let button1 = document.getElementById('button1');
button1.style.margin = '10px 10px 10px 10px';
button1.style.border = 'solid 2px blue';
button1.style.width = '200px';
button1.onmouseenter = function () {
    button1.style.background = 'rgb(226, 161, 21)';
};
button1.onmouseleave = function () {
    button1.style.background = '';
};

let button2 = document.getElementById('button2');
button2.style.margin = '10px 10px 10px 10px';
button2.style.border = 'solid 2px blue';
button2.style.width = '200px';
button2.onmouseenter = function () {
    button2.style.background = 'rgb(226, 161, 21)';
};
button2.onmouseleave = function () {
    button2.style.background = '';
};

let button3 = document.getElementById('button3');
button3.style.margin = '10px 10px 10px 10px';
button3.style.border = 'solid 2px blue';
button3.style.width = '200px';
button3.onmouseenter = function () {
    button3.style.background = 'rgb(226, 161, 21)';
};
button3.onmouseleave = function () {
    button3.style.background = '';
};

let button4 = document.getElementById('button4');
button4.style.margin = '10px 10px 10px 10px';
button4.style.border = 'solid 2px blue';
button4.style.width = '200px';
button4.onmouseenter = function () {
    button4.style.background = 'rgb(226, 161, 21)';
};
button4.onmouseleave = function () {
    button4.style.background = '';
};

let button5 = document.getElementById('button5');
button5.style.margin = '10px 10px 10px 10px';
button5.style.border = 'solid 2px blue';
button5.style.width = '200px';
button5.onmouseenter = function () {
    button5.style.background = 'rgb(226, 161, 21)';
};
button5.onmouseleave = function () {
    button5.style.background = '';
};

let button6 = document.getElementById('button6');
button6.style.margin = '10px 10px 10px 10px';
button6.style.border = 'solid 2px blue';
button6.style.width = '200px';
button6.onmouseenter = function () {
    button6.style.background = 'rgb(226, 161, 21)';
};
button6.onmouseleave = function () {
    button6.style.background = '';
};

function buttonReloadStyle() {
    reload.style.margin = '10px 10px 10px 10px';
    reload.style.border = 'solid 2px green';
    reload.style.width = '200px';
    reload.style.borderRadius = '50px';
    reload.style.color = 'blue';

};
buttonReloadStyle();

let buttonReload = document.getElementById('reload');
buttonReload.onmouseenter = function () {
    reload.style.color = 'red';
    reload.style.border = 'solid 1px red';
};
buttonReload.onmouseleave = function () {
    buttonReloadStyle();
};