import css from './style.css'
import u from '../../utils.js'

const arrows = function (rootElement, router, config) {
  let timer = null

  const child = u.div(`<div class="${css.arrows}"></div>`)

  const left = u.div(`<div class="${css.left}"><div class="${css.ui}"></div></div>`)
  child.appendChild(left)

  const right = u.div(`<div class="${css.right}"><div class="${css.ui}"></div></div>`)
  child.appendChild(right)

  rootElement.appendChild(child)

  left.addEventListener('click', e => {
    router.prev()
    scheduleForHide()
  })

  right.addEventListener('click', e => {
    router.next()
    scheduleForHide()
  })

  child.addEventListener('mousemove', e => {
    scheduleForHide()
  })

  router.on('indexChanged', e => {
    left.style.visibility = 'visible'
    right.style.visibility = 'visible'
    if (e.isFirst) left.style.visibility = 'hidden'
    if (e.isLast) right.style.visibility = 'hidden'
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
