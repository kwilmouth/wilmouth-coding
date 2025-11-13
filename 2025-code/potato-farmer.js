let seasonsHarvest = 0;

let unplantedSeeds = 10;
let boughtSeeds = 0;
let farmedPotatoes = 0;
let soldPotatoes = 0;
let earnedcurrency = 0
let totalcurrency = 0

let highScore = localStorage.getItem('highScore') || 0;

let weekCounter = 1;
const weekDisplay = document.getElementById("week-counter");
weekDisplay.textContent = weekCounter;




const highScoreDisplay = document.getElementById('high-score');
const messageDisplay = document.getElementById('message');
const harvestResults = {
  0: ['Famine! All your crops died.'],
  1: ['Good Harvest! You grew all your potatoes'],
  2: ['Bountiful Harvest! You doubled your potatoes.'],
};

document.getElementById('grow').addEventListener('click', growPotato);
document.getElementById('sell').addEventListener('click', sellPotato);
document.getElementById('buy').addEventListener('click', buyPotato);


highScoreDisplay.textContent = highScore;
messageDisplay.textContent = "Start farming!";


function growPotato() {
  //grow 5 seeds into potatoes
  const harvestBonus = [0, 1, 2,];

  if (unplantedSeeds >= 5 && weekCounter < 12){
    unplantedSeeds = unplantedSeeds - 5;

    const result = Math.floor(Math.random() * harvestBonus.length);
    const bonus = harvestBonus[result];
    farmedPotatoes = 5 * bonus;
    messageDisplay.textContent = harvestResults[bonus][0];

    farmedPotatoes = 5 * harvestBonus[Math.floor(Math.random())];

    weekCounter++
    weekDisplay.textContent = weekCounter;
  }

  else if (unplantedSeeds < 5 && weekCounter < 12) {
    messageDisplay.textContent = "You're out of seeds. Buy more to keep planting.";
  }

  else if (weekCounter >= 12) {
    messageDisplay.textContent = `You ended your harvest season with ${farmedPotatoes} potatoes and ${totalcurrency} coins.`;
  }
}

function sellPotato() {
  if (farmedPotatoes >= 1 && weekCounter < 12) {
    soldPotatoes = farmedPotatoes;
    messageDisplay.textContent = `You sold ${soldPotatoes} potatoes and earned ${earnedcurrency}.`;

    //update farmed potato count
    farmedPotatoes = farmedPotatoes - soldPotatoes

    //each potato earns 2 coin profit
    earnedcurrency = soldPotatoes * 2;

    //update total currency
    totalcurrency = totalcurrency + earnedcurrency;

    weekCounter++
    weekDisplay.textContent = weekCounter;
  }

  else if (farmedPotatoes < 1 && weekCounter < 12) {
    messageDisplay.textContent = "You have no potatoes to sell.";
  }
  
  else if (weekCounter >= 12) {
    messageDisplay.textContent = `You ended your harvest season with ${farmedPotatoes} potatoes and ${totalcurrency} coins.`;
  }
}

function buyPotato() {
  if (totalcurrency >= 1 && weekCounter < 12) {
    messageDisplay.textContent = `You bought ${boughtSeeds} seeds for ${boughtSeeds} coins.`;

    //buy and pay for seeds
    boughtSeeds = totalcurrency / 1;
    totalcurrency = totalcurrency - boughtSeeds;

    //update unplantedSeeds
    unplantedSeeds = unplantedSeeds + boughtSeeds;
  }

  else if (totalcurrency < 1){
    messageDisplay.textContent = `Low funds. Grow more potatoes.`;
  }

  else if (weekCounter >= 12) {
    messageDisplay.textContent = `You ended your harvest season with ${farmedPotatoes} potatoes and ${totalcurrency} coins.`;
  }
  
}



function endGame() {
  document.getElementById('grow').style.display = 'none';
  document.getElementById('buy').style.display = 'none';
  document.getElementById('sell').style.display = 'none';
  document.getElementById('new-game').style.display = 'inline-block';
}


document.getElementById('new-game').addEventListener('click', resetGame);

function resetGame() {
  seasonsHarvest = 0;
  weightDisplay.textContent = seasonsHarvest;
  messageDisplay.textContent = "Start farming!";
  
  document.getElementById('grow').style.display = 'inline-block';
  document.getElementById('sell').style.display = 'inline-block';
  document.getElementById('buy').style.display = 'inline-block';

  document.getElementById('grow').disabled = false;
  document.getElementById('sell').disabled = false;
  document.getElementById('buy').disabled = false;

  document.getElementById('new-game').style.display = 'none';
}


document.getElementById('reset-score').addEventListener('click', function (e) {
  e.preventDefault();  
  localStorage.removeItem('highScore');
  highScore = 0;
  highScoreDisplay.textContent = highScore;
  messageDisplay.textContent = "High score has been reset.";
});





