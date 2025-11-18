const seedCost = 3; 

let unplantedSeeds = 10;
let boughtSeeds = 0;
let farmedPotatoes = 0;
let soldPotatoes = 0;
let totalSoldPotatoes = 0;
let earnedcurrency = 0;
let totalcurrency = 0;

let seasonsHarvest = 0;

let highScore = localStorage.getItem('highScore') || 0;

let weekCounter = 1;
const weekDisplay = document.getElementById("week-counter");
weekDisplay.textContent = weekCounter;


const highScoreDisplay = document.getElementById('high-score');
const messageDisplay = document.getElementById('message');
const harvestResults = {
  0: ['Famine! All your crops died.<br>-5 potatoes'],
  1: ['Good Harvest! You grew all your crops. <br>+5 potatoes'],
  2: ['Bountiful Harvest! You doubled your crops. <br>+10 potatoes'],
};

document.getElementById('unplanted-seeds').textContent = unplantedSeeds;
document.getElementById('farmed-potatoes').textContent = farmedPotatoes;
document.getElementById('total-currency').textContent = totalcurrency;
document.getElementById('seasons-harvest').textContent = seasonsHarvest;


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
    document.getElementById('unplanted-seeds').textContent = unplantedSeeds;


    const result = Math.floor(Math.random() * harvestBonus.length);
    const bonus = harvestBonus[result];

    //calculate bonus
    if (bonus === 0) {
      farmedPotatoes = Math.max(farmedPotatoes - 5, 0);
    } else if (bonus === 1) {
      farmedPotatoes += 5;
    } else if (bonus === 2) {
      farmedPotatoes += 10;
    }
    messageDisplay.innerHTML = harvestResults[bonus][0];

    calculateSeasonScore();
    document.getElementById('farmed-potatoes').textContent = farmedPotatoes;

    weekCounter++
    weekDisplay.textContent = weekCounter;
    endGame();
  }

  else if (unplantedSeeds < 5 && weekCounter < 12) {
    messageDisplay.textContent = "You're out of seeds. Buy more to keep planting.";
  }

  else if (weekCounter >= 12) {
    calculateSeasonScore();
    messageDisplay.textContent = `You ended your harvest season with ${seasonsHarvest} potatoes.`;
  }
}

function sellPotato() {
  if (farmedPotatoes >= 1 && weekCounter < 12) {
    soldPotatoes = farmedPotatoes;
    
    //update farmed potato count
    farmedPotatoes = farmedPotatoes - soldPotatoes
    totalSoldPotatoes += soldPotatoes;
    document.getElementById('farmed-potatoes').textContent = farmedPotatoes;

    //each potato earns 3 coin profit
    earnedcurrency = soldPotatoes * 3;

    //update total currency
    totalcurrency = totalcurrency + earnedcurrency;

    calculateSeasonScore();
    messageDisplay.textContent = `You sold ${soldPotatoes} potatoes and earned ${earnedcurrency} coins.`;
    document.getElementById('total-currency').textContent = totalcurrency;

    weekCounter++
    weekDisplay.textContent = weekCounter;
    endGame();
  }

  else if (farmedPotatoes < 1 && weekCounter < 12) {
    messageDisplay.textContent = "You have no potatoes to sell.";
  }
  
  else if (weekCounter >= 12) {
    calculateSeasonScore();
    messageDisplay.textContent = `You ended your harvest season with ${seasonsHarvest} potatoes.`;
  }
}

function buyPotato() {
  if (totalcurrency >= 1 && weekCounter < 12) {
    //buy and pay for seeds
    //each seed costs 3 coins
    boughtSeeds = Math.floor(totalcurrency / seedCost);
    totalcurrency -= boughtSeeds * seedCost;
    document.getElementById('total-currency').textContent = totalcurrency;

    //update unplantedSeeds
    unplantedSeeds = unplantedSeeds + boughtSeeds;
    document.getElementById('unplanted-seeds').textContent = unplantedSeeds;

    calculateSeasonScore();
    messageDisplay.textContent = `You bought ${boughtSeeds} seeds for ${boughtSeeds * seedCost} coins.`;
    endGame();
  }

  else if (totalcurrency < 1){
    messageDisplay.textContent = `Low funds. Grow more potatoes.`;
  }

  else if (weekCounter >= 12) {
    calculateSeasonScore();
    messageDisplay.textContent = `You ended your harvest season with ${seasonsHarvest} potatoes.`;
  }
}

function calculateSeasonScore() {
  seasonsHarvest = totalSoldPotatoes + farmedPotatoes;

  if (seasonsHarvest > highScore) {
    highScore = seasonsHarvest;
    localStorage.setItem('highScore', highScore);
    highScoreDisplay.textContent = highScore;
  }
  
  document.getElementById('seasons-harvest').textContent = seasonsHarvest;
}



document.getElementById('new-game').addEventListener('click', resetGame);

function endGame() {
  const noGrow = unplantedSeeds < 5;
  const noSell = farmedPotatoes <= 0;
  const noBuy = totalcurrency <= 0;
  const seasonOver = weekCounter >= 12;

  if (seasonOver || (noGrow && noSell && noBuy)) {
    calculateSeasonScore();

    document.getElementById('grow').style.display = 'none';
    document.getElementById('buy').style.display = 'none';
    document.getElementById('sell').style.display = 'none';
    document.getElementById('new-game').style.display = 'inline-block';

    messageDisplay.textContent = `You ended your harvest season with ${seasonsHarvest} potatoes.`;
  }
}


function resetGame() {
  calculateSeasonScore();

  messageDisplay.textContent = "Start farming!";

  document.getElementById('grow').style.display = 'inline-block';
  document.getElementById('sell').style.display = 'inline-block';
  document.getElementById('buy').style.display = 'inline-block';

  document.getElementById('grow').disabled = false;
  document.getElementById('sell').disabled = false;
  document.getElementById('buy').disabled = false;

  document.getElementById('new-game').style.display = 'none';

  //reset values for a new game
  unplantedSeeds = 10;
  boughtSeeds = 0;
  farmedPotatoes = 0;
  soldPotatoes = 0;
  totalSoldPotatoes = 0;
  earnedcurrency = 0;
  totalcurrency = 0;
  weekCounter = 1;

  document.getElementById('unplanted-seeds').textContent = unplantedSeeds;
  document.getElementById('farmed-potatoes').textContent = farmedPotatoes;
  document.getElementById('total-currency').textContent = totalcurrency;
  document.getElementById('week-counter').textContent = weekCounter;
}

//reset high score
document.getElementById('reset-score').addEventListener('click', function (e) {
  e.preventDefault();  
  localStorage.removeItem('highScore');
  highScore = 0;
  highScoreDisplay.textContent = highScore;
  messageDisplay.textContent = "High score has been reset.";
});
