import css from './style.css'
import u from '../../../utils.js'

const arrows = function (rootElement, router, config) {
  let timer = null

  const child = u.div(`<div class="${css.arrows}">
    <div class="handleL ${css.left}"></div>
    <div class="handleR ${css.right}"></div>
  </div>`)
  rootElement.appendChild(child)

  child.querySelector('.handleL').addEventListener('click', e => {
    router.prev()
    scheduleForHide()
  })

  child.querySelector('.handleR').addEventListener('click', e => {
    router.next()
    scheduleForHide()
  })

  child.addEventListener('mousemove', e => {
    scheduleForHide()
  })

  const scheduleForHide = () => {
    clearTimeout(timer)
    child.classList.remove(css.hide)
    timer = setTimeout(() => {
      child.classList.add(css.hide)
    }, 1500)
  }
  scheduleForHide()
}

export { arrows }
