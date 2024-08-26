
document.addEventListener("DOMContentLoaded", function() {
    const sliderImages = document.querySelector('.slider-images');
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;
    const totalImages = images.length;
    const interval = 3000; // Tiempo en milisegundos (3 segundos)

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        sliderImages.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, interval);
});

