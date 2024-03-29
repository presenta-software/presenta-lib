import steps from './steps'
import jump from './jump'
import noresize from './noresize'
import colors from './colors'
import fonts from './fonts'
import styles from './styles'
import paddings from './paddings'
import autoplay from './autoplay'
import coords from './coords'
import reveal from './reveal'
import link from './link'
import enters from './enters'
import showif from './showif'
import hidden from './hidden'

const modules = {
  coords,
  steps,
  jump,
  noresize,
  colors,
  fonts,
  styles,
  paddings,
  autoplay,
  reveal,
  enters,
  link,
  showif,
  hidden
}

const add = (type, module, override) => {
  if (!override && modules[type]) {
    return console.warn(`module type ${type} already defined`)
  }
  if (override && modules[type]) {
    console.warn(`module type ${type} was overriden`)
  }
  modules[type] = module
}

export { modules, add }
