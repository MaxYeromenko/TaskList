const toTopButton = document.getElementById("to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTopButton.style.display = "flex";
    } else {
        toTopButton.style.display = "none";
    }
});