// при клике на a показать див с подсказкой
const aArr = Array.from(document.querySelectorAll('a.has-tooltip'));

let tooltip = document.createElement('div');
tooltip.className = 'tooltip tooltip_active';

aArr.forEach( (a) => {
    a.addEventListener('click', showTooltip)
    }
);

function showTooltip(event) {
    // переключить если клик по той же ссылке tooltip
    if (this === tooltip.parentElement)
        tooltip.classList.toggle('tooltip_active');

    tooltip.style.left = this.offsetLeft + 'px';
    tooltip.style.top = this.getBoundingClientRect().top + 20 + 'px';

    event.preventDefault();

    tooltip.innerText = this.title;
    this.appendChild(tooltip);
}
