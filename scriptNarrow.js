"use strict";
var writeToConsole2 = function (value) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value.toLocaleUpperCase());
    }
};
