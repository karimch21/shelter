const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.burger-menu');

btnMenu.addEventListener('click', () => {
  openMenu()
});

window.addEventListener('click', (e) => {
  closeMenu(e)
})


function openMenu() {
  btnMenu.classList.toggle('burger-menu_active')
  menu.classList.toggle('menu_active')
  document.body.classList.toggle('body_lock')
}


function onLockScrollBody() {
  document.body.classList.add('body_lock')
}
function offLockScrollBody() {
  document.body.classList.remove('body_lock')
}


function closeMenu(e) {
  const targetBtnMenu = e.target.closest('.burger-menu');
  const targetMenu = e.target.closest('.menu');
  const targetMenuLink = e.target.closest('.menu__link');

  if (targetMenuLink) {
    removeOpenStylesMenu()
  }
  if (!targetMenu && !targetBtnMenu) {
    removeOpenStylesMenu()
  }
}


function removeOpenStylesMenu() {
  btnMenu.classList.remove('burger-menu_active')
  menu.classList.remove('menu_active')
  offLockScrollBody()
}