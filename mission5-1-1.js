// 今日の日付を表示する関数
function showDateTime() {
    var datetime = new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var day = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var datenubmer = datetime.getDay();
    var datecharacter = ["(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)"];
    var date = datecharacter[datenubmer];
    var datetimeview = year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分" + date;
    var object = document.getElementById("datetime");
    object.innerText = datetimeview;
}

// ページが読み込まれた時に今日の日付を表示
window.onload = function() {
    showDateTime();
};

// カレンダー表示ボタンをクリックした時の処理
function showCalendarOnClick() {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1;
    showMonthYear(currentYear, currentMonth);
    showCalendar(currentYear, currentMonth);
}
