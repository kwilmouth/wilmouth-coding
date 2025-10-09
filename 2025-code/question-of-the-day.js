document.addEventListener('DOMContentLoaded', function () {
  const lastQuestionButton = document.getElementById('last-question');
  const nextQuestionButton = document.getElementById('next-question');
  const number = document.getElementById('number');
  const question = document.getElementById('question');

  let history = [];
  let historyIndex = -1;
  let currentCard = null;


  function startNewRound() {
    const randomIndex = Math.floor(Math.random() * renumberedCards.length);
    currentCard = renumberedCards[randomIndex];

    number.textContent = "#" + currentCard.number;
    question.textContent = currentCard.question;
  }

  // Start game
  startNewRound();


  // Start game
  function startNewRound() {
    const randomIndex = Math.floor(Math.random() * renumberedCards.length);
    currentCard = renumberedCards[randomIndex];
  
    // Push new index and update historyIndex
    history.push(randomIndex);
    historyIndex = history.length - 1;
  
    number.textContent = "Question #" + currentCard.number;
    question.textContent = currentCard.question;
  }

  // Previous question
  lastQuestionButton.addEventListener('click', function (e) {
    e.preventDefault();
  
    if (historyIndex > 0) {
      historyIndex--;
      const previousIndex = history[historyIndex];
      currentCard = renumberedCards[previousIndex];
  
      number.textContent = "Question #" + currentCard.number;
      question.textContent = currentCard.question;
    }
  });
  
  // Next question
  nextQuestionButton.addEventListener('click', function (e) {
    e.preventDefault();
    startNewRound();
  });
});
