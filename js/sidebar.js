function HideSidebar() {
    if (!sideBar) return;
    if (sideBar.classList.contains("sidebar")) {
        sideBar.classList.remove("sidebar");
        document.body.style.overflow = "";
    }
}

const sideBar = document.querySelector(".section");
const toggleButton = document.getElementById("sidebarButton");

toggleButton.addEventListener("click", event => {
    event.stopPropagation();
    sideBar.classList.toggle("sidebar");
    document.body.style.overflow = sideBar.classList.contains("sidebar") ? "hidden" : "";
});

sideBar.addEventListener("click", event => {
    event.stopPropagation();
});

document.addEventListener("click", HideSidebar);

window.addEventListener("resize", HideSidebar);
