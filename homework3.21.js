var leftDice = document.getElementById('leftDice');
var rightDice = document.getElementById('rightDice');
var button = document.getElementById("rollDiceButton");
var gameStatus = document.getElementById('gameStatus');
var roundNum = document.getElementById('roundNum');
var timestamp = document.getElementById('timestamp');
var startTime = Date.now();

var game = {
  date: new Date(),
  rounds: 0,
  rollDice: function rollDice (){
    this.rounds++;
    var leftDiceRoll = Math.floor((Math.random() * 6) +1);
    var rightDiceRoll = Math.floor((Math.random() * 6) +1);
    leftDice.innerHTML = leftDiceRoll;
    rightDice.innerHTML = rightDiceRoll;
    timestamp.innerHTML = "Game Started " + game.date.getFullYear() + "-" + game.date.getMonth() + "-" + game.date.getDate() + " at " + game.date.getHours() + ":" + game.date.getMinutes() ;
    if ((leftDiceRoll + rightDiceRoll) === 7 || (leftDiceRoll + rightDiceRoll) === 11){
      gameStatus.innerHTML = "Winner!";
      var endTime = Date.now();
      var elapsed = Math.floor((endTime - startTime) / 1000);
      roundNum.innerHTML = "It took you " + this.rounds + " tries and " + elapsed + " seconds!";
      this.rounds = 0;
      startTime = Date.now();
    }
    else{
      gameStatus.innerHTML = "Try Again";
      roundNum.innerHTML = "";
    }
  }
};

button.addEventListener("click", function buttonClick (){
  game.rollDice();
});

// timestamp.innerHTML = "Game Started " + game.date.getFullYear() + "-" + game.date.getMonth() + "-" + game.date.getDate() + " at " + game.date.getHours() + ":" + game.date.getMinutes() ;
