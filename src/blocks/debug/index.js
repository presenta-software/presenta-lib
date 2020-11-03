import css from './style.css'
import u from '../../utils.js'

const debug = function (el, config) {
  config._sceneConfig._steps.push(1)

  const child = u.div(`<div class="${css.debug}">
    <svg preserveAspectRatio="none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <g class="sstep" data-order="3">
        <rect width="50" height="150" fill="var(--colorFore)"/>
        <rect x="50" width="50" height="150" fill="var(--colorBack)"/>
        <rect x="100" width="50" height="150" fill="var(--colorAccent)"/>
        <rect x="150" width="50" height="150" fill="var(--colorAlt)"/>
      </g>

      <g class="sstep" data-order="2">
        <rect y="150" width="200" height="32" fill="var(--colorBack)"/>
        <text fill="var(--colorFore)" xml:space="preserve" style="white-space: pre" font-family="var(--fontHeading)" font-size="12" letter-spacing="0em"><tspan x="3" y="170.102">fontHeading</tspan></text>
        <text fill="var(--colorFore)" xml:space="preserve" style="white-space: pre" font-family="var(--fontText)" font-size="12" letter-spacing="0em"><tspan x="102" y="170.102">fontText</tspan></text>
      </g>    

      <g class="sstep" data-order="1">
        <rect y="182" width="50" height="18" fill="var(--colorAlt)"/>
        <rect x="50" y="182" width="50" height="18" fill="var(--colorAccent)"/>
        <rect x="100" y="182" width="50" height="18" fill="var(--colorBack)"/>
        <rect x="150" y="182" width="50" height="18" fill="var(--colorFore)"/>
      </g>

    </svg>
  </div>`)

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)
}

export { debug }
