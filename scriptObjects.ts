// object types

// some properties may be read-only
{
    interface SomeObject {
        readonly property: string;
    }

    const doSomething = (someObject: SomeObject) => {
        console.log(someObject.property);
        // someObject.property = 'new value'; // error
    }
}