import css from './style.css'
import u from '../../utils.js'

const limitswitch = function (rootElement, router, ctrlConfig, projectConfig) {
  let timer1
  let timer2

  const child = u.div(`<div class="${css.limitswitch}"></div>`)
  rootElement.appendChild(child)

  const signal = () => {
    clearTimeout(timer1)
    clearTimeout(timer2)

    child.classList.remove(css.signalSet, css.signalOut)

    child.classList.add(css.signalSet)

    timer1 = setTimeout(() => {
      child.classList.add(css.signalOut)
    }, 16)

    timer2 = setTimeout(() => {
      child.classList.remove(css.signalSet, css.signalOut)
    }, 350)
  }

  router.on('begin', e => {
    signal()
  })
  router.on('end', e => {
    signal()
  })
}

export { limitswitch }
