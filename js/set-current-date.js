const dateSpan = document.getElementById("current-date");
const yearSpan = document.getElementById("current-year");
const currentDate = new Date();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};

const fullDate = currentDate.toLocaleDateString('en-GB', options);
const year = currentDate.getFullYear();

dateSpan.textContent = fullDate;
yearSpan.textContent = year;
