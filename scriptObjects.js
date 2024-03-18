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
        // someObject.person = {}; // error
    };
}
