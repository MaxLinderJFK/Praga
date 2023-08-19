document.addEventListener("DOMContentLoaded", function() {
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement('table');
    table.border = "1";

    // Создаем thead и заголовки столбцов
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

    // Создаем тело таблицы и заполняем его данными
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

    // Добавляем таблицу в контейнер
    tableContainer.appendChild(table);
});
