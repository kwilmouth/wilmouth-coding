# JavaScript Practice - Scopes & Arrays

## Scope Exercises

### Exercise 1: Variable Shadowing

```javascript
var name = "Global";

function outer() {
    var name = "Outer";
    
    function inner() {
        var name = "Inner";
        console.log(name);
    }
    
    inner();
    console.log(name);
}

outer();
console.log(name);
```

⭕️ Answer:
<!-- 
Inner
Outer
Global

The variables are stored Global, Outer, Inner, so when called it will be removed Last In Last Out.
This LILO would be Inner, Outer, Global. 
-->


Predict what gets logged, and explain why.

Once you have your prediction, test it by running the snippet!

### Exercise 2: Fix the Scope Issues

The `createCounter` function is intended to log 0, 1, 2, but it has a bug.

Predict what will happen when you run the code, and then run the code as is to test your prediction.

```javascript
function createCounter() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log("Counter: " + i);
        }, 100);
    }
}

createCounter();
```

⭕️ Answer:
<!-- 
function createCounter() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log("Counter: " + i);
        }, 100);
    }
}

createCounter();

the var kept the the value at 3 and printed 3, 3, 3.
changing var to let calculated per loop. the new answer would be 0, 1, 2
-->

Next, fix the `createCounter` function so that it prints out 0, 1, 2 as intended.

### Exercise 3: Mixed Declaration Types

```javascript
let score = 100;

function gameLevel() {
    console.log("A:", score);
    
    if (true) {
        let score = 50;
        console.log("B:", score);
        
        {
            const score = 25;
            console.log("C:", score);
        }
        
        console.log("D:", score);
    }
    
    console.log("E:", score);
}

gameLevel();
console.log("F:", score);
```

Predict what gets logged, and explain why.

Once you have your prediction, test it by running the snippet!

⭕️ Answer:
<!-- 
A: 100 
B: 50 
C: 25 
D: 50
E: 100 
F: 100
-->

### Exercise 4: Function Parameter Shadowing

```javascript
var message = "Global message"; 
// global scope

function processMessage(message) { 
// 'message' is now "Parameter message" (shadows global)
    console.log("1:", message); 
    // logs "1: Parameter message"

    function formatMessage() {
    // declares a new local 'message'
    // "Formatted: " + message → uses the outer (parameter) value
        var message = "Formatted: " + message;
        console.log("2:", message); 
        // logs "2: Formatted: Parameter message"
        return message;
    }

    console.log("3:", message); 
    // still using parameter → logs "3: Parameter message"
    formatMessage();            
    // runs and logs inside formatMessage
    console.log("4:", message); 
    // still parameter → logs "4: Parameter message"
}

processMessage("Parameter message"); 
// run function with parameter
console.log("5:", message); 
// global scope again → logs "5: Global message" because this is now outside the function

```

Predict what gets logged, and explain why.

Once you have your prediction, test it by running the snippet!

⭕️ Answer:
<!-- 
1: Parameter message
2: Formatted: Parameter message
3: Parameter message
4: Parameter message
5: Global message
-->


### Exercise 5: Loop Variable Shadowing

```javascript 1
var counter = "global";
// global variable

function runLoop() {
// 'var counter' is hoisted to the top of this function
// It creates a new local variable named 'counter', shadowing the global one
// At this point, local 'counter' is undefined

    console.log("Before loop:", counter);
    // Logs: undefined (local 'counter' exists, but hasn't been assigned yet)
    
    for (var counter = 0; counter < 3; counter++) {
    // Sets local 'counter' to 0, increments up to 2
        console.log("In loop:", counter);
        // Logs: 0, 1, 2
    }
    
    console.log("After loop:", counter);
    // After loop, local 'counter' is 3
    // Logs: 3
}

runLoop();
console.log("Final:", counter);
// Outside the function, uses the global 'counter' = "global"
// Logs: "global"
```

