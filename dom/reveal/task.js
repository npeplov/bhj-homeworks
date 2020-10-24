function showDiv() {
    divsClassReveal.forEach( (div) => {
        const top = div.getBoundingClientRect().top;
        const wh = window.innerHeight;

        if (top + wh / 4 < wh && top > wh / 4)
            div.className='reveal reveal_active';
        else
            div.className='reveal';
    });
}

document.addEventListener('scroll', showDiv);

divsClassReveal = Array.from(document.querySelectorAll('.reveal'));
