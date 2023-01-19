'use strict';

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                                 INITIALISATION                                    //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////

// ----- ////// DOM SELECTORS ////// ------ //

const againBtn = document.querySelector('.btn.again'),
  checkBtn = document.querySelector('.btn.check'),
  guessInput = document.querySelector('input.guess'),
  guessMessage = document.querySelector('p.message'),
  labelScore = document.querySelector('span.score'),
  labelHighscore = document.querySelector('span.highscore'),
  secretNumberDiv = document.querySelector('div.number'),
  root = document.querySelector(':root');

// ----- ////// DATA ////// ------ //

const SCORE_DEFAULT = 500,
  SCORE_STEP = 50,
  MAX_SECRET_NUMBER = 20;

let secretNumber,
  score,
  highscore = 0;

updateScore('reset');
rollSecretNumber();

// ----- ////// EVENT LISTENERS ////// ------ //

againBtn.addEventListener('click', resetGame);
checkBtn.addEventListener('click', checkInput);
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') checkInput();
});

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                                 FUNCTIONS                                         //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////

// ----- ////// DISPLAY MANAGEMENT ////// ------ //

function displayOnMessage(message) {
  guessMessage.innerText = message;
}

function displayOnSecretNumber(value) {
  secretNumberDiv.innerText = value;
}

function displayScores() {
  labelScore.innerText = score;
  labelHighscore.innerText = highscore;
}

function changePageColor(colorName) {
  root.style.setProperty('--activeColor', `var(--color${colorName})`);
}

function displayInputError(display) {
  if (display) {
    guessMessage.style.color = 'var(--colorDefeat)';
    guessInput.style.borderColor = 'var(--colorDefeat)';
  } else {
    guessMessage.style.color = 'var(--colorLight)';
    guessInput.style.borderColor = 'var(--colorLight)';
  }
}

function allowInputs(allow) {
  if (allow) {
    guessInput.removeAttribute('disabled');
    checkBtn.removeAttribute('disabled');
  } else {
    guessInput.setAttribute('disabled', true);
    checkBtn.setAttribute('disabled', true);
  }
}

// ----- ////// NUMBERS MANAGEMENT ////// ------ //

function updateScore(type) {
  switch (type) {
    case 'reset':
      score = SCORE_DEFAULT;
      break;
    case 'decrease':
      score -= SCORE_STEP;
  }
  displayScores();
}

function rollSecretNumber(max) {
  secretNumber = Math.ceil(Math.random() * MAX_SECRET_NUMBER);
}

function updateHighScore() {
  if (score > highscore) {
    highscore = score;
    displayScores();
  }
}

function resetInput() {
  guessInput.value = null;
}

// ----- ////// GAMEPLAY ////// ------ //

function checkInput() {
  displayInputError(false);
  if (guessInput.value === '') {
    displayOnMessage("You didn't enter a number !");
    displayInputError(true);
  } else if (guessInput.value == secretNumber) {
    playerVictory();
  } else {
    updateScore('decrease');
    if (score === 0) {
      playerDefeat();
    } else if (guessInput.value > secretNumber) {
      displayOnMessage(`${guessInput.value} is too high...'`);
      displayOnSecretNumber('↓');
    } else {
      displayOnMessage(`${guessInput.value} is too low...'`);
      displayOnSecretNumber('↑');
    }
    resetInput();
  }
}

function playerVictory() {
  updateHighScore();
  changePageColor('Victory');
  displayOnMessage('You win !');
  displayOnSecretNumber(secretNumber);
}

function playerDefeat() {
  changePageColor('Defeat');
  displayOnMessage('You lost... Try again !');
  allowInputs(false);
  displayOnSecretNumber(secretNumber);
}

function resetGame() {
  rollSecretNumber();
  updateScore('reset');
  displayScores();
  displayOnSecretNumber('?');
  resetInput();
  changePageColor('Dark');
  allowInputs(true);
  displayOnMessage('Start guessing...');
}
