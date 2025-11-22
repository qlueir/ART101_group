document.getElementById('background-audio').play();
document.getElementById('background-audio').loop = true;
document.getElementById('background-audio').muted = false;
document.getElementById('background-audio').volume = 0.5;

  const noButton = document.getElementById('no');

  noButton.addEventListener('click', () => {
    window.location.href = '../index.html';
  });

   const dogGif = document.getElementById('dogfloor2gif');

  const sounds = ['dogwoof.mp3', 'dogcry.mp3', 'dogbark.mp3'];

  dogGif.addEventListener('click', () => {
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

    const audio = new Audio(randomSound);
    audio.play();
  });