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
