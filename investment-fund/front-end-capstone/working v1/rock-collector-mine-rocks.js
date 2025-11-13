//Top of Game - Mine for Rocks

document.addEventListener('DOMContentLoaded', function () {
  let discovered = [];
  let totalRocksMined = 0;
  let gameComplete = false;
  let victoryShown = false;

  const mineButton = document.getElementById('mine');

  function showDefaultMessage() {
    const container = document.getElementById("discovered-preview");
    container.innerHTML = `<p style="text-align: center;">Explore the cave.</p>`;
  }

  function showDiscoveredRock(card, isNew) {
    const container = document.getElementById("discovered-preview");

    const html = `
      <div style="text-align: center;">
        ${isNew ? '<div style="color: #A52740; font-weight: bold; margin-top: 8px;">NEW ROCK! <br></div>' : ''}
        <div style="font-weight: bold; font-size: 18px; color: #333; margin-bottom: 8px;">
          You found ${card.name}!
          <p>&nbsp;</p>
        </div>
        <div class="rock-cards found-rock">
          <img src="${card.imageUrl}" alt="${card.name}" class="rock-image" />
          <div class="name rock-name">${card.number}<br><br>${card.name}</div>
          <div class="rockType"><strong>Type:</strong> ${card.rockType}</div>
          <div class="rockFact"><strong>Rock Fact:</strong> ${card.rockFact}</div>
          <div class="rarityLevel rarity-${card.rarityLevel.toLowerCase()}">${card.rarityLevel}</div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  function showVictoryMessage() {
    const container = document.getElementById("discovered-preview");
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="font-weight: bold; font-size: 20px; color: #333; margin-bottom: 12px;">
          You found all ${cards.length} rocks!
        </div>
        <div style="font-size: 16px; color: #444;">
          You're a true rock collector.<br>
          <br><em>${totalRocksMined} total rocks mined.</em>
        </div>
      </div>
    `;
    mineButton.disabled = true;
    mineButton.textContent = "All rocks collected!";
  }

  function mineRock() {
    const totalWeight = cards.reduce((sum, card) => sum + card.chancePercentage, 0);
    const roll = Math.random() * totalWeight;
    totalRocksMined++;

    let cumulative = 0;
    let selectedCard = null;

    for (const card of cards) {
      cumulative += card.chancePercentage;
      if (roll <= cumulative) {
        selectedCard = card;
        break;
      }
    }

    if (!selectedCard) return;

    const isNew = !discovered.includes(selectedCard.number);
    if (isNew) {
      discovered.push(selectedCard.number);
    }

    showDiscoveredRock(selectedCard, isNew);
    renderCollection(discovered, cards);

    if (discovered.length === cards.length && !victoryShown) {
      gameComplete = true;
      showVictoryMessage();
      victoryShown = true;
    }
  }

  document.getElementById("mine").addEventListener("click", mineRock);

  document.getElementById("reset-game").addEventListener("click", function (e) {
    e.preventDefault();
    discovered = [];
    totalRocksMined = 0;
    gameComplete = false;
    victoryShown = false;
    mineButton.disabled = false;
    mineButton.textContent = "Mine for Rocks";
    showDefaultMessage();
    renderCollection(discovered, cards);
  });

  showDefaultMessage();
  renderCollection(discovered, cards);
});