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
// all types have a method which is needed
var getLenght = function (value) { return value.length; };
console.log(getLenght([1, 2, 3, 4, 5]));
console.log(getLenght("Hello"));
// interface ICar {            // the same as type often with "I" prefix
//     brand: string;
//     year: number;
// }
var car2 = {
    brand: "BMW",
    year: 2020,
};
console.log(car2.brand, car2.year);
var showCar = function (car2) {
    console.log("Brand: ".concat(car2.brand, ", year: ").concat(car.year));
};
showCar(car2);
var dog = {
    bark: function () {
        console.log("Woof!");
    },
    name: "Burek",
};
console.log(dog.name);
console.log(dog.bark());
// type assertion:
var nameInputElement = document.querySelector(".js-name");
var motorbike = {
    brand: "Yamaha",
    // color: "white", // error
    color: "red",
    city: "Warsaw",
    new: true,
}; // typescript knows that the object is constant
console.log(motorbike.brand, motorbike.color, motorbike.city, motorbike.new);
var buyMotorbike = function (motorbike) { };
buyMotorbike(motorbike);
// null and undefined:
var hideElement = function (element) {
    element.classList.add("hidden");
};
var element = document.querySelector(".js-element");
if (element !== null) {
    hideElement(element);
}
