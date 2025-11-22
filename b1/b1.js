let audio = document.getElementById('background-audio');
audio.loop = true;
audio.muted = false;
audio.play();
audio.volume = 0.3;


var dialogues = [
    "…",
    "What? You didn’t think this building would have parking?",
    "…",
    "I mean, you have to put your car somewhere, right?",
    "Unless… you don’t have a car…",
    "In which case, why are you here?",
    "There’s not much to see - if I’m being perfectly honest.",
    "Have you been to the other floors yet?",
    "Pretty wacky, huh.",
    "Wow.",
    "You really have been here a long while, haven’t you?",
    "You know none of this is real, right?",
    "Like,",
    "Everything that you have seen or haven't seen yet… it doesn't exist.",
    "…",
    "You know the elevator operator?",
    "The guy standing in the corner who’s taking you to all of these places?",
    "Did ya know his name is “Lobbie”?",
    "Yeah, I know, pretty creative.",
    "…",
    "Seriously, why are you still here?",
    "You honestly don't think this is where you are supposed to spend eternity, do you?",
    "Oh... you don't get it…",
    "I am being serious when I say eternity.",
    "Um…",
    "Not sure how I am supposed to break this to you, but…",
    "You’re kinda… dead.",
    "Yeah, I know this must come as a shock- I’d feel the same way if I were you.",
    "So…",
    "You ok?",
    "I guess there is nothing you can really do about it.",
    "But hey! At least you get to choose how to spend your afterlife!",
    "That's kinda cool!",
    "…right?",
    "…",
    "Are you some sort of parking lot fanatic or something?",
    "I mean- no judgement!",
    "Just seems pretty lonely.",
    "How about you go back and visit ol’ Lobby again?",
    "He doesn’t say much, but he enjoys the company!",
    "(At least, that's what I tell myself)",
    "You deserve better than a parking lot!",
    "Well, bye then!"

];

var dialogueBox = document.getElementById("dialogue-box");
var boop = new Audio("booptext.mp3");
boop.volume = 0.5;
var currentLine = 0;

function nextLine() {
    if (currentLine < dialogues.length) {
        dialogueBox.textContent = dialogues[currentLine];
        boop.currentTime = 0;
        boop.play();
        currentLine++;
    } else {
        dialogueBox.textContent = "End of dialogue.";
    }
}

nextLine();

dialogueBox.addEventListener("click", nextLine);


// tutorial used https://www.youtube.com/watch?v=MiTJnYHX3iA and https://www.w3schools.com/howto/howto_js_typewriter.asp

var exitButton = document.getElementById("exit-button");

exitButton.addEventListener("click", function() {
    window.location.href = "../../index.html";
});
