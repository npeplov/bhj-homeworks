const timer = setInterval(adsRotate, 1000);

function adsRotate() {
    let spans = document.querySelectorAll('.rotator__case');
    for (let i=0; i < spans.length; i++) {

        let next = i + 1;
        if (i == spans.length - 1)
            next = 0;

        if (spans[i].classList.contains('rotator__case_active')) 
        {
            spans[i].classList.toggle('rotator__case_active');
            spans[next].classList.toggle('rotator__case_active');
            return;
        }
    }
}