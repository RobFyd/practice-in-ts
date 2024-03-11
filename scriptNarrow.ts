// Purpose: This file contains code that demonstrates how to use the narrow type assertion in TypeScript.

// typeof - Narrowing by type
{
  const writeToConsole = (value: number | string) => {
    if (typeof value === "number") {
      console.log(value.toFixed(2));
    } else {
      console.log(value.toLocaleUpperCase());
    }
  };

  writeToConsole(5.123321);
  writeToConsole("Hello World");
}

// typeof for null gives "object"
{
  const getAge = (person: { age: number } | null) => {
    if (typeof person === "object") {
      return person?.age;
    }
  };

  console.log(getAge({ age: 45 }));
}

// array is array?
{
  const getLenght = (value: number[] | null) => {
    if (Array.isArray(value)) {
      return value.length;
    }

    return null;
  };

  console.log(getLenght([1, 2, 3, 4, 5]));
}
// second convention - quick escape
{
  const getLenght = (value: number[] | null) => {
    if (!Array.isArray(value)) {
      return null;
    }

    return value.length;
  };

  console.log(getLenght([1, 2, 3, 4]));
}
// shortest version
{
  const getLenght = (value: number[] | null) => (!value ? null : value.length);
  console.log(getLenght([1, 2, 3]));
}
// when value is falsy (null, undefined, 0, false, NaN, '', "", bigInt(0n))
{
  const getLenght = (value: (number | bigint)[] | null) => {
    if (!value) {
      return null;
    }

    return value.length;
  };
  getLenght([0n]);
}
// watch out for empty string
{
  const getLenght = (value: string | null) => {
    if (value === null) {
      return null;
    }

    return value.length;
  };
  console.log(getLenght(""));
}

// in operator
{
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  type Human = { fly?: () => void; swim?: () => void };

  const move = (animal: Fish | Bird | Human) => {
    if ("swim" in animal) {
      animal.swim?.();
    } else {
      animal.fly?.(); // optional chaining
    }
  };
}

// instanceof
{
  const logDate = (date: string | Date) => {
    console.log(
      `Date: ${date instanceof Date ? date.toLocaleDateString() : date}`
    );
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
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };

  let animal: Fish | Bird = getPet();

  const isFish = (pet: Fish | Bird) => "swim" in pet;
}