// ====== SLIDER ======
const btns = document.querySelectorAll(".Btn");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let slideInterval;

function slider_nav(index) {
    btns.forEach(btn => btn.classList.remove("active"));
    slides.forEach(slide => slide.classList.remove("active"));
    btns[index].classList.add("active");
    slides[index].classList.add("active");
    currentSlide = index;
    handleScrollAnimation();
}

function autoSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slider_nav(currentSlide);
}


function startAutoSlide() {
    slideInterval = setInterval(autoSlide, 5000);
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        clearInterval(slideInterval);  
        slider_nav(i);                
        startAutoSlide();           
    });
});
startAutoSlide();
const scrollElements = document.querySelectorAll('.scroll-animate');
const handleScrollAnimation = () => {
    const activeSlide = document.querySelector('.slide.active');
    if (!activeSlide) return;
    const elements = activeSlide.querySelectorAll('.scroll-animate');
    elements.forEach(el => {
        el.classList.add('show'); 
    });
};
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
handleOtherScroll(); 

