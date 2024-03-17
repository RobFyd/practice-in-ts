console.log("in operator");

// function typing
{
  const greeter = (greetFunctions: (text: string) => void) => {
    greetFunctions("Hello, World!");
  };

  const printToConsole = (text: string) => {
    console.log(text);
  };

  greeter(printToConsole);
}
{
  type GreetFunction = (text: string) => void; // we can store the function type in a variable - alias

  const greeter = (greetFunctions: GreetFunction) => {
    greetFunctions("Hello, World! 2");
  };

  const printToConsole = (text: string) => {
    console.log(text);
  };

  greeter(printToConsole);
}
// function typing with object
{
  type GreetFunction = {
    (text: string): void;
    myName: string;
  };

  const greeter = (greetFunctions: GreetFunction) => {
    greetFunctions(`Hello, World! ${greetFunctions.myName}`);
  };

  const printToConsole = (text: string) => {
    console.log(text);
  };

  printToConsole.myName = "and Roby!!";

  greeter(printToConsole);
}

// generic function
{
  const firstElement = <ItemType>(array: ItemType[]) => array[0];

  const numbers = [2, 5];

  const firstNumber = firstElement(numbers);

  console.log(firstNumber);
}

// generic function with map
{
  const map = <InputItemType, OutputItemType>(
    array: InputItemType[],
    transformFunction: (item: InputItemType) => OutputItemType
  ) => array.map(transformFunction);

  const numbers = [2.45, 1.16];
  const numbersFormatted = map(numbers, (number) => number.toFixed(1));

  console.log(numbersFormatted);

  // instead of:
  // const numbers = [2.45, 1.16];
  // const numbersFormatted = numbers.map((number) => number.toFixed(1));
  // console.log(numbersFormatted);
}

// extends in generic function
{
  const longer = <ValueType extends { length: number }>(
    value1: ValueType,
    value2: ValueType
  ) => (value1.length > value2.length ? value1 : value2); // we can use the length property because we know that the type has it

  console.log(longer("text", "longer text"));
  console.log(longer([], [5]));
}

// merge two arrays
{
  const mergeArrays = <ItemType>(array1: ItemType[], array2: ItemType[]) => [
    ...array1,
    ...array2,
  ];

  console.log(mergeArrays([1, 2], [3, 4]));
  console.log(mergeArrays<string | number>([1, 2], ["text", "text2"])); // we can use the union type
}

// good generic function - don't limit if not necessary
{
  const firstElement1 = <ItemType>(array: ItemType[]) => array[0];
  const firstElement2 = <ItemType extends any[]>(array: ItemType) => array[0];

  const firstElementFirst = firstElement1([2]); // number - better
  const firstElementSecond = firstElement2([2]); // any - worse (dont't use extend if not necessary)
}

// good generic function - use fewer function parameters
{
  const filterArray1 = <ItemType>(
    array: ItemType[],
    filterFunction: (item: ItemType) => boolean
  ) => array.filter(filterFunction); // better

  const filterArray2 = <
    ItemType,
    FilterFunctionType extends (item: ItemType) => boolean
  >(
    array: ItemType[],
    filterFunction: FilterFunctionType
  ) => array.filter(filterFunction); // worse

  const numbers = [1, 2, 3, 4, 5];

  console.log(filterArray1(numbers, (number) => number % 2 !== 0));
  console.log(filterArray2(numbers, (number) => number % 2 !== 0));
}

// good generic function - type parameters should appear at least twice
{
  const greet1 = <NameType extends string>(name: NameType) => {
    console.log(`Hello, ${name}!`); // worse - the function does not always have to be genetic
  };

  const greet2 = (name: string) => {
    console.log(`Hello, ${name}!`); // better
  };

  greet1("Roby");
  greet2("Roby");
}

// optionals arguments
{
  const greet = (name: string = "Stranger") => {
    console.log(`Hello, ${name}!`);
  };

  greet("Roby");
  greet(undefined);
}

// a function that does nothing
{
  const dontReturnAnything = () => {};
}

// unknown
{
  const function1 = (value: any) => {
    value.doSomething(); // we can call any method on the value
  };

  const function2 = (value: unknown) => {
    value.doSomething(); // we can't call any method on the value
  };
}

// never - function that never returns
{
  const error = () => {
    throw new Error("This is an error!");
  };
}

// function with any number of parameters
{
  const multiply = (factor: number, ...numbers: number[]) =>
    numbers.map((number) => number * factor);


    const numbers = [1, 2, 3];
  console.log(multiply(5, ...numbers));
}

// Math.pow
{
  const numbers = [2, 5] as const;

  console.log(Math.pow(...numbers));
}