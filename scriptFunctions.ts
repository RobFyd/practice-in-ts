console.log("in operator");

// function typing
{
  const greeter = (greetFunctions) => {
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
