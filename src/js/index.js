import windowWidth from './variables'

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'

Swiper.use([Navigation, Pagination])

import '../styles/style.scss'

import { initTopNav } from './modules/top-nav-handler'
import { initHiddenText } from './modules/show-more'
import { initPopupsBtns } from './modules/open-popup'

initTopNav()
initPopupsBtns()

window.addEventListener('load', initHiddenText)

const getSwiperConfig = (prefix) => ({
  slidesPerView: 'auto',
  pagination: {
    el: `.${prefix}__pagination`,
    type: 'bullets',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active'
  },
  spaceBetween: 16
})

if (windowWidth < 580) {
  if (document.querySelector('.repair__slider')) {
    const brandsSwiper = new Swiper(
      '.repair__slider',
      getSwiperConfig('repair')
    )
  }

  if (document.querySelector('.types__slider')) {
    const typesSwiper = new Swiper('.types__slider', getSwiperConfig('types'))
  }
}

if (windowWidth < 768) {
  if (document.querySelector('.price__slider')) {
    const priceSlider = new Swiper('.price__slider', getSwiperConfig('price'))
  }
}
