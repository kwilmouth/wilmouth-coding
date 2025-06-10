//🔸 Console
// console keyword refers to an object, a collection of data and actions, that we can use in our code. 
console.log(25); 


//🔸 Comments

//🔸 Data Types
// Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
// String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.
console.log('It was love at first sight.');
// BigInt: Any number, greater than 253-1 or less than -(253-1), with n appended to the number: 1234567890123456n.
// // Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
// Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
// Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.
// Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
// Object: Collections of related data.


//🔸 Arithmetic Operators
// operator: a character that performs a task in our code. JavaScript has several built-in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

// Add: +
console.log(25 + 3.5)
// Subtract: -
console.log(2025 - 1969)
// Multiply: *
console.log(0.2708 * 100)
// Divide: /
console.log(65 / 240)
// Remainder: %
console.log(12 % 3);


//🔸 String Concatenation
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('middle' + ' ' + 'space'); // Prints 'middle space'

//🔸 Properties
// length: stores the number of characters in that string
console.log('Hello'.length); // Prints 5


//🔸 Methods
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


//🔸 Built-in Objects
console.log(Math.random()); // Prints a random number between 0 and 1
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50
console.log(Number.isInteger(2017)); // Prints true

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


//🔸 Review
// https://www.codecademy.com/resources/docs/javascript
// https://www.codecademy.com/workspaces/new


//🔸 Variables
// variable: a container for a value; a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.


//🔸 Create a Variable: var

var myName = 'Arya';
console.log(myName);
// Output: Arya

// Let’s consider the example above:

// var, short for variable, is a JavaScript keyword that creates, or declares, a new variable.
// myName is the variable’s name. Capitalizing in this way is a standard convention in JavaScript called camel casing. In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased. (e.g. camelCaseEverything).
// = is the assignment operator. It assigns the value ('Arya') to the variable (myName).
// 'Arya' is the value assigned (=) to the variable myName. You can also say that the myName variable is initialized with a value of 'Arya'.
// After the variable is declared, the string value 'Arya' is printed to the console by referencing the variable name: console.log(myName).


//🔸 Create a Variable: let

//let: signals that the variable can be reassigned a different value. 

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito


let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350


//🔸 Create a Variable: const

// const: is short for the word constant; you can store any value in a const variable

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto


//🔸 Mathematical Assignment Operators