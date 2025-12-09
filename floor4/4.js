const slug = document.getElementById("slug");
const sound = document.getElementById("scary-sound");
const backBtn = document.getElementById("back");

let scale = 1;
const maxScale = 3; // limit so slug doesn’t grow forever

slug.addEventListener("click", () => {
  if (scale < maxScale) {
    scale += 0.3; // grow bigger each click
    slug.style.transform = `translateX(-50%) scale(${scale})`;
  }
  sound.currentTime = 0; // restart sound each click
  sound.play();
});

backBtn.addEventListener("click", () => {
  window.location.href = "../index.html"; // back to elevator hub
});