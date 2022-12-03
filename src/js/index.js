import windowWidth from './variables'

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'

Swiper.use([Navigation, Pagination])

import '../styles/style.scss'

import { initTopNav } from './modules/top-nav-handler'
import { initHiddenText } from './modules/show-more'

initTopNav()

window.addEventListener('load', initHiddenText)

if (windowWidth < 580) {
  if (document.querySelector('.repair__slider')) {
    const brandsSwiper = new Swiper('.repair__slider', {
      slidesPerView: 'auto',
      pagination: {
        el: '.repair__pagination',
        type: 'bullets',
        bulletClass: 'repair__bullet',
        bulletActiveClass: 'repair__bullet--active'
      },
      spaceBetween: 16
    })
  }

  if (document.querySelector('.types__slider')) {
    const brandsSwiper = new Swiper('.types__slider', {
      slidesPerView: 'auto',
      pagination: {
        el: '.types__pagination',
        type: 'bullets',
        bulletClass: 'types__bullet',
        bulletActiveClass: 'types__bullet--active'
      },
      spaceBetween: 16
    })
  }
}
