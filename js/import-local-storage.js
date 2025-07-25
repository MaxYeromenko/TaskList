const importButton = document.getElementById("import-button");
const importInput = document.getElementById("import-tasks");

importButton.addEventListener("click", () => {
    importInput.click();
});

importInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);

            for (const [key, value] of Object.entries(data)) {
                localStorage.setItem(key, value);
            }

            location.reload();
        } catch (error) {
            console.error("Помилка під час імпорту:", error);
        }
    };

    reader.readAsText(file);
});
