function AddClickListener() {
    const tasks = document.querySelectorAll(".day-task");

    tasks.forEach(task => {
        task.addEventListener("click", event => {
            ToggleTaskState(task);
            DeleteTask(event.target);
        });
    });
};

function AddElementlickListener(task) {
    task.addEventListener("click", event => {
        ToggleTaskState(task);
        DeleteTask(event.target);
    });
};

function ToggleTaskState(task) {
    task.classList.toggle("completed-task");
    const day = task.closest(".day");
    if (!day) return;

    const date = day.id;
    const container = day.querySelector(".day-tasks");
    const allTasks = Array.from(container.children);
    const index = allTasks.indexOf(task);
    if (index === -1) return;

    const raw = localStorage.getItem("tasks");
    if (!raw) return;

    const storage = JSON.parse(raw);
    if (storage[date] && storage[date][index]) {
        const oldState = storage[date][index].state;
        storage[date][index].state = !oldState;
        localStorage.setItem("tasks", JSON.stringify(storage));
    }
}