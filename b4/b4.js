$(document).ready(function () {
    $("#mirror").click(function () {
        $("#image-container").html("<img width='3000' src='images/b4 pt2.jpg'>");
        $("#image-container").fadeIn ("slow")
        $("#mirror").fadeOut (400);
        $("#arrow").fadeOut(400);
        let audio = document.getElementById('music');
        audio.loop = true;
        audio.muted = false;
        audio.play();

    });
});
//
//var roller = getRandomNumber(1, 6);
function rollDice(roll_value) {
  const dice = [...document.querySelectorAll(".die-list")];

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
var dice = document.getElementById("cube");
dice.onclick = function () {
  var roll_value = getRandomNumber(1, 6);
  rollDice(roll_value);
  
};



$("#arrow").animate ({top: '11px'}); ({bottom: '20px'})



