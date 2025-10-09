const cards = [
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#1",
    name: "Limestone",
    rockType: "Sedimentary",
    rockFact: "Formed from shells and marine organisms.",
    chancePercentage: 0.20,
    rarityLevel: "Common"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#2",
    name: "Granite",
    rockType: "Igneous",
    rockFact: "Coarse-grained rock used in buildings and sculptures.",
    chancePercentage: 0.15,
    rarityLevel: "Common"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#3",
    name: "Slate",
    rockType: "Metamorphic",
    rockFact: "Splits into smooth sheets; used for tiles and chalkboards.",
    chancePercentage: 0.12,
    rarityLevel: "Uncommon"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#4",
    name: "Obsidian",
    rockType: "Igneous",
    rockFact: "Volcanic glass used by early humans for sharp tools.",
    chancePercentage: 0.12,
    rarityLevel: "Uncommon"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#5",
    name: "Marble",
    rockType: "Metamorphic",
    rockFact: "Formed from limestone; valued for sculpture.",
    chancePercentage: 0.10,
    rarityLevel: "Uncommon"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#6",
    name: "Sandstone",
    rockType: "Sedimentary",
    rockFact: "Made from compacted sand grains.",
    chancePercentage: 0.09,
    rarityLevel: "Rare"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#7",
    name: "Quartz",
    rockType: "Igneous",
    rockFact: "Used in jewelry and electronics.",
    chancePercentage: 0.08,
    rarityLevel: "Rare"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#8",
    name: "Gneiss",
    rockType: "Metamorphic",
    rockFact: "Banded rock formed under extreme pressure.",
    chancePercentage: 0.06,
    rarityLevel: "Epic"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#9",
    name: "Peridotite",
    rockType: "Igneous",
    rockFact: "Dense mantle rock often rich in olivine.",
    chancePercentage: 0.05,
    rarityLevel: "Epic"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#10",
    name: "Bauxite",
    rockType: "Sedimentary",
    rockFact: "Primary source of aluminum.",
    chancePercentage: 0.03,
    rarityLevel: "Legendary"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#11",
    name: "Coal",
    rockType: "Sedimentary",
    rockFact: "Formed from plant remains under high pressure over millions of years.",
    chancePercentage: 0.025,
    rarityLevel: "Mythic"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#12",
    name: "Basalt",
    rockType: "Igneous",
    rockFact: "Dark volcanic rock common in the Earth’s crust.",
    chancePercentage: 0.08,
    rarityLevel: "Rare"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#13",
    name: "Dolomite",
    rockType: "Sedimentary / Metamorphic",
    rockFact: "Contains calcium magnesium carbonate; can form in caves as stalactites.",
    chancePercentage: 0.07,
    rarityLevel: "Rare"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#14",
    name: "Shale",
    rockType: "Sedimentary",
    rockFact: "Fine-grained rock formed from compacted mud and clay.",
    chancePercentage: 0.09,
    rarityLevel: "Rare"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#15",
    name: "Feldspar",
    rockType: "Igneous",
    rockFact: "One of the most abundant minerals in the Earth’s crust.",
    chancePercentage: 0.10,
    rarityLevel: "Uncommon"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#16",
    name: "Mica",
    rockType: "Metamorphic / Igneous",
    rockFact: "Splits easily into thin sheets; used in electronics.",
    chancePercentage: 0.06,
    rarityLevel: "Rare"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#17",
    name: "Quartzite",
    rockType: "Metamorphic",
    rockFact: "Formed when sandstone is subjected to heat and pressure.",
    chancePercentage: 0.05,
    rarityLevel: "Epic"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#18",
    name: "Gabbro",
    rockType: "Igneous",
    rockFact: "Intrusive rock, coarse-grained, from slow cooling magma.",
    chancePercentage: 0.05,
    rarityLevel: "Epic"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#19",
    name: "Chert",
    rockType: "Sedimentary",
    rockFact: "Hard, fine-grained rock composed of microcrystalline quartz.",
    chancePercentage: 0.04,
    rarityLevel: "Legendary"
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lipari-Obsidienne_%285%29.jpg/500px-Lipari-Obsidienne_%285%29.jpg",
    number: "#20",
    name: "Cassiterite",
    rockType: "Tin oxide mineral",
    rockFact: "The primary ore of tin.",
    chancePercentage: 0.03,
    rarityLevel: "Legendary"
  }
];
