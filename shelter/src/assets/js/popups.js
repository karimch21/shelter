window.addEventListener('click', clickWindowHandler);

function clickWindowHandler(e) {

  defineCard(e.target)
}

function openPopup() {

}

function defineCard(target) {
  let sliderItem = target.closest('.slider__item');
  let friendsItem = target.closest('.friends__item');

  openPopup();
}

