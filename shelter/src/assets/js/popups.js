import cards from './bdCard'

(function () {
  const newCards = cards.reduce((acc, obj) => {
    acc[obj.name] = obj;
    return acc;
  }, {});
  const popupBox = document.querySelector('.popup-box');
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
    let targetSliderItem = e.target.closest('.slider__item');
    let targetFriendsItem = e.target.closest('.friends__item');
    defineCard(e.target)


    if ((window.location.pathname).includes('pets')) {
      if (!e.target.closest('.popup') && !targetFriendsItem) {
        console.log(221111)
        closePopup()
      }
    }
    else {
      if (!e.target.closest('.popup') && !targetSliderItem) {
        closePopup()
        console.log(1111)
      }
    }
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
    popupItemSpan[2].textContent = (data.diseases).join(', ');
    popupItemHead[2].textContent = 'Diseases:'
    popupItemSpan[3].textContent = (data.parasites).join(', ');
    popupItemHead[3].textContent = 'Parasites:'

    popupBox.classList.add('popup-box_active');
    popupWrap.classList.add('popup-wrap_active')
    lockScrollBody()
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

  function lockScrollBody() {
    document.body.style.overflowY = 'hidden'
    document.body.classList.add('body_bg')
  }
  function unlockScrollBody() {
    document.body.style = ''
    document.body.classList.remove('body_bg')
  }

  function closePopup() {
    unlockScrollBody()
    popupBox.classList.remove('popup-box_active');
    popupWrap.classList.remove('popup-wrap_active')
    cleareDataPopup()
  }

  function defineCard(target) {
    let sliderItem = target.closest('.slider__item');
    let friendsItem = target.closest('.friends__item');

    if (sliderItem) openPopup(newCards[sliderItem.dataset.name])
    if (friendsItem) openPopup(newCards[friendsItem.dataset.name])
  }

})()

