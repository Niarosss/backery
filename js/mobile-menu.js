const mobileMenu = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.menu-btn-open');
const mobileBtnClose = document.querySelector('.menu-btn-close');

const toggleModal = () => mobileMenu.classList.toggle('is-open');

mobileBtnOpen.addEventListener('click', toggleModal);
mobileBtnClose.addEventListener('click', toggleModal);
