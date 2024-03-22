"use strict";
// object types
// some properties may be read-only
{
    const doSomething = (someObject) => {
        console.log(someObject.property);
        // someObject.property = 'new value'; // error
    };
}
{
    const doSomething = (someObject) => {
        console.log(someObject.property);
        someObject.person.name = "new name";
        // someObject.person = {}; // error - we can mutate the object, but not replace it
    };
}
{
    let writablePerson = {
        name: "Person McPersonface",
        age: 42,
    };
    let readonlyPerson = writablePerson;
    writablePerson.age = 100;
    // readonlyPerson.age = 100; // error
}
// index signatures
{
    const cars = ["Ford", "Toyota"];
    // cars.push("Chevy"); // error
}
// extended index signatures
// when one type is a more specific version of the other type
{
    const dog = { name: "Fido", breed: "Golden Retriever" };
    const animal = dog;
}
// intersection types
{
    const circle = {
        color: "red",
        radius: 42,
    };
    console.log(circle);
}
// generic types objects
{
}
// generic types in a different way - helpers
{
}
// array types
{
    const numbers1 = []; // abbreviated syntax
    const numbers2 = []; // same as above
}
// readonly arrays
{
    const doSomething = (array) => {
        array[5]; // ok
        // array.push(42); // error
    };
}
{
    const numbers = [1, 2, 3]; // create a readonly array
}
{
    let numbers = [3, 4, 5];
    let readonlyNumbers = numbers; // readonly arr to not readonly arr is ok
    // numbers = readonlyNumbers; // not readonly arr to readonly arr is not ok
}
// tuple types
{
    const tupleArr = ["hello", 42];
    const myString = tupleArr[0];
    const myNumber = tupleArr[1];
    // const doesNotExist = tupleArr[2]; // undefined
    const [myString2, myNumber2] = tupleArr; // destructuring
    tupleArr.length; // 2
}
// optional elements in tuples
{
    const tupleArr = ["hello", 42];
    const third = tupleArr[2]; // boolean | undefined
    tupleArr[2] = true; // ok
    tupleArr[2] = undefined; // ok
    tupleArr.length; // 2 | 3
}
// rest elements in tuples
{
    const tupleArr = ["hello", 42, true, false, true];
    tupleArr.length; // number
}
// readonly tuples
{
    const tupleArr = ["hello", 42, true, false, true];
    // tupleArr[0] = "hi"; // error
}
// declaring a readonly tuple type
{
    const array = ["hello", 42];
}
