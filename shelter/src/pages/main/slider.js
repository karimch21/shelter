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
  generateNextSliderItem()

  const sliders = document.querySelectorAll('.slider');
  if (sliders.length > 1) sliders[0].remove()
  for (let slider of sliders) {
    slider.classList.remove('slider_show-next')
    slider.classList.remove('slider_show-prev')
    slider.classList.remove('sldier_hide-next')
    slider.classList.add('sldier_hide-prev')
  }

  sliderItemsBox.appendChild(createNewSliderItems())
}
function clickBtnPrevHandler() {
  const sliders = document.querySelectorAll('.slider');
  if (sliders.length > 1) sliders[sliders.length - 1].remove()
  for (let slider of sliders) {
    slider.classList.remove('slider_show-prev')
    slider.classList.remove('sldier_hide-prev')
    slider.classList.remove('.slider_show-next')
    slider.classList.add('sldier_hide-next')
  }

  sliderItemsBox.prepend(createNewPrevSliderItems())

}

function createNewSliderItems() {
  let c = document.createDocumentFragment()
  let a = document.createElement('div');
  a.classList.add('slider', 'friends__slider', 'slider_show-next', 'slider_delay')
  let items = `

  <div class="slider__item friends__slider-item">
    <div class="slider__img-box">
      <img src="https://avatars.dzeninfra.ru/get-zen_doc/1528313/pub_5e4bc2106948c51ea07b55c8_5e4bc273f2bc6f629aed87c5/scale_1200" alt="" class="slider__img friends__slider-img">
    </div>
    <div class="slider__content friends__slider-content">
      <div class="slider__title friends__slider-title">
        Katrine
      </div>
      <a href="#" class="friends__slider-link">
        Learn more
      </a>
    </div>
  </div>

  <div class="slider__item friends__slider-item">
    <div class="slider__img-box">
      <img src="https://img.kanal-o.ru/img/2020-03-02/fmt_89_024_shutterstock_1224903712_2.jpg" alt="" class="slider__img friends__slider-img">
    </div>
    <div class="slider__content friends__slider-content">
      <div class="slider__title friends__slider-title">
        Jennifer
      </div>
      <a href="#" class="friends__slider-link">
        Learn more
      </a>
    </div>
  </div>

  <div class="slider__item friends__slider-item">
    <div class="slider__img-box">
      <img src="https://img.kanal-o.ru/img/2020-03-02/fmt_89_024_shutterstock_1224903712_2.jpg" alt="" class="slider__img friends__slider-img">
    </div>
    <div class="slider__content friends__slider-content">
      <div class="slider__title friends__slider-title">
        Woody
      </div>
      <a href="#" class="friends__slider-link">
        Learn more
      </a>
    </div>
  </div>
`
  a.innerHTML = items;
  c.appendChild(a)
  return c
}
function createNewPrevSliderItems() {
  let c = document.createDocumentFragment()
  let a = document.createElement('div');
  a.classList.add('slider', 'friends__slider', 'slider_show-prev', 'slider_delay')
  let items = `

  <div class="slider__item friends__slider-item">
    <div class="slider__img-box">
    1
      <img src="https://avatars.dzeninfra.ru/get-zen_doc/1528313/pub_5e4bc2106948c51ea07b55c8_5e4bc273f2bc6f629aed87c5/scale_1200" alt="" class="slider__img friends__slider-img">
    </div>
    <div class="slider__content friends__slider-content">
      <div class="slider__title friends__slider-title">
        Katrine
      </div>
      <a href="#" class="friends__slider-link">
        Learn more
      </a>
    </div>
  </div>

  <div class="slider__item friends__slider-item">
    <div class="slider__img-box">
      <img src="https://img.kanal-o.ru/img/2020-03-02/fmt_89_024_shutterstock_1224903712_2.jpg" alt="" class="slider__img friends__slider-img">
    </div>
    <div class="slider__content friends__slider-content">
      <div class="slider__title friends__slider-title">
        Jennifer
      </div>
      <a href="#" class="friends__slider-link">
        Learn more
      </a>
    </div>
  </div>

  <div class="slider__item friends__slider-item">
    <div class="slider__img-box">
      <img src="https://img.kanal-o.ru/img/2020-03-02/fmt_89_024_shutterstock_1224903712_2.jpg" alt="" class="slider__img friends__slider-img">
    </div>
    <div class="slider__content friends__slider-content">
      <div class="slider__title friends__slider-title">
        Woody
      </div>
      <a href="#" class="friends__slider-link">
        Learn more
      </a>
    </div>
  </div>
`
  a.innerHTML = items;
  c.appendChild(a)
  return c
}

function getRandomNum(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

function checkAmountSlides() {
  const currentWidthWindow = document.documentElement.clientWidth;
  if (currentWidthWindow > 1050) {
    return 3
  }
  else if (currentWidthWindow <= 1050 && currentWidthWindow > 600) {
    console.log(2, 'item')
    return 2
  }
  console.log(1, 'item')
  return 1
}

function generateNextSliderItem() {
  let i = 0;
  let amountSlide = checkAmountSlides();
  slidesPrevName = JSON.parse(JSON.stringify(slidesCurrName))

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
    // console.log('next', slidesNextName)
    prevSlides = JSON.parse(JSON.stringify(currSlides))
    currSlides = JSON.parse(JSON.stringify(nextSlides))
    slidesPrevName = JSON.parse(JSON.stringify(slidesCurrName))
    slidesCurrName = JSON.parse(JSON.stringify(slidesNextName))
    // console.log('prev', slidesPrevName)
    nextSlides = []
    slidesNextName = []
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
  console.log(slidesCurrName)
  console.log(currSlides)
}