// Run: tsc script.ts
// Output: script.js

console.log("Hello TypeScript!");

const hello = (name: string, country: string) => {
  console.log(`Hello ${name} from ${country}`);
};

hello("John", "USA");

// tsc script.ts --target es2015 --strict - to compile with es2015 and strict mode

// types

// type primitive (number, string, boolean, null, undefined, symbol, void):
{
  const getArea = (width: number, height: number) => width * height;

  console.log(getArea(5, 10));
}


// type array:
{
  const numbers = [1, 2, 3, 4, 5]; // number[]
}


// type any:
{
  let car: any = {
    brand: "BMW",
  };

  // car = "Mercedes";
  // car.year = 2020; // no error, try avoid using any
}


// type function:
{
  const welcome = (name: string, age: number) => {
    console.log(`Hello ${name}, you are ${age} years old`);
  };

  welcome("John", 25);

  const getEUR = (plnAmount: number, rate: number): number => plnAmount / rate;

  console.log(getEUR(100, 4.71));

  const bye = (): void => {
    console.log("Goodbye!");
  };

  const newNumber = [12321];

  newNumber.forEach((number) => {
    console.log(number);
  });
}


// type object:
{
  const newHello = (person: { name: string; age?: number }) => {
    console.log(
      `Hello ${person.name}${
        person.age ? `, you are ${person.age} years old` : ""
      }!`
    );
  };

  newHello({ name: "Bob", age: 45 }); // age? - optional parameter
}


// when the value has two different types:
{
  const writeToConsole = (value: string | number) => {
    if (typeof value === "string") {
      console.log(value.toLocaleUpperCase());
      return;
    }

    console.log(value.toFixed(2));
  };

  writeToConsole("Hello");
  writeToConsole(123);

  // all types have a method which is needed

  const getLenght = (value: number[] | string) => value.length;

  console.log(getLenght([1, 2, 3, 4, 5]));
  console.log(getLenght("Hello"));
}


// alias type:
{
  type Car = {
    brand: string;
    year: number;
  };

  // interface ICar {            // the same as type often with "I" prefix
  //     brand: string;
  //     year: number;
  // }

  const car2: Car = {
    brand: "BMW",
    year: 2020,
  };

  console.log(car2.brand, car2.year);

  const showCar = (car2: Car) => {
    console.log(`Brand: ${car2.brand}, year: ${car2.year}`);
  };

  showCar(car2);
}


// alias type interface:
{
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    bark: () => void;
  }

  const dog: Dog = {
    bark: () => {
      console.log("Woof!");
    },
    name: "Burek",
  };

  console.log(dog.name);
  console.log(dog.bark());


  // type assertion:

  const nameInputElement = document.querySelector(
    ".js-name"
  ) as HTMLInputElement;
  // it helps typescript to understand that it is an input element
}


// literal types:
{
  interface Motorbike {
    brand: string;
    color: "red" | "blue" | "green";
    city: "Warsaw" | "Berlin" | "Paris";
    new: boolean; // it same as new: true | false;
  }

  const motorbike = {
    brand: "Yamaha",
    // color: "white", // error
    color: "red",
    city: "Warsaw",
    new: true,
  } as const; // typescript knows that the object is constant

  console.log(motorbike.brand, motorbike.color, motorbike.city, motorbike.new);

  const buyMotorbike = (motorbike: Motorbike) => {};

  buyMotorbike(motorbike);
}


// null and undefined:
{
  const hideElement = (element: Element) => {
    element.classList.add("hidden");
  };

  const element = document.querySelector(".js-element");

  if (element !== null) {
    hideElement(element);
  }
}
