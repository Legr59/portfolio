// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.85)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Page transition effect for internal links
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only animate for local links
            if (href && !href.startsWith('http')) {
                e.preventDefault();
                document.body.classList.add('page-exit');

                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

    // Intersection Observer for staggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animation based on element index
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.link-card, .highlight-card, .content-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animation class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .page-exit {
            opacity: 0 !important;
            transform: translateY(-10px) !important;
            transition: opacity 0.3s ease, transform 0.3s ease !important;
        }
        .page-enter {
            animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes fadeSlideIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Add entrance animation
    document.body.classList.add('page-enter');
});

// Fix for back/forward button navigation - always ensure page is visible
window.addEventListener('pageshow', function () {
    // Always reset the body to visible state
    document.body.classList.remove('page-exit');
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});

// Handle popstate (browser back/forward)
window.addEventListener('popstate', function () {
    document.body.classList.remove('page-exit');
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});

// Ensure visibility when window gains focus
window.addEventListener('focus', function () {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});
