const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Add animation on scroll
function reveal() {
    const reveals = document.querySelectorAll('.project-card, .profile-pic, .profile-text');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Initial check for elements in view
reveal();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
});

// Clone skills for infinite scroll
document.addEventListener('DOMContentLoaded', () => {
    const skillsContent = document.querySelector('.skills-content');
    if (skillsContent) {
        skillsContent.innerHTML += skillsContent.innerHTML;
    }
});
