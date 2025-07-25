function RemoveTask(task, date, title, description, priority, time, state) {
    task.remove();

    const raw = localStorage.getItem("tasks");
    const tasks = raw ? JSON.parse(raw) : {};

    if (!tasks[date]) return;

    const index = tasks[date].findIndex(task =>
        task.title === title &&
        task.description === description &&
        task.priority === priority &&
        task.time === time &&
        task.state === state
    );

    if (index !== -1) {
        tasks[date].splice(index, 1);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function DeleteTask(element) {
    const button = element.closest(".delete-button");
    if (!button) return;

    const task = button.closest(".day-task");
    const day = task.closest(".day");
    const date = day.id;
    if (!date) return;

    const numberOfTasks = day.querySelector(".day-task-number");
    numberOfTasks.textContent = Math.max(0, Number(numberOfTasks.textContent) - 1);

    const title = task.querySelector(".task-title").textContent.trim();
    const time = task.querySelector(".task-time").textContent.trim();
    const description = task.querySelector(".task-description").textContent;
    const priority = task.querySelector(".task-priority").textContent;
    const state = task.classList.contains("completed-task");

    RemoveTask(task, date, title, description, priority, time, !state);
}
