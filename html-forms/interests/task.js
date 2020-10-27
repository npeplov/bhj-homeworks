// Реализуйте функционал, когда при клике на галочку будут проставляться/сниматься галочки вложенных списков
const checkboxes = Array.from(document.querySelectorAll('div > ul > li > label > input'));

checkboxes.forEach( (checkbox) => {
    checkbox.addEventListener('change', including)
} )

function including() {
    const parentLi = this.closest('li');
    const inputs = Array.from(parentLi.querySelectorAll('ul.interests input'));
    const parentChecked = parentLi.querySelector('input').checked;

    inputs.forEach( (checkbox) => {
        checkbox.checked = parentChecked;
    })
}
