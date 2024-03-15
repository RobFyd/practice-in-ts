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
// generic function
{
    const firstElement = (array) => array[0];
    const numbers = [2, 5];
    const firstNumber = firstElement(numbers);
    console.log(firstNumber);
}
// generic function with map
{
    const map = (array, transformFunction) => array.map(transformFunction);
    const numbers = [2.45, 1.16];
    const numbersFormatted = map(numbers, (number) => number.toFixed(1));
    console.log(numbersFormatted);
    // instead of:
    // const numbers = [2.45, 1.16];
    // const numbersFormatted = numbers.map((number) => number.toFixed(1));
    // console.log(numbersFormatted);
}
// extends in generic function
{
    const longer = (value1, value2) => (value1.length > value2.length ? value1 : value2); // we can use the length property because we know that the type has it
    console.log(longer("text", "longer text"));
    console.log(longer([], [5]));
}
