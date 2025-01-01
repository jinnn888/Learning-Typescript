// Variable Annotations
let name: string = "Hyein";
let age: number = 17;
let isActive: boolean = true;

// Function Parameter and Return Type Annotations
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello, ${name}`;
}

function printName(name: string): void {
  console.log(name);
}

printName(name);
console.log(greet(name));

// Array Annotations
let numbers: number[] = [1, 2, 3, 4];
let string: string[] = ['a', 'b', 'c', 'd'];

// Object Annotations
let user: { name: string, age: number } = { name: 'Cat', age: 2 };
let dog: { name: string, age: number } = { name: 'niji', age: 2 };

// Union types
let id: string | number = 22;
id = 'abc';

// Type Aliases
type User = { name: string, age: number };
let user1: User = { name: 'idk', age: 22 };

// Interface Annotation
interface Product {
  id: number;
  name: string;
  price: number;
}

let product: Product = { id: 1, name: 'Laptop', price: 22 };

// Function type annotations
let calculate: (a: number, b: number) => number;
calculate = (a, b) => a + b;

// Tuple Annotations
let tuple: [string, number];
tuple = ["hello", 42];

// Enum Annotations
enum Status {
  Active,
  Inactive,
  Suspended,
}

let currentStatus: Status = Status.Active;

// Any Type
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

let arrayOfAny: any[] = [1, 'abc', "lol"];

// Type Assertions
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
