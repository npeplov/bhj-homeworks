const bookControl = Array.from(document.querySelectorAll('.font-size'));

// Клик по изменению шрифта
bookControl.forEach((element) => {
    element.addEventListener('click', changeFont);
    element.href = '#';
});


function changeFont() {
    clearAllCircles();
    this.classList.add('font-size_active');

    const divBook = document.querySelector('.book');
    divBook.className = 'book';

    if (this.classList.contains('font-size_small')) 
        divBook.classList.add('book_fs-small');
        
    else if (this.classList.contains('font-size_big')) 
        divBook.classList.add('book_fs-big');
}

function clearAllCircles() {
    bookControl.forEach( (a) => {
        a.classList.remove('font-size_active')
    });
}
