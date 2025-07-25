const today = new Date();
today.setHours(0, 0, 0, 0);

const minDate = new Date(today);
const maxDate = new Date(today);

minDate.setDate(today.getDate() - 5);
maxDate.setFullYear(today.getFullYear() + 2);

const formatDate = (date) => date.toLocaleDateString('en-CA');

const taskDateInput = document.getElementById("task-date");
taskDateInput.min = formatDate(minDate);
taskDateInput.max = formatDate(maxDate);

const goToDateInput = document.getElementById("go-to-day");
goToDateInput.min = formatDate(minDate);
goToDateInput.max = formatDate(maxDate);
