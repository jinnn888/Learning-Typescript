// Variable Annotations
var name = "Hyein";
var age = 17;
var isActive = true;
// Function Parameter and Return Type Annotations
function add(a, b) {
    return a + b;
}
function greet(name) {
    return "Hello, ".concat(name);
}
function printName(name) {
    console.log(name);
}
printName(name);
console.log(greet(name));
// Array Annotations
var numbers = [1, 2, 3, 4];
var string = ['a', 'b', 'c', 'd'];
// Object Annotations
var user = { name: 'Cat', age: 2 };
var dog = { name: 'niji', age: 2 };
// Union types
var id = 22;
id = 'abc';
var user1 = { name: 'idk', age: 22 };
var product = { id: 1, name: 'Laptop', price: 22 };
// Function type annotations
var calculate;
calculate = function (a, b) { return a + b; };
// Tuple Annotations
var tuple;
tuple = ["hello", 42];
// Enum Annotations
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Suspended"] = 2] = "Suspended";
})(Status || (Status = {}));
var currentStatus = Status.Active;
// Any Type
var randomValue = 10;
randomValue = "Hello";
randomValue = true;
var arrayOfAny = [1, 'abc', "lol"];
// Type Assertions
var someValue = "this is a string";
var strLength = someValue.length;
