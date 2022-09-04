function playAudio(e) {
  const keyCode = e.keyCode;
  const keyElement = document.querySelector(`.key[data-key='${keyCode}']`);
  if (!keyElement) return;

  const audioElement = document.querySelector(`audio[data-key='${keyCode}']`);
  audioElement.load();
  audioElement.play();
  keyElement.classList.add("playing");
}

function removeEffect(e) {
  if (e.propertyName !== "border-bottom-color") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener("transitionend", removeEffect);
});
window.addEventListener("keydown", playAudio);
