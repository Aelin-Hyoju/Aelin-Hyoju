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
        slidesPerView: 1, // Show one slide at a time initially
        spaceBetween: 30,
        autoplay: {
            delay: 4000, // Time in ms between slides
            disableOnInteraction: false, // Autoplay continues after user interaction
        },

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
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
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

// Initialize video slider
const videoSwiper = new Swiper('.video-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            // Pause all videos
            document.querySelectorAll('.video-slider video').forEach(video => {
                video.pause();
            });
            // Play the current slide's video
            const currentVideo = this.slides[this.activeIndex].querySelector('video');
            if (currentVideo) {
                currentVideo.play();
            }
        }
    }
});

// Play the first video when the page loads
window.addEventListener('load', () => {
    const firstVideo = document.querySelector('.video-slider video');
    if (firstVideo) {
        firstVideo.play();
    }
}); 