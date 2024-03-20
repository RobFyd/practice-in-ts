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

// extended index signatures
// when one type is a more specific version of the other type
{
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const dog: Dog = { name: "Fido", breed: "Golden Retriever" };
  const animal: Animal = dog;
}

// intersection types
{
  interface Colorful {
    color: string;
  }

  interface Circle {
    radius: number;
  }

  type ColorfulCircle = Colorful & Circle; // intersection type

  const circle: ColorfulCircle = {
    color: "red",
    radius: 42,
  };

  console.log(circle);
}

// generic types objects
{
  interface APIResponse<Type> {
    statusCode: number;
    error: boolean;
    data: Type;
  }

  interface User {
    id: number;
    name: string;
  }

  type APIUserResponse = APIResponse<User>; // generic type

  interface Movie {
    id: number;
    title: string;
  }

  type APIMovieResponse = APIResponse<Movie>; // generic type
}

// generic types in a different way - helpers
{
  type OrNull<Type> = Type | null;
  type OneOrMany<Type> = Type | Type[];
  type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
  type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
}