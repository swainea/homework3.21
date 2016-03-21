var leftDice = document.getElementById('leftDice');
var rightDice = document.getElementById('rightDice');
var button = document.getElementById("rollDiceButton");
var gameStatus = document.getElementById('gameStatus');
var rounds = document.getElementById('gameStatus');

var game = {
  startTime: 
  rounds: 0,
  rollDice: function rollDice (){
    this.rounds++;
    console.log(this.rounds);
    var leftDiceRoll = Math.floor((Math.random() * 6) +1);
    var rightDiceRoll = Math.floor((Math.random() * 6) +1);
    leftDice.innerHTML = leftDiceRoll;
    rightDice.innerHTML = rightDiceRoll;

    console.log(leftDiceRoll + rightDiceRoll);
    if ((leftDiceRoll + rightDiceRoll) === 7 || (leftDiceRoll + rightDiceRoll) === 11){
      gameStatus.innerHTML = "Winner! (It took you " + this.rounds + " tries and something.something seconds!";
      this.rounds = 0;

    }
    else{
      gameStatus.innerHTML = "Try Again";

    }
  }
};

console.log(game.startTime);
button.addEventListener("click", function buttonClick (){
  game.rollDice();
});




// var leftDice = Math.floor((Math.random() * 6) +1);
