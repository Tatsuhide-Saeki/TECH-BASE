// カレンダーを表示する関数
function showCalendar(year, month) {
    const calendarElement = document.getElementById("calendar");
    calendarElement.innerHTML = ""; 
    const firstdate = new Date(year, month - 1, 1); // 指定された年月の最初の日を取得
    const lastDay = new Date(year, month, 0).getDate(); // 指定された年月の最終日を取得

    const calendarTable = document.createElement("table"); //表を作成
    const headOfTable = document.createElement("tr");  //表を1行作る

    // カレンダーの上部に曜日を表示
    const weekday = ["日", "月", "火", "水", "木", "金", "土"];
    for (let i = 0; i < 7; i++) {
        const weekdayCell = document.createElement("th");
        weekdayCell.textContent = weekday[i];
        headOfTable.appendChild(weekdayCell);
    }
    calendarTable.appendChild(headOfTable);

    let row = document.createElement("tr");
    for (let i = 0; i < firstdate.getDay(); i++) {
        const emptyCell = document.createElement("td");
        row.appendChild(emptyCell);
    }

    let day = 1;
    while (day <= lastDay) {
        const cell = document.createElement("td");
        cell.textContent = day;
        row.appendChild(cell);

        if (firstdate.getDay() === 6) {
            calendarTable.appendChild(row);
            row = document.createElement("tr");
        }

        firstdate.setDate(firstdate.getDate() + 1);
        day++;
    }

    for (let i = firstdate.getDay(); i < 7; i++) {
        const emptyCell = document.createElement("td");
        row.appendChild(emptyCell);
    }

    calendarTable.appendChild(row);
    calendarElement.appendChild(calendarTable);
}

// 年と月の表示
function showMonthYear(year, month) {
    const monthYearElement = document.getElementById("yearAndMonth");
    const monthName = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    monthYearElement.textContent = year + "年 " + monthName[month - 1];
}

// 「前の月へ」ボタンの処理
function prev() {
    if (currentMonth === 1) {
        currentYear--;
        currentMonth = 12;
    } else {
        currentMonth--;
    }
    showMonthYear(currentYear, currentMonth);
    showCalendar(currentYear, currentMonth);
}

// 「次の月へ」ボタンの処理
function next() {
    if (currentMonth === 12) {
        currentYear++;
        currentMonth = 1;
    } else {
        currentMonth++;
    }
    showMonthYear(currentYear, currentMonth);
    showCalendar(currentYear, currentMonth);
}

// ページが読み込まれた時の初期値
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
//showMonthYear(currentYear, currentMonth);
//showCalendar(currentYear, currentMonth);
