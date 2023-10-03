const toggleMenuIcon = document.querySelector("#toggle-menu-icon");
const toggleMenu = document.querySelector("#navbar");

const toggleMenuFunc = (opacity, visibility) => {
  toggleMenu.style.opacity = opacity;
  toggleMenu.style.visibility = visibility;
};

toggleMenuIcon.addEventListener("click", () => {
  toggleMenuIcon.classList.toggle("bi-x");
  if (toggleMenuIcon.classList.contains("bi-x")) {
    toggleMenuFunc("1", "visible");
  } else {
    toggleMenuFunc("0", "hidden");
  }
});

window.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(toggleMenuIcon) &&
    !e.composedPath().includes(toggleMenu)
  ) {
    toggleMenuFunc("0", "hidden");
    if (toggleMenuIcon.classList.contains("bi-x")) {
      toggleMenuIcon.classList.remove("bi-x");
    }
  }
});
