//Bottom of Game - Collected Rocks

function renderCollection(discovered, cards) {
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

  // Update counter text
  const countDisplay = document.getElementById("collection-count");
  countDisplay.textContent = `${discovered.length} out of ${cards.length} rocks found`;

  // Attach click event to each discovered rock card for popup
  document.querySelectorAll(".rock-preview").forEach(preview => {
    preview.addEventListener("click", function (e) {
      e.preventDefault();
      const cardNumber = this.dataset.number;
      const card = cards.find(c => c.number === cardNumber);
      showRockModal(card);
    });
  });
}

function showRockModal(card) {
  const modal = document.getElementById("rock-modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
    <div class="rock-cards found-rock">
      <img src="${card.imageUrl}" alt="${card.name}" class="rock-image" />
      <div class="name rock-name">${card.number}<br><br>${card.name}</div>
      <div class="rockType"><strong>Type:</strong> ${card.rockType}</div>
      <div class="rockFact"><strong>Rock Fact:</strong> ${card.rockFact}</div>
      <div class="rarityLevel rarity-${card.rarityLevel.toLowerCase()}">${card.rarityLevel}</div>
    </div>
  `;

  modal.classList.remove("hidden");

  // Close modal on (x) click
  document.getElementById("close-modal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

  // Close modal on outside click or Esc
  document.addEventListener("click", function (e) {
    if (e.target.id === "rock-modal") {
      document.getElementById("rock-modal").classList.add("hidden");
    }
  });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("rock-modal").classList.add("hidden");
  }
});