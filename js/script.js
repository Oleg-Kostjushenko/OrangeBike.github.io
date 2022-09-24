// -----------Slider---------
let offset = 0;
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 300;
    if (offset > 900) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 300;
    if (offset < 0) {
        offset = 900
    }
    sliderLine.style.left = -offset + 'px';
});

//---------------Button Up---------------

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block:"start"
        })
    })
}

/////////////////////////////////
