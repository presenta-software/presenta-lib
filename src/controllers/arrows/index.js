import css from './style.css'
import u from '../../utils.js'

u.addProp([
  'arrowsOpacity',
  'arrowsVerticalPosition',
  'arrowsHorizontalPosition',
  'arrowsPadding'
])

const arrows = function (rootElement, router, ctrlConfig, projectConfig) {
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

  document.addEventListener('mousemove', e => {
    scheduleForHide()
  })

  router.on('indexChanged', e => {
    console.log(e)
    left.style.visibility = 'visible'
    right.style.visibility = 'visible'
    if (e.isFirst) left.style.visibility = 'hidden'
    if (e.isLast && e.totalSteps === e.currentStep) right.style.visibility = 'hidden'
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
