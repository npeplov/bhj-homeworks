// при клике на a показать див с подсказкой
const aArr = Array.from(document.querySelectorAll('a.has-tooltip'));

let tooltip = document.createElement('div');
tooltip.className = 'tooltip tooltip_active';

aArr.forEach( (a) => {
    a.addEventListener('click', showTooltip)
    }
);

function showTooltip(event) {
    tooltip.style.left = this.offsetLeft + 'px';
    tooltip.style.top = this.getBoundingClientRect().top + 20 + 'px';

    // setAttribute method:
    // tooltip.setAttribute('style', `left: ${this.getBoundingClientRect().left + 'px'};`)

    event.preventDefault();

    tooltip.innerText = this.title;
    this.appendChild(tooltip);
}



// неправильное положение подсказки по горизонтали
// 1. подсказки в начале задания
// https://github.com/netology-code/bhj-homeworks/tree/master/document-structure

// 2. написать разметку самому
// <a>1</a> <div>2</div>
// и сделать с помощью css
