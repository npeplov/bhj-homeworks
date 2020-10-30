// 1. добавление задач по нажатию клавиши Enter при наличии текста в поле ввода
const buttonAdd = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');
const divTasksList = document.querySelector('.tasks__list');

input.addEventListener('keydown', checkKey);
buttonAdd.addEventListener('click', addTask);

function checkKey(e) {
    if (e.key === 'Enter' && input.value == '') {
        e.preventDefault();
    }
}

function removeTask() {
    this.parentElement.remove();
}

function addTask(e) {
    e.preventDefault();
    
    if (input.value == '') {
        return
    }

    const divTask = document.createElement('div');
    divTask.className = 'task';

    divTask.innerHTML = taskTemplate();
    divTasksList.appendChild(divTask);
    
    const x = divTask.querySelector('a');
    x.addEventListener('click', removeTask);

    input.value = '';
}

function taskTemplate() {
return `
  <div class="task__title">
    ${input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
`};

// let dupNode = divTasksList.cloneNode(true);
