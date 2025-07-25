function GetDayPattern(date, tasks = "", taskNumber = 0) {
    return `<div id="${date}" class="day">
                <div class="day-info">
                    <span class="day-date">${date}</span>
                    <div>
                        <b>Number of tasks:</b>
                        <span class="day-task-number">${taskNumber}</span>
                    </div>
                </div>
                <hr>
                <div class="day-tasks">${tasks}</div>
            </div>`;
};

function GetTaskPattern(title, description, priority, time) {
    return `<div class="day-task ${priority}-priority">
                <div class="title-time">
                    <div>
                        <b>Task title:</b>
                        <span class="task-title">${title}</span>
                    </div>
                    <div>
                        <b>Task time:</b>
                        <span class="task-time">${time}</span>
                    </div>
                </div>
                <hr>
                <div>
                    <b>Task description:</b>
                    <span class="task-description">${description}</span>
                </div>
                <hr>
                <div>
                    <b>Task priority:</b>
                    <span class="task-priority">${priority}</span>
                </div>
                <button class="delete-button">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>`;
};