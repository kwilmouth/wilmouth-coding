////////// 🔺 Welcome to Learn JavaScript

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


////////// 🔺 Introduction

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

let w = 4;
w = w + 1;

console.log(w); // Output: 5

//The value of w went from w = 4 to w = 5

let w = 4;
w += 1;

console.log(w); // Output: 5

// += is used to reassign the value of w

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

//These formulas work similarly:
// +=
// -= 
// *= 
// /=


//🔸 The Increment and Decrement Operator

// Other mathematical assignment 
// Preview: Docs An operator is a special character or series of characters that perform a task in JavaScript.
// operators include the increment operator (++) and decrement operator (--).

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19


//🔸 String Concatenation with Variables

// The + operator can be used to combine two string values even if those values are being stored in variables

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'


//🔸 String Interpolation

// In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. 

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.


//🔸 typeof operator

//The typeof operator checks the value to its right and returns, or passes back, a string of the data type.

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean


//🔸 Review Variables

// Let’s review what we learned:

    // Variables hold reusable data in a program and associate it with a name.
    // Variables are stored in memory.
    // The var keyword is used in pre-ES6 versions of JS.
    // let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
    // Variables that have not been initialized store the primitive data type undefined.
    // Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
    // The + operator is used to concatenate strings including string values held in variables.
    // In ES6, template literals use backticks ` and ${} to interpolate values into a string.
    // The typeof keyword returns the data type (as a string) of a value.

console.log(test1);

const test1 = 'figuring out quirks';


//🔸 Kelvin Weather

//Exercise: convert Kelvin to Celsius, then to Fahrenheit.

//defines kelvin
const kelvin = 0;

//defines celsius
const celsius = kelvin - 273;

//defines fahrenheit
const fahrenheit = celsius * (9/5) + 32;

//defines newton
const newton = celsius * (33/100);

//print formula
console.log('The temperature is ' + fahrenheit.floor() + ' degrees Fahrenheit.');

//print formula
console.log('The temperature is ' + newton + ' degrees Newton.');

// ❓ how would I add .floor() to this to round the number to the next whole number??


//🔸 Dog Years

var myName = 'Katie';
var myAge = 24;

var earlyYears = 2;
var earlyYears = earlyYears *= 10.5;

var laterYears = myAge - 2;
var laterYears = laterYears *= 4;

console.log('Early Years = ' + earlyYears);

console.log('Later Years = ' + laterYears);

var myAgeInDogYears = earlyYears + laterYears;

console.log('My name is ' + myName+ '. I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.'
)

// ❓ how would I add .toLowerCase(), to this


////////// 🔺 Conditionals

//🔸 What are Conditional Statements?

// We’ll be covering the following concepts:
    // if, else if, and else statements
    // comparison operators
    // logical operators
    // truthy vs falsy values
    // ternary operators
    // switch statement


//🔸 If Statement

if (true) {
    console.log('This message will print!'); 
  }
// Prints: This message will print!
  
// Notice in the example above, we have an if statement. The if statement is composed of:
    // The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
    // Inside the parentheses (), a condition is provided that evaluates to true or false.
    // If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
    // If the condition evaluates to false, the block won’t execute.

let sale = true;
//assigns true to sale

sale = false;

if (sale) {
    console.log('Time to buy!'); 
    }


//🔸 If...Else Statements

// In the example above, the else statement:
    // Uses the else keyword following the code block of an if statement.
    // Has a code block that is wrapped by a set of curly braces {}.
    // The code inside the else statement code block will execute when the if statement’s condition evaluates to false.

let sale = true;

sale = false;

if(sale) {
    console.log('Time to buy!');
}
else {
    console.log('Time to wait for a sale.');
}


//🔸 Comparison Operators

// Here is a list of some handy comparison operators and their syntax:
    // Less than: <
    // Greater than: >
    // Less than or equal to: <=
    // Greater than or equal to: >=
    // Is equal to: ===
    // Is not equal to: !==

let hungerLevel = 7;

if (hungerLevel > 7) {
    console.log('Time to eat!')
}

else {
    console.log('We can eat later!')
}


//🔸 Logical Operators

// There are three logical operators:
    // the and operator (&&)
    // the or operator (||)
    // the not operator, otherwise known as the bang operator (!)

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
console.log('time to sleep')
}

