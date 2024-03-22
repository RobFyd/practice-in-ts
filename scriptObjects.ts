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

// array types
{
  const numbers1: number[] = []; // abbreviated syntax
  const numbers2: Array<number> = []; // same as above
}

// readonly arrays
{
  const doSomething = (array: ReadonlyArray<number>) => {
    array[5]; // ok
    // array.push(42); // error
  };
}
{
  const numbers: readonly number[] = [1, 2, 3]; // create a readonly array
}
{
  let numbers = [3, 4, 5];

  let readonlyNumbers: readonly number[] = numbers; // readonly arr to not readonly arr is ok

  // numbers = readonlyNumbers; // not readonly arr to readonly arr is not ok
}

// tuple types
{
  const tupleArr: [string, number] = ["hello", 42];
  
  const myString = tupleArr[0];
  const myNumber = tupleArr[1];
  // const doesNotExist = tupleArr[2]; // undefined
  const [myString2, myNumber2] = tupleArr; // destructuring
  tupleArr.length; // 2
}

// optional elements in tuples
{
  const tupleArr: [string, number, boolean?] = ["hello", 42];

  const third = tupleArr[2]; // boolean | undefined
  tupleArr[2] = true; // ok
  tupleArr[2] = undefined; // ok
  tupleArr.length; // 2 | 3
}