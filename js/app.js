document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector('.ul__question')
    const header = document.querySelector('.header')
    const ham = document.querySelector('.ham__header')
    const nav = document.querySelector('.nav__header')
    ul.addEventListener('click', (e) => {
        e = e.target
        if (e.tagName === 'LI') {
            e.classList.toggle('li__question--act')
        }
    })
    ham.addEventListener('click', (e) => {
        ham.classList.toggle('ham__header--act')
        nav.classList.toggle('nav__header--act')
        header.classList.toggle('header--act')
    })
})