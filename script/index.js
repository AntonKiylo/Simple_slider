const prevSlide = document.getElementById('prev');
const nextSlide = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function slideNextImage() {
    slides[slideIndex].classList.remove('active');
    slideIndex++;
    
    if (slideIndex > (slides.length - 1)) {
        slideIndex = 0;
    };
    
    slides[slideIndex].classList.add('active');
}

function slidePrevImage() {
    slides[slideIndex].classList.remove('active');
    slideIndex--;
    
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    };
    
    slides[slideIndex].classList.add('active');
}

nextSlide.addEventListener('click', slideNextImage);
prevSlide.addEventListener('click', slidePrevImage);