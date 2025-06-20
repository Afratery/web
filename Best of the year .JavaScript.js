let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.addEventListener('click', showNextSlide);
document.addEventListener('touchstart', showNextSlide);

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Optional: Auto slide every 5 seconds
// setInterval(showNextSlide, 5000);