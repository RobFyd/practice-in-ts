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

// extracting an array type element - typeof
{
    const persons = [
        { name: "Rob", age: 30 },
        { name: "Bob", age: 20 }
    ];

    type Person = typeof persons[number]; // { name: string; age: number; }

    type ConditionalType = { name: string; age: number; } extends Person 
    ? number
    : string; 
}

// mapping types - keyof
{
    interface Person {
        name: string;
        surname: string;
        age: number;
    }

    type PersonStrings = {
        [Property in keyof Person]: string;
    }; // { name: string; surname: string; age: string; }

    type PersonOptional = {
        [Property in keyof Person]?: Person[Property];
    }; // { name?: string; surname?: string; age?: number; }
}

// mapping types - keyof with "-" modifier
{
    interface Person {
        name?: string;
        surname: string;
        readonly age: number;
    }

    type PersonConcrete = {
        -readonly [Property in keyof Person]-?: string; // -readonly removes the readonly modifier and -? removes the optional modifier
    }
}

// template literal types
{
    type Currency = "PLN" | "USD" | "EUR" | "GBP";

    type CurrencyConvert = `${Lowercase<Currency>}-${Currency}`; // "PLN-PLN" | "PLN-USD" | "PLN-EUR" | "PLN-GBP" | "USD-PLN" | "USD-USD" | "USD-EUR" | "USD-GBP" | "EUR-PLN" | "EUR-USD" | "EUR-EUR" | "EUR-GBP" | "GBP-PLN" | "GBP-USD" | "GBP-EUR" | "GBP-GBP"
}

// another mapping types example
{
    interface Person {
        name: string;
        age: number;
    }

    type MyPerson = {
        [Property in keyof Person as `my${Capitalize<Property>}`]: Person[Property];
    }
}