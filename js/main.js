const slides = document.querySelectorAll('.slide-item');

function slideShow(){

    const current = document.querySelector('.active')

    current.classList.remove('active');

    if(current.nextElementSibling){

        current.nextElementSibling.classList.add('active')
    } else {
        slides[0].classList.add('active')
    }

    setTimeout('slideShow()', 5000)
}
window.onload = slideShow;