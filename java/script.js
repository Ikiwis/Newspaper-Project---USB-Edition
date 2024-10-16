// JavaScript to handle the carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showSlide(index) {
    // Loop back to the first or last image when the index goes out of range
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    
    // Hide all images
    images.forEach(image => image.style.display = 'none');
    
    // Show the current image
    images[currentIndex].style.display = 'block';
}

// Move to the next or previous slide
function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Initially show the first slide
showSlide(currentIndex);