export function initPopupsBtns() {
  const modals = [...document.querySelectorAll('.modal')]
  const modalsIds = modals.map((modal) => `#${modal.getAttribute('id')}`)
  const closeBtns = document.querySelectorAll('.modal__close-btn')
  const overlay = document.querySelector('.overlay')

  let openModalBtns = []

  closeBtns.forEach((btn) => btn.addEventListener('click', closeAllModals))
  overlay.addEventListener('click', closeAllModals)

  modalsIds.forEach((id) => {
    openModalBtns = [
      ...openModalBtns,
      ...document.querySelectorAll(`[data-modal="${id}"]`)
    ]
  })

  openModalBtns.forEach((btn) =>
    btn.addEventListener('click', function () {
      document.querySelector(this.dataset.modal).classList.add('modal--open')
      overlay.classList.add('overlay--modal')
      overlay.classList.remove('overlay--hide')

      document.body.classList.add('block-scroll')
    })
  )

  function closeAllModals() {
    modals.forEach((modal) => modal.classList.remove('modal--open'))
    overlay.classList.add('overlay--hide')
    overlay.classList.remove('overlay--modal')

    document.body.classList.remove('block-scroll')
  }
}
