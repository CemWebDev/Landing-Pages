const menuToggle = document.querySelector("#toggle-menu-icon");

const list = document.querySelector("#list");
list.style.maxHeight = "0px";

menuToggle.addEventListener("click", () => {
    if (list.style.maxHeight == "0px") {
        list.style.maxHeight = "165px";
    } else {
        list.style.maxHeight = "0px";
    }
})
