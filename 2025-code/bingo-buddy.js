// ===== GLOBAL SETUP =====
const grid = document.getElementById('bingo-grid');
const messageDisplay = document.getElementById('message-display');
const currentCallDisplay = document.getElementById('current-call');
const lastCallDisplay = document.getElementById('last-call');

const ranges = {
  B: [1, 15],
  I: [16, 30],
  N: [31, 45],
  G: [46, 60],
  O: [61, 75],
};

const allNumbers = [];
let callOrder = [];
let lastCall = null;

// ===== FUNCTIONS =====

//  bingo grid 
function initializeGrid() {
  // BINGO headers
  for (const letter in ranges) {
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = letter;
    grid.appendChild(header);
  }

  // Numbers column by column and not row by row
  for (let row = 0; row < 15; row++) {
    for (const letter in ranges) {
      const [start] = ranges[letter];
      const number = start + row;

      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.value = `${letter}${number}`;
      cell.textContent = number;

      grid.appendChild(cell);
      allNumbers.push(`${letter}${number}`);
    }
  }
}



// Shuffle an array  
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Call the next number
function callNextNumber() {
  if (callOrder.length === 0) {
    messageDisplay.textContent = "No more numbers left to call!";
    return;
  }

  messageDisplay.textContent = "";

  const current = callOrder.pop();
  const currentCell = document.querySelector(`[data-value="${current}"]`);
  if (currentCell) currentCell.classList.add('called');

  lastCallDisplay.textContent = lastCall || '--';
  currentCallDisplay.textContent = current;

  lastCall = current;
}

// Reset the game
function resetGame() {
  callOrder = shuffle([...allNumbers]);
  lastCall = null;
  currentCallDisplay.textContent = '--';
  lastCallDisplay.textContent = '--';
  messageDisplay.textContent = "";

  document.querySelectorAll('.cell').forEach(cell => {
    cell.classList.remove('called');
  });
}

// ===== INITIALIZATION =====
initializeGrid();
resetGame();

// ===== EVENT LISTENERS =====
document.getElementById('next-btn').addEventListener('click', callNextNumber);
document.getElementById('reset-btn').addEventListener('click', resetGame);
