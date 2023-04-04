const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.burger-menu');

btnMenu.addEventListener('click', () => {
  clickBtnMenuHandler(btnMenu, menu)
});

function clickBtnMenuHandler(btnMenu, menu) {
  btnMenu.classList.toggle('burger-menu_active')
  menu.classList.toggle('menu_active')
  activeLockScrollBody()
}

function activeLockScrollBody() {
  document.body.classList.toggle('body_lock')
}