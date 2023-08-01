AOS.init();

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.addEventListener('load', function() {
    const projects = this.document.querySelectorAll('[data-link]');
    projects.forEach(project => {
        console.log(project)
        project.addEventListener('click', () => {
            window.open(project.getAttribute('data-link'), '_blank')
        });
    })
});