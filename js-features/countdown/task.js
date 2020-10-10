const timer = document.getElementById('timer');
let i = new Date('01 Jan 1970 '+ timer.textContent);

function countDown() {
    let j = new Date(i);

    let hour = j.getHours();
    let min = j.getMinutes();
    let sec = j.getSeconds();

    if (hour < 10)
        hour = "0" + hour;
    if (min < 10)
        min = "0" + min;
    if (sec < 10)
        sec = "0" + sec;

    i = +i - 1000;

    timer.textContent = `${hour}:${min}:${sec}`;

    if  (hour === "00" && min === "00" && sec === "00") {
        // ? при достижении 00-00-00 сначала выводит алерт, затем только убавляет i
        timer.textContent = `00:00:00`;

        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }
    // По окончании отсчёта времени, запустите загрузку произвольного файла.
    location.href="https://files.scene.org/get:nl-ftp/demos/groups/farbrausch/fr08_final.zip"
}

let timerId = setInterval( countDown, 20 );