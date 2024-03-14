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
{
    const greeter = (greetFunctions) => {
        greetFunctions("Hello, World! 2");
    };
    const printToConsole = (text) => {
        console.log(text);
    };
    greeter(printToConsole);
}
// function typing with object
{
    const greeter = (greetFunctions) => {
        greetFunctions(`Hello, World! ${greetFunctions.myName}`);
    };
    const printToConsole = (text) => {
        console.log(text);
    };
    printToConsole.myName = "and Roby!!";
    greeter(printToConsole);
}
