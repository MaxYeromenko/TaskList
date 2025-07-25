const dayListOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};

const dayList = document.querySelector(".day-list");
dayList.textContent = null;

const current = new Date(minDate);
const saved = localStorage.getItem("tasks");
const tasks = saved ? JSON.parse(saved) : {};

while (current <= maxDate) {
    const dateString = current.toLocaleDateString('en-GB', dayListOptions);
    const dayHTML = GetDayPattern(dateString);
    dayList.insertAdjacentHTML("beforeend", dayHTML);
    const numberOfTasks = dayList.lastChild.querySelector(".day-task-number");

    if (tasks[dateString]) {
        const container = document.getElementById(dateString)?.querySelector(".day-tasks");

        tasks[dateString].forEach(task => {
            const html = GetTaskPattern(task.title, task.description, task.priority, task.time);
            container?.insertAdjacentHTML("beforeend", html);
            numberOfTasks.textContent++;

            const lastTask = container?.lastElementChild;
            if (!task.state && lastTask) {
                lastTask.classList.add("completed-task");
            }
        });
    }

    current.setDate(current.getDate() + 1);
}
AddClickListener();