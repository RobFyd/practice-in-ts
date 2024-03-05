// Run: tsc script.ts
console.log('Hello TypeScript!');
var hello = function (name, country) {
    console.log("Hello ".concat(name, " from ").concat(country));
};
hello('John', 'USA');
// tsc script.ts --target es2015 --strict - to compile with es2015 and strict mode
// types
// type primitive (number, string, boolean, null, undefined, symbol, void):
var getArea = function (width, height) { return width * height; };
console.log(getArea(5, 10));
// type array:
var numbers = [1, 2, 3, 4, 5]; // number[]
// type any:
var car = {
    brand: 'BMW'
};
car = 'Mercedes';
car.year = 2020; // no error, try avoid using any
// type function:
var welcome = function (name, age) {
    console.log("Hello ".concat(name, ", you are ").concat(age, " years old"));
};
welcome('John', 25);
