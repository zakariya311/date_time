function clock() {

    const time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let day = time.getDate();
    let month = time.toLocaleString("default", {month: "long"});
    let year = time.getFullYear();
    let session = "AM";

    if (hour >= 12) {
        hour = hour - 12;
        session = "PM"
    }

    if (hour == 0) {
        hour = 12;
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let currentTime = hour + " : " + minute + " : " + second + " " + session;
    let date = day + " " + month + ", " + year;

    document.querySelector("h1.time").textContent = currentTime;
    document.querySelector("h2.date").textContent = date;

    setTimeout(clock, 1000);

}

clock();