else {
    console.log('not bed time yet')
}


//🔸 Truthy and Falsy

let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

// The list of falsy values includes:
    // 0
    // Empty strings like "" or ''
    // null which represent when there is no value at all
    // undefined which represent when a declared variable lacks a value
    // NaN, or Not a Number

let numberOfApples = 0;

if (numberOfApples){
    console.log('Let us eat apples!');
} else {
    console.log('No apples left!');
}
// Prints 'No apples left!'
    

let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


//🔸 Truthy and Falsy Assignment

let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger


let tool = 'marker';
//reassigns pen to marker

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


//🔸 Ternary Operator

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}


isNightTime ? console.log('Turn on the lights!') 
: console.log('Turn off the lights!');

// In the example above:
    // The condition, isNightTime, is provided before the ?.
    // Two expressions follow the ? and are separated by a colon :.
    // If the condition evaluates to true, the first expression executes.
    // If the condition evaluates to false, the second expression executes.

// ❓ How often is used instead of actual if/else statements

if (isLocked) {
    console.log('You will need a key to open the door.');
  } else {
    console.log('You will not need a key to open the door.');
  }

isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');


//🔸 Else If Statements

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}


let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} 
else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} 
else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} 
else {
  console.log('Invalid season.');
}


//🔸 The switch keyword

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

// A switch statement provides an alternative syntax that is easier to read and write. 

// A switch statement looks like this:
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
// Prints 'Papayas are $1.29'


let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}


//🔸 Review

// Here are some of the major concepts for conditionals:
    // An if statement checks a condition and will execute a task if that condition evaluates to true.
    // if...else statements make binary decisions and execute different code blocks based on a provided condition.
    // We can add more conditions using else if statements.
    // Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
    // The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
    // The logical operator ||, or “or”, checks if either provided expression is truthy.
    // The bang operator, !, switches the truthiness and falsiness of a value.
    // The ternary operator is shorthand to simplify concise if...else statements.
    // A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.


////////// 🔺 Functions

//🔸 What are Functions?

// We can calculate the area of one rectangle with the following code:
const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60

// Imagine being asked to calculate the area of three different rectangles:
// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;

// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;


//🔸 Function Declarations

// A function declaration consists of:
    // The function keyword.
    // The name of the function, or its identifier, followed by parentheses.
    // A function body, or the block of required to perform a specific task, enclosed in the function’s curly brackets, { }.

greetWorld(); // Output: Hello, World!

function greetWorld() {
    console.log('Hello, World!');
}
    

getReminder(); 
function getReminder() {
    console.log('Water the plants.');
}

greetInSpanish();
function greetInSpanish() {
    console.log('Buenas tardes.');
}


//🔸 Calling a Function

// The code inside a function body runs, or executes, only when the function is called.

// To call a function in your code, you type the function name followed by parentheses.

//define function up here
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}

//call function here
sayThanks(); 
sayThanks(); 
sayThanks(); 


//🔸 Parameters and Arguments

//Parameters allow functions to accept input(s) and perform a task using the input(s).

function sayThanks(name) {
  console.log(`Thank you for your purchase, ${name}! We appreciate your business.`);
}

sayThanks("Jordan"); 
sayThanks(); 


//🔸 Default Parameters

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


//assign default values to the parameters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}


//🔸 Return

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined


function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}


//Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.
function monitorCount(rows, columns) {
  const numOfMonitors = rows * columns;
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors); 


//🔸 Helper Functions

// helper functions - functions being called within another function

solves for Fahrenheit
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

function getFahrenheit(celsius) {
  return  (9/5) * celsius + 32;
}

getFahrenheit(15); // Returns 59

getFahrenheit(41); 


//solve for monitorCount
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return rows * columns;
  return monitorCount(rows, columns) * 200;
}

const totalCost = (costOfMonitors(5, 4));

getTotalCost();


//🔸 Function Expressions  

//anonymous function - A function with no name

//define a function expression by using function inside an expression, we can use the function keyword

variableName(argument1, argument2)

// plant exercise
const plantNeedsWater = function plantNeedsWater(day) {
  if  (day === 'Wednesday') {
    return  true;
  }
  else  {
    return  false;
  }
plantNeedsWater('Tuesday');

}
console.log(plantNeedsWater('Tuesday'));


