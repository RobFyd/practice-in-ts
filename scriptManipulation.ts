console.log("scriptManipulation.ts");

// keyof you can use to get the keys of an object
{
interface Person {
    name: string;
    surname: string;
    age: number;
}

type PersonProperty = keyof Person;

const personProperty: PersonProperty = "surname"; // "name" | "surname" | "age"
}

// typeof you can use to get the type of a variable or property
{
const name = "Rob";
console.log(typeof name); // string

let surname: typeof name = "Rob"; // must "Rob"
}