function dropDownAction() {
    const ul = this.querySelector('ul');
    ul.classList.toggle('dropdown__list_active');
}

function selectMenuItem() {
    const a = this.querySelector('a');

    const activeItem = menu.querySelector('.dropdown__value');
    activeItem.textContent = a.textContent;
}

const menu = document.querySelector('.dropdown');
menu.addEventListener('click', dropDownAction);

const liArr = Array.from(menu.querySelectorAll('.dropdown__item'));
liArr.forEach( (li) => 
    li.addEventListener('click', selectMenuItem)
);

const aArr = Array.from(menu.querySelectorAll('a'));
aArr.forEach( (a) => 
    a.onclick = () => false
);

// через addEventListener не работает
// aArr.forEach( (a) => 
//     a.addEventListener ('click', () => {
//         return false;
//     }));