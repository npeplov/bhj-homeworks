const buttons = document.getElementsByClassName("slider__arrow");

const slidesArr = document.querySelectorAll(".slider__items div");

// prev
buttons[0].onclick = () => {
    
    for (let i = slidesArr.length - 1; i < slidesArr.length; i--) {
        if (slidesArr[i].className === "slider__item slider__item_active"){

            slidesArr[i].className = "slider__item";
            if (i  === 0)
                i = slidesArr.length - 1;

            slidesArr[i-1].className = "slider__item slider__item_active";
            break;
        }
    }
}

// next
buttons[1].onclick = () => {
    // найти активный слайд
    for (let i = 0; i < slidesArr.length; i++) {
        if (slidesArr[i].className === "slider__item slider__item_active"){
            slidesArr[i].className = "slider__item";
            if ( (i + 1) === slidesArr.length)
                i = -1;
            slidesArr[i+1].className = "slider__item slider__item_active";
            break;
        }
    }
}