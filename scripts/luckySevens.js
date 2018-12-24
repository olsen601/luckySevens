var bet = 0;
var results = document.getElementById("results");
var resultsTable;
var initialBet = 0;
var high = 0;
var highRolls = 0;
var rolls = 0;
var count = 0;


/*'use strict';
window.addEventListener('load', function setup() {
  results = document.getElementById("results");
  if (count == 0){
    results.style.visibility = "hidden";
  } else {
    results.style.visibility = "visible";
    return
  }
  count += 1;
});*/
//preventDefault disables visibility since it will no longer be loading when the form is submitted

function checkBet() {
  bet = document.getElementById("bet").value;
  initialBet = bet;
  high = bet;
  console.log(bet);
  if(bet >= 1 && bet != 0){
    play(bet);
    resultsOutput();
    //todo play
  } else {
    alert("Bet must be greater than zero to play.")
  };
};

function play(bet) {
  while (bet > 1) {
    if ((roleDice() + roleDice()) == 7) {
      bet += 4.00;
      rolls += 1;
    } else {
      bet -= 1.00;
      rolls += 1;
    };
    if (bet > high) {
      high = bet;
      highRolls = rolls;
    };
  };
  return
};

function resultsOutput() {
  resultsTable = document.getElementById("resultsTable");
  /*var startingBet = document.getElementById("startingBet");
  var totalRolls = document.getElementById("totalRolls");
  var highestAmount = document.getElementById("highestAmount");
  var rollCountHighest = document.getElementById("rollCountHighest");*/

  var rowOne = resultsTable.rows[0].cells;
  rowOne[1].innerHTML = ("<p>$"+initialBet+"</p>");
  console.log(initialBet);
  var rowTwo = resultsTable.rows[1].cells;
  rowTwo[1].innerHTML = ("<p>"+rolls+"</p>");
  console.log(rolls);
  var rowThree = resultsTable.rows[2].cells;
  rowThree[1].innerHTML = ("<p>$"+high+"</p>");
  console.log(high);
  var rowFour = resultsTable.rows[3].cells;
  rowFour[1].innerHTML = ("<p>"+highRolls+"</p>");
  console.log(highRolls);
  //alter to for loop based on row and cell with and array of the values
}

function roleDice() {
  return Math.floor(Math.random() * 6) + 1;
}
