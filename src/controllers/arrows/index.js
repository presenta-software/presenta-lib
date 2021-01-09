import css from './style.css'
import u from '../../utils.js'

import leftArrow from './icons/arrow-left-circle.svg'
import rightArrow from './icons/arrow-right-circle.svg'
import upArrow from './icons/arrow-up-circle.svg'
import downArrow from './icons/arrow-down-circle.svg'

u.addProp([
  'arrowsOpacity',
  'arrowsVerticalPosition',
  'arrowsHorizontalPosition',
  'arrowsPadding'
])

const arrows = function (rootElement, router, ctrlConfig, projectConfig) {
  let timer = null
  let numInteraction = 0

  const vertical = ctrlConfig === 'vertical' ? css.vertical : ''

  const firstArrow = vertical ? upArrow : leftArrow
  const lastArrow = vertical ? downArrow : rightArrow

  const child = u.div(`<div class="${css.arrows} ${vertical}"></div>`)
  const inner = u.div(`<div class="${css.inner}"></div>`)

  const left = u.div(`<div id="evt_trg_ctrl_arrow_left" class="${css.left}">
    <div class="${css.ui}">${firstArrow}</div>
  </div>`)
  inner.appendChild(left)

  const right = u.div(`<div id="evt_trg_ctrl_arrow_right" class="${css.right}">
    <div class="${css.ui}">${lastArrow}</div>
  </div>`)
  inner.appendChild(right)

  child.appendChild(inner)
  rootElement.appendChild(child)

  left.addEventListener('click', e => {
    router.prev()
    scheduleForHide()
  })

  right.addEventListener('click', e => {
    router.next()
    scheduleForHide()
  })

  const setMouseMove = () => {
    numInteraction++
    if (numInteraction === 2) {
      rootElement.parentNode.addEventListener('mousemove', e => {
        scheduleForHide()
      })
    }
  }

  const changed = e => {
    setMouseMove()
    left.style.visibility = 'visible'
    right.style.visibility = 'visible'
    if (e.isFirst) left.style.visibility = 'hidden'
    if (e.isLast && e.totalSteps === e.currentStep) right.style.visibility = 'hidden'
  }

  router.on('stepChanged', e => {
    changed(e)
  })

  router.on('indexChanged', e => {
    changed(e)
  })

  router.on('inited', e => {
    changed(e)
  })

  const scheduleForHide = () => {
    clearTimeout(timer)
    child.classList.remove(css.hide)
    timer = setTimeout(() => {
      child.classList.add(css.hide)
    }, 1500)
  }
  // scheduleForHide()

  this._el = child
}

export { arrows }
