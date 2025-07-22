const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("month-year");

let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Set current month and year
  monthYear.textContent = date.toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  // Get first day of the month
  const firstDay = new Date(year, month, 1).getDay();

  // Get total days in the month
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Clear previous days
  daysContainer.innerHTML = "";

  // Add blank days before start
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("div");
    daysContainer.appendChild(blank);
  }

  // Add actual days
  for (let i = 1; i <= totalDays; i++) {
    const day = document.createElement("div");
    day.textContent = i;

    const today = new Date();
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add("today");
    }

    daysContainer.appendChild(day);
  }
}

function prevMonth() {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

renderCalendar();
