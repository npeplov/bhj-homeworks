const timer = setInterval(adsRotate, 1000);
let index = 0;

function adsRotateSimple() {
    const spans = document.querySelectorAll('.rotator__case');
    spans[index].classList.toggle('rotator__case_active');

    index++;
    if (index === spans.length)
        index = 0;

    spans[index].classList.toggle('rotator__case_active');
}
