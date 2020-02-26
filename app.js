let mouseCursor = document.querySelector('.curosr');
let navLink = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);


function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLink.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('link-hoverd');
    })
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('link-hoverd');
    })
})