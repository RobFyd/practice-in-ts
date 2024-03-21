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
    const numbers1 = [];
    const numbers2 = []; // same as above
}
