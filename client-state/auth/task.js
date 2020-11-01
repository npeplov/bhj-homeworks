const signinWindow = document.querySelector('#signin');
const signinButton = document.querySelector('#signin__btn');
const welcomeDiv = document.querySelector('#welcome');
const user_idSpan = welcomeDiv.querySelector('span');

document.addEventListener('DOMContentLoaded', checkLoggedBefore);

function checkLoggedBefore() {
    if (localStorage.auth.length > 0)
        showWelcomeDiv(localStorage.auth);
}

signinWindow.classList.toggle('signin_active');

signinButton.addEventListener('click', sendSigninRequest);
welcomeDiv.children[1].addEventListener('click', logout);

function sendSigninRequest(e) {
    e.preventDefault();
    let formData= new FormData(document.forms[0]);
    formData.append('login', document.forms[0].elements[0].value);
    formData.append('password', document.forms[0].elements[1].value);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);

    xhr.onload = () => {
        const response = JSON.parse(xhr.response);

        if (response.success)
            showWelcomeDiv(response.user_id);
        else
            alert('Wrong username or password')
    }
}

function showWelcomeDiv(user_id) {
    signinWindow.classList.toggle('signin_active');

    welcomeDiv.classList.toggle('welcome_active');
    user_idSpan.innerText = user_id;

    localStorage.auth = user_id;
}

function logout() {
    signinWindow.classList.toggle('signin_active');
    welcomeDiv.classList.toggle('welcome_active');
    localStorage.removeItem('auth');
}