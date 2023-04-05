import cards from '../../assets/js/bdCard'

console.log(cards)
const btnNext = document.querySelector('.friends__slider-btn-next')
const btnPrev = document.querySelector('.friends__slider-btn-prev')
const sliderItems = document.querySelectorAll('.slider__item ');
const sliderItemsWrap = document.querySelector('.slider-box');

let count = 0;
let visibleSliderItems = 3;

btnNext.addEventListener('click', clickBtnNextHandler);
btnPrev.addEventListener('click', clickBtnPrevHandler);

function clickBtnNextHandler() {
  const sliders = document.querySelectorAll('.slider');
  const randomSrcImg = getRandomNum(cards.length - 1, 0)
  count += 1;
  // console.log(count)
  const sliderItem = sliderItems[count];
  if (count === sliderItems.length - 1) count = -1

  if (sliders.length > 1) sliders[0].remove()

  for (let slider of sliders) {
    slider.classList.remove('slider_show')
    slider.classList.add('sldier_hide')

  }
  console.log()
  sliderItemsWrap.appendChild(createNewSliderItems());


}

function createNewSliderItems() {
  let c = document.createDocumentFragment()
  let a = document.createElement('div');
  a.classList.add('slider', 'friends__slider', 'slider_show', 'slider_delay')
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

function clickBtnPrevHandler() { }

function getRandomNum(max, min) {
  return Math.round(Math.random() * (max - min))
}