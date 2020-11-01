const modalMain = document.getElementById("subscribe-modal");

const cookie = document.cookie;
if (cookie.indexOf("popup=disabled") == -1)
    // Отобразить окно при старте
    modalMain.classList.add("modal_active");

const closeButton = document.querySelector(".modal__close");

closeButton.onclick = () => {
    modalMain.classList.remove("modal_active");
    document.cookie = 'popup=disabled';
}
