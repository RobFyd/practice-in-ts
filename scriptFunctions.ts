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
