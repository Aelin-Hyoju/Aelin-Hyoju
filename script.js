// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll-to-top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Initialize Project Slider (Swiper)
document.addEventListener('DOMContentLoaded', () => {
    const projectSlider = new Swiper('.project-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'slide',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
                allowTouchMove: true,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 1,
                spaceBetween: 40,
                allowTouchMove: true,
            }
        },
        // Handle mobile view
        on: {
            init: function() {
                if (window.innerWidth < 768) {
                    // For mobile, show all items in a single slide
                    const slides = this.slides;
                    slides.forEach(slide => {
                        const grid = slide.querySelector('.project-grid');
                        if (grid) {
                            grid.style.display = 'block';
                        }
                    });
                }
            },
            resize: function() {
                if (window.innerWidth < 768) {
                    // For mobile, show all items in a single slide
                    const slides = this.slides;
                    slides.forEach(slide => {
                        const grid = slide.querySelector('.project-grid');
                        if (grid) {
                            grid.style.display = 'block';
                        }
                    });
                } else {
                    // For desktop, restore grid layout
                    const slides = this.slides;
                    slides.forEach(slide => {
                        const grid = slide.querySelector('.project-grid');
                        if (grid) {
                            grid.style.display = 'grid';
                        }
                    });
                }
            }
        }
    });
});

// Initialize Experience Slider (Swiper)
document.addEventListener('DOMContentLoaded', () => {
    // Check if the element exists before initializing
    const experienceSliderElement = document.querySelector('.experience-slider');
    if (experienceSliderElement) {
        const experienceSlider = new Swiper('.experience-slider', {
            // Optional parameters
            loop: false, // Usually don't loop experience
            slidesPerView: 1, // Show one job at a time by default
            spaceBetween: 30,
            autoHeight: true, // Adjust height to content

            // If we need pagination
            pagination: {
                el: '.experience-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.experience-button-next',
                prevEl: '.experience-button-prev',
            },

            // Responsive breakpoints
            breakpoints: {
                 // when window width is >= 768px
                768: {
                    slidesPerView: 2, // Show two jobs on tablets
                    spaceBetween: 30
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 2, // Still show two (or maybe 3 if design allows)
                    spaceBetween: 40
                }
            }
        });
    }
});

// Initialize Video Slider
const videoSlider = new Swiper('.video-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.video-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.video-slider .swiper-button-next',
        prevEl: '.video-slider .swiper-button-prev',
    },
});

// Initialize Combined Gallery Slider
const gallerySlider = new Swiper('.gallery-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.gallery-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery-slider .swiper-button-next',
        prevEl: '.gallery-slider .swiper-button-prev',
    },
});

// Initialize I Pay Remit Gallery Slider
const ipayRemitSlider = new Swiper('.ipay-remit-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.ipay-remit-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.ipay-remit-slider .swiper-button-next',
        prevEl: '.ipay-remit-slider .swiper-button-prev',
    },
});

// Initialize Nepal ENT Center Gallery Slider
const entCenterSlider = new Swiper('.ent-center-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.ent-center-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.ent-center-slider .swiper-button-next',
        prevEl: '.ent-center-slider .swiper-button-prev',
    },
});

// Mobile Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Initialize About Section Slider
const aboutSwiper = new Swiper('.about-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.about-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.about-button-next',
        prevEl: '.about-button-prev',
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
        }
    }
});

// Initialize Achievements Section Slider
const achievementsSwiper = new Swiper('.achievements-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.achievements-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.achievements-button-next',
        prevEl: '.achievements-button-prev',
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
        }
    }
}); 