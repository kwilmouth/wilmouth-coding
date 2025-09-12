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

### Exercise 4: Function Parameter Shadowing

```javascript
var message = "Global message";

function processMessage(message) {
    console.log("1:", message);
    
    function formatMessage() {
        var message = "Formatted: " + message;
        console.log("2:", message);
        return message;
    }
    
    console.log("3:", message);
    formatMessage();
    console.log("4:", message);
}

processMessage("Parameter message");
console.log("5:", message);
```

Predict what gets logged, and explain why.

Once you have your prediction, test it by running the snippet!

### Exercise 5: Loop Variable Shadowing

```javascript
var counter = "global";

function runLoop() {
    console.log("Before loop:", counter);
    
    for (var counter = 0; counter < 3; counter++) {
        console.log("In loop:", counter);
    }
    
    console.log("After loop:", counter);
}

runLoop();
console.log("Final:", counter);
```

Predict what gets logged, and explain why.

Once you have your prediction, test it by running the snippet!

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
