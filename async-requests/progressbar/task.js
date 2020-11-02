const progress = document.getElementById( 'progress' );
const button = document.querySelector('button');
const input = document.querySelector('input');
let file;

input.onchange = function() {
    file = this.files[0];
}

progress.value = 0.0;
button.onclick = upload;

function upload(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", updateProgress, false);
    xhr.upload.addEventListener("load", transferComplete, false);
    xhr.upload.addEventListener("error", transferFailed, false);
    xhr.upload.addEventListener("abort", transferCanceled, false);

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(file);

    function updateProgress (oEvent) {
        if (oEvent.lengthComputable) {
          let percentComplete = oEvent.loaded / oEvent.total;
          progress.value = percentComplete;
        } else {
          // Невозможно вычислить состояние загрузки, так как размер неизвестен
        }
      }
      
      function transferComplete(evt) {
        console.log("Загрузка завершена.");
      }
      
      function transferFailed(evt) {
        alert("При загрузке файла произошла ошибка.");
      }
      
      function transferCanceled(evt) {
        alert("Пользователь отменил загрузку.");
      }

    xhr.onreadystatechange = function() {
        xhr.onprogress = function(event) {
            console.log( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
        }
        // не работает событие xhr.readyState == 1
        if (xhr.readyState == 1)
            console.log(xhr.readyState);

        if(xhr.readyState == 4 && xhr.status == 200) {
            const timerId = setInterval( () => {
                console.log('timeout'); progress.value += 0.005;
                if (progress.value > 0.999)
                    clearTimeout(timerId);
            }, 10)
            
        }
    }
}
