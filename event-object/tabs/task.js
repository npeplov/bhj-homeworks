const tabs = Array.from(document.querySelectorAll('.tab'));
const tabs_cont = Array.from(document.querySelectorAll('.tab__content'));

function setActive() {
    // деактивировать все
    tabs.forEach( (element) => {
        element.className = 'tab';
    });
    tabs_cont.forEach( (element) => {
        element.className = 'tab__content';
    })
    
    // переданную evenlister'ом вкладку активировать
    this.classList.add('tab_active');

    // получить id чтобы активировать нужный div c контентом
    const i = tabs.findIndex( (elem) => {
        return elem.classList.contains('tab_active')
    });
    tabs_cont[i].classList.add('tab__content_active');
}

tabs.forEach( (element) => {
    element.addEventListener('click', setActive);
})
