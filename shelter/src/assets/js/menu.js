const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.burger-menu');

btnMenu.addEventListener('click', () => {
  clickBtnMenuHandler(btnMenu, menu, onOffLockScrollBody)
});

window.addEventListener('click', clickWindowHandler)

function clickBtnMenuHandler(btnMenu, menu, bodyStyle) {
  btnMenu.classList.toggle('burger-menu_active')
  menu.classList.toggle('menu_active')
  bodyStyle()
}

function onOffLockScrollBody() {
  document.body.classList.toggle('body_lock')
}

function clickWindowHandler(e) {
  closeMenu(e, menu, btnMenu)
}

function closeMenu(e, menu, btnMenu) {
  const targetBtnMenu = e.target.closest('.burger-menu');
  const targetMenu = e.target.closest('.menu');
  const targetMenuLink = e.target.closest('.menu__link');

  if (targetMenuLink) {
    clickBtnMenuHandler(btnMenu, menu, onOffLockScrollBody)
  }
  if (!targetMenu && !targetBtnMenu) {
    clickBtnMenuHandler(btnMenu, menu, onOffLockScrollBody)
  }
}