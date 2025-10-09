document.addEventListener('DOMContentLoaded', function () {
  // Track discovered cards
  let discovered = [];
  let gameComplete = false;
  let totalRocksMined = 0;
  let victoryShown = false;


  // Button reference
  const mineButton = document.getElementById('mine');

  // Show the default welcome message
  function showDefaultMessage() {
    const container = document.getElementById("discovered-preview");
    container.innerHTML = `<p style="text-align: center;">Explore the cave.</p>`;
  }

  // Show the rock you just discovered
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

  // 🎯 Mine Rock button
  function mineRock() {
    // Weighted random selection based on chancePercentage
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

    // Add to discovered only if new
    const isNew = !discovered.includes(selectedCard.number);
    if (isNew) {
      discovered.push(selectedCard.number);
    }

    console.log("You found:", discovered);

    // Re-render collection and preview
    renderCollection();
    showDiscoveredRock(selectedCard, isNew);

    // Check for win condition
    if (discovered.length === cards.length) {
      gameComplete = true;
      showVictoryMessage();
    }
  }

  // 🧱 Update the rock collection grid
  function renderCollection() {
    const container = document.querySelector(".rock-row");
    container.innerHTML = ""; // Clear previous
  
    cards.forEach(card => {
      const isDiscovered = discovered.includes(card.number);
  
      const cardHTML = isDiscovered
        ? `
          <a href="#" class="rock-preview" data-number="${card.number}">
            <div class="rock-cards">
              <img src="${card.imageUrl}" alt="${card.name}" class="rock-image" />
              <div class="name rock-name">
                ${card.number}<br><br>${card.name}
              </div>
            </div>
          </a>
        `
        : `
          <div class="rock-cards undiscovered">
            <div class="name"><br><br> ???</div>
          </div>
        `;
  
      container.insertAdjacentHTML("beforeend", cardHTML);
    });

    // Attach click event to discovered cards
    document.querySelectorAll(".rock-preview").forEach(preview => {
      preview.addEventListener("click", function (e) {
        e.preventDefault();
        const cardNumber = this.dataset.number;
        const card = cards.find(c => c.number === cardNumber);
        showRockModal(card);
      });
    });
  
    // 👇 Update counter text
    const countDisplay = document.getElementById("collection-count");
    countDisplay.textContent = `${discovered.length} out of ${cards.length} rocks found`;
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



  function showRockModal(card) {
    const modal = document.getElementById("rock-modal");
    const modalBody = document.getElementById("modal-body");
  
    modalBody.innerHTML = `
      <img src="${card.imageUrl}" alt="${card.name}">
      <h3>${card.number} – ${card.name}</h3>
      <p><br><strong>Type:</strong> ${card.rockType}</p>
      <p><strong>Rock Fact:</strong> ${card.rockFact}</p>
      <p class="rarity-${card.rarityLevel.toLowerCase()}">${card.rarityLevel}</p>
    `;
  
    modal.classList.remove("hidden");
  }

  
  // Close modal on click
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("close") || e.target.id === "rock-modal") {
      document.getElementById("rock-modal").classList.add("hidden");
    }
  });

  // Close modal with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.getElementById("rock-modal").classList.add("hidden");
    }
  });
  
  
  
  // Reset Game Handler
  document.getElementById("reset-game").addEventListener("click", function (e) {
    e.preventDefault();

    // Reset variables
    discovered = [];
    totalRocksMined = 0;
    gameComplete = false;
    mineButton.disabled = false;
    mineButton.textContent = "Mine for Rocks";

    // Rerender everything
    renderCollection();
    showDefaultMessage();
  });


  // 🎮 Setup event listeners
  mineButton.addEventListener("click", mineRock);

  // 🏁 Initial render on page load
  renderCollection();
  showDefaultMessage();
});
