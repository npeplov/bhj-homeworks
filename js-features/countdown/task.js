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

    // console.log(j.getHours(), j.getMinutes(), j.getSeconds());
}

let timerId = setInterval( countDown, 20 );

// 01:05:44 получить textcontent, 
// присвоить объекту класса Date

// 2. 01:05:44 преобразовать в get hours , mins, secs
// 3. вычесть 1000 мс