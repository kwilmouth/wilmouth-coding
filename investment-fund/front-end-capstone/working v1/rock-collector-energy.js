let playerEnergy = 25;

function updateEnergyDisplay() {
  const display = document.getElementById("energy-display");
  if (display) {
    display.textContent = `Energy Points: ${playerEnergy}`;
  }
}

function spendEnergy(amount) {
  playerEnergy -= amount;
  updateEnergyDisplay();
}

function addEnergy(amount) {
  playerEnergy += amount;
  updateEnergyDisplay();
}
