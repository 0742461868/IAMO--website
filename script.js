const marquee = document.getElementById("marqueeText");

setInterval(() => {
  marquee.style.animationPlayState = "paused";

  marquee.classList.add("blink");

  setTimeout(() => {
    marquee.classList.remove("blink");
    marquee.style.animationPlayState = "running";
  }, 2500);

}, 4800);
