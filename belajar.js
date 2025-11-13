document.addEventListener("DOMContentLoaded", () => {
  const toast = document.getElementById("toast");
  const darkToggle = document.getElementById("darkToggle");
  const clock = document.getElementById("clock");
  const quote = document.getElementById("quote");

  // Toast function
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }

  // Clock
  function updateClock() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    clock.textContent =
      now.toLocaleDateString("id-ID", options) +
      " | " +
      now.toLocaleTimeString("id-ID");
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Quotes
  const quotes = [
    "Less noise, more clarity.",
    "Good design is good mood.",
    "Keep it simple.",
    "Focus on what matters.",
  ];
  quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  // Dark Mode toggle
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
    showToast(
      document.body.classList.contains("dark")
        ? "Dark mode aktif 🌙"
        : "Light mode aktif ☀️"
    );
  });

  // Hero button
  document.getElementById("heroAction").addEventListener("click", () => {
    showToast("Santuy aja 😌");
  });

  // Progress bar
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    document.getElementById("progress-bar").style.width = percent + "%";
  });

  // Fade-in
  const faders = document.querySelectorAll(".fade-in");
  function checkFade() {
    const trigger = window.innerHeight * 0.85;
    faders.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("visible");
    });
  }
  checkFade();
  window.addEventListener("scroll", checkFade);

  // Welcome toast
  showToast("Selamat datang 🎉");
});
