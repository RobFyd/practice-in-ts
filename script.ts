// Run: tsc script.ts
console.log('Hello TypeScript!');

const hello = (name: string, country: string) => {
    console.log(`Hello ${name} from ${country}`);
};

hello('John', 'USA');

// tsc script.ts --target es2015 --strict - to compile with es2015 and strict mode

// types


// type primitive (number, string, boolean, null, undefined, symbol, void):

const getArea = (width: number, height: number) => width * height;

console.log(getArea(5, 10));


// type array:

const numbers = [1, 2, 3, 4, 5]; // number[]


// type any:

let car: any = {
    brand: 'BMW'
};

car = 'Mercedes';
car.year = 2020;     // no error, try avoid using any


// type function:

const welcome = (name: string, age: number) => {
    console.log(`Hello ${name}, you are ${age} years old`);
}

welcome('John', 25);

const getEUR = (plnAmount: number, rate: number): number => plnAmount / rate;

console.log(getEUR(100, 4.71));

const bye = (): void => {
    console.log('Goodbye!');
}

const newNumber = [12321];

newNumber.forEach((number) => {
    console.log(number);
});
