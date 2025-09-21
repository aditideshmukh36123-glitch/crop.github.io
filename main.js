// -------------------- Mobile Navbar --------------------
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// -------------------- Flip card logic --------------------
const flipCard = document.getElementById('weather-card');
const manualBtn = document.getElementById('manual-btn');
const backBtn = document.getElementById('back-btn');

// Show manual button if geolocation fails
function showManualButton() {
    manualBtn.style.display = 'inline-block';
}

// Flip to back
manualBtn.addEventListener('click', () => {
    flipCard.classList.add('flipped');
});

// Flip to front
backBtn.addEventListener('click', () => {
    flipCard.classList.remove('flipped');
});
