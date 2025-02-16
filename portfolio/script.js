// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    document.documentElement.style.setProperty('--transition-speed', '0.3s');
    body.classList.toggle('dark-mode');
    
    const icon = themeToggle.querySelector('i');
    icon.style.transform = 'rotate(180deg)';
    
    setTimeout(() => {
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
        icon.style.transform = 'rotate(0deg)';
    }, 150);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.menu-overlay');

// Toggle menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

// Close menu
function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        closeMenu();
        
        // Smooth scroll to section after menu closes
        setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
});

// Close menu on resize (in case viewport changes)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});

// Scroll Reveal Animation
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.glass');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add smooth parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add intersection observer for better scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .about-content, .contact-container').forEach(element => {
    observer.observe(element);
});

// Add hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Add smooth scroll for project carousel
const projectGrid = document.querySelector('.project-grid');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

scrollLeft.addEventListener('click', () => {
    projectGrid.scrollBy({
        left: -370,
        behavior: 'smooth'
    });
});

scrollRight.addEventListener('click', () => {
    projectGrid.scrollBy({
        left: 370,
        behavior: 'smooth'
    });
});

// Hide scroll buttons when not needed
const checkScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = projectGrid;
    scrollLeft.style.display = scrollLeft <= 0 ? 'none' : 'flex';
    scrollRight.style.display = scrollLeft >= scrollWidth - clientWidth - 1 ? 'none' : 'flex';
};

projectGrid.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);
checkScroll(); // Initial check 