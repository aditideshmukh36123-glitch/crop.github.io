// Mobile Navbar toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Flip card logic
const flipCard = document.getElementById('weather-card');
const manualBtn = document.getElementById('manual-btn');
const backBtn = document.getElementById('back-btn');

manualBtn.addEventListener('click', () => {
    flipCard.classList.add('flipped');
});

backBtn.addEventListener('click', () => {
    flipCard.classList.remove('flipped');
});
