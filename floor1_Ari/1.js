let audio = document.getElementById('OceanWaves');
audio.loop = true;
audio.muted = false;
audio.play();
audio.volume = 0.3;

var HTMLcontent = "<div class=\"buttons\"> <a href=\"../endingscreen.html\"><button id=yes> YES </button> </a> <a href=\"../index.html\"><button id=no> NO </button> </a></div>";
 
var dialogues = [
    "...",
    "Welcome.",
    "It's okay, nothing's going to happen to you here.",
    "You're safe.",
    "Stay as long as you'd like.",
    "Just relax and enjoy the sound of the ocean.",
    "Isn't it peaceful?",
    "...",
    "You can decide.",
    "Would you like to stay here?",
    "Is this your floor?",
];

var dialogueBox = document.getElementById("dialogue-box");
var currentLine = 0;

function nextLine() {
    console.log("meow");

    if (currentLine < dialogues.length) {
        console.log("woof");
        dialogueBox.innerHTML = dialogues[currentLine];
        currentLine++;
    } else {
        console.log("uh oh");
        dialogueBox.innerHTML = HTMLcontent;
    }
}

nextLine();

dialogueBox.addEventListener("click", nextLine);

//exit button
var exitButton = document.getElementsByClassName("backtoelevator");

exitButton.addEventListener("click", function() {
    window.location.href = "../index.html?fromFloor=1";
});

