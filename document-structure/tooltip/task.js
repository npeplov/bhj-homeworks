// при клике на a показать див с подсказкой
const aArr = Array.from(document.querySelectorAll('a.has-tooltip'));

let tooltip = document.createElement('div');
tooltip.className = 'tooltip';

aArr.forEach( (a) => {
    a.addEventListener('click', showTooltip)
    }
);

function showTooltip(event) {
    tooltip.classList.toggle('tooltip_active');
    tooltip.style.left = this.offsetLeft + 'px';
    tooltip.style.top = this.getBoundingClientRect().top + 20 + 'px';

    event.preventDefault();

    tooltip.innerText = this.title;
    this.appendChild(tooltip);
}
