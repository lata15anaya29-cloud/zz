const textarea = document.querySelector("textarea");
const saveBtn = document.querySelector(".btn.primary");
const clearBtn = document.querySelector(".btn.secondary");

// Load saved journal on page load
window.addEventListener("load", () => {
  const savedText = localStorage.getItem("inaya_journal");
  if (savedText) {
    textarea.value = savedText;
  }
});

// Save journal
saveBtn.addEventListener("click", () => {
  localStorage.setItem("inaya_journal", textarea.value);
  alert("Saved. You did enough for today 🤍");
});

// Clear journal
clearBtn.addEventListener("click", () => {
  textarea.value = "";
  localStorage.removeItem("inaya_journal");
});
