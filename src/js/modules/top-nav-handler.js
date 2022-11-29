export function initTopNav() {
  const burgerBtn = document.querySelector('#header-burger')
  const toggledNav = document.querySelector('#toggled-nav')
  const overlay = document.querySelector('.overlay')

  burgerBtn.addEventListener('click', function () {
    this.classList.toggle('circle-btn--burger')
    this.classList.toggle('circle-btn--close')

    toggledNav.classList.toggle('header__nav-wrapper--open')
    overlay.classList.toggle('overlay--hide')
  })

  overlay.addEventListener('click', function () {
    burgerBtn.classList.add('circle-btn--burger')
    burgerBtn.classList.remove('circle-btn--close')

    toggledNav.classList.remove('header__nav-wrapper--open')
    overlay.classList.add('overlay--hide')
  })
}
