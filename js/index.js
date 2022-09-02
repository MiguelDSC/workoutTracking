// nav

// tracking
const trackWorkoutBtn = document.getElementById("track-btn");
const historyBtn = document.getElementById("history-btn");
const trackSection = document.getElementById("tracking");
const historySection = document.getElementById("history");
const navbar = document.getElementById("navbarToggleExternalContent");

trackWorkoutBtn.addEventListener("click", () => {
  trackSection.style.display = "block";
  historySection.style.display = "none";
  navbar.classList.remove("show");
});

historyBtn.addEventListener("click", () => {
  historySection.style.display = "block";
  trackSection.style.display = "none";
  navbar.classList.remove("show");
});
