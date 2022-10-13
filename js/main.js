const buttonMenu = document.querySelector('.menu__burger');

buttonMenu.addEventListener('click', () => {
    const burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu__list');
    const body = document.querySelector('.body');
    burger.classList.toggle('js-active');
    menu.classList.toggle('js-active');
    body.classList.toggle('js-active');
})
