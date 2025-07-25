const toggle = document.getElementById("darkModeToggle");
let isDark = true;

// Set initial state based on user's preference if available
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggle.textContent = "☀️";
  isDark = false;
}

toggle.onclick = () => {
  document.body.classList.toggle("light-mode");
  isDark = !isDark;

  // Save user preference to local storage
  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggle.textContent = isDark ? "🌙" : "☀️";
};
