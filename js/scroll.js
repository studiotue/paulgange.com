// scroll fade transition 
function initScrollTransition() {
    const hero = document.querySelector('.hero');
    const bio = document.querySelector('.bio-section');
    
    if (!hero || !bio) return;
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        const fadeProgress = Math.min(scrollPosition / windowHeight, 1);
        
        
        hero.style.opacity = 1 - fadeProgress;
        hero.style.transform = `translateY(-${fadeProgress * 50}px)`;
        
        
        bio.style.opacity = fadeProgress;
        bio.style.transform = `translateY(${(1 - fadeProgress) * 50}px)`;
    });
}

// page load
document.addEventListener('DOMContentLoaded', initScrollTransition);

const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});