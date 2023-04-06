import cards from '../../assets/js/bdCard'

const btnNext = document.querySelector('.friends__slider-btn-next')
const btnPrev = document.querySelector('.friends__slider-btn-prev')
const sliderItemsBox = document.querySelector('.slider-box');

btnNext.addEventListener('click', clickBtnNextHandler);
btnPrev.addEventListener('click', clickBtnPrevHandler);

function clickBtnNextHandler() {
  const sliders = document.querySelectorAll('.slider');
  if (sliders.length > 1) sliders[0].remove()
  for (let slider of sliders) {
    slider.classList.remove('slider_show-next')
    slider.classList.remove('slider_show-prev')
    slider.classList.remove('sldier_hide-next')
    slider.classList.add('sldier_hide-prev')
  }

  appendSliderItems(createNewSliderItems(), sliderItemsBox)
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

function getRandomNum(max, min) {
  return Math.round(Math.random() * (max - min))
}

function appendSliderItems(htmlElement, place) {
  place.appendChild(htmlElement)
}