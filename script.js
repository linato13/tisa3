const flapTop = document.querySelector(".flap.top");
const letter = document.querySelector(".letter");
const audio = document.getElementById("bg-music");

let opened = false;

function openEnvelope() {
  if (opened) return;
  flapTop.style.transform = "rotateX(-180deg)";
  letter.style.top = "0";
  audio.play();
  opened = true;
}
