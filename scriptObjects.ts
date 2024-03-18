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
