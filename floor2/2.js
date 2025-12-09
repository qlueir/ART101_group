document.getElementById('background-audio-floor2').play();
document.getElementById('background-audio-floor2').loop = true;
document.getElementById('background-audio-floor2').muted = false;
document.getElementById('background-audio-floor2').volume = 0.3;

var noButton = document.getElementById('no');

noButton.addEventListener('click', function () {
    window.location.href = '../index.html?fromFloor=1';
});

var dogGif = document.getElementById('dogfloor2gif');

var sounds = ['dogwoof.mp3', 'dogcry.mp3', 'dogbark.mp3'];

dogGif.addEventListener('click', function () {
    var randomIndex = Math.floor(Math.random() * sounds.length);
    var randomSound = sounds[randomIndex];

    var audio = new Audio(randomSound);
    audio.play();
});

var yesButton = document.getElementById('yes');

var messageBox = document.getElementById('message-floor2');

yesButton.addEventListener('click', function () {
    messageBox.textContent = "You have decided to stay... enjoy!";
});
messageBox.classList.add('zoom-in');

yesButton.addEventListener('click', function () {
    messageBox.textContent = "You have decided to stay... enjoy!";
    messageBox.classList.add('show');
});
