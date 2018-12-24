var bet;
var resultsTable;
var initialBet;
var high = 0;
var highRolls =0;
var rolls = 0;
var count = 0;

'use strict';
window.addEventListener('load', function setup() {
  resultsTable = document.getElementById("results");
  count += 1;
  if (count == 0){
    resultsTable.style.visibility = "hidden";
  } else {
    resultsTable.style.visibility = "visible";
  }

  return resultsTable;
});


function checkBet() {
  bet = document.getElementById("bet").value;
  initialBet = bet;
  console.log(bet);
  if(bet >= 1 && bet != 0){
    rolls = play(bet);
    return resultsOutput();
    //todo play
  } else {
    alert("Bet must be greater than zero to play.")
  };
  return initialBet;
};

function play(bet) {
  high = initialBet;
  while (bet > 1) {
    if (roleDice + roleDice == 7) {
      bet += 4.00;
    } else {
      bet -= 1.00;
    }
    rolls += 1;
    if (bet > high) {
      high = bet;
      highRolls = rolls;
    }
  }
  return rolls;
}

function resultsOutput() {
  resultsTable = document.getElementById("results");
  var startingBet = document.getElementById("startingBet");
  var totalRolls = document.getElementById("totalRolls");
  var highestAmount = document.getElementById("highestAmount");
  var rollCountHighest = document.getElementById("rollCountHighest");

  startingBet.innerText = initialBet;
  console.log(initialBet);
  totalRolls.innerText = rolls;
  console.log(rolls);
  highestAmount.innerText = high;
  console.log(high);
  rollCountHighest.innerText = highRolls;
  console.log(highRolls);
}

function roleDice() {
  return Math.floor(Math.random() * 6) + 1;
}
