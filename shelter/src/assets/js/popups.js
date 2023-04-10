import cards from './bdCard'

const newCards = cards.reduce((acc, obj) => {
  acc[obj.name] = obj;
  return acc;
}, {});
const popupTitle = document.querySelector('.popup__title-title');
const popupImg = document.querySelector('.popup__img');
const popupTitleText = document.querySelector('.popup__title-text');
const popupText = document.querySelector('.popup__text')
const popupItems = document.querySelectorAll('.popup__item');
const popupItemSpan = document.querySelectorAll('.popup__item-span');
const popupItemHead = document.querySelectorAll('.popup__item-head');
const popup = document.querySelector('.popup');
const popupWrap = document.querySelector('.popup-wrap');
const btnPopupClose = document.querySelector('.popup__btn');

window.addEventListener('click', clickWindowHandler);
btnPopupClose.addEventListener('click', closePopup)
function clickWindowHandler(e) {
  defineCard(e.target)
}

function openPopup(data) {
  cleareDataPopup()

  popupTitleText.textContent = data.type + ' ' + data.breed;
  popupTitle.textContent = data.name;
  popupImg.src = data.img;
  popupText.textContent = data.description
  popupItemSpan[0].textContent = data.age;
  popupItemHead[0].textContent = 'Age:';
  popupItemSpan[1].textContent = data.inoculations;
  popupItemHead[1].textContent = 'Inoculations:'
  popupItemSpan[2].textContent = (data.diseases).join(',');
  popupItemHead[2].textContent = 'Diseases:'
  popupItemSpan[3].textContent = (data.parasites).join(',');
  popupItemHead[3].textContent = 'Parasites:'

  popup.classList.add('popup_active');
  popupWrap.classList.add('popup-wrap_active')
}

function cleareDataPopup() {
  popupTitleText.textContent = ''
  popupTitle.textContent = ''
  popupText.textContent = ''
  popupImg.src = '#'
  for (let i = 0; i < popupItemSpan.length; i++) {
    popupItemSpan[i].textContent = ''
    popupItemHead[i].textContent = '';
  }
}

function closePopup() {
  popup.classList.remove('popup_active');
  popupWrap.classList.remove('popup-wrap_active')
  cleareDataPopup()
}

function defineCard(target) {
  let sliderItem = target.closest('.slider__item');
  let friendsItem = target.closest('.friends__item');

  if (sliderItem) openPopup(newCards[sliderItem.dataset.name])
  if (friendsItem) openPopup(newCards[friendsItem.dataset.name])
}

