import cards from '../../assets/js/bdCard'

const btnNext = document.querySelector('.friends__slider-btn-next')
const btnPrev = document.querySelector('.friends__slider-btn-prev')
const sliderItemsBox = document.querySelector('.slider-box');
let currSlides = []
let slidesCurrName = [];
let slidesNextName = [];
let slidesPrevName = [];
let nextSlides = [];
let prevSlides = [];
const breakpointsSlider = {
  '1280': 3,
  '1050': 2,
  '600': 1
}
const dataSliderItem = JSON.parse(JSON.stringify(cards))

btnNext.addEventListener('click', clickBtnNextHandler);
btnPrev.addEventListener('click', clickBtnPrevHandler);

window.addEventListener('load', () => {
  generateCurrentSliderItem()
  console.log(cards)
})
window.addEventListener('resize', () => {

})

function clickBtnNextHandler() {
  console.log(`
  `)
  console.log('--------NEXT-------')

  console.log('NEXT111', 'next -', nextSlides, 'curr - ', currSlides, 'prev - ', prevSlides)
  console.log('--------NEXT-------')
  console.log(`
  `)

  let sliders = document.querySelectorAll('.slider');
  if (sliders.length === 2 && nextSlides.length > 0) {
    sliders[sliders.length - 1].remove()
    sliders = document.querySelectorAll('.slider');
    console.log(77777777)
  }
  generateNextSliderItem()

  if (sliders.length > 1) {
    console.log('0', 5555)
    sliders[0].remove()
  }

  for (let slide of sliders) {
    slide.classList.remove('slider_hide-next')
    slide.classList.remove('slider_show-prev')
    slide.classList.remove('slider_show-next')
    slide.classList.add('slider_hide-prev')
  }


  sliderItemsBox.appendChild(createNextSlides());
}

function clickBtnPrevHandler() {

  console.log(`
  `)
  console.log('--------PREV-------')

  console.log('PREV111', 'next -', nextSlides, 'curr - ', currSlides, 'prev - ', prevSlides)
  console.log('--------PREV-------')
  console.log(`
  `)

  let sliders = document.querySelectorAll('.slider');
  if (sliders.length === 2 && prevSlides.length > 0) {
    sliders[0].remove()
    sliders = document.querySelectorAll('.slider');
    console.log(77777777)
  }
  generatePrevSliderItem()

  if (sliders.length > 1) {
    console.log('0', 5555)
    sliders[sliders.length - 1].remove()
  }

  for (let slide of sliders) {
    slide.classList.remove('slider_hide-next')
    slide.classList.remove('slider_show-prev')
    slide.classList.remove('slider_show-next')
    slide.classList.add('slider_hide-next')
  }


  sliderItemsBox.prepend(createPrevSlides());
}


function createSlides({ name, img }) {
  let slide = document.createElement('div');
  let slideImgBox = document.createElement('div');
  let slideImg = document.createElement('img');
  let slideContent = document.createElement('div')
  let slideTitle = document.createElement('div');
  let slideLink = document.createElement('a')

  slide.dataset.name = name;
  slide.classList.add('slider__item', 'friends__slider-item')
  slideImgBox.classList.add('slider__img-box')
  slideImg.classList.add('slider__img', 'friends__slider-img')
  slideContent.classList.add('slider__content', 'friends__slider-content')
  slideTitle.classList.add('slider__title', 'friends__slider-title')
  slideLink.classList.add('friends__slider-link')

  slideTitle.textContent = name;
  slideImg.src = img;
  slideLink.textContent = 'Learn more'

  slide.appendChild(slideImgBox)
  slideImgBox.appendChild(slideImg)
  slideContent.appendChild(slideTitle)
  slideContent.appendChild(slideLink)
  slide.appendChild(slideContent)

  return slide;
}

function createNextSlides() {
  let slider = document.createElement('div');
  slider.classList.add('slider', 'friends__slider', 'slider_show-next', 'slider_delay')

  for (let i = 0; i < currSlides.length; i++) {
    let slide = createSlides(currSlides[i]);
    slider.appendChild(slide);
  }
  console.log(11111111, currSlides)
  return slider
}
function createPrevSlides() {
  let slider = document.createElement('div');
  slider.classList.add('slider', 'friends__slider', 'slider_show-prev', 'slider_delay')

  for (let i = 0; i < currSlides.length; i++) {
    let slide = createSlides(currSlides[i]);
    slider.appendChild(slide);
  }

  return slider
}

