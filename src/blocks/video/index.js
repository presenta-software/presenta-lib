import css from './style.css'
import u from '../../utils.js'

//

const video = function (el, _config, rootElement) {
  const defsize = _config.size || 'cover'
  const sizecmd = 'object-fit:' + defsize + ';'

  const poster = _config.poster ? `poster=${_config.poster}` : ''
  const loop = _config.loop ? 'loop' : ''
  const autoplay = _config.autoplay ? 'autoplay' : ''
  const src = _config.url ? `src=${_config.url}` : ''

  const child = u.div(`<div class="${css.video}">
    <video style="${sizecmd}" ${poster} ${src} ${loop} ${autoplay}></video>
  </div>`)

  this.beforeDestroy = () => {
    rootElement.removeEventListener('keyup', setKeyListener)
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)

  let video
  let isPlaying = _config.autoplay
  const toggleVideo = () => {
    if (!video) video = child.querySelector('video')
    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    isPlaying = !isPlaying
  }

  const setKeyListener = e => {
    if (e.key === ' ') {
      toggleVideo()
      e.stopPropagation()
      e.preventDefault()
    }
  }
  rootElement.addEventListener('keyup', setKeyListener)
}

/*
prevent body scroll
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
*/

export { video }
