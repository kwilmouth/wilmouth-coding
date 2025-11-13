const cards = [
  {
    gibberish: "Abe Odd Hull Luck Oak",
    answer: "A bottle of Coke",
    hint: "drink",
  },
  {
    gibberish: "Ace Lip Puff That Hung",
    answer: "A slip of the tongue",
    hint: "idiom",
  },
  {
    gibberish: "Ace Tray Taste Who Dent",
    answer: "A straight A student",
    hint: "school",
  },
  {
    gibberish: "Aid Are Crank Loud",
    answer: "A dark rain cloud",
    hint: "weather",
  },
  {
    gibberish: "Bat Tree Snot Ink Looted",
    answer: "Batteries not included",
    hint: "product label",
  },
  {
    gibberish: "Canoe Key Pass Egret",
    answer: "Can you keep a secret?",
    hint: "question",
  },
  {
    gibberish: "Cohen Peas",
    answer: "Go in peace",
    hint: "farewell",
  },
  {
    gibberish: "Cry Cub Hook",
    answer: "Crack a book",
    hint: "school",
  },
  {
    gibberish: "Dawn dude rugs",
    answer: "Don't do drugs",
    hint: "PSA / anti-drug",
  },
  {
    gibberish: "Delete Elmer Made",
    answer: "The Little Mermaid",
    hint: "Disney movie",
  },
  {
    gibberish: "Ache Who Gulls Urge",
    answer: "A Google search",
    hint: "internet",
  },
  {
    gibberish: "Ease Owner Whole",
    answer: "He's on a roll",
    hint: "idiom",
  },
  {
    gibberish: "Freeze Age Hal Leak Hood Fell Owe",
    answer: "For he's a jolly good fellow",
    hint: "celebration song",
  },
  {
    gibberish: "Fur Chin Ollie Foil",
    answer: "Virgin olive oil",
    hint: "cooking",
  },
  {
    gibberish: "Dean edge van pyre",
    answer: "Teenage vampire",
    hint: "movie phrase",
  },
  {
    gibberish: "Hide Hen Tickled Wins",
    answer: "Identical twins",
    hint: "siblings",
  },
  {
    gibberish: "Hits Depot Lease",
    answer: "It's the police",
    hint: "urgent phrase",
  },
  {
    gibberish: "Hype People Earth Duh Hey",
    answer: "Happy Birthday",
    hint: "celebration",
  },
  {
    gibberish: "Ice Mail Ask Hunk",
    answer: "I smell a skunk",
    hint: "odor",
  },
  {
    gibberish: "Isle Of View",
    answer: "I love you",
    hint: "romantic",
  },
  {
    gibberish: "It Chief Heat",
    answer: "Itchy feet",
    hint: "irritation",
  },
  {
    gibberish: "Jog Clay Die Scream",
    answer: "Chocolate ice cream",
    hint: "dessert",
  },
  {
    gibberish: "Kitten Scene Gulf Aisle",
    answer: "Get in single file",
    hint: "line up",
  },
  {
    gibberish: "Know Ozark",
    answer: "Noah's Ark",
    hint: "biblical boat",
  },
  {
    gibberish: "Ladle Rat Rotten Hut",
    answer: "Little Red Riding Hood",
    hint: "fairy tale",
  },
  {
    gibberish: "Law Duff There Inks",
    answer: "Lord of the Rings",
    hint: "fantasy movie",
  },
  {
    gibberish: "Mare Eek Ate Danish Lee Hole Sin",
    answer: "Mary-Kate and Ashley Olsen",
    hint: "celebrity twins",
  },
  {
    gibberish: "Moe's Art",
    answer: "Mozart",
    hint: "classical composer",
  },
  {
    gibberish: "My Kojak Sun",
    answer: "Michael Jackson",
    hint: "pop star",
  },
  {
    gibberish: "Pea Sank White",
    answer: "Peace and quiet",
    hint: "tranquility",
  },
  {
    gibberish: "Pie Rate Softy Care Hip Been",
    answer: "Pirates of the Caribbean",
    hint: "adventure movie",
  },
  {
    gibberish: "Pier Steers",
    answer: "Pierced ears",
    hint: "jewelry",
  },
  {
    gibberish: "Rim Him Birth Owl Limo",
    answer: "Remember The Alamo",
    hint: "historical phrase",
  },
  {
    gibberish: "Sand Tack Laws",
    answer: "Santa Claus",
    hint: "Christmas figure",
  },
  {
    gibberish: "Old Limp Picks",
    answer: "Olympics",
    hint: "global sports event",
  },
  {
    gibberish: "Thick awe loved hoot he",
    answer: "The call of duty",
    hint: "video game",
  },
  {
    gibberish: "Thick Hull Foam Heck Sicko",
    answer: "The Gulf of Mexico",
    hint: "geography",
  },
  {
    gibberish: "Up Hair Hush Ooz",
    answer: "A Pair Of Shoes",
    hint: "footwear",
  },
  {
    gibberish: "We Shy Worth Hare",
    answer: "Wish I was there",
    hint: "greeting card phrase",
  },
  {
    gibberish: "Went Hurt Hymn Pick Aims",
    answer: "Winter Olympic Games",
    hint: "global sports event",
  },
  {
    gibberish: "Wheel Yum Air Ream He",
    answer: "Will You Marry Me",
    hint: "proposal phrase",
  },
  {
    gibberish: "Wok Lie Canny Chip Shun",
    answer: "Walk like an Egyptian",
    hint: "80s song by The Bangles",
  },
  {
    gibberish: "Yell Hope Hey Jess",
    answer: "Yellow Pages",
    hint: "phonebook",
  },
  {
    gibberish: "Ape Haul Oath Hurt Dean",
    answer: "Apollo Thirteen",
    hint: "NASA mission",
  },
  {
    gibberish: "Zola Reek Lips",
    answer: "Solar Eclipse",
    hint: "space phenomenon",
  },
  {
    gibberish: "My Cull Chore Den",
    answer: "Michael Jordan",
    hint: "basketball legend",
  },
  {
    gibberish: "Sell Your Laugh Hone",
    answer: "Cellular Phone",
    hint: "mobile device",
  },
  {
    gibberish: "Made Divorce Pea Whiff Ewe",
    answer: "May The Force Be With You",
    hint: "Star Wars quote",
  },
  {
    gibberish: "Four Ghetto Fur",
    answer: "Fork It Over",
    hint: "hand it to me",
  },
  {
    gibberish: "Eggs Hearse Sized Hay Lee",
    answer: "Exercise Daily",
    hint: "healthy habit",
  },
  {
    gibberish: "Kenya Ear Mean How",
    answer: "Can You Hear Me Now?",
    hint: "phone signal phrase",
  },
  {
    gibberish: "Doll May Shuns",
    answer: "Dalmatians",
    hint: "spotted dogs",
  },
  {
    gibberish: "Lass Twill Ant Taste A Mint",
    answer: "Last Will And Testament",
    hint: "legal document",
  },
  {
    gibberish: "Shook Hurt Hiss Scum",
    answer: "Sugarless Gum",
    hint: "type of chewing gum",
  },
  {
    gibberish: "Thief Armor Indeed Hell",
    answer: "The Farmer In The Dell",
    hint: "nursery rhyme",
  },
  {
    gibberish: "Warren Peas",
    answer: "War And Peace",
    hint: "classic novel",
  },
  {
    gibberish: "Tie Man Dug Hen",
    answer: "Time And Again",
    hint: "repeatedly",
  },
  {
    gibberish: "Freeze Age Hal Leak Hood Fell Owe",
    answer: "For He's A Jolly Good Fellow",
    hint: "celebratory song",
  },
  {
    gibberish: "Abe Lesson Indy Skies",
    answer: "A Blessing In Disguise",
    hint: "unexpected good outcome",
  },
  {
    gibberish: "Bay Beach Hemp Ooh",
    answer: "Baby Shampoo",
    hint: "gentle hair product",
  },
  {
    gibberish: "Appears Neigh Full",
    answer: "A Pierced Navel",
    hint: "body piercing",
  },
  {
    gibberish: "Come Pew Turf High Russ",
    answer: "Computer Virus",
    hint: "tech issue",
  },
  {
    gibberish: "Chest Jew Wade Aim In It",
    answer: "Just You Wait A Minute",
    hint: "hold on",
  },
  {
    gibberish: "Caress Peak Reamed Hone Huts",
    answer: "Krispy Kreme Doughnuts",
    hint: "sweet treat",
  },
  {
    gibberish: "Yang Keyed Ooh Dealt Andy",
    answer: "Yankee Doodle Dandy",
    hint: "patriotic song",
  },
  {
    gibberish: "Is Bunch Pops Queer Pans",
    answer: "SpongeBob SquarePants",
    hint: "cartoon character",
  },
  {
    gibberish: "Eyed Rink Gay Tour Eight",
    answer: "I Drink Gatorade",
    hint: "sports drink phrase",
  },
  {
    gibberish: "Gasp Earthly Fur End Lee Coast",
    answer: "Casper The Friendly Ghost",
    hint: "cartoon ghost",
  },
  {
    gibberish: "Day Demand War Kink",
    answer: "Dead Man Walking",
    hint: "grim phrase",
  },
  {
    gibberish: "Abe Aura Her She's Chalk Lit",
    answer: "A Bar Of Hershey's Chocolate",
    hint: "candy brand",
  },
  {
    gibberish: "Heart Official Ant Heller Gents",
    answer: "Artificial Intelligence",
    hint: "tech buzzword",
  },
  {
    gibberish: "Soon Knees Hide Hup",
    answer: "Sunny Side Up",
    hint: "how you like your eggs",
  },
  {
    gibberish: "Muff Heater Gold",
    answer: "My Feet Are Cold",
    hint: "winter complaint",
  },
  {
    gibberish: "Says Amy's Treat",
    answer: "Sesame Street",
    hint: "children's TV show",
  },
  {
    gibberish: "Free Quanitty As Quest Shuns",
    answer: "Frequently Asked Questions",
    hint: "FAQ",
  },
  {
    gibberish: "More Fee Slaw",
    answer: "Murphy's Law",
    hint: "anything that can go wrong...",
  },
  {
    gibberish: "These Moe King Hun",
    answer: "The Smoking Gun",
    hint: "incriminating evidence",
  },
  {
    gibberish: "Oz Temp Hours",
    answer: "Austin Powers",
    hint: "groovy spy guy",
  },
  {
    gibberish: "Swede Hans Hour Poke",
    answer: "Sweet And Sour Pork",
    hint: "Chinese food",
  },
  {
    gibberish: "Huff Oral Heave Glow Fur",
    answer: "A Four-Leaf Clover",
    hint: "symbol of good luck",
  },
  {
    gibberish: "Ran Dumb Max Suck Highness",
    answer: "Random Acts Of Kindness",
    hint: "good deeds",
  },
  {
    gibberish: "The Odor Rows Of Felt",
    answer: "Theodore Roosevelt",
    hint: "26th U.S. President",
  },
  {
    gibberish: "Weed Hid Dents Tart Thief Higher",
    answer: "We Didn't Start The Fire",
    hint: "Billy Joel song",
  },
  {
    gibberish: "Lou Quad Hive Cot",
    answer: "Look What I've Got",
    hint: "boastful statement",
  },
  {
    gibberish: "Mack Her Rain Her",
    answer: "Macarena",
    hint: "dance craze"
  },
  {
    gibberish: "State Who Their Height",
    answer: "Stay To The Right",
    hint: "driving rule"
  },
  {
    gibberish: "Damp Obey Floor Eater",
    answer: "Tampa Bay, Florida",
    hint: "U.S. city"
  },
  {
    gibberish: "Sit Jerk Lock",
    answer: "Set Your Clock",
    hint: "daily routine"
  },
  {
    gibberish: "High Dance Eek",
    answer: "Hide And Seek",
    hint: "children's game"
  },
  {
    gibberish: "Whole Imp Pig Aims",
    answer: "Olympic Games",
    hint: "global sports event"
  },
  {
    gibberish: "Tray Sure Aisle Hand",
    answer: "Treasure Island",
    hint: "classic novel"
  },
  {
    gibberish: "Lee On Hard Odie Cap Rio",
    answer: "Leonardo DiCaprio",
    hint: "Hollywood actor"
  },
  {
    gibberish: "Canoes He Wad Ice He",
    answer: "Can You See What I See?",
    hint: "question"
  },
  {
    gibberish: "Eighth Reap Ease Hoot",
    answer: "A Three-Piece Suit",
    hint: "formal wear"
  },
  {
    gibberish: "Mare Itch Prop Owes All",
    answer: "Marriage Proposal",
    hint: "romantic moment"
  },
  {
    gibberish: "These Hound Doff Moo Sick",
    answer: "The Sound Of Music",
    hint: "musical"
  },
  {
    gibberish: "We Knit Train Sip Oars",
    answer: "When It Rains, It Pours",
    hint: "weather saying"
  },
  {
    gibberish: "Manna Cue Her",
    answer: "Manicure",
    hint: "nail care"
  },
  {
    gibberish: "Read Hick Yule Us",
    answer: "Ridiculous",
    hint: "absurd"
  }, 
  {
    gibberish: "Fur Stand Form Host",
    answer: "First And Foremost",
    hint: "Priority phrase"
  },
  {
    gibberish: "Wands Up Pawn Eight I'm",
    answer: "Once Upon A Time",
    hint: "Story starter"
  },
  {
    gibberish: "Sym Bell Has Abe He Sea",
    answer: "Simple As A-B-C",
    hint: "Easy as..."
  },
  {
    gibberish: "Plea Sway Tube Ease Heated",
    answer: "Please Wait To Be Seated",
    hint: "Restaurant sign"
  },
  {
    gibberish: "Inn Tooth Hen Heir",
    answer: "Into Thin Air",
    hint: "Vanished"
  },
  {
    gibberish: "Hoop Side Hid Ditto Ken",
    answer: "Oops I Did It Again",
    hint: "Britney Spears song"
  },
  {
    gibberish: "Rot Into Thick Oar",
    answer: "Rotten To The Core",
    hint: "Corruption idiom"
  },
  {
    gibberish: "Thesis Sawn Who Tomb He",
    answer: "This Is All New To Me",
    hint: "Learning moment"
  },
  {
    gibberish: "Gnu Your Cassidy",
    answer: "New York City",
    hint: "Big Apple"
  },
  {
    gibberish: "Nor Thumb Air Reckon",
    answer: "North American",
    hint: "Continent-related"
  },
  {
    gibberish: "Sadder Dane Height Fee Fur",
    answer: "Saturday Night Fever",
    hint: "Disco film"
  },
  {
    gibberish: "Haystack Up Hank Aches",
    answer: "A Stack Of Pancakes",
    hint: "Breakfast food"
  },
  {
    gibberish: "Peck Nick Table",
    answer: "Picnic Table",
    hint: "Outdoor dining"
  },
  {
    gibberish: "Sioux Punk Rack Hearse",
    answer: "Soup And Crackers",
    hint: "Simple meal"
  },
  {
    gibberish: "Sea Yule Hater",
    answer: "See You Later",
    hint: "parting phrase",
  },
  {
    gibberish: "Fun Ella Eyes Seem",
    answer: "Vanilla Ice Cream",
    hint: "rapper name",
  },
  {
    gibberish: "Why Emcee Hay",
    answer: "YMCA",
    hint: "dance song",
  },
  {
    gibberish: "Theme Are Ink Ore",
    answer: "The Marine Corps",
    hint: "military branch",
  },
  {
    gibberish: "Mar Thus Do Hurt",
    answer: "Martha Stewart",
    hint: "celebrity homemaker",
  },
  {
    gibberish: "May Cuss Suck Jest Chin",
    answer: "Make A Suggestion",
    hint: "offer an idea",
  },
  {
    gibberish: "Par Keens Pace",
    answer: "Parking Space",
    hint: "spot for a car",
  },
  {
    gibberish: "Rome He Owe Hand Jewelry Yet",
    answer: "Romeo And Juliet",
    hint: "Shakespeare play",
  },
  {
    gibberish: "Wide Hidden Chews Haze Hoe",
    answer: "Why Didn't You Say So?",
    hint: "surprised reaction",
  },
  {
    gibberish: "Hit Stoop Add",
    answer: "It's Too Bad",
    hint: "expression of disappointment",
  },
  {
    gibberish: "May Churl Eek Bays Paul",
    answer: "Major League Baseball",
    hint: "professional sports league",
  },
  {
    gibberish: "Wall Come Island Mash Ooze",
    answer: "Walk A Mile In My Shoes",
    hint: "empathy phrase",
  },
  {
    gibberish: "For Dee Hay Towers",
    answer: "48 Hours",
    hint: "crime show",
  },
  {
    gibberish: "Hoe Min Proof Mint",
    answer: "Home Improvement",
    hint: "sitcom",
  },
  {
    gibberish: "Pick Sin Herb Lank Hit",
    answer: "Pigs In A Blanket",
    hint: "wrapped snack",
  },
  {
    gibberish: "Dust Herb Ink Dap Peas",
    answer: "Disturbing The Peace",
    hint: "legal term",
  },
  {
    gibberish: "Ace Heck Hunch Ants",
    answer: "A Second Chance",
    hint: "another opportunity",
  },
  {
    gibberish: "Hype Ledger Legions Tooth Affleck",
    answer: "I Pledge Allegiance To The Flag",
    hint: "patriotic phrase",
  },
  {
    gibberish: "Thief Hearse Late He",
    answer: "The First Lady",
    hint: "presidential spouse",
  },
  {
    gibberish: "Reese Urchin Deep Element",
    answer: "Research And Development",
    hint: "innovation department",
  },
  {
    gibberish: "Say Fit Fray Ray Need Hey",
    answer: "Save It For A Rainy Day",
    hint: "future planning",
  },
  {
    gibberish: "Plea Sleeve Amas Sitch",
    answer: "Please Leave A Message",
    hint: "voicemail request",
  },
  {
    "gibberish": "Own Late Aches Aim Men Hit",
    "answer": "Only Takes A Minute",
    "hint": "Time expression"
  },
  {
    "gibberish": "Were That Sway Ten Cold",
    "answer": "Worth Its Weight In Gold",
    "hint": "Value expression"
  },
  {
    "gibberish": "Ape He Street He",
    "answer": "A Peace Treaty",
    "hint": "Politics / Diplomacy"
  },
  {
    "gibberish": "Hit Snotty Fin Clothes",
    "answer": "It's Not Even Close",
    "hint": "Comparative phrase"
  },
  {
    "gibberish": "Mash Who'll Aces Sun Tide",
    "answer": "My Shoelace Is Untied",
    "hint": "Clothing / Shoes"
  },
  {
    "gibberish": "Plea Center Europe As Ward",
    "answer": "Please Enter Your Password",
    "hint": "Technology / Login"
  },
  {
    "gibberish": "Fooled Forth Halt",
    "answer": "Food For Thought",
    "hint": "Common idiom"
  },
  {
    "gibberish": "Ace Cam Mar Test",
    "answer": "A Scam Artist",
    "hint": "Crime / Deception"
  },
  {
    "gibberish": "Sea Can't Higher Dove Fit",
    "answer": "Sick And Tired Of It",
    "hint": "Emotional state"
  },
  {
    "gibberish": "Mass Turk Hard",
    "answer": "MasterCard",
    "hint": "Brand / Finance"
  },
  {
    "gibberish": "Dock Terse Oar Duhs",
    "answer": "Doctor's Orders",
    "hint": "Medical"
  },
  {
    "gibberish": "Ooozer Fray Duff Deep Pig Pad Woof",
    "answer": "Who's Afraid Of The Big Bad Wolf?",
    "hint": "Fairy tale"
  },
  {
    "gibberish": "Rye Terse Gramp",
    "answer": "Writer's Cramp",
    "hint": "Condition / Writing"
  },
  {
    "gibberish": "Ace Height Force Oar Rise",
    "answer": "A Sight For Sore Eyes",
    "hint": "Expression / Seeing someone"
  },
  {
    "gibberish": "Ditch Chews Haze Hum Thin",
    "answer": "Did You Say Something?",
    "hint": "Question / Listening"
  },
  {
    "gibberish": "Bed Chirp Autumn Doll Her",
    "answer": "Bet Your Bottom Dollar",
    "hint": "Gambling / Confidence"
  },
  {
    "gibberish": "Oar He Oak Hooky",
    "answer": "Oreo Cookie",
    "hint": "Food"
  },
  {
    "gibberish": "Srobe Bury Sink Ream",
    "answer": "Strawberries And Cream",
    "hint": "Food / Dessert"
  }  
];
