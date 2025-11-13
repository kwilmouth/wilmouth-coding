document.addEventListener('DOMContentLoaded', function () {
  const message = document.getElementById('message');
  const showHideHint = document.getElementById('show-hide-hint');
  const userAnswer = document.getElementById('user-answer');
  const guessPhraseButton = document.getElementById('submit-answer');
  const revealAnswerButton = document.getElementById('give-up');
  const nextPhraseLink = document.getElementById('next-phrase');
  const gibberishPhrase = document.getElementById('gibberish-phrase');

  let currentCard = null;

  const tryAgainMessages = [
    "❌ Nope, try again!",
    "❌ Not quite...",
    "❌ Give it another shot!",
    "❌ Almost! Keep going!",
    "❌ You're close... maybe.",
    "❌ Keep guessing!",
    "❌ Swing and a miss!",
    "❌ Not even close.",
  ];

  function cleanString(str) {
    return str
      .toLowerCase()
      .replace(/[^\w\s]|_/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function startNewRound() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    currentCard = cards[randomIndex];

    gibberishPhrase.textContent = currentCard.gibberish;
    message.textContent = '';
    userAnswer.value = '';
    document.getElementById('hint-text').textContent = '';
    document.getElementById('hint-text').style.visibility = 'hidden';
    showHideHint.textContent = 'Show Hint';
  }

  // Start game
  startNewRound();

  // Show/Hide Hint
  showHideHint.addEventListener('click', function (e) {
    e.preventDefault();
    const hintText = document.getElementById('hint-text');

    if (hintText.style.visibility === 'hidden') {
      hintText.textContent = `${currentCard.hint}`;
      hintText.style.visibility = 'visible';
      showHideHint.textContent = 'Hide Hint';
    } else {
      hintText.textContent = '';
      hintText.style.visibility = 'hidden';
      showHideHint.textContent = 'Show Hint';
    }
  });

  // Guess Phrase button
  guessPhraseButton.addEventListener('click', function () {
    const userGuess = cleanString(userAnswer.value);
    const correctAnswer = cleanString(currentCard.answer);

    if (userGuess === correctAnswer) {
      message.textContent = `✅ Correct! ${currentCard.answer}`;
    } else {
      const randomIndex = Math.floor(Math.random() * tryAgainMessages.length);
      message.textContent = tryAgainMessages[randomIndex];
    }
  });

  // Reveal Answer button
  revealAnswerButton.addEventListener('click', function () {
    message.textContent = `💡 The answer was: ${currentCard.answer}`;
  });

  // Next Phrase link
  nextPhraseLink.addEventListener('click', function (e) {
    e.preventDefault();
    startNewRound();
  });
});
