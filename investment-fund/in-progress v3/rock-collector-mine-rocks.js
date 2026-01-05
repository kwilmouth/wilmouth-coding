//Top of Game - Mine for Rocks

const rarityValues = {
  Common: 1,
  Uncommon: 3,
  Rare: 6,
  Epic: 10,
  Legendary: 15,
  Mythic: 25
};

//update collection
function updateCollectionValue(cardCounts, cards) {
  let duplicateCardsPulled = 0;
  let duplicateEnergyWorth = 0;

  for (const number in cardCounts) {
    const count = cardCounts[number];
    if (count > 1) {
      const duplicates = count - 1;
      const card = cards.find(c => String(c.number) === String(number));
      if (!card) continue;

      duplicateCardsPulled += duplicates;
      duplicateEnergyWorth += duplicates * rarityValues[card.rarityLevel];
    }
  }

  const valueDisplay = document.getElementById("collection-value");
  const cardLabel = duplicateCardsPulled === 1 ? "duplicate card" : "duplicate cards";
  const pointLabel = duplicateEnergyWorth === 1 ? "energy point" : "energy points";

  valueDisplay.textContent =  `${duplicateCardsPulled} ${cardLabel} pulled, worth ${duplicateEnergyWorth} ${pointLabel}`;
}




document.addEventListener('DOMContentLoaded', function () {
  let cardCounts = {};
  let discovered = [];
  let totalRocksMined = 0;
  let gameComplete = false;
  let victoryShown = false;
  let spendableEnergy = 100;

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
          <div class="name rock-name" style="font-family:24px;">${card.number}&nbsp;&nbsp;&nbsp;&nbsp;${card.name}</div>
          <br>
          <img src="${card.imageUrl}" alt="${card.name}" class="rock-image" />
          <div class="rock-details">
          <div class="rockType"><strong>Type:</strong> ${card.rockType}</div>
          <div class="rockFact"><strong>Rock Fact:</strong> ${card.rockFact}</div>
          <div class="rarityLevel rarity-${card.rarityLevel.toLowerCase()}">${card.rarityLevel}</div>
          </div>
        </div>
      </div>
    `;
//     const html = `
//   <div style="text-align: center;">
//     ${isNew ? '<div style="color: #A52740; font-weight: bold; margin-top: 8px;">NEW ROCK! <br></div>' : ''}
//     <div style="font-weight: bold; font-size: 18px; color: #333; margin-bottom: 8px;">
//       You found ${card.name}!
//       <p>&nbsp;</p>
//     </div>
//     <div class="rock-cards found-rock">
//       <img src="${card.imageUrl}" alt="${card.name}" class="rock-image" />
//       <div class="name rock-name">${card.number}<br><br>${card.name}</div>
//       <div class="rockType"><strong>Type:</strong> ${card.rockType}</div>
//       <div class="rockFact"><strong>Rock Fact:</strong> ${card.rockFact}</div>
//       <div class="rarityLevel rarity-${card.rarityLevel.toLowerCase()}">${card.rarityLevel}</div>
//     </div>
//   </div>
// `;

    container.innerHTML = html;
  }


  function mineRock() {
    const totalWeight = cards.reduce((sum, card) => sum + card.chancePercentage, 0);
    const roll = Math.random() * totalWeight;
    totalRocksMined++;

    let cumulative = 0;
    let selectedCard = null;

    if (spendableEnergy < 5) {
      const explore = document.getElementById("discovered-preview");
      explore.innerHTML = `<span style="color: red;">Sell duplicate cards to earn more ⚡ energy points.</span>`;
      return;
    }
    

    spendableEnergy -= 5;
    updateEnergyDisplay();
    

    for (const card of cards) {
      cumulative += card.chancePercentage;
      if (roll <= cumulative) {
        selectedCard = card;
        break;
      }
    }

    if (!selectedCard) return;

    
    cardCounts[selectedCard.number] = (cardCounts[selectedCard.number] || 0) + 1;

    const isNew = cardCounts[selectedCard.number] === 1;
    if (isNew) {
      discovered.push(selectedCard.number);
    }    
    
    updateCollectionValue(cardCounts, cards);
    

  showDiscoveredRock(selectedCard, isNew);
  renderCollection(discovered, cards);

  if (discovered.length === cards.length && !victoryShown) {
    gameComplete = true;
    showVictoryMessage();
    victoryShown = true;
  }
  }


  document.getElementById("sell-duplicates").addEventListener("click", function () {
    let earned = 0;

    for (const number in cardCounts) {
      const count = cardCounts[number];
      if (count > 1) {
        const card = cards.find(c => String(c.number) === String(number));
        const duplicates = count - 1;
        earned += duplicates * rarityValues[card.rarityLevel];

        // Keep only 1 unique when selling duplicates
        cardCounts[number] = 1;
      }
    }
  
    if (earned > 0) {
      spendableEnergy += earned;
      updateEnergyDisplay();
      renderCollection(discovered, cards);

      updateCollectionValue(cardCounts, cards);
  
      alert(`You earned ${earned} energy by selling duplicates!`);
    } else {
      alert("No duplicates to sell.");
    }
  });

  
  function updateEnergyDisplay() {
    document.getElementById("energy-points").textContent = `Energy Points: ⚡ ${spendableEnergy}`;
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
  

  document.getElementById("mine").addEventListener("click", mineRock);

  document.getElementById("reset-game").addEventListener("click", function (e) {
    e.preventDefault();
    discovered = [];
    cardCounts = {}; 
    totalRocksMined = 0;
    gameComplete = false;
    victoryShown = false;
    spendableEnergy = 100;
    mineButton.disabled = false;

    updateCollectionValue(cardCounts, cards);

    showDefaultMessage();
    renderCollection(discovered, cards);
  
    updateCollectionValue(cardCounts, cards);

    updateEnergyDisplay(); // Also restore energy to 100
  });
  

  showDefaultMessage();
  renderCollection(discovered, cards);

  updateEnergyDisplay();
});



