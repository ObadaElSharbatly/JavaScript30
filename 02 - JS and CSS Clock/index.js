function main() {
  const hoursHand = document.querySelector(".hour-hand");
  const minsHand = document.querySelector(".min-hand");
  const secsHand = document.querySelector(".second-hand");

  function rotateHands() {
    const now = new Date();
    const hours = now.getHours();
    const hoursDeg = (360 / 12) * hours;

    const mins = now.getMinutes();
    const minsDeg = (360 / 60) * mins;

    const secs = now.getSeconds();
    const secsDeg = (360 / 60) * secs;

    secsHand.style.transform = `rotate(${secsDeg}deg)`;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
  }

  setInterval(rotateHands, 1000);
}

window.addEventListener("load", main);
