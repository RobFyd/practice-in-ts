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

// keyof and typeof can be used together
{
    const person = {
        name: "Rob",
        surname: "Soares",
        age: 30
    };

    type PersonProperty = keyof typeof person; // "name" | "surname" | "age"
}

// the type returned by functions - typeof
{
    const getPerson = () => ({
        name: "Rob"
    });

    type Person = ReturnType<typeof getPerson>; // { name: string }
    type PersonName = Person["name"]; // string
}