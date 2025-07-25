document.getElementById("export-button").addEventListener("click", () => {
    const data = { ...localStorage };
    try {
        const allTasks = JSON.parse(data.tasks || "{}");

        const nonEmptyTasks = {};
        for (const [day, tasks] of Object.entries(allTasks)) {
            if (Array.isArray(tasks) && tasks.length > 0) {
                nonEmptyTasks[day] = tasks;
            }
        }

        data.tasks = JSON.stringify(nonEmptyTasks);
    } catch (e) {
        console.error("Помилка при парсингу tasks:", e);
    }

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `taskListBackUp_${new Date().toLocaleDateString()}.json`;
    link.click();

    URL.revokeObjectURL(link.href);
});
