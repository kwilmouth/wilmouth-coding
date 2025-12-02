let dialResult = 50;
let day1bAnswer = 0;

window.onload = function () {
fetch('day-1Ainput.json')
  .then(response => response.json())
  .then(data => {
    calculateAnswer1(data);
  })
};

function calculateAnswer1(adventInput) {
  const day1aAnswer = [];

  for (const input of adventInput) {debugger
    const direction = input[0];
    const clicks = Number(input.slice(1));

    if (direction === "R") {
      dialResult = (dialResult + clicks) % 100;
    } else if (direction === "L") {
      dialResult = (dialResult - clicks + 100) % 100;
    }

    if (dialResult === 0) {
      day1aAnswer.push(input); 
    }
  }

  
  

  document.getElementById('day-1a-answer').textContent = 
    day1aAnswer.length > 0 ? day1aAnswer.join(', ') : "No hits";
    
  
  document.getElementById('day-1b-answer').textContent = day1bAnswer;
}
