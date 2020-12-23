import './globals.css'
import css from './style.css'
import u from '../../utils.js'

import fullscreen from './icons/maximize-2.svg'
import twitter from './icons/twitter.svg'
import facebook from './icons/facebook.svg'
import github from './icons/github.svg'
import linkedin from './icons/linkedin.svg'
import home from './icons/home.svg'

u.addProp([
  'minitoolsPadding',
  'minitoolsInnerPadding',
  'minitoolsBackColor',
  'minitoolsColor',
  'minitoolsBorder',
  'minitoolsBorderRadius',
  'minitoolsFlexAlign',
  'minitoolsFlexJustify'
])
u.addGlob(['minitoolsPosition', 'minitoolsDirection'])

const options = {
  fullscreen: {
    active: true,
    icon: fullscreen,
    action: () => (console.log('clicked'))
  },
  twitter: {
    active: false,
    icon: twitter
  },
  facebook: {
    active: false,
    icon: facebook
  },
  github: {
    active: false,
    icon: github
  },
  linkedin: {
    active: false,
    icon: linkedin
  },
  home: {
    active: false,
    icon: home
  }
}

const minitools = function (rootElement, router, ctrlConfig, projectConfig) {
  let timer = null
  const child = u.div(`<div class="${css.minitools}"></div>`)
  const inner = u.div(`<div class="${css.inner}"></div>`)
  const content = u.div(`<div class="${css.content}"></div>`)
  inner.appendChild(content)
  child.appendChild(inner)
  rootElement.appendChild(child)

  for (const k in options) {
    const opt = options[k]
    const c = ctrlConfig[k]
    if (c || opt.active) {
      const svg = u.div(`<div class="${css.icon}" title="${k}">
        <a href="${c}" target="blank">${opt.icon}</a>
      </div>`)
      content.appendChild(svg)

      if (opt.action) {
        svg.addEventListener('click', e => {
          opt.action()
          e.preventDefault()
          e.stopPropagation()
        })
      }
    }
  }

  rootElement.parentNode.addEventListener('mousemove', e => {
    scheduleForHide()
  })
  const scheduleForHide = () => {
    clearTimeout(timer)
    child.classList.remove(css.hide)
    timer = setTimeout(() => {
      child.classList.add(css.hide)
    }, 3000)
  }
}

export { minitools }
