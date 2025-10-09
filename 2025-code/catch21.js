let totalWeight = 0;
let highScore = localStorage.getItem('highScore') || 0;

const weightDisplay = document.getElementById('weight');
const highScoreDisplay = document.getElementById('high-score');
const messageDisplay = document.getElementById('message');
const fishTypes = {
  0: ['a Boot', 'a Tin Can', 'Seaweed'],
  1: ['Bluegill', 'Crappie', 'Perch'],
  3: ['Bass', 'Catfish', 'Trout'],
  5: ['Pike', 'Salmon', 'Giant Carp']
};

document.getElementById('cast').addEventListener('click', castFish);
document.getElementById('dock').addEventListener('click', dock);

highScoreDisplay.textContent = highScore;
messageDisplay.textContent = "Cast your line to start fishing!";

function castFish() {
  const fishWeights = [0, 1, 3, 5,];
  const caughtWeight = fishWeights[Math.floor(Math.random() * fishWeights.length)];
  const fishOptions = fishTypes[caughtWeight];
  const fishName = fishOptions[Math.floor(Math.random() * fishOptions.length)];

  totalWeight += caughtWeight;
  weightDisplay.textContent = totalWeight;

  if (caughtWeight === 0) {
    messageDisplay.textContent = `Oh no! You snagged ${fishName}.`;
  } else {
    messageDisplay.textContent = `You caught a ${caughtWeight} lb ${fishName}!`;
  }

  if (totalWeight >21) {
    messageDisplay.textContent = "Too heavy! You sunk the boat!";
    endGame();
  }
}


function dock() {
  if (totalWeight <= 21 && totalWeight > highScore) {
    highScore = totalWeight;
    localStorage.setItem('highScore', highScore);
    highScoreDisplay.textContent = highScore;
    messageDisplay.textContent = `New high score! You docked safely with ${totalWeight} lbs! `;
  } else {
    messageDisplay.textContent = `You docked with ${totalWeight} lbs.`;
  }
  endGame();
}


function endGame() {
  document.getElementById('cast').style.display = 'none';
  document.getElementById('dock').style.display = 'none';
  document.getElementById('new-game').style.display = 'inline-block';
}


document.getElementById('new-game').addEventListener('click', resetGame);

function resetGame() {
  totalWeight = 0;
  weightDisplay.textContent = totalWeight;
  messageDisplay.textContent = "Cast your line to start fishing!";
  
  document.getElementById('cast').style.display = 'inline-block';
  document.getElementById('dock').style.display = 'inline-block';
  document.getElementById('cast').disabled = false;
  document.getElementById('dock').disabled = false;

  document.getElementById('new-game').style.display = 'none';
}


document.getElementById('reset-score').addEventListener('click', function (e) {
  e.preventDefault();  
  localStorage.removeItem('highScore');
  highScore = 0;
  highScoreDisplay.textContent = highScore;
  messageDisplay.textContent = "High score has been reset.";
});





