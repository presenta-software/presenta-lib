import './style.css'

const jump = function (sceneElement, modConfig, sceneConfig) {
  const dispose = []
  const jumps = [...sceneElement.querySelectorAll('[jump]')]

  jumps.forEach(el => {
    const sceneNum = el.getAttribute('jump')
    const num = parseInt(sceneNum)

    if (num > 0) {
      const handler = e => {
        sceneConfig._router.goto(num - 1)
      }
      el.addEventListener('click', handler)

      dispose.push({ el, handler })
    }
  })

  this.destroy = () => {
    dispose.forEach(o => {
      o.el.removeEventListener('click', o.handler)
    })
  }
}

export default jump
