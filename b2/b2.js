const room = document.querySelector('.room');
const button = document.getElementById('radiationButton');

let pulseOn = false;

button.addEventListener('click', () => {
  pulseOn = !pulseOn;

  if (pulseOn) {
    room.classList.add('pulse');
    button.textContent = "Stop Radiation Pulse";
  } else {
    room.classList.remove('pulse');
    button.textContent = "Toggle Radiation Pulse";
  }
});

// Add glowing pulse effect
const style = document.createElement('style');
style.innerHTML = `
  .pulse {
    animation: radiationPulse 1.6s infinite;
  }

  @keyframes radiationPulse {
    0% { box-shadow: inset 0 0 100px #003300; }
    50% { box-shadow: inset 0 0 200px #00ff00; }
    100% { box-shadow: inset 0 0 100px #003300; }
  }
`;
document.head.appendChild(style);
