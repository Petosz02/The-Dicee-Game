var randomNumber1 = 5, randomNumber2 = 5;

var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");



var winnerString;
var dicee = document.querySelectorAll("img");

document.getElementById("roll").addEventListener("click", roll);

dicee[0].src = "images/dice" + (randomNumber1 + 1) + ".png";
dicee[1].src = "images/dice" + (randomNumber2 + 1) + ".png";

console.log(randomNumber1 + " " + randomNumber2);
console.log(dice1);


function roll(){
  randomNumber2 = Math.floor( Math.random() * 6);
  randomNumber1 = Math.floor( Math.random() * 6);

  dicee[0].src = "images/dice" + (randomNumber1 + 1) + ".png";
  dicee[1].src = "images/dice" + (randomNumber2 + 1) + ".png";

  if (randomNumber1 > randomNumber2) {
    winnerString = "Player 1 won!";
  } else if( randomNumber1 < randomNumber2){
    winnerString =  "Player 2 won!";
  } else {
    winnerString = "Its a Draw!";
  }

  document.getElementsByTagName("h1")[0].innerHTML = winnerString;
}
