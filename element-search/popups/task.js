const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");

// Отобразить окно при старте
modalMain.classList.add("modal_active");

const closeButtons = document.getElementsByClassName("modal__close modal__close_times");
const btnSuccess = document.getElementsByClassName("btn btn_success")[0];

btnSuccess.onclick =
closeButtons[0].onclick =
closeButtons[1].onclick = () => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.remove("modal_active");
}

const showButton = document.getElementsByClassName("btn btn_danger modal__close show-success")[0];

showButton.onclick = () => {
    // Закрыть первое окно с id="modal_main"
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}