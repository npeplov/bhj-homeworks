const progress = document.getElementById( 'progress' );
const button = document.querySelector('button');

progress.value = 0.0;

button.addEventListener('click', upload);

function upload(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send();
    // console.log(xhr.upload);

    // xhr.upload.onprogress = () => {
    //     console.log(xhr.upload.onprogress);
    // }

    xhr.onreadystatechange = function() {
        xhr.onprogress = function(event) {
            console.log( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
        }


        // не работает событие xhr.readyState == 1
        if (xhr.readyState == 1)
            console.log(xhr.readyState);

        if (xhr.readyState == 2)
            progress.value = +progress.value + 0.20;

        if (xhr.readyState == 3)
            progress.value += 0.001;

		if(xhr.readyState == 4 && xhr.status == 200) {
            while (progress.value != 1)
                progress.value += 0.001
                // и постепенное заполнение циклом тоже не работает
                // сначала вычисляет до 1 потом отрисовывает

            console.log('Усё хатово шеф');
        }
    }
}