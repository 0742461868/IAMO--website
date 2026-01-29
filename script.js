const marquee = document.getElementById("marqueeText");

const totalDuration = 10000; // must match CSS animation duration
const pauseTime = 4000;      // when it reaches center (40%)
const blinkDuration = 2500;

function runMarquee() {
  marquee.style.animation = "slideText 10s linear infinite";

  setTimeout(() => {
    // pause at center
    marquee.style.animationPlayState = "paused";

    // blink
    marquee.classList.add("blink");

    setTimeout(() => {
      marquee.classList.remove("blink");
      marquee.style.animationPlayState = "running";
    }, blinkDuration);

  }, pauseTime);
}

runMarquee();
