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
// merge two arrays
{
    const mergeArrays = (array1, array2) => [
        ...array1,
        ...array2,
    ];
    console.log(mergeArrays([1, 2], [3, 4]));
    console.log(mergeArrays([1, 2], ["text", "text2"])); // we can use the union type
}
// good generic function - don't limit if not necessary
{
    const firstElement1 = (array) => array[0];
    const firstElement2 = (array) => array[0];
    const firstElementFirst = firstElement1([2]); // number - better
    const firstElementSecond = firstElement2([2]); // any - worse (dont't use extend if not necessary)
}
// good generic function - use fewer function parameters
{
    const filterArray1 = (array, filterFunction) => array.filter(filterFunction); // better
    const filterArray2 = (array, filterFunction) => array.filter(filterFunction); // worse
    const numbers = [1, 2, 3, 4, 5];
    console.log(filterArray1(numbers, (number) => number % 2 !== 0));
    console.log(filterArray2(numbers, (number) => number % 2 !== 0));
}
// good generic function - type parameters should appear at least twice
{
    const greet1 = (name) => {
        console.log(`Hello, ${name}!`); // worse - the function does not always have to be genetic
    };
    const greet2 = (name) => {
        console.log(`Hello, ${name}!`); // better
    };
    greet1("Roby");
    greet2("Roby");
}
// optionals arguments
{
    const greet = (name = "Stranger") => {
        console.log(`Hello, ${name}!`);
    };
    greet("Roby");
    greet(undefined);
}
// a function that does nothing
{
    const dontReturnAnything = () => { };
}
// unknown
{
    const function1 = (value) => {
        value.doSomething(); // we can call any method on the value
    };
    const function2 = (value) => {
        value.doSomething(); // we can't call any method on the value
    };
}
// never - function that never returns
{
    const error = () => {
        throw new Error("This is an error!");
    };
}
// function with any number of parameters
{
    const multiply = (factor, ...numbers) => numbers.map((number) => number * factor);
    const numbers = [1, 2, 3];
    console.log(multiply(5, ...numbers));
}
// Math.pow
{
    const numbers = [2, 5];
    console.log(Math.pow(...numbers));
}
// destructuring parameters
{
    const rectangleArea = ({ sideA, sideB }) => sideA * sideB;
    console.log(rectangleArea({ sideA: 5, sideB: 4 }));
}
{
    const rectangleArea = ({ sideA, sideB }) => sideA * sideB;
    console.log(rectangleArea({ sideA: 52, sideB: 49 }));
}
