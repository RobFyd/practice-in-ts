"use strict";
// Purpose: This file contains code that demonstrates how to use the narrow type assertion in TypeScript.
// typeof - Narrowing by type
{
    const writeToConsole = (value) => {
        if (typeof value === "number") {
            console.log(value.toFixed(2));
        }
        else {
            console.log(value.toLocaleUpperCase());
        }
    };
    writeToConsole(5.123321);
    writeToConsole("Hello World");
}
// typeof for null gives "object"
{
    const getAge = (person) => {
        if (typeof person === "object") {
            return person?.age;
        }
    };
    console.log(getAge({ age: 45 }));
}
// array is array?
{
    const getLenght = (value) => {
        if (Array.isArray(value)) {
            return value.length;
        }
        return null;
    };
    console.log(getLenght([1, 2, 3, 4, 5]));
}
// second convention - quick escape
{
    const getLenght = (value) => {
        if (!Array.isArray(value)) {
            return null;
        }
        return value.length;
    };
    console.log(getLenght([1, 2, 3, 4]));
}
// shortest version
{
    const getLenght = (value) => (!value ? null : value.length);
    console.log(getLenght([1, 2, 3]));
}
// when value is falsy (null, undefined, 0, false, NaN, '', "", bigInt(0n))
{
    const getLenght = (value) => {
        if (!value) {
            return null;
        }
        return value.length;
    };
    getLenght([0n]);
}
// watch out for empty string
{
    const getLenght = (value) => {
        if (value === null) {
            return null;
        }
        return value.length;
    };
    console.log(getLenght(""));
}
// in operator
{
    const move = (animal) => {
        if ("swim" in animal) {
            animal.swim?.();
        }
        else {
            animal.fly?.(); // optional chaining
        }
    };
}
// instanceof
{
    const logDate = (date) => {
        console.log(`Date: ${date instanceof Date ? date.toLocaleDateString() : date}`);
    };
    logDate(new Date());
}
// a value whose type will depend on luck
{
    let value = Math.random() < 0.5 ? 100 : "hello world";
    value = 5; // value is now a number
    console.log(value.toFixed(2)); // Error: Property 'toFixed' does not exist on type 'string | number'.
    value = "hello world"; // value is now a string
    console.log(value.toLocaleUpperCase()); // Error: Property 'toLocaleUpperCase' does not exist on type 'string | number'.
}
// own type guard
{
    const getPet = () => {
        return Math.random() < 0.5 ? { swim: () => { } } : { fly: () => { } };
    };
    let animal = getPet();
    const isFish = (pet) => "swim" in pet;
    if (isFish(animal)) {
        animal;
    }
    else {
        animal;
    }
    const pets = [getPet()];
    const onlyFish = pets.filter(isFish);
    onlyFish;
    console.log(onlyFish);
}
// union of two interfaces - discriminated union
{
    const getArea = (shape) => {
        switch (shape.kind) {
            case "circle":
                return Math.PI * shape.radius ** 2;
            case "square":
                return shape.sideLength ** 2;
        }
    };
    const square = {
        kind: "square",
        sideLength: 5,
    };
    console.log(getArea(square));
    const circle = {
        kind: "circle",
        radius: 5,
    };
    console.log(getArea(circle));
}
