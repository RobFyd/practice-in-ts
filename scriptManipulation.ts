console.log("scriptManipulation.ts");

// keyof 
{
interface Person {
    name: string;
    surname: string;
    age: number;
}

type PersonProperty = keyof Person;

const personProperty: PersonProperty = "surname"; // "name" | "surname" | "age"
}