function getRandomNum(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

function checkAmountSlides() {
  const currentWidthWindow = document.documentElement.clientWidth;
  if (currentWidthWindow > 1085) {
    return 3
  }
  else if (currentWidthWindow <= 1084 && currentWidthWindow > 600) {
    console.log(2, 'item')
    return 2
  }
  console.log(1, 'item')
  return 1
}

function generateNextSliderItem() {
  // нужна проверка на налчие в массиве next, если есть, то они становится curr, а next очищается и карточки не генерируются 

  let i = 0;
  let amountSlide = checkAmountSlides();
  slidesPrevName = JSON.parse(JSON.stringify(slidesCurrName))
  prevSlides = JSON.parse(JSON.stringify(currSlides))

  if (slidesNextName.length > 0) {
    slidesCurrName = JSON.parse(JSON.stringify(slidesNextName))
    currSlides = JSON.parse(JSON.stringify(nextSlides))
    console.log(slidesCurrName, currSlides, slidesNextName, 1234)
    slidesNextName = []
    nextSlides = []
    console.log(88888888)
    return
  }

  while (i < amountSlide) {
    let randomNum = getRandomNum(0, cards.length - 1);
    if (!slidesCurrName.includes(cards[randomNum].name) && !slidesNextName.includes(cards[randomNum].name && !slidesPrevName.includes(cards[randomNum].name))) {
      if (!slidesNextName.includes(cards[randomNum].name)) {
        slidesNextName.push(cards[randomNum].name)
        nextSlides.push(cards[randomNum])
        i++
      }
    }
  }

  if (i === amountSlide) {
    console.log('next, next-btn', slidesNextName, nextSlides)
    prevSlides = JSON.parse(JSON.stringify(currSlides))
    currSlides = JSON.parse(JSON.stringify(nextSlides))
    slidesPrevName = JSON.parse(JSON.stringify(slidesCurrName))
    slidesCurrName = JSON.parse(JSON.stringify(slidesNextName))
    console.log('prev, next-btn', slidesPrevName)
    nextSlides = []
    slidesNextName = []
  }
}

// if (nextSlides.length > 0) sliderItemsBox.prepend(createPrevSlides())
//   if (sliders.length > 1 && nextSlides.length > 0 && prevSlides.length > 0) {
//     sliders[sliders.length - 1].remove()
//   }

function generatePrevSliderItem() {
  // нужна проверка на налчие в массиве prev, если есть, то они становится curr, а prev очищается и карточки не генерируются 
  const sliders = document.querySelectorAll('.slider');
  let i = 0;
  let amountSlide = checkAmountSlides();
  slidesNextName = JSON.parse(JSON.stringify(slidesCurrName))
  nextSlides = JSON.parse(JSON.stringify(currSlides))

  if (slidesPrevName.length > 0) {
    currSlides = JSON.parse(JSON.stringify(prevSlides))
    slidesCurrName = JSON.parse(JSON.stringify(slidesPrevName));
    console.log('curr, prev-btn', slidesCurrName)
    slidesPrevName = []
    prevSlides = []
    console.log(22222222)
    return
  }

  while (i < amountSlide) {
    let randomNum = getRandomNum(0, cards.length - 1);
    if (!slidesCurrName.includes(cards[randomNum].name) && !slidesNextName.includes(cards[randomNum].name && !slidesPrevName.includes(cards[randomNum].name))) {
      if (!slidesPrevName.includes(cards[randomNum].name)) {



        slidesPrevName.push(cards[randomNum].name)
        prevSlides.push(cards[randomNum])


        i++
      }
    }
  }

  if (i === amountSlide) {

    console.log('prev, prev-btn', slidesPrevName)
    nextSlides = JSON.parse(JSON.stringify(currSlides))
    currSlides = JSON.parse(JSON.stringify(prevSlides))
    slidesNextName = JSON.parse(JSON.stringify(slidesCurrName))
    slidesCurrName = JSON.parse(JSON.stringify(slidesPrevName))
    console.log('next, prev-btn', slidesNextName)
    prevSlides = []
    slidesPrevName = []

  }
}

function generateCurrentSliderItem() {
  let i = 0;
  let amountSlide = checkAmountSlides();
  while (i < amountSlide) {
    let randomNum = getRandomNum(0, cards.length - 1);
    if (!slidesCurrName.includes(cards[randomNum].name)) {
      slidesCurrName.push(cards[randomNum].name)
      currSlides.push(cards[randomNum])
      i++
    }
  }
  let slider = document.createElement('div');
  slider.classList.add('slider', 'friends__slider')

  for (let i = 0; i < currSlides.length; i++) {
    let slide = createSlides(currSlides[i]);
    slider.appendChild(slide);
  }
  console.log(11111111, currSlides)
  sliderItemsBox.appendChild(slider)
  console.log(slidesCurrName, 'currName')
  console.log(currSlides)
}