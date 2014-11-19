'use strict';

function dec2hex(decNumber) {
    alert(decNumber + ' to hex = ' + Number(decNumber).toString(16).toUpperCase());
}


dec2hex(prompt('input a decimal number'));