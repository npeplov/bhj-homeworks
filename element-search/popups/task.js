const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");

// Отобразить окно при старте
modalMain.className="modal modal_active";

const closeButton = document.getElementsByClassName("modal__close modal__close_times");
const btnSuccess = document.getElementsByClassName("btn btn_success");

btnSuccess[0].onclick =
closeButton[0].onclick =
closeButton[1].onclick = () => {
    modalMain.className="modal";
    modalSuccess.className="modal";
}

const showButton = document.getElementsByClassName("btn btn_danger modal__close show-success")

showButton[0].onclick = () => {
    document.getElementById('modal_success').className="modal modal_active";
}