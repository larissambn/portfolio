const hamburguerButton = document.getElementById("hamburguer");
const navList = document.getElementById("nav-list");
const switchTheme = document.getElementById("Layer_2");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburguerButton.addEventListener("click", toggleButton);

switchTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
