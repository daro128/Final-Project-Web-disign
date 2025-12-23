// ====== SLIDER ======
const btns = document.querySelectorAll(".Btn");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let slideInterval;

// Function to show slide by index
function slider_nav(index) {
    // Remove active from all slides & buttons
    btns.forEach(btn => btn.classList.remove("active"));
    slides.forEach(slide => slide.classList.remove("active"));

    // Add active to current slide & button
    btns[index].classList.add("active");
    slides[index].classList.add("active");

    currentSlide = index;

    // Animate elements in the active slide
    handleScrollAnimation();
}

// Auto slide every 5 seconds
function autoSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slider_nav(currentSlide);
}

// Start auto sliding
function startAutoSlide() {
    slideInterval = setInterval(autoSlide, 5000);
}

// Button click control
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        clearInterval(slideInterval);   // Stop auto slide temporarily
        slider_nav(i);                  // Show selected slide
        startAutoSlide();               // Restart auto slide
    });
});

// Initialize
startAutoSlide();


// ====== SCROLL ANIMATION ======
const scrollElements = document.querySelectorAll('.scroll-animate');

// Only animate elements inside the ACTIVE slide
const handleScrollAnimation = () => {
    const activeSlide = document.querySelector('.slide.active');
    if (!activeSlide) return;

    const elements = activeSlide.querySelectorAll('.scroll-animate');
    elements.forEach(el => {
        el.classList.add('show'); // add show class for animation
    });
};

// Optional: Animate other scroll elements on page
const otherScrollElements = document.querySelectorAll('.scroll-animate:not(.slide .scroll-animate)');

const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    return (
        elementTop <= (window.innerHeight - offset) &&
        elementBottom >= 0
    );
};

const displayScrollElement = (element) => {
    element.classList.add('show');
};

const hideScrollElement = (element) => {
    element.classList.remove('show');
};

const handleOtherScroll = () => {
    otherScrollElements.forEach(el => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleOtherScroll);
handleOtherScroll(); // trigger on page load

