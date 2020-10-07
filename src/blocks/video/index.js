import css from './style.css'
import u from '../../utils.js'

//

const video = function (el, config, rootElement, projectConfig) {
  const previewMode = projectConfig.mode === 'preview'
  const presentMode = projectConfig.mode === 'present'

  const poster = config.poster ? `poster=${config.poster}` : ''
  const loop = config.loop ? 'loop' : ''
  const autoplay = config.autoplay && presentMode ? 'autoplay' : ''
  const src = config.url ? `src=${config.url}` : ''

  const child = u.div(`<div class="${css.video}">
    <video ${poster} ${src} ${loop} ${autoplay}></video>
  </div>`)

  this.beforeDestroy = () => {
    rootElement.removeEventListener('keyup', setKeyListener)
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)

  let video
  let isPlaying = config.autoplay
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

  if (presentMode) rootElement.addEventListener('keyup', setKeyListener)
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
