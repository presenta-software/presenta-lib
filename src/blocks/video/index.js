import css from './style.css'
import u from '../../utils.js'

const video = function (el, config) {
  const previewMode = config._mode === 'preview'
  const presentMode = config._mode === 'present'

  const poster = config.poster ? `poster=${config.poster}` : ''
  const loop = config.loop ? 'loop' : ''
  const muted = config.muted ? 'muted' : ''
  const autoplay = config.autoplay && presentMode ? 'autoplay' : ''
  const src = config.url ? `src=${config.url}` : ''

  const child = u.div(`<div class="${css.video}" id="evt_trg_uid_block_video_${config._index}">
    <video ${poster} ${src} ${loop} ${autoplay} ${muted}></video>
  </div>`)

  this.beforeDestroy = () => {
    config._rootElement.removeEventListener('keyup', setKeyListener)
    child.removeEventListener('click', toggleVideo)
  }

  el.appendChild(child)

  let video
  let isPlaying = config.autoplay
  const toggleVideo = (e) => {
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
    if (e.key === 'r') {
      if (video) {
        video.currentTime = 0
      }
    }
    if (e.key === 'm') {
      if (video) {
        video.volume = !video.volume ? 1 : 0
      }
    }
    if (e.key === '+') {
      if (video) {
        video.volume += 0.1
      }
    }
    if (e.key === '-') {
      if (video) {
        video.volume -= -0.1
      }
    }
  }

  if (presentMode) {
    config._rootElement.addEventListener('keyup', setKeyListener)
    child.addEventListener('click', toggleVideo) // was child
  }
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

video.init = () => {
  u.addProp(['videoSize', 'videoPosition'])
  if (u.io.addPreload) u.io.addPreload({ type: 'video', field: 'url', as: 'video' })
  if (u.io.addBaseurl) u.io.addBaseurl({ type: 'video', field: 'url' })
}

u.addBlockMainKey('video', 'url')

export { video }
