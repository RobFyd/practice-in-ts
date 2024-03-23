"use strict";
console.log("scriptManipulation.ts");
// keyof you can use to get the keys of an object
{
    const personProperty = "surname"; // "name" | "surname" | "age"
}
// typeof you can use to get the type of a variable or property
{
    const name = "Rob";
    console.log(typeof name); // string
    let surname = "Rob"; // must "Rob"
}
// keyof and typeof can be used together
{
    const person = {
        name: "Rob",
        surname: "Soares",
        age: 30
    };
}
// the type returned by functions - typeof
{
    const getPerson = () => ({
        name: "Rob"
    });
}
// extracting an array type element - typeof
{
    const persons = [
        { name: "Rob", age: 30 },
        { name: "Bob", age: 20 }
    ];
}
// mapping types - keyof
{
}
