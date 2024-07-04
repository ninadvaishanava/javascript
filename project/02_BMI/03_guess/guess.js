let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = parseInt(document.querySelector("#guessField").value);
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultPass");

const p = document.createElement("p");

let prevguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (ev) {
    ev.preventDefault();
    validateguess(userInput);
  });
}

function validateguess(userInput) {
  if (isNaN(userInput)) {
    alert("please eneter valid number");
  } else if (userInput < 1) {
    alert("enter no more than 1");
  } else if (userInput > 100) {
    alert("enter no more than 100");
  } else {
    prevguess.push(userInput);
    if (numguess === 11) {
      displayuserInput(userInput);
      displaymessage(`game over.${randomNumber}`);
      endgame();
    } else {
      displayuserInput(userInput);
      check(userInput);
    }
  }
}

function check(userInput) {
  if (userInput === randomNumber) {
    displaymessage(`you guess right`);
    endgame();
  } else if (userInput > randomNumber) {
    displaymessage(`you guess too big number`);
  } else if (userInput < randomNumber) {
    displaymessage(`you guess too small number`);
  }
}

function displayuserInput(userInput) {
  userInput.value = "";
  guessSlot.innerHTML += `${userInput}`;
  numguess++;
  remaining.innerHTML = `${11 - userInput}`;
}

function displaymessage(message) {
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endgame() {}

function start() {}
