const dateInput = document.getElementById("go-to-day");

dateInput.addEventListener("change", () => {
    const selectedDate = new Date(dateInput.value);
    const formatted = selectedDate.toLocaleDateString('en-GB', dayListOptions);
    const target = document.getElementById(formatted);

    if (target) {
        target.scrollIntoView();
        dateInput.value = null;
        target.classList.add("highlight");
        setTimeout(() => target.classList.remove("highlight"), 3000);
    }
});
