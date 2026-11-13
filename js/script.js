window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const content = document.querySelector('.content');
    
    if (content) {
        content.style.transform = `translateY(${scrolled * 0.5}px)`;
        content.style.opacity = 1 - (scrolled / 500);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
});

