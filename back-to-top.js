let goToBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goToBtn.addEventListener('click', backToTop);

function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goToBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
        goToBtn.classList.remove("back_to_top-show");
    }
}

function backToTop() {
    if (window.pageYOffset >0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0)
    }
}