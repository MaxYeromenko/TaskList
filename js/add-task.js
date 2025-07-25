function ValidateTask(date, title, description, priority, time) {
    date = date.trim();
    title = title.trim();
    description = description?.trim() ?? "";
    time = time?.trim() ?? "";
    priority = priority.trim().toLowerCase();

    const validPriorities = ["low", "medium", "high"];

    const isValid =
        date && typeof date === "string" && date.length > 0 &&
        title.length > 0 && validPriorities.includes(priority);

    date = new Date(date).toLocaleDateString("en-GB", dayListOptions);

    if (description.length === 0) {
        description = "---";
    }

    if (time.length === 0) {
        time = "--:--";
    }

    return { isValid, date, title, description, priority, time };
}

function SaveTask(date, title, description, priority, time, state) {
    const raw = localStorage.getItem("tasks");
    const tasks = raw ? JSON.parse(raw) : {};

    if (!tasks[date]) {
        tasks[date] = [];
    }

    tasks[date].push({ title, description, priority, time, state });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const addTaskForm = document.getElementById("add-task-form");

addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    const rawDate = elements["task-date"].value;
    const rawTitle = elements["task-title"].value;
    const rawDescription = elements["task-description"].value;
    const rawTime = elements["task-time"].value;
    const rawPriority = elements["task-priority"].value;
    const { isValid, date, title, description, priority, time } = ValidateTask(
        rawDate,
        rawTitle,
        rawDescription,
        rawPriority,
        rawTime
    );

    if (!isValid) {
        alert("Please fill in all required fields correctly.");
        return;
    }

    const day = document.getElementById(date);
    if (!day) {
        alert("Choose a valid date.");
        return;
    }
    const numberOfTasks = day.querySelector(".day-task-number");
    const dayTasks = day.querySelector(".day-tasks");

    dayTasks.insertAdjacentHTML("beforeend", GetTaskPattern(title, description, priority, time));
    SaveTask(date, title, description, priority, time, true);

    numberOfTasks.textContent++;

    const lastTask = dayTasks?.lastElementChild;
    AddElementlickListener(lastTask);

    addTaskForm.reset();
});