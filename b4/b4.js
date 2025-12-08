$(document).ready(function () {
    $("#mirror").click(function () {
        $("#image-container").html("<img width='3000' src='images/b4 pt2.jpg'>");
        $("#image-container").fadeIn ("slow")
        $("#mirror").fadeOut (400);
        $("#arrow").fadeOut(400);
        $("#cube").fadeIn
        let audio = document.getElementById('music');
        audio.loop = true;
        audio.muted = false;
        audio.play();
    $("#cube").fadeIn(500);
    });

 exitButton.addEventListener("click", function() {
    window.location.href = "../../index.html";
});
  
//var roller = getRandomNumber(1, 6);
function rollDice(roll_value) {
  const dice = [...document.querySelectorAll(".die-list")];
    $("#dicetext").fadeIn(500);

  dice.forEach((die) => {
    toggleClasses(die);

    die.dataset.roll = roll_value;
  });
}
function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//document.getElementById("roll-button").addEventListener("click", rollDice);
const diceresult=["Reincarnate base on your Karma", "Relive the same life over and over", "Say goodybye to loved one's one last time", "Stay in Purgatory", "You made it to heaven","You're a Ghost"];

var dice = document.getElementById("cube");
dice.onclick = function () {
  var roll_value = getRandomNumber(1, 6);
  rollDice(roll_value);
  $("#dicetext").html(diceresult[roll_value]);

};


});


//im making a dice that will portray words instead of numbers, I originally had code that work, but the dice is not spinning anymore. Here is my js code