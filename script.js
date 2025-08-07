// Smooth scrolling for navigation links
console.log('Script.js loaded successfully');
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            console.log('Link clicked, targetId:', targetId, 'type:', typeof targetId);
            
            // Only proceed if targetId is a valid selector (starts with # and has more than just #)
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                console.log('Valid targetId, proceeding with scroll');
                try {
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = targetSection.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    console.error('Error with querySelector:', error);
                }
            } else {
                console.log('Invalid targetId, skipping scroll');
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

    console.log('Modal elements found:', {
        modal: modal,
        registerBtn: registerBtn,
        closeBtn: closeBtn,
        cancelBtn: cancelBtn,
        form: form
    });

    // Gym Group Modal
    const gymGroupModal = document.getElementById('gymGroupModal');
    const gymGroupBtn = document.getElementById('gymGroupBtn');
    const closeGymGroupBtn = document.getElementById('closeGymGroupModal');
    const cancelGymGroupBtn = document.getElementById('cancelGymGroupBtn');
    const gymGroupForm = document.getElementById('gymGroupForm');

    console.log('Gym Group Modal elements found:', {
        gymGroupModal: gymGroupModal,
        gymGroupBtn: gymGroupBtn,
        closeGymGroupBtn: closeGymGroupBtn,
        cancelGymGroupBtn: cancelGymGroupBtn,
        gymGroupForm: gymGroupForm
    });

    // Open registration modal
    console.log('registerBtn found:', registerBtn);
    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Main register button clicked');
            if (modal) {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
                console.log('Modal should be visible now');
            } else {
                console.log('Modal not found!');
            }
        });
    } else {
        console.log('Register button not found!');
    }

    // Open registration modal from features section
    const registerBtnFeatures = document.getElementById('registerBtnFeatures');
    console.log('registerBtnFeatures found:', registerBtnFeatures);
    if (registerBtnFeatures) {
        registerBtnFeatures.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Features register button clicked');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }

    // Open gym group modal
    const gymGroupBtns = document.querySelectorAll('#gymGroupBtn');
    console.log('gymGroupBtns found:', gymGroupBtns.length);
    gymGroupBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Gym group button clicked');
            if (gymGroupModal) {
                gymGroupModal.classList.add('show');
                document.body.style.overflow = 'hidden';
                console.log('Gym group modal should be visible now');
            } else {
                console.log('Gym group modal not found!');
            }
        });
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
        
        // Submit to Netlify
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            console.log('Registration form submitted to Netlify');
            alert('Thank you for your interest! We\'ll be in touch soon.');
            closeModal();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    });

    // Handle gym group form submission
    gymGroupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(gymGroupForm);
        
        // Submit to Netlify
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            console.log('Gym Group Partnership form submitted to Netlify');
            alert('Thank you for your partnership interest! Our team will contact you soon.');
            closeGymGroupModal();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    });
});

// Add mobile menu functionality (for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Add this to HTML if you want a mobile menu button
// <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
//     <i class="fas fa-bars"></i>
// </button> 