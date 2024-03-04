// Run: tsc script.ts
console.log('Hello TypeScript!');

const hello = (name: string, country: string) => {
    console.log(`Hello ${name} from ${country}`);
};

hello('John', 'USA');

// tsc script.ts --target es2015 --strict - to compile with es2015 and strict mode

// types

// type primitive:

const getArea = (width: number, height: number) => width * height;

console.log(getArea(5, 10));