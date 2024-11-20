// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Typing animation
var typed = new Typed(".typing", {
    strings: ["Data Analyst", "Software Engineer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed2 = new Typed(".typing-2", {
    strings: ["Data Analyst", "Software Engineer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Menu toggle
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

// Navbar scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    form.reset();
    alert('Message sent successfully!');
}); 
