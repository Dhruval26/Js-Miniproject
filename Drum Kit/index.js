function removeTransition(e) {
  // console.log(e.propertyName);
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
}

function soundPlay(e) {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; // In case of no audio

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

let key = document.querySelectorAll(".key");
key.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", soundPlay);
