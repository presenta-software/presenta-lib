import './transitions/horizontal-slide/global.scss'
import './transitions/vertical-in/global.scss'

const transition = wrapper => {
  const functor = function (wrapper) {
    this.clear = prefix => {
      wrapper.classList.remove(prefix)
      return this
    }

    this.start = prefix => {
      wrapper.classList.add(prefix,
        'p-scene-enter-transition',
        'p-scene-enter-start'
      )

      setTimeout(() => {
        wrapper.classList.add('p-scene-enter-end')
        wrapper.classList.remove('p-scene-enter-start')
      })
      return this
    }

    this.end = prefix => {
      wrapper.classList.remove(
        'p-scene-enter-transition',
        'p-scene-enter-end'
      )
      wrapper.classList.add(prefix,
        'p-scene-leave-transition',
        'p-scene-leave-start'
      )
      setTimeout(() => {
        wrapper.classList.add('p-scene-leave-end')
        wrapper.classList.remove('p-scene-leave-start')
      })
      return this
    }
  }

  return new functor(wrapper)
}

export { transition }
