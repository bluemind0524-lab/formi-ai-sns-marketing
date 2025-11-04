// DOM Elements
const contactForm = document.getElementById('contactForm');
const scrollElements = document.querySelectorAll('.slide-up');

// Smooth Scroll for Anchor Links
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

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Optional: stop observing after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all scroll animation elements
scrollElements.forEach(element => {
    element.classList.add('animate-on-scroll');
    observer.observe(element);
});

// Scroll to Top Button
const createScrollToTopButton = () => {
    const button = document.createElement('div');
    button.className = 'scroll-to-top';
    button.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    `;
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    document.body.appendChild(button);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
};

createScrollToTopButton();

// Form Validation
const validateForm = {
    name: (value) => {
        return value.trim().length >= 2;
    },
    phone: (value) => {
        const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
        return phoneRegex.test(value.replace(/\s/g, ''));
    },
    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
};

// Show Error Message
const showError = (input, show = true) => {
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        if (show) {
            errorMessage.classList.add('show');
            errorMessage.classList.remove('hidden');
            input.classList.add('border-red-500');
        } else {
            errorMessage.classList.remove('show');
            errorMessage.classList.add('hidden');
            input.classList.remove('border-red-500');
        }
    }
};

// Real-time Validation
const setupRealTimeValidation = () => {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    
    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            const isValid = validateForm.name(nameInput.value);
            showError(nameInput, !isValid);
        });
        
        nameInput.addEventListener('input', () => {
            if (nameInput.classList.contains('border-red-500')) {
                const isValid = validateForm.name(nameInput.value);
                if (isValid) showError(nameInput, false);
            }
        });
    }
    
    if (phoneInput) {
        // Auto-format phone number
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/[^0-9]/g, '');
            if (value.length > 3 && value.length <= 7) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else if (value.length > 7) {
                value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
            }
            e.target.value = value;
            
            if (phoneInput.classList.contains('border-red-500')) {
                const isValid = validateForm.phone(e.target.value);
                if (isValid) showError(phoneInput, false);
            }
        });
        
        phoneInput.addEventListener('blur', () => {
            const isValid = validateForm.phone(phoneInput.value);
            showError(phoneInput, !isValid);
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const isValid = validateForm.email(emailInput.value);
            showError(emailInput, !isValid);
        });
        
        emailInput.addEventListener('input', () => {
            if (emailInput.classList.contains('border-red-500')) {
                const isValid = validateForm.email(emailInput.value);
                if (isValid) showError(emailInput, false);
            }
        });
    }
};

setupRealTimeValidation();

// Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value
        };
        
        // Validate all required fields
        let isValid = true;
        
        const nameValid = validateForm.name(formData.name);
        const phoneValid = validateForm.phone(formData.phone);
        const emailValid = validateForm.email(formData.email);
        
        showError(document.getElementById('name'), !nameValid);
        showError(document.getElementById('phone'), !phoneValid);
        showError(document.getElementById('email'), !emailValid);
        
        if (!nameValid || !phoneValid || !emailValid) {
            isValid = false;
        }
        
        if (!isValid) {
            // Scroll to first error
            const firstError = contactForm.querySelector('.border-red-500');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }
        
        // Disable submit button and show loading
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="loading"></span> 전송 중...';
        
        // Simulate form submission (in production, send to backend)
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Log form data (in production, send to backend)
            console.log('Form submitted:', formData);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
}

// Show Success Message
const showSuccessMessage = () => {
    // Create success message element if it doesn't exist
    let successMessage = document.querySelector('.success-message');
    if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        contactForm.insertBefore(successMessage, contactForm.firstChild);
    }
    
    successMessage.innerHTML = `
        <svg class="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        상담 신청이 완료되었습니다! 빠른 시일 내에 연락드리겠습니다.
    `;
    successMessage.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

// Header Scroll Effect (optional)
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow to header on scroll
    if (header) {
        if (scrollTop > 0) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Parallax Effect for Hero Section (subtle)
const hero = document.getElementById('hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Add animation delay to cards and features
const addStaggeredAnimation = (selector, baseDelay = 0.1) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * baseDelay}s`;
    });
};

// Apply staggered animations
addStaggeredAnimation('.card', 0.15);
addStaggeredAnimation('.feature-card', 0.1);
addStaggeredAnimation('.process-step', 0.1);

// Lazy Loading for Images (if you add images later)
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

lazyLoadImages();

// Analytics Event Tracking (example)
const trackEvent = (category, action, label) => {
    console.log(`Analytics: ${category} - ${action} - ${label}`);
    // In production, integrate with Google Analytics or other analytics tools
    // gtag('event', action, { 'event_category': category, 'event_label': label });
};

// Track CTA button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent.trim();
        trackEvent('CTA', 'click', buttonText);
    });
});

// Track form interactions
if (contactForm) {
    contactForm.addEventListener('focus', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            trackEvent('Form', 'field_focus', e.target.name);
        }
    }, true);
}

// Performance Monitoring
window.addEventListener('load', () => {
    // Log page load time
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
    trackEvent('Performance', 'page_load', `${loadTime}ms`);
});

// Console Welcome Message
console.log('%c포미서비스 AI SNS 마케팅', 'font-size: 24px; font-weight: bold; color: #1243A6;');
console.log('%c우리와 함께 성장하세요!', 'font-size: 14px; color: #F24822;');
console.log('Contact: contact@formi.co.kr');

