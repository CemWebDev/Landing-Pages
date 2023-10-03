const toggleMenuIcon = document.querySelector(".toggle-menu-icon");
const navigation = document.querySelector(".navigation");
const searchIcon = document.querySelector("#search");
const searchBarWrapper = document.querySelector(".search-bar-wrapper");
const searchInput = document.querySelector("#search-input");
const closeSearchInput = document.querySelector("#close-search-input");


//! Mobile Menu Starts
const ToggleMenu = (opacity, visibility) => {
  navigation.style.opacity = opacity;
  navigation.style.visibility = visibility;
};

toggleMenuIcon.addEventListener("click", () => {
  toggleMenuIcon.classList.toggle("bi-x");
  if (toggleMenuIcon.classList.contains("bi-x")) {
    ToggleMenu("1", "visible");
  } else {
    ToggleMenu("0", "hidden");
  }
});

window.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(toggleMenuIcon) &&
    !e.composedPath().includes(navigation)
  ) {
    if (
      navigation.style.opacity === "1" &&
      navigation.style.visibility === "visible"
    ) {
      ToggleMenu("0", "hidden");
      toggleMenuIcon.classList.remove("bi-x");
    }
  }
});
//! Mobile Menu Ends

//! Search Bar Starts

const ToggleSearchBar = (opacity, visibility) => {
    searchBarWrapper.style.opacity = opacity;
    searchBarWrapper.style.visibility = visibility;
}

searchIcon.addEventListener("click", () => {
    ToggleSearchBar("1", "visible")
});

closeSearchInput.addEventListener("click", () => {
    ToggleSearchBar('0', 'hidden');
});

window.addEventListener("click", (e) => {
    if (!e.composedPath().includes(searchIcon) && !e.composedPath().includes(searchInput)) {
        ToggleSearchBar("0" ,"hidden");
    }
})