//🔸 Arrow Functions
//Arrow functions - remove the need to type out the keyword function every time we create a function.

//example
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};


//exercise
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// ❓how often is "function" replaced with "=>"? or is used interchangebly / up to dev preference?


//🔸 Concise Body Arrow Functions

//Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

//So if we have a function:
const squareNum = (num) => {
  return num * num;
};

//We can refactor the function to:
const squareNum = num => num * num;


//exercise
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

const plantNeedsWater = day => day === 'Wednesday' ? true : false;


//🔸 Review Functions



////////// 🔺 Scope

//🔸 Scope

//Scope defines where variables can be accessed or referenced.


//🔸 Blocks and Scope

//A block is the code found inside a set of curly braces {}

//A block of code could be a function, like this:
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
}

//Observe the block in an if statement:
if (dusk) {
  let color = 'pink';
  console.log(color); // pink
}

//exercise
function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  let city = 'New York City';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

//BOTH skyscraper and city need to be declared in this function so that the return can put together the whole string
//if city was called elsewhere, it would be callig a variable and a function
//"x" + "y" INSTEAD OF "skyscraper = y" + "x"


//🔸 Global Scope  

// Scope - the context in which our variables are declared. 
// Global variables - variables are declared outside of blocks

const color = 'blue';

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue


//exercise
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());


//🔸 Block Scope

// Block scope - When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that a variable has block scope because it is only accessible to the lines of code within that block.

//example of block scope
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // Prints "blue"
};

logSkyColor(); // Prints "blue"
console.log(color); // throws a ReferenceError

//exercise
function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

console.log(logVisibleLightWaves());

console.log(lightWaves);


//🔸 Scope Pollution

//Scope pollution occurs when we have too many variables in the global namespace, or when we reuse variables across different scopes.

//example
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100


//exercise
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
 
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)


//🔸 Practice Good Scoping

//example
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // Prints "pink"
  }
  console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError

//exercise
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  
  // Add if statement here:
    if  (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    return  true;
    console.log(lightWaves)
  }
  else  {
    return  false;
  }
  console.log(lightWaves);
};

logVisibleLightWaves();


//🔸 Review: Scope

// Scope - where variables can be accessed throughout the program, and is determined by where and how they are declared.
// Blocks - statements that exist within curly braces {}.
// Global scope - the context within which variables are accessible to every part of the program.
// Global variables - variables that exist within global scope.
// Block scope - the context within which variables are accessible only within the block they are defined.
// Local variables - variables that exist within block scope.
// Global namespace - the space in our code that contains globally scoped information.
// Scope pollution - when too many variables exist in a namespace or variable names are reused.



////////// 🔺 Arrays

//🔸 Arrays

//example
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

//example
let concepts = ['creating arrays', 'array structures', 'array manipulation'];


//🔸 Create an Array

//example
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

//exercise
const hobbies = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(hobbies)


//🔸 Accessing Elements

//example
const hello = 'Hello World';
console.log(hello[6]);
// Output: W

//exercise
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[3];

console.log(famousSayings[3]);


//🔸 Update Elements

//example
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']


//exercise
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';


//🔸 Arrays with let and const

//variables declared by let can be redefined but const cannot be

//exercise
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
console.log(condiments);
console.log(utensils);

condiments = ['Mayo'];

console.log(condiments);


//🔸 The .length property

//example
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2


//exercise
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);


//🔸 The .push() Method

//example
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 


//exercise
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('chore 3', 'chore 4');

console.log(chores); 


//🔸 The .pop() Method

//example
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2


//exercise
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

const removed = chores.pop();

console.log(chores); 

console.log(removed);

console.log(chores);


//🔸 More Array Methods

// .push() - Adds a string to the end of the array
// .pop() - Removes the last string
// .shift() - Removes the first string
// .unshift() - Adds a string to the beginning of the array
// .join() - Combines all array elements into a single string (can add a separator)
// .slice() - Copies part of the array into a new array (non-mutating)
// .splice() - Removes/replaces/adds elements at a specific index (mutates original)
// .concat() - Combines two arrays into a new one (non-mutating)

//exercise
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');

groceryList.slice(1,4);

console.log(groceryList.slice(1, 4));

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);


//🔸 Arrays and Functions

//example
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']


