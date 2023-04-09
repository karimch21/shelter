import cards from '../../assets/js/bdCard';

const dataFrinedsItem = {
  one: [],
  second: [],
  third: []
}

window.addEventListener('load', loadWindowHandler);
window.addEventListener('resize', resizeWindowHandler);

function loadWindowHandler() {
  loadDataFriendsItem()
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



