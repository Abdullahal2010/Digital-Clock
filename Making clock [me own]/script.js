var times = document.querySelector("#time");
var dates = document.querySelector("#date");

setInterval(function() {

    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var date = dateTime.getDate();
    var month = dateTime.getMonth();
    var year = dateTime.getFullYear();

    seconds = formatTime(seconds);
    minutes = formatTime(minutes);
    hours = formatTime(hours);
    date = formatTime(date);
    month = formatTime(month);

    var timesReal = hours + ":" + minutes + ":" + seconds;
    var datesReal = year + "-" + month + "-" + date;



    times.innerText = timesReal;
    dates.innerText = datesReal;
}, 1000);

function formatTime(value) { 
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}