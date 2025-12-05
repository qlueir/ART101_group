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
$(document).ready(function () {
    $("#mirror").click(function () {
        $("#image-container").html("<img width='3000' src='images/b4 pt2.jpg'>");
        $("#image-container").fadeIn("slow");
        $("#mirror").fadeOut(400);
        $("#arrow").fadeOut(400);

        let audio = document.getElementById('music');
        audio.loop = true;
        audio.muted = false;
        audio.play();
    });

    // FIX: valid animate syntax
    $("#arrow").animate({ top: "11px", bottom: "20px" });
});


// ---- DICE SCRIPT ----

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice(roll_value) {
    const dice = document.getElementById("cube");

    // Remove old classes
    dice.classList.remove("show-1", "show-2", "show-3", "show-4", "show-5", "show-6");

    // Add new roll class
    dice.classList.add("show-" + roll_value);
}

// CLICK TO ROLL
document.getElementById("cube").onclick = function () {
    const roll_value = getRandomNumber(1, 6);
    rollDice(roll_value);
};

//im making a dice that will portray words instead of numbers, I originally had code that work, but the dice is not spinning anymore. Here is my js code