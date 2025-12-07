$(document).ready(function() {

    var exitButton = document.getElementById("backtoelevator");

    exitButton.addEventListener("click", function() {
        window.location.href = "../../index.html";
        //door close sfx
        closeSound.currentTime = 0;
        closeSound.volume = 1;

        closeSound.play().catch(function (err) {
            console.log("AUDIO ERROR:", err);
        });
        
        //fade-out effect
        $("body").addClass("fade-out");

        //wait 1.5 sec, then go to index.html
        setTimeout(function() {
        window.location.href = "index.html";
        }, 1500);

    });
});