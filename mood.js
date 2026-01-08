const moodButtons = document.querySelectorAll(".moods button");

// Load saved mood
window.addEventListener("load", () => {
  const savedMood = localStorage.getItem("inaya_mood");
  if (savedMood) {
    moodButtons.forEach(btn => {
      if (btn.textContent === savedMood) {
        btn.style.background = "#dcd6ff";
      }
    });
  }
});

// Save mood on click
moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    moodButtons.forEach(btn => btn.style.background = "#f4f1fb");
    button.style.background = "#dcd6ff";
    localStorage.setItem("inaya_mood", button.textContent);
  });
});
