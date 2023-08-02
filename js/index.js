AOS.init();

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.addEventListener('load', function () {
    const projects = this.document.querySelectorAll('[data-link]');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            window.open(project.getAttribute('data-link'), '_blank')
        });
    });

    new Swiper('.swiper', { // Optional parameters
        slidesPerView: 7,
        loop: true,
        spaceBetween: 10,
        autoplay: true
    });

    new Swiper('.swiper-projects', { // Optional parameters
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
            delay: 3000
        },
        speed: 500,
        loop: true
    });
});