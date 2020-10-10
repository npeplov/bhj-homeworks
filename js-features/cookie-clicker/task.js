const counter = document.getElementById('clicker__counter');

const cookie_Image = document.getElementById('cookie');

cookie_Image.onclick = function() {
    cookie_Image.width = 202;
    counter.textContent = +counter.textContent + 1;
    setTimeout( ()=> cookie_Image.width = 200, 100 );
}

