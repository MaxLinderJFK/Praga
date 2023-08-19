function generateDaysOfYear() {
    const daysContainer = document.getElementById("daysOfYear");
    const startDate = new Date("2023-01-01");
    const endDate = new Date("2024-01-01");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let date = startDate; date < endDate; date.setDate(date.getDate() + 1)) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const listItem = document.createElement("li");
        listItem.className = "nav-item";

        const link = document.createElement("a");
        link.className = "nav-link";
        link.href = `day_${year}_${month}_${day}.html`;
        link.textContent = `${day}.${month}.${year}`;

        if (date.getTime() === today.getTime()) {
            link.className += " active-day";
        }

        listItem.appendChild(link);
        daysContainer.appendChild(listItem);
    }
}

function startTime() {
    const tm = new Date();
    const h = tm.getHours().toString().padStart(2, '0');
    const m = tm.getMinutes().toString().padStart(2, '0');
    const s = tm.getSeconds().toString().padStart(2, '0');
    const day = tm.getDate().toString().padStart(2, '0');
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const month = months[tm.getMonth()];
    const year = tm.getFullYear();
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const dayOfWeek = daysOfWeek[tm.getDay()];
    document.getElementById('dateTime').innerHTML = `${day} ${month} ${year} года. ${dayOfWeek} ${h}:${m}:${s}`;
    setTimeout(startTime, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement('table');
    table.border = "1";

    const thead = document.createElement('thead');
    const headers = ["Столбец 1", "Столбец 2", "Столбец 3"];
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    for (let i = 0; i < 20; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const td = document.createElement('td');
            td.textContent = `Данные ${j + 1}`;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    tableContainer.appendChild(table);
});

startTime();
generateDaysOfYear();
