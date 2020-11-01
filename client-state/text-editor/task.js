const text = document.querySelector('textarea');
const clearButton = document.querySelector('button');

document.addEventListener('DOMContentLoaded', load);
text.addEventListener('input', save);
clearButton.addEventListener('click', clear)

function load() {
    text.value = localStorage.getItem('text-editor', text.value);
}

function save() {
    localStorage.setItem('text-editor', (text.value));
}

function clear() {
    text.value = '';
    localStorage.removeItem('text-editor');
}