//exercise
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr) {
  newArr.pop()
}

removeElement(concept);

console.log(concept);


//🔸 Nested Arrays

//example
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2


//exercise
const numberClusters = [[1, 2], [3, 4], [5,6]];

const target = numberClusters[2][1];

console.log(target);


//🔸 Review Arrays


//🔸 Learn JavaScript - Secret Message

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to');

secretMessage.push('Program');

secretMessage[7] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.splice(6, 5, 'know,');

console.log(secretMessage.length);
console.log(secretMessage.join(' '));

// .push() - Adds a string to the end of the array
// .pop() - Removes the last string
// .shift() - Removes the first string
// .unshift() - Adds a string to the beginning of the array
// .join() - Combines all array elements into a single string (can add a separator)
// .slice() - Copies part of the array into a new array (non-mutating)
// .splice() - Removes/replaces/adds elements at a specific index (mutates original)
// .concat() - Combines two arrays into a new one (non-mutating)
// .length - Tells how many items are in the array
// .join() - Turns the array into a string (with optional separator)


////////// 🔺 Loops

//🔸 Loops

//🔸 Repeating Tasks Manually

//exercise
const vacationSpots = ['place 1', 'place 2', 'place 3'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//exercise 2
const vacationSpots = ['place 1', 'place 2', 'place 3'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(vacationSpots[i]);
}


//🔸 The For Loop

//example
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

// The initialization is let counter = 0, so the loop will start counting at 0.
// The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
// The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration, counter will equal 0. For the second iteration, it will equal 1, and so on.
// The code block within the curly braces, console.log(counter), will continue to execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.

//exercise
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}


//🔸 Looping in Reverse

//example
for (let counter = 0; counter < 4; counter++){
  console.log(counter);
}

//exercise
for (let counter = 3; counter >= 0; counter -= 1) {
  console.log(counter);
}


//🔸 Looping through Arrays

//example
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

//exercise
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}


//🔸 Nested Loops

//example
const arrayA = [6, 19, 20];
const arrayB = [19, 81, 2];
for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayB.length; j++) {
    if (arrayA[i] === arrayB[j]) {
      console.log('Both arrays have the number: ' + arrayB[j]);
    }
  }
}

//exercise
const bobsFollowers = ['timmy','oliver','clove','gertrude'];
const tinasFollowers = ['timmy','clove','fern',];
const mutualFollowers = [];
// bobsFollowers has 4 names.
// tinasFollowers has 3 names.
// mutualFollowers is empty for now — it will store the overlapping names.

for (let i = 0; i < bobsFollowers.length; i++) {
  // This loop runs once for each person in Bob’s follower list.
  // i will go from 0 to 3, referring to:
  // bobsFollowers[0] → 'timmy'
  // bobsFollowers[1] → 'oliver'
  // bobsFollowers[2] → 'clove'
  // bobsFollowers[3] → 'gertrude'

  for (let j = 0; j < tinasFollowers.length; j++) {
    // For each person in Bob’s list, this loop checks everyone in Tina’s list.
    // j goes from 0 to 2:
    // tinasFollowers[0] → 'timmy'
    // tinasFollowers[1] → 'clove'
    // tinasFollowers[2] → 'fern'

    if (bobsFollowers[i] === tinasFollowers[j]) {
      // This compares one name from Bob’s list to one name from Tina’s list.
      // If they are equal, then:
      // The name is a mutual follower.
     
      console.log('Mutual follower found: ' + bobsFollowers[i]); 
      mutualFollowers.push(bobsFollowers[i]);
      // This prints the name to the console, e.g., “Mutual follower found: timmy”
      // Then it adds that name to the mutualFollowers array.
    }
  }
}


//🔸 The While Loop

//example
  // A for loop that prints 1, 2, and 3
  for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }

  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }

//exercise
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = [];

while (currentCard !== 'spade') {
  //!== means does not equal
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


//🔸 Do...While Statements

//example
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);


//example 2
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

//exercise

const cupsOfSugarNeeded = 8;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);


//🔸 The break Keyword

//example
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

//exercise
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === 'Notorious B.I.G.') {
    console.log(rapperArray[i]);
     break;
  }
  else {console.log(rapperArray[i] + "And if you don't know, now you know.");}
}









////////// 🔺 

//🔸 

// ❓