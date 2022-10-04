let offset = 0; //смещение от левого края
let sliderLine = document.querySelector('.reviews__slider-line');

document.querySelector('.reviews__next').addEventListener('click', function () {
    offset += 834;
    if (offset > 834) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.reviews__prev').addEventListener('click', function () {
    offset -= 834;
    if (offset < 0) {
        offset = 834;
    }
    sliderLine.style.left = -offset + 'px';
});