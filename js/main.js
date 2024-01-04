const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.header__burger-btn');
const allNavItems = document.querySelectorAll('.nav-mobile__list-item');

const handleNav = () => {
    nav.classList.toggle('nav-mobile--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-mobile--active')
        })
    })
}



navBtn.addEventListener('click', handleNav);
