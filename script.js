// Optional JS for menu toggle (if you add hamburger)
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle?.addEventListener('click', () => {
    menu.classList.toggle('active');
});