```javascript 2
var counter = "global";
//variable is "global"

function runLoop() {
//this function is populated but stored until it's called on in runLoop();

    console.log("Before loop:", counter);
    //Before loop: global

    for (var counter = 0; counter < 3; counter++) {

        console.log("In loop:", counter);
        //In loop: 0
        //In loop: 1
        //In loop: 2
    }
    
    console.log("After loop:", counter);
    // After loop: 3
    //this is the same as the last loop number since that's the new variable.
}

runLoop();
//this runs the prevoius function which outputs
console.log("Final:", counter);
//this wouldn't be 3 since the stored function is now empty.
//output goes back to var counter = "global"; so   "Final: global" 
```

Predict what gets logged, and explain why.

Once you have your prediction, test it by running the snippet!

⭕️ Answer:
<!-- 
Before loop: undefined 
// local counter declared, but not initialized yet
In loop: 0
In loop: 1
In loop: 2
After loop: 3 
// loop finishes with local counter = 3
Final: global 
// back in global scope — untouched by runLoop
-->

💡
<!-- 
I'm coding with the assumption that every problem needs an answer, but not considering "undefined" as an answer.
I'm still stuck to linear thinking. I haven't grasped when the code holds a later answer or requests to start from the top again.
-->


### Exercise 6: Button Event Listeners

The `setupButtons` function is adds a click event listener to each HTML element with the selector `'.btn'`.  These event listeners are intended trigger an alert with 'Button # clicked!', where # is the index of the element on the page (i.e., the 1st matching element on the page will trigger an alert with the message 'Button 0 clicked!'), but there is a bug.

Predict what will happen when you run the code, and then run the code as is to test your prediction.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Scope Exercise</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
      }

      .btn {
        display: block;
        margin: 10px 0;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.2s;
      }

      .btn:hover {
        background-color: #0056b3;
      }

      .exercise-info {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 20px;
      }

      .expected-behavior,
      .actual-behavior {
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
      }

      .expected-behavior {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
      }

      .actual-behavior {
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
      }
    </style>
  </head>
  <body>
    <div class="exercise-info">
      <h2>Scope Exercise: Fix the Button Event Handlers</h2>
      <div class="expected-behavior">
        <strong>Expected:</strong> Each button should alert its own number (0, 1, 2, 3, 4)
      </div>
      <p><strong>Your task:</strong> Fix the JavaScript code so each button alerts the correct number when clicked.</p>
    </div>

    <button class="btn">Button 0</button>
    <button class="btn">Button 1</button>
    <button class="btn">Button 2</button>
    <button class="btn">Button 3</button>
    <button class="btn">Button 4</button>
  </body>

  <script>
    function setupButtons() {
      var buttons = document.querySelectorAll(".btn");

      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
          alert("Button " + i + " clicked!");
        });
      }
    }

    setupButtons();
  </script>
</html>
```

Next, fix the `setupButtons` function so that each click on a 'btn' element alerts with the expected message.

### Exercise 7: Array of Functions

The `createMultipliers` function is intended to create an array of functions that each multiply an input number by a constant, but there is a bug.

Predict what will happen when you run the code, and then run the code as is to test your prediction.

```javascript
function createMultipliers() {
    var multipliers = [];
    
    for (var i = 1; i <= 5; i++) {
        multipliers.push(function(num) {
            return num * i;
        });
    }
    
    return multipliers;
}

var funcs = createMultipliers();
console.log(funcs[0](3)); // Should be 3, but logs ?
console.log(funcs[2](3)); // Should be 9, but logs ?
```

Next, fix the `createMultipliers` function so that the output of the logs matches expectations.

### Exercise 8: Async Operations

The `processItems` function is intended to take in an array of items and arrange a set of logs about those items that will be printed out after delays of varying lengths. For example, after 1 second, a log should be written to the console with the message "Processing item 1"; however, there is a bug.

Predict what will happen when you run the code, and then run the code as is to test your prediction.

```javascript
function processItems(items) {
    for (var i = 0; i < items.length; i++) {
        setTimeout(function() {
            console.log("Processing item", items[i]);
        }, i * 1000);
    }
}

processItems(['apple', 'banana', 'cherry', 'date']);
```

Next, fix the `processItems` function so that the output of the logs matches expectations.
