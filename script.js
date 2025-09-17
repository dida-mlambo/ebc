// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('active'));
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('active'));
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    // Special case for home section when at top of page
    if (window.pageYOffset < 100) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#home') {
                link.classList.add('active');
            }
        });
    }
});

// Donation Amount Selection
document.addEventListener('DOMContentLoaded', function() {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('custom-amount');
    
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Set the custom amount input value
            const amount = this.getAttribute('data-amount');
            customAmountInput.value = amount;
        });
    });
    
    // Clear button selection when custom amount is entered
    customAmountInput.addEventListener('input', function() {
        amountButtons.forEach(btn => btn.classList.remove('active'));
    });
});

// Form Submission Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Donation Form
    const donateForm = document.querySelector('.donate-form');
    if (donateForm) {
        donateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const amount = document.getElementById('custom-amount').value;
            const name = document.getElementById('donor-name').value;
            const email = document.getElementById('donor-email').value;
            
            if (!amount || amount <= 0) {
                alert('Please enter a valid donation amount.');
                return;
            }
            
            if (!name.trim()) {
                alert('Please enter your full name.');
                return;
            }
            
            if (!email.trim() || !isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate donation processing
            alert(`Thank you ${name}! Your donation of $${amount} is being processed. You will receive a confirmation email at ${email}.`);
            
            // Reset form
            donateForm.reset();
            document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
        });
    }
    
    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            alert(`Thank you ${name}! Your message has been sent. We will respond to ${email} within 24 hours.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Email Validation Helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.feature-card, .course-card, .calendar-item, .mission-card, .vision-card, .news-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter Animation for Statistics (if added later)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = target / 100;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 20);
        } else {
            counter.innerText = target;
        }
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroLogo = document.querySelector('.hero-logo-img');
    
    if (heroLogo) {
        const rate = scrolled * -0.5;
        heroLogo.style.transform = `translateY(${rate}px)`;
    }
});

// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen if it exists
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 1000);
    }
    
    // Add loaded class to body
    document.body.classList.add('loaded');
});

// Search Functionality (if search is added)
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            if (query.length > 2) {
                // Simulate search results
                searchResults.innerHTML = `
                    <div class="search-result">
                        <h4>Search Results for "${query}"</h4>
                        <p>Search functionality would be implemented here.</p>
                    </div>
                `;
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        });
    }
}

// Loading Screen Management
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        const loader = document.querySelector('.loader-container');
        if (loader) {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
            
            // Remove loader from DOM after transition
            setTimeout(() => {
                loader.remove();
                // Initialize slider after loading screen is removed
                initializeSlider();
            }, 500);
        }
    }, 2000);
    
    console.log('Evangel Bible College website loaded successfully!');
    
    // Add any additional initialization here
    initializeSearch();
});

// Slider Functionality
let currentSlideIndex = 0;
let slides = [];
let indicators = [];
let slideInterval;

function initializeSlider() {
    // Get fresh references to slides and indicators
    slides = document.querySelectorAll('.slide');
    indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    console.log('Initializing slider with', slides.length, 'slides');
    
    // Ensure first slide is active
    showSlide(0);
    
    // Start auto-slide after a delay
    setTimeout(() => {
        startAutoSlide();
    }, 1000);
    
    // Pause auto-slide on hover
    const sliderContainer = document.querySelector('.hero-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }
}

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentSlideIndex = index;
}

function changeSlide(direction) {
    let newIndex = currentSlideIndex + direction;
    
    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
    
    showSlide(newIndex);
}

function currentSlide(index) {
    showSlide(index - 1);
}

function nextSlide() {
    changeSlide(1);
}

function startAutoSlide() {
    stopAutoSlide(); // Clear any existing interval
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Touch/Swipe Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - next slide
            changeSlide(1);
        } else {
            // Swiped right - previous slide
            changeSlide(-1);
        }
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === 'Escape') {
        // ESC key closes mobile menu
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('active'));
        }
    }
});

// Initialize all functionality
