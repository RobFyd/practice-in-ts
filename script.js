"use strict";
// Run: tsc script.ts
console.log("Hello TypeScript!");
var hello = function (name, country) {
    console.log("Hello ".concat(name, " from ").concat(country));
};
hello("John", "USA");
// tsc script.ts --target es2015 --strict - to compile with es2015 and strict mode
// types
// type primitive (number, string, boolean, null, undefined, symbol, void):
var getArea = function (width, height) { return width * height; };
console.log(getArea(5, 10));
// type array:
var numbers = [1, 2, 3, 4, 5]; // number[]
// type any:
var car = {
    brand: "BMW",
};
// car = "Mercedes";
// car.year = 2020; // no error, try avoid using any
// type function:
var welcome = function (name, age) {
    console.log("Hello ".concat(name, ", you are ").concat(age, " years old"));
};
welcome("John", 25);
var getEUR = function (plnAmount, rate) { return plnAmount / rate; };
console.log(getEUR(100, 4.71));
var bye = function () {
    console.log("Goodbye!");
};
var newNumber = [12321];
newNumber.forEach(function (number) {
    console.log(number);
});
// type object:
var newHello = function (person) {
    console.log("Hello ".concat(person.name).concat(person.age ? ", you are ".concat(person.age, " years old") : "", "!"));
};
newHello({ name: "Bob", age: 45 }); // age? - optional parameter
// when the value has two different types:
var writeToConsole = function (value) {
    if (typeof value === "string") {
        console.log(value.toLocaleUpperCase());
        return;
    }
    console.log(value.toFixed(2));
};
writeToConsole("Hello");
writeToConsole(123);
