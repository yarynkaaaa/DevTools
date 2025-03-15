const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
let cardWidth = cards[0].offsetWidth + 60; // Ширина картки + відступ
let currentIndex = 0;

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    } else if (currentIndex >= cards.length) {
        currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
