const checkBox = document.getElementById("display-days-with-tasks");

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("hideEmptyDays");
    const hideEmpty = saved === "true";
    checkBox.checked = hideEmpty;

    if (hideEmpty) {
        HideEmptyDays();
    } else {
        RestoreAllDays();
    }
});

checkBox.addEventListener("change", () => {
    if (daysNumberElement.value != 0) {
        daysNumberElement.value = 0;
        localStorage.setItem("daysNumber", 0);
    }
    const isChecked = checkBox.checked;
    localStorage.setItem("hideEmptyDays", isChecked);

    if (isChecked) {
        HideEmptyDays();
    } else {
        RestoreAllDays();
    }
});

function HideEmptyDays() {
    const days = Array.from(document.querySelectorAll(".day"))
        .filter(day => day.style.display === "");

    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        const tasks = day.querySelectorAll(".day-task");

        if (tasks.length === 0) {
            day.style.display = "none";
        }
    }
}

function RestoreAllDays() {
    document.querySelectorAll(".day").forEach(day => {
        day.style.display = "";
    });
}
