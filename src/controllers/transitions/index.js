import './globals/fadeIn.scss'
import './globals/hSlide.scss'
import './globals/vSlide.scss'
import './globals/slideOver.scss'

const presets = ['fadeIn', 'hSlide', 'vSlide', 'slideOver']

/*
transitions: 'fadeIn'

transitions:{
  preset: 'fadeIn'
}
*/

const transitions = function (rootElement, router, ctrlConfig, projectConfig) {
  if (projectConfig.mode !== 'present') return false
  const preset = typeof ctrlConfig === 'object' ? ctrlConfig.preset : ctrlConfig
  if (presets.indexOf(preset) >= 0) projectConfig._root.classList.add(`transition__${preset}`)
}

export { transitions }
