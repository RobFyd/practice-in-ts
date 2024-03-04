"use strict";
// Run: tsc script.ts
console.log('Hello TypeScript!');
const hello = (name, country) => {
    console.log(`Hello ${name} from ${country}`);
};
hello('John', 'USA');

// tsc script.ts --target es2015 --strict