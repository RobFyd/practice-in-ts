"use strict";
console.log("in operator");
// function typing
{
    const greeter = (greetFunctions) => {
        greetFunctions("Hello, World!");
    };
    const printToConsole = (text) => {
        console.log(text);
    };
    greeter(printToConsole);
}
