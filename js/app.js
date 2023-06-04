document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector('.ul__question')
    ul.addEventListener('click', (e) => {
        e = e.target
        if (e.tagName === 'LI') {
            e.classList.toggle('li__question--act')
        }
    })
})