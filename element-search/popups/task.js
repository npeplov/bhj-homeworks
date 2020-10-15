const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");

// Отобразить окно при старте
modalMain.classList.add("modal_active");

const closeButton = document.getElementsByClassName("modal__close modal__close_times");
const btnSuccess = document.getElementsByClassName("btn btn_success");

btnSuccess[0].onclick =
closeButton[0].onclick =
closeButton[1].onclick = () => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.remove("modal_active");
}

const showButton = document.getElementsByClassName("btn btn_danger modal__close show-success");

showButton[0].onclick = () => {
    // Закрыть первое окно с id="modal_main"
    modalMain.classList.remove("modal_active");
    document.getElementById('modal_success').classList.add("modal_active");
}