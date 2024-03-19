// object types

// some properties may be read-only
{
  interface SomeObject {
    readonly property: string;
  }

  const doSomething = (someObject: SomeObject) => {
    console.log(someObject.property);
    // someObject.property = 'new value'; // error
  };
}
{
  interface SomeObject {
    readonly property: string;
    readonly person: {
      name: string;
      age: number;
    };
  }

  const doSomething = (someObject: SomeObject) => {
    console.log(someObject.property);
    someObject.person.name = "new name";
    // someObject.person = {}; // error - we can mutate the object, but not replace it
  };
}
{
  interface WritablePerson {
    name: string;
    age: number;
  }

  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }

  let writablePerson: WritablePerson = {
    name: "Person McPersonface",
    age: 42,
  };

  let readonlyPerson: ReadonlyPerson = writablePerson;

  writablePerson.age = 100;
  // readonlyPerson.age = 100; // error
}

// index signatures
{
  interface StringArray {
    [index: number]: string;
  }

  const cars: StringArray = ["Ford", "Toyota"];
  // cars.push("Chevy"); // error
}
