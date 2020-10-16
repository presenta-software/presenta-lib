import css from './style.css'
import u from '../../utils.js'

const debug = function (_el, _config) {
  const el = u.select(_el)

  const child = u.div(`<div class="${css.debug}">
    <svg preserveAspectRatio="none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="150" fill="var(--forecolor)"/>
      <rect x="50" width="50" height="150" fill="var(--backcolor)"/>
      <rect x="100" width="50" height="150" fill="var(--accentcolor)"/>
      <rect x="150" width="50" height="150" fill="var(--otheraccentcolor)"/>

      <rect y="182" width="50" height="18" fill="var(--otheraccentcolor)"/>
      <rect x="50" y="182" width="50" height="18" fill="var(--accentcolor)"/>
      <rect x="100" y="182" width="50" height="18" fill="var(--backcolor)"/>
      <rect x="150" y="182" width="50" height="18" fill="var(--forecolor)"/>

      <rect y="150" width="200" height="32" fill="var(--backcolor)"/>
      <text fill="var(--forecolor)" xml:space="preserve" style="white-space: pre" font-family="var(--fontHeading)" font-size="12" letter-spacing="0em"><tspan x="3" y="170.102">fontHeading</tspan></text>
      <text fill="var(--forecolor)" xml:space="preserve" style="white-space: pre" font-family="var(--fontText)" font-size="12" letter-spacing="0em"><tspan x="102" y="170.102">fontText</tspan></text>
    </svg>
  </div>`)

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)
}

export { debug }
