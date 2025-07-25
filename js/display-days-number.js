document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("daysNumber");
    const savedEmptyDays = localStorage.getItem("hideEmptyDays");

    if (savedEmptyDays === "false") {
        if (saved) DisplayNumberOfDays(saved);
        else DisplayNumberOfDays(0);
    }
    else {
        daysNumberElement.value = parseInt(saved, 10);
    }
});

const daysNumberElement = document.getElementById("days-display-number");

daysNumberElement.addEventListener("change", () => {
    if (checkBox.checked) {
        checkBox.checked = false;
        localStorage.setItem("hideEmptyDays", false);
    }
    const value = daysNumberElement.value.trim();
    const daysNumber = parseInt(value, 10);
    const min = parseInt(daysNumberElement.min, 10);
    const max = parseInt(daysNumberElement.max, 10);

    if (
        value === "" ||
        isNaN(daysNumber) ||
        /[eE+\-.,]/.test(value) ||
        daysNumber < min ||
        daysNumber > max
    ) {
        daysNumberElement.setCustomValidity(`Введіть число від ${min} до ${max}`);
        daysNumberElement.reportValidity();
        return;
    }

    daysNumberElement.setCustomValidity("");
    localStorage.setItem("daysNumber", daysNumber);
    DisplayNumberOfDays(daysNumber);
});


function DisplayNumberOfDays(number) {
    const numberParsed = parseInt(number, 10);
    daysNumberElement.value = numberParsed;
    if (numberParsed == 0) RestoreAllDays();
    else {
        const days = document.querySelectorAll(".day");

        days.forEach((day, index) => {
            if (index < numberParsed) {
                day.style.display = "";
            } else {
                day.style.display = "none";
            }
        });
    }
}