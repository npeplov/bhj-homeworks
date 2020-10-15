const buttons = document.getElementsByClassName("slider__arrow");
const slidesArr = Array.from(document.querySelectorAll(".slider__items div"));

function getActiveSlideIndex() {
    const currentSlideIndex = slidesArr.findIndex( (elem) => 
        elem.classList.contains("slider__item_active")
    );

    slidesArr[currentSlideIndex].classList.remove("slider__item_active");
    return currentSlideIndex;
}

// prev
buttons[0].onclick = () => {

    let currentSlide = getActiveSlideIndex();

    if (currentSlide === 0)
        currentSlide = slidesArr.length;

    slidesArr[currentSlide - 1].classList.add("slider__item_active");
}

// next
buttons[1].onclick = () => {

    let currentSlide = getActiveSlideIndex();

    if (currentSlide === slidesArr.length - 1)
        currentSlide = -1;

    slidesArr[currentSlide + 1].classList.add("slider__item_active");
}
