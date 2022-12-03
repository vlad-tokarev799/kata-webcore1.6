import windowWidth from '../variables'

export function initHiddenText() {
  const textElems = [...document.querySelectorAll('.show-more')]

  const arrOfInitTexts = textElems.map((elem) => new HiddenText(elem))
}

class HiddenText {
  constructor(el) {
    this.el = el
    this.text = el.querySelector('.show-more__content')
    this.height = this.text.clientHeight
    this.button = el.querySelector('.show-more__button')

    const minWidth = Number(el.dataset.minWidth)

    if (!minWidth || minWidth < windowWidth) {
      el.classList.add('show-more--init')

      this.text.style.height = `${this.height}px`
      this.button.addEventListener('click', this.toggle)

      // el.append(this.#createButton())
      this.hide()
    }
  }

  #createButton() {
    const button = document.createElement('button')
    button.classList.add('show-more__button')
    button.textContent = 'Читать далее'

    button.addEventListener('click', this.toggle)

    this.button = button

    return button
  }

  toggle = () => {
    this.text.classList.contains('show-more__content--hidden')
      ? this.show()
      : this.hide()
  }

  hide = () => {
    this.text.classList.add('show-more__content--hidden')
    this.button.classList.remove('show-more__button--open')
  }

  show = () => {
    this.text.classList.remove('show-more__content--hidden')
    this.button.classList.add('show-more__button--open')
  }
}
