const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸ Pause";
  } else {
    audio.pause();
    playBtn.textContent = "▶️ Play";
  }
});
