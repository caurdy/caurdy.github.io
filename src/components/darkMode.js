export default function toggleDarkMode() {
  const btn = document.querySelector(".btn-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.toggle("dark-theme");
    btn.innerHTML = '<i class="bi bi-sun"></i>';
  } else if (currentTheme === "light") {
    document.body.classList.toggle("light-theme");
    btn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  }

  btn.addEventListener("click", function () {
    let theme = "";
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
      theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.body.classList.toggle("dark-theme");
      theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    if (btn.innerHTML === '<i class="bi bi-brightness-high-fill"></i>') {
      btn.innerHTML = '<i class="bi bi-sun"></i>';
    } else {
      btn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    }
    localStorage.setItem("theme", theme);
  });
}