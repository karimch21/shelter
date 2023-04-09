import cards from '../../assets/js/bdCard';

const dataFrinedsItem = {
  one: [],
  second: [],
  third: []
}
const friendsList = document.querySelector('.friends__list');
const paginationList = document.querySelector('.pagination__list');
const btnOnePrev = document.querySelector('.pagination__link-oneprev');
const btnManyPrev = document.querySelector('.pagination__link-manyprev');
const btnOneNext = document.querySelector('.pagination__link-onenext');
const btnManyNext = document.querySelector('.pagination__link-manynext');
const managePaginationBtns = {
  onBtnsPrev() {
    btnManyPrev.classList.remove('pagination__link_disabled')
    btnOnePrev.classList.remove('pagination__link_disabled')
  },
  onBtnsNext() {
    btnOneNext.classList.remove('pagination__link_disabled')
    btnManyNext.classList.remove('pagination__link_disabled')
  },
  offBtnsPrev() {
    btnManyPrev.classList.add('pagination__link_disabled')
    btnOnePrev.classList.add('pagination__link_disabled')
  },
  offBtnsNext() {
    btnOneNext.classList.add('pagination__link_disabled')
    btnManyNext.classList.add('pagination__link_disabled')
  }
}
const elPage = document.querySelector('.pagination__num')
let page = 0;

window.addEventListener('load', loadWindowHandler);
window.addEventListener('resize', resizeWindowHandler);
paginationList.addEventListener('click', paginationBtnClickHandler);

function loadWindowHandler() {
  loadDataFriendsItem()
  appendFrinedItem()
}
function resizeWindowHandler() {
  // if (currentWidthWindow >= 769) {
  //   sortingFriendItem(6, 8, dataFrinedsItem.one)
  //   return 6
  // }
  // if (currentWidthWindow <= 768 && currentWidthWindow >= 321) {
  //   sortingFriendItem(8, 6, dataFrinedsItem.second)
  //   return 8
  // }
  // sortingFriendItem(16, 3, dataFrinedsItem.third)
  // return 16
}

function loadDataFriendsItem() {
  sortingFriendItem(6, 8, dataFrinedsItem.one)
  sortingFriendItem(8, 6, dataFrinedsItem.second)
  sortingMiniFrinedItem(16, 3, dataFrinedsItem.third)
}

function sortingFriendItem(pages, cardsItem, dataItem) {
  let i = 0;
  while (i < pages) {
    let items = []
    let itemsName = []
    let j = 0;
    while (j < cardsItem) {
      let randomNum = getRandomNum(0, cards.length - 1)
      if (!itemsName.includes(cards[randomNum].name)) {
        itemsName.push(cards[randomNum].name);
        items.push(cards[randomNum]);
        j++
      }
    }
    dataItem.push(items)
    i++;
  }
  console.log(dataFrinedsItem)
}

function sortingMiniFrinedItem(pages, cardsItem, dataItem) {
  for (let i = 0; i < pages; i++) {
    let items = [];
    let j = 0;
    while (j < cardsItem) {
      let randomNum = getRandomNum(0, cards.length - 1);
      if (dataItem.length > 0) {
        if (!items.includes(cards[randomNum]) && !(dataItem[i - 1]).includes(cards[randomNum])) {
          items.push(cards[randomNum]);
          j++
        }
      } else {
        if (!items.includes(cards[randomNum])) {
          items.push(cards[randomNum]);
          j++
        }
      }
    }
    dataItem.push(items)
  }
}

function getRandomNum(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

function getFriendsItem(page = 0) {
  let currentWidthWindow = document.documentElement.clientWidth;
  if (currentWidthWindow >= 769) {
    return dataFrinedsItem.one[page]
  }
  if (currentWidthWindow <= 768 && currentWidthWindow >= 321) {
    return dataFrinedsItem.second[page]
  }
  return dataFrinedsItem.third[page]
}

function createFriendsItem({ name, img }) {
  let friendsItem = document.createElement('div');
  let frindesImgWrap = document.createElement('div');
  let friendsImg = document.createElement('img');
  let friendsItemContent = document.createElement('div');
  let friendsItemTitle = document.createElement('div');
  let friendsItemLink = document.createElement('a');

  friendsItem.classList.add('friends__item')
  frindesImgWrap.classList.add('frindes__img-wrap')
  friendsImg.classList.add('friends__img')
  friendsItemContent.classList.add('friends__item-content')
  friendsItemTitle.classList.add('friends__item-title')
  friendsItemLink.classList.add('friends__item-link')

  friendsImg.src = img;
  friendsItemTitle.textContent = name;
  friendsItemLink.textContent = 'Learn more'

  friendsItemContent.appendChild(friendsItemTitle)
  friendsItemContent.appendChild(friendsItemLink)
  frindesImgWrap.appendChild(friendsImg)
  friendsItem.appendChild(frindesImgWrap)
  friendsItem.appendChild(friendsItemContent)
  return friendsItem;
}

function getAmountPage() {
  let currentWidthWindow = document.documentElement.clientWidth;
  if (currentWidthWindow >= 769) {
    return 6
  }
  if (currentWidthWindow <= 768 && currentWidthWindow >= 321) {
    return 8
  }
  return 16
}

function appendFrinedItem(page = 0) {
  let friendsItem = getFriendsItem(page);
  let friendsItemFragment = document.createDocumentFragment();

  for (let itemData of friendsItem) {
    let item = createFriendsItem(itemData);
    friendsItemFragment.appendChild(item);
  }
  friendsList.innerHTML = '';
  friendsList.appendChild(friendsItemFragment);
  console.log(dataFrinedsItem)
}

function paginationBtnClickHandler(e) {
  e.preventDefault()
  let paginationBtnOnePrev = e.target.closest('.pagination__link-oneprev');
  let paginationBtnManyPrev = e.target.closest('.pagination__link-manyprev');
  let paginationBtnOneNext = e.target.closest('.pagination__link-onenext');
  let paginationBtnManyNext = e.target.closest('.pagination__link-manynext');
  let pages = getAmountPage();

  if (paginationBtnOneNext) {
    if (page !== pages - 1) {
      page++;
      appendFrinedItem(page)
      managePaginationBtns.onBtnsNext()
      managePaginationBtns.onBtnsPrev()
    }
    else {
      managePaginationBtns.offBtnsNext()
      managePaginationBtns.onBtnsPrev()
    }
  }
  if (paginationBtnManyNext) {
    if (page !== pages - 1) {
      page = pages - 1;
      appendFrinedItem(page)
      managePaginationBtns.offBtnsNext()
      managePaginationBtns.onBtnsPrev()
    }
  }

  if (paginationBtnOnePrev) {
    if (page !== 0) {
      page--;
      appendFrinedItem(page)
      managePaginationBtns.offBtnsPrev()
      managePaginationBtns.onBtnsNext()
    }
    else {
      managePaginationBtns.offBtnsPrev()
      managePaginationBtns.onBtnsNext()
    }
  }
  if (paginationBtnManyPrev) {
    if (page !== 0) {
      page = 0;
      appendFrinedItem(page)
      managePaginationBtns.offBtnsPrev()
      managePaginationBtns.onBtnsNext()
    }

  }
  showCurrentPage(elPage, page)
}

function showCurrentPage(elPage, currPage) {
  currPage++;
  elPage.textContent = currPage
}


