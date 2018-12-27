var bet;
var results = document.getElementById("results");
var resultsTable;
var initialBet;
var high;
var highRolls = 0;
var rolls = 0;

function checkBet() {
  bet = document.getElementById("bet").value;
  initialBet = bet;
  high = bet;
  //console.log(bet);
  if(bet >= 1 && bet != 0){
    play(bet);
    resultsOutput();
    reset();
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
  resultsTable = document.getElementById("results");
  resultsTable.innerHTML = ('<h1>Results</h1><hr><table id="resultsTable"><tr><td>Starting Bet</td><td>$'+initialBet+'</td></tr><tr><td>Total Rolls Before Going Broke</td><td>'+rolls+'</td></tr><tr><td>Highest Amount Won</td><td>$'+high+'</td></tr><tr><td>Roll Count at Highest Amount Won</td><td>'+highRolls+'</td></tr></table>');
  var alterSubmit = document.getElementById('submitInput');
  alterSubmit.value = ("Play Again");
}

function reset() {
  rolls = 0;
  high = 0;
  highRolls = 0;
}

function roleDice() {
  return (Math.floor(Math.random() * 6) + 1);
}
