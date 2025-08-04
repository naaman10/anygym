// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .download-content, .contact');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Add hover effects for download buttons
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Registration Modal
    const modal = document.getElementById('registrationModal');
    const registerBtn = document.getElementById('registerBtn');
    const closeBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.getElementById('registrationForm');

    // Gym Group Modal
    const gymGroupModal = document.getElementById('gymGroupModal');
    const gymGroupBtn = document.getElementById('gymGroupBtn');
    const closeGymGroupBtn = document.getElementById('closeGymGroupModal');
    const cancelGymGroupBtn = document.getElementById('cancelGymGroupBtn');
    const gymGroupForm = document.getElementById('gymGroupForm');

    // Open registration modal
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Open gym group modal
    gymGroupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        gymGroupModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Close modal functions
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        form.reset();
    }

    function closeGymGroupModal() {
        gymGroupModal.classList.remove('show');
        document.body.style.overflow = '';
        gymGroupForm.reset();
    }

    // Close registration modal
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close gym group modal
    closeGymGroupBtn.addEventListener('click', closeGymGroupModal);
    cancelGymGroupBtn.addEventListener('click', closeGymGroupModal);
    gymGroupModal.addEventListener('click', function(e) {
        if (e.target === gymGroupModal) {
            closeGymGroupModal();
        }
    });

    // Close on Escape key (works for both modals)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal.classList.contains('show')) {
                closeModal();
            } else if (gymGroupModal.classList.contains('show')) {
                closeGymGroupModal();
            }
        }
    });

    // Handle registration form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Registration data:', data);
        alert('Thank you for your interest! We\'ll be in touch soon.');
        closeModal();
    });

    // Handle gym group form submission
    gymGroupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(gymGroupForm);
        const data = Object.fromEntries(formData);
        
        console.log('Gym Group Partnership data:', data);
        alert('Thank you for your partnership interest! Our team will contact you soon.');
        closeGymGroupModal();
    });
});

// Add mobile menu functionality (for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add this to HTML if you want a mobile menu button
// <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
//     <i class="fas fa-bars"></i>
// </button> 